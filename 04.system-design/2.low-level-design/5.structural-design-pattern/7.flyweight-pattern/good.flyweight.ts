/*
=> GOOD DESIGN (Flyweight)::
    -   Separate:
        -   Intrinsic → Tree Style
        -   Extrinsic → Location
*/ 

// Step 1: Flyweight Interface
interface MarkerStyle{
    render(x:number,y:number):void;
}

// Step 2: Concrete Flyweight (Shared Object):
class TreeStyle implements MarkerStyle{
    constructor(
        private icon:string,
        private color:string,
        private animation: string
    ){}
    render(x: number, y: number): void {
        console.log(`Rendering tree ${this.icon} in ${this.color} at (${x},${y}) with ${this.animation}`);
    }
}
// Step 3: Flyweight factory (cache):
class MarkerStyleFactory{
    private static styles: Map<string,MarkerStyle> = new Map();

    static getTreeStyle():MarkerStyle{
        if(!this.styles.has('TREE')){
            this.styles.set('TREE',new TreeStyle('icon','Green','Bounce'));
        }
        return this.styles.get('TREE')!; 
        // here ! is Non-Null Assertion Operator that tell ts trust me it is not null
    }
}

// Step 4: Context Object (Extrinsic data):
class MapMarker{
    constructor(
        private style: MarkerStyle,
        private x: number,
        private y:number
    ){}
    render(){
        this.style.render(this.x,this.y);
    }
}

// Usage:
const markers: MapMarker[] = [];
for(let i=0; i<10000; i++){
    const treeStyle = MarkerStyleFactory.getTreeStyle();
    markers.push(
        new MapMarker(treeStyle,Math.random() * 100, Math.random() * 100)
    );
}
// Huge memory saving 🚀
/*
=> What changed here:
    -   Instead of 10,000 tree Object now we have 1 TreeStyle (shared) and 10,000 
        lightweight positions.
*/
/*
=> Real World Examples:
    - System                            Flyweight used for:
        Google Maps                     Markers
        Gaming engines                  Bullets, trees, NPC skins
        Text Editors                    Character glyphs
        UI Libraries                    Button Styles
        Browser Rendering               CSS style
        Airline Systems                 Seat layout
        Ride Apps                       Cab icons   |
*/
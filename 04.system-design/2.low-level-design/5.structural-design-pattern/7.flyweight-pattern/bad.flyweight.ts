// BAD DESIGN (Without Flyweight):
class MapMarker{
    constructor(
        public type:string,
        public icon:string,
        public color:string,
        public animation: string,
        public x: number,
        public y:number
    ){}

    render(){
        console.log(`Rendering ${this.type} at (${this.x}, ${this.y})`);
    }
}

// Usage:
const markers: MapMarker[] = [];
for(let i=0; i<10000; i++){
    markers.push(
        new MapMarker("Tree",'icon',"Green","Cource",Math.random() * 100, Math.random() * 100)
    );
}

/*
=> Problems in BAD Example:
    -   Huge Memory Usage: Repeated icon/color/type
    -   Object Explosion:   Thousands of heavy objects
    -   Slow Rendering: GC pressure
    -   Hard to scale:  More cities = more memory
    -   Redundant Data: Same tree style stores 10k times
*/
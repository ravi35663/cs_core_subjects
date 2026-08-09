// ####### Always Code slow (to learn things in deep) (Don't hurry).
/*
    -> package.json is configuration file for npm.
    -> react is a javascript library which is created by facebook developers
    -> we can create our own create-react-app using webpack and all.
*/
/*
==> Bundler : -
    -> Bundler is used to Bundle your applications which will deploy to production
    -> create-react app uses webpack bundler to deploy code into production
    -> '^2.7.8' => 'major.minor.'
    -> package-lock.json is used to store exact version of the packages (dependencies)
    -> Parcel uses babel
*/
/*
==> Transitive dependencies : 
    ->  When dependencies of module 1 is depends on other and other module have dependencies of other 
        modules and so on.. is known as transitive dependencies.
    ->  dependencies tree 
*/
/*
==> Parcel : -
    ->  Parcel is a zero configuration build tool for the web. 
        It combines a great out-of-the-box development experience with a scalable 
        architecture that can take your project from just getting started to 
        massive production application.
    
=> Things done by parcel
    -> HMR : hot module replacement (automatically run file when you save file)
    -> Dev Build
    -> Provide local server
    -> Parcel uses file watching algorithm (for HMR):- written in c++
    -> Gives you faster build because of caching (.parcel-cache kind of binary file)
    -> Parcel does image optimization
    -> Minification of files (Project files)
    -> Bundling
    -> Compressing of files
    -> Parcel is manager (Parcel use all libraries to make react fast)
    -> Consistent hashing?
    -> Code splitting
    -> Differentials bundling (to support older browser (diff. bundle for diff browser))
    -> Error handling
    -> Diagnostic
    -> Host app on Https 
    -> Tree Shaking (remove unused code for you)
    -> Create different dev and prod bundle
    -> npx parcel build index.html (building production build)
    -> Gives you only three files .js,.html and .css
    -> .parcel-cache and dist can be automatically generated
    -> not only react is making your app faster, webpack are making your app fast.
    -> Builder build all files and generated one file but if you have big app then it 
        would not considered as optimized application unless you bundle them in smaller 
        files and this process is known as code splitting/chunking/lazy loading/dynamic 
        bundling/dynamic import. 
        This is also known as logical code splitting/ bundling.

==> Build Application using Parcel:
    -> npx parcel source_file
    -> it creates dist file
    -> .parcel-cache
    -> npx means execute any package
    -> There are two kinds of dependencies in package.json 
        1) devDependencies (used only for develop and testing purpose not for production)
        2) dependencies (normal dependencies)
    "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "start":"parcel index.html",// for dev 
            "build":"parcel build index.html" // for prod
        }
    -> npm start === npm run start
    -> never run "npm build" instead run "npm run build" 

==> Babel:
    ->  Babel is open source javascript compiler.
    ->  Babel transpile the newer javascript code to older JS code so that older browser 
        can understand that.
    ->  Learn more about babel
*/
/*
==> React Element:-
    -> ReactElement ==> Javascript Object ==> Html Element (when it is rendered)
    -> ReactElement is javascript Object
    -> JSX ==> ReactElement ==> Javascript Object ==> Html Element (when it is rendered)

===> React vs ReactDOM :-
    -> React is used to create elements 
    -> ReactDOM is used to display React elements into browser
    -> JSX is way of writing javascript element
    -> JSX is not HTML inside javascript
    -> JSX is like HTML syntax  
    -> const heading = React.createElement('h1',{id:"heading"},"Hello World");
    -> Element using react
    -> const jsxHeading = <h1>Hello World</h1> (Element using jsx)
    -> above two lines are equivalent
    -> jsx is not pure javascript because browser and machine cannot understand this.
    -> jsx before going to browser, (babel) webpack transpile the code so that browser 
       can understand. 

==> JSX :-
    -> const h1 = <h1>Hello World</h1> // Valid jsx
    -> const h1 = <h1>
                    Hello World 
                  </h1> // Invalid JSX
    -> const h1 = (<h1>
                    Hello World 
                  </h1>) // Valid JSX
    -> JSX is take care of injections attacks 
    ->  Injection Attack: Injection attacks are a type of cyberAttack where attackers exploit 
        vulnerabilities in applications to insert malicious code or commands into an application's 
        input fields or other entry points. 

    -> JSX also sanitized the data and prevent 
    ->  XSS:- 
        Cross-site scripting (XSS) is a web security vulnerability that allows attackers to 
        inject malicious scripts into websites, potentially compromising user interactions 
        and data. 
        These scripts, often JavaScript, are executed by the victim's browser, enabling the 
        attacker to steal information, manipulate page content, or even impersonate users
*/
/*
==> Injection Attacks:
    ->  An injection attack happens when an attacker puts malicious input into your app, 
        and your app mistakenly executes it as a command or query.
    ->  Common types:
            ->  SQL Injection → attacker runs SQL queries in your DB.
            ->  Command Injection → attacker runs system commands.
            ->  NoSQL/LDAP Injection → attacker manipulates queries in NoSQL or directories.

==> How to Prevent:
    ->  Validate & Sanitize Input – never trust user input.
    ->  Use Parameterized Queries/Prepared Statements (instead of string concatenation).
            e.g., db.query("SELECT * FROM users WHERE id = ?", [userId]) ✅
    ->  Use ORM/Query Builders – (TypeORM, Sequelize, Mongoose).
    ->  Escape Special Characters when needed.
    ->  Least Privilege – DB users should have only required permissions.
    ->  WAF(Web Application Firewall) / Security Libraries – extra layer of protection.
*/
/*
==> Components : -
    -> Everything in react is a component.
    -> e.g. button , card ...etc
        1) Class based Components (old way of writing code )
        2) Functional Components (New way of writing code)

    -> Functional component is normal js function which return some jsx
    -> const HeadingComponent = ()=>{
            return (<h1>Functional Components</h1>)
        } // this is a react component
    -> const HeadingComponent = () => <h1>Functional Components</h1>
    -> this is how we render Components
        <HeadingComponent />;
            {HeadingComponent()};
        <HeadingComponent></HeadingComponent>;
    -> Components composition is components inside another components and so on.
    -> Always write components in Capital latter.

==> Props :-
    -> Short form of properties
    -> props are just arguments to a function
    -> const fun = ({name,age,email}) => { 
            // parameter destructuring is know as destructuring on fly.
        }

==> Config driven UI :-
    ->  on some website when we change UI depends on the locations or something
        else is know as config driven UI. UI will changed based on requirements
    ->  config comes from backend.
    ->  We have control on UI.
    ->  React say that never uses index as key. never never never.

==> Separation of Concerns (SoC) :-
    ->  Separation of Concerns (SoC) is a fundamental design principle in software 
        engineering that advocates breaking a program into distinct features or modules, 
        each module ore feature responsible for a specific concern. 
        In the context of microservices architecture, SoC is crucial for building scalable, 
        maintainable and flexible systems. 

==> Shimmer UI:-
    -> Loading card with empty data(for better user experience)
    -> Loading fake page/card till the data is load

==> React Hooks:-
    -> Hooks are normal util javascript functions which do some special works
    -> these are most useful react hooks.
    -> useState() :- used to update UI based on state of the variable.
        -> whenever a state variable is updates react re-rendered the component.
        -> React only good at DOM manipulation.

    -> useEffect()  :-
        -> Special javascript function react.
        -> useEffect(callback_function,[dependencies array]);
        -> Use effect is called after the component is rendered.
        -> first the body of that component will run then useEffect will run.
*/
/*
==> Routing in react :-
    ->  Client Side Routing : when all the pages already loaded and moving from one 
        page to another won't reload the page.

    ->  Server Side Routing : when the pages are not loaded at once. whenever we move 
        from one page to another page will be loaded and that page coming from the 
        server.(i.e. index.html, about.html ..etc)
*/
/*
==> Notes:
    -> There is two way to export module.
        -> default export (export default anything) to import anything
        -> named export (export const data=[1,2]) to import use {data}

    ->  React is fast in DOM manipulation and this is the exact issue react is solving. 
        This is why we use react and all other frameworks are trying to solving this issue.

    ->  Actual DOM :- <h1>Actual dom</h1>, <img> ...etc
    ->  Virtual DOM :- Representation of actual DOM.
        -> Virtual DOM is react-element and it will print javascript object.

    ->  Diff algorithm find out the diff between virtual DOMs (Old and new Virtual DOM) 
        and then it will render the objects. this whole process is known as reconciliation 
        or react fiber.

    ->  Finding out difference between two html element is slow but between javascript 
        object is fast. This is where the react become fast.

    ->  React keeps track of all node (react elements)

    ->  Whenever a local state (state variable) variable is changed, that particular 
        component re-rendered.

    ->  React do efficient dom manipulation, efficient rendering of components.

    ->  All react app are single page application (SPA) because only component get 
        interchanged not entire application's page.

    -> 'rendering', 'loading' and 'mounting' has same meaning.

    -> // Conditional rendering
        if(!listOfRestaurant.length){
            return <Shimmer />
        }

    ->  Learn about react-dev-tool (and why we should use it)
    ->  Every frontend has two layers
            1) UI layers
            2) Data layer

    ->  Never use hooks Conditionally, in loop, or in function.
    ->  Hooks are only used inside components.

    ->  Dependencies arrays are not mandatory in useEffect. If there is no dependencies 
        array in useEffect then useEffect run every time component is rendered.

    ->  if dependencies array is empty then useEffect only called on initial render only 
        one time.

    ->  if we provide some values in dependencies array then useEffect only called when 
        dependencies changes.
*/
/*
==> Lifting state up:
    ->  Sharing state between components.
    ->  Sometimes, you want the state of more than one components to change together. 
        To do it, remove state from all of them, move it to their closest common parent, 
        and then pass it down to them via props. This is known as lifting state up, and 
        it’s one of the most common things you will do while writing React code.

==> Props Drilling :-
    ->  Passing data from one to other components is very complex when the application is 
        very huge.
    ->  react has 1 way data flow. (parent to children) (Top to bottom)
    ->  Example:
            // Parent Component
            const dummy = "Dummy"
            <Parent>
                <Child dummy={dummy}></Child>
            </Parent>

            // Child component
            const Child = ({dummy})=>{
                return <GrandChild dummy={dummy}></ GrandChild>
            }

    ->  Here dummy need to used by GrandChild component but dummy is in Parent component. 
        Hence we are drilling dummy from parent to grandchild including child component. 
        This is known as props drilling.
    ->  This props drilling is a problem in react.
    ->  We use react context or any state management library to overcome this props 
        drilling issue.
*/
/*
==> Life Cycle methods in react:-
->  Lifecycle methods in React are used to perform specific tasks or actions at various 
    points.

   1)Initialization and Setup:
        ->  constructor → initialize state, bind handlers(Event handler).
        ->  componentDidMount → runs after first render, good for data 
            fetching/subscriptions.

    2) Updating State and Props:-
        ->  shouldComponentUpdate → controls re-render for performance.
        ->  componentDidUpdate → runs after updates, useful for side effects.

    3) Cleanup and Resource Management:
        -> componentWillUnmount → runs before removal, used for cleanup (cancel requests, clear intervals).

    4) Error Handling:
        ->  componentDidCatch → catches JS errors in child components (React 16+).

    5) Optimizing Performance:
        Optimizing lifecycle methods prevents unnecessary renders.

==> Hooks (React 16.8+)
    ->  Functional components with Hooks (mainly useEffect) replace most lifecycle methods.
    ->  useEffect can act as:
            componentDidMount → useEffect(..., [])
            componentDidUpdate → useEffect(...) (runs after every render)
            On dependency change → useEffect(..., [deps])
            componentWillUnmount → return a cleanup function inside useEffect.

## Here's a brief comparison between lifecycle methods in class components and the equivalent 
   functionality using useEffect in functional components:

==> Classed Based Components:
    class App extends React.Component{
        componentDidMount(){
            // This function is called after first render of the component in the DOM.
        }

        componentDidUpdate(prepProps,PrevState){
            // This life cycle method is called after each render of the component.
        }

        render(){
            return <div>This is App component</div>
        }
        }

==> Function Component (Modern React)
    function App(){
        useEffect(()=>{
            // This is called after first render of component in DOM.
            // call of useEffect with empty dependencies is equivalent to componentDidMount in class based comp.
            
            //this is equivalent to life cycle method componentWillUnmount
            return ()=>{
                console.log("Return a clean up function if needed);
            }
        },[]);

        useEffect(()=>{
            console.log("This useEffect hook is run after each render of the component.");
        })

        useEffect(()=>{
            console.log("This useEffect hook is called whenever someProps or someVar value changes");
        },[someProps,someVar]) 
        // You can write clean up function in reach useEffect.
        return <div>This is app component</div>
    }
*/

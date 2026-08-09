/*
==> React Router:
    ->  React Router is a standard library for routing in React applications. 
        It enables the navigation among different views or components within a React 
        application, allowing developers to build single-page applications with 
        navigation capabilities.
*/
/*
    Key Features:
    1)  Declarative Routing: 
        Define routes using JSX, making it easy to understand and manage.
    
    2)  Nested Routes: 
        Support for nested routes, allowing you to structure your route hierarchy as needed.

    3)  Dynamic Routing:
        Handle routes dynamically based on the application's state or props.

    4)  Browser and Hash Routing: 
        Support for both BrowserRouter (using HTML5 history API) and HashRouter 
        (using URL hash).
    5)  Route Parameters: Extract and use parameters from URLs.

    6) Programmatic Navigation: Navigate programmatically using hooks or higher-order components.
*/
//Setting Up Routes:

import { BrowserRouter,Link,Route, Switch } from "react-router-dom";
import About from '../../components/About';
import User from '../../components/User';

const App = ()=>{
    return (<BrowserRouter> 
        <Switch>
            <Route exact path="/about" element={About}></Route>
            <Route path='/user' element={User}></Route>
        </Switch>
    </BrowserRouter>)
}

//Linking Between Routes:

const Navigate = ()=>{
    return (<nav>
        <Link to={'/about'}>About</Link>
        <Link to={'user'}>User</Link>
    </nav>)
}

/*
    Components:
    1)  Router: BrowserRouter or HashRouter, the main component that wraps your app to 
                enable routing
    2)  Route: Defines a path and the component to render.
    3)  Switch: Renders the first child <Route> or <Redirect> that matches the location.
    4)  Link: Provides declarative, accessible navigation around the application.
    5)  NavLink: Similar to Link but with additional styling capabilities when the 
        link is active.
*/
/*
    React Router simplifies the process of handling navigation and routing in React 
    applications, enabling the creation of dynamic and responsive single-page applications.
*/
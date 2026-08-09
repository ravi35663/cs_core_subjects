import React, { lazy,Suspense, useState,useEffect } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// below is called named import
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"; 
// this is called named import
// import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error"; 
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import Tasks from "./Learning/Hooks/UseContext";
import UseCallback from "./Learning/Hooks/UseCallback";
import UseMemo from "./Learning/Hooks/UseMemo";
import UseReducer from "./Learning/Hooks/UseReducer";
import UseRef from "./Learning/Hooks/UseRef";
import HOCTasks from "./Learning/HOC/Tasks";
import ReduxExample from "./Learning/Redux/ReduxExample";
import ReduxToolKitExample from "./Learning/ReduxToolKitExample";
import CustomHook from "./Learning/custom-hooks";
import ReduxThunkExample from "./Learning/ReduxThunk/ReduxThunkExample";
// import Test from "../test";
import UseLayoutEffectExample from "./Learning/hooks/useLayoutEffect";
import Parent from "./Learning/hooks/useImperativeHandle";
// import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";
// import UserContext from "./utils/UserContext";
// use to optimized application.
// splitting
// chunking
// lazy loading
// dynamic bundling
//dynamic import
// This is also called 'on demand loading'

/*  If we add lazy loading import with any component then while loading/rendering 
    components on homes or any other component, that component with lazy loading will not 
    load unless we go to that component. The benefit of this implementation is to only 
    load those components which are on current use.
*/

// This import is not the import we are using above this is different.
const Grocery = lazy(()=> import('./components/Grocery'));
const About = lazy(()=> import('./components/About'));

// Link component is work same as anchor tag but it won't refresh the page.
const AppLayoutComponent = ()=>{
    const [userName,setUserName] = useState('');
    // Authentication
    useEffect(()=>{
        // API call to fetch user data
        const data = {
            name:"Ravi kumar"
        }
        setUserName(data.name);
    },[])

    return (
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
            <div className="app">
                {/* In header loggedInUser will be Elon must and in rest component it will Ravi Kumar */}
                {/* Context can we any level nested */}
                {/* <UserContext.Provider value={{loggedInUser:"Elon Musk",setUserName}}>
                    <Header />
                </UserContext.Provider> */} 
                    <Header />
                
                {/* Outlet used to filled path of children with parent */}
                {/* All the children routes of a particular parent is rendering because of Outlet */}
                {/* Whenever any new children Component is rendered 'Outlet' replaced by that component*/}
                <Outlet /> 
                {/* <Body /> */}
            </div>
        </UserContext.Provider>
    )
}
// used to create routes so that we can move one path to another
const BrowserRoutes = createBrowserRouter([
    {
        path:'/',
        element:<AppLayoutComponent />,
        children:[
            {
                path:'/',
                element:<Body />,
            },
            // {
            //     path:'/test',
            //     element:<Test />,
            // },
            {
                path:'/about',
                // element:<About/>,
                element:<Suspense fallback={<h1>Loading about us screen...</h1>}><About/></Suspense>
            },
            {
                path:'/contact',
                element:<ContactUs />
            },
            {
                path:'/restaurant/:resId',// dynamic routing
                element:<RestaurantMenu />

            },
            {
                path:'/grocery',
                element:<Suspense fallback={<h1>Loading Screen</h1>}> <Grocery /> </Suspense>
                /*  if we don't wrap our component in the suspense react throw error when we render 
                    the lazy loading component.This is because component rendered first and then js 
                    file build for that component.
                    The loading is only happening in the first component rendering.
                    To over comes this issue Suspense provide feature to wait rendering of the component until
                    the .js file not build for that component.
                    fallback: fallback is used to render something until that component is not rendered.
                    fallback like loading screen/ you can pass any jsx.
                    */
            },{
                // Context example
                path:'/hooks/context',
                element:<Tasks />
            },
            {
                // UseCallback example
                path:"hooks/callback",
                element: <UseCallback />
            },
            {
                path:"hooks/memo",
                element:<UseMemo />
            },
            {
                path:"hooks/reducer",
                element:<UseReducer />
            },{
                path:"hooks/ref",
                element:<UseRef />
            },
            {
                path:"hoc",
                element:<HOCTasks />
            },
            // Simple Redux
            {
                path:"redux-example",
                element:<ReduxExample />
            },
            // Redux tool kit Example
            {
                path:'redux-tool-kit-example',
                element:<ReduxToolKitExample></ReduxToolKitExample>
            },
            //Custom hook example
            {
                path:'custom-hook',
                element:<CustomHook></CustomHook>
            },
            // Redux thunk:
            {
                path:'redux-thunk',
                element: <ReduxThunkExample />
            },
            // Use layout effect:
            {
                path:'use-layout-effect',
                element: <UseLayoutEffectExample />
            },
            // Use layout effect:
            {
                path:'use-imperative-handle',
                element: <Parent />
            }
        ],
        errorElement:<Error /> // if some error occurs, this component will be rendered.
    },
])
// const BrowserRoutes = createBrowserRouter([
//     {
//         path:'/',
//         element:<AppLayoutComponent />,
//         errorElement:<Error /> // if some error occurs, this component will be rendered.
//     },
//     {
//         path:'/about',
//         element:<About/>
//     },
//     {
//         path:'/contact',
//         element:<ContactUs />
//     }
// ])
const root = ReactDOM.createRoot(document.getElementById('root'));
// RouterProvider provides routes to react so that people move to different paths
root.render(<RouterProvider router={BrowserRoutes} />);
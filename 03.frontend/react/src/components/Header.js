import { useEffect, useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images.png'
import useOnlineStatus from '../utils/Hooks/useOnlineStatus';
// import UserContext from '../utils/UserContext';
import UserContext from '../utils/UserContext';
const Header = ()=>{
    const [btnName,setBtnName] = useState('Login')

    /*
        1) Every time Header component is rendered, this use effect is called.But because of the dependencies 
           array the useEffect will executed.
        2) Dependencies arrays are not mandatory in useEffect.If there is no dependencies array in useEffect
           every time component is rendered the useEffect getting called.
        3) if dependencies array is empty then useEffect only called on initial render only one time.
        4) if we provide some values in dependencies array then useEffect only called when dependencies changes.
    */
    useEffect(()=>{
        console.log("Use Effect")
    },[])
    const onlineStatus = useOnlineStatus();
    const user = useContext(UserContext);
    console.log("User is ",user);
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
            <div className="logo-container">
                <img className="w-56" src={logo} alt="food logo"/> 
            </div>
            <div className="flex items-center">
                <ul className='flex p-4 m-4'>
                    <li className='px-4'> <Link to={'/test'}>Test</Link></li>
                    <li className='px-4'>Online Status: {onlineStatus?'✅':'🔴'}</li>
                    <li className='px-4'><Link to={'/'}>Home</Link></li>
                    <li className='px-4'><Link to={'/about'}> About Us</Link></li>
                    <li className='px-4'><Link to={'/contact'}>Contact Us</Link></li>
                    <li className='px-4'><Link to={'/grocery'}>Grocery</Link></li>
                    <li className='px-4'>Cart</li>
                    <li className='px-4'><Link to={'/hooks/callback'}>Callbacks</Link></li>
                    <li className='px-4'><Link to={'/hooks/ref'}>Ref</Link></li>
                    <li className='px-4'><Link to={'/hooks/context'}>Context</Link></li>
                    <li className='px-4'><Link to={'/hooks/reducer'}>Reducer</Link></li>
                    <li className='px-4'><Link to={'/hooks/memo'}>Memo</Link></li>
                    <li className='px-4'><Link to={'/hoc'}>HOC</Link></li>
                    <li className='px-4'><Link to={'/redux-thunk'}>Redux Thunk</Link></li>
                    <li className='px-4'> <Link to={'/custom-hook'}>Custom Hooks</Link></li>
                    <li className='px-4'> <Link to={'/use-layout-effect'}>Use Layout Effect</Link></li>
                    <li className='px-4'> <Link to={'/use-imperative-handle'}>Use Imperative Handler</Link></li>
                    
                    <li className='px-4'>Cart</li>
                    
                    <button className='login-btn' onClick={()=> setBtnName(btnName == 'Login'?'Logout':'Login')}>{btnName}</button>
                    <li className='px-4 font-bold'>{user.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
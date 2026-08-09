import axios from 'axios';
jest.mock('axios');
//Finding Async Elements with FindBy
import { screen,render } from "@testing-library/react";
import FollowersList from "../FollowersList";
import { BrowserRouter } from "react-router-dom/";


const MockFollowers = ()=>{
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}
describe('Test ',()=>{

    /*
        ==> Hooks:
            -> Used to run before and after the test.
    */
   // This is going to run for each test inside this block
   beforeEach(()=>{
    console.log("Running before each test in this description/group")
   })

   beforeAll(()=>{
    console.log("This is going to run only at onces in the group")
   })

   afterEach(()=>{
    console.log("This is going to run after each test.")
   })

   afterAll(()=>{
    console.log("This is going to run only at once after running all tests")
   })

    test('Follower list',async ()=>{
        render(<MockFollowers/>)
        // expect(axios.get).toHaveBeenCalled();
        /*
            Below test will failed because for some period of time the the data is 
            empty because it is coming from the api.
        */ 
        // const followerDivElement = await screen.getByTestId('follower-item-0');
        // so we use find instead of get:
        // screen.debug()
        const followerDivElement = await screen.findByTestId('follower-item-0')
        // screen.debug() // It will console.log the entire element
        expect(followerDivElement).toBeInTheDocument();
    })

    
    // find all 5 elements:
    // test('Follower list',async ()=>{
    //     render(<MockFollowers/>)
    //     /*
    //         Below test will failed because for some period of time the the data is 
    //         empty because it is coming from the api.
    //     */ 
    //     // const followerDivElement = await screen.getByTestId('follower-item-0');
    //     // so we use find instead of get:
    //     const followerDivElement = await screen.findAllByTestId(/follower-item/i)
    //     expect(followerDivElement.length).toBe(5);
    // })
})
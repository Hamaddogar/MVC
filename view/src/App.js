import React  from "react";
 import UserData from "./user-data/userdata";
  import GetData from "./user-data/getdata";
   import LoginSignup from './user-data/LoginandSignup'
    import PaymentForm from '../src/autorize/autorize'

 const App = ()=>{

   return  <div>
  {/* <LoginSignup/> */}
   {/* <PaymentForm/> */}
     <UserData/> 
    <GetData/> 
   </div>

 }
  export default App
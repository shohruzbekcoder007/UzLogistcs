import React, { useState } from 'react';
import Main from './components/Main'
import LoginReg from './components/LoginReg'
import Reg from './components/Reg';

const App = () => {

   const [user, setUser] = useState({_id: 0});
   const [login, setLogin] = useState(true);

   const userUpdate = (user) => {
      console.log(user)
      setUser(user);
   }

   if(user._id != 0){
      return <Main/>
   } else {
      if(login){
         return <LoginReg setLogin={setLogin} userUpdate={userUpdate}/>
      } else {
         return <Reg setLogin={setLogin} userUpdate={userUpdate}/>
      }
   }
}
export default App
import React, { useState } from 'react';
import Main from './components/Main'
import LoginReg from './components/LoginReg'

const App = () => {

   const [user, setUser] = useState({_id: 0});
   const userUpdate = (user) => {
      console.log(user)
      setUser(user);
   }

   if(user._id != 0){
      return <Main/>
   } else {

      return <LoginReg userUpdate={userUpdate}/>
   }
}
export default App
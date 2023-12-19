import React, { useContext, useEffect, useState } from 'react'

const AppContext=React.createContext();
const [data,setData]=useState();
useEffect(() => {
    async function UserDetails() {
      try {
        const response = await axios.post(
          "http://localhost:3002/api/users/user-details",
          {
            email: decryptEmail(encryptedEmail),
          }
        );

        if (response.status === 200) {
          const user = response.data;
          setData(user);
          
        } else {
          console.error(response.data.message);
          
        }
      } catch (error) {
        console.error("Error:", error.message);
        navigate("/");

      }
    }
    UserDetails();},[])

const AppProvider=({children})=>{
    return(
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    );
};
const GlobalUserContext=()=>{
return useContext(AppContext);
}
export{AppProvider,GlobalUserContext};
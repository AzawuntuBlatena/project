import { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  
const [userdata , setUserData] = useState('');
const [isloaded , setIsloaded] = useState(false);
 /* const createUser = async (email, password) => {
    try {
      await axios
        .post("http://localhost:5000/api/login", { email, password })
        .then((user) => {
          sessionStorage.setItem("user", JSON.stringify(user.data));
           setIsloaded(true)
        
        });
    } catch (e) {
      console.log(e);
    }
  };*/
  const Userlogin = async (email, password) => {
    try {
      await axios
        .post("http://localhost:5000/api/login", { email, password })
        .then((user) => {
          //console.log(user)
          sessionStorage.setItem("user", JSON.stringify(user.data));
          //const user= JSON.parse(sessionStorage.getItem("user"));
          setUserData(user)
          setIsloaded(true)
          
        });

    } catch (e) {
      console.log(e);
    }
  };

  const signIn = (email, password) => {
    return;
  };

  const logout = () => {
    return sessionStorage.removeItem('user');
  };
  useEffect(() => {
    // Perform localStorage action
    const user= JSON.parse(sessionStorage.getItem("user"));
    setUserData(user)
  }, [isloaded])
 
  return (
    <UserContext.Provider
      value={{ /*createUser*/userdata, logout, Userlogin, }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};


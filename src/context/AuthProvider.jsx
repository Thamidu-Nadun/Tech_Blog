import {createContext, useEffect, useState} from 'react';
import useStorage from '../hooks/useStorage';

const AuthContext = createContext (null);

const AuthProvider = ({children}) => {
  const {setItem, getItem, removeItem} = useStorage ();
  const getUserData = () => {
    try {
      if (!getItem) return;
      let data = getItem ('user');

      if (!data) return null;

      return typeof data === 'string' ? JSON.parse (data) : data;
    } catch (e) {
      throw new Error (`AuthProvider Init Error ${e}`);
    }
  };

  /**
   * @typedef {Object} User
   * @property {string} username
   * @property {string[]} roles
  */

  /**
  * @type {[User, Function]}
 */
  const [user, setUser] = useState (getUserData);

  /**
   * 
   * @param {User} userData 
   */
  const loginUser = userData => {
    setUser (userData);
    console.log (userData);
    setItem ('user', JSON.stringify (userData));
  };

  const logoutUser = () => {
    setUser (null);
    removeItem ('user');
  };

  useEffect (() => {
    let userData = getUserData ();
    setUser (userData);
  }, []);
  return (
    <AuthContext.Provider value={{loginUser, logoutUser, user}}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider, AuthContext};

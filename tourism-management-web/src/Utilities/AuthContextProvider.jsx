/* eslint-disable react/prop-types */
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";
import { useNavigate } from "react-router-dom";
//create contextAPI
export const AuthContext = createContext(null)
const AuthContextProvider = ({children}) => {
    const navigate = useNavigate()

    const googleAuthProvider = new GoogleAuthProvider()
    const githubAuthProvider = new GithubAuthProvider()
    const [theme, setTheme] = useState('light'); // Default theme

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
// observe the user after logging in
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('User in the auth state changed', currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])
//create user with email and password
const createUser = (email, password, name, photoUrl) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            if (result && result.user && (name || photoUrl)) {
                return updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoUrl
                }).then(() => {
                    setUser({...result.user, displayName: name, photoURL: photoUrl});
                     
                });
            }
        })
        .catch(error => {
            console.error('Error creating user:', error);
        })
        .finally(() => {
            setLoading(false);
        });
};
    // sign In

    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // LogOut
    const logOut = () => {
        setLoading(true)
        navigate('/')
        return signOut(auth)
    }
    // sign In with google

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,googleAuthProvider)
    }
    // sign In with gitHub

    const signInWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth,githubAuthProvider)
    }


    const AuthInfo = {
        user,createUser,loading,signIn,logOut,signInWithGoogle,signInWithGithub, theme, toggleTheme

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
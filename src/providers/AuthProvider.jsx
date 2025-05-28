import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [userLoading, setUserLoading] = useState(false);

    const createUserWithEmail = (email, password) => {
        setUserLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signInUserWithEmail = (email, password) => {
        setUserLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const createUserWithGoogle = () => {
        setUserLoading(true)
        return
    }

    const signOut = () => {
        setUserLoading(true)
        return
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                setUserLoading(false)
            }
        });
        return () => {
            return unSubscribe()
        }
    }, [])

    const authInfo = { user, userLoading, createUserWithEmail, signInUserWithEmail }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
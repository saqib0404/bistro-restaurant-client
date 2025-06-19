import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [userLoading, setUserLoading] = useState(true);
    const axiosPublic = useAxiosPublic()

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
        return signInWithPopup(auth, provider)
    }

    const userSignOut = () => {
        setUserLoading(true)
        return signOut(auth).then(setUser(null))
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                axiosPublic.post('/jwt', { email: currentUser.email })
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem("access-token", res.data.token)
                        }
                    })
            } else {
                localStorage.removeItem("access-token")
            }
            setUserLoading(false)
        });
        return () => {
            return unSubscribe()
        }
    }, [])

    const authInfo = { user, userLoading, createUserWithEmail, signInUserWithEmail, createUserWithGoogle, userSignOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
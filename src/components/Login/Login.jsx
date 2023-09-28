import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase.init";
const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <button onClick={handleGoogleSignIn} className="bg-slate-300 p-2 rounded font-semibold">Google Login</button>
        </div>
    );
};

export default Login;
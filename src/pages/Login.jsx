import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../Components/store/slices/Auth";
import { auth, db } from "../../firebasse";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signState, setSignState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // User signup function
  const signup = async (name, email, password) => {
    const loading = toast.loading("Pending...");
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const userDocRef = doc(db, "users", res.user.uid);
      await setDoc(userDocRef, {
        uid: res.user.uid,
        name: name,
        email: email,
        isAdmin: false,
      });
      toast.success("Login successful!");
      dispatch(setUser({ uid: res.user.uid, email, name, isAdmin: false }));
      navigate("/");
    } catch (error) {
      setError(`Failed to register: ${error.message}`);
      console.error(error);
    } finally {
      toast.dismiss(loading);
      setLoading(false);
      setError("");
    }
  };

  // User login function
  const login = async (email, password) => {
    const loading = toast.loading("Logging in...");
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const userDocRef = doc(db, "users", response.user.uid);
      const userDocSnap = await getDoc(userDocRef);
      const userData = userDocSnap.data();

      dispatch(
        setUser({
          uid: response.user.uid,
          email: response.user.email,
          name: userData?.name || name,
          isAdmin: userData?.isAdmin || false,
        })
      );

      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      toast.error(`Login failed: ${error.message}`);
      console.error(error);
    } finally {
      toast.dismiss(loading);
      setLoading(false);
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (signState === "Register") {
        await signup(name, email, password);
      } else {
        await login(email, password);
      }
    } catch {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">{signState}</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {signState === "Register" && (
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username <span className="text-red-500">*</span>
              </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeIcon className="h-5 w-5 text-gray-400" />
                ) : (
                  <EyeOffIcon className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className={`w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Processing..." : signState}
          </button>
          <div className="flex items-center justify-between pb-6">
            <p className="mb-0 mr-2">
              {signState === "Login"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <button
              type="button"
              onClick={() =>
                setSignState(signState === "Login" ? "Register" : "Login")
              }
              className="inline-block rounded border-2 border-orange-500 px-6 py-1 text-xs font-medium uppercase leading-normal text-orange-500 transition duration-150 ease-in-out hover:bg-orange-500 hover:text-white"
            >
              {signState === "Login" ? "Register" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

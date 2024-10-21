import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebasse";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signState, setSignState] = useState("Register");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // User signup function
  const signup = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const userDocRef = doc(db, "users", res.user.uid);
      await setDoc(userDocRef, {
        uid: res.user.uid,
        name: name,
        email: email,
        isAdmin: false,
      });

      navigate("/");
    } catch (error) {

      console.error(`Failed to register: ${error.message}`);
    }
  };

  // User login function
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate("/");
    } catch (error) {

      console.error(`Failed to authenticate: ${error.message}`);
    }

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      if (signState === "Register") {
        await signup(name, email, password);
      } else {
        await login(email, password);
      }
    } catch (error) {

      console.error("Failed to authenticate");
    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">{signState}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {signState === "Register" && (
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username <span className="text-red-500"> *</span>
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
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address<span className="text-red-500"> *</span>
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password<span className="text-red-500"> *</span>
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
            className={`w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={loading}
          >
            {signState}
          </button>
          <div className="flex items-center justify-between pb-6">
            <p className="mb-0 mr-2">
              {signState === "Login" ? "Don't have an account?" : "Already have an account?"}
            </p>
            <button
              type="button"
              onClick={() => setSignState(signState === "Login" ? "Register" : "Login")}
              className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
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

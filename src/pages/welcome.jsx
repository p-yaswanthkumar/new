import { useState } from "react";
import { useNavigate } from "react-router-dom";
import welcomeImg from "../assets/welcome.jpg";
import logoImg from "../assets/logo.png";

export default function WelcomePage() {
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotPassword, setForgotPassword] = useState("");
  const [forgotConfirm, setForgotConfirm] = useState("");

  // Handle Forgot Password
  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (forgotPassword !== forgotConfirm) {
      alert("Passwords do not match.");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const idx = users.findIndex(u => u.email === forgotEmail);
    if (idx === -1) {
      alert("Email not found.");
      return;
    }
    users[idx].password = forgotPassword;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Password updated successfully!");
    setShowForgot(false);
    setForgotEmail("");
    setForgotPassword("");
    setForgotConfirm("");
  };
  const navigate = useNavigate();
  const [showSignup, setShowSignup] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    // Check for admin credentials
    if (loginEmail === "admin@enkonix.in" && loginPassword === "admin123") {
      localStorage.setItem("firstname", "admin");
      localStorage.setItem("lastname", "dashboard");
      localStorage.setItem("email", loginEmail);
      navigate("/admindashboard");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === loginEmail && u.password === loginPassword);
    if (user) {
      // Store user details in localStorage for dashboard/avatar
      localStorage.setItem("firstname", user.firstName || "");
      localStorage.setItem("lastname", user.lastName || "");
      localStorage.setItem("email", user.email || "");
      navigate("/home1");
    } else {
      alert("Invalid email or password.");
    }
  };

  // Handle Signup
  const handleSignup = (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find(u => u.email === signupData.email)) {
      alert("Email already registered.");
      return;
    }
    const now = new Date();
    const newUser = {
      firstName: signupData.firstName,
      lastName: signupData.lastName,
      email: signupData.email,
      phone: signupData.phone,
      password: signupData.password,
      signupTime: now.toLocaleTimeString(),
      signupDate: now.toLocaleDateString()
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful!");
    setShowSignup(false);
    setSignupData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: ""
    });
  };

  return (
    <div className="grid h-screen  md:grid-cols-2">
      {/* LEFT SECTION */}
      <div className="bg-[#00bfff] relative w-full h-full min-h-[200px]">
        <img 
          src={welcomeImg} 
          alt="Welcome" 
          className="absolute inset-0 w-full h-full object-cover"
          width={600}
            height={400}
            style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }}
            srcSet={`
              ${faqImage} 600w,
              ${faqImage} 1200w,
              ${faqImage} 1800w
            `}
            sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1800px"
        />
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center bg-[#00BFFF]/10 justify-center p-4 md:p-8">
        <div className="w-full max-w-md">
          
          {!showSignup && !showForgot ? (
            /* LOGIN FORM */
            <>
              <div className="flex flex-col items-left mb-4">
                <img src={logoImg} alt="Logo" className="h-13 w-20 mb-2" />
              </div>
              <h2 className="text-2xl font-bold mb-6 text-left">Login</h2>
              <form className="space-y-4" onSubmit={handleLogin}>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full border p-3 rounded-lg"
                  value={loginEmail}
                  onChange={e => setLoginEmail(e.target.value)}
                  required
                />
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="w-full border p-3 rounded-lg"
                  value={loginPassword}
                  onChange={e => setLoginPassword(e.target.value)}
                  required
                />
                <div className="flex justify-between items-center text-sm">
                  <button type="button" className="text-[#00BFFF] hover:underline" onClick={() => setShowForgot(true)}>Forgot password?</button>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-[#00BFFF] text-white p-3 rounded-lg hover:bg-[#00BFFF]"
                >
                  Login
                </button>
              </form>

              <p className="mt-4 text-sm text-gray-600">
                Don’t have an account?{" "}
                <button 
                  className="text-[#00BFFF] hover:underline" 
                  onClick={() => setShowSignup(true)}
                >
                  Sign up
                </button>
              </p>
            </>
          ) : showForgot ? (
            /* FORGOT PASSWORD FORM */
            <>
              <div className="flex flex-col items-left mb-4">
                <img src={logoImg} alt="Logo" className="h-13 w-20 mb-2" />
              </div>
              <h2 className="text-2xl font-bold mb-6 text-left">Reset Password</h2>
              <form className="space-y-4" onSubmit={handleForgotPassword}>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border p-3 rounded-lg"
                  value={forgotEmail}
                  onChange={e => setForgotEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full border p-3 rounded-lg"
                  value={forgotPassword}
                  onChange={e => setForgotPassword(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="w-full border p-3 rounded-lg"
                  value={forgotConfirm}
                  onChange={e => setForgotConfirm(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
                >
                  Reset Password
                </button>
                <button
                  type="button"
                  className="w-full mt-2 bg-gray-200 text-gray-700 p-3 rounded-lg hover:bg-gray-300"
                  onClick={() => setShowForgot(false)}
                >
                  Cancel
                </button>
              </form>
            </>
          ) : (
            /* SIGNUP FORM */
            <>
            <div className="flex flex-col items-left mb-4">
                <img src={logoImg} alt="Logo" className="h-13 w-20 mb-2" />
              </div>
              <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
              <form className="space-y-4" onSubmit={handleSignup}>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="w-1/2 border p-3 rounded-lg"
                    value={signupData.firstName}
                    onChange={e => setSignupData({ ...signupData, firstName: e.target.value })}
                    required
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="w-1/2 border p-3 rounded-lg"
                    value={signupData.lastName}
                    onChange={e => setSignupData({ ...signupData, lastName: e.target.value })}
                    required
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full border p-3 rounded-lg"
                  value={signupData.email}
                  onChange={e => setSignupData({ ...signupData, email: e.target.value })}
                  required
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full border p-3 rounded-lg"
                  value={signupData.phone}
                  onChange={e => setSignupData({ ...signupData, phone: e.target.value })}
                  required
                />
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="w-full border p-3 rounded-lg"
                  value={signupData.password}
                  onChange={e => setSignupData({ ...signupData, password: e.target.value })}
                  required
                />
                <input 
                  type="password" 
                  placeholder="Confirm Password" 
                  className="w-full border p-3 rounded-lg"
                  value={signupData.confirmPassword}
                  onChange={e => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                  required
                />
                <button 
                  type="submit" 
                  className="w-full bg-[#00BFFF] text-white p-3 rounded-lg hover:bg-[#00BFFF]"
                >
                  Sign Up
                </button>
              </form>

              <p className="mt-4 text-sm text-gray-600">
                Already have an account?{" "}
                <button 
                  className="text-[#00BFFF] hover:underline" 
                  onClick={() => setShowSignup(false)}
                >
                  Login
                </button>
              </p>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

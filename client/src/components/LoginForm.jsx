import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      navigate("/products");
    }
  }, [navigate]);


  const handleSubmit = async (event) => {
    event.preventDefault();

    let res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    let data = await res.json();
    localStorage.setItem('userData', JSON.stringify(data))
    console.log("user", data);

    if (res.status === 200) {
      const admin = data.isAdmin;
      console.log('admin', admin);

      admin === true ? navigate("/admin") : navigate("/products")
     
    } else if (res.status === 404) {
      toast.error("Record does not exist");
      navigate("/signup");
    } else {
      toast.error("Email or Password is incorrect");
    }

  };

  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="relative py-3 sm:max-w-xs sm:mx-auto">
          <form
            className="max-w-sm mx-auto bg-white w-80 px-10 py-10 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <div className="mb-5">
              <p className="uppercase flex justify-center text-lg font-medium mb-8">
                Login
              </p>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blueish focus:border-blueish block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blueish focus:border-blueish block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex gap-2 justify-center">
              <button
                type="submit"
                className="text-white bg-blueish hover:bg-smokyblack font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition ease-in duration-200 uppercase"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="text-white bg-blueish hover:bg-smokyblack font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition ease-in duration-200 uppercase"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;

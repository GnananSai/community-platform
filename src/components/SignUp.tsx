import React, { useState } from "react";

interface SignUpProps {
  onSignup: (email: string, password: string, confirmPassword: string) => void;
}

const initialSignupValue = {
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = ({ onSignup }: SignUpProps) => {
  const [signup, setSignup] = useState(initialSignupValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (signup.password !== signup.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    onSignup(signup.email, signup.password, signup.confirmPassword);
  };

  return (
    <div className="h-fit w-screen flex justify-center items-center py-32">
      <div className="sm:shadow-xl p-8 bg-white rounded-xl w-96">
        <h1 className="font-semibold text-2xl mb-5">Make An Account</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Your Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mb-5 p-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg w-full"
              placeholder="name@email.com"
              value={signup.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="mb-5 p-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg w-full"
              placeholder="••••••••"
              value={signup.password}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="mb-5 p-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg w-full"
              placeholder="••••••••"
              value={signup.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="mt-5 w-full text-white bg-blue-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border hover:bg-white hover:text-gray-800 hover:border-gray-800"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

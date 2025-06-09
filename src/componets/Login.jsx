import React, { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidData } from "../utils/Validate";

const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);
  const [ErrorMessage,setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const Message=CheckValidData(email.current.value, password.current.value,name.current.value);
    setErrorMessage(Message);
   
  };
  const ToggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute w-60"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7f67-86aa-d06aa27c6cc0/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Logo"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="absolute z-10 w-3/12 right-0 left-0 p-12 my-36 mx-auto bg-black/75 rounded-md text-white">
        <h1 className="font-extrabold text-3xl py-4">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!IsSignInForm && (
          <input
            ref={name}
            className="p-2 my-2 w-full border border-white rounded-md"
            type="name"
            name=""
            placeholder="Enter You Name"
          />
        )}
        <input
          ref={email}
          className="p-2 my-2 w-full border border-white rounded-md"
          type="email"
          placeholder="Email or mobile number"
        />
        <input
          ref={password}
          className="p-2 my-2 w-full border border-white rounded-md"
          type="password"
          placeholder="Password"
        />
        <p className="font-bold text-red-600 py-2">{ErrorMessage}</p>
        <input
          className=" p-2 my-4 bg-red-700 w-full rounded-md"
          type="submit"
          value="Sign In"
          onClick={handleButtonClick}
        />
        <p className="p-2 my-2 cursor-pointer" onClick={ToggleSignInForm}>
          {IsSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;

import React, { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { adduser } from "../redux/userSlice";
const Login = () => {
  
  const [IsSignInForm, setIsSignInForm] = useState(true);
  const [ErrorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    const Message = CheckValidData(
      email.current.value,
      password.current.value,
      IsSignInForm ? null : name.current?.value || ""
    );
    setErrorMessage(Message);

    if (Message) return;

    if (!IsSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/147755424?v=4",
          })
            .then(() => {
             
              const { uid, email, displayName,photoURL } = auth.currentUser;
              dispatch(
                adduser({ uid: uid, email: email, displayName: displayName ,photoURL:photoURL})
              );
            
            })
            .catch(() => {
             
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorCode + "-" + errorMessage);
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
         

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
          setErrorMessage(errorMessage);
        });
    }
  };
  const ToggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  };
  return (
    <div className="relative h-screen w-full">
      {" "}
      {/* ✅ Make parent relative */}
      <Header />
      {/* ✅ Background Image */}
      <img
        className="w-full h-full object-cover absolute z-0"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/DE-en-20250602-TRIFECTA-perspective_7519d00d-4399-4ae6-98ec-ed02f20704a5_large.jpg"
        alt="BG"
      />
      {/* ✅ Black Transparent Overlay */}
      <div className="absolute inset-0 bg-black/30  z-10"></div>
      {/* ✅ Sign-in / Sign-up Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute z-20 w-3/12 right-0 left-0 p-12 my-36 mx-auto bg-black/75 rounded-md text-white"
      >
        <h1 className="font-extrabold text-3xl py-4">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!IsSignInForm && (
          <input
            ref={name}
            className="p-2 my-2 w-full border border-white rounded-md"
            type="text"
            placeholder="Enter Your Name"
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
        <button
          onClick={handleButtonClick}
          className="p-2 my-4 bg-red-700 w-full rounded-md cursor-pointer"
        >
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </button>

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

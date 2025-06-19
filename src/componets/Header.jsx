import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { adduser, logout } from "../redux/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          adduser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browser");
      } else {
        dispatch(logout());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch(() => {
        navigate("/error");
        // An error happened.
      });
  };
  return (
    <div className="absolute top-0 left-0 w-full z-20 bg-gradient-to-b from-black/60 to-transparent">
      <div className="px-4 mx-auto flex justify-between items-center ">
        <img className="w-30 md:w-50" src={LOGO} alt="LOGO" />
        {user && (
          <div className="flex items-center gap-4">
            <img
              className="w-10 h-10 rounded"
              src={user?.photoURL}
              alt="user_icon"
            />
            <button
              className="text-white cursor-pointer"
              onClick={handleSignOut}
            >
              (Sign Out)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;

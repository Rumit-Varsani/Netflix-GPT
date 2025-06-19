import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { adduser, logout } from "../redux/userSlice";

const Header = () => {
  
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
        <img
          className="w-30 md:w-50"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7f67-86aa-d06aa27c6cc0/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="LOGO"
        />

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

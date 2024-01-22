import { useDispatch } from "react-redux";
import { signOut } from "../redux/user/userSlice.js";

const Profile = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div>Profile</div>
      <p className="cursor-pointer text-red-500" onClick={() => dispatch(signOut())}>Sign out</p>
    </>
  );
};

export default Profile;

import { useState } from "react";
import profile from "../../assets/profile.png";
import MyContainer from "../../components/MyContainer";
import useAuth from "../../hooks/useAuth";
import { MdModeEdit } from "react-icons/md";
import EditProfile from "./EditProfile";
const Profile = () => {
  const { user } = useAuth();
  const [showEdit, setShowEdit] = useState(false);

  return (
    <MyContainer>
      {" "}
      <div className="lg:flex gap-10 py-16 items-center justify-center">
       <div className="w-1/4">
       <img src={profile} alt="" />
       </div>
        <div className="w-3/4">
        {showEdit ? (
          <EditProfile user={user}></EditProfile>
        ) : (
           <>
            <div className="divide-y border">
              <div className="p-4 flex items-center justify-between">
                <p>
                  Name:{" "}
                  <span className="pl-5 font-semibold tracking-widest">
                    {user?.displayName ? user?.displayName : "User#447$1"}
                  </span>
                </p>
                <MdModeEdit className="text-xl cursor-pointer"></MdModeEdit>
              </div>
              <div className="p-4 flex items-center justify-between">
                <p>
                  Email:{" "}
                  <span className="font-semibold pl-5 tracking-widest">
                    {user?.email}
                  </span>
                </p>
                <MdModeEdit className="text-xl cursor-pointer"></MdModeEdit>
              </div>
            </div>
            <button
              onClick={() => setShowEdit((prev) => !prev)}
              className="btn-primary btn mt-10 text-center w-full"
            >
              Edit Profile
            </button>
            </>
        )}</div>
      </div>
    </MyContainer>
  );
};

export default Profile;

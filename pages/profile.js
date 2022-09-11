import React from "react";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets"
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileTweets from "../components/profile/ProfileTweets";
const style = {
  wrapper: `flex h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `w-full flex justify-between`,
  mainContent: `flex-[6] border-r border-l border-[#38444d] overflow-y-scroll`,
};
const profile = () => {
  return (
    <div>
      {" "}
      <div className={style.wrapper}>
        <div className={style.content}>
          <Sidebar initialSelectedIcon={"Profile"} />
          <div className={style.mainContent}>
            <ProfileHeader/>
          <ProfileTweets/>
          </div>
          <Widgets />
        </div>
      </div>
    </div>
  );
};

export default profile;

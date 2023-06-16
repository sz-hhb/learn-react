import { memo } from "react";

const Profile = memo(function (props) {
  console.log("Profile render");
  return (
    <div>
      <h2>Profile Page: {props.message}</h2>
    </div>
  );
});

export default Profile;

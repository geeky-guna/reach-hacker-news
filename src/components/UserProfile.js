import React, { useEffect, useState } from "react";
import { getUser } from "../config/util";
import moment from "moment";
function UserProfile({ id }) {
  const [user, setUser] = useState({});
  useEffect(async () => {
    const user = await getUser(id);
    setUser(user.data);
  }, []);
  return (
    <div>
      <h2>User Profile</h2>
      <div style={{ width: "60%" }}>
        <table style={{ backgroundColor: "grey" }}>
          <tbody>
            <tr>
              <td>user: </td>
              <td>{user.id}</td>
            </tr>
            <tr>
              <td>created: </td>
              <td>{moment(user.created).format("ll")}</td>
            </tr>
            <tr>
              <td>karma: </td>
              <td>{user.karma}</td>
            </tr>
            <tr>
              <td>about: </td>
              <td>{user.about}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserProfile;

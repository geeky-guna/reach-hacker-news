import React from "react";
import { useHistory } from "react-router-dom";

function ListHeader({ onChangeText, selectedType }) {
  let history = useHistory();
  const types = ["top", "ask", "show", "job"];
  return (
    <div>
      <input
        type="text"
        placeholder="search by title, user"
        onChange={onChangeText}
      />
      {types.map((type) => (
        <>
          <input
            type="radio"
            name="type"
            value={type}
            checked={type === selectedType}
            onChange={() => history.push(`/${type}`)}
          />
          <label style={{ textTransform: "capitalize" }}>{type}</label>
        </>
      ))}
    </div>
  );
}

export default ListHeader;

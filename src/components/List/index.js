import React from "react";
import { useState } from "react";
function List({ contacts }) {
  const [filterText, setFilterText] = useState("");
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase());
    });
  });

  console.log(filtered);
  return (
    <div>
      <input
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      ></input>
      <ul className="list">
        {filtered.map((c, index) => (
          <li key={index}>
            <span>{c.fullname}</span>
            <span>{c.phone_number}</span>
          </li>
        ))}
      </ul>
      <p>Total Contacts:<span style={{color:"red"}}>({filtered.length})</span></p>
    </div>
  );
}

export default List;

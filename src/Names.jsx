import React from "react";
function Names({name1,name2, setName1, setName2}) {
  return (
    <>
      <label>Your Name</label>
      <input type="text"
     value={name1}
     onChange={(e) => setName1(e.target.value)}
      />
      <label>Crush's Name</label>
      <input type="text"
      value={name2} 
      onChange={(e) => setName2(e.target.value)}
      />
    </>
  );
}

export default Names;
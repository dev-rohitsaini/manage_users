import React, { useState, useRef } from "react";
import UserData from "./UserData";

function User() {
  // const[final_id,setFinal_id]=useState("");
  const [user_id, setUser_id] = useState("");
  const [error, setErrors] = useState("");
  const subRef = useRef();
  let final_id="";
  const handleChange = (e) => {
    setUser_id(e.target.value);
    // console.log(user_id);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateData(user_id)){
      final_id=user_id;
    }
  };
  const validateData = (user_id) => {
    if (user_id === undefined) {
      const span = subRef.current; // corresponding DOM node
      span.className = "text-danger";
      setErrors("Please enter value in the field");
      return false;
    }
    if (user_id === "") {
        const span = subRef.current; // corresponding DOM node
        span.className = "text-danger";
        setErrors("Please enter value in the field");
        return false;
      }
    
    if(0<user_id && user_id<13){
        setErrors("");
        return true;
    }
  };
console.log("final_id->"+final_id)
  return (
    <React.Fragment>
        <div className="container h-100">
    <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-6"></div>
      <form method="" onSubmit={handleSubmit}>
       <div className="col">
        <div className="form-group">
          <input
            type="number"
            name="gat_data"
            id="get_data"
            className="form-control"
            onChange={handleChange}
          />
          <span ref={subRef}>{error}</span>
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary" name="submit" />
        </div>
        </div>
      </form>
      </div>
      </div>
        {(final_id===""?<>"No data found"</>:<UserData user_id={final_id}/>)}
    </React.Fragment>
  );
}
export default User;

import React, { useState, useRef } from "react";
import UserData from "./UserData";

function User() {
  const [userId, setUserId] = useState("");
  const [error, setErrors] = useState("");
  const subRef = useRef();
  const inputValue = useRef();

  //validating input field o changing the value ------
  const handleChange = (e) => {
    validateData(e.target.value);
  };
  //again validating and setting id in state ---------
  const handleSubmit = (e) => {
    e.preventDefault();
    const uId = inputValue.current.value;
    if (validateData(uId)) {
      setUserId(uId);
    }
  };
  //validation for empty userid and id must be between 1 to 12-----------
  const validateData = (user_id) => {
    if (user_id === undefined) {
      const span = subRef.current;
      span.className = "text-danger";
      setErrors("Please enter value in the field");
      return false;
    }
    if (user_id === "") {
      const span = subRef.current;
      span.className = "text-danger";
      setErrors("Please enter value in the field");
      return false;
    }
    if (0 < user_id && user_id < 13) {
      setErrors("");
      return true;
    } else {
      const span = subRef.current;
      span.className = "text-danger";
      setErrors("Values must be between 1 to 12");
      return false;
    }
  };
  return (
    <React.Fragment>
      <div className="main">
        <form method="" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6 search">
              <input
                type="number"
                name="gat_data"
                id="get_data"
                ref={inputValue}
                className="form-control w-auto"
                onChange={handleChange}
              />
            </div>
            <div className="col-6 submit">
              <input type="submit" className="btn btn-info" name="submit" />
            </div>
            <span ref={subRef}>{error}</span>
          </div>
        </form>
        {userId !== "" ? <UserData user_id={userId} /> : ""}
      </div>
    </React.Fragment>
  );
}
export default User;

import React, { useEffect, useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useQuery } from "react-query";
const UserData = ({ user_id }) => {
  const [data, setData] = useState([]); //to store data----
  const [errors, setErrors] = useState([]); //to store errors----
  const [loading, setLoading] = useState(true); //loader ----------
  //function to fetch the data--------------------
  const getUserData = async (user_id) => {
    const api_url = `https://reqres.in/api/users/${user_id}`;
    await fetch(api_url)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => setErrors(error))
      .finally(() => {
        setLoading(false);
      });
  };
  //call function on updating user id---------------
  useEffect(() => {
    getUserData(user_id);
  }, [user_id]);

  if (loading) return <PropagateLoader color="#36d7b7" />;

  if (Object.keys(data).length === 0) return "No data Found";

  console.log(data);
  return (
    <React.Fragment>
      <div className="container" key={data?.data?.id}>
        <div className="row ">
          <div className="col-4 cont">Name</div>
          <div className="col-4 cont"><strong>
            {data?.data?.first_name + " " + data?.data?.last_name}</strong>
          </div>
          <div className="col-4 cont">
            <img src={data?.data?.avatar} alt="profile image" />
          </div>
          <div className="col-4 cont">Email</div>
          <div className="col-4 cont"><strong>{data?.data?.email}</strong></div>
          <div className="col-4 cont">Profile Picture</div>
          <div className="col-4 cont">Description</div>
          <div className="col-8 cont">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            neque ac nisl molestie lobortis. Vivamus at nisl ac nisi blandit
            hendrerit. Vestibulum nec felis sit amet eros mattis congue. Proin
            neque nunc, imperdiet eget leo vitae, porttitor consequat odio. Nunc
            sagittis tincidunt est vitae suscipit. Nunc suscipit, dolor
            convallis commodo vulputate, nibh nunc facilisis arcu, et efficitur
            lacus magna in lectus.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default React.memo(UserData);

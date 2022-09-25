import React from "react";
import { useQuery } from 'react-query'
 

function Users(){
    const { isLoading, error, data } = useQuery('repoData', () =>
     fetch('https://reqres.in/api/users').then(res =>res.json()).then((res)=>res)
   )
   
   console.log(data)

   if (isLoading) return 'Loading...'
 
   if (error) return 'An error has occurred: ' + error.message
  

   return (
    <React.Fragment>
    <table className={"table"}>
        <thead>
            
            <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>Email</th>
                <th>Profile Photo</th>
            </tr>
        </thead>
        <tbody>
           
            {/* {Object.entries(data.data).map((value,i)=>(
            <tr key={i}>
                 <td>{value[1].id}</td>
                <td>{value[1].first_name+" "+value[1].last_name}</td>
                <td>{value[1].email}</td>
                <td>
                    <img src={value[1].avatar} alt="profile_picture" />
                </td> 
            </tr>
            ))}  */}
        </tbody>
    </table>
   </React.Fragment>
  )
}
export default Users;
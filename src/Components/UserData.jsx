import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
function UserData(props){
   
 console.log(props)
 return;
     const api_url='https://reqres.in/api/users/'+props.user_id;

    const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(api_url).then(res =>res.json()).then((res)=>res)
  )

  if (isLoading) return 'Loading...'

  if (error){ return 'An error has occurred: ' + error.message}

//   const [state, setState] = React.useState([])

// React.useEffect(() => {
//   // do some checking here to ensure data exist
//   if (data) {
//     // mutate data if you need to
//     setState(data)
//   }
// }, [data])

// console.log(data)
return (
        <table key={props.user_id}> 
               <tbody>
                    <tr>
                        <th>S.no</th><td>{data?.data?.id}</td>
                    </tr>
                    <tr>
                        <th>First Name</th><td>{data?.data?.first_name}</td>
                    </tr>
                    <tr>
                        <th>Last Name</th><td>{data?.data?.last_name}</td>
                    </tr>
                    <tr>
                        <th>Email</th><td>{data?.data?.email}</td>
                    </tr>
                    <tr>
                        <th>Description</th><td>Description</td>
                    </tr>
                    </tbody>
                    </table>

)
}
export default UserData;
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"


function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);
        fetch("https://glassdoor.p.rapidapi.com/jobs/search?keyword=software%20engineer&location_id=1154170&location_type=C&page_id=1&page_cursor=AB4AAYEAHgAAAAAAAAAAAAAAAcAnhckAUgEBAQcEGhsQ16pNSro70dxiUjUW7SeKfZZSrStk5I51mXxHzCrtp1Zt1Gox6xKANcdSbluwPnLv0Lxu3SFKh8C33qAPvr9HZT%2BBpC%2FK8wtBPaUAAA%3D%3D",
        {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'e71229cf4fmshffe50a807258690p13fe80jsn763b1caac750',
              'X-RapidAPI-Host': 'glassdoor.p.rapidapi.com',
              "Access-Control-Allow-Origin": "*",
              'Content-Type': 'application/json'
            },
          })
          .then(response =>  response.json())
          .then(result => {
            console.log(result)
            const res = Object.values(result);
            const res2 = res[1]
            setJobs(res2);
            console.log("res", res2)
          })
          .catch(error => {
            console.log("Error in the GET", error);
            return false
          })
          .finally(() => setLoading(false));
        
    }, []);


console.log("jobs state", jobs)
    
const listOfJobs = jobs.map((job, index) => {
    return (
      <Link to = {job.link}>
        <div key={index}>
        {/* {Object.values(job).map((company, index) => {return (<h1 key={index}>{company.name}</h1>)})} */}
        <h1>{job.job_title_text}</h1>
        <h2>{job.location_name}</h2>
    </div>
    </Link>
)})
  
if(loading) return <p>Loading...</p>
    return (
        <div>
            <h1>My Jobs</h1>
            {listOfJobs}
        </div>
    )
}
export default Jobs;
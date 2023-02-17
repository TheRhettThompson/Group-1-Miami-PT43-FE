import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"

import Card from 'react-bootstrap/Card';
import '../styles/jobs.css';


const Jobs = () => {
  // const { store, actions } = useContext(Context);
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
      .then(response => response.json())
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

  // useEffect(() => {
  //   actions.add_Favorites();
  // }, []);


  console.log("jobs state", jobs)

  const listOfJobs = jobs.map((job, index, company) => {
    return (
      <Link to={job.link}>
        <div key={index}>


          <Card border="info" style={{ width: '18rem' }}>
            <Card.Header>{company.name}</Card.Header>
            <Card.Body>
              <Card.Title>{job.job_title_text}</Card.Title>
              <Card.Text>
                {job.location_name}
              </Card.Text>
            </Card.Body>
            {/* <button
              onClick={() => actions.add_Favorites(job)}>
              <i class="fa-solid fa-heart"></i>
            </button> */}
          </Card>
          <br />


        </div>
      </Link>
    )
  })

  if (loading) return <p>Loading...</p>
  return (
    <div>
      <h1>Found Jobs</h1>
      <div className="list_of_jobs">
        {listOfJobs}
      </div>
    </div>
  )
}
export default Jobs;
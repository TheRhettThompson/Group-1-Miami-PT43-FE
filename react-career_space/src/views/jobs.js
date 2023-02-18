import React, { useEffect, useState } from "react";

import { Link, Navigate, useNavigate } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import '../styles/jobs.css';
const Jobs = () => {
  // const { store, actions } = useContext(Context);
  // console.log(store)
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);


  // TOKEN TO ACCESS JOBS
  const navigate = useNavigate();
  let token = localStorage.getItem('token');
  console.log(token)
  if(token == null )navigate('/login')


  useEffect(() => {
    setLoading(true);
    fetch("https://indeed12.p.rapidapi.com/jobs/search?query=software%20engineer&location=miami&page_id=2",
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'e71229cf4fmshffe50a807258690p13fe80jsn763b1caac750',
          'X-RapidAPI-Host': 'indeed12.p.rapidapi.com',
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
  // DELETED company FROM LINE 51; map can only have 2 items and the 2nd item is always index)
  const listOfJobs = jobs.map((job, index) => {
    return (
      <Link to={job.link}>
        <div key={index}>
          <Card border="info" style={{ width: '18rem' }}>
            <Card.Header>{job.company_name}</Card.Header>
            <Card.Body>
              <Card.Title>{job.title}</Card.Title>
              <Card.Text>
                {job.location}
              </Card.Text>
            </Card.Body>
            {/* <button
              onClick={() => actions.add_Favorites(job)}>
              <i class=“fa-solid fa-heart”></i>
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
import React, { useState, useEffect } from "react";
import { get_jobs } from "../api_code";


const Jobs = () => {

    const [jobs, setJobs] = useState([])
    useEffect(() => {
        function settingJobs() {
            let newJobs = get_jobs
            setJobs(newJobs)
            console.log(newJobs)
        }

        settingJobs()
    })

    return (
        <div>

            {jobs.map((item, index) => {
                return (
                    <div>

                        <h1>{item.company.name}</h1>
                        <h1>{item.job_title_normalized}</h1>
                        <h1>{item.location_name}</h1>

                    </div>
                )

            })}
        </div>
    )

}

export default Jobs;
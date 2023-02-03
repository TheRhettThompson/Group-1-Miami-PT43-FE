import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
// these are for bootstrap buttons

const Jobs = () => {
    const [jobs, setJobs] = useState([])
    const { actions } = useContext(Context)

    useEffect(() => {
        async function settingJobs() {
            let newJobs = await actions.getJobs()
            setJobs(newJobs)
        }

        settingJobs();

    }, [])



    return (
        {
            jobs.map((item, index) => {

                return (
                    <div>
                        <h1>{item.hits.name}</h1>
                        <h1>{item.job_title_normalized}</h1>
                        <h1>{item.location_name}</h1>
                    </div>
                )

            })
        }

    )

}

export default Jobs;
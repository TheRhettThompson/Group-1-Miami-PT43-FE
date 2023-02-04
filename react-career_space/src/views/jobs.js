import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Jobs = () => {
    const { store } = useContext(Context)
    const availableJobs = store.jobs.map((job, index) => {
        return (
            <div key={index}>
                <h1>{job.name}</h1>
            </div>
        )
    })

    return (
        <div>
            {availableJobs}
        </div>
    )


}

export default Jobs;
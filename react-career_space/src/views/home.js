import React, { useContext, useState, useEffect } from "react";
import "../styles/home.css"
import { Context } from "../store/appContext";





function Home() {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getJobsTest();

  }, []);
  return (
    <div className="Home">
      <h1>This is the Home page</h1>
    </div>
  )
}

export default Home


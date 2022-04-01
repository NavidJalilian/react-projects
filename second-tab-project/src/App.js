import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  function changeValue(number) {
    return setValue(number);
  }

  async function fetchJobs() {
    setLoading(true);
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  }
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <section className="section center">
        <div className="loading center">
          <div className="spiner cetner"></div>
        </div>
      </section>
    );
  }

  const { id, company, dates, duties, order, title } = jobs[value];

  return (
    <section className="section">
      <div class="title">
        <h2>experience</h2>
        <div class="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => (
            <button
              key={index}
              className={`job-btn ${index === value && "active-btn"}`}
              onClick={() => setValue(index)}
            >
              {item.company}
            </button>
          ))}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => (
            <div className="job-desc">
              <FaAngleDoubleRight
                key={index}
                className="fav-icon"
              ></FaAngleDoubleRight>
              <p> {duty}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}

export default App;

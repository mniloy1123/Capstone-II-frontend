import React from "react";
import ThoroughPR from "../components/ThoroughPR";
import Impact from "../components/Impact";
import UnreviewedPR from "../components/UnreviewedPR";
import AverageTimeToMerge from "../components/AverageTimeToMerge";
import NewWork from "../components/NewWork";
import Responsiveness from "../components/Responsiveness";
import MergeSuccessRate from "../components/MergeSuccessRate";
import Rework from "../components/Rework";
import LeadTime from "../components/LeadTime";
import DeploymentFrequency from "../components/DeploymentFrequency";
import { useNavigate } from "react-router-dom";
import '../css/metrics.css';


function Metrics() {

  const navigate = useNavigate();

  function handleAnalyze() {
    navigate(`/`);
  }

  return (
    <div className="metrics-page">
      <div className="metrics-title-container">
        <h1>Your Metrics</h1>
      <button className="metrics-btn" onClick={handleAnalyze}>Analyze Metrics</button>
      </div>
      <div className="metrics-container">
        <div className="small-pie-chart">
        <ThoroughPR />
        </div>
        <div className="small-pie-chart">
        <UnreviewedPR />  
        </div>    
        <div className="averageTimeToMerge">
        <AverageTimeToMerge />
        </div>
        <div className="averageTimeToMerge">
        <NewWork />
        </div>
        <div className="averageTimeToMerge">
        <Responsiveness />
        </div>
        <div className="averageTimeToMerge">
        <Rework />
        </div>
        <div className="averageTimeToMerge">
        <LeadTime />
        </div>
        <div className="small-pie-chart">
        <MergeSuccessRate />
        </div>
        <div className="averageTimeToMerge">
        <DeploymentFrequency /> 
        </div>
        <div>
        <Impact />
        </div>
      </div>
    </div>
  );
}

export default Metrics;

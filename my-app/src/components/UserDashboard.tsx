import React from "react";
import { Headerbar } from "./Headerbar";
import axios from "axios";



export const UserDashboard: React.FC = () => {
  return (
    <div>
      <Headerbar />
      <div style={{height: '92vh', backgroundColor: 'black'}}>
        <div className="card text-center" style={{width: '50%', marginTop: '200px', marginLeft: '25%'}}>
          <div className="card-header">Dashboard</div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <div className="card-footer text-muted">Last played: 2 days ago</div>
        </div>
      </div>
    </div>
  );
};

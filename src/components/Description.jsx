import React from "react";
export default function Description({ information }) {
  
  return (
    <article className="package-item">
      <div className="details">
        
        <div className="text">
          <h3 className="h4">Status: {information.status}</h3>
          <p className="h4">ETA: {information.eta}</p>
          <p className="h4">Sender: {information.sender}</p>
          <p className="h4">Location: {information.location_name}</p>
          <p className="h4">Parcel Id: {information.parcel_id}</p>
          
          <p className="h4">Location Id: {information.location_id}</p>
          <p className="h4">User Phone {information.user_phone}</p>
          <p className="h4">User Name: {information.user_name}</p>
          
          <p className="h4">Last Updated: {information.last_updated}</p>
        </div>
      </div>
    </article>
  );
}

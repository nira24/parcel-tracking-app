import React from "react";
import { Link } from "react-router-dom";


export default function Card({
  parcel_id,
  id,
  status,
  eta,
  sender,
  location,
  
}) {
  return (
    <article className="package-item">
      <Link to={`/package/${id}`}>
       
      </Link>
      <div>
        <Link to={`/package/${id}`}>
          <button class="btn btn1">View Details</button>
        </Link>
      </div>

      <div className="">
        <h3 className="h4">Status: {status}</h3>
        <p className="h4">ETA: {eta}</p>
        <p className="h4">Sender: {sender}</p>
        <p className="h4">Location: {location}</p>
        <p className="h4">Parcel Id: {parcel_id}</p>
      </div>
    </article>
  );
}

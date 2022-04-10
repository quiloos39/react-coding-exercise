import React from "react";
import { useParams } from "react-router-dom";

export function ReviewPage() {
  const params = useParams();
  const data = JSON.parse(params.result);
  return (
    <div>
      <h1 className="font-bold text-3xl">Review</h1>
      <hr className="my-5" />
      {Object.entries(data).map((entry, index) => (
        <p key={index}>
          <span className="font-bold">{entry[0]}: </span>
          {entry[1]}
        </p>
      ))}
    </div>
  );
}

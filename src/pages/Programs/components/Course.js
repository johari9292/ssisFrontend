import React from "react";
import { useParams } from "react-router-dom";
const Course = () => {
  let { id } = useParams();
  return (
    <div>
      <h1>Your have course : {id}</h1>
    </div>
  );
};

export default Course;

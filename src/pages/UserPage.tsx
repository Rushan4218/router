import React from "react";
import { useParams } from "react-router-dom";

const UserPage: React.FC = () => {
  const { id } = useParams();
  console.log(id);

  return <h1>UserPage</h1>;
};

export { UserPage };

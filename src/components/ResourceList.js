import React from "react";
import useResource from "./useResource";

const ResourceList = props => {
  console.log(props);
  const resources = useResource(props.resource);

  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;

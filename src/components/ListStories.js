import React, { useState, useEffect } from "react";
import { useGetStories } from "../apiHooks";
import Story from "./Story";
const ListStories = (props) => {
  const { type } = props;
  const { isLoading, stories } = useGetStories(type);
  
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    stories.map(({ data: story }, index) => (
      <Story key={story.id} story={{ ...story, index }} />
    ))
  );
};

export default ListStories;

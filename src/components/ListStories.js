import React, { useState, useEffect, Fragment } from "react";
import { useGetStories } from "../apiHooks";
import ListHeader from "./ListHeader";
import Story from "./Story";
const ListStories = ({ type }) => {
  const { isLoading, stories } = useGetStories(type);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStories = stories
    ? stories.filter(
        ({ data: story }) =>
          (story && story.title.toLowerCase().includes(searchTerm)) ||
          (story && story.by.toLowerCase().includes(searchTerm))
      )
    : [];
  return (
    <Fragment>
      <ListHeader
        onChangeText={(e) => setSearchTerm(e.target.value)}
        selectedType={type}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : filteredStories.length ? (
        filteredStories.map(({ data: story }, index) => (
          <Story key={story.id} story={{ ...story, index, searchTerm }} />
        ))
      ) : (
        <h3>No Stories Found</h3>
      )}
    </Fragment>
  );
};

export default ListStories;

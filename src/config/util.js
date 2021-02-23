import axios from "axios";
import { BASE_API_URL } from "./env";

const getStory = async (id) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log("Error while getting a story.");
  }
};

export const getStories = async (type) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    const stories = await Promise.all(storyIds.slice(0, 10).map(getStory));
    return stories;
  } catch (error) {
    console.log("Error while getting list of stories.");
  }
};

export const Highlight = ({ search = "", children = "" }) => {
  const regularExpression = (str = "") =>
    str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$&");
  const substring = new RegExp(`(${regularExpression(search)})`, "i");
  const parts = String(children).split(substring);
  if (search) {
    return typeof children === "string"
      ? parts.map((part, index) =>
          substring.test(part) ? <mark key={index}>{part}</mark> : part
        )
      : children;
  } else {
    return children;
  }
};

export const getUser = async (id) => {
  try {
    const user = await axios.get(`${BASE_API_URL}/user/${id}.json`);
    return user;
  } catch (error) {
    console.log("Error while getting a story.");
  }
};

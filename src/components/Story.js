import React from "react";
import moment from "moment";
const Link = ({ url, title }) => (
  <a href={url} target="_blank" rel="noreferrer">
    {title}
  </a>
);

const Story = ({ story: { index, by, title, score, kids, time, url } }) => {
  return (
    <div className="story">
      <div style={{ display: "flex" }}>
        <span>{index + 1}.</span>
        <span>
          <div class="votearrow" title="upvote"></div>
        </span>
        {title}
      </div>
      <div className="story-info">
        <span>{score} Points</span> <span>by {by}</span>
        <span>{moment(time).startOf("hour").fromNow()}</span>|
        <span>{`${kids && kids.length > 0 ? kids.length : 0} comments`}</span>
      </div>
    </div>
  );
};

export default Story;

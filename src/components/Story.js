import React from "react";
import moment from "moment";
import { Highlight } from "../config/util";

const Story = ({
  story: { index, by, title, score, kids, time, searchTerm },
}) => {
  return (
    <div className="story">
      <div>
        <span>{index + 1}.</span>
      </div>
      <div>
        <div style={{ display: "flex", fontWeight: "bold" }}>
          <div class="votearrow" title="upvote"></div>
          <span>
            <Highlight search={searchTerm}>{title}</Highlight>
          </span>
        </div>
        <div className="story-info">
          <span>{score} Points</span>
          <span>
            by
            <a href={`profile/${by}`} rel="noreferrer">
              <Highlight search={searchTerm}>{by}</Highlight>
            </a>
          </span>
          <span>{moment(time).startOf("hour").fromNow()} </span>|
          <span>{`${kids && kids.length > 0 ? kids.length : 0} comments`}</span>
        </div>
      </div>
    </div>
  );
};

export default Story;

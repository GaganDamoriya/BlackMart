import React from "react";
import "./cardLayout.css";
function CardLayout({ type = "singleRow", noColumn = 3, children }) {
  let columnstr = "";
  for (let index = 0; index < noColumn; index++) {
    columnstr += `${100 / noColumn}%`;
  }
  if (type === "singleRow")
    return (
      <>
        <div>
          <div className="singleRow">{children}</div>
        </div>
      </>
    );
  if (type === "multiRow")
    return (
      <>
        <div className="multiRow" style={{ gridTemplateColumns: columnstr }}>
          {children}
        </div>
      </>
    );
}

export default CardLayout;

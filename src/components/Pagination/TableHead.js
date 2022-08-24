// import {connect} from "react-redux";
import React from "react";
import "./styles.css";

/*****************************
 * Returns Pagination Table Heading
 *****************************/
function TableHead({tableHeaders}) {
  const renderHeaders = tableHeaders.map((header, index) => {
    return (
      <th className="wd-lg-20p" key={index}>
          <span>{header}</span>
        </th>
    )
  });

  console.log("TABLEHEAD: PROPS:", tableHeaders);
  return (
    <thead>
      <tr>
        {renderHeaders}
      </tr>
    </thead>
  );
}
export default TableHead;

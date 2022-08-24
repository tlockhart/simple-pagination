import React from "react";
import TableRow from "./TableRow";
import TableHead from "./TableHead";
// import {connect} from "react-redux";

const TableController = (props) => {
  const { data, deletePost, tableHeaders } = props;
  console.log("TABLECONTROLLER:", props);

  const renderTableHeaders = () => {
    return <TableHead 
    tableHeaders={tableHeaders}
    />;
  };

  const renderTableRows = () => {
    if (data && data.length > 0) {
      return data?.map((post, index) => {
		  return (<TableRow
			  key={index}
			  person={post}
			  deletePost={deletePost} />);

      });
    }
  //    else {
	// 	return (
	// 		<tr><td colSpan={7}>Loading Users...</td></tr>
	// 	)
	// }
  };

  return (
    <div id="table-wrapper">
      {/* <div className="table-responsive userlist-table"> */}
        <table className="table card-table table-striped table-vcenter text-nowrap mb-0 issues-table">
          {renderTableHeaders()}
          {/* <tbody> */}
            {renderTableRows()}
            {/* </tbody> */}
        </table>
      {/* </div> */}
    </div>
  );
};

export default TableController;

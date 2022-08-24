// import { connect } from "react-redux";
import Avatar from "../global/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DropDown from "../global/DropDown";

/*****************************
 * Returns Pagination Table Rows
 *****************************/
function TableRow({data, tableFields}) {
	// console.log("TableRow: Props:", props)
//   console.log("Table-Row:", props);
const renderFields = tableFields.map((field, idx) => {
  return (
  <td key={idx}>{data[field]}</td>
  )
});
  return (
    <tr>
   { renderFields}
    </tr>
  );
}

// const mapStateToProps = ({ session }) => ({
//   session,
// });

// const mapDispatchToProps = (dispatch) => ({});

// export default connect(mapStateToProps, mapDispatchToProps)(TableRow);
export default TableRow;

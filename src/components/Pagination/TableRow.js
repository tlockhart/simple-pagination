import { connect } from "react-redux";
import Avatar from "../../global/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DropDown from "../../global/DropDown";

/*****************************
 * Returns Pagination Table Rows
 *****************************/
function TableRow(props) {
	console.log(props.person)
//   console.log("Table-Row:", props);
  return (
    <tr>
      <td>
        <Avatar user={props.person} size='sm'/>
      </td>
      <td style={{ paddingLeft: "0" }}>
        {props.person.firstName} {props.person.lastName}
      </td>
      <td>{new Date(props.person.createdAt).toLocaleDateString()}</td>
      <td>{props.person.team}</td>
      <td>{props.person.role}</td>
      <td>{props.person.email}</td>
		<td>
			<DropDown>
				<li> <button onClick={() => props.deleteUser(props.person.email)} className={'text-danger'}>Delete</button></li>
			</DropDown>
		</td>
    </tr>
  );
}

const mapStateToProps = ({ session }) => ({
  session,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);

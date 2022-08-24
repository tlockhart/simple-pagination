import React from "react";
import TableRow from "./TableRow";
import TableHead from "./TableHead";
import {connect} from "react-redux";

const UserTable = (props) => {
  const { data, deleteUser } = props;

  const renderTableHeaders = () => {
    return <TableHead />;
  };

  const renderTableRows = () => {
    if (data && data.length > 0) {
      return data?.map((user, index) => {
		  return (<TableRow
			  key={index}
			  person={user}
			  deleteUser={deleteUser} />);

      });
    } else {
		return (
			<tr><td colSpan={7}>Loading Users...</td></tr>
		)
	}
  };

  return (
    <div id="table-wrapper">
      <div className="table-responsive userlist-table">
        <table className="table card-table table-striped table-vcenter text-nowrap mb-0 issues-table">
          {renderTableHeaders()}
          <tbody>{renderTableRows()}</tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = ({session}) => ({
	session
});
export default connect(
	mapStateToProps
)(UserTable);

import {connect} from "react-redux";
import React from "react";

/*****************************
 * Returns Pagination Table Heading
 *****************************/
function TableHead(props) {
  return (
    <thead>
      <tr>
        <th className="wd-lg-8p">
          <span>User</span>
        </th>
        <th className="wd-lg-20p">
          <span />
        </th>
        <th className="wd-lg-20p">
          <span>Created</span>
        </th>
        <th className="wd-lg-20p">
          <span>Team</span>
        </th>
        <th className="wd-lg-20p">
          <span>Role</span>
        </th>
        <th className="wd-lg-20p">
          <span>Email</span>
        </th>
        {props.session.team === "Creative Technology" ? (
          <th className="wd-lg-20p">Action</th>
        ) : (
          <></>
        )}
      </tr>
    </thead>
  );
}
const mapStateToProps = ({session}) => ({
    session
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TableHead);

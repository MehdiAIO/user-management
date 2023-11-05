import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux";

const Users = () => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleUsers = () => {
    return users.map((user, key) => (
      <tr key={user.id} className="text-center">
        <td className="pt-3">{key + 1}</td>
        <td className="pt-3">{user.name}</td>
        <td className="pt-3">{user.email}</td>
        <td className="pt-3">{user.country}</td>
        <td>
          <div className="d-flex justify-content-center gap-2">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => dispatch(deleteUser(user.id))}
            >
              Delete
            </button>
            <Link to={`/updateUser/${user.id}`}>
              <button type="button" class="btn btn-primary">
                Update
              </button>
            </Link>
          </div>
        </td>
      </tr>
    ));
  };

  return <>{handleUsers()}</>;
};

export default Users;

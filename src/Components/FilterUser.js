import React from 'react';

const FilterUser = (props) => {
  return (
    <form className="filter__user">
      <label></label>
      <select className="dropdown">
        <option>USER</option>
        {props.users.map((user) => {
          return (
            <option key={user.username} value={`${user.username}`}>
              {user.username}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default FilterUser;

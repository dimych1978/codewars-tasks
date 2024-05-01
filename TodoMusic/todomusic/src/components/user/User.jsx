import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reducer, userSlice } from "../../store/user/user.slice";
import { getUserById } from "../../store/user/user.action";

const User = () => {
  const { isLoading, error, user } = useSelector(state => state.user);
console.log(useSelector(state => state.user));
  const dispatch = useDispatch();
  const getUser = () => dispatch(getUserById(20))

  return (
    <div>
      <button onClick={getUser}>Get user</button>
      {isLoading ? (
        <h3>'Loading...'</h3>
      ) : 
      error ? (
        <h2 style={{color: 'red'}}>{error} </h2>
      ) :
       user.title ? (
        <h2>User:{user.title}</h2>
      ) : (
        <h2>User not found</h2>
      )}
    </div>
  );
};

export default User;

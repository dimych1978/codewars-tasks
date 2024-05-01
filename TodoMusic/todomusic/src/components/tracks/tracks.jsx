import React from "react";
import { useDispatch } from "react-redux";
import { useFavorite } from "../../hooks/useFavorite";
import { actions } from "../../store/music.slice";

const Tracks = ({ track }) => {
  const favorite = useFavorite();
  const dispatch = useDispatch();

  const isExist = favorite.some(item => item.id === track.id);
  console.log(isExist);
  return (
    <div>
      <h2>{track.name}</h2>
      <button onClick={() => dispatch(actions.toggleFavorite(track))}>
        {isExist ? "Remove from" : "Add to"} favorite
      </button>
    </div>
  );
};

export default Tracks;

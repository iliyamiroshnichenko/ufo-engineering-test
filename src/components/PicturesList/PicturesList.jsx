import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "throttle-debounce";

import {
  getGamesByParams,
  filterDownByLikes,
  filterUpByLikes,
  filterDownByComments,
  filterUpByComments,
  filterByTags,
} from "../../redux/pictures/actions";

import PictureItem from "../PictureItem/PictureItem";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const PicturesList = () => {
  const dispatch = useDispatch();
  const { pictures } = useSelector((state) => state.picturesReducer);

  useEffect(() => {
    dispatch(getGamesByParams());
  }, []);

  const sortDownByLikes = () => {
    dispatch(filterDownByLikes());
  };
  const sortUpByLikes = () => {
    dispatch(filterUpByLikes());
  };
  const sortDownByComments = () => {
    dispatch(filterDownByComments());
  };
  const sortUpByComments = () => {
    dispatch(filterUpByComments());
  };

  const handleInput = debounce(300, (e) => {
    if (e.target.value === "") {
      dispatch(getGamesByParams());
      return;
    }
    dispatch(filterByTags(e.target.value));
  });

  return (
    <main className="main">
      <h1>Pictures List</h1>
      <div className="filters-container">
        <label htmlFor="filterTags">
          Sort by Tags
          <input type="text" name="text" id="filterTags" onKeyUp={handleInput} />
        </label>
        <div className="sort-container">
          <span>Sort by Likes</span>
          <button onClick={sortUpByLikes}>
            <KeyboardArrowUpIcon className="up-icon" />
          </button>
          <button onClick={sortDownByLikes}>
            <KeyboardArrowDownIcon className="down-icon" />
          </button>
        </div>
        <div className="sort-container">
          <span>Sort by Comments</span>
          <button onClick={sortUpByComments}>
            <KeyboardArrowUpIcon className="up-icon" />
          </button>
          <button onClick={sortDownByComments}>
            <KeyboardArrowDownIcon className="down-icon" />
          </button>
        </div>
      </div>
      <ul className="pictures-list">
        {pictures.map((picture) => (
          <PictureItem key={picture.id} picture={picture} />
        ))}
      </ul>
    </main>
  );
};

export default PicturesList;

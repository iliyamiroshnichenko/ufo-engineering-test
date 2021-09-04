import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getGamesByParams, filterByLikes, filterByComments } from "../../redux/pictures/actions";

import PictureItem from "../PictureItem/PictureItem";

const PicturesList = () => {
  const dispatch = useDispatch();
  const { pictures } = useSelector((state) => state.picturesReducer);

  useEffect(() => {
    dispatch(getGamesByParams());
  }, []);

  const handleSortByLikesBtnClick = () => {
    dispatch(filterByLikes());
  };
  const handleSortByCommentsBtnClick = () => {
    dispatch(filterByComments());
  };

  return (
    <main className="main">
      <h1>Pictures List</h1>
      <div className="filers-container">
        <label htmlFor="filterTags">
          Sort by Tags
          <input type="text" name="text" id="filterTags" />
        </label>
        <button onClick={handleSortByLikesBtnClick}>Sort by Likes</button>
        <button onClick={handleSortByCommentsBtnClick}>Sort by Comments</button>
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

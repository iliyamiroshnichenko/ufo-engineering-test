import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { findPictureById } from "../../redux/pictures/actions";

const PicturePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentPicture } = useSelector((state) => state.picturesReducer);

  useEffect(() => {
    console.log(id);
    dispatch(findPictureById(+id));
  }, [id]);

  return (
    <>
      {currentPicture && Object.keys(currentPicture) ? (
        <div>
          <img src={currentPicture.largeImageURL} alt="" className="big-image" />
          <span>
            Link to page:
            <a href={currentPicture.pageURL} target="_blank" rel="noreferrer">
              {currentPicture.pageURL}
            </a>
          </span>
          <p>Tags: {currentPicture.tags}</p>
          <p>Views: {currentPicture.views}</p>
          <p>Downloads: {currentPicture.downloads}</p>
          <p>Collections: {currentPicture.collections}</p>
          <p>Likes: {currentPicture.likes}</p>
          <p>Comments: {currentPicture.comments}</p>
          <p>User name: {currentPicture.user}</p>
          <p>User avatar:</p>
          <img className="user-avatar" src={currentPicture.userImageURL} alt="user avatar" width="100" height="100" />
        </div>
      ) : (
        <p>Oops, we have some mistake</p>
      )}
    </>
  );
};

export default PicturePage;

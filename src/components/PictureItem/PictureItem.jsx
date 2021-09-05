import { Link } from "react-router-dom";
import Tag from "../Tag/Tag";

const PictureItem = ({ picture }) => {
  const { id, webformatURL, tags, likes, comments } = picture;

  return (
    <li className="picture-item">
      <div className="picture-container">
        <Link to={`/${id}`}>
          <img src={webformatURL} alt="" />
        </Link>
      </div>
      <div className="picture-info">
        <p>Likes: {likes}</p>
        <p>Comments: {comments}</p>
        <ul className="tags-container">
          {tags.map((tag, idx) => (
            <Tag key={tag} tag={tag} id={id} idx={idx} />
          ))}
        </ul>
      </div>
    </li>
  );
};

export default PictureItem;

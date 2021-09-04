import Tag from "../Tag/Tag";

const PictureItem = ({ picture }) => {
  const { pageURL, webformatURL, tags, likes, comments } = picture;

  const tagsArr = tags.split(", ");
  return (
    <li className="picture-item">
      <div className="picture-container">
        <a href={pageURL} target="_blank" rel="noreferrer">
          <img src={webformatURL} alt="" />
        </a>
      </div>
      <div className="picture-info">
        <p>Likes: {likes}</p>
        <p>Comments: {comments}</p>
        <ul className="tags-container">
          {tagsArr.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </ul>
      </div>
    </li>
  );
};

export default PictureItem;

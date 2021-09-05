import { useDispatch } from "react-redux";
import { editTag } from "../../redux/pictures/actions";

const Tag = ({ tag, id, idx }) => {
  const dispatch = useDispatch();

  const handleDoubleClick = (e) => {
    e.target.contentEditable = true;
  };

  const handleBlur = (e, id, idx) => {
    e.target.contentEditable = false;
    dispatch(editTag(id, e.target.textContent, idx));
  };

  return (
    <li className="tag" onDoubleClick={handleDoubleClick} onBlur={(e) => handleBlur(e, id, idx)}>
      {tag}
    </li>
  );
};

export default Tag;

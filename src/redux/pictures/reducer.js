import {
  GET_PICTURES,
  IS_LOADING_PICTURES,
  IS_FAILED_PICTURES,
  FILTER_DOWN_BY_LIKES,
  FILTER_UP_BY_LIKES,
  FILTER_DOWN_BY_COMMENTS,
  FILTER_UP_BY_COMMENTS,
  FILTER_BY_TAGS,
  FIND_PICTURE_BY_ID,
} from "./types";

const initialState = {
  pictures: [],
  loading: false,
  failed: false,
  currentPicture: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PICTURES:
      return { ...state, pictures: action.pictures };
    case IS_LOADING_PICTURES:
      return { ...state, loading: action.loading };
    case IS_FAILED_PICTURES:
      return { ...state, pictures: action.failed };
    case FILTER_DOWN_BY_LIKES:
      return { ...state, pictures: state.pictures.sort((a, b) => (a.likes < b.likes ? 1 : -1)) };
    case FILTER_UP_BY_LIKES:
      return { ...state, pictures: state.pictures.sort((a, b) => (a.likes > b.likes ? 1 : -1)) };
    case FILTER_DOWN_BY_COMMENTS:
      return { ...state, pictures: state.pictures.sort((a, b) => (a.comments < b.comments ? 1 : -1)) };
    case FILTER_UP_BY_COMMENTS:
      return { ...state, pictures: state.pictures.sort((a, b) => (a.comments > b.comments ? 1 : -1)) };
    case FILTER_BY_TAGS:
      return { ...state, pictures: state.pictures.filter(({ tags }) => tags.includes(action.value)) };
    case FIND_PICTURE_BY_ID:
      return { ...state, currentPicture: state.pictures.find(({ id }) => id === action.id) };
    default:
      return state;
  }
};

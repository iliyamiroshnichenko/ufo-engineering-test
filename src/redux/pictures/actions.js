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
  EDIT_TAG,
} from "./types";
import { getImages } from "../../api/service";

export const getGamesByParams = () => async (dispatch) => {
  dispatch({ type: IS_LOADING_PICTURES, loading: true });
  try {
    const pictures = await getImages();
    dispatch({ type: GET_PICTURES, pictures });
  } catch (e) {
    console.log(e);
    dispatch({ type: IS_FAILED_PICTURES, failed: true });
  } finally {
    dispatch({ type: IS_LOADING_PICTURES, loading: false });
  }
};

export const filterDownByLikes = () => (dispatch) => dispatch({ type: FILTER_DOWN_BY_LIKES });
export const filterUpByLikes = () => (dispatch) => dispatch({ type: FILTER_UP_BY_LIKES });

export const filterDownByComments = () => (dispatch) => dispatch({ type: FILTER_DOWN_BY_COMMENTS });
export const filterUpByComments = () => (dispatch) => dispatch({ type: FILTER_UP_BY_COMMENTS });

export const filterByTags = (value) => (dispatch) => dispatch({ type: FILTER_BY_TAGS, value });

export const findPictureById = (id) => (dispatch) => dispatch({ type: FIND_PICTURE_BY_ID, id });

export const editTag = (id, text, idx) => (dispatch) => dispatch({ type: EDIT_TAG, payload: { id, text, idx } });

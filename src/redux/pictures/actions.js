import { GET_PICTURES, IS_LOADING_PICTURES, IS_FAILED_PICTURES, FILTER_BY_LIKES, FILTER_BY_COMMENTS } from "./types";
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

export const filterByLikes = () => (dispatch) => dispatch({ type: FILTER_BY_LIKES });

export const filterByComments = () => (dispatch) => dispatch({ type: FILTER_BY_COMMENTS });

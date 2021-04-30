import { ICommentState, IImageState } from "../reducers/appReducer"
import {
  ADD_COMMENT,
  DETAILS_CLOSE_CARD,
  DETAILS_OPEN_CARD,
  LOAD_IMAGES,
} from "./action-types"

export function loadImages(images: IImageState) {
  return { type: LOAD_IMAGES, payload: images }
}

export function detailsOpenCard(
  image: string,
  comments: ICommentState[],
  image_id: number
) {
  return { type: DETAILS_OPEN_CARD, payload: { image, comments, image_id } }
}

export function detailsCloseCard() {
  return { type: DETAILS_CLOSE_CARD }
}
export function addComment(comment: ICommentState) {
  return { type: ADD_COMMENT, payload: comment }
}

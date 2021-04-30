import axios from "axios"
import {
  URL_ADD_COMMENTS,
  URL_GET_COMMENTS,
  URL_IMAGES,
} from "../constants/urls"
import { addComment, detailsOpenCard, loadImages } from "./actions"

export function asyncLoadImages() {
  return async (dispatch: any) => {
    try {
      const { data: images } = await axios.get(URL_IMAGES)
      dispatch(loadImages(images))
    } catch (error) {}
  }
}

export function asyncOpenCard(image_id: number) {
  return async (dispatch: any) => {
    try {
      const { data: image } = await axios.get(URL_IMAGES + image_id)
      let { data: comments } = await axios.get(URL_GET_COMMENTS + image_id)
      if (comments.detail) comments = []
      dispatch(detailsOpenCard(image.src, comments, image_id))
    } catch (error) {}
  }
}

export function asyncAddComment(
  name: string,
  description: string,
  image_id: number
) {
  return async (dispatch: any) => {
    try {
      const { data: comment } = await axios.post(URL_ADD_COMMENTS, {
        name,
        description,
        image_id,
      })
      dispatch(addComment(comment))
    } catch (error) {}
  }
}

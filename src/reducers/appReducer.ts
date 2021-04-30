import {
  ADD_COMMENT,
  DETAILS_CLOSE_CARD,
  DETAILS_OPEN_CARD,
  LOAD_IMAGES,
} from "../actions/action-types"

export interface IAppState {
  images: IImageState[]
  detailsOpenCard: IDetailsOpenCard | null
}

export interface IImageState {
  image_id: number
  src: string
}

export interface ICommentState {
  id: number
  name: string
  image_id: number
  description: string
}

export interface IDetailsOpenCard {
  image: string
  comments: ICommentState[]
  image_id: number
}

interface IAction {
  type: string
  payload: any
}

const initialState = {
  images: [],
  detailsOpenCard: null,
}

const appReducer = (state: IAppState = initialState, action: IAction) => {
  switch (action.type) {
    case LOAD_IMAGES:
      state.images = action.payload
      break
    case DETAILS_OPEN_CARD:
      state.detailsOpenCard = action.payload
      break
    case DETAILS_CLOSE_CARD:
      state.detailsOpenCard = null
      break
    case ADD_COMMENT:
      if (state.detailsOpenCard) {
        state.detailsOpenCard.comments.push(action.payload)
        state.detailsOpenCard = { ...state.detailsOpenCard }
      }
      break
  }
  return { ...state }
}

export { appReducer }

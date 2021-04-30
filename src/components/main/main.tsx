import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { asyncLoadImages, asyncOpenCard } from "../../actions/async-actions"
import { IImageState } from "../../reducers/appReducer"
import { IState } from "../../reducers/rootReducer"
import Container from "../container/container"
import Details from "../details/details"
import classes from "./main.module.css"

function Main() {
  const images = useSelector<IState, IImageState[]>((state) => state.app.images)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(asyncLoadImages())
  }, [])
  const onOpenCard = (image_id: number) => {
    dispatch(asyncOpenCard(image_id))
  }
  const imageCard = images.map((image) => (
    <div
      className={classes.imageCard}
      key={image.image_id}
      onClick={() => onOpenCard(image.image_id)}
    >
      <img width={300} height={200} src={image.src} alt=""/>
    </div>
  ))
  return (
    <Container>
      <Details />
      <div className={classes.images}>{imageCard}</div>
    </Container>
  )
}

export default Main

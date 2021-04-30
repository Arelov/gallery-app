import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { asyncAddComment } from "../../actions/async-actions"
import { IDetailsOpenCard } from "../../reducers/appReducer"
import { IState } from "../../reducers/rootReducer"
import classes from "./details.module.css"
import close from "../../assets/Close.png"
import { detailsCloseCard } from "../../actions/actions"

function Details() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const dispatch = useDispatch()
  const detailsOpenCard = useSelector<IState, IDetailsOpenCard | null>(
    (state) => state.app.detailsOpenCard
  )

  if (detailsOpenCard) {
    const comments = detailsOpenCard.comments.map((e) => (
      <div key={e.id}>
        <div className={classes.userName}>{e.name}</div>
        <div className={classes.description}>{e.description}</div>
      </div>
    ))
    const onSubmit = () => {
      dispatch(asyncAddComment(name, description, detailsOpenCard.image_id))
      setDescription("")
    }
    const onClose = () => {
      dispatch(detailsCloseCard())
    }
    return (
      <div className={classes.outsideContainer}>
        <div className={classes.card}>
          <div className={classes.close} onClick={onClose}>
            <img width={20} height={20} src={close} alt="" />
          </div>
          <div>
            <img className={classes.img} src={detailsOpenCard.image} alt="" />
            <div className={classes.fillField}>
              <input
                placeholder="Ваше имя"
                className={classes.input}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
              <input
                placeholder="Ваш комментарий"
                className={classes.input}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
              />
              <button className={classes.button} onClick={onSubmit}>
                Оставить комментарий
              </button>
            </div>
          </div>
          <div className={classes.comments}>{comments}</div>
        </div>
      </div>
    )
  }

  return <></>
}

export default Details

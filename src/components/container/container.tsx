import React from "react"
import classes from "./container.module.css"

interface Props {
  children: React.ReactNode
}

function Container({ children }: Props) {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.title}>Test APP</div>
        {children}
      </div>
      <div className={classes.footer}>© 2018-2019</div>
    </div>
  )
}

export default Container

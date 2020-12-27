import React, { FC } from "react"

import styles from "./Description.module.css"

export const Description: FC<{ text: string }> = ({ text }) => (
  <div className={styles.Description}>{text}</div>
)

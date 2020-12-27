import React, { FC } from "react"
import { ReactElement } from "react"

import styles from "./Description.module.css"

export const Description: FC<{ text: string | ReactElement }> = ({ text }) => (
  <div className={styles.Description}>{text}</div>
)

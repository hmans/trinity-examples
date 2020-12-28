import React, { FC } from "react"
import { ReactElement } from "react"

export const Description: FC<{ text: string | ReactElement }> = ({ text }) => (
  <div className="Description">{text}</div>
)

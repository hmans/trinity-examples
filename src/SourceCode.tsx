import React from "react"
import styles from "./SourceCode.module.css"

const SourceCodeLink: React.FC<{ path: string }> = ({ path, children }) => (
  <a
    href={`https://github.com/hmans/trinity-examples/tree/master/src/${path}`}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
)

export const SourceCode: React.FC<{ path: string }> = ({ path }) => {
  return (
    <div className={styles.SourceCode}>
      <SourceCodeLink path={path}>Source Code</SourceCodeLink>
    </div>
  )
}

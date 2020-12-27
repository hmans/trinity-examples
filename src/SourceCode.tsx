import React, { useEffect, useState } from "react"
import styles from "./SourceCode.module.css"

const fullSourceUrl = (path: string) =>
  `https://github.com/hmans/trinity-examples/tree/master/src/${path}`

const rawSourceUrl = (path: string) =>
  `https://raw.githubusercontent.com/hmans/trinity-examples/master/src/${path}`

const SourceCodeLink: React.FC<{ path: string }> = ({ path, children }) => (
  <a href={fullSourceUrl(path)} target="_blank" rel="noreferrer">
    {children}
  </a>
)

export const SourceCode: React.FC<{ path: string }> = ({ path }) => {
  const [source, setSource] = useState<string>()

  useEffect(() => {
    fetch(rawSourceUrl(path)).then((response) => {
      response.text().then((text) => setSource(text))
    })
  })

  return (
    <div className={styles.SourceCode}>
      <SourceCodeLink path={path}>Source Code</SourceCodeLink>
      {source && <pre>{source}</pre>}
    </div>
  )
}

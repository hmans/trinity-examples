import React, { useEffect, useState } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"

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
      response.text().then((text) => {
        setSource(text)
      })
    })
  }, [path])

  return (
    <div className={styles.SourceCode}>
      {source && (
        <SyntaxHighlighter language="typescript" style={docco}>
          {source}
        </SyntaxHighlighter>
      )}
    </div>
  )
}

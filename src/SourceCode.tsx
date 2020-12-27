import React, { useEffect, useState } from "react"
import { Light as SyntaxHighlighter } from "react-syntax-highlighter"
import ts from "react-syntax-highlighter/dist/esm/languages/hljs/typescript"
import style from "react-syntax-highlighter/dist/esm/styles/hljs/github"
import styles from "./SourceCode.module.css"

SyntaxHighlighter.registerLanguage("typescript", ts)

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
      <p>
        <SourceCodeLink path={path}>Open on GitHub</SourceCodeLink>
      </p>
      {source && (
        <SyntaxHighlighter language="typescript" style={style}>
          {source}
        </SyntaxHighlighter>
      )}
    </div>
  )
}

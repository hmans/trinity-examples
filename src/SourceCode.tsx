import React, { useEffect, useState } from "react"
import { Light as SyntaxHighlighter } from "react-syntax-highlighter"
import ts from "react-syntax-highlighter/dist/esm/languages/hljs/typescript"
import style from "react-syntax-highlighter/dist/esm/styles/hljs/github"
import styles from "./SourceCode.module.css"

SyntaxHighlighter.registerLanguage("typescript", ts)

const GithubLink: React.FC<{ path: string }> = ({ path, children }) => (
  <a
    href={`https://github.com/hmans/trinity-examples/tree/master/src/${path}`}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
)

const CodesandboxLink: React.FC<{ path: string }> = ({ path, children }) => (
  <a
    href={`https://codesandbox.io/s/trinity-examples-7v8np?file=/src/${path}`}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
)

export const SourceCode: React.FC<{ path: string }> = ({ path }) => {
  const [source, setSource] = useState<string>()

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/hmans/trinity-examples/master/src/${path}`).then(
      (response) => {
        response.text().then((text) => {
          setSource(text)
        })
      }
    )
  }, [path])

  return (
    <div className={styles.SourceCode}>
      <p>
        <GithubLink path={path}>GitHub</GithubLink> &middot;{" "}
        <CodesandboxLink path={path}>Codesandbox</CodesandboxLink>
      </p>
      {source && (
        <SyntaxHighlighter language="typescript" style={style}>
          {source}
        </SyntaxHighlighter>
      )}
    </div>
  )
}

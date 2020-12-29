import React, { useEffect, useState } from "react"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript"
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism"

SyntaxHighlighter.registerLanguage("typescript", typescript)

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
    <div className="SourceCode">
      <p>
        <GithubLink path={path}>
          <img
            alt="Github"
            src="https://img.shields.io/static/v1.svg?style=flat&label=code&message=github&color=333333"
          />
        </GithubLink>{" "}
        <CodesandboxLink path={path}>
          <img
            alt="Codesandbox"
            src="https://img.shields.io/static/v1.svg?style=flat&label=code&message=codesandbox&color=333366"
          />
        </CodesandboxLink>
      </p>
      {source && (
        <SyntaxHighlighter language="typescript" style={prism}>
          {source}
        </SyntaxHighlighter>
      )}
    </div>
  )
}

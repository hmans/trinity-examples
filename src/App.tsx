import React from "react"
import { Route, Switch } from "wouter"
import { examples } from "./examples"
import { SimpleExample } from "./examples/SimpleExample"
import { Navigation } from "./Navigation"
import { SourceCode } from "./SourceCode"

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/">
          <SimpleExample />
        </Route>
        <>
          {examples.map(([path, _, ExampleComponent, sourcePath]) => (
            <Route key={path} path={path}>
              <SourceCode path={sourcePath} />
              <ExampleComponent />
            </Route>
          ))}
        </>
        <Route>
          <p>Not found</p>
        </Route>
      </Switch>
    </>
  )
}

export default App

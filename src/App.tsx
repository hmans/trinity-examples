import React from "react"
import { Route, Switch } from "wouter"
import { examples } from "./examples"
import { Navigation } from "./Navigation"
import { SourceCode } from "./SourceCode"

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/">{null}</Route>
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

import React from "react"
import { Route, Switch } from "wouter"
import { Description } from "./Description"
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
          {examples.map((category) =>
            category.examples.map(([path, , description, ExampleComponent, sourcePath]) => (
              <Route key={path} path={path}>
                <Description text={description} />
                <SourceCode path={sourcePath} />
                <ExampleComponent />
              </Route>
            ))
          )}
        </>
        <Route>
          <p>Not found</p>
        </Route>
      </Switch>
    </>
  )
}

export default App

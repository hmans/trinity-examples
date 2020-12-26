import React from "react"
import { Route, Switch } from "wouter"
import { examples } from "./examples"
import { SimpleExample } from "./examples/SimpleExample"
import { Navigation } from "./Navigation"

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/">
          <SimpleExample />
        </Route>
        <>
          {examples.map(([path, _, ExampleComponent]) => (
            <Route key={path} path={path}>
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

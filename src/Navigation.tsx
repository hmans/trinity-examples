import React from "react"
import { Link } from "wouter"
import { examples } from "./examples"

export const Navigation = () => (
  <div className="Navigation">
    <p>
      A collection of examples for (and experiments with) the{" "}
      <a href="https://github.com/hmans/trinity" target="_blank" rel="noreferrer">
        <strong>Trinity</strong>
      </a>{" "}
      framework.
    </p>

    {examples.map((category, i) => (
      <div key={i} className="category">
        <h3>{category.name}</h3>
        {category.examples.map(([path, name]) => (
          <Link key={path} to={path}>
            {name}
          </Link>
        ))}
      </div>
    ))}
  </div>
)

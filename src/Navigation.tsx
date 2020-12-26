import React from "react"
import { Link } from "wouter"
import { examples } from "./examples"

export const Navigation = () => (
  <div>
    {examples.map(([path, name, _]) => (
      <Link key={path} to={path}>
        {name}
      </Link>
    ))}
  </div>
)

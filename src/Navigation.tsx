import React from "react"
import { Link } from "wouter"
import { examples } from "./examples"
import styles from "./Navigation.module.css"

export const Navigation = () => (
  <div className={styles.Navigation}>
    {examples.map(([path, name, _]) => (
      <Link key={path} to={path}>
        {name}
      </Link>
    ))}
  </div>
)
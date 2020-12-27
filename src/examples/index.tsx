import { ExplicitRenderingExample } from "./ExplicitRenderingExample"
import { GLTFExample } from "./GLTFExample"
import { HelloWorldExample } from "./HelloWorldExample"
import React from "react"

export type Example = [string, string, string | React.ReactElement, Function, string]

export const examples: ExampleCategory[] = [
  {
    name: "The Basics",
    examples: [
      [
        "/hello-world",
        "Hello World",
        <>
          <strong>A rotating cube.</strong> Hello world.
        </>,
        HelloWorldExample,
        "examples/HelloWorldExample.js"
      ],
      [
        "/explicit-rendering",
        "Explicit Rendering",
        <>
          <strong>A demo of Trinity's explicit frame rendering mechanism.</strong> The cube updates
          constantly, but we only render one frame every second. Because we can!
        </>,
        ExplicitRenderingExample,
        "examples/ExplicitRenderingExample.js"
      ]
    ]
  },
  {
    name: "Loading Assets",
    examples: [
      [
        "/gltf",
        "GLTF Loading",
        "A spaceship model loaded from a GLTF file.",
        GLTFExample,
        "examples/GLTFExample.js"
      ]
    ]
  }
]

export type ExampleCategory = { name: string; examples: Example[] }

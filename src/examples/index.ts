import { ExplicitRenderingExample } from "./ExplicitRenderingExample"
import { GLTFExample } from "./GLTFExample"
import { HelloWorldExample } from "./HelloWorldExample"

export type Example = [string, string, string, Function, string]

export const examples: ExampleCategory[] = [
  {
    name: "The Basics",
    examples: [
      [
        "/hello-world",
        "Hello World",
        "The quintessential Hello World example for Trinity. It's a rotating cube!",
        HelloWorldExample,
        "examples/HelloWorldExample.js"
      ],
      [
        "/explicit-rendering",
        "Explicit Rendering",
        "A demo of Trinity's explicit frame rendering mechanism. The cube updates constantly, but we only render one frame every second. Because we can!",
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

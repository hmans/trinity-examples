import { ExplicitRenderingExample } from "./ExplicitRenderingExample"
import { GLTFExample } from "./GLTFExample"
import { HelloWorldExample } from "./HelloWorldExample"

export type Example = [string, string, Function, string]

export const examples: ExampleCategory[] = [
  {
    name: "The Basics",
    examples: [
      ["/hello-world", "Hello World", HelloWorldExample, "examples/HelloWorldExample.js"],
      [
        "/explicit-rendering",
        "Explicit Rendering",
        ExplicitRenderingExample,
        "examples/ExplicitRenderingExample.js"
      ]
    ]
  },
  {
    name: "Loading Assets",
    examples: [["/gltf", "GLTF Loading", GLTFExample, "examples/GLTFExample.js"]]
  }
]

export type ExampleCategory = { name: string; examples: Example[] }

import { GLTFExample } from "./GLTFExample"
import { HelloWorldExample } from "./HelloWorldExample"

export type Example = [string, string, Function, string]

export const examples: ExampleCategory[] = [
  {
    name: "The Basics",
    examples: [["/hello-world", "Hello World", HelloWorldExample, "examples/HelloWorldExample.js"]]
  },
  {
    name: "Loading Assets",
    examples: [["/gltf", "GLTF Loading", GLTFExample, "examples/GLTFExample.tsx"]]
  }
]

export type ExampleCategory = { name: string; examples: Example[] }

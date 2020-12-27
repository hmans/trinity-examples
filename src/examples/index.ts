import { GLTFExample } from "./GLTFExample"
import { HelloWorldExample } from "./HelloWorldExample"

export type Example = [string, string, Function, string]

export const examples: Example[] = [
  ["/hello-world", "Hello World", HelloWorldExample, "examples/HelloWorldExample.js"],
  ["/gltf", "GLTF Loading", GLTFExample, "examples/GLTFExample.tsx"]
]

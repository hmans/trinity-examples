import { GLTFExample } from "./GLTFExample"
import { SimpleExample } from "./SimpleExample"

export type Example = [string, string, Function, string]

export const examples: Example[] = [
  ["/simple", "Simple Example", SimpleExample, "examples/SimpleExample.tsx"],
  ["/gltf", "GLTF Loading", GLTFExample, "examples/GLTFExample.tsx"]
]
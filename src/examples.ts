import { GLTFExample } from "./examples/GLTFExample"
import { SimpleExample } from "./examples/SimpleExample"

export const examples: [string, string, Function][] = [
  ["/simple", "Simple Example", SimpleExample],
  ["/gltf", "GLTF Loading", GLTFExample]
]

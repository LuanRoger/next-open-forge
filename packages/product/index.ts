// biome-ignore lint/performance/noBarrelFile: This will avoid circular dependencies and is easier to maintain than a barrel file.
export { posthog as product } from "posthog-js";
export { parseError } from "./error";

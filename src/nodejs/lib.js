import { message } from "./main.mjs";
export const repeat = (string) => `${string} ${string}`;
export function shout(string) {
  return `${string.toUpperCase()}!`;
}
setTimeout(() => {
  console.log("message:", message);
});
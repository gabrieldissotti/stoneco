import type { App, AppContext as AC } from "deco/mod.ts";
import manifest, { Manifest } from "./manifest.gen.ts";

export interface Props {
  test: string;
}

export interface State extends Props {

}

/**
 * @title StoneCO
 * @category Analytics
 */
export default function App(
  state: Props = { test : '1' },
): App<Manifest, State> {
  console.log('==========================================')
  console.log(state)
  console.log('==========================================')
  return { manifest, state };
}

export type AppContext = AC<ReturnType<typeof App>>;
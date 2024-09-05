import type { App, AppContext as AC } from "deco/mod.ts";
import manifest, { Manifest } from "./manifest.gen.ts";

export interface Props {
  test: string;
}

/**
 * @title StoneCO
 * @category Analytics
 */
export default function App(
  state: Props = { test : '1' },
): App<Manifest, Props> {
  console.log('==========================================')
  console.log(state.test)
  console.log('==========================================')
  return { manifest, state };
}

export type AppContext = AC<ReturnType<typeof App>>;
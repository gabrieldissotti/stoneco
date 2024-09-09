import type { App, AppContext as AC } from "deco/mod.ts";
import manifest, { Manifest } from "./manifest.gen.ts";

export interface Props {
  test: string;
}

export interface State extends Props {

}

/**
 * @title StoneCo
 * @description Code shared between Stone products.
 * @category Tool
 * @logo https://raw.githubusercontent.com/gabrieldissotti/stoneco/static/images/logo-stone.png
 */
export default function App(
  props: Props = { test : '1' },
): App<Manifest, State> {
  console.log('==========================================')
  console.log(props)
  console.log('==========================================')
  return { manifest, state: props };
}

export type AppContext = AC<ReturnType<typeof App>>;
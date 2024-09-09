import type { App, AppContext as AC } from "deco/mod.ts";
import manifest, { Manifest } from "./manifest.gen.ts";
import StoneCoPreview from "./preview/StoneCo.tsx";
import { Icon } from "./loaders/icons.ts";

export type IApp = ReturnType<typeof App>;

export interface Props {
  test: string;
}

export interface State extends Props {
 icons: Icon[]
}

/**
 * @title StoneCo
 * @description Code shared between Stone products.
 * @category Tool
 * @logo https://raw.githubusercontent.com/gabrieldissotti/stoneco/main/logo.png
 */
export default function App(props: Props): App<Manifest, State> {
  console.log('==========================================')
  console.log(props)
  console.log('==========================================')
  return { manifest, state: {
    icons: [],
    ...props
  } };
}

export type AppContext = AC<ReturnType<typeof App>>;

export const Preview = StoneCoPreview;
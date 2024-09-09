import { BaseContext } from "deco/engine/core/resolver.ts";
import { AppRuntime } from "deco/types.ts";
import type { IApp } from "../mod.ts";
import loadIcons from "../loaders/icons.ts";
import { asset } from "$fresh/runtime.ts";

export default function StoneCoPreview(app: AppRuntime<BaseContext, IApp["state"]>) {
  const icons = loadIcons(app.state) // NÃO TEM COMO SERVIR ARQUIVOS ESTÁTICOS PRA REAPROVEITAR EM TODOS OS SITES... PIVOTANDO

  return (
    <div style={{ color: '#000'}}>
      <h1>Sprites</h1>

      <div>
        <h2>
          Icons
        </h2>
        {
          icons.map((icon) => (
            <div  style={{ color: '#000'}}>
              <svg
                width={24}
                height={24}
                strokeWidth={16}
                style={{ color: '#000' }}
              >
                <use href={asset(`/icons.svg#${icon.icon}`)} />
              </svg>
              {icon.label}
            </div>
          ))
        }
      </div>

      <div>
        <h2>
          Flags
        </h2>
        a
        b
        c
      </div>
    </div>
  )
}
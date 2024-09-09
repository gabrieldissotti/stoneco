import { allowCorsFor, FnContext } from "deco/mod.ts";
import { AvailableIcons } from "../static/generated/icons.ts";

const icons = Object.keys(AvailableIcons).map((iconName) => ({
  component: AvailableIcons[iconName as keyof typeof AvailableIcons],
  label: iconName,
}));

export default function IconsLoader(
  _props: unknown,
  req: Request,
  ctx: FnContext,
) {
  Object.entries(allowCorsFor(req)).map(([name, value]) => {
    ctx.response.headers.set(name, value);
  });

  return icons.map((icon) => ({
    icon: icon.component,
    label: icon.label,
    value: icon.label,
  }));
}
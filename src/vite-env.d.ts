/// <reference types="vite/client" />

declare module "eslint-plugin-react-hooks";
declare module "eslint-plugin-react-refresh";
declare module "*.svg?react" {
  import { FunctionComponent, SVGAttributes } from "react";
  const content: FunctionComponent<SVGAttributes<SVGElement>>;
  export default content;
}

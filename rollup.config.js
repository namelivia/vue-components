import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from 'rollup-plugin-postcss';
import vue from "rollup-plugin-vue";
import packageJson from "./package.json";

export default {
  input: "src/index.js",
  output: [
    {
      format: "cjs",
      file: packageJson.main,
      sourcemap: true
    },
    {
      format: "esm",
      file: packageJson.module,
      sourcemap: true
    }
  ],
  plugins: [
    vue(),
    postcss(),
    peerDepsExternal(),
    resolve(),
    commonjs()
  ]
};


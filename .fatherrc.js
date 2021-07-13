export default {
  pkgs: [
    "util",
    "jsx",
    "components",
    "react",
    "fund-charts",
    "tinker-components",
    "wealth-chart-components",
    "storytelling",
  ],
  cjs: {
    type: "babel",
  },
  esm: {
    type: "babel",
  },
  runtimeHelpers: true,
  lessInBabelMode: true,
  cssModules: true,
};

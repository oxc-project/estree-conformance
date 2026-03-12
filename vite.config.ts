import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    ignorePatterns: ["submodules", "tests"],
  },
  lint: {
    plugins: ["unicorn", "typescript", "oxc"],
    ignorePatterns: ["submodules", "tests"],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
});

declare module "*submodules/acorn-jsx/index.js" {
  type AcornPlugin = (BaseParser: typeof import("acorn").Parser) => typeof import("acorn").Parser;

  const acornJsx: (options?: {
    allowNamespacedObjects?: boolean;
    allowNamespaces?: boolean;
  }) => AcornPlugin;

  export default acornJsx;
}

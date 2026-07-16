# ESTree Conformance Test Suite

This repository provides ESTree AST conformance test fixtures generated from multiple sources including test262, TypeScript, and acorn-jsx test suites.

Acorn is run with:

```
ecmaVersion: "latest",
sourceType: module ? "module" : "script",
preserveParens: true,
allowHashBang: true,
allowReturnOutsideFunction: true,
```

Negative errors are filtered out.
Files producing the following errors are ignored:

- Invalid regular expression flag.
- Unexpected token (possibility a stage 3 feature).
- Cannot parse YAML from Test262 fixture comment.

`RegExp`s and `BigInt`s are serialized as `null`, because JSON does not support `BigInt`s, and
serializes `RegExp`s as `{}` (not useful).

`Literal`s which are RegExps have `regex.flags` property sorted in alphabetical order, the way V8 does.

`Literal` nodes which are `BigInt`s have a `bigint` field containing the `BigInt`'s value as a string.
Similarly, `Literal` nodes which are `RegExp`s have a `regex` field containing `pattern` and `flags`.
So in both cases, the `BigInt` / `RegExp` can be reconstructed from this extra data.

`Infinity` is serialized as `1e+400` - which `JSON.parse` converts back to `Infinity`.

A `decorators` field is added to `ClassDeclaration`, `ClassExpression`, `MethodDefinition`,
and `PropertyDefinition` (stage 3 proposal).

A `phase` field is added to `ImportDeclaration` and `ImportExpression` (stage 3 proposal).

A non-standard `hashbang` field is added to `Program`.

## Maintenance

### Automated Updates

A GitHub Actions workflow automatically updates fixtures every Monday at 09:00 UTC. The workflow:

1. Fetches the latest commit SHAs from test262, TypeScript, and acorn-jsx repositories
2. Updates the commit SHAs in `package.json` if they have changed
3. Runs `pnpm run init` to clone the repositories
4. Runs `pnpm run start` to generate new fixtures
5. Commits and pushes changes back to the repository

You can also manually trigger the workflow from the GitHub Actions tab.

### Manual Updates

```bash
# Change the commit SHAs in the clone commands, then:
pnpm run init
pnpm run start
git commit -m "update snapshots"

# Test262 only
pnpm run clone-test262
pnpm run gen-test262

# Acorn JSX only
pnpm run clone-acorn-jsx
pnpm run gen-acorn-jsx

# TypeScript only
pnpm run clone-typescript
pnpm run gen-typescript
```

[acorn]: https://github.com/acornjs/acorn
[test262]: https://github.com/tc39/test262

# [Sponsored By](https://oxc.rs/sponsor)

<p align="center">
  <a href="https://oxc.rs/sponsor">
    <img src="https://raw.githubusercontent.com/oxc-project/sponsors/main/sponsors.svg" alt="Our sponsors" />
  </a>
</p>

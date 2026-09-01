__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "srcthing",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 16
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 25
          },
          "exportKind": "value",
          "start": 8,
          "end": 25
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./src/thing.js",
        "raw": "\"./src/thing.js\"",
        "start": 32,
        "end": 48
      },
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 49
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 49
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "srcthing",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 17,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 20,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 27,
    "end": 31
  },
  {
    "type": "String",
    "value": "\"./src/thing.js\"",
    "start": 32,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "me",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 405
          },
          "start": 398,
          "end": 405
        }
      ],
      "source": {
        "type": "Literal",
        "value": "@this/package",
        "raw": "\"@this/package\"",
        "start": 411,
        "end": 426
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 391,
      "end": 427
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "me",
            "optional": false,
            "typeAnnotation": null,
            "start": 429,
            "end": 431
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 432,
            "end": 437
          },
          "optional": false,
          "computed": false,
          "start": 429,
          "end": 437
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 429,
        "end": 439
      },
      "directive": null,
      "start": 429,
      "end": 440
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "srcthing",
          "optional": false,
          "typeAnnotation": null,
          "start": 458,
          "end": 466
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 470,
            "end": 474
          },
          "start": 468,
          "end": 474
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 475,
          "end": 477
        },
        "expression": false,
        "start": 449,
        "end": 477
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 442,
      "end": 477
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 391,
  "end": 478
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 391,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 400,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "me",
    "start": 403,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 406,
    "end": 410
  },
  {
    "type": "String",
    "value": "\"@this/package\"",
    "start": 411,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "me",
    "start": 429,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 432,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 439,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 442,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 449,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "srcthing",
    "start": 458,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 468,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 470,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 476,
    "end": 477
  }
]
```

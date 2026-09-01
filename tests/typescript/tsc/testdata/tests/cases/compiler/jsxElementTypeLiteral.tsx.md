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
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 61
          },
          "start": 51,
          "end": 61
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 67,
        "end": 74
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 75
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 91
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 109
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 242,
                    "end": 253
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "div",
                      "raw": "\"div\"",
                      "start": 256,
                      "end": 261
                    },
                    "start": 256,
                    "end": 261
                  },
                  "declare": false,
                  "start": 237,
                  "end": 262
                }
              ],
              "start": 110,
              "end": 266
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 96,
            "end": 266
          }
        ],
        "start": 92,
        "end": 268
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 77,
      "end": 268
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 322,
            "end": 323
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 327,
                "end": 330
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 326,
              "end": 333
            },
            "children": [],
            "closingElement": null,
            "start": 326,
            "end": 333
          },
          "definite": false,
          "start": 322,
          "end": 333
        }
      ],
      "declare": false,
      "start": 318,
      "end": 334
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 401,
            "end": 402
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "span",
                "start": 406,
                "end": 410
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 405,
              "end": 413
            },
            "children": [],
            "closingElement": null,
            "start": 405,
            "end": 413
          },
          "definite": false,
          "start": 401,
          "end": 413
        }
      ],
      "declare": false,
      "start": 397,
      "end": 414
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 507,
            "end": 508
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ruhroh",
                "start": 512,
                "end": 518
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 511,
              "end": 521
            },
            "children": [],
            "closingElement": null,
            "start": 511,
            "end": 521
          },
          "definite": false,
          "start": 507,
          "end": 521
        }
      ],
      "declare": false,
      "start": 503,
      "end": 522
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 522
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 44,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 53,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 56,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 62,
    "end": 66
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 67,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 77,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 96,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 106,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 237,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "ElementType",
    "start": 242,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 254,
    "end": 255
  },
  {
    "type": "String",
    "value": "\"div\"",
    "start": 256,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 318,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 326,
    "end": 327
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 327,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 333,
    "end": 334
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 397,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 405,
    "end": 406
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 406,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 503,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 511,
    "end": 512
  },
  {
    "type": "JSXIdentifier",
    "value": "ruhroh",
    "start": 512,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  }
]
```

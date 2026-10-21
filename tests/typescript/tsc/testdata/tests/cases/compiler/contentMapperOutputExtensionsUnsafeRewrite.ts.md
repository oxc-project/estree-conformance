__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "directory",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 22
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 25,
              "end": 26
            },
            "definite": false,
            "start": 13,
            "end": 26
          }
        ],
        "declare": false,
        "start": 7,
        "end": 27
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 27
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 28
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
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "directory",
    "start": 13,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ambient",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 22,
                  "end": 28
                },
                "start": 20,
                "end": 28
              },
              "start": 13,
              "end": 28
            },
            "init": null,
            "definite": false,
            "start": 13,
            "end": 28
          }
        ],
        "declare": false,
        "start": 7,
        "end": 29
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 29
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 30
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
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "ambient",
    "start": 13,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "directory",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 18
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "directory",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 18
          },
          "importKind": "value",
          "start": 9,
          "end": 18
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./components.astro",
        "raw": "\"./components.astro\"",
        "start": 26,
        "end": 46
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 47
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "actual",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 63
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "actual",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 63
          },
          "importKind": "value",
          "start": 57,
          "end": 63
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./actual.astro",
        "raw": "\"./actual.astro\"",
        "start": 71,
        "end": 87
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 48,
      "end": 88
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ambient",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 105
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ambient",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 105
          },
          "importKind": "value",
          "start": 98,
          "end": 105
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./ambient.astro",
        "raw": "\"./ambient.astro\"",
        "start": 113,
        "end": 130
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 89,
      "end": 131
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "actual",
            "optional": false,
            "typeAnnotation": null,
            "start": 141,
            "end": 147
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "aliased",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 158
          },
          "importKind": "value",
          "start": 141,
          "end": 158
        }
      ],
      "source": {
        "type": "Literal",
        "value": "alias",
        "raw": "\"alias\"",
        "start": 166,
        "end": 173
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 132,
      "end": 174
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
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 182
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 186
          },
          "optional": false,
          "computed": false,
          "start": 175,
          "end": 186
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "directory",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 196
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "actual",
            "optional": false,
            "typeAnnotation": null,
            "start": 198,
            "end": 204
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ambient",
            "optional": false,
            "typeAnnotation": null,
            "start": 206,
            "end": 213
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "aliased",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 222
          }
        ],
        "optional": false,
        "start": 175,
        "end": 223
      },
      "directive": null,
      "start": 175,
      "end": 224
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 224
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
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
    "value": "directory",
    "start": 9,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 21,
    "end": 25
  },
  {
    "type": "String",
    "value": "\"./components.astro\"",
    "start": 26,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "actual",
    "start": 57,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 66,
    "end": 70
  },
  {
    "type": "String",
    "value": "\"./actual.astro\"",
    "start": 71,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "ambient",
    "start": 98,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 108,
    "end": 112
  },
  {
    "type": "String",
    "value": "\"./ambient.astro\"",
    "start": 113,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "actual",
    "start": 141,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 148,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "aliased",
    "start": 151,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 161,
    "end": 165
  },
  {
    "type": "String",
    "value": "\"alias\"",
    "start": 166,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 175,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 183,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "directory",
    "start": 187,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "actual",
    "start": 198,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "ambient",
    "start": 206,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "aliased",
    "start": 215,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  }
]
```

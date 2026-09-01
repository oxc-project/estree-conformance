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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 36,
              "end": 37
            },
            "definite": false,
            "start": 32,
            "end": 37
          }
        ],
        "declare": false,
        "start": 26,
        "end": 38
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 38
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 38
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 29
          },
          "start": 26,
          "end": 29
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder/index.js",
        "raw": "\"./subfolder/index.js\"",
        "start": 35,
        "end": 57
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 58
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mod",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 62
      },
      "directive": null,
      "start": 59,
      "end": 63
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 63
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 19,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 26,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 30,
    "end": 34
  },
  {
    "type": "String",
    "value": "\"./subfolder/index.js\"",
    "start": 35,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 59,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  }
]
```

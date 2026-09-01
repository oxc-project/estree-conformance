__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NS",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 36,
              "end": 42
            },
            "declare": false,
            "start": 27,
            "end": 42
          }
        ],
        "start": 21,
        "end": 44
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 44
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 44
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "NS",
    "start": 18,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 27,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "R",
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
    "type": "Identifier",
    "value": "number",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "computeCommonSourceDirectoryOfFilenames",
        "optional": false,
        "typeAnnotation": null,
        "start": 276,
        "end": 315
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "integer",
          "optional": false,
          "typeAnnotation": null,
          "start": 316,
          "end": 323
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "integer",
                "optional": false,
                "typeAnnotation": null,
                "start": 338,
                "end": 345
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 348,
                "end": 349
              },
              "start": 338,
              "end": 349
            },
            "start": 331,
            "end": 349
          }
        ],
        "start": 325,
        "end": 366
      },
      "expression": false,
      "start": 267,
      "end": 366
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "see3",
            "optional": false,
            "typeAnnotation": null,
            "start": 400,
            "end": 404
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 407,
            "end": 411
          },
          "definite": false,
          "start": 400,
          "end": 411
        }
      ],
      "declare": false,
      "start": 396,
      "end": 411
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 267,
  "end": 527
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 267,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "computeCommonSourceDirectoryOfFilenames",
    "start": 276,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "integer",
    "start": 316,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 331,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "integer",
    "start": 338,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 346,
    "end": 347
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 365,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 396,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "see3",
    "start": 400,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 405,
    "end": 406
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 407,
    "end": 411
  }
]
```

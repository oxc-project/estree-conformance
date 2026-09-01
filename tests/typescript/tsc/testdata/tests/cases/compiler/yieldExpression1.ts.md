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
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": null,
              "start": 20,
              "end": 25
            },
            "directive": null,
            "start": 20,
            "end": 26
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 37,
                "end": 38
              },
              "start": 31,
              "end": 38
            },
            "directive": null,
            "start": 31,
            "end": 39
          }
        ],
        "start": 14,
        "end": 41
      },
      "expression": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 54
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IterableIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 74
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 75,
                "end": 81
              }
            ],
            "start": 74,
            "end": 82
          },
          "start": 58,
          "end": 82
        },
        "start": 56,
        "end": 82
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": null,
              "start": 89,
              "end": 94
            },
            "directive": null,
            "start": 89,
            "end": 95
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 106,
                "end": 107
              },
              "start": 100,
              "end": 107
            },
            "directive": null,
            "start": 100,
            "end": 108
          }
        ],
        "start": 83,
        "end": 110
      },
      "expression": false,
      "start": 43,
      "end": 110
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 110
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 20,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 31,
    "end": 36
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 43,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "IterableIterator",
    "start": 58,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 75,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 89,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 100,
    "end": 105
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  }
]
```

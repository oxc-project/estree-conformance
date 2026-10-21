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
        "name": "decrement",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 18
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "count",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 26,
              "end": 32
            },
            "start": 24,
            "end": 32
          },
          "start": 19,
          "end": 32
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "count",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 49
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 54,
                "end": 55
              },
              "start": 44,
              "end": 55
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": null,
              "start": 57,
              "end": 64
            },
            "alternate": null,
            "start": 40,
            "end": 64
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "count",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 74
              },
              "start": 69,
              "end": 76
            },
            "directive": null,
            "start": 69,
            "end": 77
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "count",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 91
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 96,
                "end": 97
              },
              "start": 86,
              "end": 97
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": null,
              "start": 99,
              "end": 106
            },
            "alternate": null,
            "start": 82,
            "end": 106
          }
        ],
        "start": 34,
        "end": 108
      },
      "expression": false,
      "start": 0,
      "end": 108
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 108
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
    "type": "Identifier",
    "value": "decrement",
    "start": 9,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 19,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 26,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 40,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 44,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 50,
    "end": 53
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Keyword",
    "value": "return",
    "start": 57,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 69,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 74,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 82,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 86,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 92,
    "end": 95
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 99,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  }
]
```

__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 64,
          "end": 65
        },
        "operator": "*",
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 68,
          "end": 69
        },
        "start": 64,
        "end": 69
      },
      "directive": null,
      "start": 63,
      "end": 71
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 118,
            "end": 119
          },
          "operator": "*",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 122,
            "end": 123
          },
          "start": 118,
          "end": 123
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 127,
          "end": 128
        },
        "start": 117,
        "end": 128
      },
      "directive": null,
      "start": 117,
      "end": 129
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeSureTypedefsAreStillRecognized",
        "optional": false,
        "typeAnnotation": null,
        "start": 223,
        "end": 257
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 258,
          "end": 259
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 261,
          "end": 262
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 264,
        "end": 266
      },
      "expression": false,
      "start": 214,
      "end": 266
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 63,
  "end": 266
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 66,
    "end": 67
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 117,
    "end": 118
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 120,
    "end": 121
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 125,
    "end": 126
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 214,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "makeSureTypedefsAreStillRecognized",
    "start": 223,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 265,
    "end": 266
  }
]
```

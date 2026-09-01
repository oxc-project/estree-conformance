__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "indexOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 15
          },
          "optional": false,
          "computed": false,
          "start": 6,
          "end": 15
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 18,
                "end": 19
              },
              "operator": "/",
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 20,
                "end": 21
              },
              "start": 18,
              "end": 21
            },
            "prefix": true,
            "start": 16,
            "end": 22
          }
        ],
        "optional": false,
        "start": 6,
        "end": 23
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 112,
              "end": 116
            },
            "start": 105,
            "end": 117
          }
        ],
        "start": 99,
        "end": 121
      },
      "alternate": null,
      "start": 2,
      "end": 121
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 2,
  "end": 121
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "if",
    "start": 2,
    "end": 4
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "indexOf",
    "start": 8,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 19,
    "end": 20
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 105,
    "end": 111
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 112,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  }
]
```

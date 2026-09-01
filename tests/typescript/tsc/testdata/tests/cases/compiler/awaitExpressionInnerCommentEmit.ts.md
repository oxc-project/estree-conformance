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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 18
      },
      "generator": false,
      "async": true,
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
              "type": "AwaitExpression",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 46,
                "end": 47
              },
              "start": 40,
              "end": 47
            },
            "directive": null,
            "start": 40,
            "end": 48
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 72,
                "end": 73
              },
              "start": 53,
              "end": 73
            },
            "directive": null,
            "start": 53,
            "end": 74
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 85,
                "end": 86
              },
              "start": 79,
              "end": 86
            },
            "directive": null,
            "start": 79,
            "end": 86
          }
        ],
        "start": 21,
        "end": 101
      },
      "expression": false,
      "start": 0,
      "end": 101
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 101
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "async",
    "start": 0,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 15,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 19,
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
    "value": "await",
    "start": 40,
    "end": 45
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 53,
    "end": 58
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 79,
    "end": 84
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  }
]
```

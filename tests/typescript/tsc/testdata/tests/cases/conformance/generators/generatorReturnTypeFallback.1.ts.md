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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 140,
        "end": 141
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
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 156,
                "end": 157
              },
              "start": 150,
              "end": 157
            },
            "directive": null,
            "start": 150,
            "end": 158
          }
        ],
        "start": 144,
        "end": 160
      },
      "expression": false,
      "start": 130,
      "end": 160
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 130,
  "end": 160
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 130,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 150,
    "end": 155
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  }
]
```

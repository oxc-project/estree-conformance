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
        "start": 196,
        "end": 197
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
                "start": 212,
                "end": 213
              },
              "start": 206,
              "end": 213
            },
            "directive": null,
            "start": 206,
            "end": 214
          }
        ],
        "start": 200,
        "end": 216
      },
      "expression": false,
      "start": 186,
      "end": 216
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 186,
  "end": 216
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 186,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 206,
    "end": 211
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216
  }
]
```

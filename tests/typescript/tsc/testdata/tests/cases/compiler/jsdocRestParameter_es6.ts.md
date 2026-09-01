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
        "start": 37,
        "end": 38
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 43
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 39,
          "end": 43
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 52
            },
            "directive": null,
            "start": 51,
            "end": 53
          }
        ],
        "start": 45,
        "end": 67
      },
      "expression": false,
      "start": 28,
      "end": 67
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 28,
  "end": 67
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 28,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 39,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  }
]
```

__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "myFn",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 8
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 8
        }
      ],
      "declare": false,
      "start": 0,
      "end": 9
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 19,
        "end": 23
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 27,
          "end": 30
        },
        "start": 25,
        "end": 30
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 31,
        "end": 34
      },
      "expression": false,
      "start": 10,
      "end": 34
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 34
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "myFn",
    "start": 4,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8,
    "end": 9
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 10,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "myFn",
    "start": 19,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 27,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 33,
    "end": 34
  }
]
```

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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 27
          },
          "init": null,
          "definite": false,
          "start": 26,
          "end": 27
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 29
          },
          "init": null,
          "definite": false,
          "start": 28,
          "end": 29
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 31
          },
          "init": null,
          "definite": false,
          "start": 30,
          "end": 31
        }
      ],
      "declare": false,
      "start": 22,
      "end": 32
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 34
      },
      "directive": null,
      "start": 33,
      "end": 34
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "y",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 36
      },
      "directive": null,
      "start": 35,
      "end": 36
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 38
      },
      "directive": null,
      "start": 37,
      "end": 38
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 38
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 22,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 37,
    "end": 38
  }
]
```

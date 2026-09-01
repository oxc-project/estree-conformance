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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 8,
              "end": 9
            },
            "consequent": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 15,
                "end": 16
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 23,
                "end": 24
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 28
              },
              "start": 15,
              "end": 28
            },
            "alternate": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 34
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 42
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 46
              },
              "start": 33,
              "end": 46
            },
            "start": 8,
            "end": 46
          },
          "definite": false,
          "start": 4,
          "end": 46
        }
      ],
      "declare": false,
      "start": 0,
      "end": 47
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 47
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
    "value": "v",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  }
]
```

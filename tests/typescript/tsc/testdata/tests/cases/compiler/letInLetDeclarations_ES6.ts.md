__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 63
          },
          "init": {
            "type": "Literal",
            "value": 50,
            "raw": "50",
            "start": 66,
            "end": 68
          },
          "definite": false,
          "start": 62,
          "end": 68
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "let",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 73
          },
          "init": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 76,
            "end": 77
          },
          "definite": false,
          "start": 70,
          "end": 77
        }
      ],
      "declare": false,
      "start": 58,
      "end": 78
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 91
              },
              "init": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 94,
                "end": 96
              },
              "definite": false,
              "start": 90,
              "end": 96
            },
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "let",
                "optional": false,
                "typeAnnotation": null,
                "start": 98,
                "end": 101
              },
              "init": {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 104,
                "end": 106
              },
              "definite": false,
              "start": 98,
              "end": 106
            }
          ],
          "declare": false,
          "start": 86,
          "end": 107
        }
      ],
      "start": 80,
      "end": 109
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 58,
  "end": 109
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 58,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 64,
    "end": 65
  },
  {
    "type": "Numeric",
    "value": "50",
    "start": 66,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "let",
    "start": 70,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 86,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 92,
    "end": 93
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 94,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "let",
    "start": 98,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 102,
    "end": 103
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 104,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  }
]
```

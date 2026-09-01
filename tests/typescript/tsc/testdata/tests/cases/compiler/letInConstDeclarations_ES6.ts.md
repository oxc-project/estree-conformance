__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 65
          },
          "init": {
            "type": "Literal",
            "value": 50,
            "raw": "50",
            "start": 68,
            "end": 70
          },
          "definite": false,
          "start": 64,
          "end": 70
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "let",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 75
          },
          "init": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 78,
            "end": 79
          },
          "definite": false,
          "start": 72,
          "end": 79
        }
      ],
      "declare": false,
      "start": 58,
      "end": 80
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 95
              },
              "init": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 98,
                "end": 100
              },
              "definite": false,
              "start": 94,
              "end": 100
            },
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "let",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 105
              },
              "init": {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 108,
                "end": 110
              },
              "definite": false,
              "start": 102,
              "end": 110
            }
          ],
          "declare": false,
          "start": 88,
          "end": 111
        }
      ],
      "start": 82,
      "end": 113
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 58,
  "end": 113
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 58,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67
  },
  {
    "type": "Numeric",
    "value": "50",
    "start": 68,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "let",
    "start": 72,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 88,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 96,
    "end": 97
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 98,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "let",
    "start": 102,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  }
]
```

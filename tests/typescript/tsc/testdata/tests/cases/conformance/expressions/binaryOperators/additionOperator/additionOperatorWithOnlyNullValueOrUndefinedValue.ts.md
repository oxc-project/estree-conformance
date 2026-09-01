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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 20
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 23,
              "end": 27
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 30,
              "end": 34
            },
            "start": 23,
            "end": 34
          },
          "definite": false,
          "start": 18,
          "end": 34
        }
      ],
      "declare": false,
      "start": 14,
      "end": 35
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 42
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 45,
              "end": 49
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 61
            },
            "start": 45,
            "end": 61
          },
          "definite": false,
          "start": 40,
          "end": 61
        }
      ],
      "declare": false,
      "start": 36,
      "end": 62
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 69
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 81
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 84,
              "end": 88
            },
            "start": 72,
            "end": 88
          },
          "definite": false,
          "start": 67,
          "end": 88
        }
      ],
      "declare": false,
      "start": 63,
      "end": 89
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 96
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 108
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 120
            },
            "start": 99,
            "end": 120
          },
          "definite": false,
          "start": 94,
          "end": 120
        }
      ],
      "declare": false,
      "start": 90,
      "end": 121
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 14,
  "end": 121
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 14,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 18,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 21,
    "end": 22
  },
  {
    "type": "Null",
    "value": "null",
    "start": 23,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 28,
    "end": 29
  },
  {
    "type": "Null",
    "value": "null",
    "start": 30,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 36,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 40,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 43,
    "end": 44
  },
  {
    "type": "Null",
    "value": "null",
    "start": 45,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 52,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 63,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 67,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 72,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 82,
    "end": 83
  },
  {
    "type": "Null",
    "value": "null",
    "start": 84,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 90,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 94,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 99,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 111,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  }
]
```

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
            "start": 19,
            "end": 21
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 24,
              "end": 28
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 32,
              "end": 36
            },
            "start": 24,
            "end": 36
          },
          "definite": false,
          "start": 19,
          "end": 36
        }
      ],
      "declare": false,
      "start": 15,
      "end": 37
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
            "start": 42,
            "end": 44
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 47,
              "end": 51
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 64
            },
            "start": 47,
            "end": 64
          },
          "definite": false,
          "start": 42,
          "end": 64
        }
      ],
      "declare": false,
      "start": 38,
      "end": 65
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
            "start": 70,
            "end": 72
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 84
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 88,
              "end": 92
            },
            "start": 75,
            "end": 92
          },
          "definite": false,
          "start": 70,
          "end": 92
        }
      ],
      "declare": false,
      "start": 66,
      "end": 93
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
            "start": 98,
            "end": 100
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 112
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 125
            },
            "start": 103,
            "end": 125
          },
          "definite": false,
          "start": 98,
          "end": 125
        }
      ],
      "declare": false,
      "start": 94,
      "end": 126
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 15,
  "end": 126
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 15,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 19,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 22,
    "end": 23
  },
  {
    "type": "Null",
    "value": "null",
    "start": 24,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 29,
    "end": 31
  },
  {
    "type": "Null",
    "value": "null",
    "start": 32,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 38,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 42,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 45,
    "end": 46
  },
  {
    "type": "Null",
    "value": "null",
    "start": 47,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 52,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 55,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 66,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 70,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 75,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 85,
    "end": 87
  },
  {
    "type": "Null",
    "value": "null",
    "start": 88,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 94,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 98,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 103,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 113,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 116,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  }
]
```

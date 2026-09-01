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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "some",
              "raw": "'some'",
              "start": 8,
              "end": 14
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": "text",
              "raw": "'text'",
              "start": 36,
              "end": 42
            },
            "start": 8,
            "end": 42
          },
          "definite": false,
          "start": 4,
          "end": 42
        }
      ],
      "declare": false,
      "start": 0,
      "end": 43
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 50
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "some",
              "raw": "'some'",
              "start": 53,
              "end": 59
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": "text",
              "raw": "'text'",
              "start": 84,
              "end": 90
            },
            "start": 53,
            "end": 90
          },
          "definite": false,
          "start": 49,
          "end": 90
        }
      ],
      "declare": false,
      "start": 45,
      "end": 91
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 98
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "some",
              "raw": "'some'",
              "start": 101,
              "end": 107
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": "text",
              "raw": "'text'",
              "start": 149,
              "end": 155
            },
            "start": 101,
            "end": 155
          },
          "definite": false,
          "start": 97,
          "end": 155
        }
      ],
      "declare": false,
      "start": 93,
      "end": 156
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 156
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
    "value": "a",
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
    "type": "String",
    "value": "'some'",
    "start": 8,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 34,
    "end": 35
  },
  {
    "type": "String",
    "value": "'text'",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 45,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52
  },
  {
    "type": "String",
    "value": "'some'",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 82,
    "end": 83
  },
  {
    "type": "String",
    "value": "'text'",
    "start": 84,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 93,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 99,
    "end": 100
  },
  {
    "type": "String",
    "value": "'some'",
    "start": 101,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 130,
    "end": 131
  },
  {
    "type": "String",
    "value": "'text'",
    "start": 149,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  }
]
```

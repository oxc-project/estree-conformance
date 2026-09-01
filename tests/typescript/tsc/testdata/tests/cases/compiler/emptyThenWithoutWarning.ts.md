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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 8,
            "end": 9
          },
          "definite": false,
          "start": 4,
          "end": 9
        }
      ],
      "declare": false,
      "start": 0,
      "end": 10
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 21,
              "end": 22
            },
            "start": 15,
            "end": 22
          },
          "operator": "||",
          "right": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 27
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 32,
              "end": 33
            },
            "start": 26,
            "end": 33
          },
          "start": 15,
          "end": 33
        },
        "operator": "||",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 38
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 43,
            "end": 44
          },
          "start": 37,
          "end": 44
        },
        "start": 15,
        "end": 44
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 46,
        "end": 49
      },
      "alternate": {
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
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 65,
                  "end": 72
                },
                "init": {
                  "type": "Literal",
                  "value": "Ooops",
                  "raw": "\"Ooops\"",
                  "start": 75,
                  "end": 82
                },
                "definite": false,
                "start": 65,
                "end": 82
              }
            ],
            "declare": false,
            "start": 61,
            "end": 83
          }
        ],
        "start": 55,
        "end": 85
      },
      "start": 12,
      "end": 85
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 85
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
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
    "type": "Numeric",
    "value": "4",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 12,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 17,
    "end": 20
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 23,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 28,
    "end": 31
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 34,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 39,
    "end": 42
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 50,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 61,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 65,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 73,
    "end": 74
  },
  {
    "type": "String",
    "value": "\"Ooops\"",
    "start": 75,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  }
]
```

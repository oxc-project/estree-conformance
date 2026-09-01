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
            "name": "array",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 9
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 13,
                "end": 14
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 15,
                "end": 16
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 17,
                "end": 18
              }
            ],
            "start": 12,
            "end": 19
          },
          "definite": false,
          "start": 4,
          "end": 19
        }
      ],
      "declare": false,
      "start": 0,
      "end": 20
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
            "name": "sum",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 28
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 31,
            "end": 32
          },
          "definite": false,
          "start": 25,
          "end": 32
        }
      ],
      "declare": false,
      "start": 21,
      "end": 33
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 47
            },
            "init": null,
            "definite": false,
            "start": 44,
            "end": 47
          }
        ],
        "declare": false,
        "start": 40,
        "end": 47
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "array",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 56
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "sum",
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 71
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 76,
                "end": 77
              },
              "start": 68,
              "end": 77
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 89,
                      "end": 94
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 98,
                          "end": 99
                        },
                        {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 100,
                          "end": 101
                        },
                        {
                          "type": "Literal",
                          "value": 6,
                          "raw": "6",
                          "start": 102,
                          "end": 103
                        }
                      ],
                      "start": 97,
                      "end": 104
                    },
                    "start": 89,
                    "end": 104
                  },
                  "directive": null,
                  "start": 89,
                  "end": 104
                }
              ],
              "start": 79,
              "end": 110
            },
            "alternate": null,
            "start": 64,
            "end": 110
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "sum",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 123
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 130
              },
              "start": 120,
              "end": 130
            },
            "directive": null,
            "start": 120,
            "end": 131
          }
        ],
        "start": 58,
        "end": 133
      },
      "start": 35,
      "end": 133
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 133
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
    "value": "array",
    "start": 4,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 12,
    "end": 13
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14,
    "end": 15
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 16,
    "end": 17
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 21,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "sum",
    "start": 25,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
    "end": 30
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 35,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 40,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 44,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 48,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 51,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 64,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "sum",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 72,
    "end": 75
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 89,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 97,
    "end": 98
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 99,
    "end": 100
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 101,
    "end": 102
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "sum",
    "start": 120,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 124,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133
  }
]
```

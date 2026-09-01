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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 8,
            "end": 10
          },
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 17
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 21,
          "end": 23
        },
        "start": 16,
        "end": 23
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 32
              },
              "start": 31,
              "end": 34
            },
            "directive": null,
            "start": 31,
            "end": 35
          }
        ],
        "start": 25,
        "end": 37
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [],
        "start": 43,
        "end": 46
      },
      "start": 12,
      "end": 46
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 51,
          "end": 52
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 56,
          "end": 58
        },
        "start": 51,
        "end": 58
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 67
              },
              "start": 66,
              "end": 69
            },
            "directive": null,
            "start": 66,
            "end": 70
          }
        ],
        "start": 60,
        "end": 72
      },
      "alternate": {
        "type": "IfStatement",
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 83
          },
          "operator": "==",
          "right": {
            "type": "Literal",
            "value": 20,
            "raw": "20",
            "start": 87,
            "end": 89
          },
          "start": 82,
          "end": 89
        },
        "consequent": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "UpdateExpression",
                "operator": "--",
                "prefix": false,
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 98
                },
                "start": 97,
                "end": 100
              },
              "directive": null,
              "start": 97,
              "end": 101
            }
          ],
          "start": 91,
          "end": 103
        },
        "alternate": {
          "type": "IfStatement",
          "test": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 114
            },
            "operator": "==",
            "right": {
              "type": "Literal",
              "value": 30,
              "raw": "30",
              "start": 118,
              "end": 120
            },
            "start": 113,
            "end": 120
          },
          "consequent": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "+=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 128,
                    "end": 129
                  },
                  "right": {
                    "type": "Literal",
                    "value": 70,
                    "raw": "70",
                    "start": 133,
                    "end": 135
                  },
                  "start": 128,
                  "end": 135
                },
                "directive": null,
                "start": 128,
                "end": 136
              }
            ],
            "start": 122,
            "end": 138
          },
          "alternate": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "operator": "--",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 150,
                    "end": 151
                  },
                  "start": 150,
                  "end": 153
                },
                "directive": null,
                "start": 150,
                "end": 154
              }
            ],
            "start": 144,
            "end": 156
          },
          "start": 109,
          "end": 156
        },
        "start": 78,
        "end": 156
      },
      "start": 47,
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
    "value": "i",
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
    "value": "10",
    "start": 8,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10,
    "end": 11
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
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 18,
    "end": 20
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 21,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 32,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 38,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 47,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 53,
    "end": 55
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 56,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 67,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 73,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 78,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 84,
    "end": 86
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 87,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 98,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 104,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 109,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 115,
    "end": 117
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 118,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 130,
    "end": 132
  },
  {
    "type": "Numeric",
    "value": "70",
    "start": 133,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 139,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 151,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  }
]
```

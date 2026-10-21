__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "scale",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 14
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 22,
              "end": 28
            },
            "start": 20,
            "end": 28
          },
          "start": 15,
          "end": 28
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "factor",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 38,
              "end": 44
            },
            "start": 36,
            "end": 44
          },
          "start": 30,
          "end": 44
        }
      ],
      "returnType": null,
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
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 61
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 66,
                "end": 67
              },
              "start": 56,
              "end": 67
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "*=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 79,
                      "end": 84
                    },
                    "right": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 89,
                        "end": 90
                      },
                      "prefix": true,
                      "start": 88,
                      "end": 90
                    },
                    "start": 79,
                    "end": 90
                  },
                  "directive": null,
                  "start": 79,
                  "end": 91
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "*=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 100,
                      "end": 105
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "factor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 109,
                      "end": 115
                    },
                    "start": 100,
                    "end": 115
                  },
                  "directive": null,
                  "start": 100,
                  "end": 116
                }
              ],
              "start": 69,
              "end": 122
            },
            "alternate": null,
            "start": 52,
            "end": 122
          }
        ],
        "start": 46,
        "end": 124
      },
      "expression": false,
      "start": 0,
      "end": 124
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 124
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "scale",
    "start": 9,
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
    "value": "value",
    "start": 15,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "factor",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 38,
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
    "type": "Keyword",
    "value": "if",
    "start": 52,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 56,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 62,
    "end": 65
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 79,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 85,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 88,
    "end": 89
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 100,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 106,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "factor",
    "start": 109,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  }
]
```

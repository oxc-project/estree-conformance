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
        "name": "ease",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
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
              "start": 21,
              "end": 27
            },
            "start": 19,
            "end": 27
          },
          "start": 14,
          "end": 27
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "divisor",
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
          "start": 29,
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
              "operator": "===",
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
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 76,
                "end": 77
              },
              "start": 69,
              "end": 78
            },
            "alternate": null,
            "start": 52,
            "end": 78
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "/=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 88
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "divisor",
                "optional": false,
                "typeAnnotation": null,
                "start": 92,
                "end": 99
              },
              "start": 83,
              "end": 99
            },
            "directive": null,
            "start": 83,
            "end": 100
          },
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
                "start": 109,
                "end": 114
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 119,
                "end": 120
              },
              "start": 109,
              "end": 120
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 129,
                "end": 130
              },
              "start": 122,
              "end": 131
            },
            "alternate": null,
            "start": 105,
            "end": 131
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 147
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pow",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 151
                },
                "optional": false,
                "computed": false,
                "start": 143,
                "end": 151
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 152,
                  "end": 153
                },
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 156,
                      "end": 158
                    },
                    "prefix": true,
                    "start": 155,
                    "end": 158
                  },
                  "operator": "*",
                  "right": {
                    "type": "AssignmentExpression",
                    "operator": "-=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 162,
                      "end": 167
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 171,
                      "end": 172
                    },
                    "start": 162,
                    "end": 172
                  },
                  "start": 155,
                  "end": 173
                }
              ],
              "optional": false,
              "start": 143,
              "end": 174
            },
            "start": 136,
            "end": 175
          }
        ],
        "start": 46,
        "end": 177
      },
      "expression": false,
      "start": 0,
      "end": 177
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 177
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
    "value": "ease",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 14,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "divisor",
    "start": 29,
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
    "value": "===",
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
    "type": "Keyword",
    "value": "return",
    "start": 69,
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
    "value": ";",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 83,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "/=",
    "start": 89,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "divisor",
    "start": 92,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 105,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 109,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 115,
    "end": 118
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 122,
    "end": 128
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 136,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 143,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "pow",
    "start": 148,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 151,
    "end": 152
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 155,
    "end": 156
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 156,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 162,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "-=",
    "start": 168,
    "end": 170
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  }
]
```

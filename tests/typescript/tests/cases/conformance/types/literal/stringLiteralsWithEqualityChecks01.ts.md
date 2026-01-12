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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 15,
                  "end": 20
                },
                "start": 15,
                "end": 20
              },
              "start": 13,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 21
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 37,
                      "end": 42
                    },
                    "start": 37,
                    "end": 42
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 45,
                      "end": 50
                    },
                    "start": 45,
                    "end": 50
                  }
                ],
                "start": 37,
                "end": 50
              },
              "start": 35,
              "end": 50
            },
            "start": 34,
            "end": 50
          },
          "init": null,
          "definite": false,
          "start": 34,
          "end": 50
        }
      ],
      "declare": true,
      "start": 22,
      "end": 51
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 60,
                "end": 67
              },
              "start": 58,
              "end": 67
            },
            "start": 57,
            "end": 67
          },
          "init": null,
          "definite": false,
          "start": 57,
          "end": 67
        }
      ],
      "declare": false,
      "start": 53,
      "end": 68
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 70
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 74
          },
          "operator": "===",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 80
          },
          "start": 73,
          "end": 80
        },
        "start": 69,
        "end": 80
      },
      "directive": null,
      "start": 69,
      "end": 81
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 82,
          "end": 83
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 86,
            "end": 91
          },
          "operator": "===",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 97
          },
          "start": 86,
          "end": 97
        },
        "start": 82,
        "end": 97
      },
      "directive": null,
      "start": 82,
      "end": 97
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 98,
          "end": 99
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 103
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 108,
            "end": 113
          },
          "start": 102,
          "end": 113
        },
        "start": 98,
        "end": 113
      },
      "directive": null,
      "start": 98,
      "end": 114
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 115,
          "end": 116
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 119,
            "end": 124
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 129,
            "end": 134
          },
          "start": 119,
          "end": 134
        },
        "start": 115,
        "end": 134
      },
      "directive": null,
      "start": 115,
      "end": 135
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 136,
          "end": 137
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 140,
            "end": 145
          },
          "operator": "===",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 151
          },
          "start": 140,
          "end": 151
        },
        "start": 136,
        "end": 151
      },
      "directive": null,
      "start": 136,
      "end": 152
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 153,
          "end": 154
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 158
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 163,
            "end": 168
          },
          "start": 157,
          "end": 168
        },
        "start": 153,
        "end": 168
      },
      "directive": null,
      "start": 153,
      "end": 169
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 170,
          "end": 171
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 175
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 180,
            "end": 185
          },
          "start": 174,
          "end": 185
        },
        "start": 170,
        "end": 185
      },
      "directive": null,
      "start": 170,
      "end": 186
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 187,
          "end": 188
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 191,
            "end": 196
          },
          "operator": "===",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 202
          },
          "start": 191,
          "end": 202
        },
        "start": 187,
        "end": 202
      },
      "directive": null,
      "start": 187,
      "end": 203
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 205,
          "end": 206
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 209,
            "end": 210
          },
          "operator": "!==",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 216
          },
          "start": 209,
          "end": 216
        },
        "start": 205,
        "end": 216
      },
      "directive": null,
      "start": 205,
      "end": 217
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 218,
          "end": 219
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 222,
            "end": 227
          },
          "operator": "!==",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 233
          },
          "start": 222,
          "end": 233
        },
        "start": 218,
        "end": 233
      },
      "directive": null,
      "start": 218,
      "end": 233
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 234,
          "end": 235
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 239
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 244,
            "end": 249
          },
          "start": 238,
          "end": 249
        },
        "start": 234,
        "end": 249
      },
      "directive": null,
      "start": 234,
      "end": 250
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 251,
          "end": 252
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 255,
            "end": 260
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 265,
            "end": 270
          },
          "start": 255,
          "end": 270
        },
        "start": 251,
        "end": 270
      },
      "directive": null,
      "start": 251,
      "end": 271
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 272,
          "end": 273
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 276,
            "end": 281
          },
          "operator": "!==",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 287
          },
          "start": 276,
          "end": 287
        },
        "start": 272,
        "end": 287
      },
      "directive": null,
      "start": 272,
      "end": 288
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 289,
          "end": 290
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 293,
            "end": 294
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 299,
            "end": 304
          },
          "start": 293,
          "end": 304
        },
        "start": 289,
        "end": 304
      },
      "directive": null,
      "start": 289,
      "end": 305
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 306,
          "end": 307
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 310,
            "end": 311
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 316,
            "end": 321
          },
          "start": 310,
          "end": 321
        },
        "start": 306,
        "end": 321
      },
      "directive": null,
      "start": 306,
      "end": 322
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 323,
          "end": 324
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 327,
            "end": 332
          },
          "operator": "!==",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 337,
            "end": 338
          },
          "start": 327,
          "end": 338
        },
        "start": 323,
        "end": 338
      },
      "directive": null,
      "start": 323,
      "end": 339
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 340
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 15,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 22,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 30,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 37,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 43,
    "end": 44
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 45,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 53,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 60,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 75,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 84,
    "end": 85
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 86,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 92,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 104,
    "end": 107
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 108,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 119,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 125,
    "end": 128
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 129,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 140,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 146,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 159,
    "end": 162
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 163,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 176,
    "end": 179
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 180,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 189,
    "end": 190
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 191,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 197,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 211,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 220,
    "end": 221
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 222,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 228,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 240,
    "end": 243
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 244,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 255,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 261,
    "end": 264
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 265,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 274,
    "end": 275
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 276,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 282,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 295,
    "end": 298
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 299,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 312,
    "end": 315
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 316,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 325,
    "end": 326
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 327,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 333,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  }
]
```

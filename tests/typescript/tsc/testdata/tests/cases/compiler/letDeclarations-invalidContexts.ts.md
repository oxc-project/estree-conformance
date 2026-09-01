__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 50,
        "end": 54
      },
      "consequent": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "l1",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 67
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 70,
              "end": 71
            },
            "definite": false,
            "start": 65,
            "end": 71
          }
        ],
        "declare": false,
        "start": 61,
        "end": 72
      },
      "alternate": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "l2",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 89
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 92,
              "end": 93
            },
            "definite": false,
            "start": 87,
            "end": 93
          }
        ],
        "declare": false,
        "start": 83,
        "end": 94
      },
      "start": 46,
      "end": 94
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 103,
        "end": 107
      },
      "body": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "l3",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 120
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 123,
              "end": 124
            },
            "definite": false,
            "start": 118,
            "end": 124
          }
        ],
        "declare": false,
        "start": 114,
        "end": 125
      },
      "start": 96,
      "end": 125
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "l4",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 141
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 144,
              "end": 145
            },
            "definite": false,
            "start": 139,
            "end": 145
          }
        ],
        "declare": false,
        "start": 135,
        "end": 146
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 154,
        "end": 158
      },
      "start": 127,
      "end": 160
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 169
          },
          "init": null,
          "definite": false,
          "start": 166,
          "end": 169
        }
      ],
      "declare": false,
      "start": 162,
      "end": 170
    },
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 177,
        "end": 180
      },
      "body": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "l5",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 193
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 196,
              "end": 197
            },
            "definite": false,
            "start": 191,
            "end": 197
          }
        ],
        "declare": false,
        "start": 187,
        "end": 198
      },
      "start": 171,
      "end": 198
    },
    {
      "type": "ForStatement",
      "init": {
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
              "start": 209,
              "end": 210
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 213,
              "end": 214
            },
            "definite": false,
            "start": 209,
            "end": 214
          }
        ],
        "declare": false,
        "start": 205,
        "end": 214
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 216,
          "end": 217
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 220,
          "end": 222
        },
        "start": 216,
        "end": 222
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 224,
          "end": 225
        },
        "start": 224,
        "end": 227
      },
      "body": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "l6",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 239
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 242,
              "end": 243
            },
            "definite": false,
            "start": 237,
            "end": 243
          }
        ],
        "declare": false,
        "start": 233,
        "end": 244
      },
      "start": 200,
      "end": 244
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2",
              "optional": false,
              "typeAnnotation": null,
              "start": 255,
              "end": 257
            },
            "init": null,
            "definite": false,
            "start": 255,
            "end": 257
          }
        ],
        "declare": false,
        "start": 251,
        "end": 257
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 261,
        "end": 263
      },
      "body": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "l7",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 276
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 279,
              "end": 280
            },
            "definite": false,
            "start": 274,
            "end": 280
          }
        ],
        "declare": false,
        "start": 270,
        "end": 281
      },
      "start": 246,
      "end": 281
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 287,
        "end": 291
      },
      "consequent": {
        "type": "LabeledStatement",
        "label": {
          "type": "Identifier",
          "decorators": [],
          "name": "label",
          "optional": false,
          "typeAnnotation": null,
          "start": 298,
          "end": 303
        },
        "body": {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "l8",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 311
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 314,
                "end": 315
              },
              "definite": false,
              "start": 309,
              "end": 315
            }
          ],
          "declare": false,
          "start": 305,
          "end": 316
        },
        "start": 298,
        "end": 316
      },
      "alternate": null,
      "start": 283,
      "end": 316
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 325,
        "end": 330
      },
      "body": {
        "type": "LabeledStatement",
        "label": {
          "type": "Identifier",
          "decorators": [],
          "name": "label2",
          "optional": false,
          "typeAnnotation": null,
          "start": 336,
          "end": 342
        },
        "body": {
          "type": "LabeledStatement",
          "label": {
            "type": "Identifier",
            "decorators": [],
            "name": "label3",
            "optional": false,
            "typeAnnotation": null,
            "start": 344,
            "end": 350
          },
          "body": {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "label4",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 358
            },
            "body": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 364,
                    "end": 366
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 369,
                    "end": 370
                  },
                  "definite": false,
                  "start": 364,
                  "end": 370
                }
              ],
              "declare": false,
              "start": 360,
              "end": 371
            },
            "start": 352,
            "end": 371
          },
          "start": 344,
          "end": 371
        },
        "start": 336,
        "end": 371
      },
      "start": 318,
      "end": 371
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 46,
  "end": 374
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "if",
    "start": 46,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 50,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 61,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 65,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 68,
    "end": 69
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "let",
    "start": 83,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "l2",
    "start": 87,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 96,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 103,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 114,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "l3",
    "start": 118,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 127,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 135,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "l4",
    "start": 139,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 142,
    "end": 143
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 147,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 154,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 162,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 166,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 171,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 177,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 187,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "l5",
    "start": 191,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 194,
    "end": 195
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 200,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 205,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 211,
    "end": 212
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 218,
    "end": 219
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 220,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 225,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 233,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "l6",
    "start": 237,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 240,
    "end": 241
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 246,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 251,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 255,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 258,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 270,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "l7",
    "start": 274,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 277,
    "end": 278
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 283,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 287,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 298,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 305,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "l8",
    "start": 309,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 312,
    "end": 313
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 318,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 324,
    "end": 325
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 325,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "label2",
    "start": 336,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "label3",
    "start": 344,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "label4",
    "start": 352,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 360,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "l9",
    "start": 364,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 367,
    "end": 368
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371
  }
]
```

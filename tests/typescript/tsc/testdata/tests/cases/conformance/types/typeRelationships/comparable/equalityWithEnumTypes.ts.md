__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 28
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 39,
              "end": 40
            },
            "computed": false,
            "start": 35,
            "end": 40
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
            },
            "initializer": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 50,
              "end": 51
            },
            "computed": false,
            "start": 46,
            "end": 51
          }
        ],
        "start": 29,
        "end": 54
      },
      "const": false,
      "declare": false,
      "start": 21,
      "end": 54
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 84
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 92
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 95,
                "end": 96
              },
              "operator": "<<",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 100,
                "end": 101
              },
              "start": 95,
              "end": 101
            },
            "computed": false,
            "start": 91,
            "end": 101
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 108
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 111,
                "end": 112
              },
              "operator": "<<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 116,
                "end": 117
              },
              "start": 111,
              "end": 117
            },
            "computed": false,
            "start": 107,
            "end": 117
          }
        ],
        "start": 85,
        "end": 119
      },
      "const": false,
      "declare": false,
      "start": 77,
      "end": 119
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 132
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E1",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 138
              },
              "typeArguments": null,
              "start": 136,
              "end": 138
            },
            "start": 134,
            "end": 138
          },
          "start": 133,
          "end": 138
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
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 150,
                "end": 151
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 156,
                "end": 157
              },
              "start": 150,
              "end": 157
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 179,
                    "end": 180
                  },
                  "directive": null,
                  "start": 179,
                  "end": 181
                }
              ],
              "start": 159,
              "end": 187
            },
            "alternate": null,
            "start": 146,
            "end": 187
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 197
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 202,
                "end": 203
              },
              "start": 196,
              "end": 203
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 216
                  },
                  "directive": null,
                  "start": 215,
                  "end": 217
                }
              ],
              "start": 205,
              "end": 223
            },
            "alternate": null,
            "start": 192,
            "end": 223
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 232,
                "end": 233
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 238,
                "end": 239
              },
              "start": 232,
              "end": 239
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 251,
                    "end": 252
                  },
                  "directive": null,
                  "start": 251,
                  "end": 253
                }
              ],
              "start": 241,
              "end": 259
            },
            "alternate": null,
            "start": 228,
            "end": 259
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 268,
                "end": 269
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 274,
                "end": 275
              },
              "start": 268,
              "end": 275
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 297,
                    "end": 298
                  },
                  "directive": null,
                  "start": 297,
                  "end": 299
                }
              ],
              "start": 277,
              "end": 305
            },
            "alternate": null,
            "start": 264,
            "end": 305
          }
        ],
        "start": 140,
        "end": 307
      },
      "expression": false,
      "start": 121,
      "end": 307
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 320
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E2",
                "optional": false,
                "typeAnnotation": null,
                "start": 324,
                "end": 326
              },
              "typeArguments": null,
              "start": 324,
              "end": 326
            },
            "start": 322,
            "end": 326
          },
          "start": 321,
          "end": 326
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
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 338,
                "end": 339
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 344,
                "end": 345
              },
              "start": 338,
              "end": 345
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 357,
                    "end": 358
                  },
                  "directive": null,
                  "start": 357,
                  "end": 359
                }
              ],
              "start": 347,
              "end": 365
            },
            "alternate": null,
            "start": 334,
            "end": 365
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 374,
                "end": 375
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 380,
                "end": 381
              },
              "start": 374,
              "end": 381
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 393,
                    "end": 394
                  },
                  "directive": null,
                  "start": 393,
                  "end": 395
                }
              ],
              "start": 383,
              "end": 401
            },
            "alternate": null,
            "start": 370,
            "end": 401
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 410,
                "end": 411
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 416,
                "end": 417
              },
              "start": 410,
              "end": 417
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 429,
                    "end": 430
                  },
                  "directive": null,
                  "start": 429,
                  "end": 431
                }
              ],
              "start": 419,
              "end": 437
            },
            "alternate": null,
            "start": 406,
            "end": 437
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 446,
                "end": 447
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 452,
                "end": 453
              },
              "start": 446,
              "end": 453
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 465,
                    "end": 466
                  },
                  "directive": null,
                  "start": 465,
                  "end": 467
                }
              ],
              "start": 455,
              "end": 473
            },
            "alternate": null,
            "start": 442,
            "end": 473
          }
        ],
        "start": 328,
        "end": 475
      },
      "expression": false,
      "start": 309,
      "end": 475
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 475
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 21,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 26,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 37,
    "end": 38
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 48,
    "end": 49
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 77,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 82,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 93,
    "end": 94
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 97,
    "end": 99
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Identifier",
    "value": "b",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 113,
    "end": 115
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 121,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 130,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 136,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 146,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 152,
    "end": 155
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 192,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 198,
    "end": 201
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 228,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 234,
    "end": 237
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 264,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 270,
    "end": 273
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 309,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 318,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 324,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 334,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 340,
    "end": 343
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 370,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 376,
    "end": 379
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 400,
    "end": 401
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 406,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 412,
    "end": 415
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 442,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 448,
    "end": 451
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 474,
    "end": 475
  }
]
```

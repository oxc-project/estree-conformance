__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
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
                "type": "TSNumberKeyword",
                "start": 17,
                "end": 23
              },
              "start": 15,
              "end": 23
            },
            "start": 14,
            "end": 23
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 23
        }
      ],
      "declare": true,
      "start": 0,
      "end": 24
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 30,
          "end": 31
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 36,
          "end": 39
        },
        "start": 30,
        "end": 39
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 41,
        "end": 43
      },
      "alternate": null,
      "start": 26,
      "end": 43
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 48,
          "end": 51
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 56,
          "end": 57
        },
        "start": 48,
        "end": 57
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 59,
        "end": 61
      },
      "alternate": null,
      "start": 44,
      "end": 61
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 68
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 75
        },
        "start": 67,
        "end": 75
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 77,
        "end": 79
      },
      "alternate": null,
      "start": 63,
      "end": 79
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 84,
          "end": 87
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 92
        },
        "start": 84,
        "end": 92
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 94,
        "end": 96
      },
      "alternate": null,
      "start": 80,
      "end": 96
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 102,
          "end": 103
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 108,
          "end": 111
        },
        "start": 102,
        "end": 111
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 113,
        "end": 115
      },
      "alternate": null,
      "start": 98,
      "end": 115
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 123
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 128,
          "end": 129
        },
        "start": 120,
        "end": 129
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 131,
        "end": 133
      },
      "alternate": null,
      "start": 116,
      "end": 133
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 139,
          "end": 140
        },
        "operator": "!=",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 144,
          "end": 147
        },
        "start": 139,
        "end": 147
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 149,
        "end": 151
      },
      "alternate": null,
      "start": 135,
      "end": 151
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 156,
          "end": 159
        },
        "operator": "!=",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 163,
          "end": 164
        },
        "start": 156,
        "end": 164
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 166,
        "end": 168
      },
      "alternate": null,
      "start": 152,
      "end": 168
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 174,
          "end": 175
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 185
        },
        "start": 174,
        "end": 187
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 189,
        "end": 191
      },
      "alternate": null,
      "start": 170,
      "end": 191
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 198,
          "end": 201
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 208,
          "end": 209
        },
        "start": 196,
        "end": 209
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 211,
        "end": 213
      },
      "alternate": null,
      "start": 192,
      "end": 213
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 220
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 227,
          "end": 230
        },
        "start": 219,
        "end": 232
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 234,
        "end": 236
      },
      "alternate": null,
      "start": 215,
      "end": 236
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 243,
          "end": 246
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 253,
          "end": 254
        },
        "start": 241,
        "end": 254
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 256,
        "end": 258
      },
      "alternate": null,
      "start": 237,
      "end": 258
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 264,
          "end": 267
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 272,
          "end": 275
        },
        "start": 264,
        "end": 275
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 277,
        "end": 279
      },
      "alternate": null,
      "start": 260,
      "end": 279
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 284,
          "end": 287
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 292,
          "end": 295
        },
        "start": 284,
        "end": 295
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 297,
        "end": 299
      },
      "alternate": null,
      "start": 280,
      "end": 299
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 305,
          "end": 308
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 312,
          "end": 315
        },
        "start": 305,
        "end": 315
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 317,
        "end": 319
      },
      "alternate": null,
      "start": 301,
      "end": 319
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 324,
          "end": 327
        },
        "operator": "!=",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 331,
          "end": 334
        },
        "start": 324,
        "end": 334
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 336,
        "end": 338
      },
      "alternate": null,
      "start": 320,
      "end": 338
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
                "type": "TSAnyKeyword",
                "start": 362,
                "end": 365
              },
              "start": 360,
              "end": 365
            },
            "start": 359,
            "end": 365
          },
          "init": null,
          "definite": false,
          "start": 359,
          "end": 365
        }
      ],
      "declare": true,
      "start": 347,
      "end": 366
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 371,
          "end": 374
        },
        "operator": "===",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 379,
              "end": 380
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 381,
              "end": 382
            },
            "optional": false,
            "computed": true,
            "start": 379,
            "end": 383
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 384,
            "end": 385
          },
          "optional": false,
          "computed": true,
          "start": 379,
          "end": 386
        },
        "start": 371,
        "end": 386
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 388,
        "end": 390
      },
      "alternate": null,
      "start": 367,
      "end": 390
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t1",
        "optional": false,
        "typeAnnotation": null,
        "start": 401,
        "end": 403
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
              "start": 411,
              "end": 417
            },
            "start": 409,
            "end": 417
          },
          "start": 404,
          "end": 417
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 424,
              "end": 430
            },
            "start": 422,
            "end": 430
          },
          "start": 419,
          "end": 430
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 445,
                "end": 450
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "NaN",
                "optional": false,
                "typeAnnotation": null,
                "start": 455,
                "end": 458
              },
              "start": 445,
              "end": 458
            },
            "start": 438,
            "end": 459
          }
        ],
        "start": 432,
        "end": 467
      },
      "expression": false,
      "start": 392,
      "end": 467
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t2",
        "optional": false,
        "typeAnnotation": null,
        "start": 478,
        "end": 480
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
              "start": 488,
              "end": 494
            },
            "start": 486,
            "end": 494
          },
          "start": 481,
          "end": 494
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 501,
              "end": 507
            },
            "start": 499,
            "end": 507
          },
          "start": 496,
          "end": 507
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "NaN",
                "optional": false,
                "typeAnnotation": null,
                "start": 522,
                "end": 525
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 529,
                "end": 534
              },
              "start": 522,
              "end": 534
            },
            "start": 515,
            "end": 535
          }
        ],
        "start": 509,
        "end": 543
      },
      "expression": false,
      "start": 469,
      "end": 543
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t3",
        "optional": false,
        "typeAnnotation": null,
        "start": 554,
        "end": 556
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 562,
              "end": 568
            },
            "start": 560,
            "end": 568
          },
          "start": 557,
          "end": 568
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "NaN",
                "optional": false,
                "typeAnnotation": null,
                "start": 583,
                "end": 586
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "NaN",
                "optional": false,
                "typeAnnotation": null,
                "start": 591,
                "end": 594
              },
              "start": 583,
              "end": 594
            },
            "start": 576,
            "end": 595
          }
        ],
        "start": 570,
        "end": 603
      },
      "expression": false,
      "start": 545,
      "end": 603
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 603
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
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 26,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 32,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 36,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 44,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 48,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 52,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 63,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 69,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 72,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 80,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 84,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 88,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 98,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 104,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 108,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 116,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 120,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 124,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 135,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 141,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 144,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 152,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 156,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 160,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 170,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 182,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
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
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 198,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 204,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 215,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 221,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 227,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 237,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 243,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 249,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 260,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 264,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 268,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 272,
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
    "type": "Punctuator",
    "value": "}",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 280,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 284,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 288,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 292,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 301,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 305,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 309,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 312,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 320,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 324,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 328,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 331,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 347,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 355,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 362,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 367,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 371,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 375,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 380,
    "end": 381
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 383,
    "end": 384
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 392,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 401,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 404,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 411,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 419,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 424,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 432,
    "end": 433
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 438,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 445,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 451,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 455,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 466,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 469,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 478,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 481,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 488,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 496,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 501,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 509,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 515,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 522,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 526,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 529,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 542,
    "end": 543
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 545,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 554,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 557,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 562,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 570,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 576,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 583,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 587,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 591,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 602,
    "end": 603
  }
]
```

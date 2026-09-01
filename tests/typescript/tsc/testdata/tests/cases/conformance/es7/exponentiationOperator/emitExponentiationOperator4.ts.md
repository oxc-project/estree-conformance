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
            "name": "temp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 10,
                "end": 13
              },
              "start": 8,
              "end": 13
            },
            "start": 4,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 18,
            "end": 24
          },
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 29
          },
          "start": 17,
          "end": 29
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 34,
          "end": 35
        },
        "start": 16,
        "end": 35
      },
      "directive": null,
      "start": 16,
      "end": 36
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 39,
            "end": 45
          },
          "expression": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 52
            },
            "start": 46,
            "end": 52
          },
          "start": 38,
          "end": 52
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 57,
          "end": 58
        },
        "start": 37,
        "end": 58
      },
      "directive": null,
      "start": 37,
      "end": 59
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 62,
            "end": 68
          },
          "expression": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 75
            },
            "start": 69,
            "end": 75
          },
          "start": 61,
          "end": 75
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 80,
          "end": 81
        },
        "start": 60,
        "end": 81
      },
      "directive": null,
      "start": 60,
      "end": 82
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 85,
            "end": 91
          },
          "expression": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 96
            },
            "start": 92,
            "end": 98
          },
          "start": 84,
          "end": 98
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 103,
          "end": 104
        },
        "start": 83,
        "end": 104
      },
      "directive": null,
      "start": 83,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 108,
            "end": 114
          },
          "expression": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 119
            },
            "start": 115,
            "end": 121
          },
          "start": 107,
          "end": 121
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 126,
          "end": 127
        },
        "start": 106,
        "end": 127
      },
      "directive": null,
      "start": 106,
      "end": 128
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 130,
          "end": 131
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 137,
              "end": 143
            },
            "expression": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 150
              },
              "start": 144,
              "end": 150
            },
            "start": 136,
            "end": 150
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 155,
            "end": 156
          },
          "start": 135,
          "end": 156
        },
        "start": 130,
        "end": 156
      },
      "directive": null,
      "start": 130,
      "end": 157
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 158,
          "end": 159
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 165,
              "end": 171
            },
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 178
              },
              "start": 172,
              "end": 178
            },
            "start": 164,
            "end": 178
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 183,
            "end": 184
          },
          "start": 163,
          "end": 184
        },
        "start": 158,
        "end": 184
      },
      "directive": null,
      "start": 158,
      "end": 185
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 186,
          "end": 187
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 193,
              "end": 199
            },
            "expression": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 204
              },
              "start": 200,
              "end": 206
            },
            "start": 192,
            "end": 206
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 211,
            "end": 212
          },
          "start": 191,
          "end": 212
        },
        "start": 186,
        "end": 212
      },
      "directive": null,
      "start": 186,
      "end": 213
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 214,
          "end": 215
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 221,
              "end": 227
            },
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 232
              },
              "start": 228,
              "end": 234
            },
            "start": 220,
            "end": 234
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 239,
            "end": 240
          },
          "start": 219,
          "end": 240
        },
        "start": 214,
        "end": 240
      },
      "directive": null,
      "start": 214,
      "end": 241
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "void",
          "argument": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 255
            },
            "start": 249,
            "end": 255
          },
          "prefix": true,
          "start": 244,
          "end": 255
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 260,
          "end": 261
        },
        "start": 243,
        "end": 261
      },
      "directive": null,
      "start": 243,
      "end": 262
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "void",
          "argument": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 273
            },
            "start": 269,
            "end": 275
          },
          "prefix": true,
          "start": 264,
          "end": 275
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 280,
          "end": 281
        },
        "start": 263,
        "end": 281
      },
      "directive": null,
      "start": 263,
      "end": 282
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "void",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 289,
            "end": 290
          },
          "prefix": true,
          "start": 284,
          "end": 290
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 295,
          "end": 296
        },
        "start": 283,
        "end": 296
      },
      "directive": null,
      "start": 283,
      "end": 297
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "void",
          "argument": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 308
            },
            "start": 304,
            "end": 310
          },
          "prefix": true,
          "start": 299,
          "end": 310
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 315,
          "end": 316
        },
        "start": 298,
        "end": 316
      },
      "directive": null,
      "start": 298,
      "end": 317
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "void",
          "argument": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 328
            },
            "start": 324,
            "end": 330
          },
          "prefix": true,
          "start": 319,
          "end": 330
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 335,
          "end": 336
        },
        "start": 318,
        "end": 336
      },
      "directive": null,
      "start": 318,
      "end": 337
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 340,
          "end": 341
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 357
              },
              "start": 351,
              "end": 357
            },
            "prefix": true,
            "start": 346,
            "end": 357
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 362,
            "end": 363
          },
          "start": 345,
          "end": 363
        },
        "start": 340,
        "end": 363
      },
      "directive": null,
      "start": 340,
      "end": 364
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 365,
          "end": 366
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 376,
                "end": 380
              },
              "start": 376,
              "end": 382
            },
            "prefix": true,
            "start": 371,
            "end": 382
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 387,
            "end": 388
          },
          "start": 370,
          "end": 388
        },
        "start": 365,
        "end": 388
      },
      "directive": null,
      "start": 365,
      "end": 389
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 390,
          "end": 391
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 401,
              "end": 402
            },
            "prefix": true,
            "start": 396,
            "end": 402
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 407,
            "end": 408
          },
          "start": 395,
          "end": 408
        },
        "start": 390,
        "end": 408
      },
      "directive": null,
      "start": 390,
      "end": 409
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 410,
          "end": 411
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 421,
                "end": 425
              },
              "start": 421,
              "end": 427
            },
            "prefix": true,
            "start": 416,
            "end": 427
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 432,
            "end": 433
          },
          "start": 415,
          "end": 433
        },
        "start": 410,
        "end": 433
      },
      "directive": null,
      "start": 410,
      "end": 434
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 435,
          "end": 436
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 446,
                "end": 450
              },
              "start": 446,
              "end": 452
            },
            "prefix": true,
            "start": 441,
            "end": 452
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 457,
            "end": 458
          },
          "start": 440,
          "end": 458
        },
        "start": 435,
        "end": 458
      },
      "directive": null,
      "start": 435,
      "end": 459
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "~",
          "argument": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 466,
              "end": 470
            },
            "start": 464,
            "end": 470
          },
          "prefix": true,
          "start": 462,
          "end": 470
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 475,
          "end": 476
        },
        "start": 461,
        "end": 476
      },
      "directive": null,
      "start": 461,
      "end": 477
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "~",
          "argument": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 481,
              "end": 485
            },
            "start": 481,
            "end": 487
          },
          "prefix": true,
          "start": 479,
          "end": 487
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 492,
          "end": 493
        },
        "start": 478,
        "end": 493
      },
      "directive": null,
      "start": 478,
      "end": 494
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "~",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 498,
            "end": 499
          },
          "prefix": true,
          "start": 496,
          "end": 499
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 504,
          "end": 505
        },
        "start": 495,
        "end": 505
      },
      "directive": null,
      "start": 495,
      "end": 506
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "~",
          "argument": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 510,
              "end": 514
            },
            "start": 510,
            "end": 516
          },
          "prefix": true,
          "start": 508,
          "end": 516
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 521,
          "end": 522
        },
        "start": 507,
        "end": 522
      },
      "directive": null,
      "start": 507,
      "end": 523
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "~",
          "argument": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 527,
              "end": 531
            },
            "start": 527,
            "end": 533
          },
          "prefix": true,
          "start": 525,
          "end": 533
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 538,
          "end": 539
        },
        "start": 524,
        "end": 539
      },
      "directive": null,
      "start": 524,
      "end": 540
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 542,
          "end": 543
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 552,
                "end": 556
              },
              "start": 550,
              "end": 556
            },
            "prefix": true,
            "start": 548,
            "end": 556
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 561,
            "end": 562
          },
          "start": 547,
          "end": 562
        },
        "start": 542,
        "end": 562
      },
      "directive": null,
      "start": 542,
      "end": 563
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 564,
          "end": 565
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 572,
                "end": 576
              },
              "start": 572,
              "end": 578
            },
            "prefix": true,
            "start": 570,
            "end": 578
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 583,
            "end": 584
          },
          "start": 569,
          "end": 584
        },
        "start": 564,
        "end": 584
      },
      "directive": null,
      "start": 564,
      "end": 585
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 586,
          "end": 587
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 594,
              "end": 595
            },
            "prefix": true,
            "start": 592,
            "end": 595
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 600,
            "end": 601
          },
          "start": 591,
          "end": 601
        },
        "start": 586,
        "end": 601
      },
      "directive": null,
      "start": 586,
      "end": 602
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 603,
          "end": 604
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 611,
                "end": 615
              },
              "start": 611,
              "end": 617
            },
            "prefix": true,
            "start": 609,
            "end": 617
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 622,
            "end": 623
          },
          "start": 608,
          "end": 623
        },
        "start": 603,
        "end": 623
      },
      "directive": null,
      "start": 603,
      "end": 624
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 625,
          "end": 626
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 633,
                "end": 637
              },
              "start": 633,
              "end": 639
            },
            "prefix": true,
            "start": 631,
            "end": 639
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 644,
            "end": 645
          },
          "start": 630,
          "end": 645
        },
        "start": 625,
        "end": 645
      },
      "directive": null,
      "start": 625,
      "end": 646
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 646
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
    "value": "temp",
    "start": 4,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 25,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 31,
    "end": 33
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 46,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 48,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 54,
    "end": 56
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 62,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 69,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 71,
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
    "value": "**",
    "start": 77,
    "end": 79
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 92,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 96,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 100,
    "end": 102
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 108,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 115,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 119,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 123,
    "end": 125
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 132,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 137,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 144,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 146,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 152,
    "end": 154
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 160,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 165,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 172,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 174,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 180,
    "end": 182
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 188,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 193,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 200,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 204,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 208,
    "end": 210
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 216,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 221,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 228,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 232,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 236,
    "end": 238
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 243,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 244,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 249,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 251,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 257,
    "end": 259
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 264,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 269,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 273,
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
    "value": "**",
    "start": 277,
    "end": 279
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 284,
    "end": 288
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 292,
    "end": 294
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 299,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 304,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 308,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 312,
    "end": 314
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 319,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 324,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 328,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 332,
    "end": 334
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 342,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 346,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 351,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 353,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 359,
    "end": 361
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "**",
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
    "type": "Keyword",
    "value": "void",
    "start": 371,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 376,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 380,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 384,
    "end": 386
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 392,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 395,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 396,
    "end": 400
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 404,
    "end": 406
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 412,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 415,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 416,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 421,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 425,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 429,
    "end": 431
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 433,
    "end": 434
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 437,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 441,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 446,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 450,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 454,
    "end": 456
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 457,
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
    "value": "(",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 464,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 466,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 472,
    "end": 474
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 481,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 485,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 489,
    "end": 491
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 496,
    "end": 497
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 501,
    "end": 503
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 510,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 514,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 518,
    "end": 520
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 527,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 531,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 535,
    "end": 537
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 544,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 550,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 552,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 558,
    "end": 560
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 566,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 572,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 576,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 580,
    "end": 582
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 584,
    "end": 585
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 588,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 592,
    "end": 593
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 597,
    "end": 599
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 605,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 611,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 615,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 619,
    "end": 621
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 627,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 633,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 637,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 641,
    "end": 643
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646
  }
]
```

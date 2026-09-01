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
            "typeAnnotation": null,
            "start": 4,
            "end": 8
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 11,
            "end": 13
          },
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
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 24
            },
            "start": 18,
            "end": 24
          },
          "prefix": true,
          "start": 17,
          "end": 24
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 29,
          "end": 30
        },
        "start": 16,
        "end": 30
      },
      "directive": null,
      "start": 16,
      "end": 31
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "+",
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
              "start": 36,
              "end": 40
            },
            "start": 34,
            "end": 40
          },
          "prefix": true,
          "start": 33,
          "end": 40
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 45,
          "end": 46
        },
        "start": 32,
        "end": 46
      },
      "directive": null,
      "start": 32,
      "end": 47
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
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
              "start": 50,
              "end": 54
            },
            "start": 50,
            "end": 56
          },
          "prefix": true,
          "start": 49,
          "end": 56
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 61,
          "end": 62
        },
        "start": 48,
        "end": 62
      },
      "directive": null,
      "start": 48,
      "end": 63
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "+",
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
              "start": 66,
              "end": 70
            },
            "start": 66,
            "end": 72
          },
          "prefix": true,
          "start": 65,
          "end": 72
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 77,
          "end": 78
        },
        "start": 64,
        "end": 78
      },
      "directive": null,
      "start": 64,
      "end": 79
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 83,
              "end": 84
            },
            "operator": "**",
            "right": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 94
              },
              "start": 88,
              "end": 94
            },
            "start": 83,
            "end": 94
          },
          "prefix": true,
          "start": 81,
          "end": 95
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 100,
          "end": 101
        },
        "start": 80,
        "end": 101
      },
      "directive": null,
      "start": 80,
      "end": 102
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 106,
              "end": 107
            },
            "operator": "**",
            "right": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 117
              },
              "start": 111,
              "end": 117
            },
            "start": 106,
            "end": 117
          },
          "prefix": true,
          "start": 104,
          "end": 118
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 123,
          "end": 124
        },
        "start": 103,
        "end": 124
      },
      "directive": null,
      "start": 103,
      "end": 125
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 129,
              "end": 130
            },
            "operator": "**",
            "right": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 138
              },
              "start": 134,
              "end": 140
            },
            "start": 129,
            "end": 140
          },
          "prefix": true,
          "start": 127,
          "end": 141
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 146,
          "end": 147
        },
        "start": 126,
        "end": 147
      },
      "directive": null,
      "start": 126,
      "end": 148
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 152,
              "end": 153
            },
            "operator": "**",
            "right": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 157,
                "end": 161
              },
              "start": 157,
              "end": 163
            },
            "start": 152,
            "end": 163
          },
          "prefix": true,
          "start": 150,
          "end": 164
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 169,
          "end": 170
        },
        "start": 149,
        "end": 170
      },
      "directive": null,
      "start": 149,
      "end": 171
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 175,
            "end": 176
          },
          "prefix": true,
          "start": 174,
          "end": 176
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "operator": "++",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 185
          },
          "start": 181,
          "end": 187
        },
        "start": 173,
        "end": 187
      },
      "directive": null,
      "start": 173,
      "end": 188
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 191,
            "end": 192
          },
          "prefix": true,
          "start": 190,
          "end": 192
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 197,
            "end": 201
          },
          "start": 197,
          "end": 203
        },
        "start": 189,
        "end": 203
      },
      "directive": null,
      "start": 189,
      "end": 204
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 207,
            "end": 208
          },
          "prefix": true,
          "start": 206,
          "end": 208
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "operator": "++",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 219
          },
          "start": 213,
          "end": 219
        },
        "start": 205,
        "end": 219
      },
      "directive": null,
      "start": 205,
      "end": 220
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 223,
            "end": 224
          },
          "prefix": true,
          "start": 222,
          "end": 224
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 235
          },
          "start": 229,
          "end": 235
        },
        "start": 221,
        "end": 235
      },
      "directive": null,
      "start": 221,
      "end": 236
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "+",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 239,
            "end": 240
          },
          "prefix": true,
          "start": 238,
          "end": 240
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "operator": "++",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 249
          },
          "start": 245,
          "end": 251
        },
        "start": 237,
        "end": 251
      },
      "directive": null,
      "start": 237,
      "end": 252
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "+",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 255,
            "end": 256
          },
          "prefix": true,
          "start": 254,
          "end": 256
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 261,
            "end": 265
          },
          "start": 261,
          "end": 267
        },
        "start": 253,
        "end": 267
      },
      "directive": null,
      "start": 253,
      "end": 268
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "+",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 271,
            "end": 272
          },
          "prefix": true,
          "start": 270,
          "end": 272
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "operator": "++",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 283
          },
          "start": 277,
          "end": 283
        },
        "start": 269,
        "end": 283
      },
      "directive": null,
      "start": 269,
      "end": 284
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "+",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 287,
            "end": 288
          },
          "prefix": true,
          "start": 286,
          "end": 288
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 299
          },
          "start": 293,
          "end": 299
        },
        "start": 285,
        "end": 299
      },
      "directive": null,
      "start": 285,
      "end": 300
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 303,
            "end": 304
          },
          "prefix": true,
          "start": 302,
          "end": 304
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 309,
              "end": 313
            },
            "start": 309,
            "end": 315
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 319,
            "end": 320
          },
          "start": 309,
          "end": 320
        },
        "start": 301,
        "end": 320
      },
      "directive": null,
      "start": 301,
      "end": 321
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 324,
            "end": 325
          },
          "prefix": true,
          "start": 323,
          "end": 325
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 334
            },
            "start": 330,
            "end": 336
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 340,
            "end": 341
          },
          "start": 330,
          "end": 341
        },
        "start": 322,
        "end": 341
      },
      "directive": null,
      "start": 322,
      "end": 342
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 345,
            "end": 346
          },
          "prefix": true,
          "start": 344,
          "end": 346
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UpdateExpression",
            "operator": "++",
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
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 361,
            "end": 362
          },
          "start": 351,
          "end": 362
        },
        "start": 343,
        "end": 362
      },
      "directive": null,
      "start": 343,
      "end": 363
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 366,
            "end": 367
          },
          "prefix": true,
          "start": 365,
          "end": 367
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 378
            },
            "start": 372,
            "end": 378
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 382,
            "end": 383
          },
          "start": 372,
          "end": 383
        },
        "start": 364,
        "end": 383
      },
      "directive": null,
      "start": 364,
      "end": 384
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "+",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 387,
            "end": 388
          },
          "prefix": true,
          "start": 386,
          "end": 388
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 397
            },
            "start": 393,
            "end": 399
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 403,
            "end": 404
          },
          "start": 393,
          "end": 404
        },
        "start": 385,
        "end": 404
      },
      "directive": null,
      "start": 385,
      "end": 405
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "+",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 408,
            "end": 409
          },
          "prefix": true,
          "start": 407,
          "end": 409
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 418
            },
            "start": 414,
            "end": 420
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 424,
            "end": 425
          },
          "start": 414,
          "end": 425
        },
        "start": 406,
        "end": 425
      },
      "directive": null,
      "start": 406,
      "end": 426
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "+",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 429,
            "end": 430
          },
          "prefix": true,
          "start": 428,
          "end": 430
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 437,
              "end": 441
            },
            "start": 435,
            "end": 441
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 445,
            "end": 446
          },
          "start": 435,
          "end": 446
        },
        "start": 427,
        "end": 446
      },
      "directive": null,
      "start": 427,
      "end": 447
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "+",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 450,
            "end": 451
          },
          "prefix": true,
          "start": 449,
          "end": 451
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 458,
              "end": 462
            },
            "start": 456,
            "end": 462
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 466,
            "end": 467
          },
          "start": 456,
          "end": 467
        },
        "start": 448,
        "end": 467
      },
      "directive": null,
      "start": 448,
      "end": 468
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 470,
          "end": 471
        },
        "operator": "**",
        "right": {
          "type": "UnaryExpression",
          "operator": "-",
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
              "start": 476,
              "end": 480
            },
            "start": 476,
            "end": 482
          },
          "prefix": true,
          "start": 475,
          "end": 482
        },
        "start": 470,
        "end": 482
      },
      "directive": null,
      "start": 470,
      "end": 483
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 484,
          "end": 485
        },
        "operator": "**",
        "right": {
          "type": "UnaryExpression",
          "operator": "-",
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
              "start": 490,
              "end": 494
            },
            "start": 490,
            "end": 496
          },
          "prefix": true,
          "start": 489,
          "end": 496
        },
        "start": 484,
        "end": 496
      },
      "directive": null,
      "start": 484,
      "end": 497
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 498,
          "end": 499
        },
        "operator": "**",
        "right": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 506,
              "end": 510
            },
            "start": 504,
            "end": 510
          },
          "prefix": true,
          "start": 503,
          "end": 510
        },
        "start": 498,
        "end": 510
      },
      "directive": null,
      "start": 498,
      "end": 511
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 512,
          "end": 513
        },
        "operator": "**",
        "right": {
          "type": "UnaryExpression",
          "operator": "+",
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
              "start": 520,
              "end": 524
            },
            "start": 518,
            "end": 524
          },
          "prefix": true,
          "start": 517,
          "end": 524
        },
        "start": 512,
        "end": 524
      },
      "directive": null,
      "start": 512,
      "end": 525
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 526,
          "end": 527
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "-",
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
                "start": 533,
                "end": 537
              },
              "start": 533,
              "end": 539
            },
            "prefix": true,
            "start": 532,
            "end": 539
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 544,
            "end": 545
          },
          "start": 531,
          "end": 545
        },
        "start": 526,
        "end": 545
      },
      "directive": null,
      "start": 526,
      "end": 546
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 547,
          "end": 548
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "-",
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
                "start": 554,
                "end": 558
              },
              "start": 554,
              "end": 560
            },
            "prefix": true,
            "start": 553,
            "end": 560
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 565,
            "end": 566
          },
          "start": 552,
          "end": 566
        },
        "start": 547,
        "end": 566
      },
      "directive": null,
      "start": 547,
      "end": 567
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 568,
          "end": 569
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "+",
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
                "start": 575,
                "end": 579
              },
              "start": 575,
              "end": 581
            },
            "prefix": true,
            "start": 574,
            "end": 581
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 586,
            "end": 587
          },
          "start": 573,
          "end": 587
        },
        "start": 568,
        "end": 587
      },
      "directive": null,
      "start": 568,
      "end": 588
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 589,
          "end": 590
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "+",
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
                "start": 596,
                "end": 600
              },
              "start": 596,
              "end": 602
            },
            "prefix": true,
            "start": 595,
            "end": 602
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 607,
            "end": 608
          },
          "start": 594,
          "end": 608
        },
        "start": 589,
        "end": 608
      },
      "directive": null,
      "start": 589,
      "end": 609
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 610,
          "end": 611
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 619,
                "end": 623
              },
              "start": 617,
              "end": 623
            },
            "prefix": true,
            "start": 616,
            "end": 623
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 628,
            "end": 629
          },
          "start": 615,
          "end": 629
        },
        "start": 610,
        "end": 629
      },
      "directive": null,
      "start": 610,
      "end": 630
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 631,
          "end": 632
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "+",
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
                "start": 640,
                "end": 644
              },
              "start": 638,
              "end": 644
            },
            "prefix": true,
            "start": 637,
            "end": 644
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 649,
            "end": 650
          },
          "start": 636,
          "end": 650
        },
        "start": 631,
        "end": 650
      },
      "directive": null,
      "start": 631,
      "end": 651
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 651
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
    "value": "=",
    "start": 9,
    "end": 10
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 11,
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
    "value": "-",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 18,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 20,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 26,
    "end": 28
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 34,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 36,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 42,
    "end": 44
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 50,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 54,
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
    "value": "**",
    "start": 58,
    "end": 60
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 66,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 70,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 74,
    "end": 76
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 82,
    "end": 83
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 85,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 88,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 90,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 97,
    "end": 99
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 111,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 113,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 120,
    "end": 122
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "type": "Punctuator",
    "value": "(",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 131,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 134,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 138,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 143,
    "end": 145
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 150,
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
    "value": "1",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 154,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 161,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "**",
    "start": 166,
    "end": 168
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 174,
    "end": 175
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 178,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 181,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 185,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 190,
    "end": 191
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 194,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 197,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 201,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 206,
    "end": 207
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 210,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 213,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 215,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 222,
    "end": 223
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 226,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 229,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 231,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 238,
    "end": 239
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 242,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 245,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 249,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 254,
    "end": 255
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 258,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 261,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 265,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 270,
    "end": 271
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 274,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 277,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 279,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 286,
    "end": 287
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 290,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 293,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 295,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 302,
    "end": 303
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 306,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 309,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 313,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 316,
    "end": 318
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 323,
    "end": 324
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 327,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 330,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 334,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 337,
    "end": 339
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 344,
    "end": 345
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 348,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "++",
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
    "value": "**",
    "start": 358,
    "end": 360
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 365,
    "end": 366
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 369,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 372,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 374,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 379,
    "end": 381
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 386,
    "end": 387
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 390,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 393,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 397,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 400,
    "end": 402
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 407,
    "end": 408
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 411,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 414,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 418,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 421,
    "end": 423
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 428,
    "end": 429
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 429,
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
    "value": "**",
    "start": 432,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 435,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 437,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 442,
    "end": 444
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 449,
    "end": 450
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 453,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 456,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 458,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 463,
    "end": 465
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "type": "Punctuator",
    "value": "-",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 476,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 480,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 482,
    "end": 483
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 486,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 490,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 494,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "**",
    "start": 500,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 504,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 506,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 510,
    "end": 511
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 514,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 518,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 520,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 528,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 533,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 537,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 541,
    "end": 543
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 545,
    "end": 546
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 549,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 554,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 558,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 562,
    "end": 564
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 566,
    "end": 567
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 570,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 575,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 579,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 583,
    "end": 585
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 587,
    "end": 588
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 591,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 596,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 600,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 604,
    "end": 606
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 612,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 617,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 619,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 625,
    "end": 627
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 629,
    "end": 630
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 633,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 638,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 640,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 646,
    "end": 648
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 650,
    "end": 651
  }
]
```

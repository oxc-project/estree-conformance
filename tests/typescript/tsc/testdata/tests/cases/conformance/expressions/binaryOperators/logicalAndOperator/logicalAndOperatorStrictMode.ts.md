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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 11,
                "end": 12
              }
            ],
            "start": 10,
            "end": 13
          },
          "definite": false,
          "start": 6,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 22
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 25,
            "end": 27
          },
          "definite": false,
          "start": 21,
          "end": 27
        }
      ],
      "declare": false,
      "start": 15,
      "end": 28
    },
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
            "typeAnnotation": null,
            "start": 35,
            "end": 36
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 39,
            "end": 40
          },
          "definite": false,
          "start": 35,
          "end": 40
        }
      ],
      "declare": false,
      "start": 29,
      "end": 41
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "init": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 52,
            "end": 57
          },
          "definite": false,
          "start": 48,
          "end": 57
        }
      ],
      "declare": false,
      "start": 42,
      "end": 58
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 68,
                "end": 72
              },
              "start": 66,
              "end": 72
            },
            "start": 65,
            "end": 72
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 84
          },
          "definite": false,
          "start": 65,
          "end": 84
        }
      ],
      "declare": false,
      "start": 59,
      "end": 85
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 93
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 105
          },
          "definite": false,
          "start": 92,
          "end": 105
        }
      ],
      "declare": false,
      "start": 86,
      "end": 106
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 114
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 117,
            "end": 121
          },
          "definite": false,
          "start": 113,
          "end": 121
        }
      ],
      "declare": false,
      "start": 107,
      "end": 122
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 130
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 134
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 138,
                "end": 139
              },
              "start": 133,
              "end": 139
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 144
            },
            "start": 133,
            "end": 144
          },
          "definite": false,
          "start": 129,
          "end": 144
        }
      ],
      "declare": false,
      "start": 123,
      "end": 145
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 155
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 159
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 164
            },
            "start": 158,
            "end": 164
          },
          "definite": false,
          "start": 153,
          "end": 164
        }
      ],
      "declare": false,
      "start": 147,
      "end": 165
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 174
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 178
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 183
            },
            "start": 177,
            "end": 183
          },
          "definite": false,
          "start": 172,
          "end": 183
        }
      ],
      "declare": false,
      "start": 166,
      "end": 184
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 193
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 196,
              "end": 197
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 201,
              "end": 202
            },
            "start": 196,
            "end": 202
          },
          "definite": false,
          "start": 191,
          "end": 202
        }
      ],
      "declare": false,
      "start": 185,
      "end": 203
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 210,
            "end": 212
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 216
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 221
            },
            "start": 215,
            "end": 221
          },
          "definite": false,
          "start": 210,
          "end": 221
        }
      ],
      "declare": false,
      "start": 204,
      "end": 222
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 231
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 235
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 240
            },
            "start": 234,
            "end": 240
          },
          "definite": false,
          "start": 229,
          "end": 240
        }
      ],
      "declare": false,
      "start": 223,
      "end": 241
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 250
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 254
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 259
            },
            "start": 253,
            "end": 259
          },
          "definite": false,
          "start": 248,
          "end": 259
        }
      ],
      "declare": false,
      "start": 242,
      "end": 260
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 269
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 273
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 278
            },
            "start": 272,
            "end": 278
          },
          "definite": false,
          "start": 267,
          "end": 278
        }
      ],
      "declare": false,
      "start": 261,
      "end": 279
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a8",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 288
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 292
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 297
            },
            "start": 291,
            "end": 297
          },
          "definite": false,
          "start": 286,
          "end": 297
        }
      ],
      "declare": false,
      "start": 280,
      "end": 298
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 308
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 311,
              "end": 312
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 316,
              "end": 317
            },
            "start": 311,
            "end": 317
          },
          "definite": false,
          "start": 306,
          "end": 317
        }
      ],
      "declare": false,
      "start": 300,
      "end": 318
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": null,
            "start": 325,
            "end": 327
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 331
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 336
            },
            "start": 330,
            "end": 336
          },
          "definite": false,
          "start": 325,
          "end": 336
        }
      ],
      "declare": false,
      "start": 319,
      "end": 337
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s3",
            "optional": false,
            "typeAnnotation": null,
            "start": 344,
            "end": 346
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 350
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 355
            },
            "start": 349,
            "end": 355
          },
          "definite": false,
          "start": 344,
          "end": 355
        }
      ],
      "declare": false,
      "start": 338,
      "end": 356
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s4",
            "optional": false,
            "typeAnnotation": null,
            "start": 363,
            "end": 365
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 369
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 373,
              "end": 374
            },
            "start": 368,
            "end": 374
          },
          "definite": false,
          "start": 363,
          "end": 374
        }
      ],
      "declare": false,
      "start": 357,
      "end": 375
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s5",
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 384
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 387,
              "end": 388
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 393
            },
            "start": 387,
            "end": 393
          },
          "definite": false,
          "start": 382,
          "end": 393
        }
      ],
      "declare": false,
      "start": 376,
      "end": 394
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s6",
            "optional": false,
            "typeAnnotation": null,
            "start": 401,
            "end": 403
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 406,
              "end": 407
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 411,
              "end": 412
            },
            "start": 406,
            "end": 412
          },
          "definite": false,
          "start": 401,
          "end": 412
        }
      ],
      "declare": false,
      "start": 395,
      "end": 413
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s7",
            "optional": false,
            "typeAnnotation": null,
            "start": 420,
            "end": 422
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 425,
              "end": 426
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 430,
              "end": 431
            },
            "start": 425,
            "end": 431
          },
          "definite": false,
          "start": 420,
          "end": 431
        }
      ],
      "declare": false,
      "start": 414,
      "end": 432
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s8",
            "optional": false,
            "typeAnnotation": null,
            "start": 439,
            "end": 441
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 444,
              "end": 445
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 449,
              "end": 450
            },
            "start": 444,
            "end": 450
          },
          "definite": false,
          "start": 439,
          "end": 450
        }
      ],
      "declare": false,
      "start": 433,
      "end": 451
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 459,
            "end": 461
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 464,
              "end": 465
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 469,
              "end": 470
            },
            "start": 464,
            "end": 470
          },
          "definite": false,
          "start": 459,
          "end": 470
        }
      ],
      "declare": false,
      "start": 453,
      "end": 471
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 478,
            "end": 480
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 483,
              "end": 484
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 488,
              "end": 489
            },
            "start": 483,
            "end": 489
          },
          "definite": false,
          "start": 478,
          "end": 489
        }
      ],
      "declare": false,
      "start": 472,
      "end": 490
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 497,
            "end": 499
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 502,
              "end": 503
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 507,
              "end": 508
            },
            "start": 502,
            "end": 508
          },
          "definite": false,
          "start": 497,
          "end": 508
        }
      ],
      "declare": false,
      "start": 491,
      "end": 509
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": null,
            "start": 516,
            "end": 518
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 521,
              "end": 522
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 526,
              "end": 527
            },
            "start": 521,
            "end": 527
          },
          "definite": false,
          "start": 516,
          "end": 527
        }
      ],
      "declare": false,
      "start": 510,
      "end": 528
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x5",
            "optional": false,
            "typeAnnotation": null,
            "start": 535,
            "end": 537
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 540,
              "end": 541
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 545,
              "end": 546
            },
            "start": 540,
            "end": 546
          },
          "definite": false,
          "start": 535,
          "end": 546
        }
      ],
      "declare": false,
      "start": 529,
      "end": 547
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x6",
            "optional": false,
            "typeAnnotation": null,
            "start": 554,
            "end": 556
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 559,
              "end": 560
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 564,
              "end": 565
            },
            "start": 559,
            "end": 565
          },
          "definite": false,
          "start": 554,
          "end": 565
        }
      ],
      "declare": false,
      "start": 548,
      "end": 566
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x7",
            "optional": false,
            "typeAnnotation": null,
            "start": 573,
            "end": 575
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 578,
              "end": 579
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 583,
              "end": 584
            },
            "start": 578,
            "end": 584
          },
          "definite": false,
          "start": 573,
          "end": 584
        }
      ],
      "declare": false,
      "start": 567,
      "end": 585
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x8",
            "optional": false,
            "typeAnnotation": null,
            "start": 592,
            "end": 594
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 597,
              "end": 598
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 602,
              "end": 603
            },
            "start": 597,
            "end": 603
          },
          "definite": false,
          "start": 592,
          "end": 603
        }
      ],
      "declare": false,
      "start": 586,
      "end": 604
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 612,
            "end": 614
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 617,
              "end": 618
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 622,
              "end": 623
            },
            "start": 617,
            "end": 623
          },
          "definite": false,
          "start": 612,
          "end": 623
        }
      ],
      "declare": false,
      "start": 606,
      "end": 624
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 631,
            "end": 633
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 636,
              "end": 637
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 641,
              "end": 642
            },
            "start": 636,
            "end": 642
          },
          "definite": false,
          "start": 631,
          "end": 642
        }
      ],
      "declare": false,
      "start": 625,
      "end": 643
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 650,
            "end": 652
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 655,
              "end": 656
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 660,
              "end": 661
            },
            "start": 655,
            "end": 661
          },
          "definite": false,
          "start": 650,
          "end": 661
        }
      ],
      "declare": false,
      "start": 644,
      "end": 662
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 669,
            "end": 671
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 674,
              "end": 675
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 679,
              "end": 680
            },
            "start": 674,
            "end": 680
          },
          "definite": false,
          "start": 669,
          "end": 680
        }
      ],
      "declare": false,
      "start": 663,
      "end": 681
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 688,
            "end": 690
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 693,
              "end": 694
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 698,
              "end": 699
            },
            "start": 693,
            "end": 699
          },
          "definite": false,
          "start": 688,
          "end": 699
        }
      ],
      "declare": false,
      "start": 682,
      "end": 700
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 707,
            "end": 709
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 712,
              "end": 713
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 717,
              "end": 718
            },
            "start": 712,
            "end": 718
          },
          "definite": false,
          "start": 707,
          "end": 718
        }
      ],
      "declare": false,
      "start": 701,
      "end": 719
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b7",
            "optional": false,
            "typeAnnotation": null,
            "start": 726,
            "end": 728
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 731,
              "end": 732
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 737
            },
            "start": 731,
            "end": 737
          },
          "definite": false,
          "start": 726,
          "end": 737
        }
      ],
      "declare": false,
      "start": 720,
      "end": 738
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b8",
            "optional": false,
            "typeAnnotation": null,
            "start": 745,
            "end": 747
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 750,
              "end": 751
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 755,
              "end": 756
            },
            "start": 750,
            "end": 756
          },
          "definite": false,
          "start": 745,
          "end": 756
        }
      ],
      "declare": false,
      "start": 739,
      "end": 757
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 765,
            "end": 767
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 770,
              "end": 771
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 775,
              "end": 776
            },
            "start": 770,
            "end": 776
          },
          "definite": false,
          "start": 765,
          "end": 776
        }
      ],
      "declare": false,
      "start": 759,
      "end": 777
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": null,
            "start": 784,
            "end": 786
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 789,
              "end": 790
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 794,
              "end": 795
            },
            "start": 789,
            "end": 795
          },
          "definite": false,
          "start": 784,
          "end": 795
        }
      ],
      "declare": false,
      "start": 778,
      "end": 796
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v3",
            "optional": false,
            "typeAnnotation": null,
            "start": 803,
            "end": 805
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 808,
              "end": 809
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 813,
              "end": 814
            },
            "start": 808,
            "end": 814
          },
          "definite": false,
          "start": 803,
          "end": 814
        }
      ],
      "declare": false,
      "start": 797,
      "end": 815
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v4",
            "optional": false,
            "typeAnnotation": null,
            "start": 822,
            "end": 824
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 827,
              "end": 828
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 832,
              "end": 833
            },
            "start": 827,
            "end": 833
          },
          "definite": false,
          "start": 822,
          "end": 833
        }
      ],
      "declare": false,
      "start": 816,
      "end": 834
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v5",
            "optional": false,
            "typeAnnotation": null,
            "start": 841,
            "end": 843
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 846,
              "end": 847
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 851,
              "end": 852
            },
            "start": 846,
            "end": 852
          },
          "definite": false,
          "start": 841,
          "end": 852
        }
      ],
      "declare": false,
      "start": 835,
      "end": 853
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v6",
            "optional": false,
            "typeAnnotation": null,
            "start": 860,
            "end": 862
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 865,
              "end": 866
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 870,
              "end": 871
            },
            "start": 865,
            "end": 871
          },
          "definite": false,
          "start": 860,
          "end": 871
        }
      ],
      "declare": false,
      "start": 854,
      "end": 872
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v7",
            "optional": false,
            "typeAnnotation": null,
            "start": 879,
            "end": 881
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 884,
              "end": 885
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 889,
              "end": 890
            },
            "start": 884,
            "end": 890
          },
          "definite": false,
          "start": 879,
          "end": 890
        }
      ],
      "declare": false,
      "start": 873,
      "end": 891
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v8",
            "optional": false,
            "typeAnnotation": null,
            "start": 898,
            "end": 900
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 903,
              "end": 904
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 908,
              "end": 909
            },
            "start": 903,
            "end": 909
          },
          "definite": false,
          "start": 898,
          "end": 909
        }
      ],
      "declare": false,
      "start": 892,
      "end": 910
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "typeAnnotation": null,
            "start": 918,
            "end": 920
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 923,
              "end": 924
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 928,
              "end": 929
            },
            "start": 923,
            "end": 929
          },
          "definite": false,
          "start": 918,
          "end": 929
        }
      ],
      "declare": false,
      "start": 912,
      "end": 930
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "u2",
            "optional": false,
            "typeAnnotation": null,
            "start": 937,
            "end": 939
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 942,
              "end": 943
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 947,
              "end": 948
            },
            "start": 942,
            "end": 948
          },
          "definite": false,
          "start": 937,
          "end": 948
        }
      ],
      "declare": false,
      "start": 931,
      "end": 949
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "u3",
            "optional": false,
            "typeAnnotation": null,
            "start": 956,
            "end": 958
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 961,
              "end": 962
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 966,
              "end": 967
            },
            "start": 961,
            "end": 967
          },
          "definite": false,
          "start": 956,
          "end": 967
        }
      ],
      "declare": false,
      "start": 950,
      "end": 968
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "u4",
            "optional": false,
            "typeAnnotation": null,
            "start": 975,
            "end": 977
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 980,
              "end": 981
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 985,
              "end": 986
            },
            "start": 980,
            "end": 986
          },
          "definite": false,
          "start": 975,
          "end": 986
        }
      ],
      "declare": false,
      "start": 969,
      "end": 987
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "u5",
            "optional": false,
            "typeAnnotation": null,
            "start": 994,
            "end": 996
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 999,
              "end": 1000
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 1004,
              "end": 1005
            },
            "start": 999,
            "end": 1005
          },
          "definite": false,
          "start": 994,
          "end": 1005
        }
      ],
      "declare": false,
      "start": 988,
      "end": 1006
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "u6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1013,
            "end": 1015
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 1018,
              "end": 1019
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 1023,
              "end": 1024
            },
            "start": 1018,
            "end": 1024
          },
          "definite": false,
          "start": 1013,
          "end": 1024
        }
      ],
      "declare": false,
      "start": 1007,
      "end": 1025
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "u7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1032,
            "end": 1034
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 1037,
              "end": 1038
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1042,
              "end": 1043
            },
            "start": 1037,
            "end": 1043
          },
          "definite": false,
          "start": 1032,
          "end": 1043
        }
      ],
      "declare": false,
      "start": 1026,
      "end": 1044
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "u8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1051,
            "end": 1053
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 1056,
              "end": 1057
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1061,
              "end": 1062
            },
            "start": 1056,
            "end": 1062
          },
          "definite": false,
          "start": 1051,
          "end": 1062
        }
      ],
      "declare": false,
      "start": 1045,
      "end": 1063
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1071,
            "end": 1073
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1076,
              "end": 1077
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1081,
              "end": 1082
            },
            "start": 1076,
            "end": 1082
          },
          "definite": false,
          "start": 1071,
          "end": 1082
        }
      ],
      "declare": false,
      "start": 1065,
      "end": 1083
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1090,
            "end": 1092
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1095,
              "end": 1096
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 1100,
              "end": 1101
            },
            "start": 1095,
            "end": 1101
          },
          "definite": false,
          "start": 1090,
          "end": 1101
        }
      ],
      "declare": false,
      "start": 1084,
      "end": 1102
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1109,
            "end": 1111
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1114,
              "end": 1115
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1119,
              "end": 1120
            },
            "start": 1114,
            "end": 1120
          },
          "definite": false,
          "start": 1109,
          "end": 1120
        }
      ],
      "declare": false,
      "start": 1103,
      "end": 1121
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1128,
            "end": 1130
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1133,
              "end": 1134
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1138,
              "end": 1139
            },
            "start": 1133,
            "end": 1139
          },
          "definite": false,
          "start": 1128,
          "end": 1139
        }
      ],
      "declare": false,
      "start": 1122,
      "end": 1140
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1147,
            "end": 1149
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1152,
              "end": 1153
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 1157,
              "end": 1158
            },
            "start": 1152,
            "end": 1158
          },
          "definite": false,
          "start": 1147,
          "end": 1158
        }
      ],
      "declare": false,
      "start": 1141,
      "end": 1159
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1166,
            "end": 1168
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1171,
              "end": 1172
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 1176,
              "end": 1177
            },
            "start": 1171,
            "end": 1177
          },
          "definite": false,
          "start": 1166,
          "end": 1177
        }
      ],
      "declare": false,
      "start": 1160,
      "end": 1178
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1185,
            "end": 1187
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1190,
              "end": 1191
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1195,
              "end": 1196
            },
            "start": 1190,
            "end": 1196
          },
          "definite": false,
          "start": 1185,
          "end": 1196
        }
      ],
      "declare": false,
      "start": 1179,
      "end": 1197
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1204,
            "end": 1206
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1209,
              "end": 1210
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1214,
              "end": 1215
            },
            "start": 1209,
            "end": 1215
          },
          "definite": false,
          "start": 1204,
          "end": 1215
        }
      ],
      "declare": false,
      "start": 1198,
      "end": 1216
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1224,
            "end": 1226
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1229,
              "end": 1230
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1234,
              "end": 1235
            },
            "start": 1229,
            "end": 1235
          },
          "definite": false,
          "start": 1224,
          "end": 1235
        }
      ],
      "declare": false,
      "start": 1218,
      "end": 1236
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1243,
            "end": 1245
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1248,
              "end": 1249
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 1253,
              "end": 1254
            },
            "start": 1248,
            "end": 1254
          },
          "definite": false,
          "start": 1243,
          "end": 1254
        }
      ],
      "declare": false,
      "start": 1237,
      "end": 1255
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1262,
            "end": 1264
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1267,
              "end": 1268
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1272,
              "end": 1273
            },
            "start": 1267,
            "end": 1273
          },
          "definite": false,
          "start": 1262,
          "end": 1273
        }
      ],
      "declare": false,
      "start": 1256,
      "end": 1274
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1281,
            "end": 1283
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1286,
              "end": 1287
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1291,
              "end": 1292
            },
            "start": 1286,
            "end": 1292
          },
          "definite": false,
          "start": 1281,
          "end": 1292
        }
      ],
      "declare": false,
      "start": 1275,
      "end": 1293
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1300,
            "end": 1302
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1305,
              "end": 1306
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 1310,
              "end": 1311
            },
            "start": 1305,
            "end": 1311
          },
          "definite": false,
          "start": 1300,
          "end": 1311
        }
      ],
      "declare": false,
      "start": 1294,
      "end": 1312
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1319,
            "end": 1321
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1324,
              "end": 1325
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 1329,
              "end": 1330
            },
            "start": 1324,
            "end": 1330
          },
          "definite": false,
          "start": 1319,
          "end": 1330
        }
      ],
      "declare": false,
      "start": 1313,
      "end": 1331
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1338,
            "end": 1340
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1343,
              "end": 1344
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1348,
              "end": 1349
            },
            "start": 1343,
            "end": 1349
          },
          "definite": false,
          "start": 1338,
          "end": 1349
        }
      ],
      "declare": false,
      "start": 1332,
      "end": 1350
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1357,
            "end": 1359
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1362,
              "end": 1363
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1367,
              "end": 1368
            },
            "start": 1362,
            "end": 1368
          },
          "definite": false,
          "start": 1357,
          "end": 1368
        }
      ],
      "declare": false,
      "start": 1351,
      "end": 1369
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1369
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 10,
    "end": 11
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 15,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 25,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 29,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "0",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 42,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 50,
    "end": 51
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 52,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 59,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 68,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 75,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 86,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 96,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 107,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116
  },
  {
    "type": "Null",
    "value": "null",
    "start": 117,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 123,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 135,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 140,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 147,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 153,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 160,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 166,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 172,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 179,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 185,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "a3",
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
    "type": "Identifier",
    "value": "a",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 198,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Keyword",
    "value": "const",
    "start": 204,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 210,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 217,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 223,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 229,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 236,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "type": "Keyword",
    "value": "const",
    "start": 242,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 248,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 255,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 261,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 267,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 274,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 280,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 286,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 293,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 300,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 306,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 313,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 319,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 325,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 332,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "type": "Keyword",
    "value": "const",
    "start": 338,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 344,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 351,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 357,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 363,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 370,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 376,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 382,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 389,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 393,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 395,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 401,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 408,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 414,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "s7",
    "start": 420,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 427,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 433,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 439,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 446,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 453,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 459,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 466,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 472,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 478,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 485,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 491,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 497,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 504,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 510,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 516,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 523,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 527,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 529,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 535,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 542,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 546,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 548,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 554,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 561,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 565,
    "end": 566
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 567,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "x7",
    "start": 573,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 580,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "type": "Keyword",
    "value": "const",
    "start": 586,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "x8",
    "start": 592,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 599,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 603,
    "end": 604
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 606,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 612,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 619,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Keyword",
    "value": "const",
    "start": 625,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 631,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 638,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 642,
    "end": 643
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 644,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 650,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 657,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 661,
    "end": 662
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 663,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 669,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 676,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 680,
    "end": 681
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 682,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 688,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 695,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 699,
    "end": 700
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 701,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 707,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 714,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 718,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 720,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 726,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 733,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 737,
    "end": 738
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 739,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 745,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 752,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 756,
    "end": 757
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 759,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 765,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 772,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 776,
    "end": 777
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 778,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 784,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 791,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 795,
    "end": 796
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 797,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 803,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 810,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 814,
    "end": 815
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 816,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 822,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 829,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 833,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 835,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "v5",
    "start": 841,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 848,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 852,
    "end": 853
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 854,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "v6",
    "start": 860,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 867,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 871,
    "end": 872
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 873,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "v7",
    "start": 879,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 886,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 890,
    "end": 891
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 892,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "v8",
    "start": 898,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 905,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 909,
    "end": 910
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 912,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "u1",
    "start": 918,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 925,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 929,
    "end": 930
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 931,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "u2",
    "start": 937,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 944,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 948,
    "end": 949
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 950,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "u3",
    "start": 956,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 963,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 967,
    "end": 968
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 969,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "u4",
    "start": 975,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 982,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 986,
    "end": 987
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 988,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "u5",
    "start": 994,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1001,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1007,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "u6",
    "start": 1013,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1020,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1026,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "u7",
    "start": 1032,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1039,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1045,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "u8",
    "start": 1051,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1058,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1065,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "n1",
    "start": 1071,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1078,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1084,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "n2",
    "start": 1090,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1097,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1103,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "n3",
    "start": 1109,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1116,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1122,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "n4",
    "start": 1128,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1135,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1141,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "n5",
    "start": 1147,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1154,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1160,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "n6",
    "start": 1166,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1173,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1179,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "n7",
    "start": 1185,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1192,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1198,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "n8",
    "start": 1204,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1211,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1218,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 1224,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1231,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1237,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "z2",
    "start": 1243,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1250,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1256,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "z3",
    "start": 1262,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1269,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1275,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "z4",
    "start": 1281,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1288,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1294,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "z5",
    "start": 1300,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1307,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1313,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "z6",
    "start": 1319,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1326,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1332,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "z7",
    "start": 1338,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1345,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1351,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "z8",
    "start": 1357,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1364,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1368,
    "end": 1369
  }
]
```

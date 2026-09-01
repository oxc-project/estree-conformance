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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 14,
                  "end": 23
                },
                "typeArguments": null,
                "start": 7,
                "end": 23
              },
              "start": 5,
              "end": 23
            },
            "start": 4,
            "end": 23
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 23
        }
      ],
      "declare": false,
      "start": 0,
      "end": 24
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 32
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
            "initializer": null,
            "computed": false,
            "start": 35,
            "end": 36
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 39
            },
            "initializer": null,
            "computed": false,
            "start": 38,
            "end": 39
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 42
            },
            "initializer": null,
            "computed": false,
            "start": 41,
            "end": 42
          }
        ],
        "start": 33,
        "end": 44
      },
      "const": false,
      "declare": false,
      "start": 26,
      "end": 44
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 58
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 59,
            "end": 60
          }
        ],
        "start": 58,
        "end": 61
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 66
              },
              "typeArguments": null,
              "start": 65,
              "end": 66
            },
            "start": 63,
            "end": 66
          },
          "start": 62,
          "end": 66
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "foo_r1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 84
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 87,
                    "end": 88
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 91,
                    "end": 92
                  },
                  "start": 87,
                  "end": 92
                },
                "definite": false,
                "start": 78,
                "end": 92
              }
            ],
            "declare": false,
            "start": 74,
            "end": 93
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
                  "name": "foo_r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 108
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 111,
                    "end": 112
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 115,
                    "end": 116
                  },
                  "start": 111,
                  "end": 116
                },
                "definite": false,
                "start": 102,
                "end": 116
              }
            ],
            "declare": false,
            "start": 98,
            "end": 117
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
                  "name": "foo_r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 126,
                  "end": 132
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 136
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 141
                  },
                  "start": 135,
                  "end": 141
                },
                "definite": false,
                "start": 126,
                "end": 141
              }
            ],
            "declare": false,
            "start": 122,
            "end": 142
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
                  "name": "foo_r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 157
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 161
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 166
                  },
                  "start": 160,
                  "end": 166
                },
                "definite": false,
                "start": 151,
                "end": 166
              }
            ],
            "declare": false,
            "start": 147,
            "end": 167
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
                  "name": "foo_r5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 182
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 185,
                    "end": 186
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 190,
                    "end": 191
                  },
                  "start": 185,
                  "end": 191
                },
                "definite": false,
                "start": 176,
                "end": 191
              }
            ],
            "declare": false,
            "start": 172,
            "end": 192
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
                  "name": "foo_r6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 207
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 210,
                    "end": 211
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 216
                  },
                  "start": 210,
                  "end": 216
                },
                "definite": false,
                "start": 201,
                "end": 216
              }
            ],
            "declare": false,
            "start": 197,
            "end": 217
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
                  "name": "foo_r7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 232
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 235,
                    "end": 236
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 241,
                    "end": 242
                  },
                  "start": 235,
                  "end": 242
                },
                "definite": false,
                "start": 226,
                "end": 242
              }
            ],
            "declare": false,
            "start": 222,
            "end": 243
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
                  "name": "foo_r8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 258
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 261,
                    "end": 262
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 267,
                    "end": 268
                  },
                  "start": 261,
                  "end": 268
                },
                "definite": false,
                "start": 252,
                "end": 268
              }
            ],
            "declare": false,
            "start": 248,
            "end": 269
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
                  "name": "foo_r1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 279,
                  "end": 285
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 288,
                    "end": 289
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 292,
                    "end": 293
                  },
                  "start": 288,
                  "end": 293
                },
                "definite": false,
                "start": 279,
                "end": 293
              }
            ],
            "declare": false,
            "start": 275,
            "end": 294
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
                  "name": "foo_r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 303,
                  "end": 309
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 312,
                    "end": 313
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 316,
                    "end": 317
                  },
                  "start": 312,
                  "end": 317
                },
                "definite": false,
                "start": 303,
                "end": 317
              }
            ],
            "declare": false,
            "start": 299,
            "end": 318
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
                  "name": "foo_r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 327,
                  "end": 333
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 336,
                    "end": 337
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 341,
                    "end": 342
                  },
                  "start": 336,
                  "end": 342
                },
                "definite": false,
                "start": 327,
                "end": 342
              }
            ],
            "declare": false,
            "start": 323,
            "end": 343
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
                  "name": "foo_r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 352,
                  "end": 358
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 361,
                    "end": 362
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 366,
                    "end": 367
                  },
                  "start": 361,
                  "end": 367
                },
                "definite": false,
                "start": 352,
                "end": 367
              }
            ],
            "declare": false,
            "start": 348,
            "end": 368
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
                  "name": "foo_r5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 377,
                  "end": 383
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 386,
                    "end": 387
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 391,
                    "end": 392
                  },
                  "start": 386,
                  "end": 392
                },
                "definite": false,
                "start": 377,
                "end": 392
              }
            ],
            "declare": false,
            "start": 373,
            "end": 393
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
                  "name": "foo_r6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 402,
                  "end": 408
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 411,
                    "end": 412
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 416,
                    "end": 417
                  },
                  "start": 411,
                  "end": 417
                },
                "definite": false,
                "start": 402,
                "end": 417
              }
            ],
            "declare": false,
            "start": 398,
            "end": 418
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
                  "name": "foo_r7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 427,
                  "end": 433
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 436,
                    "end": 437
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 442,
                    "end": 443
                  },
                  "start": 436,
                  "end": 443
                },
                "definite": false,
                "start": 427,
                "end": 443
              }
            ],
            "declare": false,
            "start": 423,
            "end": 444
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
                  "name": "foo_r8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 453,
                  "end": 459
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 462,
                    "end": 463
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 468,
                    "end": 469
                  },
                  "start": 462,
                  "end": 469
                },
                "definite": false,
                "start": 453,
                "end": 469
              }
            ],
            "declare": false,
            "start": 449,
            "end": 470
          }
        ],
        "start": 68,
        "end": 472
      },
      "expression": false,
      "start": 46,
      "end": 472
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 481,
                "end": 488
              },
              "start": 479,
              "end": 488
            },
            "start": 478,
            "end": 488
          },
          "init": null,
          "definite": false,
          "start": 478,
          "end": 488
        }
      ],
      "declare": false,
      "start": 474,
      "end": 489
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 497,
                "end": 503
              },
              "start": 495,
              "end": 503
            },
            "start": 494,
            "end": 503
          },
          "init": null,
          "definite": false,
          "start": 494,
          "end": 503
        }
      ],
      "declare": false,
      "start": 490,
      "end": 504
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 512,
                "end": 518
              },
              "start": 510,
              "end": 518
            },
            "start": 509,
            "end": 518
          },
          "init": null,
          "definite": false,
          "start": 509,
          "end": 518
        }
      ],
      "declare": false,
      "start": 505,
      "end": 519
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 527,
                "end": 531
              },
              "start": 525,
              "end": 531
            },
            "start": 524,
            "end": 531
          },
          "init": null,
          "definite": false,
          "start": 524,
          "end": 531
        }
      ],
      "declare": false,
      "start": 520,
      "end": 532
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
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 540,
                  "end": 541
                },
                "typeArguments": null,
                "start": 540,
                "end": 541
              },
              "start": 538,
              "end": 541
            },
            "start": 537,
            "end": 541
          },
          "init": null,
          "definite": false,
          "start": 537,
          "end": 541
        }
      ],
      "declare": false,
      "start": 533,
      "end": 542
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 550,
                "end": 552
              },
              "start": 548,
              "end": 552
            },
            "start": 547,
            "end": 552
          },
          "init": null,
          "definite": false,
          "start": 547,
          "end": 552
        }
      ],
      "declare": false,
      "start": 543,
      "end": 553
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
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 561,
                  "end": 567
                },
                "start": 561,
                "end": 569
              },
              "start": 559,
              "end": 569
            },
            "start": 558,
            "end": 569
          },
          "init": null,
          "definite": false,
          "start": 558,
          "end": 569
        }
      ],
      "declare": false,
      "start": 554,
      "end": 570
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
            "name": "r1a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 590,
            "end": 594
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 597,
              "end": 598
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 601,
              "end": 602
            },
            "start": 597,
            "end": 602
          },
          "definite": false,
          "start": 590,
          "end": 602
        }
      ],
      "declare": false,
      "start": 586,
      "end": 603
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
            "name": "r1a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 608,
            "end": 612
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 615,
              "end": 616
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 619,
              "end": 620
            },
            "start": 615,
            "end": 620
          },
          "definite": false,
          "start": 608,
          "end": 620
        }
      ],
      "declare": false,
      "start": 604,
      "end": 621
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
            "name": "r1a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 626,
            "end": 630
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 633,
              "end": 634
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 637,
              "end": 638
            },
            "start": 633,
            "end": 638
          },
          "definite": false,
          "start": 626,
          "end": 638
        }
      ],
      "declare": false,
      "start": 622,
      "end": 639
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
            "name": "r1a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 644,
            "end": 648
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 651,
              "end": 652
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 655,
              "end": 656
            },
            "start": 651,
            "end": 656
          },
          "definite": false,
          "start": 644,
          "end": 656
        }
      ],
      "declare": false,
      "start": 640,
      "end": 657
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
            "name": "r1a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 662,
            "end": 666
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 669,
              "end": 670
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 673,
              "end": 674
            },
            "start": 669,
            "end": 674
          },
          "definite": false,
          "start": 662,
          "end": 674
        }
      ],
      "declare": false,
      "start": 658,
      "end": 675
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
            "name": "r1a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 680,
            "end": 684
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 687,
              "end": 688
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 691,
              "end": 692
            },
            "start": 687,
            "end": 692
          },
          "definite": false,
          "start": 680,
          "end": 692
        }
      ],
      "declare": false,
      "start": 676,
      "end": 693
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
            "name": "r1a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 698,
            "end": 702
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 705,
              "end": 706
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 709,
              "end": 710
            },
            "start": 705,
            "end": 710
          },
          "definite": false,
          "start": 698,
          "end": 710
        }
      ],
      "declare": false,
      "start": 694,
      "end": 711
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
            "name": "r1b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 717,
            "end": 721
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 724,
              "end": 725
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 728,
              "end": 729
            },
            "start": 724,
            "end": 729
          },
          "definite": false,
          "start": 717,
          "end": 729
        }
      ],
      "declare": false,
      "start": 713,
      "end": 730
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
            "name": "r1b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 735,
            "end": 739
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 742,
              "end": 743
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 746,
              "end": 747
            },
            "start": 742,
            "end": 747
          },
          "definite": false,
          "start": 735,
          "end": 747
        }
      ],
      "declare": false,
      "start": 731,
      "end": 748
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
            "name": "r1b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 753,
            "end": 757
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 760,
              "end": 761
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 764,
              "end": 765
            },
            "start": 760,
            "end": 765
          },
          "definite": false,
          "start": 753,
          "end": 765
        }
      ],
      "declare": false,
      "start": 749,
      "end": 766
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
            "name": "r1b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 771,
            "end": 775
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 778,
              "end": 779
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 782,
              "end": 783
            },
            "start": 778,
            "end": 783
          },
          "definite": false,
          "start": 771,
          "end": 783
        }
      ],
      "declare": false,
      "start": 767,
      "end": 784
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
            "name": "r1b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 789,
            "end": 793
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 796,
              "end": 797
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 800,
              "end": 801
            },
            "start": 796,
            "end": 801
          },
          "definite": false,
          "start": 789,
          "end": 801
        }
      ],
      "declare": false,
      "start": 785,
      "end": 802
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
            "name": "r1b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 807,
            "end": 811
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 814,
              "end": 815
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 818,
              "end": 819
            },
            "start": 814,
            "end": 819
          },
          "definite": false,
          "start": 807,
          "end": 819
        }
      ],
      "declare": false,
      "start": 803,
      "end": 820
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
            "name": "r1b7",
            "optional": false,
            "typeAnnotation": null,
            "start": 825,
            "end": 829
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 832,
              "end": 833
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 836,
              "end": 837
            },
            "start": 832,
            "end": 837
          },
          "definite": false,
          "start": 825,
          "end": 837
        }
      ],
      "declare": false,
      "start": 821,
      "end": 838
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
            "name": "r2a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 858,
            "end": 862
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 865,
              "end": 866
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 869,
              "end": 870
            },
            "start": 865,
            "end": 870
          },
          "definite": false,
          "start": 858,
          "end": 870
        }
      ],
      "declare": false,
      "start": 854,
      "end": 871
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
            "name": "r2a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 876,
            "end": 880
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 883,
              "end": 884
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 887,
              "end": 888
            },
            "start": 883,
            "end": 888
          },
          "definite": false,
          "start": 876,
          "end": 888
        }
      ],
      "declare": false,
      "start": 872,
      "end": 889
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
            "name": "r2a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 894,
            "end": 898
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 901,
              "end": 902
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 905,
              "end": 906
            },
            "start": 901,
            "end": 906
          },
          "definite": false,
          "start": 894,
          "end": 906
        }
      ],
      "declare": false,
      "start": 890,
      "end": 907
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
            "name": "r2a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 912,
            "end": 916
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 919,
              "end": 920
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 923,
              "end": 924
            },
            "start": 919,
            "end": 924
          },
          "definite": false,
          "start": 912,
          "end": 924
        }
      ],
      "declare": false,
      "start": 908,
      "end": 925
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
            "name": "r2a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 930,
            "end": 934
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 937,
              "end": 938
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 941,
              "end": 942
            },
            "start": 937,
            "end": 942
          },
          "definite": false,
          "start": 930,
          "end": 942
        }
      ],
      "declare": false,
      "start": 926,
      "end": 943
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
            "name": "r2a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 948,
            "end": 952
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 955,
              "end": 956
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 959,
              "end": 960
            },
            "start": 955,
            "end": 960
          },
          "definite": false,
          "start": 948,
          "end": 960
        }
      ],
      "declare": false,
      "start": 944,
      "end": 961
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
            "name": "r2a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 966,
            "end": 970
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 973,
              "end": 974
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 977,
              "end": 978
            },
            "start": 973,
            "end": 978
          },
          "definite": false,
          "start": 966,
          "end": 978
        }
      ],
      "declare": false,
      "start": 962,
      "end": 979
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
            "name": "r2b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 985,
            "end": 989
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 992,
              "end": 993
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 996,
              "end": 997
            },
            "start": 992,
            "end": 997
          },
          "definite": false,
          "start": 985,
          "end": 997
        }
      ],
      "declare": false,
      "start": 981,
      "end": 998
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
            "name": "r2b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1003,
            "end": 1007
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1010,
              "end": 1011
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1014,
              "end": 1015
            },
            "start": 1010,
            "end": 1015
          },
          "definite": false,
          "start": 1003,
          "end": 1015
        }
      ],
      "declare": false,
      "start": 999,
      "end": 1016
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
            "name": "r2b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1021,
            "end": 1025
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1028,
              "end": 1029
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1032,
              "end": 1033
            },
            "start": 1028,
            "end": 1033
          },
          "definite": false,
          "start": 1021,
          "end": 1033
        }
      ],
      "declare": false,
      "start": 1017,
      "end": 1034
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
            "name": "r2b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1039,
            "end": 1043
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 1046,
              "end": 1047
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1050,
              "end": 1051
            },
            "start": 1046,
            "end": 1051
          },
          "definite": false,
          "start": 1039,
          "end": 1051
        }
      ],
      "declare": false,
      "start": 1035,
      "end": 1052
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
            "name": "r2b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1057,
            "end": 1061
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 1064,
              "end": 1065
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1068,
              "end": 1069
            },
            "start": 1064,
            "end": 1069
          },
          "definite": false,
          "start": 1057,
          "end": 1069
        }
      ],
      "declare": false,
      "start": 1053,
      "end": 1070
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
            "name": "r2b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1075,
            "end": 1079
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1082,
              "end": 1083
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1086,
              "end": 1087
            },
            "start": 1082,
            "end": 1087
          },
          "definite": false,
          "start": 1075,
          "end": 1087
        }
      ],
      "declare": false,
      "start": 1071,
      "end": 1088
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
            "name": "r2b7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1093,
            "end": 1097
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1100,
              "end": 1101
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1104,
              "end": 1105
            },
            "start": 1100,
            "end": 1105
          },
          "definite": false,
          "start": 1093,
          "end": 1105
        }
      ],
      "declare": false,
      "start": 1089,
      "end": 1106
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
            "name": "r3a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1127,
            "end": 1131
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1134,
              "end": 1135
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1139,
              "end": 1140
            },
            "start": 1134,
            "end": 1140
          },
          "definite": false,
          "start": 1127,
          "end": 1140
        }
      ],
      "declare": false,
      "start": 1123,
      "end": 1141
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
            "name": "r3a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1146,
            "end": 1150
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1153,
              "end": 1154
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1158,
              "end": 1159
            },
            "start": 1153,
            "end": 1159
          },
          "definite": false,
          "start": 1146,
          "end": 1159
        }
      ],
      "declare": false,
      "start": 1142,
      "end": 1160
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
            "name": "r3a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1165,
            "end": 1169
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1172,
              "end": 1173
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1177,
              "end": 1178
            },
            "start": 1172,
            "end": 1178
          },
          "definite": false,
          "start": 1165,
          "end": 1178
        }
      ],
      "declare": false,
      "start": 1161,
      "end": 1179
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
            "name": "r3a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1184,
            "end": 1188
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1191,
              "end": 1192
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 1196,
              "end": 1197
            },
            "start": 1191,
            "end": 1197
          },
          "definite": false,
          "start": 1184,
          "end": 1197
        }
      ],
      "declare": false,
      "start": 1180,
      "end": 1198
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
            "name": "r3a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1203,
            "end": 1207
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1210,
              "end": 1211
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 1215,
              "end": 1216
            },
            "start": 1210,
            "end": 1216
          },
          "definite": false,
          "start": 1203,
          "end": 1216
        }
      ],
      "declare": false,
      "start": 1199,
      "end": 1217
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
            "name": "r3a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1222,
            "end": 1226
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1229,
              "end": 1230
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1234,
              "end": 1235
            },
            "start": 1229,
            "end": 1235
          },
          "definite": false,
          "start": 1222,
          "end": 1235
        }
      ],
      "declare": false,
      "start": 1218,
      "end": 1236
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
            "name": "r3a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1241,
            "end": 1245
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1248,
              "end": 1249
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1253,
              "end": 1254
            },
            "start": 1248,
            "end": 1254
          },
          "definite": false,
          "start": 1241,
          "end": 1254
        }
      ],
      "declare": false,
      "start": 1237,
      "end": 1255
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
            "name": "r3b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1261,
            "end": 1265
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1268,
              "end": 1269
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1273,
              "end": 1274
            },
            "start": 1268,
            "end": 1274
          },
          "definite": false,
          "start": 1261,
          "end": 1274
        }
      ],
      "declare": false,
      "start": 1257,
      "end": 1275
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
            "name": "r3b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1280,
            "end": 1284
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1287,
              "end": 1288
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1292,
              "end": 1293
            },
            "start": 1287,
            "end": 1293
          },
          "definite": false,
          "start": 1280,
          "end": 1293
        }
      ],
      "declare": false,
      "start": 1276,
      "end": 1294
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
            "name": "r3b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1299,
            "end": 1303
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1306,
              "end": 1307
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1311,
              "end": 1312
            },
            "start": 1306,
            "end": 1312
          },
          "definite": false,
          "start": 1299,
          "end": 1312
        }
      ],
      "declare": false,
      "start": 1295,
      "end": 1313
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
            "name": "r3b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1318,
            "end": 1322
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 1325,
              "end": 1326
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1330,
              "end": 1331
            },
            "start": 1325,
            "end": 1331
          },
          "definite": false,
          "start": 1318,
          "end": 1331
        }
      ],
      "declare": false,
      "start": 1314,
      "end": 1332
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
            "name": "r3b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1337,
            "end": 1341
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 1344,
              "end": 1345
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1349,
              "end": 1350
            },
            "start": 1344,
            "end": 1350
          },
          "definite": false,
          "start": 1337,
          "end": 1350
        }
      ],
      "declare": false,
      "start": 1333,
      "end": 1351
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
            "name": "r3b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1356,
            "end": 1360
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1363,
              "end": 1364
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1368,
              "end": 1369
            },
            "start": 1363,
            "end": 1369
          },
          "definite": false,
          "start": 1356,
          "end": 1369
        }
      ],
      "declare": false,
      "start": 1352,
      "end": 1370
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
            "name": "r3b7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1375,
            "end": 1379
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1382,
              "end": 1383
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1387,
              "end": 1388
            },
            "start": 1382,
            "end": 1388
          },
          "definite": false,
          "start": 1375,
          "end": 1388
        }
      ],
      "declare": false,
      "start": 1371,
      "end": 1389
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
            "name": "r4a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1410,
            "end": 1414
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1417,
              "end": 1418
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1422,
              "end": 1423
            },
            "start": 1417,
            "end": 1423
          },
          "definite": false,
          "start": 1410,
          "end": 1423
        }
      ],
      "declare": false,
      "start": 1406,
      "end": 1424
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
            "name": "r4a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1429,
            "end": 1433
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1436,
              "end": 1437
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1441,
              "end": 1442
            },
            "start": 1436,
            "end": 1442
          },
          "definite": false,
          "start": 1429,
          "end": 1442
        }
      ],
      "declare": false,
      "start": 1425,
      "end": 1443
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
            "name": "r4a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1448,
            "end": 1452
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1455,
              "end": 1456
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1460,
              "end": 1461
            },
            "start": 1455,
            "end": 1461
          },
          "definite": false,
          "start": 1448,
          "end": 1461
        }
      ],
      "declare": false,
      "start": 1444,
      "end": 1462
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
            "name": "r4a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1467,
            "end": 1471
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1474,
              "end": 1475
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 1479,
              "end": 1480
            },
            "start": 1474,
            "end": 1480
          },
          "definite": false,
          "start": 1467,
          "end": 1480
        }
      ],
      "declare": false,
      "start": 1463,
      "end": 1481
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
            "name": "r4a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1486,
            "end": 1490
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1493,
              "end": 1494
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 1498,
              "end": 1499
            },
            "start": 1493,
            "end": 1499
          },
          "definite": false,
          "start": 1486,
          "end": 1499
        }
      ],
      "declare": false,
      "start": 1482,
      "end": 1500
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
            "name": "r4a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1505,
            "end": 1509
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1512,
              "end": 1513
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1517,
              "end": 1518
            },
            "start": 1512,
            "end": 1518
          },
          "definite": false,
          "start": 1505,
          "end": 1518
        }
      ],
      "declare": false,
      "start": 1501,
      "end": 1519
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
            "name": "r4a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1524,
            "end": 1528
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1531,
              "end": 1532
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1536,
              "end": 1537
            },
            "start": 1531,
            "end": 1537
          },
          "definite": false,
          "start": 1524,
          "end": 1537
        }
      ],
      "declare": false,
      "start": 1520,
      "end": 1538
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
            "name": "r4b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1544,
            "end": 1548
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1551,
              "end": 1552
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1556,
              "end": 1557
            },
            "start": 1551,
            "end": 1557
          },
          "definite": false,
          "start": 1544,
          "end": 1557
        }
      ],
      "declare": false,
      "start": 1540,
      "end": 1558
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
            "name": "r4b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1563,
            "end": 1567
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1570,
              "end": 1571
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1575,
              "end": 1576
            },
            "start": 1570,
            "end": 1576
          },
          "definite": false,
          "start": 1563,
          "end": 1576
        }
      ],
      "declare": false,
      "start": 1559,
      "end": 1577
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
            "name": "r4b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1582,
            "end": 1586
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1589,
              "end": 1590
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1594,
              "end": 1595
            },
            "start": 1589,
            "end": 1595
          },
          "definite": false,
          "start": 1582,
          "end": 1595
        }
      ],
      "declare": false,
      "start": 1578,
      "end": 1596
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
            "name": "r4b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1601,
            "end": 1605
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 1608,
              "end": 1609
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1613,
              "end": 1614
            },
            "start": 1608,
            "end": 1614
          },
          "definite": false,
          "start": 1601,
          "end": 1614
        }
      ],
      "declare": false,
      "start": 1597,
      "end": 1615
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
            "name": "r4b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1620,
            "end": 1624
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 1627,
              "end": 1628
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1632,
              "end": 1633
            },
            "start": 1627,
            "end": 1633
          },
          "definite": false,
          "start": 1620,
          "end": 1633
        }
      ],
      "declare": false,
      "start": 1616,
      "end": 1634
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
            "name": "r4b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1639,
            "end": 1643
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1646,
              "end": 1647
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1651,
              "end": 1652
            },
            "start": 1646,
            "end": 1652
          },
          "definite": false,
          "start": 1639,
          "end": 1652
        }
      ],
      "declare": false,
      "start": 1635,
      "end": 1653
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
            "name": "r4b7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1658,
            "end": 1662
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1665,
              "end": 1666
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1670,
              "end": 1671
            },
            "start": 1665,
            "end": 1671
          },
          "definite": false,
          "start": 1658,
          "end": 1671
        }
      ],
      "declare": false,
      "start": 1654,
      "end": 1672
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
            "name": "r5a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1693,
            "end": 1697
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1700,
              "end": 1701
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1705,
              "end": 1706
            },
            "start": 1700,
            "end": 1706
          },
          "definite": false,
          "start": 1693,
          "end": 1706
        }
      ],
      "declare": false,
      "start": 1689,
      "end": 1707
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
            "name": "r5a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1712,
            "end": 1716
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1719,
              "end": 1720
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1724,
              "end": 1725
            },
            "start": 1719,
            "end": 1725
          },
          "definite": false,
          "start": 1712,
          "end": 1725
        }
      ],
      "declare": false,
      "start": 1708,
      "end": 1726
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
            "name": "r5a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1731,
            "end": 1735
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1738,
              "end": 1739
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1743,
              "end": 1744
            },
            "start": 1738,
            "end": 1744
          },
          "definite": false,
          "start": 1731,
          "end": 1744
        }
      ],
      "declare": false,
      "start": 1727,
      "end": 1745
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
            "name": "r5a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1750,
            "end": 1754
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1757,
              "end": 1758
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 1762,
              "end": 1763
            },
            "start": 1757,
            "end": 1763
          },
          "definite": false,
          "start": 1750,
          "end": 1763
        }
      ],
      "declare": false,
      "start": 1746,
      "end": 1764
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
            "name": "r5a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1769,
            "end": 1773
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1776,
              "end": 1777
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 1781,
              "end": 1782
            },
            "start": 1776,
            "end": 1782
          },
          "definite": false,
          "start": 1769,
          "end": 1782
        }
      ],
      "declare": false,
      "start": 1765,
      "end": 1783
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
            "name": "r5a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1788,
            "end": 1792
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1795,
              "end": 1796
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1800,
              "end": 1801
            },
            "start": 1795,
            "end": 1801
          },
          "definite": false,
          "start": 1788,
          "end": 1801
        }
      ],
      "declare": false,
      "start": 1784,
      "end": 1802
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
            "name": "r5a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1807,
            "end": 1811
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1814,
              "end": 1815
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1819,
              "end": 1820
            },
            "start": 1814,
            "end": 1820
          },
          "definite": false,
          "start": 1807,
          "end": 1820
        }
      ],
      "declare": false,
      "start": 1803,
      "end": 1821
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
            "name": "r5b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1827,
            "end": 1831
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1834,
              "end": 1835
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1839,
              "end": 1840
            },
            "start": 1834,
            "end": 1840
          },
          "definite": false,
          "start": 1827,
          "end": 1840
        }
      ],
      "declare": false,
      "start": 1823,
      "end": 1841
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
            "name": "r5b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1846,
            "end": 1850
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1853,
              "end": 1854
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1858,
              "end": 1859
            },
            "start": 1853,
            "end": 1859
          },
          "definite": false,
          "start": 1846,
          "end": 1859
        }
      ],
      "declare": false,
      "start": 1842,
      "end": 1860
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
            "name": "r5b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1865,
            "end": 1869
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1872,
              "end": 1873
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1877,
              "end": 1878
            },
            "start": 1872,
            "end": 1878
          },
          "definite": false,
          "start": 1865,
          "end": 1878
        }
      ],
      "declare": false,
      "start": 1861,
      "end": 1879
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
            "name": "r5b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1884,
            "end": 1888
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 1891,
              "end": 1892
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1896,
              "end": 1897
            },
            "start": 1891,
            "end": 1897
          },
          "definite": false,
          "start": 1884,
          "end": 1897
        }
      ],
      "declare": false,
      "start": 1880,
      "end": 1898
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
            "name": "r5b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1903,
            "end": 1907
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 1910,
              "end": 1911
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1915,
              "end": 1916
            },
            "start": 1910,
            "end": 1916
          },
          "definite": false,
          "start": 1903,
          "end": 1916
        }
      ],
      "declare": false,
      "start": 1899,
      "end": 1917
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
            "name": "r5b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1922,
            "end": 1926
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1929,
              "end": 1930
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1934,
              "end": 1935
            },
            "start": 1929,
            "end": 1935
          },
          "definite": false,
          "start": 1922,
          "end": 1935
        }
      ],
      "declare": false,
      "start": 1918,
      "end": 1936
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
            "name": "r5b7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1941,
            "end": 1945
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1948,
              "end": 1949
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1953,
              "end": 1954
            },
            "start": 1948,
            "end": 1954
          },
          "definite": false,
          "start": 1941,
          "end": 1954
        }
      ],
      "declare": false,
      "start": 1937,
      "end": 1955
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
            "name": "r6a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1976,
            "end": 1980
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1983,
              "end": 1984
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1988,
              "end": 1989
            },
            "start": 1983,
            "end": 1989
          },
          "definite": false,
          "start": 1976,
          "end": 1989
        }
      ],
      "declare": false,
      "start": 1972,
      "end": 1990
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
            "name": "r6a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1995,
            "end": 1999
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2002,
              "end": 2003
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 2007,
              "end": 2008
            },
            "start": 2002,
            "end": 2008
          },
          "definite": false,
          "start": 1995,
          "end": 2008
        }
      ],
      "declare": false,
      "start": 1991,
      "end": 2009
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
            "name": "r6a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2014,
            "end": 2018
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2021,
              "end": 2022
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 2026,
              "end": 2027
            },
            "start": 2021,
            "end": 2027
          },
          "definite": false,
          "start": 2014,
          "end": 2027
        }
      ],
      "declare": false,
      "start": 2010,
      "end": 2028
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
            "name": "r6a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2033,
            "end": 2037
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2040,
              "end": 2041
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 2045,
              "end": 2046
            },
            "start": 2040,
            "end": 2046
          },
          "definite": false,
          "start": 2033,
          "end": 2046
        }
      ],
      "declare": false,
      "start": 2029,
      "end": 2047
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
            "name": "r6a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2052,
            "end": 2056
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2059,
              "end": 2060
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 2064,
              "end": 2065
            },
            "start": 2059,
            "end": 2065
          },
          "definite": false,
          "start": 2052,
          "end": 2065
        }
      ],
      "declare": false,
      "start": 2048,
      "end": 2066
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
            "name": "r6a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 2071,
            "end": 2075
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2078,
              "end": 2079
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 2083,
              "end": 2084
            },
            "start": 2078,
            "end": 2084
          },
          "definite": false,
          "start": 2071,
          "end": 2084
        }
      ],
      "declare": false,
      "start": 2067,
      "end": 2085
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
            "name": "r6a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 2090,
            "end": 2094
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2097,
              "end": 2098
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 2102,
              "end": 2103
            },
            "start": 2097,
            "end": 2103
          },
          "definite": false,
          "start": 2090,
          "end": 2103
        }
      ],
      "declare": false,
      "start": 2086,
      "end": 2104
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
            "name": "r6b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2110,
            "end": 2114
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2117,
              "end": 2118
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2122,
              "end": 2123
            },
            "start": 2117,
            "end": 2123
          },
          "definite": false,
          "start": 2110,
          "end": 2123
        }
      ],
      "declare": false,
      "start": 2106,
      "end": 2124
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
            "name": "r6b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2129,
            "end": 2133
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 2136,
              "end": 2137
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2141,
              "end": 2142
            },
            "start": 2136,
            "end": 2142
          },
          "definite": false,
          "start": 2129,
          "end": 2142
        }
      ],
      "declare": false,
      "start": 2125,
      "end": 2143
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
            "name": "r6b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2148,
            "end": 2152
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 2155,
              "end": 2156
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2160,
              "end": 2161
            },
            "start": 2155,
            "end": 2161
          },
          "definite": false,
          "start": 2148,
          "end": 2161
        }
      ],
      "declare": false,
      "start": 2144,
      "end": 2162
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
            "name": "r6b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2167,
            "end": 2171
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 2174,
              "end": 2175
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2179,
              "end": 2180
            },
            "start": 2174,
            "end": 2180
          },
          "definite": false,
          "start": 2167,
          "end": 2180
        }
      ],
      "declare": false,
      "start": 2163,
      "end": 2181
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
            "name": "r6b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2186,
            "end": 2190
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 2193,
              "end": 2194
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2198,
              "end": 2199
            },
            "start": 2193,
            "end": 2199
          },
          "definite": false,
          "start": 2186,
          "end": 2199
        }
      ],
      "declare": false,
      "start": 2182,
      "end": 2200
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
            "name": "r6b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 2205,
            "end": 2209
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 2212,
              "end": 2213
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2217,
              "end": 2218
            },
            "start": 2212,
            "end": 2218
          },
          "definite": false,
          "start": 2205,
          "end": 2218
        }
      ],
      "declare": false,
      "start": 2201,
      "end": 2219
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
            "name": "r6b7",
            "optional": false,
            "typeAnnotation": null,
            "start": 2224,
            "end": 2228
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 2231,
              "end": 2232
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2236,
              "end": 2237
            },
            "start": 2231,
            "end": 2237
          },
          "definite": false,
          "start": 2224,
          "end": 2237
        }
      ],
      "declare": false,
      "start": 2220,
      "end": 2238
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
            "name": "r7a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2260,
            "end": 2264
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2267,
              "end": 2268
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2273,
              "end": 2274
            },
            "start": 2267,
            "end": 2274
          },
          "definite": false,
          "start": 2260,
          "end": 2274
        }
      ],
      "declare": false,
      "start": 2256,
      "end": 2275
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
            "name": "r7a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2280,
            "end": 2284
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2287,
              "end": 2288
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 2293,
              "end": 2294
            },
            "start": 2287,
            "end": 2294
          },
          "definite": false,
          "start": 2280,
          "end": 2294
        }
      ],
      "declare": false,
      "start": 2276,
      "end": 2295
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
            "name": "r7a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2300,
            "end": 2304
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2307,
              "end": 2308
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 2313,
              "end": 2314
            },
            "start": 2307,
            "end": 2314
          },
          "definite": false,
          "start": 2300,
          "end": 2314
        }
      ],
      "declare": false,
      "start": 2296,
      "end": 2315
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
            "name": "r7a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2320,
            "end": 2324
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2327,
              "end": 2328
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 2333,
              "end": 2334
            },
            "start": 2327,
            "end": 2334
          },
          "definite": false,
          "start": 2320,
          "end": 2334
        }
      ],
      "declare": false,
      "start": 2316,
      "end": 2335
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
            "name": "r7a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2340,
            "end": 2344
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2347,
              "end": 2348
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 2353,
              "end": 2354
            },
            "start": 2347,
            "end": 2354
          },
          "definite": false,
          "start": 2340,
          "end": 2354
        }
      ],
      "declare": false,
      "start": 2336,
      "end": 2355
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
            "name": "r7a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 2360,
            "end": 2364
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2367,
              "end": 2368
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 2373,
              "end": 2374
            },
            "start": 2367,
            "end": 2374
          },
          "definite": false,
          "start": 2360,
          "end": 2374
        }
      ],
      "declare": false,
      "start": 2356,
      "end": 2375
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
            "name": "r7a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 2380,
            "end": 2384
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2387,
              "end": 2388
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 2393,
              "end": 2394
            },
            "start": 2387,
            "end": 2394
          },
          "definite": false,
          "start": 2380,
          "end": 2394
        }
      ],
      "declare": false,
      "start": 2376,
      "end": 2395
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
            "name": "r7b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2401,
            "end": 2405
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2408,
              "end": 2409
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2414,
              "end": 2415
            },
            "start": 2408,
            "end": 2415
          },
          "definite": false,
          "start": 2401,
          "end": 2415
        }
      ],
      "declare": false,
      "start": 2397,
      "end": 2416
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
            "name": "r7b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2421,
            "end": 2425
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 2428,
              "end": 2429
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2434,
              "end": 2435
            },
            "start": 2428,
            "end": 2435
          },
          "definite": false,
          "start": 2421,
          "end": 2435
        }
      ],
      "declare": false,
      "start": 2417,
      "end": 2436
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
            "name": "r7b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2441,
            "end": 2445
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 2448,
              "end": 2449
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2454,
              "end": 2455
            },
            "start": 2448,
            "end": 2455
          },
          "definite": false,
          "start": 2441,
          "end": 2455
        }
      ],
      "declare": false,
      "start": 2437,
      "end": 2456
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
            "name": "r7b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2461,
            "end": 2465
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 2468,
              "end": 2469
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2474,
              "end": 2475
            },
            "start": 2468,
            "end": 2475
          },
          "definite": false,
          "start": 2461,
          "end": 2475
        }
      ],
      "declare": false,
      "start": 2457,
      "end": 2476
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
            "name": "r7b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2481,
            "end": 2485
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 2488,
              "end": 2489
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2494,
              "end": 2495
            },
            "start": 2488,
            "end": 2495
          },
          "definite": false,
          "start": 2481,
          "end": 2495
        }
      ],
      "declare": false,
      "start": 2477,
      "end": 2496
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
            "name": "r7b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 2501,
            "end": 2505
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 2508,
              "end": 2509
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2514,
              "end": 2515
            },
            "start": 2508,
            "end": 2515
          },
          "definite": false,
          "start": 2501,
          "end": 2515
        }
      ],
      "declare": false,
      "start": 2497,
      "end": 2516
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
            "name": "r7b7",
            "optional": false,
            "typeAnnotation": null,
            "start": 2521,
            "end": 2525
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 2528,
              "end": 2529
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2534,
              "end": 2535
            },
            "start": 2528,
            "end": 2535
          },
          "definite": false,
          "start": 2521,
          "end": 2535
        }
      ],
      "declare": false,
      "start": 2517,
      "end": 2536
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
            "name": "r8a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2558,
            "end": 2562
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2565,
              "end": 2566
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2571,
              "end": 2572
            },
            "start": 2565,
            "end": 2572
          },
          "definite": false,
          "start": 2558,
          "end": 2572
        }
      ],
      "declare": false,
      "start": 2554,
      "end": 2573
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
            "name": "r8a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2578,
            "end": 2582
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2585,
              "end": 2586
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 2591,
              "end": 2592
            },
            "start": 2585,
            "end": 2592
          },
          "definite": false,
          "start": 2578,
          "end": 2592
        }
      ],
      "declare": false,
      "start": 2574,
      "end": 2593
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
            "name": "r8a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2598,
            "end": 2602
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2605,
              "end": 2606
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 2611,
              "end": 2612
            },
            "start": 2605,
            "end": 2612
          },
          "definite": false,
          "start": 2598,
          "end": 2612
        }
      ],
      "declare": false,
      "start": 2594,
      "end": 2613
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
            "name": "r8a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2618,
            "end": 2622
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2625,
              "end": 2626
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 2631,
              "end": 2632
            },
            "start": 2625,
            "end": 2632
          },
          "definite": false,
          "start": 2618,
          "end": 2632
        }
      ],
      "declare": false,
      "start": 2614,
      "end": 2633
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
            "name": "r8a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2638,
            "end": 2642
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2645,
              "end": 2646
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 2651,
              "end": 2652
            },
            "start": 2645,
            "end": 2652
          },
          "definite": false,
          "start": 2638,
          "end": 2652
        }
      ],
      "declare": false,
      "start": 2634,
      "end": 2653
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
            "name": "r8a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 2658,
            "end": 2662
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2665,
              "end": 2666
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 2671,
              "end": 2672
            },
            "start": 2665,
            "end": 2672
          },
          "definite": false,
          "start": 2658,
          "end": 2672
        }
      ],
      "declare": false,
      "start": 2654,
      "end": 2673
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
            "name": "r8a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 2678,
            "end": 2682
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2685,
              "end": 2686
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 2691,
              "end": 2692
            },
            "start": 2685,
            "end": 2692
          },
          "definite": false,
          "start": 2678,
          "end": 2692
        }
      ],
      "declare": false,
      "start": 2674,
      "end": 2693
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
            "name": "r8b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2699,
            "end": 2703
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2706,
              "end": 2707
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2712,
              "end": 2713
            },
            "start": 2706,
            "end": 2713
          },
          "definite": false,
          "start": 2699,
          "end": 2713
        }
      ],
      "declare": false,
      "start": 2695,
      "end": 2714
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
            "name": "r8b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2719,
            "end": 2723
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 2726,
              "end": 2727
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2732,
              "end": 2733
            },
            "start": 2726,
            "end": 2733
          },
          "definite": false,
          "start": 2719,
          "end": 2733
        }
      ],
      "declare": false,
      "start": 2715,
      "end": 2734
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
            "name": "r8b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2739,
            "end": 2743
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 2746,
              "end": 2747
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2752,
              "end": 2753
            },
            "start": 2746,
            "end": 2753
          },
          "definite": false,
          "start": 2739,
          "end": 2753
        }
      ],
      "declare": false,
      "start": 2735,
      "end": 2754
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
            "name": "r8b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2759,
            "end": 2763
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 2766,
              "end": 2767
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2772,
              "end": 2773
            },
            "start": 2766,
            "end": 2773
          },
          "definite": false,
          "start": 2759,
          "end": 2773
        }
      ],
      "declare": false,
      "start": 2755,
      "end": 2774
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
            "name": "r8b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2779,
            "end": 2783
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 2786,
              "end": 2787
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2792,
              "end": 2793
            },
            "start": 2786,
            "end": 2793
          },
          "definite": false,
          "start": 2779,
          "end": 2793
        }
      ],
      "declare": false,
      "start": 2775,
      "end": 2794
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
            "name": "r8b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 2799,
            "end": 2803
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 2806,
              "end": 2807
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2812,
              "end": 2813
            },
            "start": 2806,
            "end": 2813
          },
          "definite": false,
          "start": 2799,
          "end": 2813
        }
      ],
      "declare": false,
      "start": 2795,
      "end": 2814
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
            "name": "r8b7",
            "optional": false,
            "typeAnnotation": null,
            "start": 2819,
            "end": 2823
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 2826,
              "end": 2827
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2832,
              "end": 2833
            },
            "start": 2826,
            "end": 2833
          },
          "definite": false,
          "start": 2819,
          "end": 2833
        }
      ],
      "declare": false,
      "start": 2815,
      "end": 2834
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2834
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
    "value": "x",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 7,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 14,
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
    "value": "enum",
    "start": 26,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 46,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 55,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 74,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "foo_r1",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 89,
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
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 98,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "foo_r2",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 122,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "foo_r3",
    "start": 126,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 137,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 147,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "foo_r4",
    "start": 151,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 162,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 172,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "foo_r5",
    "start": 176,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 187,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 197,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "foo_r6",
    "start": 201,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 212,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Keyword",
    "value": "var",
    "start": 222,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "foo_r7",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 237,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 248,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "foo_r8",
    "start": 252,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 263,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 275,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "foo_r1",
    "start": 279,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 299,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "foo_r2",
    "start": 303,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "t",
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
    "value": "var",
    "start": 323,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "foo_r3",
    "start": 327,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 338,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 348,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "foo_r4",
    "start": 352,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 363,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 373,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "foo_r5",
    "start": 377,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 388,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 398,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "foo_r6",
    "start": 402,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 413,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 423,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "foo_r7",
    "start": 427,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 438,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 443,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 449,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "foo_r8",
    "start": 453,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 464,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 474,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 481,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 490,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 497,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 503,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 505,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 512,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 520,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 527,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 533,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 543,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 554,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 561,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 569,
    "end": 570
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 586,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "r1a1",
    "start": 590,
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
    "value": "<",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 602,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 604,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "r1a2",
    "start": 608,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 622,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "r1a3",
    "start": 626,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 640,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "r1a4",
    "start": 644,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 656,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 658,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "r1a5",
    "start": 662,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 674,
    "end": 675
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 676,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "r1a6",
    "start": 680,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 692,
    "end": 693
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 694,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "r1a7",
    "start": 698,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 710,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 713,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "r1b1",
    "start": 717,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 729,
    "end": 730
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 731,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "r1b2",
    "start": 735,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 747,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 749,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "r1b3",
    "start": 753,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 765,
    "end": 766
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 767,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "r1b4",
    "start": 771,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 783,
    "end": 784
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 785,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "r1b5",
    "start": 789,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 801,
    "end": 802
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 803,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "r1b6",
    "start": 807,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 819,
    "end": 820
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 821,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "r1b7",
    "start": 825,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 837,
    "end": 838
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 854,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "r2a1",
    "start": 858,
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
    "value": "x",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 870,
    "end": 871
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 872,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "r2a2",
    "start": 876,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 888,
    "end": 889
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 890,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "r2a3",
    "start": 894,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 906,
    "end": 907
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 908,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "r2a4",
    "start": 912,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 924,
    "end": 925
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 926,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "r2a5",
    "start": 930,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 942,
    "end": 943
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 944,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "r2a6",
    "start": 948,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 960,
    "end": 961
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 962,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "r2a7",
    "start": 966,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 978,
    "end": 979
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 981,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "r2b1",
    "start": 985,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 997,
    "end": 998
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 999,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "r2b2",
    "start": 1003,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1017,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "r2b3",
    "start": 1021,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1035,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "r2b4",
    "start": 1039,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1053,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "r2b5",
    "start": 1057,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1071,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "r2b6",
    "start": 1075,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1089,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "r2b7",
    "start": 1093,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1123,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "r3a1",
    "start": 1127,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1136,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1142,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "r3a2",
    "start": 1146,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1155,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1161,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "r3a3",
    "start": 1165,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1174,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1180,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "r3a4",
    "start": 1184,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1193,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1199,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "r3a5",
    "start": 1203,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1212,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1218,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "r3a6",
    "start": 1222,
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
    "value": "x",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1231,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "f",
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
    "value": "var",
    "start": 1237,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "r3a7",
    "start": 1241,
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
    "value": "x",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1250,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "g",
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
    "value": "var",
    "start": 1257,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "r3b1",
    "start": 1261,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1270,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1276,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "r3b2",
    "start": 1280,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1289,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1295,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "r3b3",
    "start": 1299,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1308,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1314,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "r3b4",
    "start": 1318,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1327,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1333,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "r3b5",
    "start": 1337,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1346,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1352,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "r3b6",
    "start": 1356,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1365,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1371,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "r3b7",
    "start": 1375,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1384,
    "end": 1386
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1406,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "r4a1",
    "start": 1410,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1419,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1425,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "r4a2",
    "start": 1429,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1438,
    "end": 1440
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1444,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "r4a3",
    "start": 1448,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1457,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1463,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "r4a4",
    "start": 1467,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1476,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1482,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "r4a5",
    "start": 1486,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1495,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1501,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "r4a6",
    "start": 1505,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1514,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1520,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "r4a7",
    "start": 1524,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1533,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1540,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "r4b1",
    "start": 1544,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1553,
    "end": 1555
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1559,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "r4b2",
    "start": 1563,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1572,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1578,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "r4b3",
    "start": 1582,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1591,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1597,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "r4b4",
    "start": 1601,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1610,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1616,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "r4b5",
    "start": 1620,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1629,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1635,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "r4b6",
    "start": 1639,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1648,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1654,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "r4b7",
    "start": 1658,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1667,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1689,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "r5a1",
    "start": 1693,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1702,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1708,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "r5a2",
    "start": 1712,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1721,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1727,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "r5a3",
    "start": 1731,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1740,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1746,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "r5a4",
    "start": 1750,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1759,
    "end": 1761
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1765,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "r5a5",
    "start": 1769,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1778,
    "end": 1780
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1784,
    "end": 1787
  },
  {
    "type": "Identifier",
    "value": "r5a6",
    "start": 1788,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1797,
    "end": 1799
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1803,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "r5a7",
    "start": 1807,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1816,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1823,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "r5b1",
    "start": 1827,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1836,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1842,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "r5b2",
    "start": 1846,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1855,
    "end": 1857
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1861,
    "end": 1864
  },
  {
    "type": "Identifier",
    "value": "r5b3",
    "start": 1865,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1874,
    "end": 1876
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1880,
    "end": 1883
  },
  {
    "type": "Identifier",
    "value": "r5b4",
    "start": 1884,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1893,
    "end": 1895
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1899,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "r5b5",
    "start": 1903,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1912,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1918,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "r5b6",
    "start": 1922,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1931,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1937,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "r5b7",
    "start": 1941,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1950,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1972,
    "end": 1975
  },
  {
    "type": "Identifier",
    "value": "r6a1",
    "start": 1976,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1985,
    "end": 1987
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1991,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "r6a2",
    "start": 1995,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2004,
    "end": 2006
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2010,
    "end": 2013
  },
  {
    "type": "Identifier",
    "value": "r6a3",
    "start": 2014,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2023,
    "end": 2025
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2029,
    "end": 2032
  },
  {
    "type": "Identifier",
    "value": "r6a4",
    "start": 2033,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2042,
    "end": 2044
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2048,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "r6a5",
    "start": 2052,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2061,
    "end": 2063
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2067,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "r6a6",
    "start": 2071,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2080,
    "end": 2082
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2086,
    "end": 2089
  },
  {
    "type": "Identifier",
    "value": "r6a7",
    "start": 2090,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2099,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2106,
    "end": 2109
  },
  {
    "type": "Identifier",
    "value": "r6b1",
    "start": 2110,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2119,
    "end": 2121
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2125,
    "end": 2128
  },
  {
    "type": "Identifier",
    "value": "r6b2",
    "start": 2129,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2138,
    "end": 2140
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2144,
    "end": 2147
  },
  {
    "type": "Identifier",
    "value": "r6b3",
    "start": 2148,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2157,
    "end": 2159
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2163,
    "end": 2166
  },
  {
    "type": "Identifier",
    "value": "r6b4",
    "start": 2167,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2176,
    "end": 2178
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2182,
    "end": 2185
  },
  {
    "type": "Identifier",
    "value": "r6b5",
    "start": 2186,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2195,
    "end": 2197
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2201,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "r6b6",
    "start": 2205,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2214,
    "end": 2216
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2220,
    "end": 2223
  },
  {
    "type": "Identifier",
    "value": "r6b7",
    "start": 2224,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2233,
    "end": 2235
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2256,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "r7a1",
    "start": 2260,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2269,
    "end": 2272
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2276,
    "end": 2279
  },
  {
    "type": "Identifier",
    "value": "r7a2",
    "start": 2280,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2289,
    "end": 2292
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2296,
    "end": 2299
  },
  {
    "type": "Identifier",
    "value": "r7a3",
    "start": 2300,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2309,
    "end": 2312
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2316,
    "end": 2319
  },
  {
    "type": "Identifier",
    "value": "r7a4",
    "start": 2320,
    "end": 2324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2329,
    "end": 2332
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2336,
    "end": 2339
  },
  {
    "type": "Identifier",
    "value": "r7a5",
    "start": 2340,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2349,
    "end": 2352
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2356,
    "end": 2359
  },
  {
    "type": "Identifier",
    "value": "r7a6",
    "start": 2360,
    "end": 2364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2369,
    "end": 2372
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2374,
    "end": 2375
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2376,
    "end": 2379
  },
  {
    "type": "Identifier",
    "value": "r7a7",
    "start": 2380,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2389,
    "end": 2392
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2394,
    "end": 2395
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2397,
    "end": 2400
  },
  {
    "type": "Identifier",
    "value": "r7b1",
    "start": 2401,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2410,
    "end": 2413
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2417,
    "end": 2420
  },
  {
    "type": "Identifier",
    "value": "r7b2",
    "start": 2421,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2430,
    "end": 2433
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2437,
    "end": 2440
  },
  {
    "type": "Identifier",
    "value": "r7b3",
    "start": 2441,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2450,
    "end": 2453
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2455,
    "end": 2456
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2457,
    "end": 2460
  },
  {
    "type": "Identifier",
    "value": "r7b4",
    "start": 2461,
    "end": 2465
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2470,
    "end": 2473
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2474,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2477,
    "end": 2480
  },
  {
    "type": "Identifier",
    "value": "r7b5",
    "start": 2481,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2490,
    "end": 2493
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2497,
    "end": 2500
  },
  {
    "type": "Identifier",
    "value": "r7b6",
    "start": 2501,
    "end": 2505
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2510,
    "end": 2513
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2517,
    "end": 2520
  },
  {
    "type": "Identifier",
    "value": "r7b7",
    "start": 2521,
    "end": 2525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2530,
    "end": 2533
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2554,
    "end": 2557
  },
  {
    "type": "Identifier",
    "value": "r8a1",
    "start": 2558,
    "end": 2562
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2563,
    "end": 2564
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 2567,
    "end": 2570
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2574,
    "end": 2577
  },
  {
    "type": "Identifier",
    "value": "r8a2",
    "start": 2578,
    "end": 2582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 2587,
    "end": 2590
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2592,
    "end": 2593
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2594,
    "end": 2597
  },
  {
    "type": "Identifier",
    "value": "r8a3",
    "start": 2598,
    "end": 2602
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2605,
    "end": 2606
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 2607,
    "end": 2610
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2614,
    "end": 2617
  },
  {
    "type": "Identifier",
    "value": "r8a4",
    "start": 2618,
    "end": 2622
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 2627,
    "end": 2630
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2632,
    "end": 2633
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2634,
    "end": 2637
  },
  {
    "type": "Identifier",
    "value": "r8a5",
    "start": 2638,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 2647,
    "end": 2650
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2654,
    "end": 2657
  },
  {
    "type": "Identifier",
    "value": "r8a6",
    "start": 2658,
    "end": 2662
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2663,
    "end": 2664
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 2667,
    "end": 2670
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2672,
    "end": 2673
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2674,
    "end": 2677
  },
  {
    "type": "Identifier",
    "value": "r8a7",
    "start": 2678,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2685,
    "end": 2686
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 2687,
    "end": 2690
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 2691,
    "end": 2692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2692,
    "end": 2693
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2695,
    "end": 2698
  },
  {
    "type": "Identifier",
    "value": "r8b1",
    "start": 2699,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 2708,
    "end": 2711
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2713,
    "end": 2714
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2715,
    "end": 2718
  },
  {
    "type": "Identifier",
    "value": "r8b2",
    "start": 2719,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 2728,
    "end": 2731
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2733,
    "end": 2734
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2735,
    "end": 2738
  },
  {
    "type": "Identifier",
    "value": "r8b3",
    "start": 2739,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2746,
    "end": 2747
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 2748,
    "end": 2751
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2752,
    "end": 2753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2753,
    "end": 2754
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2755,
    "end": 2758
  },
  {
    "type": "Identifier",
    "value": "r8b4",
    "start": 2759,
    "end": 2763
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 2768,
    "end": 2771
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2773,
    "end": 2774
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2775,
    "end": 2778
  },
  {
    "type": "Identifier",
    "value": "r8b5",
    "start": 2779,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2784,
    "end": 2785
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2786,
    "end": 2787
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 2788,
    "end": 2791
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2792,
    "end": 2793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2795,
    "end": 2798
  },
  {
    "type": "Identifier",
    "value": "r8b6",
    "start": 2799,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 2808,
    "end": 2811
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2812,
    "end": 2813
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2813,
    "end": 2814
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2815,
    "end": 2818
  },
  {
    "type": "Identifier",
    "value": "r8b7",
    "start": 2819,
    "end": 2823
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2824,
    "end": 2825
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 2828,
    "end": 2831
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2833,
    "end": 2834
  }
]
```

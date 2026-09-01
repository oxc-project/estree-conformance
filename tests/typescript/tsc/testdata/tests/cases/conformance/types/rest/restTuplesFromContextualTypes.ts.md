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
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 19,
                    "end": 25
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 27,
                    "end": 34
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 36,
                    "end": 42
                  }
                ],
                "start": 18,
                "end": 43
              },
              "start": 16,
              "end": 43
            },
            "start": 14,
            "end": 43
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 43
        }
      ],
      "declare": true,
      "start": 0,
      "end": 44
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 58
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 61
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 64
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 65,
            "end": 67
          },
          "expression": false,
          "start": 47,
          "end": 67
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 74
            },
            "start": 69,
            "end": 74
          }
        ],
        "optional": false,
        "start": 46,
        "end": 75
      },
      "directive": null,
      "start": 46,
      "end": 76
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 92
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 88,
              "end": 92
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 93,
            "end": 95
          },
          "expression": false,
          "start": 78,
          "end": 95
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 102
            },
            "start": 97,
            "end": 102
          }
        ],
        "optional": false,
        "start": 77,
        "end": 103
      },
      "directive": null,
      "start": 77,
      "end": 104
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 117
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 123
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 119,
              "end": 123
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 124,
            "end": 126
          },
          "expression": false,
          "start": 106,
          "end": 126
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 133
            },
            "start": 128,
            "end": 133
          }
        ],
        "optional": false,
        "start": 105,
        "end": 134
      },
      "directive": null,
      "start": 105,
      "end": 135
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 148
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 151
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 157
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 153,
              "end": 157
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 158,
            "end": 160
          },
          "expression": false,
          "start": 137,
          "end": 160
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 167
            },
            "start": 162,
            "end": 167
          }
        ],
        "optional": false,
        "start": 136,
        "end": 168
      },
      "directive": null,
      "start": 136,
      "end": 169
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 182
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 185
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 188
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 193,
                "end": 194
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 190,
              "end": 194
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 195,
            "end": 197
          },
          "expression": false,
          "start": 171,
          "end": 197
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 204
            },
            "start": 199,
            "end": 204
          }
        ],
        "optional": false,
        "start": 170,
        "end": 205
      },
      "directive": null,
      "start": 170,
      "end": 206
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 225,
        "end": 227
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 236,
                    "end": 240
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 249,
                        "end": 251
                      },
                      "typeArguments": null,
                      "start": 242,
                      "end": 251
                    },
                    "start": 240,
                    "end": 251
                  },
                  "value": null,
                  "start": 233,
                  "end": 251
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 256,
                  "end": 260
                },
                "start": 253,
                "end": 260
              },
              "start": 232,
              "end": 260
            },
            "start": 230,
            "end": 260
          },
          "start": 228,
          "end": 260
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 263,
          "end": 267
        },
        "start": 261,
        "end": 267
      },
      "body": null,
      "expression": false,
      "start": 208,
      "end": 268
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 270,
          "end": 272
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 275
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 277,
                "end": 278
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 281
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 286,
              "end": 288
            },
            "id": null,
            "generator": false,
            "start": 273,
            "end": 288
          }
        ],
        "optional": false,
        "start": 270,
        "end": 289
      },
      "directive": null,
      "start": 270,
      "end": 289
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 292
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 298
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 294,
                "end": 298
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 303,
              "end": 305
            },
            "id": null,
            "generator": false,
            "start": 293,
            "end": 305
          }
        ],
        "optional": false,
        "start": 290,
        "end": 306
      },
      "directive": null,
      "start": 290,
      "end": 306
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 307,
          "end": 309
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 311,
                "end": 312
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 317,
                  "end": 318
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 314,
                "end": 318
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 323,
              "end": 325
            },
            "id": null,
            "generator": false,
            "start": 310,
            "end": 325
          }
        ],
        "optional": false,
        "start": 307,
        "end": 326
      },
      "directive": null,
      "start": 307,
      "end": 326
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 327,
          "end": 329
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 331,
                "end": 332
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 334,
                "end": 335
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 340,
                  "end": 341
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 337,
                "end": 341
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 346,
              "end": 348
            },
            "id": null,
            "generator": false,
            "start": 330,
            "end": 348
          }
        ],
        "optional": false,
        "start": 327,
        "end": 349
      },
      "directive": null,
      "start": 327,
      "end": 349
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 350,
          "end": 352
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 354,
                "end": 355
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 358
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 360,
                "end": 361
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 367
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 363,
                "end": 367
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 372,
              "end": 374
            },
            "id": null,
            "generator": false,
            "start": 353,
            "end": 374
          }
        ],
        "optional": false,
        "start": 350,
        "end": 375
      },
      "directive": null,
      "start": 350,
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 396,
                    "end": 402
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 404,
                    "end": 411
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 416,
                        "end": 422
                      },
                      "start": 416,
                      "end": 424
                    },
                    "start": 413,
                    "end": 424
                  }
                ],
                "start": 395,
                "end": 425
              },
              "start": 393,
              "end": 425
            },
            "start": 391,
            "end": 425
          },
          "init": null,
          "definite": false,
          "start": 391,
          "end": 425
        }
      ],
      "declare": true,
      "start": 377,
      "end": 426
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 439,
              "end": 440
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 442,
              "end": 443
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 445,
              "end": 446
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 447,
            "end": 449
          },
          "expression": false,
          "start": 429,
          "end": 449
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 456
            },
            "start": 451,
            "end": 456
          }
        ],
        "optional": false,
        "start": 428,
        "end": 457
      },
      "directive": null,
      "start": 428,
      "end": 458
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 473,
                "end": 474
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 470,
              "end": 474
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 475,
            "end": 477
          },
          "expression": false,
          "start": 460,
          "end": 477
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 482,
              "end": 484
            },
            "start": 479,
            "end": 484
          }
        ],
        "optional": false,
        "start": 459,
        "end": 485
      },
      "directive": null,
      "start": 459,
      "end": 486
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 498,
              "end": 499
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 504,
                "end": 505
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 501,
              "end": 505
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 506,
            "end": 508
          },
          "expression": false,
          "start": 488,
          "end": 508
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 513,
              "end": 515
            },
            "start": 510,
            "end": 515
          }
        ],
        "optional": false,
        "start": 487,
        "end": 516
      },
      "directive": null,
      "start": 487,
      "end": 517
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 529,
              "end": 530
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 532,
              "end": 533
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 538,
                "end": 539
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 535,
              "end": 539
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 540,
            "end": 542
          },
          "expression": false,
          "start": 519,
          "end": 542
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 547,
              "end": 549
            },
            "start": 544,
            "end": 549
          }
        ],
        "optional": false,
        "start": 518,
        "end": 550
      },
      "directive": null,
      "start": 518,
      "end": 551
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 563,
              "end": 564
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 566,
              "end": 567
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 569,
              "end": 570
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 575,
                "end": 576
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 572,
              "end": 576
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 577,
            "end": 579
          },
          "expression": false,
          "start": 553,
          "end": 579
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 584,
              "end": 586
            },
            "start": 581,
            "end": 586
          }
        ],
        "optional": false,
        "start": 552,
        "end": 587
      },
      "directive": null,
      "start": 552,
      "end": 588
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 607,
        "end": 609
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 618,
                    "end": 622
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 631,
                        "end": 633
                      },
                      "typeArguments": null,
                      "start": 624,
                      "end": 633
                    },
                    "start": 622,
                    "end": 633
                  },
                  "value": null,
                  "start": 615,
                  "end": 633
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 638,
                  "end": 642
                },
                "start": 635,
                "end": 642
              },
              "start": 614,
              "end": 642
            },
            "start": 612,
            "end": 642
          },
          "start": 610,
          "end": 642
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 645,
          "end": 649
        },
        "start": 643,
        "end": 649
      },
      "body": null,
      "expression": false,
      "start": 590,
      "end": 650
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 652,
          "end": 654
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 656,
                "end": 657
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 659,
                "end": 660
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 662,
                "end": 663
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 668,
              "end": 670
            },
            "id": null,
            "generator": false,
            "start": 655,
            "end": 670
          }
        ],
        "optional": false,
        "start": 652,
        "end": 671
      },
      "directive": null,
      "start": 652,
      "end": 671
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 672,
          "end": 674
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 679,
                  "end": 680
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 676,
                "end": 680
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 685,
              "end": 687
            },
            "id": null,
            "generator": false,
            "start": 675,
            "end": 687
          }
        ],
        "optional": false,
        "start": 672,
        "end": 688
      },
      "directive": null,
      "start": 672,
      "end": 688
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 689,
          "end": 691
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 693,
                "end": 694
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 699,
                  "end": 700
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 696,
                "end": 700
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 705,
              "end": 707
            },
            "id": null,
            "generator": false,
            "start": 692,
            "end": 707
          }
        ],
        "optional": false,
        "start": 689,
        "end": 708
      },
      "directive": null,
      "start": 689,
      "end": 708
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 709,
          "end": 711
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 713,
                "end": 714
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 716,
                "end": 717
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 722,
                  "end": 723
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 719,
                "end": 723
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 728,
              "end": 730
            },
            "id": null,
            "generator": false,
            "start": 712,
            "end": 730
          }
        ],
        "optional": false,
        "start": 709,
        "end": 731
      },
      "directive": null,
      "start": 709,
      "end": 731
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 732,
          "end": 734
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 736,
                "end": 737
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 739,
                "end": 740
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 742,
                "end": 743
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 748,
                  "end": 749
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 745,
                "end": 749
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 754,
              "end": 756
            },
            "id": null,
            "generator": false,
            "start": 735,
            "end": 756
          }
        ],
        "optional": false,
        "start": 732,
        "end": 757
      },
      "directive": null,
      "start": 732,
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
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 778,
                    "end": 785
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 790,
                        "end": 796
                      },
                      "start": 790,
                      "end": 798
                    },
                    "start": 787,
                    "end": 798
                  }
                ],
                "start": 777,
                "end": 799
              },
              "start": 775,
              "end": 799
            },
            "start": 773,
            "end": 799
          },
          "init": null,
          "definite": false,
          "start": 773,
          "end": 799
        }
      ],
      "declare": true,
      "start": 759,
      "end": 800
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 813,
              "end": 814
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 816,
              "end": 817
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 819,
              "end": 820
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 821,
            "end": 823
          },
          "expression": false,
          "start": 803,
          "end": 823
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 825,
            "end": 826
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 831,
              "end": 833
            },
            "start": 828,
            "end": 833
          }
        ],
        "optional": false,
        "start": 802,
        "end": 834
      },
      "directive": null,
      "start": 802,
      "end": 835
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 850,
                "end": 851
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 847,
              "end": 851
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 852,
            "end": 854
          },
          "expression": false,
          "start": 837,
          "end": 854
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 856,
            "end": 857
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 862,
              "end": 864
            },
            "start": 859,
            "end": 864
          }
        ],
        "optional": false,
        "start": 836,
        "end": 865
      },
      "directive": null,
      "start": 836,
      "end": 866
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 878,
              "end": 879
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 884,
                "end": 885
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 881,
              "end": 885
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 886,
            "end": 888
          },
          "expression": false,
          "start": 868,
          "end": 888
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 890,
            "end": 891
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 896,
              "end": 898
            },
            "start": 893,
            "end": 898
          }
        ],
        "optional": false,
        "start": 867,
        "end": 899
      },
      "directive": null,
      "start": 867,
      "end": 900
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 912,
              "end": 913
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 915,
              "end": 916
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 921,
                "end": 922
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 918,
              "end": 922
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 923,
            "end": 925
          },
          "expression": false,
          "start": 902,
          "end": 925
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 927,
            "end": 928
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 933,
              "end": 935
            },
            "start": 930,
            "end": 935
          }
        ],
        "optional": false,
        "start": 901,
        "end": 936
      },
      "directive": null,
      "start": 901,
      "end": 937
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 949,
              "end": 950
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 952,
              "end": 953
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 955,
              "end": 956
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 961,
                "end": 962
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 958,
              "end": 962
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 963,
            "end": 965
          },
          "expression": false,
          "start": 939,
          "end": 965
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 967,
            "end": 968
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 973,
              "end": 975
            },
            "start": 970,
            "end": 975
          }
        ],
        "optional": false,
        "start": 938,
        "end": 976
      },
      "directive": null,
      "start": 938,
      "end": 977
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 996,
        "end": 998
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1007,
                      "end": 1013
                    },
                    "start": 1005,
                    "end": 1013
                  },
                  "start": 1004,
                  "end": 1013
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1018,
                    "end": 1022
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1031,
                        "end": 1033
                      },
                      "typeArguments": null,
                      "start": 1024,
                      "end": 1033
                    },
                    "start": 1022,
                    "end": 1033
                  },
                  "value": null,
                  "start": 1015,
                  "end": 1033
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1038,
                  "end": 1042
                },
                "start": 1035,
                "end": 1042
              },
              "start": 1003,
              "end": 1042
            },
            "start": 1001,
            "end": 1042
          },
          "start": 999,
          "end": 1042
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1045,
          "end": 1049
        },
        "start": 1043,
        "end": 1049
      },
      "body": null,
      "expression": false,
      "start": 979,
      "end": 1050
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1052,
          "end": 1054
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1056,
                "end": 1057
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1059,
                "end": 1060
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1062,
                "end": 1063
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1068,
              "end": 1070
            },
            "id": null,
            "generator": false,
            "start": 1055,
            "end": 1070
          }
        ],
        "optional": false,
        "start": 1052,
        "end": 1071
      },
      "directive": null,
      "start": 1052,
      "end": 1071
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1072,
          "end": 1074
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1079,
                  "end": 1080
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 1076,
                "end": 1080
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1085,
              "end": 1087
            },
            "id": null,
            "generator": false,
            "start": 1075,
            "end": 1087
          }
        ],
        "optional": false,
        "start": 1072,
        "end": 1088
      },
      "directive": null,
      "start": 1072,
      "end": 1088
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1089,
          "end": 1091
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1093,
                "end": 1094
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1099,
                  "end": 1100
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 1096,
                "end": 1100
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1105,
              "end": 1107
            },
            "id": null,
            "generator": false,
            "start": 1092,
            "end": 1107
          }
        ],
        "optional": false,
        "start": 1089,
        "end": 1108
      },
      "directive": null,
      "start": 1089,
      "end": 1108
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1109,
          "end": 1111
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1113,
                "end": 1114
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1116,
                "end": 1117
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1122,
                  "end": 1123
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 1119,
                "end": 1123
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1128,
              "end": 1130
            },
            "id": null,
            "generator": false,
            "start": 1112,
            "end": 1130
          }
        ],
        "optional": false,
        "start": 1109,
        "end": 1131
      },
      "directive": null,
      "start": 1109,
      "end": 1131
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1132,
          "end": 1134
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1136,
                "end": 1137
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1139,
                "end": 1140
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1142,
                "end": 1143
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1148,
                  "end": 1149
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 1145,
                "end": 1149
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1154,
              "end": 1156
            },
            "id": null,
            "generator": false,
            "start": 1135,
            "end": 1156
          }
        ],
        "optional": false,
        "start": 1132,
        "end": 1157
      },
      "directive": null,
      "start": 1132,
      "end": 1157
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1168,
        "end": 1170
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
              "start": 1171,
              "end": 1172
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1181,
                "end": 1184
              },
              "start": 1181,
              "end": 1186
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1171,
            "end": 1186
          }
        ],
        "start": 1170,
        "end": 1187
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
                "start": 1191,
                "end": 1192
              },
              "typeArguments": null,
              "start": 1191,
              "end": 1192
            },
            "start": 1189,
            "end": 1192
          },
          "start": 1188,
          "end": 1192
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1213,
                      "end": 1214
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 1210,
                    "end": 1214
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1215,
                  "end": 1217
                },
                "expression": false,
                "start": 1201,
                "end": 1217
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1222,
                    "end": 1223
                  },
                  "start": 1219,
                  "end": 1223
                }
              ],
              "optional": false,
              "start": 1200,
              "end": 1224
            },
            "directive": null,
            "start": 1200,
            "end": 1225
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1240,
                    "end": 1241
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1246,
                      "end": 1247
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 1243,
                    "end": 1247
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1248,
                  "end": 1250
                },
                "expression": false,
                "start": 1231,
                "end": 1250
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1252,
                  "end": 1253
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1258,
                    "end": 1259
                  },
                  "start": 1255,
                  "end": 1259
                }
              ],
              "optional": false,
              "start": 1230,
              "end": 1260
            },
            "directive": null,
            "start": 1230,
            "end": 1261
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1276,
                    "end": 1277
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1282,
                      "end": 1283
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 1279,
                    "end": 1283
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1284,
                  "end": 1286
                },
                "expression": false,
                "start": 1267,
                "end": 1286
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1288,
                  "end": 1289
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1291,
                  "end": 1292
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1297,
                    "end": 1298
                  },
                  "start": 1294,
                  "end": 1298
                }
              ],
              "optional": false,
              "start": 1266,
              "end": 1299
            },
            "directive": null,
            "start": 1266,
            "end": 1300
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1314,
              "end": 1315
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1324,
                            "end": 1330
                          },
                          "start": 1322,
                          "end": 1330
                        },
                        "start": 1321,
                        "end": 1330
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1335,
                          "end": 1339
                        },
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
                              "start": 1341,
                              "end": 1342
                            },
                            "typeArguments": null,
                            "start": 1341,
                            "end": 1342
                          },
                          "start": 1339,
                          "end": 1342
                        },
                        "value": null,
                        "start": 1332,
                        "end": 1342
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1347,
                        "end": 1351
                      },
                      "start": 1344,
                      "end": 1351
                    },
                    "start": 1320,
                    "end": 1351
                  },
                  "start": 1318,
                  "end": 1351
                },
                "start": 1316,
                "end": 1351
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1353,
              "end": 1355
            },
            "expression": false,
            "start": 1305,
            "end": 1355
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1360,
                "end": 1361
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1366,
                        "end": 1367
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1363,
                      "end": 1367
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1372,
                    "end": 1374
                  },
                  "id": null,
                  "generator": false,
                  "start": 1362,
                  "end": 1374
                }
              ],
              "optional": false,
              "start": 1360,
              "end": 1375
            },
            "directive": null,
            "start": 1360,
            "end": 1376
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1381,
                "end": 1382
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1384,
                      "end": 1385
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1390,
                        "end": 1391
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1387,
                      "end": 1391
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1396,
                    "end": 1398
                  },
                  "id": null,
                  "generator": false,
                  "start": 1383,
                  "end": 1398
                }
              ],
              "optional": false,
              "start": 1381,
              "end": 1399
            },
            "directive": null,
            "start": 1381,
            "end": 1400
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1405,
                "end": 1406
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1408,
                      "end": 1409
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1411,
                      "end": 1412
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1417,
                        "end": 1418
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1414,
                      "end": 1418
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1423,
                    "end": 1425
                  },
                  "id": null,
                  "generator": false,
                  "start": 1407,
                  "end": 1425
                }
              ],
              "optional": false,
              "start": 1405,
              "end": 1426
            },
            "directive": null,
            "start": 1405,
            "end": 1427
          }
        ],
        "start": 1194,
        "end": 1429
      },
      "expression": false,
      "start": 1159,
      "end": 1429
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1448,
        "end": 1450
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1451,
              "end": 1452
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1461,
                "end": 1464
              },
              "start": 1461,
              "end": 1466
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1451,
            "end": 1466
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1468,
              "end": 1469
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1468,
            "end": 1469
          }
        ],
        "start": 1450,
        "end": 1470
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1478,
                    "end": 1482
                  },
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
                        "start": 1484,
                        "end": 1485
                      },
                      "typeArguments": null,
                      "start": 1484,
                      "end": 1485
                    },
                    "start": 1482,
                    "end": 1485
                  },
                  "value": null,
                  "start": 1475,
                  "end": 1485
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1490,
                    "end": 1491
                  },
                  "typeArguments": null,
                  "start": 1490,
                  "end": 1491
                },
                "start": 1487,
                "end": 1491
              },
              "start": 1474,
              "end": 1491
            },
            "start": 1472,
            "end": 1491
          },
          "start": 1471,
          "end": 1491
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 1498,
                "end": 1502
              },
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
                    "start": 1504,
                    "end": 1505
                  },
                  "typeArguments": null,
                  "start": 1504,
                  "end": 1505
                },
                "start": 1502,
                "end": 1505
              },
              "value": null,
              "start": 1495,
              "end": 1505
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1510,
                "end": 1511
              },
              "typeArguments": null,
              "start": 1510,
              "end": 1511
            },
            "start": 1507,
            "end": 1511
          },
          "start": 1494,
          "end": 1511
        },
        "start": 1492,
        "end": 1511
      },
      "body": null,
      "expression": false,
      "start": 1431,
      "end": 1512
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
            "name": "g0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1518,
            "end": 1520
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1523,
              "end": 1525
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 1532,
                  "end": 1539
                },
                "id": null,
                "generator": false,
                "start": 1526,
                "end": 1539
              }
            ],
            "optional": false,
            "start": 1523,
            "end": 1540
          },
          "definite": false,
          "start": 1518,
          "end": 1540
        }
      ],
      "declare": false,
      "start": 1514,
      "end": 1541
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
            "name": "g1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1546,
            "end": 1548
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1551,
              "end": 1553
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1555,
                    "end": 1556
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1558,
                    "end": 1559
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 1564,
                  "end": 1566
                },
                "id": null,
                "generator": false,
                "start": 1554,
                "end": 1566
              }
            ],
            "optional": false,
            "start": 1551,
            "end": 1567
          },
          "definite": false,
          "start": 1546,
          "end": 1567
        }
      ],
      "declare": false,
      "start": 1542,
      "end": 1568
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
            "name": "g2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1573,
            "end": 1575
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1578,
              "end": 1580
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1585,
                        "end": 1591
                      },
                      "start": 1583,
                      "end": 1591
                    },
                    "start": 1582,
                    "end": 1591
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1593,
                    "end": 1594
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 1599,
                  "end": 1601
                },
                "id": null,
                "generator": false,
                "start": 1581,
                "end": 1601
              }
            ],
            "optional": false,
            "start": 1578,
            "end": 1602
          },
          "definite": false,
          "start": 1573,
          "end": 1602
        }
      ],
      "declare": false,
      "start": 1569,
      "end": 1603
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
            "name": "g3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1608,
            "end": 1610
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1613,
              "end": 1615
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1620,
                        "end": 1626
                      },
                      "start": 1618,
                      "end": 1626
                    },
                    "start": 1617,
                    "end": 1626
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1631,
                        "end": 1637
                      },
                      "start": 1629,
                      "end": 1637
                    },
                    "start": 1628,
                    "end": 1637
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1642,
                    "end": 1643
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1646,
                    "end": 1647
                  },
                  "start": 1642,
                  "end": 1647
                },
                "id": null,
                "generator": false,
                "start": 1616,
                "end": 1647
              }
            ],
            "optional": false,
            "start": 1613,
            "end": 1648
          },
          "definite": false,
          "start": 1608,
          "end": 1648
        }
      ],
      "declare": false,
      "start": 1604,
      "end": 1649
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
            "name": "g4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1654,
            "end": 1656
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1659,
              "end": 1661
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1666,
                      "end": 1670
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 1663,
                    "end": 1670
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1675,
                  "end": 1679
                },
                "id": null,
                "generator": false,
                "start": 1662,
                "end": 1679
              }
            ],
            "optional": false,
            "start": 1659,
            "end": 1680
          },
          "definite": false,
          "start": 1654,
          "end": 1680
        }
      ],
      "declare": false,
      "start": 1650,
      "end": 1681
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "pipe",
        "optional": false,
        "typeAnnotation": null,
        "start": 1700,
        "end": 1704
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1705,
              "end": 1706
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1715,
                "end": 1718
              },
              "start": 1715,
              "end": 1720
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1705,
            "end": 1720
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1722,
              "end": 1723
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1722,
            "end": 1723
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1725,
              "end": 1726
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1725,
            "end": 1726
          }
        ],
        "start": 1704,
        "end": 1727
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1735,
                    "end": 1739
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1741,
                        "end": 1742
                      },
                      "typeArguments": null,
                      "start": 1741,
                      "end": 1742
                    },
                    "start": 1739,
                    "end": 1742
                  },
                  "value": null,
                  "start": 1732,
                  "end": 1742
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1747,
                    "end": 1748
                  },
                  "typeArguments": null,
                  "start": 1747,
                  "end": 1748
                },
                "start": 1744,
                "end": 1748
              },
              "start": 1731,
              "end": 1748
            },
            "start": 1729,
            "end": 1748
          },
          "start": 1728,
          "end": 1748
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1757,
                        "end": 1758
                      },
                      "typeArguments": null,
                      "start": 1757,
                      "end": 1758
                    },
                    "start": 1755,
                    "end": 1758
                  },
                  "start": 1754,
                  "end": 1758
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1763,
                    "end": 1764
                  },
                  "typeArguments": null,
                  "start": 1763,
                  "end": 1764
                },
                "start": 1760,
                "end": 1764
              },
              "start": 1753,
              "end": 1764
            },
            "start": 1751,
            "end": 1764
          },
          "start": 1750,
          "end": 1764
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 1771,
                "end": 1775
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1777,
                    "end": 1778
                  },
                  "typeArguments": null,
                  "start": 1777,
                  "end": 1778
                },
                "start": 1775,
                "end": 1778
              },
              "value": null,
              "start": 1768,
              "end": 1778
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1783,
                "end": 1784
              },
              "typeArguments": null,
              "start": 1783,
              "end": 1784
            },
            "start": 1780,
            "end": 1784
          },
          "start": 1767,
          "end": 1784
        },
        "start": 1765,
        "end": 1784
      },
      "body": null,
      "expression": false,
      "start": 1683,
      "end": 1785
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
            "name": "g5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1791,
            "end": 1793
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 1796,
              "end": 1800
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1807,
                  "end": 1811
                },
                "id": null,
                "generator": false,
                "start": 1801,
                "end": 1811
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1813,
                    "end": 1814
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 1818,
                  "end": 1820
                },
                "id": null,
                "generator": false,
                "start": 1813,
                "end": 1820
              }
            ],
            "optional": false,
            "start": 1796,
            "end": 1821
          },
          "definite": false,
          "start": 1791,
          "end": 1821
        }
      ],
      "declare": false,
      "start": 1787,
      "end": 1822
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
            "name": "g6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1827,
            "end": 1829
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 1832,
              "end": 1836
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1837,
                    "end": 1838
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 1842,
                  "end": 1849
                },
                "id": null,
                "generator": false,
                "start": 1837,
                "end": 1849
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1851,
                    "end": 1852
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1856,
                    "end": 1857
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1858,
                    "end": 1864
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1856,
                  "end": 1864
                },
                "id": null,
                "generator": false,
                "start": 1851,
                "end": 1864
              }
            ],
            "optional": false,
            "start": 1832,
            "end": 1865
          },
          "definite": false,
          "start": 1827,
          "end": 1865
        }
      ],
      "declare": false,
      "start": 1823,
      "end": 1866
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
            "name": "g7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1871,
            "end": 1873
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 1876,
              "end": 1880
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1882,
                    "end": 1883
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1885,
                    "end": 1886
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 1891,
                  "end": 1893
                },
                "id": null,
                "generator": false,
                "start": 1881,
                "end": 1893
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1895,
                    "end": 1896
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 1900,
                    "end": 1902
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1905,
                    "end": 1906
                  },
                  "start": 1900,
                  "end": 1906
                },
                "id": null,
                "generator": false,
                "start": 1895,
                "end": 1906
              }
            ],
            "optional": false,
            "start": 1876,
            "end": 1907
          },
          "definite": false,
          "start": 1871,
          "end": 1907
        }
      ],
      "declare": false,
      "start": 1867,
      "end": 1908
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
            "name": "g8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1913,
            "end": 1915
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 1918,
              "end": 1922
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1927,
                        "end": 1933
                      },
                      "start": 1925,
                      "end": 1933
                    },
                    "start": 1924,
                    "end": 1933
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1938,
                        "end": 1944
                      },
                      "start": 1936,
                      "end": 1944
                    },
                    "start": 1935,
                    "end": 1944
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 1949,
                  "end": 1951
                },
                "id": null,
                "generator": false,
                "start": 1923,
                "end": 1951
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1953,
                    "end": 1954
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 1958,
                    "end": 1960
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1963,
                    "end": 1964
                  },
                  "start": 1958,
                  "end": 1964
                },
                "id": null,
                "generator": false,
                "start": 1953,
                "end": 1964
              }
            ],
            "optional": false,
            "start": 1918,
            "end": 1965
          },
          "definite": false,
          "start": 1913,
          "end": 1965
        }
      ],
      "declare": false,
      "start": 1909,
      "end": 1966
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
            "name": "tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2010,
                    "end": 2016
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 2018,
                    "end": 2024
                  }
                ],
                "start": 2009,
                "end": 2025
              },
              "start": 2007,
              "end": 2025
            },
            "start": 2002,
            "end": 2025
          },
          "init": null,
          "definite": false,
          "start": 2002,
          "end": 2025
        }
      ],
      "declare": true,
      "start": 1990,
      "end": 2026
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2037,
            "end": 2040
          },
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2041,
              "end": 2042
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 2044,
              "end": 2045
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 2046,
            "end": 2048
          },
          "expression": false,
          "start": 2028,
          "end": 2048
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "tuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 2052,
              "end": 2057
            },
            "start": 2049,
            "end": 2057
          }
        ],
        "optional": false,
        "start": 2028,
        "end": 2058
      },
      "directive": null,
      "start": 2027,
      "end": 2060
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "take",
        "optional": false,
        "typeAnnotation": null,
        "start": 2101,
        "end": 2105
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2114,
                      "end": 2120
                    },
                    "start": 2112,
                    "end": 2120
                  },
                  "start": 2111,
                  "end": 2120
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2125,
                      "end": 2131
                    },
                    "start": 2123,
                    "end": 2131
                  },
                  "start": 2122,
                  "end": 2131
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2136,
                  "end": 2140
                },
                "start": 2133,
                "end": 2140
              },
              "start": 2110,
              "end": 2140
            },
            "start": 2108,
            "end": 2140
          },
          "start": 2106,
          "end": 2140
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2143,
          "end": 2147
        },
        "start": 2141,
        "end": 2147
      },
      "body": null,
      "expression": false,
      "start": 2084,
      "end": 2148
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2160,
            "end": 2163
          },
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 2167,
                "end": 2171
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 2164,
              "end": 2171
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 2172,
            "end": 2174
          },
          "expression": false,
          "start": 2151,
          "end": 2174
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 2175,
            "end": 2176
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2178,
            "end": 2180
          }
        ],
        "optional": false,
        "start": 2151,
        "end": 2181
      },
      "directive": null,
      "start": 2150,
      "end": 2183
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "take",
          "optional": false,
          "typeAnnotation": null,
          "start": 2184,
          "end": 2188
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2201,
                  "end": 2205
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 2198,
                "end": 2205
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 2206,
              "end": 2208
            },
            "expression": false,
            "start": 2189,
            "end": 2208
          }
        ],
        "optional": false,
        "start": 2184,
        "end": 2209
      },
      "directive": null,
      "start": 2184,
      "end": 2210
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArgsUnion",
        "optional": false,
        "typeAnnotation": null,
        "start": 2239,
        "end": 2248
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSNumberKeyword",
                "start": 2252,
                "end": 2258
              },
              {
                "type": "TSStringKeyword",
                "start": 2260,
                "end": 2266
              }
            ],
            "start": 2251,
            "end": 2267
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSNumberKeyword",
                "start": 2271,
                "end": 2277
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2279,
                  "end": 2284
                },
                "typeArguments": null,
                "start": 2279,
                "end": 2284
              }
            ],
            "start": 2270,
            "end": 2285
          }
        ],
        "start": 2251,
        "end": 2285
      },
      "declare": false,
      "start": 2234,
      "end": 2286
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TupleUnionFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 2292,
        "end": 2306
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null,
              "start": 2313,
              "end": 2319
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArgsUnion",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2321,
                  "end": 2330
                },
                "typeArguments": null,
                "start": 2321,
                "end": 2330
              },
              "start": 2319,
              "end": 2330
            },
            "value": null,
            "start": 2310,
            "end": 2330
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 2335,
            "end": 2341
          },
          "start": 2332,
          "end": 2341
        },
        "start": 2309,
        "end": 2341
      },
      "declare": false,
      "start": 2287,
      "end": 2342
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
            "name": "funcUnionTupleNoRest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TupleUnionFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2372,
                  "end": 2386
                },
                "typeArguments": null,
                "start": 2372,
                "end": 2386
              },
              "start": 2370,
              "end": 2386
            },
            "start": 2350,
            "end": 2386
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 2390,
                "end": 2393
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrErr",
                "optional": false,
                "typeAnnotation": null,
                "start": 2395,
                "end": 2403
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2419,
                    "end": 2422
                  },
                  "start": 2412,
                  "end": 2423
                }
              ],
              "start": 2408,
              "end": 2425
            },
            "id": null,
            "generator": false,
            "start": 2389,
            "end": 2425
          },
          "definite": false,
          "start": 2350,
          "end": 2425
        }
      ],
      "declare": false,
      "start": 2344,
      "end": 2426
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
            "name": "funcUnionTupleRest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TupleUnionFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2454,
                  "end": 2468
                },
                "typeArguments": null,
                "start": 2454,
                "end": 2468
              },
              "start": 2452,
              "end": 2468
            },
            "start": 2434,
            "end": 2468
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2475,
                  "end": 2481
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 2472,
                "end": 2481
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2497,
                            "end": 2500
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "strOrErr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2502,
                            "end": 2510
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2496,
                        "end": 2511
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "params",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2514,
                        "end": 2520
                      },
                      "definite": false,
                      "start": 2496,
                      "end": 2520
                    }
                  ],
                  "declare": false,
                  "start": 2490,
                  "end": 2521
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2531,
                    "end": 2534
                  },
                  "start": 2524,
                  "end": 2535
                }
              ],
              "start": 2486,
              "end": 2537
            },
            "id": null,
            "generator": false,
            "start": 2471,
            "end": 2537
          },
          "definite": false,
          "start": 2434,
          "end": 2537
        }
      ],
      "declare": false,
      "start": 2428,
      "end": 2538
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2538
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
    "value": "t1",
    "start": 14,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 27,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 47,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 69,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 72,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 78,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 88,
    "end": 91
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
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 97,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 100,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 106,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 119,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 128,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 131,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 137,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 153,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 162,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 165,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 171,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 190,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 199,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 208,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 216,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 225,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 228,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 233,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 236,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 242,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 249,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 253,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 256,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 263,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 270,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 283,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "f1",
    "start": 290,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 294,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 300,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 307,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 314,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 320,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "f1",
    "start": 327,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 337,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 343,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 350,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 363,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "=>",
    "start": 369,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 377,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 385,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 391,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 396,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 404,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 413,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 416,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "start": 428,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 429,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 451,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 454,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 459,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 460,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 470,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 479,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 482,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 487,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 488,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 501,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 510,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 513,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 519,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 535,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 538,
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
    "value": "{",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 544,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 547,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 553,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 572,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 581,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 584,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "declare",
    "start": 590,
    "end": 597
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 598,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 607,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 610,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 615,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 618,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 622,
    "end": 623
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 624,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 631,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 635,
    "end": 637
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 638,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 643,
    "end": 644
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 645,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 652,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 665,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 672,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 676,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 682,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 689,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 696,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 702,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 709,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 719,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 725,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 732,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 745,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 751,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 759,
    "end": 766
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 767,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 773,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 778,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 787,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 790,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 802,
    "end": 803
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 803,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 824,
    "end": 825
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 828,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 831,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 836,
    "end": 837
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 837,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 847,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 855,
    "end": 856
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 859,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 862,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 867,
    "end": 868
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 868,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 881,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 889,
    "end": 890
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 893,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 896,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 901,
    "end": 902
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 902,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 918,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 926,
    "end": 927
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 930,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 933,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 938,
    "end": 939
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 939,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 958,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 966,
    "end": 967
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 970,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 973,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 979,
    "end": 986
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 987,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 996,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 999,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1007,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1015,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1018,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1024,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1031,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1035,
    "end": 1037
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1038,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1045,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1052,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1065,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1072,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1076,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1082,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1089,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1096,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1102,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1109,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1119,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1125,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1132,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1145,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1151,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1159,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 1168,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1173,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1181,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1201,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1210,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1219,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1231,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1243,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1255,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1267,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1279,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1294,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1305,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1316,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1324,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1332,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1335,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1344,
    "end": 1346
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1347,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1363,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1369,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1387,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1393,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1414,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1420,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1431,
    "end": 1438
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1439,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1448,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1453,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1461,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1475,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1478,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1487,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1495,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1498,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1507,
    "end": 1509
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1514,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "g0",
    "start": 1518,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1523,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1529,
    "end": 1531
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1532,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1542,
    "end": 1545
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 1546,
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
    "value": "f5",
    "start": 1551,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1561,
    "end": 1563
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1564,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1569,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 1573,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1578,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1585,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1596,
    "end": 1598
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1599,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1604,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "g3",
    "start": 1608,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1613,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1620,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1631,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1639,
    "end": 1641
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1650,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "g4",
    "start": 1654,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1659,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1663,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1666,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1672,
    "end": 1674
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1675,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1683,
    "end": 1690
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1691,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 1700,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1707,
    "end": 1714
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1715,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1732,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1735,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1744,
    "end": 1746
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1760,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1768,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1771,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1780,
    "end": 1782
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1787,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "g5",
    "start": 1791,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 1796,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1804,
    "end": 1806
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1807,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1815,
    "end": 1817
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1818,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1823,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "g6",
    "start": 1827,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 1832,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1839,
    "end": 1841
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1842,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1853,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1858,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1867,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "g7",
    "start": 1871,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 1876,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1888,
    "end": 1890
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1891,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1897,
    "end": 1899
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1900,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1909,
    "end": 1912
  },
  {
    "type": "Identifier",
    "value": "g8",
    "start": 1913,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 1918,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1927,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1938,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1946,
    "end": 1948
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1949,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1951,
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
    "value": "=>",
    "start": 1955,
    "end": 1957
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1958,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1990,
    "end": 1997
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1998,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "tuple",
    "start": 2002,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2010,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2018,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2028,
    "end": 2036
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2037,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2049,
    "end": 2052
  },
  {
    "type": "Identifier",
    "value": "tuple",
    "start": 2052,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2084,
    "end": 2091
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2092,
    "end": 2100
  },
  {
    "type": "Identifier",
    "value": "take",
    "start": 2101,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2106,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2114,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2125,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2133,
    "end": 2135
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2136,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2143,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2151,
    "end": 2159
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2160,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2164,
    "end": 2167
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 2167,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "String",
    "value": "''",
    "start": 2178,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Identifier",
    "value": "take",
    "start": 2184,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2189,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2198,
    "end": 2201
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 2201,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2234,
    "end": 2238
  },
  {
    "type": "Identifier",
    "value": "ArgsUnion",
    "start": 2239,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2252,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2260,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2271,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 2279,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2287,
    "end": 2291
  },
  {
    "type": "Identifier",
    "value": "TupleUnionFunc",
    "start": 2292,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2310,
    "end": 2313
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 2313,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Identifier",
    "value": "ArgsUnion",
    "start": 2321,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2332,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2335,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2344,
    "end": 2349
  },
  {
    "type": "Identifier",
    "value": "funcUnionTupleNoRest",
    "start": 2350,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Identifier",
    "value": "TupleUnionFunc",
    "start": 2372,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 2390,
    "end": 2393
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Identifier",
    "value": "strOrErr",
    "start": 2395,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2405,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2412,
    "end": 2418
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 2419,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2428,
    "end": 2433
  },
  {
    "type": "Identifier",
    "value": "funcUnionTupleRest",
    "start": 2434,
    "end": 2452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Identifier",
    "value": "TupleUnionFunc",
    "start": 2454,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2472,
    "end": 2475
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 2475,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2483,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2490,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 2497,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Identifier",
    "value": "strOrErr",
    "start": 2502,
    "end": 2510
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 2514,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2524,
    "end": 2530
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 2531,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2537,
    "end": 2538
  }
]
```

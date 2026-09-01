__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Funcs",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 24,
                        "end": 30
                      },
                      "start": 22,
                      "end": 30
                    },
                    "start": 19,
                    "end": 30
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 35,
                    "end": 39
                  },
                  "start": 32,
                  "end": 39
                },
                "start": 18,
                "end": 39
              },
              "start": 17,
              "end": 42
            },
            "start": 14,
            "end": 42
          },
          {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 50,
                    "end": 56
                  },
                  "start": 48,
                  "end": 56
                },
                "start": 45,
                "end": 56
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 61,
                "end": 65
              },
              "start": 58,
              "end": 65
            },
            "start": 44,
            "end": 65
          }
        ],
        "start": 13,
        "end": 66
      },
      "declare": false,
      "start": 0,
      "end": 67
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "num",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 89
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 93,
              "end": 99
            },
            "start": 91,
            "end": 99
          },
          "start": 90,
          "end": 99
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 102,
          "end": 106
        },
        "start": 100,
        "end": 106
      },
      "body": null,
      "expression": false,
      "start": 69,
      "end": 107
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "str",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 128
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSStringKeyword",
              "start": 132,
              "end": 138
            },
            "start": 130,
            "end": 138
          },
          "start": 129,
          "end": 138
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 141,
          "end": 145
        },
        "start": 139,
        "end": 145
      },
      "body": null,
      "expression": false,
      "start": 108,
      "end": 146
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 167
      },
      "generator": false,
      "async": false,
      "declare": true,
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
            "start": 171,
            "end": 175
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Funcs",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 182
              },
              "typeArguments": null,
              "start": 177,
              "end": 182
            },
            "start": 175,
            "end": 182
          },
          "value": null,
          "start": 168,
          "end": 182
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 185,
          "end": 189
        },
        "start": 183,
        "end": 189
      },
      "body": null,
      "expression": false,
      "start": 148,
      "end": 190
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
          "start": 192,
          "end": 194
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 192,
        "end": 196
      },
      "directive": null,
      "start": 192,
      "end": 197
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
          "start": 208,
          "end": 210
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
                "start": 211,
                "end": 212
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 219
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 220,
                  "end": 221
                }
              ],
              "optional": false,
              "start": 216,
              "end": 222
            },
            "id": null,
            "generator": false,
            "start": 211,
            "end": 222
          }
        ],
        "optional": false,
        "start": 208,
        "end": 223
      },
      "directive": null,
      "start": 208,
      "end": 224
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
          "start": 225,
          "end": 227
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
                "start": 228,
                "end": 229
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 233,
                "end": 236
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 237,
                  "end": 238
                }
              ],
              "optional": false,
              "start": 233,
              "end": 239
            },
            "id": null,
            "generator": false,
            "start": 228,
            "end": 239
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
                "start": 241,
                "end": 242
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 246,
                "end": 249
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 250,
                  "end": 251
                }
              ],
              "optional": false,
              "start": 246,
              "end": 252
            },
            "id": null,
            "generator": false,
            "start": 241,
            "end": 252
          }
        ],
        "optional": false,
        "start": 225,
        "end": 253
      },
      "directive": null,
      "start": 225,
      "end": 254
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
          "start": 255,
          "end": 257
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
                "start": 258,
                "end": 259
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 263,
                "end": 266
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 267,
                  "end": 268
                }
              ],
              "optional": false,
              "start": 263,
              "end": 269
            },
            "id": null,
            "generator": false,
            "start": 258,
            "end": 269
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
                "start": 271,
                "end": 272
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 276,
                "end": 279
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 281
                }
              ],
              "optional": false,
              "start": 276,
              "end": 282
            },
            "id": null,
            "generator": false,
            "start": 271,
            "end": 282
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
                "start": 284,
                "end": 285
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 289,
                "end": 292
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 293,
                  "end": 294
                }
              ],
              "optional": false,
              "start": 289,
              "end": 295
            },
            "id": null,
            "generator": false,
            "start": 284,
            "end": 295
          }
        ],
        "optional": false,
        "start": 255,
        "end": 296
      },
      "directive": null,
      "start": 255,
      "end": 297
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
            "name": "a0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Funcs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 314
                },
                "typeArguments": null,
                "start": 309,
                "end": 314
              },
              "start": 307,
              "end": 314
            },
            "start": 305,
            "end": 314
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 317,
            "end": 319
          },
          "definite": false,
          "start": 305,
          "end": 319
        }
      ],
      "declare": false,
      "start": 299,
      "end": 320
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Funcs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 346
                },
                "typeArguments": null,
                "start": 341,
                "end": 346
              },
              "start": 339,
              "end": 346
            },
            "start": 337,
            "end": 346
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
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
                    "start": 350,
                    "end": 351
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 355,
                    "end": 358
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 359,
                      "end": 360
                    }
                  ],
                  "optional": false,
                  "start": 355,
                  "end": 361
                },
                "id": null,
                "generator": false,
                "start": 350,
                "end": 361
              }
            ],
            "start": 349,
            "end": 362
          },
          "definite": false,
          "start": 337,
          "end": 362
        }
      ],
      "declare": false,
      "start": 331,
      "end": 363
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Funcs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 374,
                  "end": 379
                },
                "typeArguments": null,
                "start": 374,
                "end": 379
              },
              "start": 372,
              "end": 379
            },
            "start": 370,
            "end": 379
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
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
                    "start": 383,
                    "end": 384
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 388,
                    "end": 391
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 392,
                      "end": 393
                    }
                  ],
                  "optional": false,
                  "start": 388,
                  "end": 394
                },
                "id": null,
                "generator": false,
                "start": 383,
                "end": 394
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
                    "start": 396,
                    "end": 397
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 401,
                    "end": 404
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 405,
                      "end": 406
                    }
                  ],
                  "optional": false,
                  "start": 401,
                  "end": 407
                },
                "id": null,
                "generator": false,
                "start": 396,
                "end": 407
              }
            ],
            "start": 382,
            "end": 408
          },
          "definite": false,
          "start": 370,
          "end": 408
        }
      ],
      "declare": false,
      "start": 364,
      "end": 409
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Funcs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 420,
                  "end": 425
                },
                "typeArguments": null,
                "start": 420,
                "end": 425
              },
              "start": 418,
              "end": 425
            },
            "start": 416,
            "end": 425
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
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
                    "start": 429,
                    "end": 430
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 434,
                    "end": 437
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 438,
                      "end": 439
                    }
                  ],
                  "optional": false,
                  "start": 434,
                  "end": 440
                },
                "id": null,
                "generator": false,
                "start": 429,
                "end": 440
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
                    "start": 442,
                    "end": 443
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 447,
                    "end": 450
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 451,
                      "end": 452
                    }
                  ],
                  "optional": false,
                  "start": 447,
                  "end": 453
                },
                "id": null,
                "generator": false,
                "start": 442,
                "end": 453
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
                    "start": 455,
                    "end": 456
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 460,
                    "end": 463
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 464,
                      "end": 465
                    }
                  ],
                  "optional": false,
                  "start": 460,
                  "end": 466
                },
                "id": null,
                "generator": false,
                "start": 455,
                "end": 466
              }
            ],
            "start": 428,
            "end": 467
          },
          "definite": false,
          "start": 416,
          "end": 467
        }
      ],
      "declare": false,
      "start": 410,
      "end": 468
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Selector",
          "optional": false,
          "typeAnnotation": null,
          "start": 504,
          "end": 512
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "State",
                "optional": false,
                "typeAnnotation": null,
                "start": 513,
                "end": 518
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 513,
              "end": 518
            }
          ],
          "start": 512,
          "end": 519
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "state",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "State",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 530,
                    "end": 535
                  },
                  "typeArguments": null,
                  "start": 530,
                  "end": 535
                },
                "start": 528,
                "end": 535
              },
              "start": 523,
              "end": 535
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 540,
              "end": 547
            },
            "start": 537,
            "end": 547
          },
          "start": 522,
          "end": 547
        },
        "declare": false,
        "start": 499,
        "end": 548
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 492,
      "end": 548
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SelectorTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 561,
          "end": 574
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "State",
                "optional": false,
                "typeAnnotation": null,
                "start": 575,
                "end": 580
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 575,
              "end": 580
            }
          ],
          "start": 574,
          "end": 581
        },
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Selector",
              "optional": false,
              "typeAnnotation": null,
              "start": 584,
              "end": 592
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "State",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 593,
                    "end": 598
                  },
                  "typeArguments": null,
                  "start": 593,
                  "end": 598
                }
              ],
              "start": 592,
              "end": 599
            },
            "start": 584,
            "end": 599
          },
          "start": 584,
          "end": 601
        },
        "declare": false,
        "start": 556,
        "end": 602
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 549,
      "end": 602
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExampleState",
          "optional": false,
          "typeAnnotation": null,
          "start": 616,
          "end": 628
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 637,
                "end": 640
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 642,
                    "end": 647
                  },
                  "start": 642,
                  "end": 647
                },
                "start": 640,
                "end": 647
              },
              "accessibility": null,
              "static": false,
              "start": 637,
              "end": 648
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 653,
                "end": 656
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 658,
                    "end": 660
                  },
                  "start": 658,
                  "end": 660
                },
                "start": 656,
                "end": 660
              },
              "accessibility": null,
              "static": false,
              "start": 653,
              "end": 661
            }
          ],
          "start": 631,
          "end": 663
        },
        "declare": false,
        "start": 611,
        "end": 664
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 604,
      "end": 664
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "createSelector",
          "optional": false,
          "typeAnnotation": null,
          "start": 682,
          "end": 696
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
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 697,
                "end": 698
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SelectorTuple",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 707,
                  "end": 720
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ExampleState",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 721,
                        "end": 733
                      },
                      "typeArguments": null,
                      "start": 721,
                      "end": 733
                    }
                  ],
                  "start": 720,
                  "end": 734
                },
                "start": 707,
                "end": 734
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 697,
              "end": 734
            }
          ],
          "start": 696,
          "end": 735
        },
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "selectors",
              "optional": false,
              "typeAnnotation": null,
              "start": 739,
              "end": 748
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSNamedTupleMember",
                      "label": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "selectors",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 754,
                        "end": 763
                      },
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 765,
                          "end": 766
                        },
                        "typeArguments": null,
                        "start": 765,
                        "end": 766
                      },
                      "optional": false,
                      "start": 754,
                      "end": 766
                    },
                    "start": 751,
                    "end": 766
                  },
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 768,
                      "end": 769
                    },
                    "elementType": {
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
                              "type": "TSAnyKeyword",
                              "start": 775,
                              "end": 778
                            },
                            "start": 773,
                            "end": 778
                          },
                          "start": 772,
                          "end": 778
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 783,
                          "end": 786
                        },
                        "start": 780,
                        "end": 786
                      },
                      "start": 771,
                      "end": 786
                    },
                    "optional": false,
                    "start": 768,
                    "end": 786
                  }
                ],
                "start": 750,
                "end": 787
              },
              "start": 748,
              "end": 787
            },
            "value": null,
            "start": 736,
            "end": 787
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
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 795,
                    "end": 802
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 803,
                    "end": 806
                  },
                  "optional": false,
                  "computed": false,
                  "start": 795,
                  "end": 806
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "selectors",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 807,
                    "end": 816
                  }
                ],
                "optional": false,
                "start": 795,
                "end": 817
              },
              "directive": null,
              "start": 795,
              "end": 818
            }
          ],
          "start": 789,
          "end": 820
        },
        "expression": false,
        "start": 673,
        "end": 820
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 666,
      "end": 820
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createSelector",
          "optional": false,
          "typeAnnotation": null,
          "start": 822,
          "end": 836
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
                "start": 842,
                "end": 843
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 847,
                "end": 848
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 849,
                "end": 852
              },
              "optional": false,
              "computed": false,
              "start": 847,
              "end": 852
            },
            "id": null,
            "generator": false,
            "start": 842,
            "end": 852
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
                "start": 858,
                "end": 859
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 863,
                "end": 864
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 865,
                "end": 868
              },
              "optional": false,
              "computed": false,
              "start": 863,
              "end": 868
            },
            "id": null,
            "generator": false,
            "start": 858,
            "end": 868
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 880,
              "end": 882
            },
            "id": null,
            "generator": false,
            "start": 874,
            "end": 882
          }
        ],
        "optional": false,
        "start": 822,
        "end": 884
      },
      "directive": null,
      "start": 822,
      "end": 885
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "example",
        "optional": false,
        "typeAnnotation": null,
        "start": 926,
        "end": 933
      },
      "generator": false,
      "async": false,
      "declare": true,
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
            "start": 937,
            "end": 941
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 952,
                              "end": 958
                            },
                            "start": 950,
                            "end": 958
                          },
                          "start": 949,
                          "end": 958
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 963,
                          "end": 967
                        },
                        "start": 960,
                        "end": 967
                      },
                      "start": 948,
                      "end": 967
                    },
                    "start": 947,
                    "end": 970
                  },
                  "start": 944,
                  "end": 970
                },
                {
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
                          "type": "TSAnyKeyword",
                          "start": 976,
                          "end": 979
                        },
                        "start": 974,
                        "end": 979
                      },
                      "start": 973,
                      "end": 979
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 984,
                      "end": 988
                    },
                    "start": 981,
                    "end": 988
                  },
                  "start": 972,
                  "end": 988
                }
              ],
              "start": 943,
              "end": 989
            },
            "start": 941,
            "end": 989
          },
          "value": null,
          "start": 934,
          "end": 989
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 992,
          "end": 996
        },
        "start": 990,
        "end": 996
      },
      "body": null,
      "expression": false,
      "start": 909,
      "end": 996
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "example",
          "optional": false,
          "typeAnnotation": null,
          "start": 998,
          "end": 1005
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
                "start": 1011,
                "end": 1012
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1016,
                "end": 1017
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1018,
                "end": 1021
              },
              "optional": false,
              "computed": false,
              "start": 1016,
              "end": 1021
            },
            "id": null,
            "generator": false,
            "start": 1011,
            "end": 1021
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
                "start": 1037,
                "end": 1038
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1042,
                "end": 1043
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 1044,
                "end": 1047
              },
              "optional": false,
              "computed": false,
              "start": 1042,
              "end": 1047
            },
            "id": null,
            "generator": false,
            "start": 1037,
            "end": 1047
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
                "start": 1063,
                "end": 1064
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1068,
                "end": 1069
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null,
                "start": 1070,
                "end": 1073
              },
              "optional": false,
              "computed": false,
              "start": 1068,
              "end": 1073
            },
            "id": null,
            "generator": false,
            "start": 1063,
            "end": 1073
          }
        ],
        "optional": false,
        "start": 998,
        "end": 1076
      },
      "directive": null,
      "start": 998,
      "end": 1077
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 1118,
        "end": 1122
      },
      "generator": false,
      "async": false,
      "declare": true,
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
            "start": 1126,
            "end": 1130
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1143,
                              "end": 1149
                            },
                            "start": 1141,
                            "end": 1149
                          },
                          "start": 1138,
                          "end": 1149
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1154,
                          "end": 1158
                        },
                        "start": 1151,
                        "end": 1158
                      },
                      "start": 1137,
                      "end": 1158
                    },
                    "start": 1136,
                    "end": 1161
                  },
                  "start": 1133,
                  "end": 1161
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1169,
                          "end": 1175
                        },
                        "start": 1167,
                        "end": 1175
                      },
                      "start": 1164,
                      "end": 1175
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1180,
                      "end": 1184
                    },
                    "start": 1177,
                    "end": 1184
                  },
                  "start": 1163,
                  "end": 1184
                }
              ],
              "start": 1132,
              "end": 1185
            },
            "start": 1130,
            "end": 1185
          },
          "value": null,
          "start": 1123,
          "end": 1185
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1188,
          "end": 1192
        },
        "start": 1186,
        "end": 1192
      },
      "body": null,
      "expression": false,
      "start": 1101,
      "end": 1193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 1197,
          "end": 1201
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1202,
                "end": 1203
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1207,
              "end": 1208
            },
            "id": null,
            "generator": false,
            "start": 1202,
            "end": 1208
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
                "start": 1210,
                "end": 1211
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1215,
              "end": 1216
            },
            "id": null,
            "generator": false,
            "start": 1210,
            "end": 1216
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
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1218,
                "end": 1219
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1223,
              "end": 1224
            },
            "id": null,
            "generator": false,
            "start": 1218,
            "end": 1224
          }
        ],
        "optional": false,
        "start": 1197,
        "end": 1225
      },
      "directive": null,
      "start": 1197,
      "end": 1226
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1226
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Funcs",
    "start": 5,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 14,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 19,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 32,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 35,
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
    "value": "[",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 45,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 50,
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
    "value": "=>",
    "start": 58,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 61,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 69,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 77,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 86,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 102,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 108,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 116,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 125,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 132,
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
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 141,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 148,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 156,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 165,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 168,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 171,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "Funcs",
    "start": 177,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 185,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 192,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 208,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 213,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 216,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
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
    "value": "x",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 230,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 233,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 239,
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
    "value": "=>",
    "start": 243,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 246,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 250,
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
    "value": ")",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 255,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 260,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 263,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 273,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 276,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ",",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 286,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 289,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 294,
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
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 299,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 305,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "Funcs",
    "start": 309,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 331,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 337,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "Funcs",
    "start": 341,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 352,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 355,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "const",
    "start": 364,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 370,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "Funcs",
    "start": 374,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 385,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 388,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 398,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 401,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "const",
    "start": 410,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 416,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "Funcs",
    "start": 420,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 431,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 434,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "x",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 444,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 447,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 451,
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
    "value": ",",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 457,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 460,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "export",
    "start": 492,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 499,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "Selector",
    "start": 504,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 513,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 523,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 530,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 537,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 540,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 547,
    "end": 548
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 549,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 556,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "SelectorTuple",
    "start": 561,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 575,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "Selector",
    "start": 584,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 593,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "export",
    "start": 604,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 611,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "ExampleState",
    "start": 616,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 637,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 640,
    "end": 641
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 642,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 653,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 656,
    "end": 657
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 658,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 666,
    "end": 672
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 673,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "createSelector",
    "start": 682,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 697,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 699,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "SelectorTuple",
    "start": 707,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "ExampleState",
    "start": 721,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": "...",
    "start": 736,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "selectors",
    "start": 739,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 751,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "selectors",
    "start": 754,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 775,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 780,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 783,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 795,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 803,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "selectors",
    "start": 807,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "createSelector",
    "start": 822,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 844,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 849,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 860,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 865,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 877,
    "end": 879
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 880,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 909,
    "end": 916
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 917,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "example",
    "start": 926,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 934,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 937,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 944,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 952,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 960,
    "end": 962
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 963,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 976,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 981,
    "end": 983
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 984,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 990,
    "end": 991
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 992,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "example",
    "start": 998,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1013,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1018,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1039,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1044,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "x",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 1070,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1101,
    "end": 1108
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1109,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1118,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1123,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1126,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1133,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1138,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1143,
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
    "type": "Keyword",
    "value": "void",
    "start": 1154,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1164,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1169,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1177,
    "end": 1179
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1180,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1188,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1197,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1204,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1212,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1220,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1225,
    "end": 1226
  }
]
```

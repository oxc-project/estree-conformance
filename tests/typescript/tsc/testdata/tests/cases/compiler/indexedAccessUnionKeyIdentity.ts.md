__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 211
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
              "start": 212,
              "end": 213
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 212,
            "end": 213
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 217
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 232,
                  "end": 233
                },
                "typeArguments": null,
                "start": 232,
                "end": 233
              },
              "start": 226,
              "end": 233
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 215,
            "end": 233
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K2",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 237
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 253
                },
                "typeArguments": null,
                "start": 252,
                "end": 253
              },
              "start": 246,
              "end": 253
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 235,
            "end": 253
          }
        ],
        "start": 211,
        "end": 254
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 260,
                "end": 261
              },
              "typeArguments": null,
              "start": 260,
              "end": 261
            },
            "start": 258,
            "end": 261
          },
          "start": 255,
          "end": 261
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 268,
                    "end": 270
                  },
                  "typeArguments": null,
                  "start": 268,
                  "end": 270
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 273,
                    "end": 275
                  },
                  "typeArguments": null,
                  "start": 273,
                  "end": 275
                }
              ],
              "start": 268,
              "end": 275
            },
            "start": 266,
            "end": 275
          },
          "start": 263,
          "end": 275
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 296,
                          "end": 297
                        },
                        "typeArguments": null,
                        "start": 296,
                        "end": 297
                      },
                      "indexType": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 298,
                              "end": 300
                            },
                            "typeArguments": null,
                            "start": 298,
                            "end": 300
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 303,
                              "end": 305
                            },
                            "typeArguments": null,
                            "start": 303,
                            "end": 305
                          }
                        ],
                        "start": 298,
                        "end": 305
                      },
                      "start": 296,
                      "end": 306
                    },
                    "start": 294,
                    "end": 306
                  },
                  "start": 289,
                  "end": 306
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 309,
                    "end": 312
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 313,
                    "end": 316
                  },
                  "optional": false,
                  "computed": true,
                  "start": 309,
                  "end": 317
                },
                "definite": false,
                "start": 289,
                "end": 317
              }
            ],
            "declare": false,
            "start": 283,
            "end": 318
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 335
            },
            "start": 323,
            "end": 336
          }
        ],
        "start": 277,
        "end": 338
      },
      "expression": false,
      "start": 201,
      "end": 338
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "set",
        "optional": false,
        "typeAnnotation": null,
        "start": 357,
        "end": 360
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
              "start": 361,
              "end": 362
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 361,
            "end": 362
          }
        ],
        "start": 360,
        "end": 363
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 369,
                "end": 370
              },
              "typeArguments": null,
              "start": 369,
              "end": 370
            },
            "start": 367,
            "end": 370
          },
          "start": 364,
          "end": 370
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 383,
                  "end": 384
                },
                "typeArguments": null,
                "start": 383,
                "end": 384
              },
              "start": 377,
              "end": 384
            },
            "start": 375,
            "end": 384
          },
          "start": 372,
          "end": 384
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 393,
                  "end": 394
                },
                "typeArguments": null,
                "start": 393,
                "end": 394
              },
              "indexType": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 401,
                    "end": 402
                  },
                  "typeArguments": null,
                  "start": 401,
                  "end": 402
                },
                "start": 395,
                "end": 402
              },
              "start": 393,
              "end": 403
            },
            "start": 391,
            "end": 403
          },
          "start": 386,
          "end": 403
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 406,
          "end": 410
        },
        "start": 404,
        "end": 410
      },
      "body": null,
      "expression": false,
      "start": 340,
      "end": 411
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 421,
        "end": 422
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 423,
              "end": 424
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 423,
            "end": 424
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 426,
              "end": 427
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 426,
            "end": 427
          }
        ],
        "start": 422,
        "end": 428
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 434,
                    "end": 435
                  },
                  "typeArguments": null,
                  "start": 434,
                  "end": 435
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 438,
                    "end": 439
                  },
                  "typeArguments": null,
                  "start": 438,
                  "end": 439
                }
              ],
              "start": 434,
              "end": 439
            },
            "start": 432,
            "end": 439
          },
          "start": 429,
          "end": 439
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 453,
                      "end": 454
                    },
                    "typeArguments": null,
                    "start": 453,
                    "end": 454
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 457,
                      "end": 458
                    },
                    "typeArguments": null,
                    "start": 457,
                    "end": 458
                  }
                ],
                "start": 453,
                "end": 458
              },
              "start": 446,
              "end": 459
            },
            "start": 444,
            "end": 459
          },
          "start": 441,
          "end": 459
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
                "type": "Identifier",
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null,
                "start": 467,
                "end": 470
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 471,
                          "end": 472
                        },
                        "typeArguments": null,
                        "start": 471,
                        "end": 472
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 475,
                          "end": 476
                        },
                        "typeArguments": null,
                        "start": 475,
                        "end": 476
                      }
                    ],
                    "start": 471,
                    "end": 476
                  }
                ],
                "start": 470,
                "end": 477
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 478,
                  "end": 481
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 483,
                  "end": 486
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 488,
                    "end": 491
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 492,
                    "end": 495
                  },
                  "optional": false,
                  "computed": true,
                  "start": 488,
                  "end": 496
                }
              ],
              "optional": false,
              "start": 467,
              "end": 497
            },
            "directive": null,
            "start": 467,
            "end": 498
          }
        ],
        "start": 461,
        "end": 500
      },
      "expression": false,
      "start": 412,
      "end": 500
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 511,
        "end": 512
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
              "start": 513,
              "end": 514
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 513,
            "end": 514
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null,
              "start": 516,
              "end": 518
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 533,
                  "end": 534
                },
                "typeArguments": null,
                "start": 533,
                "end": 534
              },
              "start": 527,
              "end": 534
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 516,
            "end": 534
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K2",
              "optional": false,
              "typeAnnotation": null,
              "start": 536,
              "end": 538
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 553,
                  "end": 554
                },
                "typeArguments": null,
                "start": 553,
                "end": 554
              },
              "start": 547,
              "end": 554
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 536,
            "end": 554
          }
        ],
        "start": 512,
        "end": 555
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 561,
                "end": 562
              },
              "typeArguments": null,
              "start": 561,
              "end": 562
            },
            "start": 559,
            "end": 562
          },
          "start": 556,
          "end": 562
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 569,
                    "end": 571
                  },
                  "typeArguments": null,
                  "start": 569,
                  "end": 571
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 574,
                    "end": 576
                  },
                  "typeArguments": null,
                  "start": 574,
                  "end": 576
                }
              ],
              "start": 569,
              "end": 576
            },
            "start": 567,
            "end": 576
          },
          "start": 564,
          "end": 576
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 590,
                  "end": 591
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 594,
                    "end": 597
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 598,
                    "end": 601
                  },
                  "optional": false,
                  "computed": true,
                  "start": 594,
                  "end": 602
                },
                "definite": false,
                "start": 590,
                "end": 602
              }
            ],
            "declare": false,
            "start": 584,
            "end": 603
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 628,
                        "end": 629
                      },
                      "typeArguments": null,
                      "start": 621,
                      "end": 629
                    },
                    "start": 619,
                    "end": 629
                  },
                  "start": 614,
                  "end": 629
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 632,
                    "end": 635
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 636,
                    "end": 639
                  },
                  "optional": false,
                  "computed": true,
                  "start": 632,
                  "end": 640
                },
                "definite": false,
                "start": 614,
                "end": 640
              }
            ],
            "declare": false,
            "start": 608,
            "end": 641
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 658
            },
            "start": 646,
            "end": 659
          }
        ],
        "start": 578,
        "end": 661
      },
      "expression": false,
      "start": 502,
      "end": 661
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 661
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 201,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 215,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 218,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 226,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 235,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 238,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 246,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 255,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 263,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 268,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "K2",
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
    "value": "{",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 283,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 289,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 298,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 303,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 309,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 313,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "return",
    "start": 323,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 330,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336
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
    "start": 340,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 348,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 357,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 364,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 372,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 377,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 386,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 395,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 404,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 406,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 412,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 429,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 441,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 446,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 467,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 478,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 483,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 488,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 492,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 499,
    "end": 500
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 502,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 511,
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
    "value": "T",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 516,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 519,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 527,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 536,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 539,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 547,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 556,
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
    "value": "T",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 564,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 569,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 574,
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
    "start": 578,
    "end": 579
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 584,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 594,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 598,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "const",
    "start": 608,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 614,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 619,
    "end": 620
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 621,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 632,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 636,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 646,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 653,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 660,
    "end": 661
  }
]
```

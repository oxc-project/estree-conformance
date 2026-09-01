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
            "name": "fA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 19,
                        "end": 20
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 19,
                      "end": 20
                    }
                  ],
                  "start": 18,
                  "end": 21
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
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
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 29,
                          "end": 30
                        },
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
                              "start": 32,
                              "end": 33
                            },
                            "typeArguments": null,
                            "start": 32,
                            "end": 33
                          },
                          "start": 30,
                          "end": 33
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 29,
                        "end": 33
                      }
                    ],
                    "start": 27,
                    "end": 35
                  },
                  "start": 24,
                  "end": 35
                },
                "start": 18,
                "end": 35
              },
              "start": 16,
              "end": 35
            },
            "start": 14,
            "end": 35
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 35
        }
      ],
      "declare": true,
      "start": 0,
      "end": 36
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
            "name": "fB",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 45
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "start": 49,
                    "end": 50
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 49,
                  "end": 50
                }
              ],
              "start": 48,
              "end": 51
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 72,
                          "end": 73
                        },
                        "value": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "Literal",
                              "value": "",
                              "raw": "''",
                              "start": 75,
                              "end": 77
                            },
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 81,
                              "end": 84
                            },
                            "start": 75,
                            "end": 84
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 88,
                              "end": 89
                            },
                            "typeArguments": null,
                            "start": 88,
                            "end": 89
                          },
                          "start": 75,
                          "end": 89
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 72,
                        "end": 89
                      }
                    ],
                    "start": 70,
                    "end": 91
                  },
                  "start": 63,
                  "end": 92
                }
              ],
              "start": 57,
              "end": 94
            },
            "id": null,
            "generator": false,
            "start": 48,
            "end": 94
          },
          "definite": false,
          "start": 43,
          "end": 94
        }
      ],
      "declare": false,
      "start": 37,
      "end": 95
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
            "name": "fC",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 104
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "start": 108,
                    "end": 109
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 108,
                  "end": 109
                }
              ],
              "start": 107,
              "end": 110
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 129,
                        "end": 131
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 135,
                        "end": 138
                      },
                      "start": 129,
                      "end": 138
                    },
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
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 144,
                            "end": 145
                          },
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
                                "start": 147,
                                "end": 148
                              },
                              "typeArguments": null,
                              "start": 147,
                              "end": 148
                            },
                            "start": 145,
                            "end": 148
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 144,
                          "end": 148
                        }
                      ],
                      "start": 142,
                      "end": 150
                    },
                    "start": 129,
                    "end": 150
                  },
                  "start": 122,
                  "end": 151
                }
              ],
              "start": 116,
              "end": 153
            },
            "id": null,
            "generator": false,
            "start": 107,
            "end": 153
          },
          "definite": false,
          "start": 102,
          "end": 153
        }
      ],
      "declare": false,
      "start": 96,
      "end": 154
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TA",
        "optional": false,
        "typeAnnotation": null,
        "start": 207,
        "end": 209
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "fA",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 221
        },
        "typeArguments": null,
        "start": 212,
        "end": 221
      },
      "declare": false,
      "start": 202,
      "end": 222
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TB",
        "optional": false,
        "typeAnnotation": null,
        "start": 228,
        "end": 230
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "fB",
          "optional": false,
          "typeAnnotation": null,
          "start": 240,
          "end": 242
        },
        "typeArguments": null,
        "start": 233,
        "end": 242
      },
      "declare": false,
      "start": 223,
      "end": 243
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TC",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 251
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "fC",
          "optional": false,
          "typeAnnotation": null,
          "start": 261,
          "end": 263
        },
        "typeArguments": null,
        "start": 254,
        "end": 263
      },
      "declare": false,
      "start": 244,
      "end": 264
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TL",
        "optional": false,
        "typeAnnotation": null,
        "start": 270,
        "end": 272
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
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
                "start": 276,
                "end": 277
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 276,
              "end": 277
            }
          ],
          "start": 275,
          "end": 278
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 286,
                  "end": 287
                },
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
                      "start": 289,
                      "end": 290
                    },
                    "typeArguments": null,
                    "start": 289,
                    "end": 290
                  },
                  "start": 287,
                  "end": 290
                },
                "accessibility": null,
                "static": false,
                "start": 286,
                "end": 290
              }
            ],
            "start": 284,
            "end": 292
          },
          "start": 281,
          "end": 292
        },
        "start": 275,
        "end": 292
      },
      "declare": false,
      "start": 265,
      "end": 293
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "accA",
        "optional": false,
        "typeAnnotation": null,
        "start": 313,
        "end": 317
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TA",
                "optional": false,
                "typeAnnotation": null,
                "start": 321,
                "end": 323
              },
              "typeArguments": null,
              "start": 321,
              "end": 323
            },
            "start": 319,
            "end": 323
          },
          "start": 318,
          "end": 323
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 326,
          "end": 330
        },
        "start": 324,
        "end": 330
      },
      "body": null,
      "expression": false,
      "start": 296,
      "end": 331
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "accB",
        "optional": false,
        "typeAnnotation": null,
        "start": 349,
        "end": 353
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TB",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 359
              },
              "typeArguments": null,
              "start": 357,
              "end": 359
            },
            "start": 355,
            "end": 359
          },
          "start": 354,
          "end": 359
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 362,
          "end": 366
        },
        "start": 360,
        "end": 366
      },
      "body": null,
      "expression": false,
      "start": 332,
      "end": 367
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "accC",
        "optional": false,
        "typeAnnotation": null,
        "start": 385,
        "end": 389
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TC",
                "optional": false,
                "typeAnnotation": null,
                "start": 393,
                "end": 395
              },
              "typeArguments": null,
              "start": 393,
              "end": 395
            },
            "start": 391,
            "end": 395
          },
          "start": 390,
          "end": 395
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 398,
          "end": 402
        },
        "start": 396,
        "end": 402
      },
      "body": null,
      "expression": false,
      "start": 368,
      "end": 403
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "accL",
        "optional": false,
        "typeAnnotation": null,
        "start": 421,
        "end": 425
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TL",
                "optional": false,
                "typeAnnotation": null,
                "start": 429,
                "end": 431
              },
              "typeArguments": null,
              "start": 429,
              "end": 431
            },
            "start": 427,
            "end": 431
          },
          "start": 426,
          "end": 431
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 434,
          "end": 438
        },
        "start": 432,
        "end": 438
      },
      "body": null,
      "expression": false,
      "start": 404,
      "end": 439
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accA",
          "optional": false,
          "typeAnnotation": null,
          "start": 492,
          "end": 496
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fA",
            "optional": false,
            "typeAnnotation": null,
            "start": 497,
            "end": 499
          }
        ],
        "optional": false,
        "start": 492,
        "end": 500
      },
      "directive": null,
      "start": 492,
      "end": 501
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accA",
          "optional": false,
          "typeAnnotation": null,
          "start": 502,
          "end": 506
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fB",
            "optional": false,
            "typeAnnotation": null,
            "start": 507,
            "end": 509
          }
        ],
        "optional": false,
        "start": 502,
        "end": 510
      },
      "directive": null,
      "start": 502,
      "end": 511
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accA",
          "optional": false,
          "typeAnnotation": null,
          "start": 512,
          "end": 516
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fC",
            "optional": false,
            "typeAnnotation": null,
            "start": 517,
            "end": 519
          }
        ],
        "optional": false,
        "start": 512,
        "end": 520
      },
      "directive": null,
      "start": 512,
      "end": 521
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accB",
          "optional": false,
          "typeAnnotation": null,
          "start": 560,
          "end": 564
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fA",
            "optional": false,
            "typeAnnotation": null,
            "start": 565,
            "end": 567
          }
        ],
        "optional": false,
        "start": 560,
        "end": 568
      },
      "directive": null,
      "start": 560,
      "end": 569
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accB",
          "optional": false,
          "typeAnnotation": null,
          "start": 570,
          "end": 574
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fB",
            "optional": false,
            "typeAnnotation": null,
            "start": 575,
            "end": 577
          }
        ],
        "optional": false,
        "start": 570,
        "end": 578
      },
      "directive": null,
      "start": 570,
      "end": 579
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accB",
          "optional": false,
          "typeAnnotation": null,
          "start": 580,
          "end": 584
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fC",
            "optional": false,
            "typeAnnotation": null,
            "start": 585,
            "end": 587
          }
        ],
        "optional": false,
        "start": 580,
        "end": 588
      },
      "directive": null,
      "start": 580,
      "end": 589
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accC",
          "optional": false,
          "typeAnnotation": null,
          "start": 608,
          "end": 612
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fA",
            "optional": false,
            "typeAnnotation": null,
            "start": 613,
            "end": 615
          }
        ],
        "optional": false,
        "start": 608,
        "end": 616
      },
      "directive": null,
      "start": 608,
      "end": 617
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accC",
          "optional": false,
          "typeAnnotation": null,
          "start": 618,
          "end": 622
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fB",
            "optional": false,
            "typeAnnotation": null,
            "start": 623,
            "end": 625
          }
        ],
        "optional": false,
        "start": 618,
        "end": 626
      },
      "directive": null,
      "start": 618,
      "end": 627
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accC",
          "optional": false,
          "typeAnnotation": null,
          "start": 628,
          "end": 632
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fC",
            "optional": false,
            "typeAnnotation": null,
            "start": 633,
            "end": 635
          }
        ],
        "optional": false,
        "start": 628,
        "end": 636
      },
      "directive": null,
      "start": 628,
      "end": 637
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accL",
          "optional": false,
          "typeAnnotation": null,
          "start": 676,
          "end": 680
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fA",
            "optional": false,
            "typeAnnotation": null,
            "start": 681,
            "end": 683
          }
        ],
        "optional": false,
        "start": 676,
        "end": 684
      },
      "directive": null,
      "start": 676,
      "end": 685
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accL",
          "optional": false,
          "typeAnnotation": null,
          "start": 686,
          "end": 690
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fB",
            "optional": false,
            "typeAnnotation": null,
            "start": 691,
            "end": 693
          }
        ],
        "optional": false,
        "start": 686,
        "end": 694
      },
      "directive": null,
      "start": 686,
      "end": 695
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accL",
          "optional": false,
          "typeAnnotation": null,
          "start": 696,
          "end": 700
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fC",
            "optional": false,
            "typeAnnotation": null,
            "start": 701,
            "end": 703
          }
        ],
        "optional": false,
        "start": 696,
        "end": 704
      },
      "directive": null,
      "start": 696,
      "end": 705
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 743
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
    "value": "fA",
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
    "value": "<",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 24,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "const",
    "start": 37,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "fB",
    "start": 43,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
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
    "value": "=>",
    "start": 54,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "String",
    "value": "''",
    "start": 75,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 78,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 81,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 85,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 96,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "fC",
    "start": 102,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 110,
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
    "value": "=>",
    "start": 113,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 122,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 132,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 135,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 139,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 202,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "TA",
    "start": 207,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 212,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "fA",
    "start": 219,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 223,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "TB",
    "start": 228,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 233,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "fB",
    "start": 240,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 244,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "TC",
    "start": 249,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 254,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "fC",
    "start": 261,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 265,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "TL",
    "start": 270,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 281,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 296,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 304,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "accA",
    "start": 313,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "TA",
    "start": 321,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 326,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 332,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 340,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "accB",
    "start": 349,
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
    "value": "x",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "TB",
    "start": 357,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "void",
    "start": 362,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 368,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 376,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "accC",
    "start": 385,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 390,
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
    "value": "TC",
    "start": 393,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 398,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 404,
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
    "value": "accL",
    "start": 421,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "TL",
    "start": 429,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 434,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "accA",
    "start": 492,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "fA",
    "start": 497,
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
    "value": ";",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "accA",
    "start": 502,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "fB",
    "start": 507,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "accA",
    "start": 512,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "fC",
    "start": 517,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "accB",
    "start": 560,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "fA",
    "start": 565,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "accB",
    "start": 570,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "fB",
    "start": 575,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "accB",
    "start": 580,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "fC",
    "start": 585,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "accC",
    "start": 608,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "fA",
    "start": 613,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "accC",
    "start": 618,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "fB",
    "start": 623,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "accC",
    "start": 628,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "fC",
    "start": 633,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "accL",
    "start": 676,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "fA",
    "start": 681,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "accL",
    "start": 686,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "fB",
    "start": 691,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "accL",
    "start": 696,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "fC",
    "start": 701,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 704,
    "end": 705
  }
]
```

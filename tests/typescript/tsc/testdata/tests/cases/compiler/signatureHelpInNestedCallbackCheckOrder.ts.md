__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Monad",
        "optional": false,
        "typeAnnotation": null,
        "start": 215,
        "end": 220
      },
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
              "start": 221,
              "end": 222
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 221,
            "end": 222
          }
        ],
        "start": 220,
        "end": 223
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 226,
              "end": 231
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 233,
                    "end": 234
                  },
                  "typeArguments": null,
                  "start": 233,
                  "end": 234
                },
                "start": 233,
                "end": 236
              },
              "start": 231,
              "end": 236
            },
            "accessibility": null,
            "static": false,
            "start": 226,
            "end": 236
          }
        ],
        "start": 224,
        "end": 238
      },
      "declare": false,
      "start": 205,
      "end": 238
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MonadIdentifier",
        "optional": false,
        "typeAnnotation": null,
        "start": 244,
        "end": 259
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Monad",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 273
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSUnknownKeyword",
                "start": 274,
                "end": 281
              }
            ],
            "start": 273,
            "end": 282
          },
          "start": 268,
          "end": 282
        },
        "start": 262,
        "end": 282
      },
      "declare": false,
      "start": 239,
      "end": 282
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
            "name": "setBindArray",
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
                    "name": "bind",
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
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 322,
                                "end": 323
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 322,
                              "end": 323
                            },
                            {
                              "type": "TSTypeParameter",
                              "name": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 325,
                                "end": 326
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 325,
                              "end": 326
                            }
                          ],
                          "start": 321,
                          "end": 327
                        },
                        "params": [
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
                                    "name": "a",
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
                                          "start": 335,
                                          "end": 336
                                        },
                                        "typeArguments": null,
                                        "start": 335,
                                        "end": 336
                                      },
                                      "start": 333,
                                      "end": 336
                                    },
                                    "start": 332,
                                    "end": 336
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSIndexedAccessType",
                                    "objectType": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Monad",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 341,
                                        "end": 346
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "B",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 347,
                                              "end": 348
                                            },
                                            "typeArguments": null,
                                            "start": 347,
                                            "end": 348
                                          }
                                        ],
                                        "start": 346,
                                        "end": 349
                                      },
                                      "start": 341,
                                      "end": 349
                                    },
                                    "indexType": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "value": "Array",
                                        "raw": "\"Array\"",
                                        "start": 350,
                                        "end": 357
                                      },
                                      "start": 350,
                                      "end": 357
                                    },
                                    "start": 341,
                                    "end": 358
                                  },
                                  "start": 338,
                                  "end": 358
                                },
                                "start": 331,
                                "end": 358
                              },
                              "start": 329,
                              "end": 358
                            },
                            "start": 328,
                            "end": 358
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fa",
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
                                        "name": "Monad",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 368,
                                        "end": 373
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "A",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 374,
                                              "end": 375
                                            },
                                            "typeArguments": null,
                                            "start": 374,
                                            "end": 375
                                          }
                                        ],
                                        "start": 373,
                                        "end": 376
                                      },
                                      "start": 368,
                                      "end": 376
                                    },
                                    "indexType": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "value": "Array",
                                        "raw": "\"Array\"",
                                        "start": 377,
                                        "end": 384
                                      },
                                      "start": 377,
                                      "end": 384
                                    },
                                    "start": 368,
                                    "end": 385
                                  },
                                  "start": 366,
                                  "end": 385
                                },
                                "start": 364,
                                "end": 385
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSIndexedAccessType",
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Monad",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 390,
                                    "end": 395
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "B",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 396,
                                          "end": 397
                                        },
                                        "typeArguments": null,
                                        "start": 396,
                                        "end": 397
                                      }
                                    ],
                                    "start": 395,
                                    "end": 398
                                  },
                                  "start": 390,
                                  "end": 398
                                },
                                "indexType": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "Array",
                                    "raw": "\"Array\"",
                                    "start": 399,
                                    "end": 406
                                  },
                                  "start": 399,
                                  "end": 406
                                },
                                "start": 390,
                                "end": 407
                              },
                              "start": 387,
                              "end": 407
                            },
                            "start": 363,
                            "end": 407
                          },
                          "start": 360,
                          "end": 407
                        },
                        "start": 321,
                        "end": 407
                      },
                      "start": 319,
                      "end": 407
                    },
                    "start": 315,
                    "end": 407
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 412,
                    "end": 416
                  },
                  "start": 409,
                  "end": 416
                },
                "start": 314,
                "end": 416
              },
              "start": 310,
              "end": 416
            },
            "start": 298,
            "end": 416
          },
          "init": null,
          "definite": false,
          "start": 298,
          "end": 416
        }
      ],
      "declare": true,
      "start": 284,
      "end": 416
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "setBindArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 418,
          "end": 430
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
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 431,
                "end": 432
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fa",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 436,
                  "end": 438
                }
              ],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fa",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 442,
                    "end": 444
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "flatMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 445,
                    "end": 452
                  },
                  "optional": false,
                  "computed": false,
                  "start": 442,
                  "end": 452
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 453,
                    "end": 454
                  }
                ],
                "optional": false,
                "start": 442,
                "end": 455
              },
              "id": null,
              "generator": false,
              "start": 436,
              "end": 455
            },
            "id": null,
            "generator": false,
            "start": 431,
            "end": 455
          }
        ],
        "optional": false,
        "start": 418,
        "end": 456
      },
      "directive": null,
      "start": 418,
      "end": 456
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
            "name": "setBindGeneric",
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
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 491,
                        "end": 492
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MonadIdentifier",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 501,
                          "end": 516
                        },
                        "typeArguments": null,
                        "start": 501,
                        "end": 516
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 491,
                      "end": 516
                    }
                  ],
                  "start": 490,
                  "end": 517
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "idenfier",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 534,
                          "end": 535
                        },
                        "typeArguments": null,
                        "start": 534,
                        "end": 535
                      },
                      "start": 532,
                      "end": 535
                    },
                    "start": 524,
                    "end": 535
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bind",
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
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 549,
                                "end": 550
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 549,
                              "end": 550
                            },
                            {
                              "type": "TSTypeParameter",
                              "name": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 552,
                                "end": 553
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 552,
                              "end": 553
                            }
                          ],
                          "start": 548,
                          "end": 554
                        },
                        "params": [
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
                                    "name": "a",
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
                                          "start": 562,
                                          "end": 563
                                        },
                                        "typeArguments": null,
                                        "start": 562,
                                        "end": 563
                                      },
                                      "start": 560,
                                      "end": 563
                                    },
                                    "start": 559,
                                    "end": 563
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSIndexedAccessType",
                                    "objectType": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Monad",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 568,
                                        "end": 573
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "B",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 574,
                                              "end": 575
                                            },
                                            "typeArguments": null,
                                            "start": 574,
                                            "end": 575
                                          }
                                        ],
                                        "start": 573,
                                        "end": 576
                                      },
                                      "start": 568,
                                      "end": 576
                                    },
                                    "indexType": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "I",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 577,
                                        "end": 578
                                      },
                                      "typeArguments": null,
                                      "start": 577,
                                      "end": 578
                                    },
                                    "start": 568,
                                    "end": 579
                                  },
                                  "start": 565,
                                  "end": 579
                                },
                                "start": 558,
                                "end": 579
                              },
                              "start": 556,
                              "end": 579
                            },
                            "start": 555,
                            "end": 579
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fa",
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
                                        "name": "Monad",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 589,
                                        "end": 594
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "A",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 595,
                                              "end": 596
                                            },
                                            "typeArguments": null,
                                            "start": 595,
                                            "end": 596
                                          }
                                        ],
                                        "start": 594,
                                        "end": 597
                                      },
                                      "start": 589,
                                      "end": 597
                                    },
                                    "indexType": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "I",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 598,
                                        "end": 599
                                      },
                                      "typeArguments": null,
                                      "start": 598,
                                      "end": 599
                                    },
                                    "start": 589,
                                    "end": 600
                                  },
                                  "start": 587,
                                  "end": 600
                                },
                                "start": 585,
                                "end": 600
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSIndexedAccessType",
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Monad",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 605,
                                    "end": 610
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "B",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 611,
                                          "end": 612
                                        },
                                        "typeArguments": null,
                                        "start": 611,
                                        "end": 612
                                      }
                                    ],
                                    "start": 610,
                                    "end": 613
                                  },
                                  "start": 605,
                                  "end": 613
                                },
                                "indexType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "I",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 614,
                                    "end": 615
                                  },
                                  "typeArguments": null,
                                  "start": 614,
                                  "end": 615
                                },
                                "start": 605,
                                "end": 616
                              },
                              "start": 602,
                              "end": 616
                            },
                            "start": 584,
                            "end": 616
                          },
                          "start": 581,
                          "end": 616
                        },
                        "start": 548,
                        "end": 616
                      },
                      "start": 546,
                      "end": 616
                    },
                    "start": 542,
                    "end": 616
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 626,
                    "end": 630
                  },
                  "start": 623,
                  "end": 630
                },
                "start": 490,
                "end": 630
              },
              "start": 486,
              "end": 630
            },
            "start": 472,
            "end": 630
          },
          "init": null,
          "definite": false,
          "start": 472,
          "end": 630
        }
      ],
      "declare": true,
      "start": 458,
      "end": 630
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "setBindGeneric",
          "optional": false,
          "typeAnnotation": null,
          "start": 632,
          "end": 646
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "Array",
            "raw": "\"Array\"",
            "start": 647,
            "end": 654
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
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 656,
                "end": 657
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fa",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 661,
                  "end": 663
                }
              ],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fa",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 667,
                    "end": 669
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "flatMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 670,
                    "end": 677
                  },
                  "optional": false,
                  "computed": false,
                  "start": 667,
                  "end": 677
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 678,
                    "end": 679
                  }
                ],
                "optional": false,
                "start": 667,
                "end": 680
              },
              "id": null,
              "generator": false,
              "start": 661,
              "end": 680
            },
            "id": null,
            "generator": false,
            "start": 656,
            "end": 680
          }
        ],
        "optional": false,
        "start": 632,
        "end": 681
      },
      "directive": null,
      "start": 632,
      "end": 681
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 681
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 205,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "Monad",
    "start": 215,
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
    "value": "A",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 226,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 239,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "MonadIdentifier",
    "start": 244,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 262,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "Monad",
    "start": 268,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 274,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 284,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 292,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "setBindArray",
    "start": 298,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 315,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 338,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "Monad",
    "start": 341,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 349,
    "end": 350
  },
  {
    "type": "String",
    "value": "\"Array\"",
    "start": 350,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 360,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "fa",
    "start": 364,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "Monad",
    "start": 368,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 376,
    "end": 377
  },
  {
    "type": "String",
    "value": "\"Array\"",
    "start": 377,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 387,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "Monad",
    "start": 390,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 398,
    "end": 399
  },
  {
    "type": "String",
    "value": "\"Array\"",
    "start": 399,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 409,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 412,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "setBindArray",
    "start": 418,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 433,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "fa",
    "start": 436,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 439,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "fa",
    "start": 442,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "flatMap",
    "start": 445,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 458,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 466,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "setBindGeneric",
    "start": 472,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 491,
    "end": 492
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 493,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "MonadIdentifier",
    "start": 501,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "idenfier",
    "start": 524,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 542,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 559,
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
    "value": "A",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 565,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "Monad",
    "start": 568,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "=>",
    "start": 581,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "fa",
    "start": 585,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "Monad",
    "start": 589,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 596,
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
    "value": "I",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 602,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "Monad",
    "start": 605,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 623,
    "end": 625
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 626,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "setBindGeneric",
    "start": 632,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 646,
    "end": 647
  },
  {
    "type": "String",
    "value": "\"Array\"",
    "start": 647,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 658,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "fa",
    "start": 661,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 664,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "fa",
    "start": 667,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "flatMap",
    "start": 670,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 680,
    "end": 681
  }
]
```

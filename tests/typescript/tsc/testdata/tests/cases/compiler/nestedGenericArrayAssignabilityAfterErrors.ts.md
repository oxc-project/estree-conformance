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
        "name": "TypeA",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 167
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 170,
        "end": 176
      },
      "declare": false,
      "start": 157,
      "end": 177
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeB",
        "optional": false,
        "typeAnnotation": null,
        "start": 183,
        "end": 188
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSBooleanKeyword",
        "start": 191,
        "end": 198
      },
      "declare": false,
      "start": 178,
      "end": 199
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DataTypeTwo",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 216
      },
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
              "start": 217,
              "end": 218
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TypeA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 227,
                    "end": 232
                  },
                  "typeArguments": null,
                  "start": 227,
                  "end": 232
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TypeB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 235,
                    "end": 240
                  },
                  "typeArguments": null,
                  "start": 235,
                  "end": 240
                }
              ],
              "start": 227,
              "end": 240
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 217,
            "end": 240
          }
        ],
        "start": 216,
        "end": 241
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
              "name": "one",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 251
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 258
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "name": "two",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 261,
                            "end": 264
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Array",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 266,
                                "end": 271
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 272,
                                      "end": 273
                                    },
                                    "typeArguments": null,
                                    "start": 272,
                                    "end": 273
                                  }
                                ],
                                "start": 271,
                                "end": 274
                              },
                              "start": 266,
                              "end": 274
                            },
                            "start": 264,
                            "end": 274
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 261,
                          "end": 274
                        }
                      ],
                      "start": 259,
                      "end": 276
                    }
                  ],
                  "start": 258,
                  "end": 277
                },
                "start": 253,
                "end": 277
              },
              "start": 251,
              "end": 277
            },
            "accessibility": null,
            "static": false,
            "start": 248,
            "end": 278
          }
        ],
        "start": 244,
        "end": 280
      },
      "declare": false,
      "start": 200,
      "end": 281
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DataTypeThree",
        "optional": false,
        "typeAnnotation": null,
        "start": 287,
        "end": 300
      },
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
              "start": 301,
              "end": 302
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TypeA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 311,
                    "end": 316
                  },
                  "typeArguments": null,
                  "start": 311,
                  "end": 316
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TypeB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 319,
                    "end": 324
                  },
                  "typeArguments": null,
                  "start": 319,
                  "end": 324
                }
              ],
              "start": 311,
              "end": 324
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 301,
            "end": 324
          }
        ],
        "start": 300,
        "end": 325
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
              "name": "one",
              "optional": false,
              "typeAnnotation": null,
              "start": 332,
              "end": 335
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 342
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "name": "two",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 345,
                            "end": 348
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Array",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 350,
                                "end": 355
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
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
                                          "name": "three",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 358,
                                          "end": 363
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Array",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 365,
                                              "end": 370
                                            },
                                            "typeArguments": {
                                              "type": "TSTypeParameterInstantiation",
                                              "params": [
                                                {
                                                  "type": "TSTypeReference",
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "T",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 371,
                                                    "end": 372
                                                  },
                                                  "typeArguments": null,
                                                  "start": 371,
                                                  "end": 372
                                                }
                                              ],
                                              "start": 370,
                                              "end": 373
                                            },
                                            "start": 365,
                                            "end": 373
                                          },
                                          "start": 363,
                                          "end": 373
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 358,
                                        "end": 373
                                      }
                                    ],
                                    "start": 356,
                                    "end": 375
                                  }
                                ],
                                "start": 355,
                                "end": 376
                              },
                              "start": 350,
                              "end": 376
                            },
                            "start": 348,
                            "end": 376
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 345,
                          "end": 376
                        }
                      ],
                      "start": 343,
                      "end": 378
                    }
                  ],
                  "start": 342,
                  "end": 379
                },
                "start": 337,
                "end": 379
              },
              "start": 335,
              "end": 379
            },
            "accessibility": null,
            "static": false,
            "start": 332,
            "end": 380
          }
        ],
        "start": 328,
        "end": 382
      },
      "declare": false,
      "start": 282,
      "end": 383
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
            "name": "testingThreeErr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DataTypeThree",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 406,
                  "end": 419
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 420,
                        "end": 425
                      },
                      "typeArguments": null,
                      "start": 420,
                      "end": 425
                    }
                  ],
                  "start": 419,
                  "end": 426
                },
                "start": 406,
                "end": 426
              },
              "start": 404,
              "end": 426
            },
            "start": 389,
            "end": 426
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 433,
                  "end": 436
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "two",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 441,
                            "end": 444
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "three",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 449,
                                      "end": 454
                                    },
                                    "value": {
                                      "type": "ArrayExpression",
                                      "elements": [
                                        {
                                          "type": "Literal",
                                          "value": true,
                                          "raw": "true",
                                          "start": 457,
                                          "end": 461
                                        }
                                      ],
                                      "start": 456,
                                      "end": 462
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 449,
                                    "end": 462
                                  }
                                ],
                                "start": 447,
                                "end": 464
                              }
                            ],
                            "start": 446,
                            "end": 465
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 441,
                          "end": 465
                        }
                      ],
                      "start": 439,
                      "end": 467
                    }
                  ],
                  "start": 438,
                  "end": 468
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 433,
                "end": 468
              }
            ],
            "start": 429,
            "end": 470
          },
          "definite": false,
          "start": 389,
          "end": 470
        }
      ],
      "declare": false,
      "start": 385,
      "end": 471
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
            "name": "testingTwoErr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DataTypeTwo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 491,
                  "end": 502
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 503,
                        "end": 508
                      },
                      "typeArguments": null,
                      "start": 503,
                      "end": 508
                    }
                  ],
                  "start": 502,
                  "end": 509
                },
                "start": 491,
                "end": 509
              },
              "start": 489,
              "end": 509
            },
            "start": 476,
            "end": 509
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 516,
                  "end": 519
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "two",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 524,
                            "end": 527
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": false,
                                "raw": "false",
                                "start": 530,
                                "end": 535
                              }
                            ],
                            "start": 529,
                            "end": 536
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 524,
                          "end": 536
                        }
                      ],
                      "start": 522,
                      "end": 538
                    }
                  ],
                  "start": 521,
                  "end": 539
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 516,
                "end": 539
              }
            ],
            "start": 512,
            "end": 541
          },
          "definite": false,
          "start": 476,
          "end": 541
        }
      ],
      "declare": false,
      "start": 472,
      "end": 542
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
            "name": "testingThree",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DataTypeThree",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 562,
                  "end": 575
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 576,
                        "end": 581
                      },
                      "typeArguments": null,
                      "start": 576,
                      "end": 581
                    }
                  ],
                  "start": 575,
                  "end": 582
                },
                "start": 562,
                "end": 582
              },
              "start": 560,
              "end": 582
            },
            "start": 548,
            "end": 582
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 589,
                  "end": 592
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "two",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 597,
                            "end": 600
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "three",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 605,
                                      "end": 610
                                    },
                                    "value": {
                                      "type": "ArrayExpression",
                                      "elements": [
                                        {
                                          "type": "Literal",
                                          "value": 5,
                                          "raw": "5",
                                          "start": 613,
                                          "end": 614
                                        }
                                      ],
                                      "start": 612,
                                      "end": 615
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 605,
                                    "end": 615
                                  }
                                ],
                                "start": 603,
                                "end": 617
                              }
                            ],
                            "start": 602,
                            "end": 618
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 597,
                          "end": 618
                        }
                      ],
                      "start": 595,
                      "end": 620
                    }
                  ],
                  "start": 594,
                  "end": 621
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 589,
                "end": 621
              }
            ],
            "start": 585,
            "end": 623
          },
          "definite": false,
          "start": 548,
          "end": 623
        }
      ],
      "declare": false,
      "start": 544,
      "end": 624
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
            "name": "t3a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DataTypeThree",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 634,
                  "end": 647
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeB",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 648,
                        "end": 653
                      },
                      "typeArguments": null,
                      "start": 648,
                      "end": 653
                    }
                  ],
                  "start": 647,
                  "end": 654
                },
                "start": 634,
                "end": 654
              },
              "start": 632,
              "end": 654
            },
            "start": 629,
            "end": 654
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "testingThree",
            "optional": false,
            "typeAnnotation": null,
            "start": 657,
            "end": 669
          },
          "definite": false,
          "start": 629,
          "end": 669
        }
      ],
      "declare": false,
      "start": 625,
      "end": 670
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
            "name": "testingTwo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DataTypeTwo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 688,
                  "end": 699
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 700,
                        "end": 705
                      },
                      "typeArguments": null,
                      "start": 700,
                      "end": 705
                    }
                  ],
                  "start": 699,
                  "end": 706
                },
                "start": 688,
                "end": 706
              },
              "start": 686,
              "end": 706
            },
            "start": 676,
            "end": 706
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 713,
                  "end": 716
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "two",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 721,
                            "end": 724
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": 5,
                                "raw": "5",
                                "start": 727,
                                "end": 728
                              }
                            ],
                            "start": 726,
                            "end": 729
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 721,
                          "end": 729
                        }
                      ],
                      "start": 719,
                      "end": 731
                    }
                  ],
                  "start": 718,
                  "end": 732
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 713,
                "end": 732
              }
            ],
            "start": 709,
            "end": 734
          },
          "definite": false,
          "start": 676,
          "end": 734
        }
      ],
      "declare": false,
      "start": 672,
      "end": 735
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
            "name": "t2a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DataTypeTwo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 745,
                  "end": 756
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeB",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 757,
                        "end": 762
                      },
                      "typeArguments": null,
                      "start": 757,
                      "end": 762
                    }
                  ],
                  "start": 756,
                  "end": 763
                },
                "start": 745,
                "end": 763
              },
              "start": 743,
              "end": 763
            },
            "start": 740,
            "end": 763
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "testingTwo",
            "optional": false,
            "typeAnnotation": null,
            "start": 766,
            "end": 776
          },
          "definite": false,
          "start": 740,
          "end": 776
        }
      ],
      "declare": false,
      "start": 736,
      "end": 777
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 777
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 157,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "TypeA",
    "start": 162,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 178,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "TypeB",
    "start": 183,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 191,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 200,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "DataTypeTwo",
    "start": 205,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 219,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "TypeA",
    "start": 227,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "TypeB",
    "start": 235,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 248,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 253,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 261,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 266,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 282,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "DataTypeThree",
    "start": 287,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 303,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "TypeA",
    "start": 311,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "TypeB",
    "start": 319,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 332,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 337,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 345,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 350,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "three",
    "start": 358,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 365,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "}",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 385,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "testingThreeErr",
    "start": 389,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "DataTypeThree",
    "start": 406,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "TypeA",
    "start": 420,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 433,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "two",
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
    "type": "Punctuator",
    "value": "[",
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
    "type": "Identifier",
    "value": "three",
    "start": 449,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 456,
    "end": 457
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 457,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "let",
    "start": 472,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "testingTwoErr",
    "start": 476,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "DataTypeTwo",
    "start": 491,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "TypeA",
    "start": 503,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 516,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 524,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 529,
    "end": 530
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 530,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "let",
    "start": 544,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "testingThree",
    "start": 548,
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
    "value": "DataTypeThree",
    "start": 562,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "TypeA",
    "start": 576,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 589,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 597,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "three",
    "start": 605,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 612,
    "end": 613
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "let",
    "start": 625,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "t3a",
    "start": 629,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "DataTypeThree",
    "start": 634,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "TypeB",
    "start": 648,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "testingThree",
    "start": 657,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 669,
    "end": 670
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 672,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "testingTwo",
    "start": 676,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "DataTypeTwo",
    "start": 688,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "TypeA",
    "start": 700,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 713,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 721,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 726,
    "end": 727
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 734,
    "end": 735
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 736,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "t2a",
    "start": 740,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "DataTypeTwo",
    "start": 745,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "TypeB",
    "start": 757,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "testingTwo",
    "start": 766,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 776,
    "end": 777
  }
]
```

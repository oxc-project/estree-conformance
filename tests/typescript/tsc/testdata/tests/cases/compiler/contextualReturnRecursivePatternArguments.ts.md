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
        "name": "Matcher",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 17
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Input",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 23
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 18,
            "end": 23
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Pattern",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 32
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 35,
              "end": 42
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 25,
            "end": 42
          }
        ],
        "start": 17,
        "end": 43
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "matcher",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 57
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "match",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 63,
                      "end": 68
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Input",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 76,
                              "end": 81
                            },
                            "typeArguments": null,
                            "start": 76,
                            "end": 81
                          },
                          "start": 74,
                          "end": 81
                        },
                        "start": 69,
                        "end": 81
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 84,
                        "end": 91
                      },
                      "start": 82,
                      "end": 91
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 63,
                    "end": 92
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pattern",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 93,
                      "end": 100
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Pattern",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 103,
                          "end": 110
                        },
                        "typeArguments": null,
                        "start": 103,
                        "end": 110
                      },
                      "start": 101,
                      "end": 110
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 93,
                    "end": 110
                  }
                ],
                "start": 61,
                "end": 112
              },
              "start": 59,
              "end": 112
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 50,
            "end": 113
          }
        ],
        "start": 44,
        "end": 115
      },
      "declare": false,
      "start": 0,
      "end": 115
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Pattern",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 128
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Input",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 134
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 129,
            "end": 134
          }
        ],
        "start": 128,
        "end": 135
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Input",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 143
            },
            "typeArguments": null,
            "start": 138,
            "end": 143
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Matcher",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 153
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Input",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 154,
                    "end": 159
                  },
                  "typeArguments": null,
                  "start": 154,
                  "end": 159
                }
              ],
              "start": 153,
              "end": 160
            },
            "start": 146,
            "end": 160
          },
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 169
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 179,
                  "end": 184
                },
                "typeArguments": null,
                "start": 179,
                "end": 184
              },
              "start": 173,
              "end": 184
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pattern",
                "optional": false,
                "typeAnnotation": null,
                "start": 188,
                "end": 195
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Input",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 196,
                        "end": 201
                      },
                      "typeArguments": null,
                      "start": 196,
                      "end": 201
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 202,
                        "end": 205
                      },
                      "typeArguments": null,
                      "start": 202,
                      "end": 205
                    },
                    "start": 196,
                    "end": 206
                  }
                ],
                "start": 195,
                "end": 207
              },
              "start": 188,
              "end": 207
            },
            "optional": true,
            "readonly": null,
            "start": 163,
            "end": 209
          }
        ],
        "start": 138,
        "end": 209
      },
      "declare": false,
      "start": 116,
      "end": 210
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "union",
        "optional": false,
        "typeAnnotation": null,
        "start": 228,
        "end": 233
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
              "name": "Input",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 239
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 234,
            "end": 239
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Patterns",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 249
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pattern",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 268,
                      "end": 275
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Input",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 276,
                            "end": 281
                          },
                          "typeArguments": null,
                          "start": 276,
                          "end": 281
                        }
                      ],
                      "start": 275,
                      "end": 282
                    },
                    "start": 268,
                    "end": 282
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Pattern",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 287,
                          "end": 294
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Input",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 295,
                                "end": 300
                              },
                              "typeArguments": null,
                              "start": 295,
                              "end": 300
                            }
                          ],
                          "start": 294,
                          "end": 301
                        },
                        "start": 287,
                        "end": 301
                      },
                      "start": 287,
                      "end": 303
                    },
                    "start": 284,
                    "end": 303
                  }
                ],
                "start": 267,
                "end": 304
              },
              "start": 258,
              "end": 304
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 241,
            "end": 304
          }
        ],
        "start": 233,
        "end": 305
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "patterns",
            "optional": false,
            "typeAnnotation": null,
            "start": 309,
            "end": 317
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Patterns",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 327
              },
              "typeArguments": null,
              "start": 319,
              "end": 327
            },
            "start": 317,
            "end": 327
          },
          "value": null,
          "start": 306,
          "end": 327
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Matcher",
            "optional": false,
            "typeAnnotation": null,
            "start": 330,
            "end": 337
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 338,
                  "end": 343
                },
                "typeArguments": null,
                "start": 338,
                "end": 343
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Patterns",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 345,
                  "end": 353
                },
                "typeArguments": null,
                "start": 345,
                "end": 353
              }
            ],
            "start": 337,
            "end": 354
          },
          "start": 330,
          "end": 354
        },
        "start": 328,
        "end": 354
      },
      "body": null,
      "expression": false,
      "start": 211,
      "end": 355
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "optional",
        "optional": false,
        "typeAnnotation": null,
        "start": 373,
        "end": 381
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
              "name": "Input",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 387
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 382,
            "end": 387
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 389,
              "end": 394
            },
            "constraint": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSUnknownKeyword",
                "start": 403,
                "end": 410
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 419,
                  "end": 424
                },
                "typeArguments": null,
                "start": 419,
                "end": 424
              },
              "trueType": {
                "type": "TSUnknownKeyword",
                "start": 427,
                "end": 434
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Pattern",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 437,
                  "end": 444
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Input",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 445,
                        "end": 450
                      },
                      "typeArguments": null,
                      "start": 445,
                      "end": 450
                    }
                  ],
                  "start": 444,
                  "end": 451
                },
                "start": 437,
                "end": 451
              },
              "start": 403,
              "end": 451
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 389,
            "end": 451
          }
        ],
        "start": 381,
        "end": 452
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 460,
                "end": 465
              },
              "typeArguments": null,
              "start": 460,
              "end": 465
            },
            "start": 458,
            "end": 465
          },
          "start": 453,
          "end": 465
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Matcher",
            "optional": false,
            "typeAnnotation": null,
            "start": 468,
            "end": 475
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 476,
                  "end": 481
                },
                "typeArguments": null,
                "start": 476,
                "end": 481
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 483,
                  "end": 488
                },
                "typeArguments": null,
                "start": 483,
                "end": 488
              }
            ],
            "start": 475,
            "end": 489
          },
          "start": 468,
          "end": 489
        },
        "start": 466,
        "end": 489
      },
      "body": null,
      "expression": false,
      "start": 356,
      "end": 490
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "intersection",
        "optional": false,
        "typeAnnotation": null,
        "start": 508,
        "end": 520
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
              "name": "Input",
              "optional": false,
              "typeAnnotation": null,
              "start": 521,
              "end": 526
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 521,
            "end": 526
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Values",
              "optional": false,
              "typeAnnotation": null,
              "start": 528,
              "end": 534
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pattern",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 553,
                      "end": 560
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Input",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 561,
                            "end": 566
                          },
                          "typeArguments": null,
                          "start": 561,
                          "end": 566
                        }
                      ],
                      "start": 560,
                      "end": 567
                    },
                    "start": 553,
                    "end": 567
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Pattern",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 572,
                          "end": 579
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Input",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 580,
                                "end": 585
                              },
                              "typeArguments": null,
                              "start": 580,
                              "end": 585
                            }
                          ],
                          "start": 579,
                          "end": 586
                        },
                        "start": 572,
                        "end": 586
                      },
                      "start": 572,
                      "end": 588
                    },
                    "start": 569,
                    "end": 588
                  }
                ],
                "start": 552,
                "end": 589
              },
              "start": 543,
              "end": 589
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 528,
            "end": 589
          }
        ],
        "start": 520,
        "end": 590
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "values",
            "optional": false,
            "typeAnnotation": null,
            "start": 594,
            "end": 600
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Values",
                "optional": false,
                "typeAnnotation": null,
                "start": 602,
                "end": 608
              },
              "typeArguments": null,
              "start": 602,
              "end": 608
            },
            "start": 600,
            "end": 608
          },
          "value": null,
          "start": 591,
          "end": 608
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Matcher",
            "optional": false,
            "typeAnnotation": null,
            "start": 611,
            "end": 618
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 619,
                  "end": 624
                },
                "typeArguments": null,
                "start": 619,
                "end": 624
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Values",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 626,
                  "end": 632
                },
                "typeArguments": null,
                "start": 626,
                "end": 632
              }
            ],
            "start": 618,
            "end": 633
          },
          "start": 611,
          "end": 633
        },
        "start": 609,
        "end": 633
      },
      "body": null,
      "expression": false,
      "start": 491,
      "end": 634
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "accept",
        "optional": false,
        "typeAnnotation": null,
        "start": 652,
        "end": 658
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
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 659,
              "end": 664
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pattern",
                "optional": false,
                "typeAnnotation": null,
                "start": 673,
                "end": 680
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
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 683,
                          "end": 687
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "a",
                                  "raw": "\"a\"",
                                  "start": 689,
                                  "end": 692
                                },
                                "start": 689,
                                "end": 692
                              },
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "b",
                                  "raw": "\"b\"",
                                  "start": 695,
                                  "end": 698
                                },
                                "start": 695,
                                "end": 698
                              }
                            ],
                            "start": 689,
                            "end": 698
                          },
                          "start": 687,
                          "end": 698
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 683,
                        "end": 698
                      }
                    ],
                    "start": 681,
                    "end": 700
                  }
                ],
                "start": 680,
                "end": 701
              },
              "start": 673,
              "end": 701
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 659,
            "end": 701
          }
        ],
        "start": 658,
        "end": 702
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 710,
                "end": 715
              },
              "typeArguments": null,
              "start": 710,
              "end": 715
            },
            "start": 708,
            "end": 715
          },
          "start": 703,
          "end": 715
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 718,
          "end": 722
        },
        "start": 716,
        "end": 722
      },
      "body": null,
      "expression": false,
      "start": 635,
      "end": 723
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accept",
          "optional": false,
          "typeAnnotation": null,
          "start": 725,
          "end": 731
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "optional",
              "optional": false,
              "typeAnnotation": null,
              "start": 732,
              "end": 740
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 771,
                      "end": 775
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "union",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 777,
                        "end": 782
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "oops",
                          "raw": "\"oops\"",
                          "start": 783,
                          "end": 789
                        }
                      ],
                      "optional": false,
                      "start": 777,
                      "end": 790
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 771,
                    "end": 790
                  }
                ],
                "start": 741,
                "end": 793
              }
            ],
            "optional": false,
            "start": 732,
            "end": 794
          }
        ],
        "optional": false,
        "start": 725,
        "end": 795
      },
      "directive": null,
      "start": 725,
      "end": 796
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "accept",
          "optional": false,
          "typeAnnotation": null,
          "start": 797,
          "end": 803
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "intersection",
              "optional": false,
              "typeAnnotation": null,
              "start": 804,
              "end": 816
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 847,
                      "end": 851
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "union",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 853,
                        "end": 858
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "oops",
                          "raw": "\"oops\"",
                          "start": 859,
                          "end": 865
                        }
                      ],
                      "optional": false,
                      "start": 853,
                      "end": 866
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 847,
                    "end": 866
                  }
                ],
                "start": 817,
                "end": 869
              }
            ],
            "optional": false,
            "start": 804,
            "end": 870
          }
        ],
        "optional": false,
        "start": 797,
        "end": 871
      },
      "directive": null,
      "start": 797,
      "end": 872
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 872
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Matcher",
    "start": 10,
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
    "value": "Input",
    "start": 18,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "Pattern",
    "start": 25,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 35,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "matcher",
    "start": 50,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 63,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 69,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 76,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 84,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "pattern",
    "start": 93,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "Pattern",
    "start": 103,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 116,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "Pattern",
    "start": 121,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 129,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 138,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "Matcher",
    "start": 146,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 154,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 166,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 170,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 173,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 179,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "Pattern",
    "start": 188,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 196,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 202,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 211,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 219,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "union",
    "start": 228,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 234,
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
    "value": "Patterns",
    "start": 241,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 250,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 258,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "Pattern",
    "start": 268,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 276,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": "...",
    "start": 284,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "Pattern",
    "start": 287,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 295,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 306,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "patterns",
    "start": 309,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "Patterns",
    "start": 319,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "Matcher",
    "start": 330,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 338,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "Patterns",
    "start": 345,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 356,
    "end": 363
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 364,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 373,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 382,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 389,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 395,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 403,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 411,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 419,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 427,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "Pattern",
    "start": 437,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 445,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 451,
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
    "value": "value",
    "start": 453,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 460,
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
    "value": ":",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "Matcher",
    "start": 468,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 476,
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
    "value": "Value",
    "start": 483,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "declare",
    "start": 491,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 499,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "intersection",
    "start": 508,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 521,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 528,
    "end": 534
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 535,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 543,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "Pattern",
    "start": 553,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 561,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": "...",
    "start": 569,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "Pattern",
    "start": 572,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 580,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 591,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 594,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 602,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "Matcher",
    "start": 611,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 619,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 626,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 635,
    "end": 642
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 643,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "accept",
    "start": 652,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 659,
    "end": 664
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 665,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "Pattern",
    "start": 673,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 683,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 687,
    "end": 688
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 689,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 693,
    "end": 694
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 695,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 703,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 710,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 716,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 718,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "accept",
    "start": 725,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 732,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 771,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "union",
    "start": 777,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 782,
    "end": 783
  },
  {
    "type": "String",
    "value": "\"oops\"",
    "start": 783,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "accept",
    "start": 797,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "intersection",
    "start": 804,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 847,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "union",
    "start": 853,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 858,
    "end": 859
  },
  {
    "type": "String",
    "value": "\"oops\"",
    "start": 859,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 871,
    "end": 872
  }
]
```

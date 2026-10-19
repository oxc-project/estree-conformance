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
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 30
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 33,
              "end": 40
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 25,
            "end": 40
          }
        ],
        "start": 17,
        "end": 41
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
              "start": 48,
              "end": 55
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
                      "start": 61,
                      "end": 66
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
                              "start": 74,
                              "end": 79
                            },
                            "typeArguments": null,
                            "start": 74,
                            "end": 79
                          },
                          "start": 72,
                          "end": 79
                        },
                        "start": 67,
                        "end": 79
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 82,
                        "end": 89
                      },
                      "start": 80,
                      "end": 89
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 61,
                    "end": 90
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 91,
                      "end": 96
                    },
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
                          "start": 99,
                          "end": 104
                        },
                        "typeArguments": null,
                        "start": 99,
                        "end": 104
                      },
                      "start": 97,
                      "end": 104
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 91,
                    "end": 104
                  }
                ],
                "start": 59,
                "end": 106
              },
              "start": 57,
              "end": 106
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 48,
            "end": 107
          }
        ],
        "start": 42,
        "end": 109
      },
      "declare": false,
      "start": 0,
      "end": 109
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Pattern",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 122
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
              "start": 123,
              "end": 128
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 123,
            "end": 128
          }
        ],
        "start": 122,
        "end": 129
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
              "start": 132,
              "end": 137
            },
            "typeArguments": null,
            "start": 132,
            "end": 137
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Matcher",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 147
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
                    "start": 148,
                    "end": 153
                  },
                  "typeArguments": null,
                  "start": 148,
                  "end": 153
                }
              ],
              "start": 147,
              "end": 154
            },
            "start": 140,
            "end": 154
          },
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 163
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
                  "start": 173,
                  "end": 178
                },
                "typeArguments": null,
                "start": 173,
                "end": 178
              },
              "start": 167,
              "end": 178
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
                "start": 182,
                "end": 189
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
                        "start": 190,
                        "end": 195
                      },
                      "typeArguments": null,
                      "start": 190,
                      "end": 195
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 196,
                        "end": 199
                      },
                      "typeArguments": null,
                      "start": 196,
                      "end": 199
                    },
                    "start": 190,
                    "end": 200
                  }
                ],
                "start": 189,
                "end": 201
              },
              "start": 182,
              "end": 201
            },
            "optional": true,
            "readonly": null,
            "start": 157,
            "end": 203
          }
        ],
        "start": 132,
        "end": 203
      },
      "declare": false,
      "start": 110,
      "end": 204
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArrayElement",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 222
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
              "start": 223,
              "end": 228
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 223,
            "end": 228
          }
        ],
        "start": 222,
        "end": 229
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Input",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 237
          },
          "typeArguments": null,
          "start": 232,
          "end": 237
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 262,
                  "end": 267
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 262,
                "end": 267
              },
              "start": 256,
              "end": 267
            },
            "start": 255,
            "end": 270
          },
          "start": 246,
          "end": 270
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Value",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 278
          },
          "typeArguments": null,
          "start": 273,
          "end": 278
        },
        "falseType": {
          "type": "TSUnknownKeyword",
          "start": 281,
          "end": 288
        },
        "start": 232,
        "end": 288
      },
      "declare": false,
      "start": 205,
      "end": 289
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "array",
        "optional": false,
        "typeAnnotation": null,
        "start": 307,
        "end": 312
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
              "start": 313,
              "end": 318
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 313,
            "end": 318
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 320,
              "end": 325
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pattern",
                "optional": false,
                "typeAnnotation": null,
                "start": 334,
                "end": 341
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ArrayElement",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 342,
                      "end": 354
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
                            "start": 355,
                            "end": 360
                          },
                          "typeArguments": null,
                          "start": 355,
                          "end": 360
                        }
                      ],
                      "start": 354,
                      "end": 361
                    },
                    "start": 342,
                    "end": 361
                  }
                ],
                "start": 341,
                "end": 362
              },
              "start": 334,
              "end": 362
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 320,
            "end": 362
          }
        ],
        "start": 312,
        "end": 363
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
                "start": 371,
                "end": 376
              },
              "typeArguments": null,
              "start": 371,
              "end": 376
            },
            "start": 369,
            "end": 376
          },
          "start": 364,
          "end": 376
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
            "start": 379,
            "end": 386
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
                  "start": 387,
                  "end": 392
                },
                "typeArguments": null,
                "start": 387,
                "end": 392
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 394,
                  "end": 399
                },
                "typeArguments": null,
                "start": 394,
                "end": 399
              }
            ],
            "start": 386,
            "end": 400
          },
          "start": 379,
          "end": 400
        },
        "start": 377,
        "end": 400
      },
      "body": null,
      "expression": false,
      "start": 290,
      "end": 401
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "when",
        "optional": false,
        "typeAnnotation": null,
        "start": 419,
        "end": 423
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
              "start": 424,
              "end": 429
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 424,
            "end": 429
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Callback",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 439
            },
            "constraint": {
              "type": "TSFunctionType",
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
                        "start": 456,
                        "end": 461
                      },
                      "typeArguments": null,
                      "start": 456,
                      "end": 461
                    },
                    "start": 454,
                    "end": 461
                  },
                  "start": 449,
                  "end": 461
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 466,
                  "end": 473
                },
                "start": 463,
                "end": 473
              },
              "start": 448,
              "end": 473
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 431,
            "end": 473
          }
        ],
        "start": 423,
        "end": 474
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Callback",
                "optional": false,
                "typeAnnotation": null,
                "start": 485,
                "end": 493
              },
              "typeArguments": null,
              "start": 485,
              "end": 493
            },
            "start": 483,
            "end": 493
          },
          "start": 475,
          "end": 493
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
            "start": 496,
            "end": 503
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
                  "start": 504,
                  "end": 509
                },
                "typeArguments": null,
                "start": 504,
                "end": 509
              }
            ],
            "start": 503,
            "end": 510
          },
          "start": 496,
          "end": 510
        },
        "start": 494,
        "end": 510
      },
      "body": null,
      "expression": false,
      "start": 402,
      "end": 511
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "accept",
        "optional": false,
        "typeAnnotation": null,
        "start": 529,
        "end": 535
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
              "start": 536,
              "end": 541
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pattern",
                "optional": false,
                "typeAnnotation": null,
                "start": 550,
                "end": 557
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
                          "name": "list",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 560,
                          "end": 564
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
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
                                    "name": "prop",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 568,
                                    "end": 572
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 574,
                                      "end": 580
                                    },
                                    "start": 572,
                                    "end": 580
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 568,
                                  "end": 580
                                }
                              ],
                              "start": 566,
                              "end": 582
                            },
                            "start": 566,
                            "end": 584
                          },
                          "start": 564,
                          "end": 584
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 560,
                        "end": 584
                      }
                    ],
                    "start": 558,
                    "end": 586
                  }
                ],
                "start": 557,
                "end": 587
              },
              "start": 550,
              "end": 587
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 536,
            "end": 587
          }
        ],
        "start": 535,
        "end": 588
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
                "start": 596,
                "end": 601
              },
              "typeArguments": null,
              "start": 596,
              "end": 601
            },
            "start": 594,
            "end": 601
          },
          "start": 589,
          "end": 601
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 604,
          "end": 608
        },
        "start": 602,
        "end": 608
      },
      "body": null,
      "expression": false,
      "start": 512,
      "end": 609
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
          "start": 611,
          "end": 617
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
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 624,
                  "end": 628
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 630,
                    "end": 635
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
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 646,
                            "end": 650
                          },
                          "value": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "when",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 652,
                              "end": 656
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
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 657,
                                    "end": 662
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
                                            "name": "text",
                                            "optional": false,
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSStringKeyword",
                                                "start": 692,
                                                "end": 698
                                              },
                                              "start": 690,
                                              "end": 698
                                            },
                                            "start": 686,
                                            "end": 698
                                          },
                                          "init": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "value",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 701,
                                            "end": 706
                                          },
                                          "definite": false,
                                          "start": 686,
                                          "end": 706
                                        }
                                      ],
                                      "declare": false,
                                      "start": 680,
                                      "end": 707
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 727,
                                        "end": 731
                                      },
                                      "start": 720,
                                      "end": 732
                                    }
                                  ],
                                  "start": 666,
                                  "end": 742
                                },
                                "id": null,
                                "generator": false,
                                "start": 657,
                                "end": 742
                              }
                            ],
                            "optional": false,
                            "start": 652,
                            "end": 743
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 646,
                          "end": 743
                        }
                      ],
                      "start": 636,
                      "end": 750
                    }
                  ],
                  "optional": false,
                  "start": 630,
                  "end": 751
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 624,
                "end": 751
              }
            ],
            "start": 618,
            "end": 754
          }
        ],
        "optional": false,
        "start": 611,
        "end": 755
      },
      "directive": null,
      "start": 611,
      "end": 756
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 756
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
    "value": "Value",
    "start": 25,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 33,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "matcher",
    "start": 48,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
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
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 61,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 67,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 74,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 82,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 91,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 99,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 110,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "Pattern",
    "start": 115,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 123,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 132,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "Matcher",
    "start": 140,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 148,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 160,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 164,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 167,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 173,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "Pattern",
    "start": 182,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 190,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 196,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 205,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "ArrayElement",
    "start": 210,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 223,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 232,
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
    "value": "readonly",
    "start": 246,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 256,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 262,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 273,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 281,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 290,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 298,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 307,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 313,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 320,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 326,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "Pattern",
    "start": 334,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "ArrayElement",
    "start": 342,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 355,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "value",
    "start": 364,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 371,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "Matcher",
    "start": 379,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 387,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 394,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 402,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 410,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "when",
    "start": 419,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 424,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "Callback",
    "start": 431,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 440,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "value",
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
    "type": "Identifier",
    "value": "Input",
    "start": 456,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 463,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 466,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 475,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "Callback",
    "start": 485,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "Matcher",
    "start": 496,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 504,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "declare",
    "start": 512,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 520,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "accept",
    "start": 529,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 536,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 542,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "Pattern",
    "start": 550,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 560,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 568,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 574,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 589,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 596,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 602,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 604,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "accept",
    "start": 611,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 624,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 630,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 646,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "when",
    "start": 652,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 657,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 663,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 666,
    "end": 667
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 680,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 686,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 692,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 701,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 706,
    "end": 707
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 720,
    "end": 726
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 727,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "}",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 755,
    "end": 756
  }
]
```

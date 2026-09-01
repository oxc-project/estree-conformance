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
        "name": "Ref",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 65
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
              "start": 66,
              "end": 67
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 66,
            "end": 67
          }
        ],
        "start": 65,
        "end": 68
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
              "name": "current",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 82
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
                  "start": 84,
                  "end": 85
                },
                "typeArguments": null,
                "start": 84,
                "end": 85
              },
              "start": 82,
              "end": 85
            },
            "accessibility": null,
            "static": false,
            "start": 75,
            "end": 86
          }
        ],
        "start": 71,
        "end": 88
      },
      "declare": false,
      "start": 57,
      "end": 89
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FunctionComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 113
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 115
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 114,
            "end": 115
          }
        ],
        "start": 113,
        "end": 116
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 128
                },
                "typeArguments": null,
                "start": 127,
                "end": 128
              },
              "start": 125,
              "end": 128
            },
            "start": 120,
            "end": 128
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSUnknownKeyword",
            "start": 133,
            "end": 140
          },
          "start": 130,
          "end": 140
        },
        "start": 119,
        "end": 140
      },
      "declare": false,
      "start": 91,
      "end": 141
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 162
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
              "start": 163,
              "end": 164
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionComponent",
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 190
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 191,
                    "end": 194
                  }
                ],
                "start": 190,
                "end": 195
              },
              "start": 173,
              "end": 195
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 163,
            "end": 195
          }
        ],
        "start": 162,
        "end": 196
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 202
          },
          "typeArguments": null,
          "start": 201,
          "end": 202
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "FunctionComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 228
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 235,
                    "end": 236
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 235,
                  "end": 236
                },
                "start": 229,
                "end": 236
              }
            ],
            "start": 228,
            "end": 237
          },
          "start": 211,
          "end": 237
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 241
          },
          "typeArguments": null,
          "start": 240,
          "end": 241
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 244,
          "end": 246
        },
        "start": 201,
        "end": 246
      },
      "declare": false,
      "start": 143,
      "end": 247
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropsWithoutRef",
        "optional": false,
        "typeAnnotation": null,
        "start": 254,
        "end": 269
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 271
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 270,
            "end": 271
          }
        ],
        "start": 269,
        "end": 272
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 275,
            "end": 276
          },
          "typeArguments": null,
          "start": 275,
          "end": 276
        },
        "extendsType": {
          "type": "TSAnyKeyword",
          "start": 285,
          "end": 288
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "ref",
              "raw": "\"ref\"",
              "start": 293,
              "end": 298
            },
            "start": 293,
            "end": 298
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 314
              },
              "typeArguments": null,
              "start": 313,
              "end": 314
            },
            "start": 307,
            "end": 314
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 325
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 326,
                    "end": 327
                  },
                  "typeArguments": null,
                  "start": 326,
                  "end": 327
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ref",
                    "raw": "\"ref\"",
                    "start": 329,
                    "end": 334
                  },
                  "start": 329,
                  "end": 334
                }
              ],
              "start": 325,
              "end": 335
            },
            "start": 321,
            "end": 335
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 343
            },
            "typeArguments": null,
            "start": 342,
            "end": 343
          },
          "start": 293,
          "end": 343
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 349
          },
          "typeArguments": null,
          "start": 348,
          "end": 349
        },
        "start": 275,
        "end": 349
      },
      "declare": false,
      "start": 249,
      "end": 350
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentPropsWithoutRef",
        "optional": false,
        "typeAnnotation": null,
        "start": 357,
        "end": 381
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
              "start": 382,
              "end": 383
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionComponent",
                "optional": false,
                "typeAnnotation": null,
                "start": 392,
                "end": 409
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 410,
                    "end": 413
                  }
                ],
                "start": 409,
                "end": 414
              },
              "start": 392,
              "end": 414
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 382,
            "end": 414
          }
        ],
        "start": 381,
        "end": 415
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "PropsWithoutRef",
          "optional": false,
          "typeAnnotation": null,
          "start": 420,
          "end": 435
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 436,
                "end": 450
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
                      "start": 451,
                      "end": 452
                    },
                    "typeArguments": null,
                    "start": 451,
                    "end": 452
                  }
                ],
                "start": 450,
                "end": 453
              },
              "start": 436,
              "end": 453
            }
          ],
          "start": 435,
          "end": 454
        },
        "start": 420,
        "end": 454
      },
      "declare": false,
      "start": 352,
      "end": 455
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forwardRef",
        "optional": false,
        "typeAnnotation": null,
        "start": 474,
        "end": 484
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
              "start": 485,
              "end": 486
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 485,
            "end": 486
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 488,
              "end": 489
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 488,
            "end": 489
          }
        ],
        "start": 484,
        "end": 490
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "component",
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
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 513,
                        "end": 514
                      },
                      "typeArguments": null,
                      "start": 513,
                      "end": 514
                    },
                    "start": 511,
                    "end": 514
                  },
                  "start": 506,
                  "end": 514
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ref",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Ref",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 521,
                        "end": 524
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
                              "start": 525,
                              "end": 526
                            },
                            "typeArguments": null,
                            "start": 525,
                            "end": 526
                          }
                        ],
                        "start": 524,
                        "end": 527
                      },
                      "start": 521,
                      "end": 527
                    },
                    "start": 519,
                    "end": 527
                  },
                  "start": 516,
                  "end": 527
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 532,
                  "end": 539
                },
                "start": 529,
                "end": 539
              },
              "start": 505,
              "end": 539
            },
            "start": 503,
            "end": 539
          },
          "start": 494,
          "end": 539
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
              "name": "props",
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
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 552,
                        "end": 553
                      },
                      "typeArguments": null,
                      "start": 552,
                      "end": 553
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 558,
                            "end": 561
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Ref",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 564,
                                "end": 567
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
                                      "start": 568,
                                      "end": 569
                                    },
                                    "typeArguments": null,
                                    "start": 568,
                                    "end": 569
                                  }
                                ],
                                "start": 567,
                                "end": 570
                              },
                              "start": 564,
                              "end": 570
                            },
                            "start": 562,
                            "end": 570
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 558,
                          "end": 570
                        }
                      ],
                      "start": 556,
                      "end": 572
                    }
                  ],
                  "start": 552,
                  "end": 572
                },
                "start": 550,
                "end": 572
              },
              "start": 545,
              "end": 572
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 577,
              "end": 584
            },
            "start": 574,
            "end": 584
          },
          "start": 544,
          "end": 584
        },
        "start": 542,
        "end": 584
      },
      "body": null,
      "expression": false,
      "start": 457,
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
            "name": "ComponentWithForwardRef",
            "optional": false,
            "typeAnnotation": null,
            "start": 593,
            "end": 616
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "forwardRef",
              "optional": false,
              "typeAnnotation": null,
              "start": 619,
              "end": 629
            },
            "typeArguments": null,
            "arguments": [
              {
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
                        "start": 634,
                        "end": 635
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "FunctionComponent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 644,
                          "end": 661
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 662,
                              "end": 665
                            }
                          ],
                          "start": 661,
                          "end": 666
                        },
                        "start": 644,
                        "end": 666
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 634,
                      "end": 666
                    }
                  ],
                  "start": 633,
                  "end": 667
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ComponentPropsWithoutRef",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 680,
                          "end": 704
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
                                "start": 705,
                                "end": 706
                              },
                              "typeArguments": null,
                              "start": 705,
                              "end": 706
                            }
                          ],
                          "start": 704,
                          "end": 707
                        },
                        "start": 680,
                        "end": 707
                      },
                      "start": 678,
                      "end": 707
                    },
                    "start": 673,
                    "end": 707
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ref",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Ref",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 718,
                          "end": 721
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "HTMLElement",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 722,
                                "end": 733
                              },
                              "typeArguments": null,
                              "start": 722,
                              "end": 733
                            }
                          ],
                          "start": 721,
                          "end": 734
                        },
                        "start": 718,
                        "end": 734
                      },
                      "start": 716,
                      "end": 734
                    },
                    "start": 713,
                    "end": 734
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 756,
                        "end": 760
                      },
                      "start": 749,
                      "end": 761
                    }
                  ],
                  "start": 743,
                  "end": 765
                },
                "id": null,
                "generator": false,
                "start": 633,
                "end": 765
              }
            ],
            "optional": false,
            "start": 619,
            "end": 768
          },
          "definite": false,
          "start": 593,
          "end": 768
        }
      ],
      "declare": false,
      "start": 587,
      "end": 769
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 776,
        "end": 780
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
              "start": 781,
              "end": 782
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 781,
            "end": 782
          }
        ],
        "start": 780,
        "end": 783
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 786,
            "end": 787
          },
          "typeArguments": null,
          "start": 786,
          "end": 787
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "component",
                "optional": false,
                "typeAnnotation": null,
                "start": 798,
                "end": 807
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Component",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 816,
                      "end": 825
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 816,
                    "end": 825
                  },
                  "start": 810,
                  "end": 825
                },
                "start": 808,
                "end": 825
              },
              "accessibility": null,
              "static": false,
              "start": 798,
              "end": 825
            }
          ],
          "start": 796,
          "end": 827
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Component",
              "optional": false,
              "typeAnnotation": null,
              "start": 832,
              "end": 841
            },
            "typeArguments": null,
            "start": 832,
            "end": 841
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "FunctionComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 850,
              "end": 867
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 868,
                  "end": 871
                }
              ],
              "start": 867,
              "end": 872
            },
            "start": 850,
            "end": 872
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 879,
              "end": 893
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Component",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 894,
                    "end": 903
                  },
                  "typeArguments": null,
                  "start": 894,
                  "end": 903
                }
              ],
              "start": 893,
              "end": 904
            },
            "start": 879,
            "end": 904
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 911,
            "end": 916
          },
          "start": 832,
          "end": 916
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 921,
          "end": 926
        },
        "start": 786,
        "end": 926
      },
      "declare": false,
      "start": 771,
      "end": 927
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result1",
        "optional": false,
        "typeAnnotation": null,
        "start": 990,
        "end": 997
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 1000,
          "end": 1014
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentWithForwardRef",
                "optional": false,
                "typeAnnotation": null,
                "start": 1022,
                "end": 1045
              },
              "typeArguments": null,
              "start": 1015,
              "end": 1045
            }
          ],
          "start": 1014,
          "end": 1046
        },
        "start": 1000,
        "end": 1046
      },
      "declare": false,
      "start": 985,
      "end": 1047
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1101,
        "end": 1108
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Test",
          "optional": false,
          "typeAnnotation": null,
          "start": 1111,
          "end": 1115
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
                    "name": "component",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1118,
                    "end": 1127
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ComponentWithForwardRef",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1136,
                        "end": 1159
                      },
                      "typeArguments": null,
                      "start": 1129,
                      "end": 1159
                    },
                    "start": 1127,
                    "end": 1159
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1118,
                  "end": 1159
                }
              ],
              "start": 1116,
              "end": 1161
            }
          ],
          "start": 1115,
          "end": 1162
        },
        "start": 1111,
        "end": 1162
      },
      "declare": false,
      "start": 1096,
      "end": 1163
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
            "name": "ComponentWithForwardRef2",
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
                        "start": 1345,
                        "end": 1346
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "FunctionComponent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1355,
                          "end": 1372
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 1373,
                              "end": 1376
                            }
                          ],
                          "start": 1372,
                          "end": 1377
                        },
                        "start": 1355,
                        "end": 1377
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1345,
                      "end": 1377
                    }
                  ],
                  "start": 1344,
                  "end": 1378
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
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
                              "name": "PropsWithoutRef",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1389,
                              "end": 1404
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ComponentProps",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1405,
                                    "end": 1419
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
                                          "start": 1420,
                                          "end": 1421
                                        },
                                        "typeArguments": null,
                                        "start": 1420,
                                        "end": 1421
                                      }
                                    ],
                                    "start": 1419,
                                    "end": 1422
                                  },
                                  "start": 1405,
                                  "end": 1422
                                }
                              ],
                              "start": 1404,
                              "end": 1423
                            },
                            "start": 1389,
                            "end": 1423
                          },
                          {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": true,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "className",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1432,
                                  "end": 1441
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1444,
                                    "end": 1450
                                  },
                                  "start": 1442,
                                  "end": 1450
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1432,
                                "end": 1451
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": true,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "as",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1456,
                                  "end": 1458
                                },
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
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1461,
                                          "end": 1462
                                        },
                                        "typeArguments": null,
                                        "start": 1461,
                                        "end": 1462
                                      },
                                      {
                                        "type": "TSUndefinedKeyword",
                                        "start": 1465,
                                        "end": 1474
                                      }
                                    ],
                                    "start": 1461,
                                    "end": 1474
                                  },
                                  "start": 1459,
                                  "end": 1474
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1456,
                                "end": 1475
                              }
                            ],
                            "start": 1426,
                            "end": 1479
                          },
                          {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": true,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ref",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1488,
                                  "end": 1491
                                },
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
                                          "name": "Ref",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1494,
                                          "end": 1497
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "HTMLElement",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1498,
                                                "end": 1509
                                              },
                                              "typeArguments": null,
                                              "start": 1498,
                                              "end": 1509
                                            }
                                          ],
                                          "start": 1497,
                                          "end": 1510
                                        },
                                        "start": 1494,
                                        "end": 1510
                                      },
                                      {
                                        "type": "TSUndefinedKeyword",
                                        "start": 1513,
                                        "end": 1522
                                      }
                                    ],
                                    "start": 1494,
                                    "end": 1522
                                  },
                                  "start": 1492,
                                  "end": 1522
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1488,
                                "end": 1523
                              }
                            ],
                            "start": 1482,
                            "end": 1527
                          }
                        ],
                        "start": 1389,
                        "end": 1527
                      },
                      "start": 1387,
                      "end": 1527
                    },
                    "start": 1382,
                    "end": 1527
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 1534,
                    "end": 1541
                  },
                  "start": 1531,
                  "end": 1541
                },
                "start": 1344,
                "end": 1541
              },
              "start": 1342,
              "end": 1541
            },
            "start": 1318,
            "end": 1541
          },
          "init": null,
          "definite": false,
          "start": 1318,
          "end": 1541
        }
      ],
      "declare": true,
      "start": 1304,
      "end": 1542
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1549,
        "end": 1556
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 1559,
          "end": 1573
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentWithForwardRef2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1581,
                "end": 1605
              },
              "typeArguments": null,
              "start": 1574,
              "end": 1605
            }
          ],
          "start": 1573,
          "end": 1606
        },
        "start": 1559,
        "end": 1606
      },
      "declare": false,
      "start": 1544,
      "end": 1607
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1613,
        "end": 1620
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Test",
          "optional": false,
          "typeAnnotation": null,
          "start": 1623,
          "end": 1627
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
                    "name": "component",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1630,
                    "end": 1639
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ComponentWithForwardRef2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1648,
                        "end": 1672
                      },
                      "typeArguments": null,
                      "start": 1641,
                      "end": 1672
                    },
                    "start": 1639,
                    "end": 1672
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1630,
                  "end": 1672
                }
              ],
              "start": 1628,
              "end": 1674
            }
          ],
          "start": 1627,
          "end": 1675
        },
        "start": 1623,
        "end": 1675
      },
      "declare": false,
      "start": 1608,
      "end": 1676
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 1676
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 57,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "Ref",
    "start": 62,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 75,
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
    "value": "T",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 91,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 96,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 120,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 130,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 133,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 143,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "ComponentProps",
    "start": 148,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 165,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 173,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 191,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 203,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 211,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 229,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Punctuator",
    "value": "}",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 249,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "PropsWithoutRef",
    "start": 254,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 277,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 285,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 291,
    "end": 292
  },
  {
    "type": "String",
    "value": "\"ref\"",
    "start": 293,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 299,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 307,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 321,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 327,
    "end": 328
  },
  {
    "type": "String",
    "value": "\"ref\"",
    "start": 329,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 352,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "ComponentPropsWithoutRef",
    "start": 357,
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
    "value": "T",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 384,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 392,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 410,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "PropsWithoutRef",
    "start": 420,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "ComponentProps",
    "start": 436,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 457,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 465,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "forwardRef",
    "start": 474,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 485,
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
    "value": "P",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "component",
    "start": 494,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 506,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "P",
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
    "value": "ref",
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
    "type": "Identifier",
    "value": "Ref",
    "start": 521,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 529,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 532,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 545,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 558,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "Ref",
    "start": 564,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 574,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 577,
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
    "start": 587,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "ComponentWithForwardRef",
    "start": 593,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "forwardRef",
    "start": 619,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 634,
    "end": 635
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 636,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 644,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 662,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 673,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "ComponentPropsWithoutRef",
    "start": 680,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "ref",
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
    "type": "Identifier",
    "value": "Ref",
    "start": 718,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "HTMLElement",
    "start": 722,
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
    "value": ",",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 740,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 743,
    "end": 744
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 749,
    "end": 755
  },
  {
    "type": "Null",
    "value": "null",
    "start": 756,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 771,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 776,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 786,
    "end": 787
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 788,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "component",
    "start": 798,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 810,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 816,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 832,
    "end": 841
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 842,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 850,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 868,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "ComponentProps",
    "start": 879,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 894,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 911,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 921,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 985,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "Result1",
    "start": 990,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "ComponentProps",
    "start": 1000,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1015,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "ComponentWithForwardRef",
    "start": 1022,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1096,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "Result2",
    "start": 1101,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 1111,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "component",
    "start": 1118,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1129,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "ComponentWithForwardRef",
    "start": 1136,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1304,
    "end": 1311
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1312,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "ComponentWithForwardRef2",
    "start": 1318,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1347,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 1355,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1373,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1382,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "PropsWithoutRef",
    "start": 1389,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "ComponentProps",
    "start": 1405,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "className",
    "start": 1432,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1444,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1456,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1465,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1488,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Identifier",
    "value": "Ref",
    "start": 1494,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "HTMLElement",
    "start": 1498,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1513,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1531,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1534,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1544,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "Result3",
    "start": 1549,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "ComponentProps",
    "start": 1559,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1574,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "ComponentWithForwardRef2",
    "start": 1581,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1608,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "Result4",
    "start": 1613,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 1623,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "component",
    "start": 1630,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1641,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "ComponentWithForwardRef2",
    "start": 1648,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1675,
    "end": 1676
  }
]
```

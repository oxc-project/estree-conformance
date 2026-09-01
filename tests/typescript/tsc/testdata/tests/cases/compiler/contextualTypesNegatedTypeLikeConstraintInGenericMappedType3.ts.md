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
        "name": "MappedOmit",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
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
              "start": 16,
              "end": 17
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 17
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 35,
                "end": 38
              },
              "start": 29,
              "end": 38
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 19,
            "end": 38
          }
        ],
        "start": 15,
        "end": 39
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 45,
          "end": 46
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
              "start": 56,
              "end": 57
            },
            "typeArguments": null,
            "start": 56,
            "end": 57
          },
          "start": 50,
          "end": 57
        },
        "nameType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Exclude",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 68
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
                  "start": 69,
                  "end": 70
                },
                "typeArguments": null,
                "start": 69,
                "end": 70
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 73
                },
                "typeArguments": null,
                "start": 72,
                "end": 73
              }
            ],
            "start": 68,
            "end": 74
          },
          "start": 61,
          "end": 74
        },
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
              "start": 77,
              "end": 78
            },
            "typeArguments": null,
            "start": 77,
            "end": 78
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "typeArguments": null,
            "start": 79,
            "end": 80
          },
          "start": 77,
          "end": 81
        },
        "optional": false,
        "readonly": null,
        "start": 42,
        "end": 84
      },
      "declare": false,
      "start": 0,
      "end": 84
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IntrinsicElements",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 108
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
              "name": "div",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 118
            },
            "typeAnnotation": {
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
                      "name": "onChange",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 126,
                      "end": 134
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Event",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 141,
                                  "end": 146
                                },
                                "typeArguments": null,
                                "start": 141,
                                "end": 146
                              },
                              "start": 139,
                              "end": 146
                            },
                            "start": 137,
                            "end": 146
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 151,
                            "end": 155
                          },
                          "start": 148,
                          "end": 155
                        },
                        "start": 136,
                        "end": 155
                      },
                      "start": 134,
                      "end": 155
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 126,
                    "end": 156
                  }
                ],
                "start": 120,
                "end": 160
              },
              "start": 118,
              "end": 160
            },
            "accessibility": null,
            "static": false,
            "start": 115,
            "end": 161
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "span",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 168
            },
            "typeAnnotation": {
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
                      "name": "onChange",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 176,
                      "end": 184
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Event",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 191,
                                  "end": 196
                                },
                                "typeArguments": null,
                                "start": 191,
                                "end": 196
                              },
                              "start": 189,
                              "end": 196
                            },
                            "start": 187,
                            "end": 196
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 201,
                            "end": 205
                          },
                          "start": 198,
                          "end": 205
                        },
                        "start": 186,
                        "end": 205
                      },
                      "start": 184,
                      "end": 205
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 176,
                    "end": 206
                  }
                ],
                "start": 170,
                "end": 210
              },
              "start": 168,
              "end": 210
            },
            "accessibility": null,
            "static": false,
            "start": 164,
            "end": 211
          }
        ],
        "start": 111,
        "end": 213
      },
      "declare": false,
      "start": 86,
      "end": 214
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ElementType",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 232
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
            "name": "IntrinsicElements",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 258
          },
          "typeArguments": null,
          "start": 241,
          "end": 258
        },
        "start": 235,
        "end": 258
      },
      "declare": false,
      "start": 216,
      "end": 259
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
            "name": "DEFAULT_TABS_TAG",
            "optional": false,
            "typeAnnotation": null,
            "start": 265,
            "end": 281
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "div",
              "raw": "\"div\"",
              "start": 284,
              "end": 289
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 293,
                "end": 298
              },
              "typeArguments": null,
              "start": 293,
              "end": 298
            },
            "start": 284,
            "end": 298
          },
          "definite": false,
          "start": 265,
          "end": 298
        }
      ],
      "declare": false,
      "start": 261,
      "end": 299
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 306,
        "end": 311
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TTag",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 316
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementType",
                "optional": false,
                "typeAnnotation": null,
                "start": 325,
                "end": 336
              },
              "typeArguments": null,
              "start": 325,
              "end": 336
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 312,
            "end": 336
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Overrides",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 347
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 350,
              "end": 352
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 338,
            "end": 352
          }
        ],
        "start": 311,
        "end": 353
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MappedOmit",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 366
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
                      "name": "IntrinsicElements",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 370,
                      "end": 387
                    },
                    "typeArguments": null,
                    "start": 370,
                    "end": 387
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TTag",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 388,
                      "end": 392
                    },
                    "typeArguments": null,
                    "start": 388,
                    "end": 392
                  },
                  "start": 370,
                  "end": 393
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Overrides",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 403,
                      "end": 412
                    },
                    "typeArguments": null,
                    "start": 403,
                    "end": 412
                  },
                  "start": 397,
                  "end": 412
                }
              ],
              "start": 366,
              "end": 414
            },
            "start": 356,
            "end": 414
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Overrides",
              "optional": false,
              "typeAnnotation": null,
              "start": 419,
              "end": 428
            },
            "typeArguments": null,
            "start": 419,
            "end": 428
          }
        ],
        "start": 356,
        "end": 428
      },
      "declare": false,
      "start": 301,
      "end": 429
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TabGroupProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 436,
        "end": 449
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TTag",
              "optional": false,
              "typeAnnotation": null,
              "start": 450,
              "end": 454
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementType",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 474
              },
              "typeArguments": null,
              "start": 463,
              "end": 474
            },
            "default": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DEFAULT_TABS_TAG",
                "optional": false,
                "typeAnnotation": null,
                "start": 484,
                "end": 500
              },
              "typeArguments": null,
              "start": 477,
              "end": 500
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 450,
            "end": 500
          }
        ],
        "start": 449,
        "end": 501
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Props",
          "optional": false,
          "typeAnnotation": null,
          "start": 504,
          "end": 509
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TTag",
                "optional": false,
                "typeAnnotation": null,
                "start": 513,
                "end": 517
              },
              "typeArguments": null,
              "start": 513,
              "end": 517
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
                    "name": "defaultIndex",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 527,
                    "end": 539
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 542,
                      "end": 548
                    },
                    "start": 540,
                    "end": 548
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 527,
                  "end": 549
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onChange",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 554,
                    "end": 562
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 573,
                              "end": 579
                            },
                            "start": 571,
                            "end": 579
                          },
                          "start": 566,
                          "end": 579
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 584,
                          "end": 588
                        },
                        "start": 581,
                        "end": 588
                      },
                      "start": 565,
                      "end": 588
                    },
                    "start": 563,
                    "end": 588
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 554,
                  "end": 589
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "selectedIndex",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 594,
                    "end": 607
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 610,
                      "end": 616
                    },
                    "start": 608,
                    "end": 616
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 594,
                  "end": 617
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "vertical",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 622,
                    "end": 630
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 633,
                      "end": 640
                    },
                    "start": 631,
                    "end": 640
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 622,
                  "end": 641
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "manual",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 646,
                    "end": 652
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 655,
                      "end": 662
                    },
                    "start": 653,
                    "end": 662
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 646,
                  "end": 663
                }
              ],
              "start": 521,
              "end": 667
            }
          ],
          "start": 509,
          "end": 669
        },
        "start": 504,
        "end": 669
      },
      "declare": false,
      "start": 431,
      "end": 670
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_internal_ComponentTabGroup",
        "optional": false,
        "typeAnnotation": null,
        "start": 682,
        "end": 709
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TTag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 715,
                    "end": 719
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ElementType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 728,
                      "end": 739
                    },
                    "typeArguments": null,
                    "start": 728,
                    "end": 739
                  },
                  "default": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DEFAULT_TABS_TAG",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 749,
                      "end": 765
                    },
                    "typeArguments": null,
                    "start": 742,
                    "end": 765
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 715,
                  "end": 765
                }
              ],
              "start": 714,
              "end": 766
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
                      "name": "TabGroupProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 779,
                      "end": 792
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TTag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 793,
                            "end": 797
                          },
                          "typeArguments": null,
                          "start": 793,
                          "end": 797
                        }
                      ],
                      "start": 792,
                      "end": 798
                    },
                    "start": 779,
                    "end": 798
                  },
                  "start": 777,
                  "end": 798
                },
                "start": 772,
                "end": 798
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 805,
                "end": 809
              },
              "start": 803,
              "end": 809
            },
            "start": 714,
            "end": 810
          }
        ],
        "start": 710,
        "end": 812
      },
      "declare": false,
      "start": 672,
      "end": 812
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
            "name": "TabGroup",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_internal_ComponentTabGroup",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 836,
                  "end": 863
                },
                "typeArguments": null,
                "start": 836,
                "end": 863
              },
              "start": 834,
              "end": 863
            },
            "start": 826,
            "end": 863
          },
          "init": null,
          "definite": false,
          "start": 826,
          "end": 863
        }
      ],
      "declare": true,
      "start": 814,
      "end": 864
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "TabGroup",
          "optional": false,
          "typeAnnotation": null,
          "start": 866,
          "end": 874
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
                  "name": "defaultIndex",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 879,
                  "end": 891
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 893,
                  "end": 894
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 879,
                "end": 894
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "onChange",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 898,
                  "end": 906
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 909,
                      "end": 914
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
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 934,
                                  "end": 940
                                },
                                "start": 932,
                                "end": 940
                              },
                              "start": 931,
                              "end": 940
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "index",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 943,
                              "end": 948
                            },
                            "definite": false,
                            "start": 931,
                            "end": 948
                          }
                        ],
                        "declare": false,
                        "start": 925,
                        "end": 949
                      }
                    ],
                    "start": 919,
                    "end": 953
                  },
                  "id": null,
                  "generator": false,
                  "start": 908,
                  "end": 953
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 898,
                "end": 953
              }
            ],
            "start": 875,
            "end": 956
          }
        ],
        "optional": false,
        "start": 866,
        "end": 957
      },
      "directive": null,
      "start": 866,
      "end": 958
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 958
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
    "value": "MappedOmit",
    "start": 5,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 21,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 29,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 35,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "[",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 47,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 50,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 58,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 61,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 86,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 91,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "div",
    "start": 115,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "onChange",
    "start": 126,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "ev",
    "start": 137,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "Event",
    "start": 141,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 148,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 151,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "span",
    "start": 164,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "onChange",
    "start": 176,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 187,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "Event",
    "start": 191,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 198,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 201,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 216,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "ElementType",
    "start": 221,
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
    "value": "keyof",
    "start": 235,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 241,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 261,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "DEFAULT_TABS_TAG",
    "start": 265,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 282,
    "end": 283
  },
  {
    "type": "String",
    "value": "\"div\"",
    "start": 284,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 290,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 293,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 301,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 306,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "TTag",
    "start": 312,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 317,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "ElementType",
    "start": 325,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "Overrides",
    "start": 338,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "MappedOmit",
    "start": 356,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 370,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "TTag",
    "start": 388,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 397,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "Overrides",
    "start": 403,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "Overrides",
    "start": 419,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 431,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "TabGroupProps",
    "start": 436,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "TTag",
    "start": 450,
    "end": 454
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 455,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "ElementType",
    "start": 463,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 477,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "DEFAULT_TABS_TAG",
    "start": 484,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 504,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "TTag",
    "start": 513,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "defaultIndex",
    "start": 527,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 542,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "onChange",
    "start": 554,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 566,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 573,
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
    "type": "Keyword",
    "value": "void",
    "start": 584,
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
    "value": "selectedIndex",
    "start": 594,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 610,
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
    "value": "vertical",
    "start": 622,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 633,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "manual",
    "start": 646,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 655,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 668,
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
    "value": "interface",
    "start": 672,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "_internal_ComponentTabGroup",
    "start": 682,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "TTag",
    "start": 715,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 720,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "ElementType",
    "start": 728,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 740,
    "end": 741
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 742,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "DEFAULT_TABS_TAG",
    "start": 749,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 772,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "TabGroupProps",
    "start": 779,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "TTag",
    "start": 793,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 803,
    "end": 804
  },
  {
    "type": "Null",
    "value": "null",
    "start": 805,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 814,
    "end": 821
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 822,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "TabGroup",
    "start": 826,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "_internal_ComponentTabGroup",
    "start": 836,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "TabGroup",
    "start": 866,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "defaultIndex",
    "start": 879,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 891,
    "end": 892
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "onChange",
    "start": 898,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 909,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 916,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 919,
    "end": 920
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 925,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 934,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 943,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "}",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 957,
    "end": 958
  }
]
```

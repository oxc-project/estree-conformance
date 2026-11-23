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
        "name": "Schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 208,
        "end": 214
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "states",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 227
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 230,
                  "end": 236
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 237,
                      "end": 243
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Schema",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 245,
                        "end": 251
                      },
                      "typeArguments": null,
                      "start": 245,
                      "end": 251
                    }
                  ],
                  "start": 236,
                  "end": 252
                },
                "start": 230,
                "end": 252
              },
              "start": 228,
              "end": 252
            },
            "accessibility": null,
            "static": false,
            "start": 221,
            "end": 253
          }
        ],
        "start": 215,
        "end": 255
      },
      "declare": false,
      "start": 198,
      "end": 255
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Resolve",
        "optional": false,
        "typeAnnotation": null,
        "start": 261,
        "end": 268
      },
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
              "start": 269,
              "end": 270
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 279,
                "end": 285
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 286,
                    "end": 292
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Schema",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 294,
                      "end": 300
                    },
                    "typeArguments": null,
                    "start": 294,
                    "end": 300
                  }
                ],
                "start": 285,
                "end": 301
              },
              "start": 279,
              "end": 301
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 269,
            "end": 301
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Segments",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 311
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 329,
                  "end": 335
                },
                "start": 329,
                "end": 337
              },
              "start": 320,
              "end": 337
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 303,
            "end": 337
          }
        ],
        "start": 268,
        "end": 338
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Segments",
            "optional": false,
            "typeAnnotation": null,
            "start": 345,
            "end": 353
          },
          "typeArguments": null,
          "start": 345,
          "end": 353
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Head",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 369,
                  "end": 373
                },
                "constraint": {
                  "type": "TSStringKeyword",
                  "start": 382,
                  "end": 388
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 369,
                "end": 388
              },
              "start": 363,
              "end": 388
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 399,
                    "end": 403
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 412,
                      "end": 418
                    },
                    "start": 412,
                    "end": 420
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 399,
                  "end": 420
                },
                "start": 393,
                "end": 420
              },
              "start": 390,
              "end": 420
            }
          ],
          "start": 362,
          "end": 421
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Head",
              "optional": false,
              "typeAnnotation": null,
              "start": 432,
              "end": 436
            },
            "typeArguments": null,
            "start": 432,
            "end": 436
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 451,
                "end": 452
              },
              "typeArguments": null,
              "start": 451,
              "end": 452
            },
            "start": 445,
            "end": 452
          },
          "trueType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 467,
                "end": 471
              },
              "typeArguments": null,
              "start": 467,
              "end": 471
            },
            "extendsType": {
              "type": "TSTupleType",
              "elementTypes": [],
              "start": 480,
              "end": 482
            },
            "trueType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 501,
                  "end": 502
                },
                "typeArguments": null,
                "start": 501,
                "end": 502
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Head",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 503,
                  "end": 507
                },
                "typeArguments": null,
                "start": 503,
                "end": 507
              },
              "start": 501,
              "end": 508
            },
            "falseType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 527,
                      "end": 528
                    },
                    "typeArguments": null,
                    "start": 527,
                    "end": 528
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Head",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 529,
                      "end": 533
                    },
                    "typeArguments": null,
                    "start": 529,
                    "end": 533
                  },
                  "start": 527,
                  "end": 534
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "states",
                    "raw": "\"states\"",
                    "start": 535,
                    "end": 543
                  },
                  "start": 535,
                  "end": 543
                },
                "start": 527,
                "end": 544
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 553,
                  "end": 559
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 560,
                      "end": 566
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Schema",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 568,
                        "end": 574
                      },
                      "typeArguments": null,
                      "start": 568,
                      "end": 574
                    }
                  ],
                  "start": 559,
                  "end": 575
                },
                "start": 553,
                "end": 575
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 598,
                  "end": 605
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 606,
                            "end": 607
                          },
                          "typeArguments": null,
                          "start": 606,
                          "end": 607
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Head",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 608,
                            "end": 612
                          },
                          "typeArguments": null,
                          "start": 608,
                          "end": 612
                        },
                        "start": 606,
                        "end": 613
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "states",
                          "raw": "\"states\"",
                          "start": 614,
                          "end": 622
                        },
                        "start": 614,
                        "end": 622
                      },
                      "start": 606,
                      "end": 623
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Rest",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 625,
                        "end": 629
                      },
                      "typeArguments": null,
                      "start": 625,
                      "end": 629
                    }
                  ],
                  "start": 605,
                  "end": 630
                },
                "start": 598,
                "end": 630
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 653,
                "end": 658
              },
              "start": 527,
              "end": 658
            },
            "start": 467,
            "end": 658
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 673,
            "end": 678
          },
          "start": 432,
          "end": 678
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 689,
          "end": 694
        },
        "start": 345,
        "end": 694
      },
      "declare": false,
      "start": 256,
      "end": 695
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Split",
        "optional": false,
        "typeAnnotation": null,
        "start": 701,
        "end": 706
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
              "start": 707,
              "end": 708
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 717,
              "end": 723
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 707,
            "end": 723
          }
        ],
        "start": 706,
        "end": 724
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
            "start": 727,
            "end": 728
          },
          "typeArguments": null,
          "start": 727,
          "end": 728
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 737,
              "end": 740
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": ".",
                "cooked": "."
              },
              "tail": false,
              "start": 750,
              "end": 754
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 764,
              "end": 766
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Head",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 746,
                  "end": 750
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 746,
                "end": 750
              },
              "start": 740,
              "end": 750
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Tail",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 760,
                  "end": 764
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 760,
                "end": 764
              },
              "start": 754,
              "end": 764
            }
          ],
          "start": 737,
          "end": 766
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Head",
                "optional": false,
                "typeAnnotation": null,
                "start": 770,
                "end": 774
              },
              "typeArguments": null,
              "start": 770,
              "end": 774
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tail",
                "optional": false,
                "typeAnnotation": null,
                "start": 776,
                "end": 780
              },
              "typeArguments": null,
              "start": 776,
              "end": 780
            }
          ],
          "start": 769,
          "end": 781
        },
        "falseType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 785,
                "end": 786
              },
              "typeArguments": null,
              "start": 785,
              "end": 786
            }
          ],
          "start": 784,
          "end": 787
        },
        "start": 727,
        "end": 787
      },
      "declare": false,
      "start": 696,
      "end": 788
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Children",
        "optional": false,
        "typeAnnotation": null,
        "start": 794,
        "end": 802
      },
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
              "start": 803,
              "end": 804
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Schema",
                "optional": false,
                "typeAnnotation": null,
                "start": 813,
                "end": 819
              },
              "typeArguments": null,
              "start": 813,
              "end": 819
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 803,
            "end": 819
          }
        ],
        "start": 802,
        "end": 820
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 823,
              "end": 824
            },
            "typeArguments": null,
            "start": 823,
            "end": 824
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "states",
              "raw": "\"states\"",
              "start": 825,
              "end": 833
            },
            "start": 825,
            "end": 833
          },
          "start": 823,
          "end": 834
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null,
            "start": 843,
            "end": 849
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 850,
                "end": 856
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Schema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 858,
                  "end": 864
                },
                "typeArguments": null,
                "start": 858,
                "end": 864
              }
            ],
            "start": 849,
            "end": 865
          },
          "start": 843,
          "end": 865
        },
        "trueType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 868,
              "end": 869
            },
            "typeArguments": null,
            "start": 868,
            "end": 869
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "states",
              "raw": "\"states\"",
              "start": 870,
              "end": 878
            },
            "start": 870,
            "end": 878
          },
          "start": 868,
          "end": 879
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null,
            "start": 882,
            "end": 888
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 889,
                "end": 895
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Schema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 897,
                  "end": 903
                },
                "typeArguments": null,
                "start": 897,
                "end": 903
              }
            ],
            "start": 888,
            "end": 904
          },
          "start": 882,
          "end": 904
        },
        "start": 823,
        "end": 904
      },
      "declare": false,
      "start": 789,
      "end": 905
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NeedsRecord",
        "optional": false,
        "typeAnnotation": null,
        "start": 911,
        "end": 922
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
              "start": 923,
              "end": 924
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 933,
                "end": 939
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 940,
                    "end": 946
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Schema",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 948,
                      "end": 954
                    },
                    "typeArguments": null,
                    "start": 948,
                    "end": 954
                  }
                ],
                "start": 939,
                "end": 955
              },
              "start": 933,
              "end": 955
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 923,
            "end": 955
          }
        ],
        "start": 922,
        "end": 956
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 959,
          "end": 960
        },
        "typeArguments": null,
        "start": 959,
        "end": 960
      },
      "declare": false,
      "start": 906,
      "end": 961
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ChildrenAt",
        "optional": false,
        "typeAnnotation": null,
        "start": 967,
        "end": 977
      },
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
              "start": 978,
              "end": 979
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 988,
                "end": 994
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 995,
                    "end": 1001
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Schema",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1003,
                      "end": 1009
                    },
                    "typeArguments": null,
                    "start": 1003,
                    "end": 1009
                  }
                ],
                "start": 994,
                "end": 1010
              },
              "start": 988,
              "end": 1010
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 978,
            "end": 1010
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1012,
              "end": 1013
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1022,
              "end": 1028
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1012,
            "end": 1028
          }
        ],
        "start": 977,
        "end": 1029
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NeedsRecord",
          "optional": false,
          "typeAnnotation": null,
          "start": 1032,
          "end": 1043
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Children",
                "optional": false,
                "typeAnnotation": null,
                "start": 1044,
                "end": 1052
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1053,
                      "end": 1060
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1061,
                            "end": 1062
                          },
                          "typeArguments": null,
                          "start": 1061,
                          "end": 1062
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Split",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1064,
                            "end": 1069
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
                                  "start": 1070,
                                  "end": 1071
                                },
                                "typeArguments": null,
                                "start": 1070,
                                "end": 1071
                              }
                            ],
                            "start": 1069,
                            "end": 1072
                          },
                          "start": 1064,
                          "end": 1072
                        }
                      ],
                      "start": 1060,
                      "end": 1073
                    },
                    "start": 1053,
                    "end": 1073
                  }
                ],
                "start": 1052,
                "end": 1074
              },
              "start": 1044,
              "end": 1074
            }
          ],
          "start": 1043,
          "end": 1075
        },
        "start": 1032,
        "end": 1075
      },
      "declare": false,
      "start": 962,
      "end": 1076
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1076
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 198,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 208,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "states",
    "start": 221,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 230,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 237,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 245,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 256,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "Resolve",
    "start": 261,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 271,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 279,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 286,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 294,
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
    "value": ",",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "Segments",
    "start": 303,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 312,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 320,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 329,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "Segments",
    "start": 345,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 354,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 363,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "Head",
    "start": 369,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 374,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 382,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 390,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 393,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 399,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 404,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 412,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "Head",
    "start": 432,
    "end": 436
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 437,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 445,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 467,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 472,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "Head",
    "start": 503,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "Head",
    "start": 529,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 534,
    "end": 535
  },
  {
    "type": "String",
    "value": "\"states\"",
    "start": 535,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 543,
    "end": 544
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 545,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 553,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 560,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 568,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "Resolve",
    "start": 598,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "Head",
    "start": 608,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "String",
    "value": "\"states\"",
    "start": 614,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 625,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 653,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 673,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 689,
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
    "value": "type",
    "start": 696,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "Split",
    "start": 701,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 709,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 717,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 727,
    "end": 728
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 729,
    "end": 736
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 737,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 740,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "Head",
    "start": 746,
    "end": 750
  },
  {
    "type": "Template",
    "value": "}.${",
    "start": 750,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 754,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "Tail",
    "start": 760,
    "end": 764
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 764,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "Head",
    "start": 770,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "Tail",
    "start": 776,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 785,
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
    "value": ";",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 789,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "Children",
    "start": 794,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 803,
    "end": 804
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 805,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 813,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 824,
    "end": 825
  },
  {
    "type": "String",
    "value": "\"states\"",
    "start": 825,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 833,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 835,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 843,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 850,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 858,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 869,
    "end": 870
  },
  {
    "type": "String",
    "value": "\"states\"",
    "start": 870,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 882,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 889,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 897,
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
    "value": ";",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 906,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "NeedsRecord",
    "start": 911,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 923,
    "end": 924
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 925,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 933,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 940,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 948,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 962,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "ChildrenAt",
    "start": 967,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 978,
    "end": 979
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 980,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 988,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 995,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 1003,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1014,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1022,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "NeedsRecord",
    "start": 1032,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "Children",
    "start": 1044,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "Resolve",
    "start": 1053,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "Split",
    "start": 1064,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1075,
    "end": 1076
  }
]
```

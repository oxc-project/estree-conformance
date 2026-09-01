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
        "name": "T00",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "prop",
              "raw": "\"prop\"",
              "start": 11,
              "end": 17
            },
            "start": 11,
            "end": 17
          },
          {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "p",
                  "cooked": "p"
                },
                "tail": false,
                "start": 20,
                "end": 24
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "p",
                  "cooked": "p"
                },
                "tail": true,
                "start": 41,
                "end": 44
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Lowercase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 24,
                  "end": 33
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 34,
                      "end": 40
                    }
                  ],
                  "start": 33,
                  "end": 41
                },
                "start": 24,
                "end": 41
              }
            ],
            "start": 20,
            "end": 44
          }
        ],
        "start": 11,
        "end": 44
      },
      "declare": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 83
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "prop",
              "raw": "\"prop\"",
              "start": 86,
              "end": 92
            },
            "start": 86,
            "end": 92
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Lowercase",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 104
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 105,
                  "end": 111
                }
              ],
              "start": 104,
              "end": 112
            },
            "start": 95,
            "end": 112
          }
        ],
        "start": 86,
        "end": 112
      },
      "declare": false,
      "start": 75,
      "end": 113
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 144
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "PROP",
              "raw": "\"PROP\"",
              "start": 147,
              "end": 153
            },
            "start": 147,
            "end": 153
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Lowercase",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 165
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 166,
                  "end": 172
                }
              ],
              "start": 165,
              "end": 173
            },
            "start": 156,
            "end": 173
          }
        ],
        "start": 147,
        "end": 173
      },
      "declare": false,
      "start": 136,
      "end": 174
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 212,
        "end": 215
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "prop",
              "raw": "\"prop\"",
              "start": 218,
              "end": 224
            },
            "start": 218,
            "end": 224
          },
          {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "p",
                  "cooked": "p"
                },
                "tail": false,
                "start": 227,
                "end": 231
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "p",
                  "cooked": "p"
                },
                "tail": true,
                "start": 248,
                "end": 251
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Lowercase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 240
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 241,
                      "end": 247
                    }
                  ],
                  "start": 240,
                  "end": 248
                },
                "start": 231,
                "end": 248
              }
            ],
            "start": 227,
            "end": 251
          }
        ],
        "start": 218,
        "end": 251
      },
      "declare": false,
      "start": 207,
      "end": 252
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 269,
        "end": 272
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "prop",
              "raw": "\"prop\"",
              "start": 275,
              "end": 281
            },
            "start": 275,
            "end": 281
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Lowercase",
              "optional": false,
              "typeAnnotation": null,
              "start": 284,
              "end": 293
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 294,
                  "end": 300
                }
              ],
              "start": 293,
              "end": 301
            },
            "start": 284,
            "end": 301
          }
        ],
        "start": 275,
        "end": 301
      },
      "declare": false,
      "start": 264,
      "end": 302
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 319,
        "end": 322
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "PROP",
              "raw": "\"PROP\"",
              "start": 325,
              "end": 331
            },
            "start": 325,
            "end": 331
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Lowercase",
              "optional": false,
              "typeAnnotation": null,
              "start": 334,
              "end": 343
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 344,
                  "end": 350
                }
              ],
              "start": 343,
              "end": 351
            },
            "start": 334,
            "end": 351
          }
        ],
        "start": 325,
        "end": 351
      },
      "declare": false,
      "start": 314,
      "end": 352
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null,
        "start": 369,
        "end": 372
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "prop",
              "raw": "\"prop\"",
              "start": 375,
              "end": 381
            },
            "start": 375,
            "end": 381
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Capitalize",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 394
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 395,
                  "end": 401
                }
              ],
              "start": 394,
              "end": 402
            },
            "start": 384,
            "end": 402
          }
        ],
        "start": 375,
        "end": 402
      },
      "declare": false,
      "start": 364,
      "end": 403
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null,
        "start": 441,
        "end": 444
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "Prop",
              "raw": "\"Prop\"",
              "start": 447,
              "end": 453
            },
            "start": 447,
            "end": 453
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Capitalize",
              "optional": false,
              "typeAnnotation": null,
              "start": 456,
              "end": 466
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 467,
                  "end": 473
                }
              ],
              "start": 466,
              "end": 474
            },
            "start": 456,
            "end": 474
          }
        ],
        "start": 447,
        "end": 474
      },
      "declare": false,
      "start": 436,
      "end": 475
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T22",
        "optional": false,
        "typeAnnotation": null,
        "start": 504,
        "end": 507
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "PROP",
              "raw": "\"PROP\"",
              "start": 510,
              "end": 516
            },
            "start": 510,
            "end": 516
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Capitalize",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 529
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 530,
                  "end": 536
                }
              ],
              "start": 529,
              "end": 537
            },
            "start": 519,
            "end": 537
          }
        ],
        "start": 510,
        "end": 537
      },
      "declare": false,
      "start": 499,
      "end": 538
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T30",
        "optional": false,
        "typeAnnotation": null,
        "start": 568,
        "end": 571
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "prop",
              "raw": "\"prop\"",
              "start": 574,
              "end": 580
            },
            "start": 574,
            "end": 580
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Capitalize",
              "optional": false,
              "typeAnnotation": null,
              "start": 583,
              "end": 593
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 594,
                  "end": 600
                }
              ],
              "start": 593,
              "end": 601
            },
            "start": 583,
            "end": 601
          }
        ],
        "start": 574,
        "end": 601
      },
      "declare": false,
      "start": 563,
      "end": 602
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T31",
        "optional": false,
        "typeAnnotation": null,
        "start": 618,
        "end": 621
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "Prop",
              "raw": "\"Prop\"",
              "start": 624,
              "end": 630
            },
            "start": 624,
            "end": 630
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Capitalize",
              "optional": false,
              "typeAnnotation": null,
              "start": 633,
              "end": 643
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 644,
                  "end": 650
                }
              ],
              "start": 643,
              "end": 651
            },
            "start": 633,
            "end": 651
          }
        ],
        "start": 624,
        "end": 651
      },
      "declare": false,
      "start": 613,
      "end": 652
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T32",
        "optional": false,
        "typeAnnotation": null,
        "start": 669,
        "end": 672
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "PROP",
              "raw": "\"PROP\"",
              "start": 675,
              "end": 681
            },
            "start": 675,
            "end": 681
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Capitalize",
              "optional": false,
              "typeAnnotation": null,
              "start": 684,
              "end": 694
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 695,
                  "end": 701
                }
              ],
              "start": 694,
              "end": 702
            },
            "start": 684,
            "end": 702
          }
        ],
        "start": 675,
        "end": 702
      },
      "declare": false,
      "start": 664,
      "end": 703
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 743,
        "end": 747
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
              "name": "event",
              "optional": false,
              "typeAnnotation": null,
              "start": 752,
              "end": 757
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 759,
                "end": 761
              },
              "start": 757,
              "end": 761
            },
            "accessibility": null,
            "static": false,
            "start": 752,
            "end": 761
          }
        ],
        "start": 750,
        "end": 763
      },
      "declare": false,
      "start": 738,
      "end": 763
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Keys",
        "optional": false,
        "typeAnnotation": null,
        "start": 769,
        "end": 773
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
            "name": "EMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 782,
            "end": 786
          },
          "typeArguments": null,
          "start": 782,
          "end": 786
        },
        "start": 776,
        "end": 786
      },
      "declare": false,
      "start": 764,
      "end": 786
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EPlusFallback",
        "optional": false,
        "typeAnnotation": null,
        "start": 792,
        "end": 805
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 806,
              "end": 807
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 806,
            "end": 807
          }
        ],
        "start": 805,
        "end": 808
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 811,
            "end": 812
          },
          "typeArguments": null,
          "start": 811,
          "end": 812
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Keys",
            "optional": false,
            "typeAnnotation": null,
            "start": 821,
            "end": 825
          },
          "typeArguments": null,
          "start": 821,
          "end": 825
        },
        "trueType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "EMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 828,
              "end": 832
            },
            "typeArguments": null,
            "start": 828,
            "end": 832
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 833,
              "end": 834
            },
            "typeArguments": null,
            "start": 833,
            "end": 834
          },
          "start": 828,
          "end": 835
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "unrecognised event",
            "raw": "\"unrecognised event\"",
            "start": 838,
            "end": 858
          },
          "start": 838,
          "end": 858
        },
        "start": 811,
        "end": 858
      },
      "declare": false,
      "start": 787,
      "end": 859
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VirtualEvent",
        "optional": false,
        "typeAnnotation": null,
        "start": 865,
        "end": 877
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
              "start": 878,
              "end": 879
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 888,
              "end": 894
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 878,
            "end": 894
          }
        ],
        "start": 877,
        "end": 895
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bivarianceHack",
                "optional": false,
                "typeAnnotation": null,
                "start": 900,
                "end": 914
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "event",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "EPlusFallback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 922,
                        "end": 935
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Lowercase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 936,
                              "end": 945
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
                                    "start": 946,
                                    "end": 947
                                  },
                                  "typeArguments": null,
                                  "start": 946,
                                  "end": 947
                                }
                              ],
                              "start": 945,
                              "end": 948
                            },
                            "start": 936,
                            "end": 948
                          }
                        ],
                        "start": 935,
                        "end": 949
                      },
                      "start": 922,
                      "end": 949
                    },
                    "start": 920,
                    "end": 949
                  },
                  "start": 915,
                  "end": 949
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 952,
                  "end": 955
                },
                "start": 950,
                "end": 955
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 900,
              "end": 956
            }
          ],
          "start": 898,
          "end": 958
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "bivarianceHack",
            "raw": "'bivarianceHack'",
            "start": 959,
            "end": 975
          },
          "start": 959,
          "end": 975
        },
        "start": 898,
        "end": 976
      },
      "declare": false,
      "start": 860,
      "end": 977
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
            "name": "_virtualOn",
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
                    "name": "eventQrl",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "VirtualEvent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1015,
                          "end": 1027
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Keys",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1028,
                                "end": 1032
                              },
                              "typeArguments": null,
                              "start": 1028,
                              "end": 1032
                            }
                          ],
                          "start": 1027,
                          "end": 1033
                        },
                        "start": 1015,
                        "end": 1033
                      },
                      "start": 1013,
                      "end": 1033
                    },
                    "start": 1005,
                    "end": 1033
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1038,
                    "end": 1042
                  },
                  "start": 1035,
                  "end": 1042
                },
                "start": 1004,
                "end": 1042
              },
              "start": 1002,
              "end": 1042
            },
            "start": 992,
            "end": 1042
          },
          "init": null,
          "definite": false,
          "start": 992,
          "end": 1042
        }
      ],
      "declare": true,
      "start": 978,
      "end": 1043
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "virtualOn",
              "optional": false,
              "typeAnnotation": null,
              "start": 1057,
              "end": 1066
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
                      "start": 1070,
                      "end": 1071
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 1080,
                      "end": 1086
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1070,
                    "end": 1086
                  }
                ],
                "start": 1069,
                "end": 1087
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "eventQrl",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "VirtualEvent",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1098,
                        "end": 1110
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
                              "start": 1111,
                              "end": 1112
                            },
                            "typeArguments": null,
                            "start": 1111,
                            "end": 1112
                          }
                        ],
                        "start": 1110,
                        "end": 1113
                      },
                      "start": 1098,
                      "end": 1113
                    },
                    "start": 1096,
                    "end": 1113
                  },
                  "start": 1088,
                  "end": 1113
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
                        "name": "_virtualOn",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1124,
                        "end": 1134
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "eventQrl",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1135,
                          "end": 1143
                        }
                      ],
                      "optional": false,
                      "start": 1124,
                      "end": 1144
                    },
                    "directive": null,
                    "start": 1124,
                    "end": 1145
                  }
                ],
                "start": 1118,
                "end": 1147
              },
              "id": null,
              "generator": false,
              "start": 1069,
              "end": 1147
            },
            "definite": false,
            "start": 1057,
            "end": 1147
          }
        ],
        "declare": false,
        "start": 1051,
        "end": 1148
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1044,
      "end": 1148
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1148
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
    "value": "T00",
    "start": 5,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10
  },
  {
    "type": "String",
    "value": "\"prop\"",
    "start": 11,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 18,
    "end": 19
  },
  {
    "type": "Template",
    "value": "`p${",
    "start": 20,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 24,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 40,
    "end": 41
  },
  {
    "type": "Template",
    "value": "}p`",
    "start": 41,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 75,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "T01",
    "start": 80,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 84,
    "end": 85
  },
  {
    "type": "String",
    "value": "\"prop\"",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 95,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "type",
    "start": 136,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "T02",
    "start": 141,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 145,
    "end": 146
  },
  {
    "type": "String",
    "value": "\"PROP\"",
    "start": 147,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 156,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 166,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 207,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 212,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 216,
    "end": 217
  },
  {
    "type": "String",
    "value": "\"prop\"",
    "start": 218,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 225,
    "end": 226
  },
  {
    "type": "Template",
    "value": "`p${",
    "start": 227,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 231,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 241,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 247,
    "end": 248
  },
  {
    "type": "Template",
    "value": "}p`",
    "start": 248,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 264,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 269,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 273,
    "end": 274
  },
  {
    "type": "String",
    "value": "\"prop\"",
    "start": 275,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 284,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "string",
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
    "value": ";",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 314,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "T12",
    "start": 319,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 323,
    "end": 324
  },
  {
    "type": "String",
    "value": "\"PROP\"",
    "start": 325,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 334,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 344,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 364,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "T20",
    "start": 369,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 373,
    "end": 374
  },
  {
    "type": "String",
    "value": "\"prop\"",
    "start": 375,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "Capitalize",
    "start": 384,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 395,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 401,
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
    "value": "type",
    "start": 436,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "T21",
    "start": 441,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 445,
    "end": 446
  },
  {
    "type": "String",
    "value": "\"Prop\"",
    "start": 447,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "Capitalize",
    "start": 456,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 467,
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
    "value": ";",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 499,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "T22",
    "start": 504,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 508,
    "end": 509
  },
  {
    "type": "String",
    "value": "\"PROP\"",
    "start": 510,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "Capitalize",
    "start": 519,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 530,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 563,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "T30",
    "start": 568,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 572,
    "end": 573
  },
  {
    "type": "String",
    "value": "\"prop\"",
    "start": 574,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "Capitalize",
    "start": 583,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 594,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "type",
    "start": 613,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "T31",
    "start": 618,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 622,
    "end": 623
  },
  {
    "type": "String",
    "value": "\"Prop\"",
    "start": 624,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "Capitalize",
    "start": 633,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 644,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 664,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "T32",
    "start": 669,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 673,
    "end": 674
  },
  {
    "type": "String",
    "value": "\"PROP\"",
    "start": 675,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "Capitalize",
    "start": 684,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 695,
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
    "value": ";",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 738,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "EMap",
    "start": 743,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 752,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 764,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 769,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 776,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "EMap",
    "start": 782,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 787,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "EPlusFallback",
    "start": 792,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 811,
    "end": 812
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 813,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 821,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "EMap",
    "start": 828,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 836,
    "end": 837
  },
  {
    "type": "String",
    "value": "\"unrecognised event\"",
    "start": 838,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 860,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "VirtualEvent",
    "start": 865,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 878,
    "end": 879
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 880,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 888,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "bivarianceHack",
    "start": 900,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 915,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "EPlusFallback",
    "start": 922,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 936,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "any",
    "start": 952,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 958,
    "end": 959
  },
  {
    "type": "String",
    "value": "'bivarianceHack'",
    "start": 959,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 978,
    "end": 985
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 986,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "_virtualOn",
    "start": 992,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "eventQrl",
    "start": 1005,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "VirtualEvent",
    "start": 1015,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 1028,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1035,
    "end": 1037
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1038,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1044,
    "end": 1050
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1051,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "virtualOn",
    "start": 1057,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1072,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1080,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "eventQrl",
    "start": 1088,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "VirtualEvent",
    "start": 1098,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1115,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "_virtualOn",
    "start": 1124,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "eventQrl",
    "start": 1135,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1147,
    "end": 1148
  }
]
```

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
        "name": "Identifiable",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 74
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 81
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 83,
                "end": 89
              },
              "start": 81,
              "end": 89
            },
            "accessibility": null,
            "static": false,
            "start": 79,
            "end": 89
          }
        ],
        "start": 77,
        "end": 91
      },
      "declare": false,
      "start": 57,
      "end": 92
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EnableA",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 111
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "enableA",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 132
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 134,
                  "end": 138
                },
                "start": 134,
                "end": 138
              },
              "start": 132,
              "end": 138
            },
            "accessibility": null,
            "static": false,
            "start": 116,
            "end": 139
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "enableB",
              "optional": false,
              "typeAnnotation": null,
              "start": 302,
              "end": 309
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 311,
                  "end": 315
                },
                "start": 311,
                "end": 315
              },
              "start": 309,
              "end": 315
            },
            "accessibility": null,
            "static": false,
            "start": 293,
            "end": 316
          }
        ],
        "start": 112,
        "end": 318
      },
      "declare": false,
      "start": 94,
      "end": 318
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DisableA",
        "optional": false,
        "typeAnnotation": null,
        "start": 330,
        "end": 338
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "enableA",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 359
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 362,
                  "end": 367
                },
                "start": 362,
                "end": 367
              },
              "start": 360,
              "end": 367
            },
            "accessibility": null,
            "static": false,
            "start": 343,
            "end": 368
          }
        ],
        "start": 339,
        "end": 370
      },
      "declare": false,
      "start": 320,
      "end": 370
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EnableB",
        "optional": false,
        "typeAnnotation": null,
        "start": 382,
        "end": 389
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "enableB",
              "optional": false,
              "typeAnnotation": null,
              "start": 403,
              "end": 410
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 413,
                  "end": 417
                },
                "start": 413,
                "end": 417
              },
              "start": 411,
              "end": 417
            },
            "accessibility": null,
            "static": false,
            "start": 394,
            "end": 418
          }
        ],
        "start": 390,
        "end": 420
      },
      "declare": false,
      "start": 372,
      "end": 420
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DisableB",
        "optional": false,
        "typeAnnotation": null,
        "start": 432,
        "end": 440
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "enableB",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 461
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 463,
                  "end": 468
                },
                "start": 463,
                "end": 468
              },
              "start": 461,
              "end": 468
            },
            "accessibility": null,
            "static": false,
            "start": 445,
            "end": 469
          }
        ],
        "start": 441,
        "end": 471
      },
      "declare": false,
      "start": 422,
      "end": 471
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "EnableD",
          "optional": false,
          "typeAnnotation": null,
          "start": 490,
          "end": 497
        },
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
                "start": 498,
                "end": 499
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Identifiable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 508,
                  "end": 520
                },
                "typeArguments": null,
                "start": 508,
                "end": 520
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 498,
              "end": 520
            }
          ],
          "start": 497,
          "end": 521
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "enableD",
                "optional": false,
                "typeAnnotation": null,
                "start": 535,
                "end": 542
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 544,
                    "end": 548
                  },
                  "start": 544,
                  "end": 548
                },
                "start": 542,
                "end": 548
              },
              "accessibility": null,
              "static": false,
              "start": 526,
              "end": 549
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 561,
                "end": 566
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 568,
                          "end": 569
                        },
                        "typeArguments": null,
                        "start": 568,
                        "end": 569
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "id",
                          "raw": "\"id\"",
                          "start": 570,
                          "end": 574
                        },
                        "start": 570,
                        "end": 574
                      },
                      "start": 568,
                      "end": 575
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 578,
                      "end": 582
                    }
                  ],
                  "start": 568,
                  "end": 582
                },
                "start": 566,
                "end": 582
              },
              "accessibility": null,
              "static": false,
              "start": 552,
              "end": 583
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "setItem",
                "optional": false,
                "typeAnnotation": null,
                "start": 595,
                "end": 602
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
                      "name": "item",
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
                                "name": "I",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 611,
                                "end": 612
                              },
                              "typeArguments": null,
                              "start": 611,
                              "end": 612
                            },
                            {
                              "type": "TSNullKeyword",
                              "start": 615,
                              "end": 619
                            }
                          ],
                          "start": 611,
                          "end": 619
                        },
                        "start": 609,
                        "end": 619
                      },
                      "start": 605,
                      "end": 619
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 624,
                      "end": 628
                    },
                    "start": 621,
                    "end": 628
                  },
                  "start": 604,
                  "end": 628
                },
                "start": 602,
                "end": 628
              },
              "accessibility": null,
              "static": false,
              "start": 586,
              "end": 629
            }
          ],
          "start": 522,
          "end": 631
        },
        "declare": false,
        "start": 480,
        "end": 631
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 473,
      "end": 631
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "DisableD",
          "optional": false,
          "typeAnnotation": null,
          "start": 650,
          "end": 658
        },
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
                "start": 659,
                "end": 660
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Identifiable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 669,
                  "end": 681
                },
                "typeArguments": null,
                "start": 669,
                "end": 681
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 659,
              "end": 681
            }
          ],
          "start": 658,
          "end": 682
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "enableD",
                "optional": false,
                "typeAnnotation": null,
                "start": 696,
                "end": 703
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 705,
                    "end": 710
                  },
                  "start": 705,
                  "end": 710
                },
                "start": 703,
                "end": 710
              },
              "accessibility": null,
              "static": false,
              "start": 687,
              "end": 711
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 723,
                "end": 728
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 730,
                      "end": 731
                    },
                    "typeArguments": null,
                    "start": 730,
                    "end": 731
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "id",
                      "raw": "\"id\"",
                      "start": 732,
                      "end": 736
                    },
                    "start": 732,
                    "end": 736
                  },
                  "start": 730,
                  "end": 737
                },
                "start": 728,
                "end": 737
              },
              "accessibility": null,
              "static": false,
              "start": 714,
              "end": 738
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "setItem",
                "optional": false,
                "typeAnnotation": null,
                "start": 750,
                "end": 757
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
                      "name": "item",
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
                            "start": 766,
                            "end": 767
                          },
                          "typeArguments": null,
                          "start": 766,
                          "end": 767
                        },
                        "start": 764,
                        "end": 767
                      },
                      "start": 760,
                      "end": 767
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 772,
                      "end": 776
                    },
                    "start": 769,
                    "end": 776
                  },
                  "start": 759,
                  "end": 776
                },
                "start": 757,
                "end": 776
              },
              "accessibility": null,
              "static": false,
              "start": 741,
              "end": 777
            }
          ],
          "start": 683,
          "end": 779
        },
        "declare": false,
        "start": 640,
        "end": 779
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 633,
      "end": 779
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComponentProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 786,
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
              "name": "I",
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
                "name": "Identifiable",
                "optional": false,
                "typeAnnotation": null,
                "start": 813,
                "end": 825
              },
              "typeArguments": null,
              "start": 813,
              "end": 825
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 803,
            "end": 825
          }
        ],
        "start": 802,
        "end": 826
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EnableA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 830,
                  "end": 837
                },
                "typeArguments": null,
                "start": 830,
                "end": 837
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DisableA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 840,
                  "end": 848
                },
                "typeArguments": null,
                "start": 840,
                "end": 848
              }
            ],
            "start": 830,
            "end": 848
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EnableB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 855,
                  "end": 862
                },
                "typeArguments": null,
                "start": 855,
                "end": 862
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DisableB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 865,
                  "end": 873
                },
                "typeArguments": null,
                "start": 865,
                "end": 873
              }
            ],
            "start": 855,
            "end": 873
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DisableD",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 880,
                  "end": 888
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 889,
                        "end": 890
                      },
                      "typeArguments": null,
                      "start": 889,
                      "end": 890
                    }
                  ],
                  "start": 888,
                  "end": 891
                },
                "start": 880,
                "end": 891
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EnableD",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 894,
                  "end": 901
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 902,
                        "end": 903
                      },
                      "typeArguments": null,
                      "start": 902,
                      "end": 903
                    }
                  ],
                  "start": 901,
                  "end": 904
                },
                "start": 894,
                "end": 904
              }
            ],
            "start": 880,
            "end": 904
          }
        ],
        "start": 829,
        "end": 905
      },
      "declare": false,
      "start": 781,
      "end": 906
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
            "name": "MyComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 914,
            "end": 925
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
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 929,
                    "end": 930
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Identifiable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 939,
                      "end": 951
                    },
                    "typeArguments": null,
                    "start": 939,
                    "end": 951
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 929,
                  "end": 951
                }
              ],
              "start": 928,
              "end": 952
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
                      "name": "MyComponentProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 960,
                      "end": 976
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "I",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 977,
                            "end": 978
                          },
                          "typeArguments": null,
                          "start": 977,
                          "end": 978
                        }
                      ],
                      "start": 976,
                      "end": 979
                    },
                    "start": 960,
                    "end": 979
                  },
                  "start": 958,
                  "end": 979
                },
                "start": 953,
                "end": 979
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 984,
              "end": 986
            },
            "id": null,
            "generator": false,
            "start": 928,
            "end": 986
          },
          "definite": false,
          "start": 914,
          "end": 986
        }
      ],
      "declare": false,
      "start": 908,
      "end": 987
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
            "name": "item",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1009,
                    "end": 1015
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 1018,
                    "end": 1022
                  }
                ],
                "start": 1009,
                "end": 1022
              },
              "start": 1007,
              "end": 1022
            },
            "start": 1003,
            "end": 1022
          },
          "init": null,
          "definite": false,
          "start": 1003,
          "end": 1022
        }
      ],
      "declare": true,
      "start": 989,
      "end": 1023
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyComponent",
          "optional": false,
          "typeAnnotation": null,
          "start": 1025,
          "end": 1036
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
                  "name": "enableD",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1041,
                  "end": 1048
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1050,
                  "end": 1054
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1041,
                "end": 1054
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1058,
                  "end": 1063
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "item",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1065,
                  "end": 1069
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1058,
                "end": 1069
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "setItem",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1073,
                  "end": 1080
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
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1083,
                      "end": 1087
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1092,
                    "end": 1094
                  },
                  "id": null,
                  "generator": false,
                  "start": 1082,
                  "end": 1094
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1073,
                "end": 1094
              }
            ],
            "start": 1037,
            "end": 1097
          }
        ],
        "optional": false,
        "start": 1025,
        "end": 1098
      },
      "directive": null,
      "start": 1025,
      "end": 1099
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 1099
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
    "value": "Identifiable",
    "start": 62,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 79,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 83,
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
    "type": "Keyword",
    "value": "interface",
    "start": 94,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "EnableA",
    "start": 104,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 116,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "enableA",
    "start": 125,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 134,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 293,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "enableB",
    "start": 302,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 309,
    "end": 310
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 311,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 320,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "DisableA",
    "start": 330,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 343,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "enableA",
    "start": 352,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Boolean",
    "value": "false",
    "start": 362,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 369,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 372,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "EnableB",
    "start": 382,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 394,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "enableB",
    "start": 403,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 413,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 422,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "DisableB",
    "start": 432,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 445,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "enableB",
    "start": 454,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 461,
    "end": 462
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 463,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 473,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 480,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "EnableD",
    "start": 490,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 498,
    "end": 499
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 500,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "Identifiable",
    "start": 508,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 526,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "enableD",
    "start": 535,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 542,
    "end": 543
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 544,
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
    "value": "readonly",
    "start": 552,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 561,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 569,
    "end": 570
  },
  {
    "type": "String",
    "value": "\"id\"",
    "start": 570,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 576,
    "end": 577
  },
  {
    "type": "Null",
    "value": "null",
    "start": 578,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 586,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "setItem",
    "start": 595,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 605,
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
    "value": "I",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 613,
    "end": 614
  },
  {
    "type": "Null",
    "value": "null",
    "start": 615,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 621,
    "end": 623
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 624,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 633,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 640,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "DisableD",
    "start": 650,
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
    "value": "I",
    "start": 659,
    "end": 660
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 661,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "Identifiable",
    "start": 669,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 687,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "enableD",
    "start": 696,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 703,
    "end": 704
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 705,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 714,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 723,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 731,
    "end": 732
  },
  {
    "type": "String",
    "value": "\"id\"",
    "start": 732,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 741,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "setItem",
    "start": 750,
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
    "value": "(",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 760,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 769,
    "end": 771
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 772,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 781,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "MyComponentProps",
    "start": 786,
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
    "value": "I",
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
    "value": "Identifiable",
    "start": 813,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "EnableA",
    "start": 830,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "DisableA",
    "start": 840,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "EnableB",
    "start": 855,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "DisableB",
    "start": 865,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "DisableD",
    "start": 880,
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
    "value": "I",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "EnableD",
    "start": 894,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 902,
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
    "value": ")",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 905,
    "end": 906
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 908,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "MyComponent",
    "start": 914,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 929,
    "end": 930
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 931,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "Identifiable",
    "start": 939,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 953,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "MyComponentProps",
    "start": 960,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 981,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 986,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 989,
    "end": 996
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 997,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1003,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1009,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1018,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "MyComponent",
    "start": 1025,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "enableD",
    "start": 1041,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1050,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1058,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1065,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "setItem",
    "start": 1073,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1083,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1089,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1098,
    "end": 1099
  }
]
```

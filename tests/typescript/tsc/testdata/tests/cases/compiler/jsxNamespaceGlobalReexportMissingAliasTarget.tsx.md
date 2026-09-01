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
        "name": "Defaultize",
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
              "name": "Props",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 21
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 21
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Defaults",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 31
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 23,
            "end": 31
          }
        ],
        "start": 15,
        "end": 32
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Props",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 68
          },
          "typeArguments": null,
          "start": 63,
          "end": 68
        },
        "extendsType": {
          "type": "TSAnyKeyword",
          "start": 77,
          "end": 80
        },
        "trueType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 144
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 149
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 150,
                            "end": 155
                          },
                          "typeArguments": null,
                          "start": 150,
                          "end": 155
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Extract",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 157,
                            "end": 164
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Props",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 171,
                                    "end": 176
                                  },
                                  "typeArguments": null,
                                  "start": 171,
                                  "end": 176
                                },
                                "start": 165,
                                "end": 176
                              },
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Defaults",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 184,
                                    "end": 192
                                  },
                                  "typeArguments": null,
                                  "start": 184,
                                  "end": 192
                                },
                                "start": 178,
                                "end": 192
                              }
                            ],
                            "start": 164,
                            "end": 193
                          },
                          "start": 157,
                          "end": 193
                        }
                      ],
                      "start": 149,
                      "end": 194
                    },
                    "start": 145,
                    "end": 194
                  }
                ],
                "start": 144,
                "end": 195
              },
              "start": 137,
              "end": 195
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "typeAnnotation": null,
                "start": 253,
                "end": 257
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 258,
                      "end": 263
                    },
                    "typeArguments": null,
                    "start": 258,
                    "end": 263
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Exclude",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 265,
                      "end": 272
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Props",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 279,
                              "end": 284
                            },
                            "typeArguments": null,
                            "start": 279,
                            "end": 284
                          },
                          "start": 273,
                          "end": 284
                        },
                        {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Defaults",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 292,
                              "end": 300
                            },
                            "typeArguments": null,
                            "start": 292,
                            "end": 300
                          },
                          "start": 286,
                          "end": 300
                        }
                      ],
                      "start": 272,
                      "end": 301
                    },
                    "start": 265,
                    "end": 301
                  }
                ],
                "start": 257,
                "end": 302
              },
              "start": 253,
              "end": 302
            }
          ],
          "start": 137,
          "end": 302
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 307,
          "end": 312
        },
        "start": 63,
        "end": 312
      },
      "declare": false,
      "start": 0,
      "end": 313
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JSXInternal",
          "optional": false,
          "typeAnnotation": null,
          "start": 331,
          "end": 342
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "HTMLAttributes",
                "optional": false,
                "typeAnnotation": null,
                "start": 359,
                "end": 373
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
                      "start": 374,
                      "end": 375
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 378,
                      "end": 380
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 374,
                    "end": 380
                  }
                ],
                "start": 373,
                "end": 381
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 382,
                "end": 385
              },
              "declare": false,
              "start": 349,
              "end": 385
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "SVGAttributes",
                "optional": false,
                "typeAnnotation": null,
                "start": 400,
                "end": 413
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
                      "start": 414,
                      "end": 415
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 418,
                      "end": 420
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 414,
                    "end": 420
                  }
                ],
                "start": 413,
                "end": 421
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 422,
                "end": 425
              },
              "declare": false,
              "start": 390,
              "end": 425
            },
            {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "LibraryManagedAttributes",
                "optional": false,
                "typeAnnotation": null,
                "start": 435,
                "end": 459
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Component",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 460,
                      "end": 469
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 460,
                    "end": 469
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 471,
                      "end": 476
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 471,
                    "end": 476
                  }
                ],
                "start": 459,
                "end": 477
              },
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Component",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 480,
                    "end": 489
                  },
                  "typeArguments": null,
                  "start": 480,
                  "end": 489
                },
                "extendsType": {
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
                        "name": "defaultProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 508,
                        "end": 520
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
                              "name": "Defaults",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 528,
                              "end": 536
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 528,
                            "end": 536
                          },
                          "start": 522,
                          "end": 536
                        },
                        "start": 520,
                        "end": 536
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 508,
                      "end": 537
                    }
                  ],
                  "start": 498,
                  "end": 543
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Defaultize",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 554,
                    "end": 564
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 565,
                          "end": 570
                        },
                        "typeArguments": null,
                        "start": 565,
                        "end": 570
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Defaults",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 572,
                          "end": 580
                        },
                        "typeArguments": null,
                        "start": 572,
                        "end": 580
                      }
                    ],
                    "start": 564,
                    "end": 581
                  },
                  "start": 554,
                  "end": 581
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 592,
                    "end": 597
                  },
                  "typeArguments": null,
                  "start": 592,
                  "end": 597
                },
                "start": 480,
                "end": 597
              },
              "declare": false,
              "start": 430,
              "end": 598
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IntrinsicAttributes",
                "optional": false,
                "typeAnnotation": null,
                "start": 614,
                "end": 633
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
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 644,
                      "end": 647
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 650,
                        "end": 653
                      },
                      "start": 648,
                      "end": 653
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 644,
                    "end": 654
                  }
                ],
                "start": 634,
                "end": 660
              },
              "declare": false,
              "start": 604,
              "end": 660
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 676,
                "end": 683
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "VNode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 692,
                    "end": 697
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 698,
                        "end": 701
                      }
                    ],
                    "start": 697,
                    "end": 702
                  },
                  "start": 692,
                  "end": 702
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 703,
                "end": 706
              },
              "declare": false,
              "start": 666,
              "end": 706
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 722,
                "end": 734
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Component",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 743,
                    "end": 752
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 753,
                        "end": 756
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 758,
                        "end": 761
                      }
                    ],
                    "start": 752,
                    "end": 762
                  },
                  "start": 743,
                  "end": 762
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 763,
                "end": 766
              },
              "declare": false,
              "start": 712,
              "end": 766
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementAttributesProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 782,
                "end": 807
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
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 818,
                      "end": 823
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 825,
                        "end": 828
                      },
                      "start": 823,
                      "end": 828
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 818,
                    "end": 829
                  }
                ],
                "start": 808,
                "end": 835
              },
              "declare": false,
              "start": 772,
              "end": 835
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementChildrenAttribute",
                "optional": false,
                "typeAnnotation": null,
                "start": 851,
                "end": 875
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
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 886,
                      "end": 894
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 896,
                        "end": 899
                      },
                      "start": 894,
                      "end": 899
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 886,
                    "end": 900
                  }
                ],
                "start": 876,
                "end": 906
              },
              "declare": false,
              "start": 841,
              "end": 906
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IntrinsicElements",
                "optional": false,
                "typeAnnotation": null,
                "start": 922,
                "end": 939
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
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "div",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 950,
                      "end": 953
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "HTMLAttributes",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 955,
                          "end": 969
                        },
                        "typeArguments": null,
                        "start": 955,
                        "end": 969
                      },
                      "start": 953,
                      "end": 969
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 950,
                    "end": 970
                  }
                ],
                "start": 940,
                "end": 976
              },
              "declare": false,
              "start": 912,
              "end": 976
            }
          ],
          "start": 343,
          "end": 978
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 321,
        "end": 978
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 314,
      "end": 978
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
              "name": "Fragment",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 1009,
                    "end": 1015
                  },
                  "start": 1002,
                  "end": 1015
                },
                "start": 1000,
                "end": 1015
              },
              "start": 992,
              "end": 1015
            },
            "init": null,
            "definite": false,
            "start": 992,
            "end": 1015
          }
        ],
        "declare": false,
        "start": 986,
        "end": 1016
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 979,
      "end": 1016
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1029,
          "end": 1042
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
                "start": 1043,
                "end": 1044
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 1047,
                "end": 1049
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1043,
              "end": 1049
            }
          ],
          "start": 1042,
          "end": 1050
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 1053,
          "end": 1055
        },
        "declare": false,
        "start": 1024,
        "end": 1056
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1017,
      "end": 1056
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentChild",
          "optional": false,
          "typeAnnotation": null,
          "start": 1069,
          "end": 1083
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 1086,
          "end": 1088
        },
        "declare": false,
        "start": 1064,
        "end": 1089
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1057,
      "end": 1089
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentChildren",
          "optional": false,
          "typeAnnotation": null,
          "start": 1102,
          "end": 1119
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 1122,
          "end": 1124
        },
        "declare": false,
        "start": 1097,
        "end": 1125
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1090,
      "end": 1125
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "VNode",
          "optional": false,
          "typeAnnotation": null,
          "start": 1138,
          "end": 1143
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
                "start": 1144,
                "end": 1145
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 1148,
                "end": 1150
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1144,
              "end": 1150
            }
          ],
          "start": 1143,
          "end": 1151
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 1154,
          "end": 1156
        },
        "declare": false,
        "start": 1133,
        "end": 1157
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1126,
      "end": 1157
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Attributes",
          "optional": false,
          "typeAnnotation": null,
          "start": 1170,
          "end": 1180
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 1183,
          "end": 1185
        },
        "declare": false,
        "start": 1165,
        "end": 1186
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1158,
      "end": 1186
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 1199,
          "end": 1208
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
                "start": 1209,
                "end": 1210
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 1213,
                "end": 1215
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1209,
              "end": 1215
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1217,
                "end": 1218
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 1221,
                "end": 1223
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1217,
              "end": 1223
            }
          ],
          "start": 1208,
          "end": 1224
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 1227,
          "end": 1229
        },
        "declare": false,
        "start": 1194,
        "end": 1230
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1187,
      "end": 1230
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1230
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
    "value": "Defaultize",
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
    "value": "Props",
    "start": 16,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "Defaults",
    "start": 23,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 31,
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
    "value": "Props",
    "start": 63,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 69,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 77,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 137,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 145,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 150,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 157,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 165,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 171,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 178,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "Defaults",
    "start": 184,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 193,
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
    "value": "&",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 253,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 258,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 265,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 273,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 279,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 286,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "Defaults",
    "start": 292,
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
    "value": ">",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 307,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 314,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 321,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "JSXInternal",
    "start": 331,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 343,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 349,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "HTMLAttributes",
    "start": 359,
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
    "value": "T",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 390,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "SVGAttributes",
    "start": 400,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Punctuator",
    "value": "{",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 430,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "LibraryManagedAttributes",
    "start": 435,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 460,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 471,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 480,
    "end": 489
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 490,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 508,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 522,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "Defaults",
    "start": 528,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "Defaultize",
    "start": 554,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 565,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "Defaults",
    "start": 572,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 592,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 597,
    "end": 598
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 604,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "IntrinsicAttributes",
    "start": 614,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 644,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 650,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 659,
    "end": 660
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 666,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 676,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 684,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "VNode",
    "start": 692,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 698,
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
    "value": "{",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 705,
    "end": 706
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 712,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "ElementClass",
    "start": 722,
    "end": 734
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 735,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 743,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 753,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 758,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 765,
    "end": 766
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 772,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "ElementAttributesProperty",
    "start": 782,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 818,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 825,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 834,
    "end": 835
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 841,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "ElementChildrenAttribute",
    "start": 851,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 886,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 896,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 905,
    "end": 906
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 912,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 922,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "div",
    "start": 950,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "HTMLAttributes",
    "start": 955,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 977,
    "end": 978
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 979,
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
    "value": "Fragment",
    "start": 992,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1002,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1009,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1017,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1024,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 1029,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1057,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1064,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "ComponentChild",
    "start": 1069,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1090,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1097,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "ComponentChildren",
    "start": 1102,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1126,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1133,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "VNode",
    "start": 1138,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1158,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1165,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "Attributes",
    "start": 1170,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1187,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1194,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 1199,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1229,
    "end": 1230
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "exportKind": "value",
          "start": 9,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "..",
        "raw": "'..'",
        "start": 25,
        "end": 29
      },
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 30
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentType",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 57
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentType",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 57
          },
          "importKind": "value",
          "start": 44,
          "end": 57
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentChild",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 77
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentChild",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 77
          },
          "importKind": "value",
          "start": 63,
          "end": 77
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentChildren",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 100
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentChildren",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 100
          },
          "importKind": "value",
          "start": 83,
          "end": 100
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "VNode",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 111
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "VNode",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 111
          },
          "importKind": "value",
          "start": 106,
          "end": 111
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Attributes",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 127
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Attributes",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 127
          },
          "importKind": "value",
          "start": 117,
          "end": 127
        }
      ],
      "source": {
        "type": "Literal",
        "value": "..",
        "raw": "'..'",
        "start": 135,
        "end": 139
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 31,
      "end": 140
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "JSXInternal",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 161
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "JSXInternal",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 161
          },
          "importKind": "value",
          "start": 150,
          "end": 161
        }
      ],
      "source": {
        "type": "Literal",
        "value": "..",
        "raw": "'..'",
        "start": 169,
        "end": 173
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 141,
      "end": 174
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "jsx",
          "optional": false,
          "typeAnnotation": null,
          "start": 192,
          "end": 195
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 207,
                "end": 213
              },
              "start": 205,
              "end": 213
            },
            "start": 201,
            "end": 213
          },
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
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSXInternal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 226,
                        "end": 237
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "HTMLAttributes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 238,
                        "end": 252
                      },
                      "start": 226,
                      "end": 252
                    },
                    "typeArguments": null,
                    "start": 226,
                    "end": 252
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSXInternal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 263,
                        "end": 274
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SVGAttributes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 275,
                        "end": 288
                      },
                      "start": 263,
                      "end": 288
                    },
                    "typeArguments": null,
                    "start": 263,
                    "end": 288
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 305
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 306,
                          "end": 312
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 314,
                          "end": 317
                        }
                      ],
                      "start": 305,
                      "end": 318
                    },
                    "start": 299,
                    "end": 318
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
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 323,
                          "end": 331
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ComponentChild",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 334,
                              "end": 348
                            },
                            "typeArguments": null,
                            "start": 334,
                            "end": 348
                          },
                          "start": 332,
                          "end": 348
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 323,
                        "end": 348
                      }
                    ],
                    "start": 321,
                    "end": 350
                  }
                ],
                "start": 226,
                "end": 350
              },
              "start": 224,
              "end": 350
            },
            "start": 219,
            "end": 350
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 362,
                "end": 368
              },
              "start": 360,
              "end": 368
            },
            "start": 356,
            "end": 368
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "VNode",
              "optional": false,
              "typeAnnotation": null,
              "start": 372,
              "end": 377
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 378,
                  "end": 381
                }
              ],
              "start": 377,
              "end": 382
            },
            "start": 372,
            "end": 382
          },
          "start": 370,
          "end": 382
        },
        "body": null,
        "expression": false,
        "start": 183,
        "end": 383
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 176,
      "end": 383
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "jsx",
          "optional": false,
          "typeAnnotation": null,
          "start": 400,
          "end": 403
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "start": 404,
                "end": 405
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 404,
              "end": 405
            }
          ],
          "start": 403,
          "end": 406
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 418,
                  "end": 431
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
                        "start": 432,
                        "end": 433
                      },
                      "typeArguments": null,
                      "start": 432,
                      "end": 433
                    }
                  ],
                  "start": 431,
                  "end": 434
                },
                "start": 418,
                "end": 434
              },
              "start": 416,
              "end": 434
            },
            "start": 412,
            "end": 434
          },
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
                      "name": "Attributes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 447,
                      "end": 457
                    },
                    "typeArguments": null,
                    "start": 447,
                    "end": 457
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 460,
                      "end": 461
                    },
                    "typeArguments": null,
                    "start": 460,
                    "end": 461
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
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 466,
                          "end": 474
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ComponentChild",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 477,
                              "end": 491
                            },
                            "typeArguments": null,
                            "start": 477,
                            "end": 491
                          },
                          "start": 475,
                          "end": 491
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 466,
                        "end": 491
                      }
                    ],
                    "start": 464,
                    "end": 493
                  }
                ],
                "start": 447,
                "end": 493
              },
              "start": 445,
              "end": 493
            },
            "start": 440,
            "end": 493
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 505,
                "end": 511
              },
              "start": 503,
              "end": 511
            },
            "start": 499,
            "end": 511
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "VNode",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 520
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 521,
                  "end": 524
                }
              ],
              "start": 520,
              "end": 525
            },
            "start": 515,
            "end": 525
          },
          "start": 513,
          "end": 525
        },
        "body": null,
        "expression": false,
        "start": 391,
        "end": 526
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 384,
      "end": 526
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "jsxs",
          "optional": false,
          "typeAnnotation": null,
          "start": 544,
          "end": 548
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 560,
                "end": 566
              },
              "start": 558,
              "end": 566
            },
            "start": 554,
            "end": 566
          },
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
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSXInternal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 579,
                        "end": 590
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "HTMLAttributes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 591,
                        "end": 605
                      },
                      "start": 579,
                      "end": 605
                    },
                    "typeArguments": null,
                    "start": 579,
                    "end": 605
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSXInternal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 616,
                        "end": 627
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SVGAttributes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 628,
                        "end": 641
                      },
                      "start": 616,
                      "end": 641
                    },
                    "typeArguments": null,
                    "start": 616,
                    "end": 641
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 652,
                      "end": 658
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 659,
                          "end": 665
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 667,
                          "end": 670
                        }
                      ],
                      "start": 658,
                      "end": 671
                    },
                    "start": 652,
                    "end": 671
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
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 676,
                          "end": 684
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
                                "name": "ComponentChild",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 687,
                                "end": 701
                              },
                              "typeArguments": null,
                              "start": 687,
                              "end": 701
                            },
                            "start": 687,
                            "end": 703
                          },
                          "start": 685,
                          "end": 703
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 676,
                        "end": 703
                      }
                    ],
                    "start": 674,
                    "end": 705
                  }
                ],
                "start": 579,
                "end": 705
              },
              "start": 577,
              "end": 705
            },
            "start": 572,
            "end": 705
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 717,
                "end": 723
              },
              "start": 715,
              "end": 723
            },
            "start": 711,
            "end": 723
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "VNode",
              "optional": false,
              "typeAnnotation": null,
              "start": 727,
              "end": 732
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 733,
                  "end": 736
                }
              ],
              "start": 732,
              "end": 737
            },
            "start": 727,
            "end": 737
          },
          "start": 725,
          "end": 737
        },
        "body": null,
        "expression": false,
        "start": 535,
        "end": 738
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 528,
      "end": 738
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "jsxs",
          "optional": false,
          "typeAnnotation": null,
          "start": 755,
          "end": 759
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "start": 760,
                "end": 761
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 760,
              "end": 761
            }
          ],
          "start": 759,
          "end": 762
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 774,
                  "end": 787
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
                        "start": 788,
                        "end": 789
                      },
                      "typeArguments": null,
                      "start": 788,
                      "end": 789
                    }
                  ],
                  "start": 787,
                  "end": 790
                },
                "start": 774,
                "end": 790
              },
              "start": 772,
              "end": 790
            },
            "start": 768,
            "end": 790
          },
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
                      "name": "Attributes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 803,
                      "end": 813
                    },
                    "typeArguments": null,
                    "start": 803,
                    "end": 813
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 816,
                      "end": 817
                    },
                    "typeArguments": null,
                    "start": 816,
                    "end": 817
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
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 822,
                          "end": 830
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
                                "name": "ComponentChild",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 833,
                                "end": 847
                              },
                              "typeArguments": null,
                              "start": 833,
                              "end": 847
                            },
                            "start": 833,
                            "end": 849
                          },
                          "start": 831,
                          "end": 849
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 822,
                        "end": 849
                      }
                    ],
                    "start": 820,
                    "end": 851
                  }
                ],
                "start": 803,
                "end": 851
              },
              "start": 801,
              "end": 851
            },
            "start": 796,
            "end": 851
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 863,
                "end": 869
              },
              "start": 861,
              "end": 869
            },
            "start": 857,
            "end": 869
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "VNode",
              "optional": false,
              "typeAnnotation": null,
              "start": 873,
              "end": 878
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 879,
                  "end": 882
                }
              ],
              "start": 878,
              "end": 883
            },
            "start": 873,
            "end": 883
          },
          "start": 871,
          "end": 883
        },
        "body": null,
        "expression": false,
        "start": 746,
        "end": 884
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 739,
      "end": 884
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "jsxDEV",
          "optional": false,
          "typeAnnotation": null,
          "start": 902,
          "end": 908
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 920,
                "end": 926
              },
              "start": 918,
              "end": 926
            },
            "start": 914,
            "end": 926
          },
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
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSXInternal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 939,
                        "end": 950
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "HTMLAttributes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 951,
                        "end": 965
                      },
                      "start": 939,
                      "end": 965
                    },
                    "typeArguments": null,
                    "start": 939,
                    "end": 965
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSXInternal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 976,
                        "end": 987
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SVGAttributes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 988,
                        "end": 1001
                      },
                      "start": 976,
                      "end": 1001
                    },
                    "typeArguments": null,
                    "start": 976,
                    "end": 1001
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1012,
                      "end": 1018
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1019,
                          "end": 1025
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 1027,
                          "end": 1030
                        }
                      ],
                      "start": 1018,
                      "end": 1031
                    },
                    "start": 1012,
                    "end": 1031
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
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1036,
                          "end": 1044
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ComponentChildren",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1047,
                              "end": 1064
                            },
                            "typeArguments": null,
                            "start": 1047,
                            "end": 1064
                          },
                          "start": 1045,
                          "end": 1064
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1036,
                        "end": 1064
                      }
                    ],
                    "start": 1034,
                    "end": 1066
                  }
                ],
                "start": 939,
                "end": 1066
              },
              "start": 937,
              "end": 1066
            },
            "start": 932,
            "end": 1066
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1078,
                "end": 1084
              },
              "start": 1076,
              "end": 1084
            },
            "start": 1072,
            "end": 1084
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "VNode",
              "optional": false,
              "typeAnnotation": null,
              "start": 1088,
              "end": 1093
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 1094,
                  "end": 1097
                }
              ],
              "start": 1093,
              "end": 1098
            },
            "start": 1088,
            "end": 1098
          },
          "start": 1086,
          "end": 1098
        },
        "body": null,
        "expression": false,
        "start": 893,
        "end": 1099
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 886,
      "end": 1099
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "jsxDEV",
          "optional": false,
          "typeAnnotation": null,
          "start": 1116,
          "end": 1122
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "start": 1123,
                "end": 1124
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1123,
              "end": 1124
            }
          ],
          "start": 1122,
          "end": 1125
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1137,
                  "end": 1150
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
                        "start": 1151,
                        "end": 1152
                      },
                      "typeArguments": null,
                      "start": 1151,
                      "end": 1152
                    }
                  ],
                  "start": 1150,
                  "end": 1153
                },
                "start": 1137,
                "end": 1153
              },
              "start": 1135,
              "end": 1153
            },
            "start": 1131,
            "end": 1153
          },
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
                      "name": "Attributes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1166,
                      "end": 1176
                    },
                    "typeArguments": null,
                    "start": 1166,
                    "end": 1176
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1179,
                      "end": 1180
                    },
                    "typeArguments": null,
                    "start": 1179,
                    "end": 1180
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
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1185,
                          "end": 1193
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ComponentChildren",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1196,
                              "end": 1213
                            },
                            "typeArguments": null,
                            "start": 1196,
                            "end": 1213
                          },
                          "start": 1194,
                          "end": 1213
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1185,
                        "end": 1213
                      }
                    ],
                    "start": 1183,
                    "end": 1215
                  }
                ],
                "start": 1166,
                "end": 1215
              },
              "start": 1164,
              "end": 1215
            },
            "start": 1159,
            "end": 1215
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1227,
                "end": 1233
              },
              "start": 1225,
              "end": 1233
            },
            "start": 1221,
            "end": 1233
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "VNode",
              "optional": false,
              "typeAnnotation": null,
              "start": 1237,
              "end": 1242
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 1243,
                  "end": 1246
                }
              ],
              "start": 1242,
              "end": 1247
            },
            "start": 1237,
            "end": 1247
          },
          "start": 1235,
          "end": 1247
        },
        "body": null,
        "expression": false,
        "start": 1107,
        "end": 1248
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1100,
      "end": 1248
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 1258,
        "end": 1264
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null,
                "start": 1303,
                "end": 1306
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "NotFound",
                "optional": false,
                "typeAnnotation": null,
                "start": 1309,
                "end": 1317
              },
              "importKind": "value",
              "start": 1296,
              "end": 1318
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1289,
            "end": 1318
          }
        ],
        "start": 1265,
        "end": 1320
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 1250,
      "end": 1320
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1320
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "Fragment",
    "start": 9,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 20,
    "end": 24
  },
  {
    "type": "String",
    "value": "'..'",
    "start": 25,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 44,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "ComponentChild",
    "start": 63,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "ComponentChildren",
    "start": 83,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "VNode",
    "start": 106,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "Attributes",
    "start": 117,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 130,
    "end": 134
  },
  {
    "type": "String",
    "value": "'..'",
    "start": 135,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "JSXInternal",
    "start": 150,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 164,
    "end": 168
  },
  {
    "type": "String",
    "value": "'..'",
    "start": 169,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 176,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 183,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "jsx",
    "start": 192,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 201,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 207,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 219,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "JSXInternal",
    "start": 226,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "HTMLAttributes",
    "start": 238,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "JSXInternal",
    "start": 263,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "SVGAttributes",
    "start": 275,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 299,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 306,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 323,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "ComponentChild",
    "start": 334,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 356,
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
    "type": "Identifier",
    "value": "string",
    "start": 362,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "VNode",
    "start": 372,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 378,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "export",
    "start": 384,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 391,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "jsx",
    "start": 400,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 412,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 418,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 440,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "Attributes",
    "start": 447,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 466,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "ComponentChild",
    "start": 477,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 499,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 505,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "VNode",
    "start": 515,
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
    "value": "any",
    "start": 521,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 528,
    "end": 534
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 535,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "jsxs",
    "start": 544,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 554,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 558,
    "end": 559
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
    "value": "props",
    "start": 572,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "JSXInternal",
    "start": 579,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "HTMLAttributes",
    "start": 591,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "JSXInternal",
    "start": 616,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "SVGAttributes",
    "start": 628,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "Record",
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
    "value": "string",
    "start": 659,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 667,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 676,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "ComponentChild",
    "start": 687,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 711,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 715,
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
    "value": ")",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "VNode",
    "start": 727,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 733,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "export",
    "start": 739,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 746,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "jsxs",
    "start": 755,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 768,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 774,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "props",
    "start": 796,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "Attributes",
    "start": 803,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 822,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "ComponentChild",
    "start": 833,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 857,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 863,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "VNode",
    "start": 873,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 879,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 883,
    "end": 884
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 886,
    "end": 892
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 893,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "jsxDEV",
    "start": 902,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 914,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 920,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 932,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "JSXInternal",
    "start": 939,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "HTMLAttributes",
    "start": 951,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "JSXInternal",
    "start": 976,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "SVGAttributes",
    "start": 988,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 1012,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1019,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1027,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 1036,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "ComponentChildren",
    "start": 1047,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1072,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1078,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "VNode",
    "start": 1088,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1094,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1100,
    "end": 1106
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1107,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "jsxDEV",
    "start": 1116,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1131,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 1137,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1159,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "Attributes",
    "start": 1166,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 1185,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "ComponentChildren",
    "start": 1196,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1221,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1227,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "VNode",
    "start": 1237,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1243,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1250,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 1258,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1289,
    "end": 1295
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1296,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1303,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "NotFound",
    "start": 1309,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1319,
    "end": 1320
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
              "name": "Comp",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 17
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 27,
                    "end": 30
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 26,
                  "end": 31
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 33,
                    "end": 36
                  },
                  "start": 31,
                  "end": 37
                },
                "start": 26,
                "end": 37
              },
              "id": null,
              "generator": false,
              "start": 20,
              "end": 37
            },
            "definite": false,
            "start": 13,
            "end": 37
          }
        ],
        "declare": false,
        "start": 7,
        "end": 38
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 38
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 38
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "Comp",
    "start": 13,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 23,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 26,
    "end": 27
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 27,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 32,
    "end": 33
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 33,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  }
]
```

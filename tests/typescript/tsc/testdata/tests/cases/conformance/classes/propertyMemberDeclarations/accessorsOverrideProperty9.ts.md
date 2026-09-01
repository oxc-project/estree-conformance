__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 83
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
                "start": 84,
                "end": 85
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 88,
                "end": 90
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 84,
              "end": 90
            }
          ],
          "start": 83,
          "end": 91
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "abstract": false,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 106
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 108,
                    "end": 111
                  },
                  "start": 108,
                  "end": 113
                },
                "start": 106,
                "end": 113
              },
              "value": null,
              "start": 99,
              "end": 113
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 118,
                "end": 119
              },
              "typeArguments": null,
              "start": 118,
              "end": 119
            },
            "start": 115,
            "end": 119
          },
          "start": 94,
          "end": 119
        },
        "declare": false,
        "start": 67,
        "end": 120
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 60,
      "end": 120
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PropertiesOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 133,
          "end": 145
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
                "start": 146,
                "end": 147
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 146,
              "end": 147
            }
          ],
          "start": 145,
          "end": 148
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 155
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
                "start": 165,
                "end": 166
              },
              "typeArguments": null,
              "start": 165,
              "end": 166
            },
            "start": 159,
            "end": 166
          },
          "nameType": null,
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
                "start": 169,
                "end": 170
              },
              "typeArguments": null,
              "start": 169,
              "end": 170
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 172
              },
              "typeArguments": null,
              "start": 171,
              "end": 172
            },
            "start": 169,
            "end": 173
          },
          "optional": false,
          "readonly": null,
          "start": 151,
          "end": 175
        },
        "declare": false,
        "start": 128,
        "end": 176
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 121,
      "end": 176
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IApiItemConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 188,
        "end": 207
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 227
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ApiItem",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 235
                },
                "typeArguments": null,
                "start": 228,
                "end": 235
              }
            ],
            "start": 227,
            "end": 236
          },
          "start": 216,
          "end": 236
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropertiesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 250
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ApiItem",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 265
                },
                "typeArguments": null,
                "start": 251,
                "end": 265
              }
            ],
            "start": 250,
            "end": 266
          },
          "start": 238,
          "end": 266
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 267,
        "end": 269
      },
      "declare": false,
      "start": 178,
      "end": 269
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ApiItem",
        "optional": false,
        "typeAnnotation": null,
        "start": 291,
        "end": 298
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "members",
              "optional": false,
              "typeAnnotation": null,
              "start": 314,
              "end": 321
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ReadonlyArray",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 325,
                    "end": 338
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ApiItem",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 339,
                          "end": 346
                        },
                        "typeArguments": null,
                        "start": 339,
                        "end": 346
                      }
                    ],
                    "start": 338,
                    "end": 347
                  },
                  "start": 325,
                  "end": 347
                },
                "start": 323,
                "end": 347
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 361,
                      "end": 363
                    },
                    "start": 354,
                    "end": 364
                  }
                ],
                "start": 348,
                "end": 368
              },
              "expression": false,
              "start": 321,
              "end": 368
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 303,
            "end": 368
          }
        ],
        "start": 299,
        "end": 370
      },
      "abstract": false,
      "declare": false,
      "start": 285,
      "end": 370
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ApiEnumMember",
        "optional": false,
        "typeAnnotation": null,
        "start": 397,
        "end": 410
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ApiItem",
        "optional": false,
        "typeAnnotation": null,
        "start": 419,
        "end": 426
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 427,
        "end": 430
      },
      "abstract": false,
      "declare": false,
      "start": 391,
      "end": 430
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ApiItemContainerMixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 462,
        "end": 483
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ApiItem",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 499
          },
          "typeArguments": null,
          "start": 492,
          "end": 499
        }
      ],
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
              "name": "members",
              "optional": false,
              "typeAnnotation": null,
              "start": 513,
              "end": 520
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 522,
                  "end": 535
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ApiItem",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 536,
                        "end": 543
                      },
                      "typeArguments": null,
                      "start": 536,
                      "end": 543
                    }
                  ],
                  "start": 535,
                  "end": 544
                },
                "start": 522,
                "end": 544
              },
              "start": 520,
              "end": 544
            },
            "accessibility": null,
            "static": false,
            "start": 504,
            "end": 545
          }
        ],
        "start": 500,
        "end": 547
      },
      "declare": false,
      "start": 452,
      "end": 547
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ApiItemContainerMixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 558,
        "end": 579
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
              "name": "TBaseClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 580,
              "end": 590
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IApiItemConstructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 599,
                "end": 618
              },
              "typeArguments": null,
              "start": 599,
              "end": 618
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 580,
            "end": 618
          }
        ],
        "start": 579,
        "end": 619
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "baseClass",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TBaseClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 634,
                "end": 644
              },
              "typeArguments": null,
              "start": 634,
              "end": 644
            },
            "start": 632,
            "end": 644
          },
          "start": 623,
          "end": 644
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TBaseClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 648,
                "end": 658
              },
              "typeArguments": null,
              "start": 648,
              "end": 658
            },
            {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 670,
                    "end": 674
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 676,
                        "end": 679
                      },
                      "start": 676,
                      "end": 681
                    },
                    "start": 674,
                    "end": 681
                  },
                  "value": null,
                  "start": 667,
                  "end": 681
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ApiItemContainerMixin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 686,
                    "end": 707
                  },
                  "typeArguments": null,
                  "start": 686,
                  "end": 707
                },
                "start": 683,
                "end": 707
              },
              "start": 662,
              "end": 707
            }
          ],
          "start": 648,
          "end": 708
        },
        "start": 646,
        "end": 708
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "MixedClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 728,
              "end": 738
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "baseClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 747,
              "end": 756
            },
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ApiItemContainerMixin",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 768,
                  "end": 789
                },
                "typeArguments": null,
                "start": 768,
                "end": 789
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 803,
                    "end": 814
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 818,
                          "end": 822
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 824,
                              "end": 827
                            },
                            "start": 824,
                            "end": 829
                          },
                          "start": 822,
                          "end": 829
                        },
                        "value": null,
                        "start": 815,
                        "end": 829
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
                              "type": "Super",
                              "start": 839,
                              "end": 844
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "SpreadElement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 848,
                                  "end": 852
                                },
                                "start": 845,
                                "end": 852
                              }
                            ],
                            "optional": false,
                            "start": 839,
                            "end": 853
                          },
                          "directive": null,
                          "start": 839,
                          "end": 854
                        }
                      ],
                      "start": 831,
                      "end": 860
                    },
                    "expression": false,
                    "start": 814,
                    "end": 860
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 796,
                  "end": 860
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "members",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 877,
                    "end": 884
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ReadonlyArray",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 888,
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
                                "name": "ApiItem",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 902,
                                "end": 909
                              },
                              "typeArguments": null,
                              "start": 902,
                              "end": 909
                            }
                          ],
                          "start": 901,
                          "end": 910
                        },
                        "start": 888,
                        "end": 910
                      },
                      "start": 886,
                      "end": 910
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ArrayExpression",
                            "elements": [],
                            "start": 926,
                            "end": 928
                          },
                          "start": 919,
                          "end": 929
                        }
                      ],
                      "start": 911,
                      "end": 935
                    },
                    "expression": false,
                    "start": 884,
                    "end": 935
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 866,
                  "end": 935
                }
              ],
              "start": 790,
              "end": 939
            },
            "abstract": true,
            "declare": false,
            "start": 713,
            "end": 939
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "MixedClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 950,
              "end": 960
            },
            "start": 943,
            "end": 961
          }
        ],
        "start": 709,
        "end": 963
      },
      "expression": false,
      "start": 549,
      "end": 963
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ApiEnum",
          "optional": false,
          "typeAnnotation": null,
          "start": 1012,
          "end": 1019
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "ApiItemContainerMixin",
            "optional": false,
            "typeAnnotation": null,
            "start": 1028,
            "end": 1049
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "ApiItem",
              "optional": false,
              "typeAnnotation": null,
              "start": 1050,
              "end": 1057
            }
          ],
          "optional": false,
          "start": 1028,
          "end": 1058
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "members",
                "optional": false,
                "typeAnnotation": null,
                "start": 1116,
                "end": 1123
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReadonlyArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1127,
                      "end": 1140
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ApiEnumMember",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1141,
                            "end": 1154
                          },
                          "typeArguments": null,
                          "start": 1141,
                          "end": 1154
                        }
                      ],
                      "start": 1140,
                      "end": 1155
                    },
                    "start": 1127,
                    "end": 1155
                  },
                  "start": 1125,
                  "end": 1155
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "start": 1169,
                        "end": 1171
                      },
                      "start": 1162,
                      "end": 1172
                    }
                  ],
                  "start": 1156,
                  "end": 1176
                },
                "expression": false,
                "start": 1123,
                "end": 1176
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 1105,
              "end": 1176
            }
          ],
          "start": 1059,
          "end": 1178
        },
        "abstract": false,
        "declare": false,
        "start": 1006,
        "end": 1178
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 999,
      "end": 1178
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 60,
  "end": 1178
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 60,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 67,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 72,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 94,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 99,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 102,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 108,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 115,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 121,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 128,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "PropertiesOf",
    "start": 133,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 156,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 159,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 178,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "IApiItemConstructor",
    "start": 188,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 208,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 216,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "ApiItem",
    "start": 228,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "PropertiesOf",
    "start": 238,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 251,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "ApiItem",
    "start": 258,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 285,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "ApiItem",
    "start": 291,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 303,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 310,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "members",
    "start": 314,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 325,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "ApiItem",
    "start": 339,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 354,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "class",
    "start": 391,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "ApiEnumMember",
    "start": 397,
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
    "value": "ApiItem",
    "start": 419,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 429,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 452,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "ApiItemContainerMixin",
    "start": 462,
    "end": 483
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 484,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "ApiItem",
    "start": 492,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 504,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "members",
    "start": 513,
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
    "value": "ReadonlyArray",
    "start": 522,
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
    "value": "ApiItem",
    "start": 536,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 546,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 549,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "ApiItemContainerMixin",
    "start": 558,
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
    "value": "TBaseClass",
    "start": 580,
    "end": 590
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 591,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "IApiItemConstructor",
    "start": 599,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "baseClass",
    "start": 623,
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
    "value": "TBaseClass",
    "start": 634,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "TBaseClass",
    "start": 648,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 661,
    "end": 662
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 662,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 667,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 670,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 676,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 683,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "ApiItemContainerMixin",
    "start": 686,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "abstract",
    "start": 713,
    "end": 721
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 722,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "MixedClass",
    "start": 728,
    "end": 738
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 739,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "baseClass",
    "start": 747,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 757,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "ApiItemContainerMixin",
    "start": 768,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 790,
    "end": 791
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 796,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 803,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 815,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 818,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 824,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 831,
    "end": 832
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 839,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 845,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 848,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 859,
    "end": 860
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 866,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 873,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "members",
    "start": 877,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 888,
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
    "value": "ApiItem",
    "start": 902,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 911,
    "end": 912
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 919,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 938,
    "end": 939
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 943,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "MixedClass",
    "start": 950,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 962,
    "end": 963
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 999,
    "end": 1005
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1006,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "ApiEnum",
    "start": 1012,
    "end": 1019
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1020,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "ApiItemContainerMixin",
    "start": 1028,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "ApiItem",
    "start": 1050,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1105,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1112,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "members",
    "start": 1116,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 1127,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "ApiEnumMember",
    "start": 1141,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1162,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1177,
    "end": 1178
  }
]
```

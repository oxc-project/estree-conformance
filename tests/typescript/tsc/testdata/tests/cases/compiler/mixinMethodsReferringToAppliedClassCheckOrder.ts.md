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
        "name": "ConstructorType",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 206
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
              "start": 207,
              "end": 208
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 207,
            "end": 208
          }
        ],
        "start": 206,
        "end": 209
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": true,
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
              "start": 229,
              "end": 233
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 235,
                  "end": 238
                },
                "start": 235,
                "end": 240
              },
              "start": 233,
              "end": 240
            },
            "value": null,
            "start": 226,
            "end": 240
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
              "start": 245,
              "end": 246
            },
            "typeArguments": null,
            "start": 245,
            "end": 246
          },
          "start": 242,
          "end": 246
        },
        "start": 212,
        "end": 246
      },
      "declare": false,
      "start": 186,
      "end": 247
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeMixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 258,
        "end": 267
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
              "name": "TBase",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 273
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ConstructorType",
                "optional": false,
                "typeAnnotation": null,
                "start": 282,
                "end": 297
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 298,
                    "end": 301
                  }
                ],
                "start": 297,
                "end": 302
              },
              "start": 282,
              "end": 302
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 268,
            "end": 302
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "FinalConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 320
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 304,
            "end": 320
          }
        ],
        "start": 267,
        "end": 321
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "mixinFunction",
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
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TBase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 349,
                        "end": 354
                      },
                      "typeArguments": null,
                      "start": 349,
                      "end": 354
                    },
                    "start": 347,
                    "end": 354
                  },
                  "start": 343,
                  "end": 354
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FinalConstructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 359,
                    "end": 375
                  },
                  "typeArguments": null,
                  "start": 359,
                  "end": 375
                },
                "start": 356,
                "end": 375
              },
              "start": 342,
              "end": 375
            },
            "start": 340,
            "end": 375
          },
          "start": 327,
          "end": 375
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
              "name": "Base",
              "optional": true,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TBase",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 387,
                    "end": 392
                  },
                  "typeArguments": null,
                  "start": 387,
                  "end": 392
                },
                "start": 385,
                "end": 392
              },
              "start": 380,
              "end": 392
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FinalConstructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 397,
                "end": 413
              },
              "typeArguments": null,
              "start": 397,
              "end": 413
            },
            "start": 394,
            "end": 413
          },
          "start": 379,
          "end": 413
        },
        "start": 377,
        "end": 413
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TBase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 435,
                        "end": 440
                      },
                      "typeArguments": null,
                      "start": 435,
                      "end": 440
                    },
                    "start": 433,
                    "end": 440
                  },
                  "start": 428,
                  "end": 440
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mixinFunction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 527,
                        "end": 540
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 541,
                            "end": 545
                          },
                          "operator": "??",
                          "right": {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Object",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 550,
                              "end": 556
                            },
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 560,
                              "end": 563
                            },
                            "start": 550,
                            "end": 563
                          },
                          "start": 541,
                          "end": 564
                        }
                      ],
                      "optional": false,
                      "start": 527,
                      "end": 565
                    },
                    "start": 520,
                    "end": 566
                  }
                ],
                "start": 445,
                "end": 572
              },
              "id": null,
              "generator": false,
              "start": 427,
              "end": 572
            },
            "start": 420,
            "end": 573
          }
        ],
        "start": 414,
        "end": 575
      },
      "expression": false,
      "start": 249,
      "end": 575
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
            "name": "MixinF",
            "optional": false,
            "typeAnnotation": null,
            "start": 583,
            "end": 589
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeMixin",
              "optional": false,
              "typeAnnotation": null,
              "start": 592,
              "end": 601
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
                        "name": "TBase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 603,
                        "end": 608
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ConstructorType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 617,
                          "end": 632
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 633,
                              "end": 636
                            }
                          ],
                          "start": 632,
                          "end": 637
                        },
                        "start": 617,
                        "end": 637
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 603,
                      "end": 637
                    }
                  ],
                  "start": 602,
                  "end": 638
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TBase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 645,
                          "end": 650
                        },
                        "typeArguments": null,
                        "start": 645,
                        "end": 650
                      },
                      "start": 643,
                      "end": 650
                    },
                    "start": 639,
                    "end": 650
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Mixin",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 674,
                        "end": 679
                      },
                      "typeParameters": null,
                      "superClass": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 688,
                        "end": 692
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
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 699,
                              "end": 702
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "MixinApplied",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 708,
                                        "end": 720
                                      },
                                      "typeArguments": null,
                                      "start": 708,
                                      "end": 720
                                    },
                                    "start": 706,
                                    "end": 720
                                  },
                                  "start": 703,
                                  "end": 720
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "extra",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSBooleanKeyword",
                                      "start": 729,
                                      "end": 736
                                    },
                                    "start": 727,
                                    "end": 736
                                  },
                                  "start": 722,
                                  "end": 736
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSUnionType",
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "MixinApplied",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 739,
                                        "end": 751
                                      },
                                      "typeArguments": null,
                                      "start": 739,
                                      "end": 751
                                    },
                                    {
                                      "type": "TSBooleanKeyword",
                                      "start": 754,
                                      "end": 761
                                    }
                                  ],
                                  "start": 739,
                                  "end": 761
                                },
                                "start": 737,
                                "end": 761
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "extra",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 771,
                                      "end": 776
                                    },
                                    "start": 764,
                                    "end": 776
                                  }
                                ],
                                "start": 762,
                                "end": 778
                              },
                              "expression": false,
                              "start": 702,
                              "end": 778
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 699,
                            "end": 778
                          }
                        ],
                        "start": 693,
                        "end": 782
                      },
                      "abstract": true,
                      "declare": false,
                      "start": 659,
                      "end": 782
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Mixin",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 792,
                        "end": 797
                      },
                      "start": 785,
                      "end": 797
                    }
                  ],
                  "start": 655,
                  "end": 799
                },
                "id": null,
                "generator": false,
                "start": 602,
                "end": 799
              }
            ],
            "optional": false,
            "start": 592,
            "end": 800
          },
          "definite": false,
          "start": 583,
          "end": 800
        }
      ],
      "declare": false,
      "start": 577,
      "end": 800
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
            "name": "Mixin2F",
            "optional": false,
            "typeAnnotation": null,
            "start": 809,
            "end": 816
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeMixin",
              "optional": false,
              "typeAnnotation": null,
              "start": 819,
              "end": 828
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
                        "name": "TBase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 830,
                        "end": 835
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ConstructorType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 844,
                          "end": 859
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 860,
                              "end": 863
                            }
                          ],
                          "start": 859,
                          "end": 864
                        },
                        "start": 844,
                        "end": 864
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 830,
                      "end": 864
                    }
                  ],
                  "start": 829,
                  "end": 865
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TBase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 872,
                          "end": 877
                        },
                        "typeArguments": null,
                        "start": 872,
                        "end": 877
                      },
                      "start": 870,
                      "end": 877
                    },
                    "start": 866,
                    "end": 877
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Mixin2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 901,
                        "end": 907
                      },
                      "typeParameters": null,
                      "superClass": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 916,
                        "end": 920
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
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 927,
                              "end": 930
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "MixinApplied",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 936,
                                        "end": 948
                                      },
                                      "typeArguments": null,
                                      "start": 936,
                                      "end": 948
                                    },
                                    "start": 934,
                                    "end": 948
                                  },
                                  "start": 931,
                                  "end": 948
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "extra",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSBooleanKeyword",
                                      "start": 957,
                                      "end": 964
                                    },
                                    "start": 955,
                                    "end": 964
                                  },
                                  "start": 950,
                                  "end": 964
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSUnionType",
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "MixinApplied",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 967,
                                        "end": 979
                                      },
                                      "typeArguments": null,
                                      "start": 967,
                                      "end": 979
                                    },
                                    {
                                      "type": "TSBooleanKeyword",
                                      "start": 982,
                                      "end": 989
                                    }
                                  ],
                                  "start": 967,
                                  "end": 989
                                },
                                "start": 965,
                                "end": 989
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "extra",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 999,
                                      "end": 1004
                                    },
                                    "start": 992,
                                    "end": 1004
                                  }
                                ],
                                "start": 990,
                                "end": 1006
                              },
                              "expression": false,
                              "start": 930,
                              "end": 1006
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 927,
                            "end": 1006
                          }
                        ],
                        "start": 921,
                        "end": 1010
                      },
                      "abstract": true,
                      "declare": false,
                      "start": 886,
                      "end": 1010
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Mixin2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1020,
                        "end": 1026
                      },
                      "start": 1013,
                      "end": 1026
                    }
                  ],
                  "start": 882,
                  "end": 1028
                },
                "id": null,
                "generator": false,
                "start": 829,
                "end": 1028
              }
            ],
            "optional": false,
            "start": 819,
            "end": 1029
          },
          "definite": false,
          "start": 809,
          "end": 1029
        }
      ],
      "declare": false,
      "start": 803,
      "end": 1029
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MixinApplied",
        "optional": false,
        "typeAnnotation": null,
        "start": 1037,
        "end": 1049
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mixin2F",
          "optional": false,
          "typeAnnotation": null,
          "start": 1058,
          "end": 1065
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "MixinF",
              "optional": false,
              "typeAnnotation": null,
              "start": 1066,
              "end": 1072
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1066,
            "end": 1074
          }
        ],
        "optional": false,
        "start": 1058,
        "end": 1075
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1076,
        "end": 1078
      },
      "abstract": false,
      "declare": false,
      "start": 1031,
      "end": 1078
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1078
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 186,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "ConstructorType",
    "start": 191,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 212,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 221,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 226,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 229,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 235,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 242,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Keyword",
    "value": "function",
    "start": 249,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "makeMixin",
    "start": 258,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "TBase",
    "start": 268,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 274,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "ConstructorType",
    "start": 282,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 298,
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
    "value": ",",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "FinalConstructor",
    "start": 304,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "mixinFunction",
    "start": 327,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 343,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "TBase",
    "start": 349,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 356,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "FinalConstructor",
    "start": 359,
    "end": 375
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
    "type": "Punctuator",
    "value": "(",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 380,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "TBase",
    "start": 387,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 394,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "FinalConstructor",
    "start": 397,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 414,
    "end": 415
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 420,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 428,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "TBase",
    "start": 435,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 442,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 520,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "mixinFunction",
    "start": 527,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 541,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 546,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 550,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 557,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 560,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 574,
    "end": 575
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 577,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "MixinF",
    "start": 583,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "makeMixin",
    "start": 592,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "TBase",
    "start": 603,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 609,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "ConstructorType",
    "start": 617,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 633,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 639,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "TBase",
    "start": 645,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 652,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 659,
    "end": 667
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 668,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 674,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 680,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 688,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 699,
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
    "value": "foo",
    "start": 703,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "MixinApplied",
    "start": 708,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 722,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 729,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "MixinApplied",
    "start": 739,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 754,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 762,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 764,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 771,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 781,
    "end": 782
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 785,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 792,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 799,
    "end": 800
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 803,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "Mixin2F",
    "start": 809,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "makeMixin",
    "start": 819,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "TBase",
    "start": 830,
    "end": 835
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 836,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "ConstructorType",
    "start": 844,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 860,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 863,
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
    "value": "(",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 866,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "TBase",
    "start": 872,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 879,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 886,
    "end": 894
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 895,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "Mixin2",
    "start": 901,
    "end": 907
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 908,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 916,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 927,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 931,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "MixinApplied",
    "start": 936,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 950,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 957,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "MixinApplied",
    "start": 967,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 980,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 982,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 990,
    "end": 991
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 992,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 999,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1013,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "Mixin2",
    "start": 1020,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1031,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "MixinApplied",
    "start": 1037,
    "end": 1049
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1050,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "Mixin2F",
    "start": 1058,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "MixinF",
    "start": 1066,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1077,
    "end": 1078
  }
]
```

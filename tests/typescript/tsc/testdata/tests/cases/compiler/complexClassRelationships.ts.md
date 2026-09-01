__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 55
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 68
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
              "name": "createEmpty",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 100
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
                    "name": "Derived",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 104,
                    "end": 111
                  },
                  "typeArguments": null,
                  "start": 104,
                  "end": 111
                },
                "start": 102,
                "end": 111
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 126,
                          "end": 130
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 137,
                            "end": 144
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 133,
                          "end": 146
                        },
                        "definite": false,
                        "start": 126,
                        "end": 146
                      }
                    ],
                    "declare": false,
                    "start": 122,
                    "end": 147
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 163,
                      "end": 167
                    },
                    "start": 156,
                    "end": 168
                  }
                ],
                "start": 112,
                "end": 174
              },
              "expression": false,
              "start": 100,
              "end": 174
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 75,
            "end": 174
          }
        ],
        "start": 69,
        "end": 176
      },
      "abstract": false,
      "declare": false,
      "start": 42,
      "end": 176
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseCollection",
        "optional": false,
        "typeAnnotation": null,
        "start": 183,
        "end": 197
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
              "start": 198,
              "end": 199
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 212
              },
              "typeArguments": null,
              "start": 208,
              "end": 212
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 198,
            "end": 212
          }
        ],
        "start": 197,
        "end": 213
      },
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 231
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
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
                            "start": 241,
                            "end": 242
                          },
                          "typeArguments": null,
                          "start": 241,
                          "end": 242
                        },
                        "start": 238,
                        "end": 242
                      },
                      "start": 235,
                      "end": 242
                    },
                    "start": 233,
                    "end": 242
                  },
                  "start": 232,
                  "end": 242
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thing",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 261,
                                "end": 266
                              },
                              "typeArguments": null,
                              "start": 261,
                              "end": 266
                            },
                            "start": 259,
                            "end": 266
                          },
                          "start": 255,
                          "end": 266
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "item",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 281,
                                    "end": 285
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Components",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 286,
                                    "end": 296
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 281,
                                  "end": 296
                                }
                              ],
                              "start": 280,
                              "end": 297
                            },
                            "start": 273,
                            "end": 298
                          }
                        ],
                        "start": 271,
                        "end": 300
                      },
                      "id": null,
                      "generator": false,
                      "start": 254,
                      "end": 300
                    },
                    "directive": null,
                    "start": 254,
                    "end": 301
                  }
                ],
                "start": 244,
                "end": 307
              },
              "expression": false,
              "start": 231,
              "end": 307
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 220,
            "end": 307
          }
        ],
        "start": 214,
        "end": 309
      },
      "abstract": false,
      "declare": false,
      "start": 177,
      "end": 309
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 316,
        "end": 320
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ownerCollection",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 342
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BaseCollection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 358
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 359,
                        "end": 363
                      },
                      "typeArguments": null,
                      "start": 359,
                      "end": 363
                    }
                  ],
                  "start": 358,
                  "end": 364
                },
                "start": 344,
                "end": 364
              },
              "start": 342,
              "end": 364
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 327,
            "end": 365
          }
        ],
        "start": 321,
        "end": 367
      },
      "abstract": false,
      "declare": false,
      "start": 310,
      "end": 367
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null,
        "start": 375,
        "end": 380
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
              "name": "Components",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 408
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
                    "name": "ComponentCollection",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 412,
                    "end": 431
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 432,
                        "end": 435
                      }
                    ],
                    "start": 431,
                    "end": 436
                  },
                  "start": 412,
                  "end": 436
                },
                "start": 410,
                "end": 436
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 446,
                      "end": 450
                    },
                    "start": 439,
                    "end": 450
                  }
                ],
                "start": 437,
                "end": 452
              },
              "expression": false,
              "start": 408,
              "end": 452
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 387,
            "end": 452
          }
        ],
        "start": 381,
        "end": 454
      },
      "abstract": false,
      "declare": false,
      "start": 369,
      "end": 454
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentCollection",
        "optional": false,
        "typeAnnotation": null,
        "start": 462,
        "end": 481
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
              "start": 482,
              "end": 483
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 482,
            "end": 483
          }
        ],
        "start": 481,
        "end": 484
      },
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
              "name": "sortComponents",
              "optional": false,
              "typeAnnotation": null,
              "start": 506,
              "end": 520
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 524,
                        "end": 527
                      },
                      "typeArguments": null,
                      "start": 524,
                      "end": 527
                    },
                    "start": 522,
                    "end": 527
                  },
                  "start": 521,
                  "end": 527
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 546,
                        "end": 547
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 548,
                        "end": 553
                      },
                      "optional": false,
                      "computed": false,
                      "start": 546,
                      "end": 553
                    },
                    "start": 539,
                    "end": 554
                  }
                ],
                "start": 529,
                "end": 560
              },
              "expression": false,
              "start": 520,
              "end": 560
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 491,
            "end": 560
          }
        ],
        "start": 485,
        "end": 562
      },
      "abstract": false,
      "declare": false,
      "start": 456,
      "end": 562
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 570,
        "end": 573
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
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 591,
              "end": 596
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "GenericType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 620,
                        "end": 631
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 632,
                            "end": 638
                          }
                        ],
                        "start": 631,
                        "end": 639
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 640,
                          "end": 644
                        }
                      ],
                      "start": 616,
                      "end": 645
                    },
                    "start": 609,
                    "end": 646
                  }
                ],
                "start": 599,
                "end": 652
              },
              "expression": false,
              "start": 596,
              "end": 652
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 580,
            "end": 652
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "populate",
              "optional": false,
              "typeAnnotation": null,
              "start": 664,
              "end": 672
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 685,
                        "end": 689
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 690,
                        "end": 695
                      },
                      "optional": false,
                      "computed": false,
                      "start": 685,
                      "end": 695
                    },
                    "directive": null,
                    "start": 685,
                    "end": 696
                  }
                ],
                "start": 675,
                "end": 702
              },
              "expression": false,
              "start": 672,
              "end": 702
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 657,
            "end": 702
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 718,
              "end": 723
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
                    "name": "BaseCollection",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 727,
                    "end": 741
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 742,
                          "end": 749
                        },
                        "typeArguments": null,
                        "start": 742,
                        "end": 749
                      }
                    ],
                    "start": 741,
                    "end": 750
                  },
                  "start": 727,
                  "end": 750
                },
                "start": 725,
                "end": 750
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseCollection",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 772,
                        "end": 786
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 787,
                              "end": 794
                            },
                            "typeArguments": null,
                            "start": 787,
                            "end": 794
                          }
                        ],
                        "start": 786,
                        "end": 795
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 796,
                            "end": 803
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "createEmpty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 804,
                            "end": 815
                          },
                          "optional": false,
                          "computed": false,
                          "start": 796,
                          "end": 815
                        }
                      ],
                      "start": 768,
                      "end": 816
                    },
                    "start": 761,
                    "end": 817
                  }
                ],
                "start": 751,
                "end": 823
              },
              "expression": false,
              "start": 723,
              "end": 823
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 707,
            "end": 823
          }
        ],
        "start": 574,
        "end": 825
      },
      "abstract": false,
      "declare": false,
      "start": 564,
      "end": 825
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericType",
        "optional": false,
        "typeAnnotation": null,
        "start": 833,
        "end": 844
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
              "start": 845,
              "end": 846
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 845,
            "end": 846
          }
        ],
        "start": 844,
        "end": 847
      },
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 854,
              "end": 865
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
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FooBase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 874,
                        "end": 881
                      },
                      "typeArguments": null,
                      "start": 874,
                      "end": 881
                    },
                    "start": 872,
                    "end": 881
                  },
                  "start": 866,
                  "end": 881
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 883,
                "end": 886
              },
              "expression": false,
              "start": 865,
              "end": 886
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 854,
            "end": 886
          }
        ],
        "start": 848,
        "end": 888
      },
      "abstract": false,
      "declare": false,
      "start": 827,
      "end": 888
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 896,
        "end": 903
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
              "name": "populate",
              "optional": false,
              "typeAnnotation": null,
              "start": 917,
              "end": 925
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 928,
                "end": 936
              },
              "expression": false,
              "start": 925,
              "end": 936
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 910,
            "end": 936
          }
        ],
        "start": 904,
        "end": 938
      },
      "abstract": false,
      "declare": false,
      "start": 890,
      "end": 938
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 42,
  "end": 938
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 42,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 48,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 56,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 64,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 75,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 82,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "createEmpty",
    "start": 89,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "Derived",
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
    "type": "Keyword",
    "value": "var",
    "start": 122,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 126,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 133,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 137,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 156,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 163,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 177,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "BaseCollection",
    "start": 183,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 200,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 208,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 220,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 238,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "(",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 255,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 261,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 268,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 273,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 281,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "Components",
    "start": 286,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 310,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 316,
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
    "value": "ownerCollection",
    "start": 327,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "BaseCollection",
    "start": 344,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 359,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 369,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 375,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 381,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 387,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 394,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "Components",
    "start": 398,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "ComponentCollection",
    "start": 412,
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
    "value": "any",
    "start": 432,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 439,
    "end": 445
  },
  {
    "type": "Null",
    "value": "null",
    "start": 446,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 453,
    "end": 454
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 456,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "ComponentCollection",
    "start": 462,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 485,
    "end": 486
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 491,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 499,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "sortComponents",
    "start": 506,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 524,
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
    "value": "{",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 539,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 548,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 561,
    "end": 562
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 564,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 570,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 574,
    "end": 575
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 580,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 587,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 591,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 599,
    "end": 600
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 609,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 616,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "GenericType",
    "start": 620,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 632,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 640,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 651,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 657,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "populate",
    "start": 664,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 675,
    "end": 676
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 685,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 690,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 701,
    "end": 702
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 707,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 714,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 718,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 723,
    "end": 724
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
    "value": "BaseCollection",
    "start": 727,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 742,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 751,
    "end": 752
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 761,
    "end": 767
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 768,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "BaseCollection",
    "start": 772,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 787,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 796,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "createEmpty",
    "start": 804,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 824,
    "end": 825
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 827,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "GenericType",
    "start": 833,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 854,
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
    "value": "parent",
    "start": 866,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "FooBase",
    "start": 874,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 887,
    "end": 888
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 890,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "FooBase",
    "start": 896,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 904,
    "end": 905
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 910,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "populate",
    "start": 917,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 937,
    "end": 938
  }
]
```

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
        "name": "IFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
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
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 14,
        "end": 17
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 18,
        "end": 21
      },
      "declare": false,
      "start": 0,
      "end": 21
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
        "start": 29,
        "end": 32
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
              "start": 33,
              "end": 34
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 33,
            "end": 34
          }
        ],
        "start": 32,
        "end": 35
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 36,
        "end": 39
      },
      "abstract": false,
      "declare": false,
      "start": 23,
      "end": 39
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testClass1",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 84
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
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 97
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 98,
                      "end": 99
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 98,
                    "end": 99
                  }
                ],
                "start": 97,
                "end": 100
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 104,
                  "end": 108
                },
                "start": 102,
                "end": 108
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 109,
                "end": 112
              },
              "expression": false,
              "start": 97,
              "end": 112
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 91,
            "end": 112
          }
        ],
        "start": 85,
        "end": 114
      },
      "abstract": false,
      "declare": false,
      "start": 68,
      "end": 114
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tc1",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 122
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testClass1",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 139
            },
            "typeArguments": null,
            "arguments": [],
            "start": 125,
            "end": 141
          },
          "definite": false,
          "start": 119,
          "end": 141
        }
      ],
      "declare": false,
      "start": 115,
      "end": 142
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "tc1",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 146
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "method",
            "optional": false,
            "typeAnnotation": null,
            "start": 147,
            "end": 153
          },
          "optional": false,
          "computed": false,
          "start": 143,
          "end": 153
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 157
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 159,
                        "end": 160
                      },
                      "typeArguments": null,
                      "start": 159,
                      "end": 160
                    },
                    "start": 157,
                    "end": 160
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 156,
                  "end": 160
                }
              ],
              "start": 154,
              "end": 162
            }
          ],
          "start": 153,
          "end": 163
        },
        "arguments": [],
        "optional": false,
        "start": 143,
        "end": 165
      },
      "directive": null,
      "start": 143,
      "end": 166
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testClass2",
        "optional": false,
        "typeAnnotation": null,
        "start": 242,
        "end": 252
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
              "start": 253,
              "end": 254
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 253,
            "end": 254
          }
        ],
        "start": 252,
        "end": 255
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 256,
        "end": 259
      },
      "abstract": false,
      "declare": false,
      "start": 236,
      "end": 259
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tc2",
            "optional": false,
            "typeAnnotation": null,
            "start": 264,
            "end": 267
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testClass2",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 284
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 287,
                        "end": 288
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 290,
                            "end": 291
                          },
                          "typeArguments": null,
                          "start": 290,
                          "end": 291
                        },
                        "start": 288,
                        "end": 291
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 287,
                      "end": 291
                    }
                  ],
                  "start": 285,
                  "end": 293
                }
              ],
              "start": 284,
              "end": 294
            },
            "arguments": [],
            "start": 270,
            "end": 296
          },
          "definite": false,
          "start": 264,
          "end": 296
        }
      ],
      "declare": false,
      "start": 260,
      "end": 297
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testClass3",
        "optional": false,
        "typeAnnotation": null,
        "start": 376,
        "end": 386
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
              "name": "testMethod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 404
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
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 408,
                    "end": 411
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 414,
                              "end": 415
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 417,
                                  "end": 418
                                },
                                "typeArguments": null,
                                "start": 417,
                                "end": 418
                              },
                              "start": 415,
                              "end": 418
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 414,
                            "end": 418
                          }
                        ],
                        "start": 412,
                        "end": 420
                      }
                    ],
                    "start": 411,
                    "end": 421
                  },
                  "start": 408,
                  "end": 421
                },
                "start": 406,
                "end": 421
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
                      "start": 431,
                      "end": 435
                    },
                    "start": 424,
                    "end": 436
                  }
                ],
                "start": 422,
                "end": 438
              },
              "expression": false,
              "start": 404,
              "end": 438
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 393,
            "end": 438
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "testMethod2",
              "optional": false,
              "typeAnnotation": null,
              "start": 484,
              "end": 495
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
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 499,
                    "end": 502
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 505,
                              "end": 506
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 508,
                                  "end": 509
                                },
                                "typeArguments": null,
                                "start": 508,
                                "end": 509
                              },
                              "start": 506,
                              "end": 509
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 505,
                            "end": 509
                          }
                        ],
                        "start": 503,
                        "end": 511
                      }
                    ],
                    "start": 502,
                    "end": 512
                  },
                  "start": 499,
                  "end": 512
                },
                "start": 497,
                "end": 512
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
                      "start": 522,
                      "end": 526
                    },
                    "start": 515,
                    "end": 526
                  }
                ],
                "start": 513,
                "end": 528
              },
              "expression": false,
              "start": 495,
              "end": 528
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 477,
            "end": 528
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 571,
              "end": 572
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
                  "name": "value",
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
                        "start": 580,
                        "end": 583
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
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 586,
                                  "end": 587
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 589,
                                      "end": 590
                                    },
                                    "typeArguments": null,
                                    "start": 589,
                                    "end": 590
                                  },
                                  "start": 587,
                                  "end": 590
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 586,
                                "end": 590
                              }
                            ],
                            "start": 584,
                            "end": 592
                          }
                        ],
                        "start": 583,
                        "end": 593
                      },
                      "start": 580,
                      "end": 593
                    },
                    "start": 578,
                    "end": 593
                  },
                  "start": 573,
                  "end": 593
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 595,
                "end": 598
              },
              "expression": false,
              "start": 572,
              "end": 598
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 567,
            "end": 598
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null,
              "start": 637,
              "end": 645
            },
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
                  "start": 647,
                  "end": 650
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 653,
                            "end": 654
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 656,
                                "end": 657
                              },
                              "typeArguments": null,
                              "start": 656,
                              "end": 657
                            },
                            "start": 654,
                            "end": 657
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 653,
                          "end": 657
                        }
                      ],
                      "start": 651,
                      "end": 659
                    }
                  ],
                  "start": 650,
                  "end": 660
                },
                "start": 647,
                "end": 660
              },
              "start": 645,
              "end": 660
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
            "start": 637,
            "end": 661
          }
        ],
        "start": 387,
        "end": 697
      },
      "abstract": false,
      "declare": false,
      "start": 370,
      "end": 697
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction1",
        "optional": false,
        "typeAnnotation": null,
        "start": 747,
        "end": 760
      },
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
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 764,
            "end": 767
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 770,
                      "end": 771
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 773,
                          "end": 774
                        },
                        "typeArguments": null,
                        "start": 773,
                        "end": 774
                      },
                      "start": 771,
                      "end": 774
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 770,
                    "end": 774
                  }
                ],
                "start": 768,
                "end": 776
              }
            ],
            "start": 767,
            "end": 777
          },
          "start": 764,
          "end": 777
        },
        "start": 762,
        "end": 777
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
              "start": 787,
              "end": 791
            },
            "start": 780,
            "end": 792
          }
        ],
        "start": 778,
        "end": 794
      },
      "expression": false,
      "start": 738,
      "end": 794
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction2",
        "optional": false,
        "typeAnnotation": null,
        "start": 861,
        "end": 874
      },
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
                "start": 878,
                "end": 881
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 884,
                          "end": 885
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 887,
                              "end": 888
                            },
                            "typeArguments": null,
                            "start": 887,
                            "end": 888
                          },
                          "start": 885,
                          "end": 888
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 884,
                        "end": 888
                      }
                    ],
                    "start": 882,
                    "end": 890
                  }
                ],
                "start": 881,
                "end": 891
              },
              "start": 878,
              "end": 891
            },
            "start": 876,
            "end": 891
          },
          "start": 875,
          "end": 891
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 893,
        "end": 896
      },
      "expression": false,
      "start": 852,
      "end": 896
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
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
                  "start": 965,
                  "end": 968
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 971,
                            "end": 972
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 974,
                                "end": 975
                              },
                              "typeArguments": null,
                              "start": 974,
                              "end": 975
                            },
                            "start": 972,
                            "end": 975
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 971,
                          "end": 975
                        }
                      ],
                      "start": 969,
                      "end": 977
                    }
                  ],
                  "start": 968,
                  "end": 978
                },
                "start": 965,
                "end": 978
              },
              "start": 963,
              "end": 978
            },
            "start": 962,
            "end": 978
          },
          "init": null,
          "definite": false,
          "start": 962,
          "end": 978
        }
      ],
      "declare": false,
      "start": 958,
      "end": 979
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testClass4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1040,
        "end": 1050
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
              "start": 1051,
              "end": 1052
            },
            "constraint": {
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1063,
                    "end": 1064
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1066,
                        "end": 1067
                      },
                      "typeArguments": null,
                      "start": 1066,
                      "end": 1067
                    },
                    "start": 1064,
                    "end": 1067
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1063,
                  "end": 1067
                }
              ],
              "start": 1061,
              "end": 1069
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1051,
            "end": 1069
          }
        ],
        "start": 1050,
        "end": 1070
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1071,
        "end": 1074
      },
      "abstract": false,
      "declare": false,
      "start": 1034,
      "end": 1074
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testClass5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1120,
        "end": 1130
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
              "start": 1131,
              "end": 1132
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1141,
                "end": 1144
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1147,
                          "end": 1148
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1150,
                              "end": 1151
                            },
                            "typeArguments": null,
                            "start": 1150,
                            "end": 1151
                          },
                          "start": 1148,
                          "end": 1151
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1147,
                        "end": 1151
                      }
                    ],
                    "start": 1145,
                    "end": 1153
                  }
                ],
                "start": 1144,
                "end": 1154
              },
              "start": 1141,
              "end": 1154
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1131,
            "end": 1154
          }
        ],
        "start": 1130,
        "end": 1155
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1156,
        "end": 1159
      },
      "declare": false,
      "start": 1110,
      "end": 1159
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testClass6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1201,
        "end": 1211
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
              "start": 1212,
              "end": 1213
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1212,
            "end": 1213
          }
        ],
        "start": 1211,
        "end": 1214
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
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 1221,
              "end": 1227
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1228,
                      "end": 1229
                    },
                    "constraint": {
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1240,
                            "end": 1241
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1243,
                                "end": 1244
                              },
                              "typeArguments": null,
                              "start": 1243,
                              "end": 1244
                            },
                            "start": 1241,
                            "end": 1244
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1240,
                          "end": 1244
                        }
                      ],
                      "start": 1238,
                      "end": 1246
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1228,
                    "end": 1246
                  }
                ],
                "start": 1227,
                "end": 1247
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1251,
                  "end": 1255
                },
                "start": 1249,
                "end": 1255
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1256,
                "end": 1259
              },
              "expression": false,
              "start": 1227,
              "end": 1259
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1221,
            "end": 1259
          }
        ],
        "start": 1215,
        "end": 1295
      },
      "abstract": false,
      "declare": false,
      "start": 1195,
      "end": 1295
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testInterface1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1307,
        "end": 1321
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1333,
                    "end": 1334
                  },
                  "constraint": {
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1345,
                          "end": 1346
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1348,
                              "end": 1349
                            },
                            "typeArguments": null,
                            "start": 1348,
                            "end": 1349
                          },
                          "start": 1346,
                          "end": 1349
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1345,
                        "end": 1349
                      }
                    ],
                    "start": 1343,
                    "end": 1351
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1333,
                  "end": 1351
                }
              ],
              "start": 1332,
              "end": 1352
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1356,
                      "end": 1357
                    },
                    "typeArguments": null,
                    "start": 1356,
                    "end": 1357
                  },
                  "start": 1354,
                  "end": 1357
                },
                "start": 1353,
                "end": 1357
              }
            ],
            "returnType": null,
            "start": 1328,
            "end": 1359
          }
        ],
        "start": 1322,
        "end": 1395
      },
      "declare": false,
      "start": 1297,
      "end": 1395
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testClass7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1425,
        "end": 1435
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1444,
        "end": 1447
      },
      "superTypeArguments": {
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1450,
                  "end": 1451
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1453,
                      "end": 1454
                    },
                    "typeArguments": null,
                    "start": 1453,
                    "end": 1454
                  },
                  "start": 1451,
                  "end": 1454
                },
                "accessibility": null,
                "static": false,
                "start": 1450,
                "end": 1454
              }
            ],
            "start": 1448,
            "end": 1456
          }
        ],
        "start": 1447,
        "end": 1457
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1458,
        "end": 1461
      },
      "abstract": false,
      "declare": false,
      "start": 1419,
      "end": 1461
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testClass8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1528,
        "end": 1538
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1550,
            "end": 1554
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1557,
                      "end": 1558
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1560,
                          "end": 1561
                        },
                        "typeArguments": null,
                        "start": 1560,
                        "end": 1561
                      },
                      "start": 1558,
                      "end": 1561
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1557,
                    "end": 1561
                  }
                ],
                "start": 1555,
                "end": 1563
              }
            ],
            "start": 1554,
            "end": 1564
          },
          "start": 1550,
          "end": 1564
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1565,
        "end": 1568
      },
      "abstract": false,
      "declare": false,
      "start": 1522,
      "end": 1568
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testInterface2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1632,
        "end": 1646
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
                      "start": 1661,
                      "end": 1664
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1667,
                                "end": 1668
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1670,
                                    "end": 1671
                                  },
                                  "typeArguments": null,
                                  "start": 1670,
                                  "end": 1671
                                },
                                "start": 1668,
                                "end": 1671
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1667,
                              "end": 1671
                            }
                          ],
                          "start": 1665,
                          "end": 1673
                        }
                      ],
                      "start": 1664,
                      "end": 1674
                    },
                    "start": 1661,
                    "end": 1674
                  },
                  "start": 1659,
                  "end": 1674
                },
                "start": 1658,
                "end": 1674
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1677,
                  "end": 1680
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1683,
                            "end": 1684
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1686,
                                "end": 1687
                              },
                              "typeArguments": null,
                              "start": 1686,
                              "end": 1687
                            },
                            "start": 1684,
                            "end": 1687
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1683,
                          "end": 1687
                        }
                      ],
                      "start": 1681,
                      "end": 1689
                    }
                  ],
                  "start": 1680,
                  "end": 1690
                },
                "start": 1677,
                "end": 1690
              },
              "start": 1675,
              "end": 1690
            },
            "start": 1653,
            "end": 1691
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1737,
                    "end": 1743
                  },
                  "start": 1735,
                  "end": 1743
                },
                "start": 1734,
                "end": 1743
              }
            ],
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
                  "start": 1746,
                  "end": 1749
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1752,
                            "end": 1753
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1755,
                                "end": 1756
                              },
                              "typeArguments": null,
                              "start": 1755,
                              "end": 1756
                            },
                            "start": 1753,
                            "end": 1756
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1752,
                          "end": 1756
                        }
                      ],
                      "start": 1750,
                      "end": 1758
                    }
                  ],
                  "start": 1749,
                  "end": 1759
                },
                "start": 1746,
                "end": 1759
              },
              "start": 1744,
              "end": 1759
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1733,
            "end": 1760
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 1799,
              "end": 1805
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
                      "start": 1809,
                      "end": 1812
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1815,
                                "end": 1816
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1818,
                                    "end": 1819
                                  },
                                  "typeArguments": null,
                                  "start": 1818,
                                  "end": 1819
                                },
                                "start": 1816,
                                "end": 1819
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1815,
                              "end": 1819
                            }
                          ],
                          "start": 1813,
                          "end": 1821
                        }
                      ],
                      "start": 1812,
                      "end": 1822
                    },
                    "start": 1809,
                    "end": 1822
                  },
                  "start": 1807,
                  "end": 1822
                },
                "start": 1806,
                "end": 1822
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1825,
                  "end": 1828
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1831,
                            "end": 1832
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1834,
                                "end": 1835
                              },
                              "typeArguments": null,
                              "start": 1834,
                              "end": 1835
                            },
                            "start": 1832,
                            "end": 1835
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1831,
                          "end": 1835
                        }
                      ],
                      "start": 1829,
                      "end": 1837
                    }
                  ],
                  "start": 1828,
                  "end": 1838
                },
                "start": 1825,
                "end": 1838
              },
              "start": 1823,
              "end": 1838
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1799,
            "end": 1839
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null,
              "start": 1881,
              "end": 1889
            },
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
                  "start": 1891,
                  "end": 1894
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1897,
                            "end": 1898
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1900,
                                "end": 1901
                              },
                              "typeArguments": null,
                              "start": 1900,
                              "end": 1901
                            },
                            "start": 1898,
                            "end": 1901
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1897,
                          "end": 1901
                        }
                      ],
                      "start": 1895,
                      "end": 1903
                    }
                  ],
                  "start": 1894,
                  "end": 1904
                },
                "start": 1891,
                "end": 1904
              },
              "start": 1889,
              "end": 1904
            },
            "accessibility": null,
            "static": false,
            "start": 1881,
            "end": 1905
          }
        ],
        "start": 1647,
        "end": 1941
      },
      "declare": false,
      "start": 1622,
      "end": 1941
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1942
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
    "value": "IFoo",
    "start": 10,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 23,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 29,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 68,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "testClass1",
    "start": 74,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 99,
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
    "type": "Keyword",
    "value": "void",
    "start": 104,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 115,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "tc1",
    "start": 119,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 125,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "testClass1",
    "start": 129,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "tc1",
    "start": 143,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 147,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 236,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "testClass2",
    "start": 242,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 260,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "tc2",
    "start": 264,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 270,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "testClass2",
    "start": 274,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 370,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "testClass3",
    "start": 376,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "testMethod1",
    "start": 393,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 408,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "V",
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
    "type": "Keyword",
    "value": "return",
    "start": 424,
    "end": 430
  },
  {
    "type": "Null",
    "value": "null",
    "start": 431,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 477,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "testMethod2",
    "start": 484,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 499,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 513,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 515,
    "end": 521
  },
  {
    "type": "Null",
    "value": "null",
    "start": 522,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 567,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 573,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 580,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 637,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 647,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 696,
    "end": 697
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 738,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "testFunction1",
    "start": 747,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 764,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 778,
    "end": 779
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 780,
    "end": 786
  },
  {
    "type": "Null",
    "value": "null",
    "start": 787,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 793,
    "end": 794
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 852,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 861,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 878,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ")",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 895,
    "end": 896
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 958,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 965,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 978,
    "end": 979
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1034,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "testClass4",
    "start": 1040,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1053,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1110,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "testClass5",
    "start": 1120,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1133,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1141,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1153,
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
    "type": "Punctuator",
    "value": "}",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1195,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "testClass6",
    "start": 1201,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1221,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1230,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1245,
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
    "value": "(",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1251,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1297,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "testInterface1",
    "start": 1307,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1328,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1335,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1419,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "testClass7",
    "start": 1425,
    "end": 1435
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1436,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1444,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1522,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "testClass8",
    "start": 1528,
    "end": 1538
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1539,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1550,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1622,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "testInterface2",
    "start": 1632,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1653,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1661,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1677,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1737,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1746,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1799,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1809,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1825,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 1881,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1891,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1940,
    "end": 1941
  }
]
```

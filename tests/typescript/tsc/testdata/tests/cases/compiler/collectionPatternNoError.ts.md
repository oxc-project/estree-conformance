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
        "name": "MsgConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 24
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
              "start": 25,
              "end": 26
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 42
              },
              "typeArguments": null,
              "start": 35,
              "end": 42
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 25,
            "end": 42
          }
        ],
        "start": 24,
        "end": 43
      },
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
                "name": "data",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 58,
                      "end": 63
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 64,
                          "end": 66
                        }
                      ],
                      "start": 63,
                      "end": 67
                    },
                    "start": 58,
                    "end": 67
                  },
                  "start": 56,
                  "end": 67
                },
                "start": 52,
                "end": 67
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
                  "start": 70,
                  "end": 71
                },
                "typeArguments": null,
                "start": 70,
                "end": 71
              },
              "start": 68,
              "end": 71
            },
            "start": 48,
            "end": 72
          }
        ],
        "start": 44,
        "end": 74
      },
      "declare": false,
      "start": 0,
      "end": 74
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Message",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 88
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
              "name": "clone",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 98
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
                  "type": "TSThisType",
                  "start": 102,
                  "end": 106
                },
                "start": 100,
                "end": 106
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "start": 120,
                      "end": 124
                    },
                    "start": 113,
                    "end": 125
                  }
                ],
                "start": 107,
                "end": 129
              },
              "expression": false,
              "start": 98,
              "end": 129
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 93,
            "end": 129
          }
        ],
        "start": 89,
        "end": 131
      },
      "abstract": false,
      "declare": false,
      "start": 75,
      "end": 131
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MessageList",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 153
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
              "start": 154,
              "end": 155
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 171
              },
              "typeArguments": null,
              "start": 164,
              "end": 171
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 154,
            "end": 171
          }
        ],
        "start": 153,
        "end": 172
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Message",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 188
          },
          "typeArguments": null,
          "start": 181,
          "end": 188
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "methodOnMessageList",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 212
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 216,
                    "end": 217
                  },
                  "typeArguments": null,
                  "start": 216,
                  "end": 217
                },
                "start": 216,
                "end": 219
              },
              "start": 214,
              "end": 219
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 193,
            "end": 220
          }
        ],
        "start": 189,
        "end": 222
      },
      "declare": false,
      "start": 132,
      "end": 222
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fetchMsg",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 241
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
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 242,
              "end": 243
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 259
              },
              "typeArguments": null,
              "start": 252,
              "end": 259
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 242,
            "end": 259
          }
        ],
        "start": 241,
        "end": 260
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "protoCtor",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MsgConstructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 286
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 287,
                      "end": 288
                    },
                    "typeArguments": null,
                    "start": 287,
                    "end": 288
                  }
                ],
                "start": 286,
                "end": 289
              },
              "start": 272,
              "end": 289
            },
            "start": 270,
            "end": 289
          },
          "start": 261,
          "end": 289
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null,
            "start": 292,
            "end": 293
          },
          "typeArguments": null,
          "start": 292,
          "end": 293
        },
        "start": 290,
        "end": 293
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 305,
                "end": 309
              },
              "start": 305,
              "end": 310
            },
            "start": 298,
            "end": 311
          }
        ],
        "start": 294,
        "end": 313
      },
      "expression": false,
      "start": 224,
      "end": 313
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DataProvider",
        "optional": false,
        "typeAnnotation": null,
        "start": 321,
        "end": 333
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
              "start": 334,
              "end": 335
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 344,
                "end": 351
              },
              "typeArguments": null,
              "start": 344,
              "end": 351
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 334,
            "end": 351
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 353,
              "end": 354
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MessageList",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 374
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
                      "start": 375,
                      "end": 376
                    },
                    "typeArguments": null,
                    "start": 375,
                    "end": 376
                  }
                ],
                "start": 374,
                "end": 377
              },
              "start": 363,
              "end": 377
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 353,
            "end": 377
          }
        ],
        "start": 333,
        "end": 378
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
              "start": 383,
              "end": 394
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
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "message",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MsgConstructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 426,
                          "end": 440
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
                                "start": 441,
                                "end": 442
                              },
                              "typeArguments": null,
                              "start": 441,
                              "end": 442
                            }
                          ],
                          "start": 440,
                          "end": 443
                        },
                        "start": 426,
                        "end": 443
                      },
                      "start": 424,
                      "end": 443
                    },
                    "start": 417,
                    "end": 443
                  },
                  "readonly": true,
                  "static": false,
                  "start": 400,
                  "end": 443
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "messageList",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MsgConstructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 479,
                          "end": 493
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 494,
                                "end": 495
                              },
                              "typeArguments": null,
                              "start": 494,
                              "end": 495
                            }
                          ],
                          "start": 493,
                          "end": 496
                        },
                        "start": 479,
                        "end": 496
                      },
                      "start": 477,
                      "end": 496
                    },
                    "start": 466,
                    "end": 496
                  },
                  "readonly": true,
                  "static": false,
                  "start": 449,
                  "end": 496
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 502,
                "end": 505
              },
              "expression": false,
              "start": 394,
              "end": 505
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 383,
            "end": 505
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fetch",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 514
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
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "messageList",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 529,
                          "end": 540
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fetchMsg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 543,
                            "end": 551
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 552,
                                "end": 556
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "messageList",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 557,
                                "end": 568
                              },
                              "optional": false,
                              "computed": false,
                              "start": 552,
                              "end": 568
                            }
                          ],
                          "optional": false,
                          "start": 543,
                          "end": 569
                        },
                        "definite": false,
                        "start": 529,
                        "end": 569
                      }
                    ],
                    "declare": false,
                    "start": 523,
                    "end": 570
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
                          "name": "messageList",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 575,
                          "end": 586
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "methodOnMessageList",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 587,
                          "end": 606
                        },
                        "optional": false,
                        "computed": false,
                        "start": 575,
                        "end": 606
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 575,
                      "end": 608
                    },
                    "directive": null,
                    "start": 575,
                    "end": 609
                  }
                ],
                "start": 517,
                "end": 613
              },
              "expression": false,
              "start": 514,
              "end": 613
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 509,
            "end": 613
          }
        ],
        "start": 379,
        "end": 615
      },
      "abstract": false,
      "declare": false,
      "start": 315,
      "end": 615
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 766,
        "end": 767
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 771,
              "end": 772
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
                    "name": "TType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 782,
                    "end": 787
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MessageList",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 789,
                        "end": 800
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
                              "start": 801,
                              "end": 802
                            },
                            "typeArguments": null,
                            "start": 801,
                            "end": 802
                          }
                        ],
                        "start": 800,
                        "end": 803
                      },
                      "start": 789,
                      "end": 803
                    },
                    "start": 787,
                    "end": 803
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 782,
                  "end": 803
                }
              ],
              "start": 781,
              "end": 804
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 771,
            "end": 804
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 808,
              "end": 809
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 818,
                "end": 825
              },
              "typeArguments": null,
              "start": 818,
              "end": 825
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 808,
            "end": 825
          }
        ],
        "start": 767,
        "end": 827
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "message",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MsgConstructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 837,
                "end": 851
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
                      "start": 852,
                      "end": 853
                    },
                    "typeArguments": null,
                    "start": 852,
                    "end": 853
                  }
                ],
                "start": 851,
                "end": 854
              },
              "start": 837,
              "end": 854
            },
            "start": 835,
            "end": 854
          },
          "start": 828,
          "end": 854
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "messageList",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MsgConstructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 869,
                "end": 883
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 884,
                        "end": 885
                      },
                      "typeArguments": null,
                      "start": 884,
                      "end": 885
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "TType",
                        "raw": "\"TType\"",
                        "start": 886,
                        "end": 893
                      },
                      "start": 886,
                      "end": 893
                    },
                    "start": 884,
                    "end": 894
                  }
                ],
                "start": 883,
                "end": 895
              },
              "start": 869,
              "end": 895
            },
            "start": 867,
            "end": 895
          },
          "start": 856,
          "end": 895
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
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fetchMsg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 901,
                    "end": 909
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "messageList",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 910,
                      "end": 921
                    }
                  ],
                  "optional": false,
                  "start": 901,
                  "end": 922
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "methodOnMessageList",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 923,
                  "end": 942
                },
                "optional": false,
                "computed": false,
                "start": 901,
                "end": 942
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 901,
              "end": 944
            },
            "directive": null,
            "start": 901,
            "end": 945
          }
        ],
        "start": 897,
        "end": 947
      },
      "expression": false,
      "start": 757,
      "end": 947
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 947
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
    "value": "MsgConstructor",
    "start": 10,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 27,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "Message",
    "start": 35,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 48,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 52,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 58,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 75,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "Message",
    "start": 81,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "clone",
    "start": 93,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 102,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 113,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 120,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 132,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "MessageList",
    "start": 142,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 156,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "Message",
    "start": 164,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 173,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "Message",
    "start": 181,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "methodOnMessageList",
    "start": 193,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 224,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "fetchMsg",
    "start": 233,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 244,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "Message",
    "start": 252,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "protoCtor",
    "start": 261,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "MsgConstructor",
    "start": 272,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 298,
    "end": 304
  },
  {
    "type": "Null",
    "value": "null",
    "start": 305,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 315,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "DataProvider",
    "start": 321,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 336,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "Message",
    "start": 344,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 355,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "MessageList",
    "start": 363,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 383,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 394,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 400,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 408,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 417,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "MsgConstructor",
    "start": 426,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 443,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 449,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 457,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "messageList",
    "start": 466,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "MsgConstructor",
    "start": 479,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "fetch",
    "start": 509,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 517,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 523,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "messageList",
    "start": 529,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "fetchMsg",
    "start": 543,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 551,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 552,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "messageList",
    "start": 557,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "messageList",
    "start": 575,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "methodOnMessageList",
    "start": 587,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 757,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 771,
    "end": 772
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 773,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 782,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "MessageList",
    "start": 789,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 808,
    "end": 809
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 810,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "Message",
    "start": 818,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 828,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "MsgConstructor",
    "start": 837,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "messageList",
    "start": 856,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "MsgConstructor",
    "start": 869,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 885,
    "end": 886
  },
  {
    "type": "String",
    "value": "\"TType\"",
    "start": 886,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 893,
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
    "value": ")",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "fetchMsg",
    "start": 901,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "messageList",
    "start": 910,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "methodOnMessageList",
    "start": 923,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 946,
    "end": 947
  }
]
```

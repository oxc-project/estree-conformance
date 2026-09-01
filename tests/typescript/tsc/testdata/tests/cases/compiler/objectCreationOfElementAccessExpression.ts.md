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
        "name": "Food",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
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
              "name": "amount",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 31
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 33,
                "end": 39
              },
              "start": 31,
              "end": 39
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 17,
            "end": 40
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 56
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
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 70,
                        "end": 76
                      },
                      "start": 68,
                      "end": 76
                    },
                    "start": 64,
                    "end": 76
                  },
                  "readonly": false,
                  "static": false,
                  "start": 57,
                  "end": 76
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 88,
                          "end": 92
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "amount",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 93,
                          "end": 99
                        },
                        "optional": false,
                        "computed": false,
                        "start": 88,
                        "end": 99
                      },
                      "right": {
                        "type": "Literal",
                        "value": 100,
                        "raw": "100",
                        "start": 102,
                        "end": 105
                      },
                      "start": 88,
                      "end": 105
                    },
                    "directive": null,
                    "start": 88,
                    "end": 106
                  }
                ],
                "start": 78,
                "end": 112
              },
              "expression": false,
              "start": 56,
              "end": 112
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 45,
            "end": 112
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "eat",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 127
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
                  "name": "amountToEat",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 141,
                      "end": 147
                    },
                    "start": 139,
                    "end": 147
                  },
                  "start": 128,
                  "end": 147
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 150,
                  "end": 157
                },
                "start": 148,
                "end": 157
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 168,
                          "end": 172
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "amount",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 173,
                          "end": 179
                        },
                        "optional": false,
                        "computed": false,
                        "start": 168,
                        "end": 179
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "amountToEat",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 183,
                        "end": 194
                      },
                      "start": 168,
                      "end": 194
                    },
                    "directive": null,
                    "start": 168,
                    "end": 195
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 208,
                          "end": 212
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "amount",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 213,
                          "end": 219
                        },
                        "optional": false,
                        "computed": false,
                        "start": 208,
                        "end": 219
                      },
                      "operator": "<=",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 223,
                        "end": 224
                      },
                      "start": 208,
                      "end": 224
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 240,
                                "end": 244
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "amount",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 245,
                                "end": 251
                              },
                              "optional": false,
                              "computed": false,
                              "start": 240,
                              "end": 251
                            },
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 254,
                              "end": 255
                            },
                            "start": 240,
                            "end": 255
                          },
                          "directive": null,
                          "start": 240,
                          "end": 256
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 276,
                            "end": 281
                          },
                          "start": 269,
                          "end": 282
                        }
                      ],
                      "start": 226,
                      "end": 292
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 327,
                            "end": 331
                          },
                          "start": 320,
                          "end": 332
                        }
                      ],
                      "start": 306,
                      "end": 342
                    },
                    "start": 204,
                    "end": 342
                  }
                ],
                "start": 158,
                "end": 348
              },
              "expression": false,
              "start": 127,
              "end": 348
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 117,
            "end": 348
          }
        ],
        "start": 11,
        "end": 350
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 350
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MonsterFood",
        "optional": false,
        "typeAnnotation": null,
        "start": 357,
        "end": 368
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Food",
        "optional": false,
        "typeAnnotation": null,
        "start": 377,
        "end": 381
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 388,
              "end": 399
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 406,
                      "end": 412
                    },
                    "start": 404,
                    "end": 412
                  },
                  "start": 400,
                  "end": 412
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "flavor",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 429,
                        "end": 435
                      },
                      "start": 427,
                      "end": 435
                    },
                    "start": 421,
                    "end": 435
                  },
                  "readonly": false,
                  "static": false,
                  "start": 414,
                  "end": 435
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
                        "start": 447,
                        "end": 452
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 453,
                          "end": 457
                        }
                      ],
                      "optional": false,
                      "start": 447,
                      "end": 458
                    },
                    "directive": null,
                    "start": 447,
                    "end": 459
                  }
                ],
                "start": 437,
                "end": 465
              },
              "expression": false,
              "start": 399,
              "end": 465
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 388,
            "end": 465
          }
        ],
        "start": 382,
        "end": 467
      },
      "abstract": false,
      "declare": false,
      "start": 351,
      "end": 467
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IceCream",
        "optional": false,
        "typeAnnotation": null,
        "start": 474,
        "end": 482
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "MonsterFood",
        "optional": false,
        "typeAnnotation": null,
        "start": 491,
        "end": 502
      },
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
              "name": "isDairyFree",
              "optional": false,
              "typeAnnotation": null,
              "start": 517,
              "end": 528
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 530,
                "end": 537
              },
              "start": 528,
              "end": 537
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 509,
            "end": 538
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 543,
              "end": 554
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
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "flavor",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 570,
                        "end": 576
                      },
                      "start": 568,
                      "end": 576
                    },
                    "start": 562,
                    "end": 576
                  },
                  "readonly": false,
                  "static": false,
                  "start": 555,
                  "end": 576
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
                        "start": 588,
                        "end": 593
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Ice Cream",
                          "raw": "\"Ice Cream\"",
                          "start": 594,
                          "end": 605
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "flavor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 607,
                          "end": 613
                        }
                      ],
                      "optional": false,
                      "start": 588,
                      "end": 614
                    },
                    "directive": null,
                    "start": 588,
                    "end": 615
                  }
                ],
                "start": 578,
                "end": 621
              },
              "expression": false,
              "start": 554,
              "end": 621
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 543,
            "end": 621
          }
        ],
        "start": 503,
        "end": 623
      },
      "abstract": false,
      "declare": false,
      "start": 468,
      "end": 623
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cookie",
        "optional": false,
        "typeAnnotation": null,
        "start": 630,
        "end": 636
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "MonsterFood",
        "optional": false,
        "typeAnnotation": null,
        "start": 645,
        "end": 656
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 663,
              "end": 674
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
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "flavor",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 690,
                        "end": 696
                      },
                      "start": 688,
                      "end": 696
                    },
                    "start": 682,
                    "end": 696
                  },
                  "readonly": false,
                  "static": false,
                  "start": 675,
                  "end": 696
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isGlutenFree",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 719,
                        "end": 726
                      },
                      "start": 717,
                      "end": 726
                    },
                    "start": 705,
                    "end": 726
                  },
                  "readonly": false,
                  "static": false,
                  "start": 698,
                  "end": 726
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
                        "start": 738,
                        "end": 743
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Cookie",
                          "raw": "\"Cookie\"",
                          "start": 744,
                          "end": 752
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "flavor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 754,
                          "end": 760
                        }
                      ],
                      "optional": false,
                      "start": 738,
                      "end": 761
                    },
                    "directive": null,
                    "start": 738,
                    "end": 762
                  }
                ],
                "start": 728,
                "end": 768
              },
              "expression": false,
              "start": 674,
              "end": 768
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 663,
            "end": 768
          }
        ],
        "start": 657,
        "end": 770
      },
      "abstract": false,
      "declare": false,
      "start": 624,
      "end": 770
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PetFood",
        "optional": false,
        "typeAnnotation": null,
        "start": 777,
        "end": 784
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Food",
        "optional": false,
        "typeAnnotation": null,
        "start": 793,
        "end": 797
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 804,
              "end": 815
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 822,
                      "end": 828
                    },
                    "start": 820,
                    "end": 828
                  },
                  "start": 816,
                  "end": 828
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "whereToBuy",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 849,
                        "end": 855
                      },
                      "start": 847,
                      "end": 855
                    },
                    "start": 837,
                    "end": 855
                  },
                  "readonly": false,
                  "static": false,
                  "start": 830,
                  "end": 855
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
                        "start": 867,
                        "end": 872
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 873,
                          "end": 877
                        }
                      ],
                      "optional": false,
                      "start": 867,
                      "end": 878
                    },
                    "directive": null,
                    "start": 867,
                    "end": 879
                  }
                ],
                "start": 857,
                "end": 885
              },
              "expression": false,
              "start": 815,
              "end": 885
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 804,
            "end": 885
          }
        ],
        "start": 798,
        "end": 887
      },
      "abstract": false,
      "declare": false,
      "start": 771,
      "end": 887
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpensiveOrganicDogFood",
        "optional": false,
        "typeAnnotation": null,
        "start": 894,
        "end": 917
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "PetFood",
        "optional": false,
        "typeAnnotation": null,
        "start": 926,
        "end": 933
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 940,
              "end": 951
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
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "whereToBuy",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 971,
                        "end": 977
                      },
                      "start": 969,
                      "end": 977
                    },
                    "start": 959,
                    "end": 977
                  },
                  "readonly": false,
                  "static": false,
                  "start": 952,
                  "end": 977
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
                        "start": 989,
                        "end": 994
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Origen",
                          "raw": "\"Origen\"",
                          "start": 995,
                          "end": 1003
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "whereToBuy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1005,
                          "end": 1015
                        }
                      ],
                      "optional": false,
                      "start": 989,
                      "end": 1016
                    },
                    "directive": null,
                    "start": 989,
                    "end": 1017
                  }
                ],
                "start": 979,
                "end": 1023
              },
              "expression": false,
              "start": 951,
              "end": 1023
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 940,
            "end": 1023
          }
        ],
        "start": 934,
        "end": 1025
      },
      "abstract": false,
      "declare": false,
      "start": 888,
      "end": 1025
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpensiveOrganicCatFood",
        "optional": false,
        "typeAnnotation": null,
        "start": 1032,
        "end": 1055
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "PetFood",
        "optional": false,
        "typeAnnotation": null,
        "start": 1064,
        "end": 1071
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1078,
              "end": 1089
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
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "whereToBuy",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1109,
                        "end": 1115
                      },
                      "start": 1107,
                      "end": 1115
                    },
                    "start": 1097,
                    "end": 1115
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1090,
                  "end": 1115
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "containsFish",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1138,
                        "end": 1145
                      },
                      "start": 1136,
                      "end": 1145
                    },
                    "start": 1124,
                    "end": 1145
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1117,
                  "end": 1145
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
                        "start": 1157,
                        "end": 1162
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Nature's Logic",
                          "raw": "\"Nature's Logic\"",
                          "start": 1163,
                          "end": 1179
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "whereToBuy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1181,
                          "end": 1191
                        }
                      ],
                      "optional": false,
                      "start": 1157,
                      "end": 1192
                    },
                    "directive": null,
                    "start": 1157,
                    "end": 1193
                  }
                ],
                "start": 1147,
                "end": 1199
              },
              "expression": false,
              "start": 1089,
              "end": 1199
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1078,
            "end": 1199
          }
        ],
        "start": 1072,
        "end": 1201
      },
      "abstract": false,
      "declare": false,
      "start": 1026,
      "end": 1201
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Slug",
        "optional": false,
        "typeAnnotation": null,
        "start": 1208,
        "end": 1212
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1213,
        "end": 1245
      },
      "abstract": false,
      "declare": false,
      "start": 1202,
      "end": 1245
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
            "name": "foods",
            "optional": false,
            "typeAnnotation": null,
            "start": 1349,
            "end": 1354
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "PetFood",
                "optional": false,
                "typeAnnotation": null,
                "start": 1361,
                "end": 1368
              },
              "property": {
                "type": "SequenceExpression",
                "expressions": [
                  {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IceCream",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1373,
                      "end": 1381
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Mint chocolate chip",
                        "raw": "'Mint chocolate chip'",
                        "start": 1382,
                        "end": 1403
                      }
                    ],
                    "start": 1369,
                    "end": 1404
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cookie",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1407,
                      "end": 1413
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Chocolate chip",
                        "raw": "'Chocolate chip'",
                        "start": 1414,
                        "end": 1430
                      },
                      {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 1432,
                        "end": 1437
                      }
                    ],
                    "optional": false,
                    "start": 1407,
                    "end": 1438
                  },
                  {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cookie",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1445,
                      "end": 1451
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Peanut butter",
                        "raw": "'Peanut butter'",
                        "start": 1452,
                        "end": 1467
                      },
                      {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1469,
                        "end": 1473
                      }
                    ],
                    "start": 1441,
                    "end": 1474
                  }
                ],
                "start": 1369,
                "end": 1474
              },
              "optional": false,
              "computed": true,
              "start": 1361,
              "end": 1475
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1357,
            "end": 1475
          },
          "definite": false,
          "start": 1349,
          "end": 1475
        }
      ],
      "declare": false,
      "start": 1345,
      "end": 1476
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
            "name": "foods2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MonsterFood",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1489,
                    "end": 1500
                  },
                  "typeArguments": null,
                  "start": 1489,
                  "end": 1500
                },
                "start": 1489,
                "end": 1502
              },
              "start": 1487,
              "end": 1502
            },
            "start": 1481,
            "end": 1502
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "PetFood",
                "optional": false,
                "typeAnnotation": null,
                "start": 1509,
                "end": 1516
              },
              "property": {
                "type": "SequenceExpression",
                "expressions": [
                  {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IceCream",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1521,
                      "end": 1529
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Mint chocolate chip",
                        "raw": "'Mint chocolate chip'",
                        "start": 1530,
                        "end": 1551
                      }
                    ],
                    "start": 1517,
                    "end": 1552
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cookie",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1555,
                      "end": 1561
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Chocolate chip",
                        "raw": "'Chocolate chip'",
                        "start": 1562,
                        "end": 1578
                      },
                      {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 1580,
                        "end": 1585
                      }
                    ],
                    "optional": false,
                    "start": 1555,
                    "end": 1586
                  },
                  {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cookie",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1593,
                      "end": 1599
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Peanut butter",
                        "raw": "'Peanut butter'",
                        "start": 1600,
                        "end": 1615
                      },
                      {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1617,
                        "end": 1621
                      }
                    ],
                    "start": 1589,
                    "end": 1622
                  }
                ],
                "start": 1517,
                "end": 1622
              },
              "optional": false,
              "computed": true,
              "start": 1509,
              "end": 1623
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1505,
            "end": 1623
          },
          "definite": false,
          "start": 1481,
          "end": 1623
        }
      ],
      "declare": false,
      "start": 1477,
      "end": 1624
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1624
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Food",
    "start": 6,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 17,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "amount",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 33,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 45,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 57,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 64,
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
    "value": "string",
    "start": 70,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 88,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "amount",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 100,
    "end": 101
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 102,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 117,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "eat",
    "start": 124,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "amountToEat",
    "start": 128,
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
    "value": "number",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 150,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 168,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "amount",
    "start": 173,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "-=",
    "start": 180,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "amountToEat",
    "start": 183,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 204,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 208,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "amount",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 220,
    "end": 222
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 240,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "amount",
    "start": 245,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 252,
    "end": 253
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 269,
    "end": 275
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 276,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 301,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 320,
    "end": 326
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 327,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 349,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 351,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "MonsterFood",
    "start": 357,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 369,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "Food",
    "start": 377,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 388,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 400,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 406,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 414,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "flavor",
    "start": 421,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 429,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "super",
    "start": 447,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 453,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 466,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 468,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "IceCream",
    "start": 474,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 483,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "MonsterFood",
    "start": 491,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 503,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 509,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "isDairyFree",
    "start": 517,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 530,
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
    "value": "constructor",
    "start": 543,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 555,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "flavor",
    "start": 562,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 570,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 578,
    "end": 579
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 588,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 593,
    "end": 594
  },
  {
    "type": "String",
    "value": "\"Ice Cream\"",
    "start": 594,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "flavor",
    "start": 607,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 622,
    "end": 623
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 624,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "Cookie",
    "start": 630,
    "end": 636
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 637,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "MonsterFood",
    "start": 645,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 663,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 674,
    "end": 675
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 675,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "flavor",
    "start": 682,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 690,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 696,
    "end": 697
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 698,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "isGlutenFree",
    "start": 705,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 719,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 728,
    "end": 729
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 738,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 743,
    "end": 744
  },
  {
    "type": "String",
    "value": "\"Cookie\"",
    "start": 744,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "flavor",
    "start": 754,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 769,
    "end": 770
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 771,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "PetFood",
    "start": 777,
    "end": 784
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 785,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "Food",
    "start": 793,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 804,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 816,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 822,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 828,
    "end": 829
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 830,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "whereToBuy",
    "start": 837,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 849,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 857,
    "end": 858
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 867,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 873,
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
    "value": ";",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 886,
    "end": 887
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 888,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "ExpensiveOrganicDogFood",
    "start": 894,
    "end": 917
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 918,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "PetFood",
    "start": 926,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 940,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 951,
    "end": 952
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 952,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "whereToBuy",
    "start": 959,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 971,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 979,
    "end": 980
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 989,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 994,
    "end": 995
  },
  {
    "type": "String",
    "value": "\"Origen\"",
    "start": 995,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "whereToBuy",
    "start": 1005,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1026,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "ExpensiveOrganicCatFood",
    "start": 1032,
    "end": 1055
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1056,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "PetFood",
    "start": 1064,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1078,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1090,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "whereToBuy",
    "start": 1097,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1109,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1117,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "containsFish",
    "start": 1124,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1138,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1157,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "String",
    "value": "\"Nature's Logic\"",
    "start": 1163,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "whereToBuy",
    "start": 1181,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1202,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "Slug",
    "start": 1208,
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
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1345,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "foods",
    "start": 1349,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1357,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "PetFood",
    "start": 1361,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1369,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "IceCream",
    "start": 1373,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "String",
    "value": "'Mint chocolate chip'",
    "start": 1382,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "Cookie",
    "start": 1407,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "String",
    "value": "'Chocolate chip'",
    "start": 1414,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1432,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1441,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "Cookie",
    "start": 1445,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "String",
    "value": "'Peanut butter'",
    "start": 1452,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1469,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1477,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "foods2",
    "start": 1481,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "MonsterFood",
    "start": 1489,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1505,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "PetFood",
    "start": 1509,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1517,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "IceCream",
    "start": 1521,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "String",
    "value": "'Mint chocolate chip'",
    "start": 1530,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "Cookie",
    "start": 1555,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "String",
    "value": "'Chocolate chip'",
    "start": 1562,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1580,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1589,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "Cookie",
    "start": 1593,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "String",
    "value": "'Peanut butter'",
    "start": 1600,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1617,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1623,
    "end": 1624
  }
]
```

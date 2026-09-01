__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 10,
          "end": 13
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 17
        },
        "start": 10,
        "end": 17
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "\"use strict\"",
              "start": 24,
              "end": 36
            },
            "directive": "use strict",
            "start": 24,
            "end": 37
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Greeter",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 56
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
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 67,
                    "end": 78
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
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 96,
                              "end": 102
                            },
                            "start": 94,
                            "end": 102
                          },
                          "start": 86,
                          "end": 102
                        },
                        "readonly": false,
                        "static": false,
                        "start": 79,
                        "end": 102
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 104,
                      "end": 115
                    },
                    "expression": false,
                    "start": 78,
                    "end": 115
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 67,
                  "end": 115
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "greet",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 125,
                    "end": 130
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
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Literal",
                                "value": "<h1>",
                                "raw": "\"<h1>\"",
                                "start": 154,
                                "end": 160
                              },
                              "operator": "+",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 163,
                                  "end": 167
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "greeting",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 168,
                                  "end": 176
                                },
                                "optional": false,
                                "computed": false,
                                "start": 163,
                                "end": 176
                              },
                              "start": 154,
                              "end": 176
                            },
                            "operator": "+",
                            "right": {
                              "type": "Literal",
                              "value": "</h1>",
                              "raw": "\"</h1>\"",
                              "start": 179,
                              "end": 186
                            },
                            "start": 154,
                            "end": 186
                          },
                          "start": 147,
                          "end": 187
                        }
                      ],
                      "start": 133,
                      "end": 197
                    },
                    "expression": false,
                    "start": 130,
                    "end": 197
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 125,
                  "end": 197
                }
              ],
              "start": 57,
              "end": 203
            },
            "abstract": false,
            "declare": false,
            "start": 43,
            "end": 203
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 222
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "greeting",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 233,
                    "end": 239
                  },
                  "start": 231,
                  "end": 239
                },
                "start": 223,
                "end": 239
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Greeter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 242,
                  "end": 249
                },
                "typeArguments": null,
                "start": 242,
                "end": 249
              },
              "start": 240,
              "end": 249
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
                      "name": "Greeter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 271,
                      "end": 278
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "greeting",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 279,
                        "end": 287
                      }
                    ],
                    "start": 267,
                    "end": 288
                  },
                  "start": 260,
                  "end": 289
                }
              ],
              "start": 250,
              "end": 295
            },
            "expression": false,
            "start": 210,
            "end": 295
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
                  "name": "greeter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 305,
                  "end": 312
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Greeter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 319,
                    "end": 326
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Hello, world!",
                      "raw": "\"Hello, world!\"",
                      "start": 327,
                      "end": 342
                    }
                  ],
                  "start": 315,
                  "end": 343
                },
                "definite": false,
                "start": 305,
                "end": 343
              }
            ],
            "declare": false,
            "start": 301,
            "end": 344
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
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 353,
                  "end": 356
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "greeter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 359,
                      "end": 366
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "greet",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 367,
                      "end": 372
                    },
                    "optional": false,
                    "computed": false,
                    "start": 359,
                    "end": 372
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 359,
                  "end": 374
                },
                "definite": false,
                "start": 353,
                "end": 374
              }
            ],
            "declare": false,
            "start": 349,
            "end": 375
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 394
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "greeting",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 405,
                    "end": 411
                  },
                  "start": 403,
                  "end": 411
                },
                "start": 395,
                "end": 411
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "restGreetings",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 416,
                  "end": 429
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 451,
                      "end": 457
                    },
                    "start": 451,
                    "end": 459
                  },
                  "start": 449,
                  "end": 459
                },
                "value": null,
                "start": 413,
                "end": 459
              }
            ],
            "returnType": null,
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
                        "name": "greeters",
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
                                "name": "Greeter",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 485,
                                "end": 492
                              },
                              "typeArguments": null,
                              "start": 485,
                              "end": 492
                            },
                            "start": 485,
                            "end": 494
                          },
                          "start": 483,
                          "end": 494
                        },
                        "start": 475,
                        "end": 494
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "start": 497,
                        "end": 499
                      },
                      "definite": false,
                      "start": 475,
                      "end": 499
                    }
                  ],
                  "declare": false,
                  "start": 471,
                  "end": 500
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "greeters",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 536,
                        "end": 544
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 545,
                        "end": 546
                      },
                      "optional": false,
                      "computed": true,
                      "start": 536,
                      "end": 547
                    },
                    "right": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Greeter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 554,
                        "end": 561
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 562,
                          "end": 570
                        }
                      ],
                      "start": 550,
                      "end": 571
                    },
                    "start": 536,
                    "end": 571
                  },
                  "directive": null,
                  "start": 536,
                  "end": 572
                },
                {
                  "type": "ForStatement",
                  "init": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 590,
                          "end": 591
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 594,
                          "end": 595
                        },
                        "definite": false,
                        "start": 590,
                        "end": 595
                      }
                    ],
                    "declare": false,
                    "start": 586,
                    "end": 595
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 597,
                      "end": 598
                    },
                    "operator": "<",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "restGreetings",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 601,
                        "end": 614
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 615,
                        "end": 621
                      },
                      "optional": false,
                      "computed": false,
                      "start": 601,
                      "end": 621
                    },
                    "start": 597,
                    "end": 621
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 623,
                      "end": 624
                    },
                    "start": 623,
                    "end": 626
                  },
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "greeters",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 642,
                              "end": 650
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "push",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 651,
                              "end": 655
                            },
                            "optional": false,
                            "computed": false,
                            "start": 642,
                            "end": 655
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Greeter",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 660,
                                "end": 667
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "restGreetings",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 668,
                                    "end": 681
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 682,
                                    "end": 683
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 668,
                                  "end": 684
                                }
                              ],
                              "start": 656,
                              "end": 685
                            }
                          ],
                          "optional": false,
                          "start": 642,
                          "end": 686
                        },
                        "directive": null,
                        "start": 642,
                        "end": 687
                      }
                    ],
                    "start": 628,
                    "end": 697
                  },
                  "start": 581,
                  "end": 697
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "greeters",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 714,
                    "end": 722
                  },
                  "start": 707,
                  "end": 723
                }
              ],
              "start": 461,
              "end": 729
            },
            "expression": false,
            "start": 381,
            "end": 729
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 739,
                  "end": 740
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 743,
                    "end": 747
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Hello",
                      "raw": "\"Hello\"",
                      "start": 748,
                      "end": 755
                    },
                    {
                      "type": "Literal",
                      "value": "World",
                      "raw": "\"World\"",
                      "start": 757,
                      "end": 764
                    },
                    {
                      "type": "Literal",
                      "value": "!",
                      "raw": "\"!\"",
                      "start": 766,
                      "end": 769
                    }
                  ],
                  "optional": false,
                  "start": 743,
                  "end": 770
                },
                "definite": false,
                "start": 739,
                "end": 770
              }
            ],
            "declare": false,
            "start": 735,
            "end": 771
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 827,
                    "end": 828
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 831,
                    "end": 832
                  },
                  "definite": false,
                  "start": 827,
                  "end": 832
                }
              ],
              "declare": false,
              "start": 823,
              "end": 832
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null,
                "start": 834,
                "end": 835
              },
              "operator": "<",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 838,
                  "end": 839
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 840,
                  "end": 846
                },
                "optional": false,
                "computed": false,
                "start": 838,
                "end": 846
              },
              "start": 834,
              "end": 846
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null,
                "start": 848,
                "end": 849
              },
              "start": 848,
              "end": 851
            },
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 863,
                          "end": 864
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 865,
                          "end": 866
                        },
                        "optional": false,
                        "computed": true,
                        "start": 863,
                        "end": 867
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "greet",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 868,
                        "end": 873
                      },
                      "optional": false,
                      "computed": false,
                      "start": 863,
                      "end": 873
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 863,
                    "end": 875
                  },
                  "directive": null,
                  "start": 863,
                  "end": 876
                }
              ],
              "start": 853,
              "end": 882
            },
            "start": 818,
            "end": 882
          }
        ],
        "start": 18,
        "end": 884
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 884
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 884
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 14,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "String",
    "value": "\"use strict\"",
    "start": 24,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 43,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "Greeter",
    "start": 49,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 67,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 79,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 86,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 96,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "greet",
    "start": 125,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 147,
    "end": 153
  },
  {
    "type": "String",
    "value": "\"<h1>\"",
    "start": 154,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 163,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 168,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 177,
    "end": 178
  },
  {
    "type": "String",
    "value": "\"</h1>\"",
    "start": 179,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 210,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 219,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 223,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 233,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "Greeter",
    "start": 242,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 260,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 267,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "Greeter",
    "start": 271,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 279,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 301,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "greeter",
    "start": 305,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 315,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "Greeter",
    "start": 319,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 326,
    "end": 327
  },
  {
    "type": "String",
    "value": "\"Hello, world!\"",
    "start": 327,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 349,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 353,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "greeter",
    "start": 359,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "greet",
    "start": 367,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 381,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 390,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 395,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 405,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 413,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "restGreetings",
    "start": 416,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 451,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 471,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "greeters",
    "start": 475,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "Greeter",
    "start": 485,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "greeters",
    "start": 536,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 544,
    "end": 545
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 548,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 550,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "Greeter",
    "start": 554,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 562,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 571,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 581,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 585,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 586,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 592,
    "end": 593
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "restGreetings",
    "start": 601,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 615,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 624,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "greeters",
    "start": 642,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 651,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 655,
    "end": 656
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 656,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "Greeter",
    "start": 660,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "restGreetings",
    "start": 668,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 696,
    "end": 697
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 707,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "greeters",
    "start": 714,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 728,
    "end": 729
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 735,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 743,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 747,
    "end": 748
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 748,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 755,
    "end": 756
  },
  {
    "type": "String",
    "value": "\"World\"",
    "start": 757,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 764,
    "end": 765
  },
  {
    "type": "String",
    "value": "\"!\"",
    "start": 766,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 770,
    "end": 771
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 818,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 822,
    "end": 823
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 823,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 829,
    "end": 830
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 840,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 849,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "greet",
    "start": 868,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 883,
    "end": 884
  }
]
```

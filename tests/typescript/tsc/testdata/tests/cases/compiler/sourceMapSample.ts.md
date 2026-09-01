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
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 242,
                      "end": 245
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 246,
                      "end": 249
                    },
                    "start": 242,
                    "end": 249
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Greeter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 250,
                    "end": 257
                  },
                  "start": 242,
                  "end": 257
                },
                "typeArguments": null,
                "start": 242,
                "end": 257
              },
              "start": 240,
              "end": 257
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
                      "start": 279,
                      "end": 286
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "greeting",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 287,
                        "end": 295
                      }
                    ],
                    "start": 275,
                    "end": 296
                  },
                  "start": 268,
                  "end": 297
                }
              ],
              "start": 258,
              "end": 303
            },
            "expression": false,
            "start": 210,
            "end": 303
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
                  "start": 313,
                  "end": 320
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Greeter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 327,
                    "end": 334
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Hello, world!",
                      "raw": "\"Hello, world!\"",
                      "start": 335,
                      "end": 350
                    }
                  ],
                  "start": 323,
                  "end": 351
                },
                "definite": false,
                "start": 313,
                "end": 351
              }
            ],
            "declare": false,
            "start": 309,
            "end": 352
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
                  "start": 361,
                  "end": 364
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
                      "start": 367,
                      "end": 374
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "greet",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 375,
                      "end": 380
                    },
                    "optional": false,
                    "computed": false,
                    "start": 367,
                    "end": 380
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 367,
                  "end": 382
                },
                "definite": false,
                "start": 361,
                "end": 382
              }
            ],
            "declare": false,
            "start": 357,
            "end": 383
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 402
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
                    "start": 413,
                    "end": 419
                  },
                  "start": 411,
                  "end": 419
                },
                "start": 403,
                "end": 419
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
                  "start": 424,
                  "end": 437
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 439,
                      "end": 445
                    },
                    "start": 439,
                    "end": 447
                  },
                  "start": 437,
                  "end": 447
                },
                "value": null,
                "start": 421,
                "end": 447
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
                                "start": 473,
                                "end": 480
                              },
                              "typeArguments": null,
                              "start": 473,
                              "end": 480
                            },
                            "start": 473,
                            "end": 482
                          },
                          "start": 471,
                          "end": 482
                        },
                        "start": 463,
                        "end": 482
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "start": 485,
                        "end": 487
                      },
                      "definite": false,
                      "start": 463,
                      "end": 487
                    }
                  ],
                  "declare": false,
                  "start": 459,
                  "end": 488
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
                        "start": 497,
                        "end": 505
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 506,
                        "end": 507
                      },
                      "optional": false,
                      "computed": true,
                      "start": 497,
                      "end": 508
                    },
                    "right": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Greeter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 515,
                        "end": 522
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 523,
                          "end": 531
                        }
                      ],
                      "start": 511,
                      "end": 532
                    },
                    "start": 497,
                    "end": 532
                  },
                  "directive": null,
                  "start": 497,
                  "end": 533
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
                          "start": 551,
                          "end": 552
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 555,
                          "end": 556
                        },
                        "definite": false,
                        "start": 551,
                        "end": 556
                      }
                    ],
                    "declare": false,
                    "start": 547,
                    "end": 556
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 558,
                      "end": 559
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
                        "start": 562,
                        "end": 575
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 576,
                        "end": 582
                      },
                      "optional": false,
                      "computed": false,
                      "start": 562,
                      "end": 582
                    },
                    "start": 558,
                    "end": 582
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
                      "start": 584,
                      "end": 585
                    },
                    "start": 584,
                    "end": 587
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
                              "start": 603,
                              "end": 611
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "push",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 612,
                              "end": 616
                            },
                            "optional": false,
                            "computed": false,
                            "start": 603,
                            "end": 616
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
                                "start": 621,
                                "end": 628
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
                                    "start": 629,
                                    "end": 642
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 643,
                                    "end": 644
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 629,
                                  "end": 645
                                }
                              ],
                              "start": 617,
                              "end": 646
                            }
                          ],
                          "optional": false,
                          "start": 603,
                          "end": 647
                        },
                        "directive": null,
                        "start": 603,
                        "end": 648
                      }
                    ],
                    "start": 589,
                    "end": 658
                  },
                  "start": 542,
                  "end": 658
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "greeters",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 675,
                    "end": 683
                  },
                  "start": 668,
                  "end": 684
                }
              ],
              "start": 449,
              "end": 690
            },
            "expression": false,
            "start": 389,
            "end": 690
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
                  "start": 700,
                  "end": 701
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 704,
                    "end": 708
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Hello",
                      "raw": "\"Hello\"",
                      "start": 709,
                      "end": 716
                    },
                    {
                      "type": "Literal",
                      "value": "World",
                      "raw": "\"World\"",
                      "start": 718,
                      "end": 725
                    },
                    {
                      "type": "Literal",
                      "value": "!",
                      "raw": "\"!\"",
                      "start": 727,
                      "end": 730
                    }
                  ],
                  "optional": false,
                  "start": 704,
                  "end": 731
                },
                "definite": false,
                "start": 700,
                "end": 731
              }
            ],
            "declare": false,
            "start": 696,
            "end": 732
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
                    "start": 746,
                    "end": 747
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 750,
                    "end": 751
                  },
                  "definite": false,
                  "start": 746,
                  "end": 751
                }
              ],
              "declare": false,
              "start": 742,
              "end": 751
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null,
                "start": 753,
                "end": 754
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
                  "start": 757,
                  "end": 758
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 759,
                  "end": 765
                },
                "optional": false,
                "computed": false,
                "start": 757,
                "end": 765
              },
              "start": 753,
              "end": 765
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
                "start": 767,
                "end": 768
              },
              "start": 767,
              "end": 770
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
                          "start": 782,
                          "end": 783
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 784,
                          "end": 785
                        },
                        "optional": false,
                        "computed": true,
                        "start": 782,
                        "end": 786
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "greet",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 787,
                        "end": 792
                      },
                      "optional": false,
                      "computed": false,
                      "start": 782,
                      "end": 792
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 782,
                    "end": 794
                  },
                  "directive": null,
                  "start": 782,
                  "end": 795
                }
              ],
              "start": 772,
              "end": 801
            },
            "start": 737,
            "end": 801
          }
        ],
        "start": 18,
        "end": 803
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 803
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 803
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
    "value": "Foo",
    "start": 242,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 246,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "Greeter",
    "start": 250,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 268,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 275,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "Greeter",
    "start": 279,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 287,
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
    "type": "Punctuator",
    "value": "}",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 309,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "greeter",
    "start": 313,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 323,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "Greeter",
    "start": 327,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 334,
    "end": 335
  },
  {
    "type": "String",
    "value": "\"Hello, world!\"",
    "start": 335,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "var",
    "start": 357,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 361,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "greeter",
    "start": 367,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "greet",
    "start": 375,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "function",
    "start": 389,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 398,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 403,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 413,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 421,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "restGreetings",
    "start": 424,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 439,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 449,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 459,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "greeters",
    "start": 463,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "Greeter",
    "start": 473,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "greeters",
    "start": 497,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 505,
    "end": 506
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 509,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 511,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "Greeter",
    "start": 515,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 523,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 532,
    "end": 533
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 542,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 546,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 547,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 553,
    "end": 554
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "restGreetings",
    "start": 562,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 576,
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
    "value": "i",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 585,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "greeters",
    "start": 603,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 612,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 616,
    "end": 617
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 617,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "Greeter",
    "start": 621,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "restGreetings",
    "start": 629,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 657,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 668,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "greeters",
    "start": 675,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 689,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 696,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 704,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 708,
    "end": 709
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 709,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 716,
    "end": 717
  },
  {
    "type": "String",
    "value": "\"World\"",
    "start": 718,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 725,
    "end": 726
  },
  {
    "type": "String",
    "value": "\"!\"",
    "start": 727,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 731,
    "end": 732
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 737,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 741,
    "end": 742
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 742,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 748,
    "end": 749
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 759,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 768,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "greet",
    "start": 787,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 802,
    "end": 803
  }
]
```

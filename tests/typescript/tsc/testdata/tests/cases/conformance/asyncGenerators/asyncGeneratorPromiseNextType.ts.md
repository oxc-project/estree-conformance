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
        "name": "Result",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 68
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
              "name": "message",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 79
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              },
              "start": 79,
              "end": 87
            },
            "accessibility": null,
            "static": false,
            "start": 72,
            "end": 87
          }
        ],
        "start": 71,
        "end": 88
      },
      "declare": false,
      "start": 57,
      "end": 88
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "saverGen",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 114
      },
      "generator": true,
      "async": true,
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
            "name": "AsyncGenerator",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 132
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 133,
                "end": 137
              },
              {
                "type": "TSVoidKeyword",
                "start": 139,
                "end": 143
              },
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 152
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Result",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 153,
                            "end": 159
                          },
                          "typeArguments": null,
                          "start": 153,
                          "end": 159
                        }
                      ],
                      "start": 152,
                      "end": 160
                    },
                    "start": 145,
                    "end": 160
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 163,
                    "end": 172
                  }
                ],
                "start": 145,
                "end": 172
              }
            ],
            "start": 132,
            "end": 173
          },
          "start": 118,
          "end": 173
        },
        "start": 116,
        "end": 173
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pending",
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
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 193,
                          "end": 200
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Result",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 201,
                                "end": 207
                              },
                              "typeArguments": null,
                              "start": 201,
                              "end": 207
                            }
                          ],
                          "start": 200,
                          "end": 208
                        },
                        "start": 193,
                        "end": 208
                      },
                      "start": 193,
                      "end": 210
                    },
                    "start": 191,
                    "end": 210
                  },
                  "start": 184,
                  "end": 210
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 213,
                  "end": 215
                },
                "definite": false,
                "start": 184,
                "end": 215
              }
            ],
            "declare": false,
            "start": 180,
            "end": 216
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 228,
              "end": 232
            },
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
                        "name": "p",
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
                                  "name": "Promise",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 253,
                                  "end": 260
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Result",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 261,
                                        "end": 267
                                      },
                                      "typeArguments": null,
                                      "start": 261,
                                      "end": 267
                                    }
                                  ],
                                  "start": 260,
                                  "end": 268
                                },
                                "start": 253,
                                "end": 268
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 271,
                                "end": 280
                              }
                            ],
                            "start": 253,
                            "end": 280
                          },
                          "start": 251,
                          "end": 280
                        },
                        "start": 250,
                        "end": 280
                      },
                      "init": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": null,
                        "start": 283,
                        "end": 288
                      },
                      "definite": false,
                      "start": 250,
                      "end": 288
                    }
                  ],
                  "declare": false,
                  "start": 244,
                  "end": 289
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 302,
                      "end": 303
                    },
                    "operator": "!=",
                    "right": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 307,
                      "end": 311
                    },
                    "start": 302,
                    "end": 311
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pending",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 325,
                          "end": 332
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 333,
                          "end": 337
                        },
                        "optional": false,
                        "computed": false,
                        "start": 325,
                        "end": 337
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 338,
                          "end": 339
                        }
                      ],
                      "optional": false,
                      "start": 325,
                      "end": 340
                    },
                    "directive": null,
                    "start": 325,
                    "end": 341
                  },
                  "alternate": {
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
                              "name": "results",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 375,
                              "end": 382
                            },
                            "init": {
                              "type": "AwaitExpression",
                              "argument": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 391,
                                    "end": 398
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "all",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 399,
                                    "end": 402
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 391,
                                  "end": 402
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "pending",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 403,
                                    "end": 410
                                  }
                                ],
                                "optional": false,
                                "start": 391,
                                "end": 411
                              },
                              "start": 385,
                              "end": 411
                            },
                            "definite": false,
                            "start": 375,
                            "end": 411
                          }
                        ],
                        "declare": false,
                        "start": 369,
                        "end": 412
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "pending",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 425,
                            "end": 432
                          },
                          "right": {
                            "type": "ArrayExpression",
                            "elements": [],
                            "start": 435,
                            "end": 437
                          },
                          "start": 425,
                          "end": 437
                        },
                        "directive": null,
                        "start": 425,
                        "end": 438
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
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 451,
                              "end": 458
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 459,
                              "end": 462
                            },
                            "optional": false,
                            "computed": false,
                            "start": 451,
                            "end": 462
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "Storing...",
                              "raw": "'Storing...'",
                              "start": 463,
                              "end": 475
                            }
                          ],
                          "optional": false,
                          "start": 451,
                          "end": 476
                        },
                        "directive": null,
                        "start": 451,
                        "end": 477
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "storeResults",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 496,
                              "end": 508
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "results",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 509,
                                "end": 516
                              }
                            ],
                            "optional": false,
                            "start": 496,
                            "end": 517
                          },
                          "start": 490,
                          "end": 517
                        },
                        "directive": null,
                        "start": 490,
                        "end": 518
                      }
                    ],
                    "start": 355,
                    "end": 528
                  },
                  "start": 298,
                  "end": 528
                }
              ],
              "start": 234,
              "end": 534
            },
            "start": 221,
            "end": 534
          }
        ],
        "start": 174,
        "end": 536
      },
      "expression": false,
      "start": 90,
      "end": 536
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "storeResults",
        "optional": false,
        "typeAnnotation": null,
        "start": 547,
        "end": 559
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results",
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
                  "name": "Result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 569,
                  "end": 575
                },
                "typeArguments": null,
                "start": 569,
                "end": 575
              },
              "start": 569,
              "end": 577
            },
            "start": 567,
            "end": 577
          },
          "start": 560,
          "end": 577
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 585,
                  "end": 592
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 593,
                  "end": 596
                },
                "optional": false,
                "computed": false,
                "start": 585,
                "end": 596
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "results",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 597,
                  "end": 604
                }
              ],
              "optional": false,
              "start": 585,
              "end": 605
            },
            "directive": null,
            "start": 585,
            "end": 606
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 618,
                  "end": 625
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 626,
                  "end": 633
                },
                "optional": false,
                "computed": false,
                "start": 618,
                "end": 633
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 618,
              "end": 635
            },
            "start": 611,
            "end": 636
          }
        ],
        "start": 579,
        "end": 638
      },
      "expression": false,
      "start": 538,
      "end": 638
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "saverGen2",
        "optional": false,
        "typeAnnotation": null,
        "start": 656,
        "end": 665
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pending",
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
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 687,
                          "end": 694
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Result",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 695,
                                "end": 701
                              },
                              "typeArguments": null,
                              "start": 695,
                              "end": 701
                            }
                          ],
                          "start": 694,
                          "end": 702
                        },
                        "start": 687,
                        "end": 702
                      },
                      "start": 687,
                      "end": 704
                    },
                    "start": 685,
                    "end": 704
                  },
                  "start": 678,
                  "end": 704
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 707,
                  "end": 709
                },
                "definite": false,
                "start": 678,
                "end": 709
              }
            ],
            "declare": false,
            "start": 674,
            "end": 710
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 722,
              "end": 726
            },
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
                        "name": "p",
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
                                  "name": "Promise",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 747,
                                  "end": 754
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Result",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 755,
                                        "end": 761
                                      },
                                      "typeArguments": null,
                                      "start": 755,
                                      "end": 761
                                    }
                                  ],
                                  "start": 754,
                                  "end": 762
                                },
                                "start": 747,
                                "end": 762
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 765,
                                "end": 774
                              }
                            ],
                            "start": 747,
                            "end": 774
                          },
                          "start": 745,
                          "end": 774
                        },
                        "start": 744,
                        "end": 774
                      },
                      "init": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": null,
                        "start": 777,
                        "end": 782
                      },
                      "definite": false,
                      "start": 744,
                      "end": 782
                    }
                  ],
                  "declare": false,
                  "start": 738,
                  "end": 783
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 796,
                      "end": 797
                    },
                    "operator": "!=",
                    "right": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 801,
                      "end": 805
                    },
                    "start": 796,
                    "end": 805
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pending",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 819,
                          "end": 826
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 827,
                          "end": 831
                        },
                        "optional": false,
                        "computed": false,
                        "start": 819,
                        "end": 831
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 832,
                          "end": 833
                        }
                      ],
                      "optional": false,
                      "start": 819,
                      "end": 834
                    },
                    "directive": null,
                    "start": 819,
                    "end": 835
                  },
                  "alternate": {
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
                              "name": "results",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 869,
                              "end": 876
                            },
                            "init": {
                              "type": "AwaitExpression",
                              "argument": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 885,
                                    "end": 892
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "all",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 893,
                                    "end": 896
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 885,
                                  "end": 896
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "pending",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 897,
                                    "end": 904
                                  }
                                ],
                                "optional": false,
                                "start": 885,
                                "end": 905
                              },
                              "start": 879,
                              "end": 905
                            },
                            "definite": false,
                            "start": 869,
                            "end": 905
                          }
                        ],
                        "declare": false,
                        "start": 863,
                        "end": 906
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "pending",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 919,
                            "end": 926
                          },
                          "right": {
                            "type": "ArrayExpression",
                            "elements": [],
                            "start": 929,
                            "end": 931
                          },
                          "start": 919,
                          "end": 931
                        },
                        "directive": null,
                        "start": 919,
                        "end": 932
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
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 945,
                              "end": 952
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 953,
                              "end": 956
                            },
                            "optional": false,
                            "computed": false,
                            "start": 945,
                            "end": 956
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "Storing...",
                              "raw": "'Storing...'",
                              "start": 957,
                              "end": 969
                            }
                          ],
                          "optional": false,
                          "start": 945,
                          "end": 970
                        },
                        "directive": null,
                        "start": 945,
                        "end": 971
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "storeResults",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 990,
                              "end": 1002
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "results",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1003,
                                "end": 1010
                              }
                            ],
                            "optional": false,
                            "start": 990,
                            "end": 1011
                          },
                          "start": 984,
                          "end": 1011
                        },
                        "directive": null,
                        "start": 984,
                        "end": 1012
                      }
                    ],
                    "start": 849,
                    "end": 1022
                  },
                  "start": 792,
                  "end": 1022
                }
              ],
              "start": 728,
              "end": 1028
            },
            "start": 715,
            "end": 1028
          }
        ],
        "start": 668,
        "end": 1030
      },
      "expression": false,
      "start": 640,
      "end": 1030
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 1030
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
    "value": "Result",
    "start": 62,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 72,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 90,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 96,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "saverGen",
    "start": 106,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "AsyncGenerator",
    "start": 118,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 133,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 139,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 145,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 163,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 180,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "pending",
    "start": 184,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 193,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 201,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 221,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 228,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 244,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 253,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 261,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 271,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 283,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 298,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 304,
    "end": 306
  },
  {
    "type": "Null",
    "value": "null",
    "start": 307,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "pending",
    "start": 325,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 333,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 350,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 369,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 375,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 385,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 391,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 399,
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
    "value": "pending",
    "start": 403,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "pending",
    "start": 425,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 451,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 459,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463
  },
  {
    "type": "String",
    "value": "'Storing...'",
    "start": 463,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 490,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "storeResults",
    "start": 496,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 509,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 535,
    "end": 536
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 538,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "storeResults",
    "start": 547,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 560,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 569,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 585,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 593,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 597,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 605,
    "end": 606
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 611,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 618,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 626,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 640,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 646,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "saverGen2",
    "start": 656,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 668,
    "end": 669
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 674,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "pending",
    "start": 678,
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
    "value": "Promise",
    "start": 687,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 695,
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
    "value": "[",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 709,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 715,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 721,
    "end": 722
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 722,
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
    "value": "const",
    "start": 738,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 747,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 755,
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
    "value": "|",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 765,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 775,
    "end": 776
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 777,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 782,
    "end": 783
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 792,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 798,
    "end": 800
  },
  {
    "type": "Null",
    "value": "null",
    "start": 801,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "pending",
    "start": 819,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 827,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 834,
    "end": 835
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 844,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 863,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 869,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 879,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 885,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 893,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "pending",
    "start": 897,
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
    "type": "Identifier",
    "value": "pending",
    "start": 919,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 945,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 953,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 956,
    "end": 957
  },
  {
    "type": "String",
    "value": "'Storing...'",
    "start": 957,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 984,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "storeResults",
    "start": 990,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 1003,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1029,
    "end": 1030
  }
]
```

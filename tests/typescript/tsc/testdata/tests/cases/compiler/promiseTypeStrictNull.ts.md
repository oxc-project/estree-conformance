__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 15,
                  "end": 22
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 23,
                      "end": 30
                    }
                  ],
                  "start": 22,
                  "end": 31
                },
                "start": 15,
                "end": 31
              },
              "start": 13,
              "end": 31
            },
            "start": 12,
            "end": 31
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 31
        }
      ],
      "declare": true,
      "start": 0,
      "end": 32
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 48,
                "end": 51
              },
              "start": 46,
              "end": 51
            },
            "start": 45,
            "end": 51
          },
          "init": null,
          "definite": false,
          "start": 45,
          "end": 51
        }
      ],
      "declare": true,
      "start": 33,
      "end": 52
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 70
      },
      "generator": false,
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 86
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 95,
                    "end": 96
                  },
                  "start": 89,
                  "end": 96
                },
                "definite": false,
                "start": 85,
                "end": 96
              }
            ],
            "declare": false,
            "start": 79,
            "end": 97
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 110
            },
            "start": 102,
            "end": 111
          }
        ],
        "start": 73,
        "end": 113
      },
      "expression": false,
      "start": 54,
      "end": 113
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 131
      },
      "generator": false,
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 146,
                  "end": 147
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 157
                  },
                  "start": 150,
                  "end": 157
                },
                "definite": false,
                "start": 146,
                "end": 157
              }
            ],
            "declare": false,
            "start": 140,
            "end": 158
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 170,
              "end": 171
            },
            "start": 163,
            "end": 172
          }
        ],
        "start": 134,
        "end": 174
      },
      "expression": false,
      "start": 115,
      "end": 174
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 192
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 221,
                        "end": 222
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 231,
                          "end": 232
                        },
                        "start": 225,
                        "end": 232
                      },
                      "definite": false,
                      "start": 221,
                      "end": 232
                    }
                  ],
                  "declare": false,
                  "start": 215,
                  "end": 233
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 249,
                    "end": 250
                  },
                  "start": 242,
                  "end": 251
                }
              ],
              "start": 205,
              "end": 257
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 269,
                "end": 270
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "error",
                      "raw": "'error'",
                      "start": 289,
                      "end": 296
                    },
                    "start": 282,
                    "end": 297
                  }
                ],
                "start": 272,
                "end": 303
              },
              "start": 262,
              "end": 303
            },
            "finalizer": null,
            "start": 201,
            "end": 303
          }
        ],
        "start": 195,
        "end": 305
      },
      "expression": false,
      "start": 176,
      "end": 305
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 322,
        "end": 323
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 352,
                        "end": 353
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 362,
                          "end": 363
                        },
                        "start": 356,
                        "end": 363
                      },
                      "definite": false,
                      "start": 352,
                      "end": 363
                    }
                  ],
                  "declare": false,
                  "start": 346,
                  "end": 364
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 380,
                    "end": 381
                  },
                  "start": 373,
                  "end": 382
                }
              ],
              "start": 336,
              "end": 388
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 400,
                "end": 401
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 403,
                "end": 410
              },
              "start": 393,
              "end": 410
            },
            "finalizer": null,
            "start": 332,
            "end": 410
          }
        ],
        "start": 326,
        "end": 412
      },
      "expression": false,
      "start": 307,
      "end": 412
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 429,
        "end": 430
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 459,
                        "end": 460
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 469,
                          "end": 470
                        },
                        "start": 463,
                        "end": 470
                      },
                      "definite": false,
                      "start": 459,
                      "end": 470
                    }
                  ],
                  "declare": false,
                  "start": 453,
                  "end": 471
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 487,
                    "end": 488
                  },
                  "start": 480,
                  "end": 489
                }
              ],
              "start": 443,
              "end": 495
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 507,
                "end": 508
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 526,
                        "end": 531
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 526,
                      "end": 533
                    },
                    "start": 520,
                    "end": 534
                  }
                ],
                "start": 510,
                "end": 540
              },
              "start": 500,
              "end": 540
            },
            "finalizer": null,
            "start": 439,
            "end": 540
          }
        ],
        "start": 433,
        "end": 542
      },
      "expression": false,
      "start": 414,
      "end": 542
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 559,
        "end": 560
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 589,
                        "end": 590
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 599,
                          "end": 600
                        },
                        "start": 593,
                        "end": 600
                      },
                      "definite": false,
                      "start": 589,
                      "end": 600
                    }
                  ],
                  "declare": false,
                  "start": 583,
                  "end": 601
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 617,
                    "end": 618
                  },
                  "start": 610,
                  "end": 619
                }
              ],
              "start": 573,
              "end": 625
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 637,
                "end": 638
              },
              "body": {
                "type": "BlockStatement",
                "body": [
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
                          "start": 657,
                          "end": 664
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "reject",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 665,
                          "end": 671
                        },
                        "optional": false,
                        "computed": false,
                        "start": 657,
                        "end": 671
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 672,
                            "end": 677
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 672,
                          "end": 679
                        }
                      ],
                      "optional": false,
                      "start": 657,
                      "end": 680
                    },
                    "start": 650,
                    "end": 681
                  }
                ],
                "start": 640,
                "end": 687
              },
              "start": 630,
              "end": 687
            },
            "finalizer": null,
            "start": 569,
            "end": 687
          }
        ],
        "start": 563,
        "end": 689
      },
      "expression": false,
      "start": 544,
      "end": 689
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 706,
        "end": 707
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 736,
                        "end": 737
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 746,
                          "end": 747
                        },
                        "start": 740,
                        "end": 747
                      },
                      "definite": false,
                      "start": 736,
                      "end": 747
                    }
                  ],
                  "declare": false,
                  "start": 730,
                  "end": 748
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 764,
                    "end": 765
                  },
                  "start": 757,
                  "end": 766
                }
              ],
              "start": 720,
              "end": 772
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 784,
                "end": 785
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 797,
                    "end": 804
                  }
                ],
                "start": 787,
                "end": 810
              },
              "start": 777,
              "end": 810
            },
            "finalizer": null,
            "start": 716,
            "end": 810
          }
        ],
        "start": 710,
        "end": 812
      },
      "expression": false,
      "start": 691,
      "end": 812
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null,
        "start": 829,
        "end": 830
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 859,
                        "end": 860
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 869,
                          "end": 870
                        },
                        "start": 863,
                        "end": 870
                      },
                      "definite": false,
                      "start": 859,
                      "end": 870
                    }
                  ],
                  "declare": false,
                  "start": 853,
                  "end": 871
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 887,
                    "end": 888
                  },
                  "start": 880,
                  "end": 889
                }
              ],
              "start": 843,
              "end": 895
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 907,
                "end": 908
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 926,
                        "end": 931
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 926,
                      "end": 933
                    },
                    "start": 920,
                    "end": 934
                  }
                ],
                "start": 910,
                "end": 940
              },
              "start": 900,
              "end": 940
            },
            "finalizer": null,
            "start": 839,
            "end": 940
          }
        ],
        "start": 833,
        "end": 942
      },
      "expression": false,
      "start": 814,
      "end": 942
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 959,
        "end": 960
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 989,
                        "end": 990
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 999,
                          "end": 1000
                        },
                        "start": 993,
                        "end": 1000
                      },
                      "definite": false,
                      "start": 989,
                      "end": 1000
                    }
                  ],
                  "declare": false,
                  "start": 983,
                  "end": 1001
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1017,
                    "end": 1018
                  },
                  "start": 1010,
                  "end": 1019
                }
              ],
              "start": 973,
              "end": 1025
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1037,
                "end": 1038
              },
              "body": {
                "type": "BlockStatement",
                "body": [
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
                          "start": 1057,
                          "end": 1064
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "reject",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1065,
                          "end": 1071
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1057,
                        "end": 1071
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1072,
                            "end": 1077
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1072,
                          "end": 1079
                        }
                      ],
                      "optional": false,
                      "start": 1057,
                      "end": 1080
                    },
                    "start": 1050,
                    "end": 1081
                  }
                ],
                "start": 1040,
                "end": 1087
              },
              "start": 1030,
              "end": 1087
            },
            "finalizer": null,
            "start": 969,
            "end": 1087
          }
        ],
        "start": 963,
        "end": 1089
      },
      "expression": false,
      "start": 944,
      "end": 1089
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
            "name": "p00",
            "optional": false,
            "typeAnnotation": null,
            "start": 1131,
            "end": 1134
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1137,
                "end": 1138
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null,
                "start": 1139,
                "end": 1144
              },
              "optional": false,
              "computed": false,
              "start": 1137,
              "end": 1144
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1137,
            "end": 1146
          },
          "definite": false,
          "start": 1131,
          "end": 1146
        }
      ],
      "declare": false,
      "start": 1125,
      "end": 1147
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
            "name": "p01",
            "optional": false,
            "typeAnnotation": null,
            "start": 1154,
            "end": 1157
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1160,
                "end": 1161
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1162,
                "end": 1166
              },
              "optional": false,
              "computed": false,
              "start": 1160,
              "end": 1166
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1160,
            "end": 1168
          },
          "definite": false,
          "start": 1154,
          "end": 1168
        }
      ],
      "declare": false,
      "start": 1148,
      "end": 1169
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
            "name": "p10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1177,
            "end": 1180
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1183,
                "end": 1184
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null,
                "start": 1185,
                "end": 1190
              },
              "optional": false,
              "computed": false,
              "start": 1183,
              "end": 1190
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1191,
                "end": 1200
              }
            ],
            "optional": false,
            "start": 1183,
            "end": 1201
          },
          "definite": false,
          "start": 1177,
          "end": 1201
        }
      ],
      "declare": false,
      "start": 1171,
      "end": 1202
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
            "name": "p11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1209,
            "end": 1212
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1215,
                "end": 1216
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null,
                "start": 1217,
                "end": 1222
              },
              "optional": false,
              "computed": false,
              "start": 1215,
              "end": 1222
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1223,
                "end": 1227
              }
            ],
            "optional": false,
            "start": 1215,
            "end": 1228
          },
          "definite": false,
          "start": 1209,
          "end": 1228
        }
      ],
      "declare": false,
      "start": 1203,
      "end": 1229
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
            "name": "p12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1236,
            "end": 1239
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1242,
                "end": 1243
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null,
                "start": 1244,
                "end": 1249
              },
              "optional": false,
              "computed": false,
              "start": 1242,
              "end": 1249
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1256,
                  "end": 1257
                },
                "id": null,
                "generator": false,
                "start": 1250,
                "end": 1257
              }
            ],
            "optional": false,
            "start": 1242,
            "end": 1258
          },
          "definite": false,
          "start": 1236,
          "end": 1258
        }
      ],
      "declare": false,
      "start": 1230,
      "end": 1259
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
            "name": "p13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1266,
            "end": 1269
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1272,
                "end": 1273
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null,
                "start": 1274,
                "end": 1279
              },
              "optional": false,
              "computed": false,
              "start": 1272,
              "end": 1279
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1286,
                  "end": 1287
                },
                "id": null,
                "generator": false,
                "start": 1280,
                "end": 1287
              }
            ],
            "optional": false,
            "start": 1272,
            "end": 1288
          },
          "definite": false,
          "start": 1266,
          "end": 1288
        }
      ],
      "declare": false,
      "start": 1260,
      "end": 1289
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
            "name": "p14",
            "optional": false,
            "typeAnnotation": null,
            "start": 1296,
            "end": 1299
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1302,
                "end": 1303
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null,
                "start": 1304,
                "end": 1309
              },
              "optional": false,
              "computed": false,
              "start": 1302,
              "end": 1309
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1316,
                  "end": 1325
                },
                "id": null,
                "generator": false,
                "start": 1310,
                "end": 1325
              }
            ],
            "optional": false,
            "start": 1302,
            "end": 1326
          },
          "definite": false,
          "start": 1296,
          "end": 1326
        }
      ],
      "declare": false,
      "start": 1290,
      "end": 1327
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
            "name": "p15",
            "optional": false,
            "typeAnnotation": null,
            "start": 1334,
            "end": 1337
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1340,
                "end": 1341
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null,
                "start": 1342,
                "end": 1347
              },
              "optional": false,
              "computed": false,
              "start": 1340,
              "end": 1347
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1354,
                  "end": 1358
                },
                "id": null,
                "generator": false,
                "start": 1348,
                "end": 1358
              }
            ],
            "optional": false,
            "start": 1340,
            "end": 1359
          },
          "definite": false,
          "start": 1334,
          "end": 1359
        }
      ],
      "declare": false,
      "start": 1328,
      "end": 1360
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
            "name": "p16",
            "optional": false,
            "typeAnnotation": null,
            "start": 1367,
            "end": 1370
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1373,
                "end": 1374
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null,
                "start": 1375,
                "end": 1380
              },
              "optional": false,
              "computed": false,
              "start": 1373,
              "end": 1380
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1387,
                  "end": 1389
                },
                "id": null,
                "generator": false,
                "start": 1381,
                "end": 1389
              }
            ],
            "optional": false,
            "start": 1373,
            "end": 1390
          },
          "definite": false,
          "start": 1367,
          "end": 1390
        }
      ],
      "declare": false,
      "start": 1361,
      "end": 1391
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
            "name": "p17",
            "optional": false,
            "typeAnnotation": null,
            "start": 1398,
            "end": 1401
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1404,
                "end": 1405
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null,
                "start": 1406,
                "end": 1411
              },
              "optional": false,
              "computed": false,
              "start": 1404,
              "end": 1411
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1425,
                        "end": 1426
                      },
                      "start": 1419,
                      "end": 1426
                    }
                  ],
                  "start": 1418,
                  "end": 1427
                },
                "id": null,
                "generator": false,
                "start": 1412,
                "end": 1427
              }
            ],
            "optional": false,
            "start": 1404,
            "end": 1428
          },
          "definite": false,
          "start": 1398,
          "end": 1428
        }
      ],
      "declare": false,
      "start": 1392,
      "end": 1429
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
            "name": "p18",
            "optional": false,
            "typeAnnotation": null,
            "start": 1436,
            "end": 1439
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1442,
                "end": 1443
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null,
                "start": 1444,
                "end": 1449
              },
              "optional": false,
              "computed": false,
              "start": 1442,
              "end": 1449
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1456,
                      "end": 1463
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1464,
                      "end": 1470
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1456,
                    "end": 1470
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1471,
                      "end": 1472
                    }
                  ],
                  "optional": false,
                  "start": 1456,
                  "end": 1473
                },
                "id": null,
                "generator": false,
                "start": 1450,
                "end": 1473
              }
            ],
            "optional": false,
            "start": 1442,
            "end": 1474
          },
          "definite": false,
          "start": 1436,
          "end": 1474
        }
      ],
      "declare": false,
      "start": 1430,
      "end": 1475
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
            "name": "p19",
            "optional": false,
            "typeAnnotation": null,
            "start": 1482,
            "end": 1485
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1488,
                "end": 1489
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "catch",
                "optional": false,
                "typeAnnotation": null,
                "start": 1490,
                "end": 1495
              },
              "optional": false,
              "computed": false,
              "start": 1488,
              "end": 1495
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1502,
                      "end": 1509
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1510,
                      "end": 1517
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1502,
                    "end": 1517
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1518,
                      "end": 1519
                    }
                  ],
                  "optional": false,
                  "start": 1502,
                  "end": 1520
                },
                "id": null,
                "generator": false,
                "start": 1496,
                "end": 1520
              }
            ],
            "optional": false,
            "start": 1488,
            "end": 1521
          },
          "definite": false,
          "start": 1482,
          "end": 1521
        }
      ],
      "declare": false,
      "start": 1476,
      "end": 1522
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
            "name": "p20",
            "optional": false,
            "typeAnnotation": null,
            "start": 1530,
            "end": 1533
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1536,
                "end": 1537
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1538,
                "end": 1542
              },
              "optional": false,
              "computed": false,
              "start": 1536,
              "end": 1542
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1543,
                "end": 1552
              }
            ],
            "optional": false,
            "start": 1536,
            "end": 1553
          },
          "definite": false,
          "start": 1530,
          "end": 1553
        }
      ],
      "declare": false,
      "start": 1524,
      "end": 1554
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
            "name": "p21",
            "optional": false,
            "typeAnnotation": null,
            "start": 1561,
            "end": 1564
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1567,
                "end": 1568
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1569,
                "end": 1573
              },
              "optional": false,
              "computed": false,
              "start": 1567,
              "end": 1573
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1574,
                "end": 1578
              }
            ],
            "optional": false,
            "start": 1567,
            "end": 1579
          },
          "definite": false,
          "start": 1561,
          "end": 1579
        }
      ],
      "declare": false,
      "start": 1555,
      "end": 1580
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
            "name": "p22",
            "optional": false,
            "typeAnnotation": null,
            "start": 1587,
            "end": 1590
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1593,
                "end": 1594
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1595,
                "end": 1599
              },
              "optional": false,
              "computed": false,
              "start": 1593,
              "end": 1599
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1606,
                  "end": 1607
                },
                "id": null,
                "generator": false,
                "start": 1600,
                "end": 1607
              }
            ],
            "optional": false,
            "start": 1593,
            "end": 1608
          },
          "definite": false,
          "start": 1587,
          "end": 1608
        }
      ],
      "declare": false,
      "start": 1581,
      "end": 1609
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
            "name": "p23",
            "optional": false,
            "typeAnnotation": null,
            "start": 1616,
            "end": 1619
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1622,
                "end": 1623
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1624,
                "end": 1628
              },
              "optional": false,
              "computed": false,
              "start": 1622,
              "end": 1628
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1635,
                  "end": 1636
                },
                "id": null,
                "generator": false,
                "start": 1629,
                "end": 1636
              }
            ],
            "optional": false,
            "start": 1622,
            "end": 1637
          },
          "definite": false,
          "start": 1616,
          "end": 1637
        }
      ],
      "declare": false,
      "start": 1610,
      "end": 1638
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
            "name": "p24",
            "optional": false,
            "typeAnnotation": null,
            "start": 1645,
            "end": 1648
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1651,
                "end": 1652
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1653,
                "end": 1657
              },
              "optional": false,
              "computed": false,
              "start": 1651,
              "end": 1657
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1664,
                  "end": 1673
                },
                "id": null,
                "generator": false,
                "start": 1658,
                "end": 1673
              }
            ],
            "optional": false,
            "start": 1651,
            "end": 1674
          },
          "definite": false,
          "start": 1645,
          "end": 1674
        }
      ],
      "declare": false,
      "start": 1639,
      "end": 1675
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
            "name": "p25",
            "optional": false,
            "typeAnnotation": null,
            "start": 1682,
            "end": 1685
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1688,
                "end": 1689
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1690,
                "end": 1694
              },
              "optional": false,
              "computed": false,
              "start": 1688,
              "end": 1694
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1701,
                  "end": 1705
                },
                "id": null,
                "generator": false,
                "start": 1695,
                "end": 1705
              }
            ],
            "optional": false,
            "start": 1688,
            "end": 1706
          },
          "definite": false,
          "start": 1682,
          "end": 1706
        }
      ],
      "declare": false,
      "start": 1676,
      "end": 1707
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
            "name": "p26",
            "optional": false,
            "typeAnnotation": null,
            "start": 1714,
            "end": 1717
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1720,
                "end": 1721
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1722,
                "end": 1726
              },
              "optional": false,
              "computed": false,
              "start": 1720,
              "end": 1726
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1733,
                  "end": 1735
                },
                "id": null,
                "generator": false,
                "start": 1727,
                "end": 1735
              }
            ],
            "optional": false,
            "start": 1720,
            "end": 1736
          },
          "definite": false,
          "start": 1714,
          "end": 1736
        }
      ],
      "declare": false,
      "start": 1708,
      "end": 1737
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
            "name": "p27",
            "optional": false,
            "typeAnnotation": null,
            "start": 1744,
            "end": 1747
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1750,
                "end": 1751
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1752,
                "end": 1756
              },
              "optional": false,
              "computed": false,
              "start": 1750,
              "end": 1756
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1770,
                        "end": 1771
                      },
                      "start": 1764,
                      "end": 1771
                    }
                  ],
                  "start": 1763,
                  "end": 1772
                },
                "id": null,
                "generator": false,
                "start": 1757,
                "end": 1772
              }
            ],
            "optional": false,
            "start": 1750,
            "end": 1773
          },
          "definite": false,
          "start": 1744,
          "end": 1773
        }
      ],
      "declare": false,
      "start": 1738,
      "end": 1774
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
            "name": "p28",
            "optional": false,
            "typeAnnotation": null,
            "start": 1781,
            "end": 1784
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1787,
                "end": 1788
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1789,
                "end": 1793
              },
              "optional": false,
              "computed": false,
              "start": 1787,
              "end": 1793
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1800,
                      "end": 1807
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1808,
                      "end": 1815
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1800,
                    "end": 1815
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1816,
                      "end": 1817
                    }
                  ],
                  "optional": false,
                  "start": 1800,
                  "end": 1818
                },
                "id": null,
                "generator": false,
                "start": 1794,
                "end": 1818
              }
            ],
            "optional": false,
            "start": 1787,
            "end": 1819
          },
          "definite": false,
          "start": 1781,
          "end": 1819
        }
      ],
      "declare": false,
      "start": 1775,
      "end": 1820
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
            "name": "p29",
            "optional": false,
            "typeAnnotation": null,
            "start": 1827,
            "end": 1830
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1833,
                "end": 1834
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1835,
                "end": 1839
              },
              "optional": false,
              "computed": false,
              "start": 1833,
              "end": 1839
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1846,
                      "end": 1853
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1854,
                      "end": 1860
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1846,
                    "end": 1860
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1861,
                      "end": 1862
                    }
                  ],
                  "optional": false,
                  "start": 1846,
                  "end": 1863
                },
                "id": null,
                "generator": false,
                "start": 1840,
                "end": 1863
              }
            ],
            "optional": false,
            "start": 1833,
            "end": 1864
          },
          "definite": false,
          "start": 1827,
          "end": 1864
        }
      ],
      "declare": false,
      "start": 1821,
      "end": 1865
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
            "name": "p30",
            "optional": false,
            "typeAnnotation": null,
            "start": 1873,
            "end": 1876
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1879,
                "end": 1880
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1881,
                "end": 1885
              },
              "optional": false,
              "computed": false,
              "start": 1879,
              "end": 1885
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1886,
                "end": 1895
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1897,
                "end": 1906
              }
            ],
            "optional": false,
            "start": 1879,
            "end": 1907
          },
          "definite": false,
          "start": 1873,
          "end": 1907
        }
      ],
      "declare": false,
      "start": 1867,
      "end": 1908
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
            "name": "p31",
            "optional": false,
            "typeAnnotation": null,
            "start": 1915,
            "end": 1918
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1921,
                "end": 1922
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1923,
                "end": 1927
              },
              "optional": false,
              "computed": false,
              "start": 1921,
              "end": 1927
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1928,
                "end": 1937
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1939,
                "end": 1943
              }
            ],
            "optional": false,
            "start": 1921,
            "end": 1944
          },
          "definite": false,
          "start": 1915,
          "end": 1944
        }
      ],
      "declare": false,
      "start": 1909,
      "end": 1945
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
            "name": "p32",
            "optional": false,
            "typeAnnotation": null,
            "start": 1952,
            "end": 1955
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1958,
                "end": 1959
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1960,
                "end": 1964
              },
              "optional": false,
              "computed": false,
              "start": 1958,
              "end": 1964
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1965,
                "end": 1974
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1982,
                  "end": 1983
                },
                "id": null,
                "generator": false,
                "start": 1976,
                "end": 1983
              }
            ],
            "optional": false,
            "start": 1958,
            "end": 1984
          },
          "definite": false,
          "start": 1952,
          "end": 1984
        }
      ],
      "declare": false,
      "start": 1946,
      "end": 1985
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
            "name": "p33",
            "optional": false,
            "typeAnnotation": null,
            "start": 1992,
            "end": 1995
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1998,
                "end": 1999
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2000,
                "end": 2004
              },
              "optional": false,
              "computed": false,
              "start": 1998,
              "end": 2004
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2005,
                "end": 2014
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2022,
                  "end": 2023
                },
                "id": null,
                "generator": false,
                "start": 2016,
                "end": 2023
              }
            ],
            "optional": false,
            "start": 1998,
            "end": 2024
          },
          "definite": false,
          "start": 1992,
          "end": 2024
        }
      ],
      "declare": false,
      "start": 1986,
      "end": 2025
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
            "name": "p34",
            "optional": false,
            "typeAnnotation": null,
            "start": 2032,
            "end": 2035
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2038,
                "end": 2039
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2040,
                "end": 2044
              },
              "optional": false,
              "computed": false,
              "start": 2038,
              "end": 2044
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2045,
                "end": 2054
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2062,
                  "end": 2071
                },
                "id": null,
                "generator": false,
                "start": 2056,
                "end": 2071
              }
            ],
            "optional": false,
            "start": 2038,
            "end": 2072
          },
          "definite": false,
          "start": 2032,
          "end": 2072
        }
      ],
      "declare": false,
      "start": 2026,
      "end": 2073
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
            "name": "p35",
            "optional": false,
            "typeAnnotation": null,
            "start": 2080,
            "end": 2083
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2086,
                "end": 2087
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2088,
                "end": 2092
              },
              "optional": false,
              "computed": false,
              "start": 2086,
              "end": 2092
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2093,
                "end": 2102
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 2110,
                  "end": 2114
                },
                "id": null,
                "generator": false,
                "start": 2104,
                "end": 2114
              }
            ],
            "optional": false,
            "start": 2086,
            "end": 2115
          },
          "definite": false,
          "start": 2080,
          "end": 2115
        }
      ],
      "declare": false,
      "start": 2074,
      "end": 2116
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
            "name": "p36",
            "optional": false,
            "typeAnnotation": null,
            "start": 2123,
            "end": 2126
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2129,
                "end": 2130
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2131,
                "end": 2135
              },
              "optional": false,
              "computed": false,
              "start": 2129,
              "end": 2135
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2136,
                "end": 2145
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 2153,
                  "end": 2155
                },
                "id": null,
                "generator": false,
                "start": 2147,
                "end": 2155
              }
            ],
            "optional": false,
            "start": 2129,
            "end": 2156
          },
          "definite": false,
          "start": 2123,
          "end": 2156
        }
      ],
      "declare": false,
      "start": 2117,
      "end": 2157
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
            "name": "p37",
            "optional": false,
            "typeAnnotation": null,
            "start": 2164,
            "end": 2167
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2170,
                "end": 2171
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2172,
                "end": 2176
              },
              "optional": false,
              "computed": false,
              "start": 2170,
              "end": 2176
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2177,
                "end": 2186
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2201,
                        "end": 2202
                      },
                      "start": 2195,
                      "end": 2202
                    }
                  ],
                  "start": 2194,
                  "end": 2203
                },
                "id": null,
                "generator": false,
                "start": 2188,
                "end": 2203
              }
            ],
            "optional": false,
            "start": 2170,
            "end": 2204
          },
          "definite": false,
          "start": 2164,
          "end": 2204
        }
      ],
      "declare": false,
      "start": 2158,
      "end": 2205
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
            "name": "p38",
            "optional": false,
            "typeAnnotation": null,
            "start": 2212,
            "end": 2215
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2218,
                "end": 2219
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2220,
                "end": 2224
              },
              "optional": false,
              "computed": false,
              "start": 2218,
              "end": 2224
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2225,
                "end": 2234
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2242,
                      "end": 2249
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2250,
                      "end": 2257
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2242,
                    "end": 2257
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2258,
                      "end": 2259
                    }
                  ],
                  "optional": false,
                  "start": 2242,
                  "end": 2260
                },
                "id": null,
                "generator": false,
                "start": 2236,
                "end": 2260
              }
            ],
            "optional": false,
            "start": 2218,
            "end": 2261
          },
          "definite": false,
          "start": 2212,
          "end": 2261
        }
      ],
      "declare": false,
      "start": 2206,
      "end": 2262
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
            "name": "p39",
            "optional": false,
            "typeAnnotation": null,
            "start": 2269,
            "end": 2272
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2275,
                "end": 2276
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2277,
                "end": 2281
              },
              "optional": false,
              "computed": false,
              "start": 2275,
              "end": 2281
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2282,
                "end": 2291
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2299,
                      "end": 2306
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2307,
                      "end": 2313
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2299,
                    "end": 2313
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2314,
                      "end": 2315
                    }
                  ],
                  "optional": false,
                  "start": 2299,
                  "end": 2316
                },
                "id": null,
                "generator": false,
                "start": 2293,
                "end": 2316
              }
            ],
            "optional": false,
            "start": 2275,
            "end": 2317
          },
          "definite": false,
          "start": 2269,
          "end": 2317
        }
      ],
      "declare": false,
      "start": 2263,
      "end": 2318
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
            "name": "p40",
            "optional": false,
            "typeAnnotation": null,
            "start": 2326,
            "end": 2329
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2332,
                "end": 2333
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2334,
                "end": 2338
              },
              "optional": false,
              "computed": false,
              "start": 2332,
              "end": 2338
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2339,
                "end": 2343
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2345,
                "end": 2354
              }
            ],
            "optional": false,
            "start": 2332,
            "end": 2355
          },
          "definite": false,
          "start": 2326,
          "end": 2355
        }
      ],
      "declare": false,
      "start": 2320,
      "end": 2356
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
            "name": "p41",
            "optional": false,
            "typeAnnotation": null,
            "start": 2363,
            "end": 2366
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2369,
                "end": 2370
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2371,
                "end": 2375
              },
              "optional": false,
              "computed": false,
              "start": 2369,
              "end": 2375
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2376,
                "end": 2380
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2382,
                "end": 2386
              }
            ],
            "optional": false,
            "start": 2369,
            "end": 2387
          },
          "definite": false,
          "start": 2363,
          "end": 2387
        }
      ],
      "declare": false,
      "start": 2357,
      "end": 2388
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
            "name": "p42",
            "optional": false,
            "typeAnnotation": null,
            "start": 2395,
            "end": 2398
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2401,
                "end": 2402
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2403,
                "end": 2407
              },
              "optional": false,
              "computed": false,
              "start": 2401,
              "end": 2407
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2408,
                "end": 2412
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2420,
                  "end": 2421
                },
                "id": null,
                "generator": false,
                "start": 2414,
                "end": 2421
              }
            ],
            "optional": false,
            "start": 2401,
            "end": 2422
          },
          "definite": false,
          "start": 2395,
          "end": 2422
        }
      ],
      "declare": false,
      "start": 2389,
      "end": 2423
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
            "name": "p43",
            "optional": false,
            "typeAnnotation": null,
            "start": 2430,
            "end": 2433
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2436,
                "end": 2437
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2438,
                "end": 2442
              },
              "optional": false,
              "computed": false,
              "start": 2436,
              "end": 2442
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2443,
                "end": 2447
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2455,
                  "end": 2456
                },
                "id": null,
                "generator": false,
                "start": 2449,
                "end": 2456
              }
            ],
            "optional": false,
            "start": 2436,
            "end": 2457
          },
          "definite": false,
          "start": 2430,
          "end": 2457
        }
      ],
      "declare": false,
      "start": 2424,
      "end": 2458
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
            "name": "p44",
            "optional": false,
            "typeAnnotation": null,
            "start": 2465,
            "end": 2468
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2471,
                "end": 2472
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2473,
                "end": 2477
              },
              "optional": false,
              "computed": false,
              "start": 2471,
              "end": 2477
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2478,
                "end": 2482
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2490,
                  "end": 2499
                },
                "id": null,
                "generator": false,
                "start": 2484,
                "end": 2499
              }
            ],
            "optional": false,
            "start": 2471,
            "end": 2500
          },
          "definite": false,
          "start": 2465,
          "end": 2500
        }
      ],
      "declare": false,
      "start": 2459,
      "end": 2501
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
            "name": "p45",
            "optional": false,
            "typeAnnotation": null,
            "start": 2508,
            "end": 2511
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2514,
                "end": 2515
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2516,
                "end": 2520
              },
              "optional": false,
              "computed": false,
              "start": 2514,
              "end": 2520
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2521,
                "end": 2525
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 2533,
                  "end": 2537
                },
                "id": null,
                "generator": false,
                "start": 2527,
                "end": 2537
              }
            ],
            "optional": false,
            "start": 2514,
            "end": 2538
          },
          "definite": false,
          "start": 2508,
          "end": 2538
        }
      ],
      "declare": false,
      "start": 2502,
      "end": 2539
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
            "name": "p46",
            "optional": false,
            "typeAnnotation": null,
            "start": 2546,
            "end": 2549
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2552,
                "end": 2553
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2554,
                "end": 2558
              },
              "optional": false,
              "computed": false,
              "start": 2552,
              "end": 2558
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2559,
                "end": 2563
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 2571,
                  "end": 2573
                },
                "id": null,
                "generator": false,
                "start": 2565,
                "end": 2573
              }
            ],
            "optional": false,
            "start": 2552,
            "end": 2574
          },
          "definite": false,
          "start": 2546,
          "end": 2574
        }
      ],
      "declare": false,
      "start": 2540,
      "end": 2575
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
            "name": "p47",
            "optional": false,
            "typeAnnotation": null,
            "start": 2582,
            "end": 2585
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2588,
                "end": 2589
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2590,
                "end": 2594
              },
              "optional": false,
              "computed": false,
              "start": 2588,
              "end": 2594
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2595,
                "end": 2599
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2614,
                        "end": 2615
                      },
                      "start": 2608,
                      "end": 2615
                    }
                  ],
                  "start": 2607,
                  "end": 2616
                },
                "id": null,
                "generator": false,
                "start": 2601,
                "end": 2616
              }
            ],
            "optional": false,
            "start": 2588,
            "end": 2617
          },
          "definite": false,
          "start": 2582,
          "end": 2617
        }
      ],
      "declare": false,
      "start": 2576,
      "end": 2618
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
            "name": "p48",
            "optional": false,
            "typeAnnotation": null,
            "start": 2625,
            "end": 2628
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2631,
                "end": 2632
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2633,
                "end": 2637
              },
              "optional": false,
              "computed": false,
              "start": 2631,
              "end": 2637
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2638,
                "end": 2642
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2650,
                      "end": 2657
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2658,
                      "end": 2665
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2650,
                    "end": 2665
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2666,
                      "end": 2667
                    }
                  ],
                  "optional": false,
                  "start": 2650,
                  "end": 2668
                },
                "id": null,
                "generator": false,
                "start": 2644,
                "end": 2668
              }
            ],
            "optional": false,
            "start": 2631,
            "end": 2669
          },
          "definite": false,
          "start": 2625,
          "end": 2669
        }
      ],
      "declare": false,
      "start": 2619,
      "end": 2670
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
            "name": "p49",
            "optional": false,
            "typeAnnotation": null,
            "start": 2677,
            "end": 2680
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2683,
                "end": 2684
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2685,
                "end": 2689
              },
              "optional": false,
              "computed": false,
              "start": 2683,
              "end": 2689
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2690,
                "end": 2694
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2702,
                      "end": 2709
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2710,
                      "end": 2716
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2702,
                    "end": 2716
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2717,
                      "end": 2718
                    }
                  ],
                  "optional": false,
                  "start": 2702,
                  "end": 2719
                },
                "id": null,
                "generator": false,
                "start": 2696,
                "end": 2719
              }
            ],
            "optional": false,
            "start": 2683,
            "end": 2720
          },
          "definite": false,
          "start": 2677,
          "end": 2720
        }
      ],
      "declare": false,
      "start": 2671,
      "end": 2721
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
            "name": "p50",
            "optional": false,
            "typeAnnotation": null,
            "start": 2729,
            "end": 2732
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2735,
                "end": 2736
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2737,
                "end": 2741
              },
              "optional": false,
              "computed": false,
              "start": 2735,
              "end": 2741
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 2748,
                  "end": 2751
                },
                "id": null,
                "generator": false,
                "start": 2742,
                "end": 2751
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2753,
                "end": 2762
              }
            ],
            "optional": false,
            "start": 2735,
            "end": 2763
          },
          "definite": false,
          "start": 2729,
          "end": 2763
        }
      ],
      "declare": false,
      "start": 2723,
      "end": 2764
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
            "name": "p51",
            "optional": false,
            "typeAnnotation": null,
            "start": 2771,
            "end": 2774
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2777,
                "end": 2778
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2779,
                "end": 2783
              },
              "optional": false,
              "computed": false,
              "start": 2777,
              "end": 2783
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 2790,
                  "end": 2793
                },
                "id": null,
                "generator": false,
                "start": 2784,
                "end": 2793
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2795,
                "end": 2799
              }
            ],
            "optional": false,
            "start": 2777,
            "end": 2800
          },
          "definite": false,
          "start": 2771,
          "end": 2800
        }
      ],
      "declare": false,
      "start": 2765,
      "end": 2801
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
            "name": "p52",
            "optional": false,
            "typeAnnotation": null,
            "start": 2808,
            "end": 2811
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2814,
                "end": 2815
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2816,
                "end": 2820
              },
              "optional": false,
              "computed": false,
              "start": 2814,
              "end": 2820
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 2827,
                  "end": 2830
                },
                "id": null,
                "generator": false,
                "start": 2821,
                "end": 2830
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2838,
                  "end": 2839
                },
                "id": null,
                "generator": false,
                "start": 2832,
                "end": 2839
              }
            ],
            "optional": false,
            "start": 2814,
            "end": 2840
          },
          "definite": false,
          "start": 2808,
          "end": 2840
        }
      ],
      "declare": false,
      "start": 2802,
      "end": 2841
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
            "name": "p53",
            "optional": false,
            "typeAnnotation": null,
            "start": 2848,
            "end": 2851
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2854,
                "end": 2855
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2856,
                "end": 2860
              },
              "optional": false,
              "computed": false,
              "start": 2854,
              "end": 2860
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 2867,
                  "end": 2870
                },
                "id": null,
                "generator": false,
                "start": 2861,
                "end": 2870
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2878,
                  "end": 2879
                },
                "id": null,
                "generator": false,
                "start": 2872,
                "end": 2879
              }
            ],
            "optional": false,
            "start": 2854,
            "end": 2880
          },
          "definite": false,
          "start": 2848,
          "end": 2880
        }
      ],
      "declare": false,
      "start": 2842,
      "end": 2881
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
            "name": "p54",
            "optional": false,
            "typeAnnotation": null,
            "start": 2888,
            "end": 2891
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2894,
                "end": 2895
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2896,
                "end": 2900
              },
              "optional": false,
              "computed": false,
              "start": 2894,
              "end": 2900
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 2907,
                  "end": 2910
                },
                "id": null,
                "generator": false,
                "start": 2901,
                "end": 2910
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2918,
                  "end": 2927
                },
                "id": null,
                "generator": false,
                "start": 2912,
                "end": 2927
              }
            ],
            "optional": false,
            "start": 2894,
            "end": 2928
          },
          "definite": false,
          "start": 2888,
          "end": 2928
        }
      ],
      "declare": false,
      "start": 2882,
      "end": 2929
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
            "name": "p55",
            "optional": false,
            "typeAnnotation": null,
            "start": 2936,
            "end": 2939
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2942,
                "end": 2943
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2944,
                "end": 2948
              },
              "optional": false,
              "computed": false,
              "start": 2942,
              "end": 2948
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 2955,
                  "end": 2958
                },
                "id": null,
                "generator": false,
                "start": 2949,
                "end": 2958
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 2966,
                  "end": 2970
                },
                "id": null,
                "generator": false,
                "start": 2960,
                "end": 2970
              }
            ],
            "optional": false,
            "start": 2942,
            "end": 2971
          },
          "definite": false,
          "start": 2936,
          "end": 2971
        }
      ],
      "declare": false,
      "start": 2930,
      "end": 2972
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
            "name": "p56",
            "optional": false,
            "typeAnnotation": null,
            "start": 2979,
            "end": 2982
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2985,
                "end": 2986
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2987,
                "end": 2991
              },
              "optional": false,
              "computed": false,
              "start": 2985,
              "end": 2991
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 2998,
                  "end": 3001
                },
                "id": null,
                "generator": false,
                "start": 2992,
                "end": 3001
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3009,
                  "end": 3011
                },
                "id": null,
                "generator": false,
                "start": 3003,
                "end": 3011
              }
            ],
            "optional": false,
            "start": 2985,
            "end": 3012
          },
          "definite": false,
          "start": 2979,
          "end": 3012
        }
      ],
      "declare": false,
      "start": 2973,
      "end": 3013
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
            "name": "p57",
            "optional": false,
            "typeAnnotation": null,
            "start": 3020,
            "end": 3023
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3026,
                "end": 3027
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3028,
                "end": 3032
              },
              "optional": false,
              "computed": false,
              "start": 3026,
              "end": 3032
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 3039,
                  "end": 3042
                },
                "id": null,
                "generator": false,
                "start": 3033,
                "end": 3042
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3057,
                        "end": 3058
                      },
                      "start": 3051,
                      "end": 3058
                    }
                  ],
                  "start": 3050,
                  "end": 3059
                },
                "id": null,
                "generator": false,
                "start": 3044,
                "end": 3059
              }
            ],
            "optional": false,
            "start": 3026,
            "end": 3060
          },
          "definite": false,
          "start": 3020,
          "end": 3060
        }
      ],
      "declare": false,
      "start": 3014,
      "end": 3061
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
            "name": "p58",
            "optional": false,
            "typeAnnotation": null,
            "start": 3068,
            "end": 3071
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3074,
                "end": 3075
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3076,
                "end": 3080
              },
              "optional": false,
              "computed": false,
              "start": 3074,
              "end": 3080
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 3087,
                  "end": 3090
                },
                "id": null,
                "generator": false,
                "start": 3081,
                "end": 3090
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3098,
                      "end": 3105
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3106,
                      "end": 3113
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3098,
                    "end": 3113
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3114,
                      "end": 3115
                    }
                  ],
                  "optional": false,
                  "start": 3098,
                  "end": 3116
                },
                "id": null,
                "generator": false,
                "start": 3092,
                "end": 3116
              }
            ],
            "optional": false,
            "start": 3074,
            "end": 3117
          },
          "definite": false,
          "start": 3068,
          "end": 3117
        }
      ],
      "declare": false,
      "start": 3062,
      "end": 3118
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
            "name": "p59",
            "optional": false,
            "typeAnnotation": null,
            "start": 3125,
            "end": 3128
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3131,
                "end": 3132
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3133,
                "end": 3137
              },
              "optional": false,
              "computed": false,
              "start": 3131,
              "end": 3137
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 3144,
                  "end": 3147
                },
                "id": null,
                "generator": false,
                "start": 3138,
                "end": 3147
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3155,
                      "end": 3162
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3163,
                      "end": 3169
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3155,
                    "end": 3169
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3170,
                      "end": 3171
                    }
                  ],
                  "optional": false,
                  "start": 3155,
                  "end": 3172
                },
                "id": null,
                "generator": false,
                "start": 3149,
                "end": 3172
              }
            ],
            "optional": false,
            "start": 3131,
            "end": 3173
          },
          "definite": false,
          "start": 3125,
          "end": 3173
        }
      ],
      "declare": false,
      "start": 3119,
      "end": 3174
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
            "name": "p60",
            "optional": false,
            "typeAnnotation": null,
            "start": 3182,
            "end": 3185
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3188,
                "end": 3189
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3190,
                "end": 3194
              },
              "optional": false,
              "computed": false,
              "start": 3188,
              "end": 3194
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3201,
                  "end": 3202
                },
                "id": null,
                "generator": false,
                "start": 3195,
                "end": 3202
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 3204,
                "end": 3213
              }
            ],
            "optional": false,
            "start": 3188,
            "end": 3214
          },
          "definite": false,
          "start": 3182,
          "end": 3214
        }
      ],
      "declare": false,
      "start": 3176,
      "end": 3215
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
            "name": "p61",
            "optional": false,
            "typeAnnotation": null,
            "start": 3222,
            "end": 3225
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3228,
                "end": 3229
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3230,
                "end": 3234
              },
              "optional": false,
              "computed": false,
              "start": 3228,
              "end": 3234
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3241,
                  "end": 3242
                },
                "id": null,
                "generator": false,
                "start": 3235,
                "end": 3242
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3244,
                "end": 3248
              }
            ],
            "optional": false,
            "start": 3228,
            "end": 3249
          },
          "definite": false,
          "start": 3222,
          "end": 3249
        }
      ],
      "declare": false,
      "start": 3216,
      "end": 3250
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
            "name": "p62",
            "optional": false,
            "typeAnnotation": null,
            "start": 3257,
            "end": 3260
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3263,
                "end": 3264
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3265,
                "end": 3269
              },
              "optional": false,
              "computed": false,
              "start": 3263,
              "end": 3269
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3276,
                  "end": 3277
                },
                "id": null,
                "generator": false,
                "start": 3270,
                "end": 3277
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3285,
                  "end": 3286
                },
                "id": null,
                "generator": false,
                "start": 3279,
                "end": 3286
              }
            ],
            "optional": false,
            "start": 3263,
            "end": 3287
          },
          "definite": false,
          "start": 3257,
          "end": 3287
        }
      ],
      "declare": false,
      "start": 3251,
      "end": 3288
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
            "name": "p63",
            "optional": false,
            "typeAnnotation": null,
            "start": 3295,
            "end": 3298
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3301,
                "end": 3302
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3303,
                "end": 3307
              },
              "optional": false,
              "computed": false,
              "start": 3301,
              "end": 3307
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3314,
                  "end": 3315
                },
                "id": null,
                "generator": false,
                "start": 3308,
                "end": 3315
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3323,
                  "end": 3324
                },
                "id": null,
                "generator": false,
                "start": 3317,
                "end": 3324
              }
            ],
            "optional": false,
            "start": 3301,
            "end": 3325
          },
          "definite": false,
          "start": 3295,
          "end": 3325
        }
      ],
      "declare": false,
      "start": 3289,
      "end": 3326
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
            "name": "p64",
            "optional": false,
            "typeAnnotation": null,
            "start": 3333,
            "end": 3336
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3339,
                "end": 3340
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3341,
                "end": 3345
              },
              "optional": false,
              "computed": false,
              "start": 3339,
              "end": 3345
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3352,
                  "end": 3353
                },
                "id": null,
                "generator": false,
                "start": 3346,
                "end": 3353
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3361,
                  "end": 3370
                },
                "id": null,
                "generator": false,
                "start": 3355,
                "end": 3370
              }
            ],
            "optional": false,
            "start": 3339,
            "end": 3371
          },
          "definite": false,
          "start": 3333,
          "end": 3371
        }
      ],
      "declare": false,
      "start": 3327,
      "end": 3372
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
            "name": "p65",
            "optional": false,
            "typeAnnotation": null,
            "start": 3379,
            "end": 3382
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3385,
                "end": 3386
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3387,
                "end": 3391
              },
              "optional": false,
              "computed": false,
              "start": 3385,
              "end": 3391
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3398,
                  "end": 3399
                },
                "id": null,
                "generator": false,
                "start": 3392,
                "end": 3399
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 3407,
                  "end": 3411
                },
                "id": null,
                "generator": false,
                "start": 3401,
                "end": 3411
              }
            ],
            "optional": false,
            "start": 3385,
            "end": 3412
          },
          "definite": false,
          "start": 3379,
          "end": 3412
        }
      ],
      "declare": false,
      "start": 3373,
      "end": 3413
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
            "name": "p66",
            "optional": false,
            "typeAnnotation": null,
            "start": 3420,
            "end": 3423
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3426,
                "end": 3427
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3428,
                "end": 3432
              },
              "optional": false,
              "computed": false,
              "start": 3426,
              "end": 3432
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3439,
                  "end": 3440
                },
                "id": null,
                "generator": false,
                "start": 3433,
                "end": 3440
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3448,
                  "end": 3450
                },
                "id": null,
                "generator": false,
                "start": 3442,
                "end": 3450
              }
            ],
            "optional": false,
            "start": 3426,
            "end": 3451
          },
          "definite": false,
          "start": 3420,
          "end": 3451
        }
      ],
      "declare": false,
      "start": 3414,
      "end": 3452
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
            "name": "p67",
            "optional": false,
            "typeAnnotation": null,
            "start": 3459,
            "end": 3462
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3465,
                "end": 3466
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3467,
                "end": 3471
              },
              "optional": false,
              "computed": false,
              "start": 3465,
              "end": 3471
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3478,
                  "end": 3479
                },
                "id": null,
                "generator": false,
                "start": 3472,
                "end": 3479
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3494,
                        "end": 3495
                      },
                      "start": 3488,
                      "end": 3495
                    }
                  ],
                  "start": 3487,
                  "end": 3496
                },
                "id": null,
                "generator": false,
                "start": 3481,
                "end": 3496
              }
            ],
            "optional": false,
            "start": 3465,
            "end": 3497
          },
          "definite": false,
          "start": 3459,
          "end": 3497
        }
      ],
      "declare": false,
      "start": 3453,
      "end": 3498
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
            "name": "p68",
            "optional": false,
            "typeAnnotation": null,
            "start": 3505,
            "end": 3508
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3511,
                "end": 3512
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3513,
                "end": 3517
              },
              "optional": false,
              "computed": false,
              "start": 3511,
              "end": 3517
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3524,
                  "end": 3525
                },
                "id": null,
                "generator": false,
                "start": 3518,
                "end": 3525
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3533,
                      "end": 3540
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3541,
                      "end": 3548
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3533,
                    "end": 3548
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3549,
                      "end": 3550
                    }
                  ],
                  "optional": false,
                  "start": 3533,
                  "end": 3551
                },
                "id": null,
                "generator": false,
                "start": 3527,
                "end": 3551
              }
            ],
            "optional": false,
            "start": 3511,
            "end": 3552
          },
          "definite": false,
          "start": 3505,
          "end": 3552
        }
      ],
      "declare": false,
      "start": 3499,
      "end": 3553
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
            "name": "p69",
            "optional": false,
            "typeAnnotation": null,
            "start": 3560,
            "end": 3563
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3566,
                "end": 3567
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3568,
                "end": 3572
              },
              "optional": false,
              "computed": false,
              "start": 3566,
              "end": 3572
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3579,
                  "end": 3580
                },
                "id": null,
                "generator": false,
                "start": 3573,
                "end": 3580
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3588,
                      "end": 3595
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3596,
                      "end": 3602
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3588,
                    "end": 3602
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3603,
                      "end": 3604
                    }
                  ],
                  "optional": false,
                  "start": 3588,
                  "end": 3605
                },
                "id": null,
                "generator": false,
                "start": 3582,
                "end": 3605
              }
            ],
            "optional": false,
            "start": 3566,
            "end": 3606
          },
          "definite": false,
          "start": 3560,
          "end": 3606
        }
      ],
      "declare": false,
      "start": 3554,
      "end": 3607
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
            "name": "p70",
            "optional": false,
            "typeAnnotation": null,
            "start": 3615,
            "end": 3618
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3621,
                "end": 3622
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3623,
                "end": 3627
              },
              "optional": false,
              "computed": false,
              "start": 3621,
              "end": 3627
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3634,
                  "end": 3643
                },
                "id": null,
                "generator": false,
                "start": 3628,
                "end": 3643
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 3645,
                "end": 3654
              }
            ],
            "optional": false,
            "start": 3621,
            "end": 3655
          },
          "definite": false,
          "start": 3615,
          "end": 3655
        }
      ],
      "declare": false,
      "start": 3609,
      "end": 3656
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
            "name": "p71",
            "optional": false,
            "typeAnnotation": null,
            "start": 3663,
            "end": 3666
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3669,
                "end": 3670
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3671,
                "end": 3675
              },
              "optional": false,
              "computed": false,
              "start": 3669,
              "end": 3675
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3682,
                  "end": 3691
                },
                "id": null,
                "generator": false,
                "start": 3676,
                "end": 3691
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3693,
                "end": 3697
              }
            ],
            "optional": false,
            "start": 3669,
            "end": 3698
          },
          "definite": false,
          "start": 3663,
          "end": 3698
        }
      ],
      "declare": false,
      "start": 3657,
      "end": 3699
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
            "name": "p72",
            "optional": false,
            "typeAnnotation": null,
            "start": 3706,
            "end": 3709
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3712,
                "end": 3713
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3714,
                "end": 3718
              },
              "optional": false,
              "computed": false,
              "start": 3712,
              "end": 3718
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3725,
                  "end": 3734
                },
                "id": null,
                "generator": false,
                "start": 3719,
                "end": 3734
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3742,
                  "end": 3743
                },
                "id": null,
                "generator": false,
                "start": 3736,
                "end": 3743
              }
            ],
            "optional": false,
            "start": 3712,
            "end": 3744
          },
          "definite": false,
          "start": 3706,
          "end": 3744
        }
      ],
      "declare": false,
      "start": 3700,
      "end": 3745
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
            "name": "p73",
            "optional": false,
            "typeAnnotation": null,
            "start": 3752,
            "end": 3755
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3758,
                "end": 3759
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3760,
                "end": 3764
              },
              "optional": false,
              "computed": false,
              "start": 3758,
              "end": 3764
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3771,
                  "end": 3780
                },
                "id": null,
                "generator": false,
                "start": 3765,
                "end": 3780
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3788,
                  "end": 3789
                },
                "id": null,
                "generator": false,
                "start": 3782,
                "end": 3789
              }
            ],
            "optional": false,
            "start": 3758,
            "end": 3790
          },
          "definite": false,
          "start": 3752,
          "end": 3790
        }
      ],
      "declare": false,
      "start": 3746,
      "end": 3791
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
            "name": "p74",
            "optional": false,
            "typeAnnotation": null,
            "start": 3798,
            "end": 3801
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3804,
                "end": 3805
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3806,
                "end": 3810
              },
              "optional": false,
              "computed": false,
              "start": 3804,
              "end": 3810
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3817,
                  "end": 3826
                },
                "id": null,
                "generator": false,
                "start": 3811,
                "end": 3826
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3834,
                  "end": 3843
                },
                "id": null,
                "generator": false,
                "start": 3828,
                "end": 3843
              }
            ],
            "optional": false,
            "start": 3804,
            "end": 3844
          },
          "definite": false,
          "start": 3798,
          "end": 3844
        }
      ],
      "declare": false,
      "start": 3792,
      "end": 3845
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
            "name": "p75",
            "optional": false,
            "typeAnnotation": null,
            "start": 3852,
            "end": 3855
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3858,
                "end": 3859
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3860,
                "end": 3864
              },
              "optional": false,
              "computed": false,
              "start": 3858,
              "end": 3864
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3871,
                  "end": 3880
                },
                "id": null,
                "generator": false,
                "start": 3865,
                "end": 3880
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 3888,
                  "end": 3892
                },
                "id": null,
                "generator": false,
                "start": 3882,
                "end": 3892
              }
            ],
            "optional": false,
            "start": 3858,
            "end": 3893
          },
          "definite": false,
          "start": 3852,
          "end": 3893
        }
      ],
      "declare": false,
      "start": 3846,
      "end": 3894
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
            "name": "p76",
            "optional": false,
            "typeAnnotation": null,
            "start": 3901,
            "end": 3904
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3907,
                "end": 3908
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3909,
                "end": 3913
              },
              "optional": false,
              "computed": false,
              "start": 3907,
              "end": 3913
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3920,
                  "end": 3929
                },
                "id": null,
                "generator": false,
                "start": 3914,
                "end": 3929
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3937,
                  "end": 3939
                },
                "id": null,
                "generator": false,
                "start": 3931,
                "end": 3939
              }
            ],
            "optional": false,
            "start": 3907,
            "end": 3940
          },
          "definite": false,
          "start": 3901,
          "end": 3940
        }
      ],
      "declare": false,
      "start": 3895,
      "end": 3941
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
            "name": "p77",
            "optional": false,
            "typeAnnotation": null,
            "start": 3948,
            "end": 3951
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 3954,
                "end": 3955
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3956,
                "end": 3960
              },
              "optional": false,
              "computed": false,
              "start": 3954,
              "end": 3960
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3967,
                  "end": 3976
                },
                "id": null,
                "generator": false,
                "start": 3961,
                "end": 3976
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3991,
                        "end": 3992
                      },
                      "start": 3985,
                      "end": 3992
                    }
                  ],
                  "start": 3984,
                  "end": 3993
                },
                "id": null,
                "generator": false,
                "start": 3978,
                "end": 3993
              }
            ],
            "optional": false,
            "start": 3954,
            "end": 3994
          },
          "definite": false,
          "start": 3948,
          "end": 3994
        }
      ],
      "declare": false,
      "start": 3942,
      "end": 3995
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
            "name": "p78",
            "optional": false,
            "typeAnnotation": null,
            "start": 4002,
            "end": 4005
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4008,
                "end": 4009
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4010,
                "end": 4014
              },
              "optional": false,
              "computed": false,
              "start": 4008,
              "end": 4014
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4021,
                  "end": 4030
                },
                "id": null,
                "generator": false,
                "start": 4015,
                "end": 4030
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4038,
                      "end": 4045
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4046,
                      "end": 4053
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4038,
                    "end": 4053
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4054,
                      "end": 4055
                    }
                  ],
                  "optional": false,
                  "start": 4038,
                  "end": 4056
                },
                "id": null,
                "generator": false,
                "start": 4032,
                "end": 4056
              }
            ],
            "optional": false,
            "start": 4008,
            "end": 4057
          },
          "definite": false,
          "start": 4002,
          "end": 4057
        }
      ],
      "declare": false,
      "start": 3996,
      "end": 4058
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
            "name": "p79",
            "optional": false,
            "typeAnnotation": null,
            "start": 4065,
            "end": 4068
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4071,
                "end": 4072
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4073,
                "end": 4077
              },
              "optional": false,
              "computed": false,
              "start": 4071,
              "end": 4077
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4084,
                  "end": 4093
                },
                "id": null,
                "generator": false,
                "start": 4078,
                "end": 4093
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4101,
                      "end": 4108
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4109,
                      "end": 4115
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4101,
                    "end": 4115
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4116,
                      "end": 4117
                    }
                  ],
                  "optional": false,
                  "start": 4101,
                  "end": 4118
                },
                "id": null,
                "generator": false,
                "start": 4095,
                "end": 4118
              }
            ],
            "optional": false,
            "start": 4071,
            "end": 4119
          },
          "definite": false,
          "start": 4065,
          "end": 4119
        }
      ],
      "declare": false,
      "start": 4059,
      "end": 4120
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
            "name": "p80",
            "optional": false,
            "typeAnnotation": null,
            "start": 4128,
            "end": 4131
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4134,
                "end": 4135
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4136,
                "end": 4140
              },
              "optional": false,
              "computed": false,
              "start": 4134,
              "end": 4140
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4147,
                  "end": 4151
                },
                "id": null,
                "generator": false,
                "start": 4141,
                "end": 4151
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 4153,
                "end": 4162
              }
            ],
            "optional": false,
            "start": 4134,
            "end": 4163
          },
          "definite": false,
          "start": 4128,
          "end": 4163
        }
      ],
      "declare": false,
      "start": 4122,
      "end": 4164
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
            "name": "p81",
            "optional": false,
            "typeAnnotation": null,
            "start": 4171,
            "end": 4174
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4177,
                "end": 4178
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4179,
                "end": 4183
              },
              "optional": false,
              "computed": false,
              "start": 4177,
              "end": 4183
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4190,
                  "end": 4194
                },
                "id": null,
                "generator": false,
                "start": 4184,
                "end": 4194
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 4196,
                "end": 4200
              }
            ],
            "optional": false,
            "start": 4177,
            "end": 4201
          },
          "definite": false,
          "start": 4171,
          "end": 4201
        }
      ],
      "declare": false,
      "start": 4165,
      "end": 4202
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
            "name": "p82",
            "optional": false,
            "typeAnnotation": null,
            "start": 4209,
            "end": 4212
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4215,
                "end": 4216
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4217,
                "end": 4221
              },
              "optional": false,
              "computed": false,
              "start": 4215,
              "end": 4221
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4228,
                  "end": 4232
                },
                "id": null,
                "generator": false,
                "start": 4222,
                "end": 4232
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4240,
                  "end": 4241
                },
                "id": null,
                "generator": false,
                "start": 4234,
                "end": 4241
              }
            ],
            "optional": false,
            "start": 4215,
            "end": 4242
          },
          "definite": false,
          "start": 4209,
          "end": 4242
        }
      ],
      "declare": false,
      "start": 4203,
      "end": 4243
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
            "name": "p83",
            "optional": false,
            "typeAnnotation": null,
            "start": 4250,
            "end": 4253
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4256,
                "end": 4257
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4258,
                "end": 4262
              },
              "optional": false,
              "computed": false,
              "start": 4256,
              "end": 4262
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4269,
                  "end": 4273
                },
                "id": null,
                "generator": false,
                "start": 4263,
                "end": 4273
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4281,
                  "end": 4282
                },
                "id": null,
                "generator": false,
                "start": 4275,
                "end": 4282
              }
            ],
            "optional": false,
            "start": 4256,
            "end": 4283
          },
          "definite": false,
          "start": 4250,
          "end": 4283
        }
      ],
      "declare": false,
      "start": 4244,
      "end": 4284
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
            "name": "p84",
            "optional": false,
            "typeAnnotation": null,
            "start": 4291,
            "end": 4294
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4297,
                "end": 4298
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4299,
                "end": 4303
              },
              "optional": false,
              "computed": false,
              "start": 4297,
              "end": 4303
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4310,
                  "end": 4314
                },
                "id": null,
                "generator": false,
                "start": 4304,
                "end": 4314
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4322,
                  "end": 4331
                },
                "id": null,
                "generator": false,
                "start": 4316,
                "end": 4331
              }
            ],
            "optional": false,
            "start": 4297,
            "end": 4332
          },
          "definite": false,
          "start": 4291,
          "end": 4332
        }
      ],
      "declare": false,
      "start": 4285,
      "end": 4333
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
            "name": "p85",
            "optional": false,
            "typeAnnotation": null,
            "start": 4340,
            "end": 4343
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4346,
                "end": 4347
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4348,
                "end": 4352
              },
              "optional": false,
              "computed": false,
              "start": 4346,
              "end": 4352
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4359,
                  "end": 4363
                },
                "id": null,
                "generator": false,
                "start": 4353,
                "end": 4363
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4371,
                  "end": 4375
                },
                "id": null,
                "generator": false,
                "start": 4365,
                "end": 4375
              }
            ],
            "optional": false,
            "start": 4346,
            "end": 4376
          },
          "definite": false,
          "start": 4340,
          "end": 4376
        }
      ],
      "declare": false,
      "start": 4334,
      "end": 4377
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
            "name": "p86",
            "optional": false,
            "typeAnnotation": null,
            "start": 4384,
            "end": 4387
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4390,
                "end": 4391
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4392,
                "end": 4396
              },
              "optional": false,
              "computed": false,
              "start": 4390,
              "end": 4396
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4403,
                  "end": 4407
                },
                "id": null,
                "generator": false,
                "start": 4397,
                "end": 4407
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4415,
                  "end": 4417
                },
                "id": null,
                "generator": false,
                "start": 4409,
                "end": 4417
              }
            ],
            "optional": false,
            "start": 4390,
            "end": 4418
          },
          "definite": false,
          "start": 4384,
          "end": 4418
        }
      ],
      "declare": false,
      "start": 4378,
      "end": 4419
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
            "name": "p87",
            "optional": false,
            "typeAnnotation": null,
            "start": 4426,
            "end": 4429
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4432,
                "end": 4433
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4434,
                "end": 4438
              },
              "optional": false,
              "computed": false,
              "start": 4432,
              "end": 4438
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4445,
                  "end": 4449
                },
                "id": null,
                "generator": false,
                "start": 4439,
                "end": 4449
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4464,
                        "end": 4465
                      },
                      "start": 4458,
                      "end": 4465
                    }
                  ],
                  "start": 4457,
                  "end": 4466
                },
                "id": null,
                "generator": false,
                "start": 4451,
                "end": 4466
              }
            ],
            "optional": false,
            "start": 4432,
            "end": 4467
          },
          "definite": false,
          "start": 4426,
          "end": 4467
        }
      ],
      "declare": false,
      "start": 4420,
      "end": 4468
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
            "name": "p88",
            "optional": false,
            "typeAnnotation": null,
            "start": 4475,
            "end": 4478
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4481,
                "end": 4482
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4483,
                "end": 4487
              },
              "optional": false,
              "computed": false,
              "start": 4481,
              "end": 4487
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4494,
                  "end": 4498
                },
                "id": null,
                "generator": false,
                "start": 4488,
                "end": 4498
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4506,
                      "end": 4513
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4514,
                      "end": 4521
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4506,
                    "end": 4521
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4522,
                      "end": 4523
                    }
                  ],
                  "optional": false,
                  "start": 4506,
                  "end": 4524
                },
                "id": null,
                "generator": false,
                "start": 4500,
                "end": 4524
              }
            ],
            "optional": false,
            "start": 4481,
            "end": 4525
          },
          "definite": false,
          "start": 4475,
          "end": 4525
        }
      ],
      "declare": false,
      "start": 4469,
      "end": 4526
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
            "name": "p89",
            "optional": false,
            "typeAnnotation": null,
            "start": 4533,
            "end": 4536
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4539,
                "end": 4540
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4541,
                "end": 4545
              },
              "optional": false,
              "computed": false,
              "start": 4539,
              "end": 4545
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4552,
                  "end": 4556
                },
                "id": null,
                "generator": false,
                "start": 4546,
                "end": 4556
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4564,
                      "end": 4571
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4572,
                      "end": 4578
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4564,
                    "end": 4578
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4579,
                      "end": 4580
                    }
                  ],
                  "optional": false,
                  "start": 4564,
                  "end": 4581
                },
                "id": null,
                "generator": false,
                "start": 4558,
                "end": 4581
              }
            ],
            "optional": false,
            "start": 4539,
            "end": 4582
          },
          "definite": false,
          "start": 4533,
          "end": 4582
        }
      ],
      "declare": false,
      "start": 4527,
      "end": 4583
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
            "name": "p90",
            "optional": false,
            "typeAnnotation": null,
            "start": 4591,
            "end": 4594
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4597,
                "end": 4598
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4599,
                "end": 4603
              },
              "optional": false,
              "computed": false,
              "start": 4597,
              "end": 4603
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4610,
                  "end": 4612
                },
                "id": null,
                "generator": false,
                "start": 4604,
                "end": 4612
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 4614,
                "end": 4623
              }
            ],
            "optional": false,
            "start": 4597,
            "end": 4624
          },
          "definite": false,
          "start": 4591,
          "end": 4624
        }
      ],
      "declare": false,
      "start": 4585,
      "end": 4625
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
            "name": "p91",
            "optional": false,
            "typeAnnotation": null,
            "start": 4632,
            "end": 4635
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4638,
                "end": 4639
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4640,
                "end": 4644
              },
              "optional": false,
              "computed": false,
              "start": 4638,
              "end": 4644
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4651,
                  "end": 4653
                },
                "id": null,
                "generator": false,
                "start": 4645,
                "end": 4653
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 4655,
                "end": 4659
              }
            ],
            "optional": false,
            "start": 4638,
            "end": 4660
          },
          "definite": false,
          "start": 4632,
          "end": 4660
        }
      ],
      "declare": false,
      "start": 4626,
      "end": 4661
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
            "name": "p92",
            "optional": false,
            "typeAnnotation": null,
            "start": 4668,
            "end": 4671
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4674,
                "end": 4675
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4676,
                "end": 4680
              },
              "optional": false,
              "computed": false,
              "start": 4674,
              "end": 4680
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4687,
                  "end": 4689
                },
                "id": null,
                "generator": false,
                "start": 4681,
                "end": 4689
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4697,
                  "end": 4698
                },
                "id": null,
                "generator": false,
                "start": 4691,
                "end": 4698
              }
            ],
            "optional": false,
            "start": 4674,
            "end": 4699
          },
          "definite": false,
          "start": 4668,
          "end": 4699
        }
      ],
      "declare": false,
      "start": 4662,
      "end": 4700
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
            "name": "p93",
            "optional": false,
            "typeAnnotation": null,
            "start": 4707,
            "end": 4710
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4713,
                "end": 4714
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4715,
                "end": 4719
              },
              "optional": false,
              "computed": false,
              "start": 4713,
              "end": 4719
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4726,
                  "end": 4728
                },
                "id": null,
                "generator": false,
                "start": 4720,
                "end": 4728
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4736,
                  "end": 4737
                },
                "id": null,
                "generator": false,
                "start": 4730,
                "end": 4737
              }
            ],
            "optional": false,
            "start": 4713,
            "end": 4738
          },
          "definite": false,
          "start": 4707,
          "end": 4738
        }
      ],
      "declare": false,
      "start": 4701,
      "end": 4739
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
            "name": "p94",
            "optional": false,
            "typeAnnotation": null,
            "start": 4746,
            "end": 4749
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4752,
                "end": 4753
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4754,
                "end": 4758
              },
              "optional": false,
              "computed": false,
              "start": 4752,
              "end": 4758
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4765,
                  "end": 4767
                },
                "id": null,
                "generator": false,
                "start": 4759,
                "end": 4767
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4775,
                  "end": 4784
                },
                "id": null,
                "generator": false,
                "start": 4769,
                "end": 4784
              }
            ],
            "optional": false,
            "start": 4752,
            "end": 4785
          },
          "definite": false,
          "start": 4746,
          "end": 4785
        }
      ],
      "declare": false,
      "start": 4740,
      "end": 4786
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
            "name": "p95",
            "optional": false,
            "typeAnnotation": null,
            "start": 4793,
            "end": 4796
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4799,
                "end": 4800
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4801,
                "end": 4805
              },
              "optional": false,
              "computed": false,
              "start": 4799,
              "end": 4805
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4812,
                  "end": 4814
                },
                "id": null,
                "generator": false,
                "start": 4806,
                "end": 4814
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4822,
                  "end": 4826
                },
                "id": null,
                "generator": false,
                "start": 4816,
                "end": 4826
              }
            ],
            "optional": false,
            "start": 4799,
            "end": 4827
          },
          "definite": false,
          "start": 4793,
          "end": 4827
        }
      ],
      "declare": false,
      "start": 4787,
      "end": 4828
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
            "name": "p96",
            "optional": false,
            "typeAnnotation": null,
            "start": 4835,
            "end": 4838
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4841,
                "end": 4842
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4843,
                "end": 4847
              },
              "optional": false,
              "computed": false,
              "start": 4841,
              "end": 4847
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4854,
                  "end": 4856
                },
                "id": null,
                "generator": false,
                "start": 4848,
                "end": 4856
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4864,
                  "end": 4866
                },
                "id": null,
                "generator": false,
                "start": 4858,
                "end": 4866
              }
            ],
            "optional": false,
            "start": 4841,
            "end": 4867
          },
          "definite": false,
          "start": 4835,
          "end": 4867
        }
      ],
      "declare": false,
      "start": 4829,
      "end": 4868
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
            "name": "p97",
            "optional": false,
            "typeAnnotation": null,
            "start": 4875,
            "end": 4878
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4881,
                "end": 4882
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4883,
                "end": 4887
              },
              "optional": false,
              "computed": false,
              "start": 4881,
              "end": 4887
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4894,
                  "end": 4896
                },
                "id": null,
                "generator": false,
                "start": 4888,
                "end": 4896
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4911,
                        "end": 4912
                      },
                      "start": 4905,
                      "end": 4912
                    }
                  ],
                  "start": 4904,
                  "end": 4913
                },
                "id": null,
                "generator": false,
                "start": 4898,
                "end": 4913
              }
            ],
            "optional": false,
            "start": 4881,
            "end": 4914
          },
          "definite": false,
          "start": 4875,
          "end": 4914
        }
      ],
      "declare": false,
      "start": 4869,
      "end": 4915
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
            "name": "p98",
            "optional": false,
            "typeAnnotation": null,
            "start": 4922,
            "end": 4925
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4928,
                "end": 4929
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4930,
                "end": 4934
              },
              "optional": false,
              "computed": false,
              "start": 4928,
              "end": 4934
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4941,
                  "end": 4943
                },
                "id": null,
                "generator": false,
                "start": 4935,
                "end": 4943
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4951,
                      "end": 4958
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4959,
                      "end": 4966
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4951,
                    "end": 4966
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4967,
                      "end": 4968
                    }
                  ],
                  "optional": false,
                  "start": 4951,
                  "end": 4969
                },
                "id": null,
                "generator": false,
                "start": 4945,
                "end": 4969
              }
            ],
            "optional": false,
            "start": 4928,
            "end": 4970
          },
          "definite": false,
          "start": 4922,
          "end": 4970
        }
      ],
      "declare": false,
      "start": 4916,
      "end": 4971
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
            "name": "p99",
            "optional": false,
            "typeAnnotation": null,
            "start": 4978,
            "end": 4981
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4984,
                "end": 4985
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4986,
                "end": 4990
              },
              "optional": false,
              "computed": false,
              "start": 4984,
              "end": 4990
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4997,
                  "end": 4999
                },
                "id": null,
                "generator": false,
                "start": 4991,
                "end": 4999
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5007,
                      "end": 5014
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5015,
                      "end": 5021
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5007,
                    "end": 5021
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 5022,
                      "end": 5023
                    }
                  ],
                  "optional": false,
                  "start": 5007,
                  "end": 5024
                },
                "id": null,
                "generator": false,
                "start": 5001,
                "end": 5024
              }
            ],
            "optional": false,
            "start": 4984,
            "end": 5025
          },
          "definite": false,
          "start": 4978,
          "end": 5025
        }
      ],
      "declare": false,
      "start": 4972,
      "end": 5026
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
            "name": "pa0",
            "optional": false,
            "typeAnnotation": null,
            "start": 5034,
            "end": 5037
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5040,
                "end": 5041
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5042,
                "end": 5046
              },
              "optional": false,
              "computed": false,
              "start": 5040,
              "end": 5046
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5060,
                        "end": 5061
                      },
                      "start": 5054,
                      "end": 5061
                    }
                  ],
                  "start": 5053,
                  "end": 5062
                },
                "id": null,
                "generator": false,
                "start": 5047,
                "end": 5062
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 5064,
                "end": 5073
              }
            ],
            "optional": false,
            "start": 5040,
            "end": 5074
          },
          "definite": false,
          "start": 5034,
          "end": 5074
        }
      ],
      "declare": false,
      "start": 5028,
      "end": 5075
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
            "name": "pa1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5082,
            "end": 5085
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5088,
                "end": 5089
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5090,
                "end": 5094
              },
              "optional": false,
              "computed": false,
              "start": 5088,
              "end": 5094
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5108,
                        "end": 5109
                      },
                      "start": 5102,
                      "end": 5109
                    }
                  ],
                  "start": 5101,
                  "end": 5110
                },
                "id": null,
                "generator": false,
                "start": 5095,
                "end": 5110
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 5112,
                "end": 5116
              }
            ],
            "optional": false,
            "start": 5088,
            "end": 5117
          },
          "definite": false,
          "start": 5082,
          "end": 5117
        }
      ],
      "declare": false,
      "start": 5076,
      "end": 5118
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
            "name": "pa2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5125,
            "end": 5128
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5131,
                "end": 5132
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5133,
                "end": 5137
              },
              "optional": false,
              "computed": false,
              "start": 5131,
              "end": 5137
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5151,
                        "end": 5152
                      },
                      "start": 5145,
                      "end": 5152
                    }
                  ],
                  "start": 5144,
                  "end": 5153
                },
                "id": null,
                "generator": false,
                "start": 5138,
                "end": 5153
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 5161,
                  "end": 5162
                },
                "id": null,
                "generator": false,
                "start": 5155,
                "end": 5162
              }
            ],
            "optional": false,
            "start": 5131,
            "end": 5163
          },
          "definite": false,
          "start": 5125,
          "end": 5163
        }
      ],
      "declare": false,
      "start": 5119,
      "end": 5164
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
            "name": "pa3",
            "optional": false,
            "typeAnnotation": null,
            "start": 5171,
            "end": 5174
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5177,
                "end": 5178
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5179,
                "end": 5183
              },
              "optional": false,
              "computed": false,
              "start": 5177,
              "end": 5183
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5197,
                        "end": 5198
                      },
                      "start": 5191,
                      "end": 5198
                    }
                  ],
                  "start": 5190,
                  "end": 5199
                },
                "id": null,
                "generator": false,
                "start": 5184,
                "end": 5199
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5207,
                  "end": 5208
                },
                "id": null,
                "generator": false,
                "start": 5201,
                "end": 5208
              }
            ],
            "optional": false,
            "start": 5177,
            "end": 5209
          },
          "definite": false,
          "start": 5171,
          "end": 5209
        }
      ],
      "declare": false,
      "start": 5165,
      "end": 5210
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
            "name": "pa4",
            "optional": false,
            "typeAnnotation": null,
            "start": 5217,
            "end": 5220
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5223,
                "end": 5224
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5225,
                "end": 5229
              },
              "optional": false,
              "computed": false,
              "start": 5223,
              "end": 5229
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5243,
                        "end": 5244
                      },
                      "start": 5237,
                      "end": 5244
                    }
                  ],
                  "start": 5236,
                  "end": 5245
                },
                "id": null,
                "generator": false,
                "start": 5230,
                "end": 5245
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5253,
                  "end": 5262
                },
                "id": null,
                "generator": false,
                "start": 5247,
                "end": 5262
              }
            ],
            "optional": false,
            "start": 5223,
            "end": 5263
          },
          "definite": false,
          "start": 5217,
          "end": 5263
        }
      ],
      "declare": false,
      "start": 5211,
      "end": 5264
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
            "name": "pa5",
            "optional": false,
            "typeAnnotation": null,
            "start": 5271,
            "end": 5274
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5277,
                "end": 5278
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5279,
                "end": 5283
              },
              "optional": false,
              "computed": false,
              "start": 5277,
              "end": 5283
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5297,
                        "end": 5298
                      },
                      "start": 5291,
                      "end": 5298
                    }
                  ],
                  "start": 5290,
                  "end": 5299
                },
                "id": null,
                "generator": false,
                "start": 5284,
                "end": 5299
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 5307,
                  "end": 5311
                },
                "id": null,
                "generator": false,
                "start": 5301,
                "end": 5311
              }
            ],
            "optional": false,
            "start": 5277,
            "end": 5312
          },
          "definite": false,
          "start": 5271,
          "end": 5312
        }
      ],
      "declare": false,
      "start": 5265,
      "end": 5313
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
            "name": "pa6",
            "optional": false,
            "typeAnnotation": null,
            "start": 5320,
            "end": 5323
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5326,
                "end": 5327
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5328,
                "end": 5332
              },
              "optional": false,
              "computed": false,
              "start": 5326,
              "end": 5332
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5346,
                        "end": 5347
                      },
                      "start": 5340,
                      "end": 5347
                    }
                  ],
                  "start": 5339,
                  "end": 5348
                },
                "id": null,
                "generator": false,
                "start": 5333,
                "end": 5348
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 5356,
                  "end": 5358
                },
                "id": null,
                "generator": false,
                "start": 5350,
                "end": 5358
              }
            ],
            "optional": false,
            "start": 5326,
            "end": 5359
          },
          "definite": false,
          "start": 5320,
          "end": 5359
        }
      ],
      "declare": false,
      "start": 5314,
      "end": 5360
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
            "name": "pa7",
            "optional": false,
            "typeAnnotation": null,
            "start": 5367,
            "end": 5370
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5373,
                "end": 5374
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5375,
                "end": 5379
              },
              "optional": false,
              "computed": false,
              "start": 5373,
              "end": 5379
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5393,
                        "end": 5394
                      },
                      "start": 5387,
                      "end": 5394
                    }
                  ],
                  "start": 5386,
                  "end": 5395
                },
                "id": null,
                "generator": false,
                "start": 5380,
                "end": 5395
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5410,
                        "end": 5411
                      },
                      "start": 5404,
                      "end": 5411
                    }
                  ],
                  "start": 5403,
                  "end": 5412
                },
                "id": null,
                "generator": false,
                "start": 5397,
                "end": 5412
              }
            ],
            "optional": false,
            "start": 5373,
            "end": 5413
          },
          "definite": false,
          "start": 5367,
          "end": 5413
        }
      ],
      "declare": false,
      "start": 5361,
      "end": 5414
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
            "name": "pa8",
            "optional": false,
            "typeAnnotation": null,
            "start": 5421,
            "end": 5424
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5427,
                "end": 5428
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5429,
                "end": 5433
              },
              "optional": false,
              "computed": false,
              "start": 5427,
              "end": 5433
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5447,
                        "end": 5448
                      },
                      "start": 5441,
                      "end": 5448
                    }
                  ],
                  "start": 5440,
                  "end": 5449
                },
                "id": null,
                "generator": false,
                "start": 5434,
                "end": 5449
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5457,
                      "end": 5464
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5465,
                      "end": 5472
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5457,
                    "end": 5472
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 5473,
                      "end": 5474
                    }
                  ],
                  "optional": false,
                  "start": 5457,
                  "end": 5475
                },
                "id": null,
                "generator": false,
                "start": 5451,
                "end": 5475
              }
            ],
            "optional": false,
            "start": 5427,
            "end": 5476
          },
          "definite": false,
          "start": 5421,
          "end": 5476
        }
      ],
      "declare": false,
      "start": 5415,
      "end": 5477
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
            "name": "pa9",
            "optional": false,
            "typeAnnotation": null,
            "start": 5484,
            "end": 5487
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5490,
                "end": 5491
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5492,
                "end": 5496
              },
              "optional": false,
              "computed": false,
              "start": 5490,
              "end": 5496
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5510,
                        "end": 5511
                      },
                      "start": 5504,
                      "end": 5511
                    }
                  ],
                  "start": 5503,
                  "end": 5512
                },
                "id": null,
                "generator": false,
                "start": 5497,
                "end": 5512
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5520,
                      "end": 5527
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5528,
                      "end": 5534
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5520,
                    "end": 5534
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 5535,
                      "end": 5536
                    }
                  ],
                  "optional": false,
                  "start": 5520,
                  "end": 5537
                },
                "id": null,
                "generator": false,
                "start": 5514,
                "end": 5537
              }
            ],
            "optional": false,
            "start": 5490,
            "end": 5538
          },
          "definite": false,
          "start": 5484,
          "end": 5538
        }
      ],
      "declare": false,
      "start": 5478,
      "end": 5539
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
            "name": "pb0",
            "optional": false,
            "typeAnnotation": null,
            "start": 5547,
            "end": 5550
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5553,
                "end": 5554
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5555,
                "end": 5559
              },
              "optional": false,
              "computed": false,
              "start": 5553,
              "end": 5559
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5566,
                      "end": 5573
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5574,
                      "end": 5581
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5566,
                    "end": 5581
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 5582,
                      "end": 5585
                    }
                  ],
                  "optional": false,
                  "start": 5566,
                  "end": 5586
                },
                "id": null,
                "generator": false,
                "start": 5560,
                "end": 5586
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 5588,
                "end": 5597
              }
            ],
            "optional": false,
            "start": 5553,
            "end": 5598
          },
          "definite": false,
          "start": 5547,
          "end": 5598
        }
      ],
      "declare": false,
      "start": 5541,
      "end": 5599
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
            "name": "pb1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5606,
            "end": 5609
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5612,
                "end": 5613
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5614,
                "end": 5618
              },
              "optional": false,
              "computed": false,
              "start": 5612,
              "end": 5618
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5625,
                      "end": 5632
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5633,
                      "end": 5640
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5625,
                    "end": 5640
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 5641,
                      "end": 5644
                    }
                  ],
                  "optional": false,
                  "start": 5625,
                  "end": 5645
                },
                "id": null,
                "generator": false,
                "start": 5619,
                "end": 5645
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 5647,
                "end": 5651
              }
            ],
            "optional": false,
            "start": 5612,
            "end": 5652
          },
          "definite": false,
          "start": 5606,
          "end": 5652
        }
      ],
      "declare": false,
      "start": 5600,
      "end": 5653
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
            "name": "pb2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5660,
            "end": 5663
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5666,
                "end": 5667
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5668,
                "end": 5672
              },
              "optional": false,
              "computed": false,
              "start": 5666,
              "end": 5672
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5679,
                      "end": 5686
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5687,
                      "end": 5694
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5679,
                    "end": 5694
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 5695,
                      "end": 5698
                    }
                  ],
                  "optional": false,
                  "start": 5679,
                  "end": 5699
                },
                "id": null,
                "generator": false,
                "start": 5673,
                "end": 5699
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 5707,
                  "end": 5708
                },
                "id": null,
                "generator": false,
                "start": 5701,
                "end": 5708
              }
            ],
            "optional": false,
            "start": 5666,
            "end": 5709
          },
          "definite": false,
          "start": 5660,
          "end": 5709
        }
      ],
      "declare": false,
      "start": 5654,
      "end": 5710
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
            "name": "pb3",
            "optional": false,
            "typeAnnotation": null,
            "start": 5717,
            "end": 5720
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5723,
                "end": 5724
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5725,
                "end": 5729
              },
              "optional": false,
              "computed": false,
              "start": 5723,
              "end": 5729
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5736,
                      "end": 5743
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5744,
                      "end": 5751
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5736,
                    "end": 5751
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 5752,
                      "end": 5755
                    }
                  ],
                  "optional": false,
                  "start": 5736,
                  "end": 5756
                },
                "id": null,
                "generator": false,
                "start": 5730,
                "end": 5756
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5764,
                  "end": 5765
                },
                "id": null,
                "generator": false,
                "start": 5758,
                "end": 5765
              }
            ],
            "optional": false,
            "start": 5723,
            "end": 5766
          },
          "definite": false,
          "start": 5717,
          "end": 5766
        }
      ],
      "declare": false,
      "start": 5711,
      "end": 5767
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
            "name": "pb4",
            "optional": false,
            "typeAnnotation": null,
            "start": 5774,
            "end": 5777
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5780,
                "end": 5781
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5782,
                "end": 5786
              },
              "optional": false,
              "computed": false,
              "start": 5780,
              "end": 5786
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5793,
                      "end": 5800
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5801,
                      "end": 5808
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5793,
                    "end": 5808
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 5809,
                      "end": 5812
                    }
                  ],
                  "optional": false,
                  "start": 5793,
                  "end": 5813
                },
                "id": null,
                "generator": false,
                "start": 5787,
                "end": 5813
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5821,
                  "end": 5830
                },
                "id": null,
                "generator": false,
                "start": 5815,
                "end": 5830
              }
            ],
            "optional": false,
            "start": 5780,
            "end": 5831
          },
          "definite": false,
          "start": 5774,
          "end": 5831
        }
      ],
      "declare": false,
      "start": 5768,
      "end": 5832
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
            "name": "pb5",
            "optional": false,
            "typeAnnotation": null,
            "start": 5839,
            "end": 5842
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5845,
                "end": 5846
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5847,
                "end": 5851
              },
              "optional": false,
              "computed": false,
              "start": 5845,
              "end": 5851
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5858,
                      "end": 5865
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5866,
                      "end": 5873
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5858,
                    "end": 5873
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 5874,
                      "end": 5877
                    }
                  ],
                  "optional": false,
                  "start": 5858,
                  "end": 5878
                },
                "id": null,
                "generator": false,
                "start": 5852,
                "end": 5878
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 5886,
                  "end": 5890
                },
                "id": null,
                "generator": false,
                "start": 5880,
                "end": 5890
              }
            ],
            "optional": false,
            "start": 5845,
            "end": 5891
          },
          "definite": false,
          "start": 5839,
          "end": 5891
        }
      ],
      "declare": false,
      "start": 5833,
      "end": 5892
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
            "name": "pb6",
            "optional": false,
            "typeAnnotation": null,
            "start": 5899,
            "end": 5902
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5905,
                "end": 5906
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5907,
                "end": 5911
              },
              "optional": false,
              "computed": false,
              "start": 5905,
              "end": 5911
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5918,
                      "end": 5925
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5926,
                      "end": 5933
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5918,
                    "end": 5933
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 5934,
                      "end": 5937
                    }
                  ],
                  "optional": false,
                  "start": 5918,
                  "end": 5938
                },
                "id": null,
                "generator": false,
                "start": 5912,
                "end": 5938
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 5946,
                  "end": 5948
                },
                "id": null,
                "generator": false,
                "start": 5940,
                "end": 5948
              }
            ],
            "optional": false,
            "start": 5905,
            "end": 5949
          },
          "definite": false,
          "start": 5899,
          "end": 5949
        }
      ],
      "declare": false,
      "start": 5893,
      "end": 5950
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
            "name": "pb7",
            "optional": false,
            "typeAnnotation": null,
            "start": 5957,
            "end": 5960
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 5963,
                "end": 5964
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5965,
                "end": 5969
              },
              "optional": false,
              "computed": false,
              "start": 5963,
              "end": 5969
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5976,
                      "end": 5983
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5984,
                      "end": 5991
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5976,
                    "end": 5991
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 5992,
                      "end": 5995
                    }
                  ],
                  "optional": false,
                  "start": 5976,
                  "end": 5996
                },
                "id": null,
                "generator": false,
                "start": 5970,
                "end": 5996
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6011,
                        "end": 6012
                      },
                      "start": 6005,
                      "end": 6012
                    }
                  ],
                  "start": 6004,
                  "end": 6013
                },
                "id": null,
                "generator": false,
                "start": 5998,
                "end": 6013
              }
            ],
            "optional": false,
            "start": 5963,
            "end": 6014
          },
          "definite": false,
          "start": 5957,
          "end": 6014
        }
      ],
      "declare": false,
      "start": 5951,
      "end": 6015
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
            "name": "pb8",
            "optional": false,
            "typeAnnotation": null,
            "start": 6022,
            "end": 6025
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 6028,
                "end": 6029
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6030,
                "end": 6034
              },
              "optional": false,
              "computed": false,
              "start": 6028,
              "end": 6034
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6041,
                      "end": 6048
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6049,
                      "end": 6056
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6041,
                    "end": 6056
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 6057,
                      "end": 6060
                    }
                  ],
                  "optional": false,
                  "start": 6041,
                  "end": 6061
                },
                "id": null,
                "generator": false,
                "start": 6035,
                "end": 6061
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6069,
                      "end": 6076
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6077,
                      "end": 6084
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6069,
                    "end": 6084
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 6085,
                      "end": 6086
                    }
                  ],
                  "optional": false,
                  "start": 6069,
                  "end": 6087
                },
                "id": null,
                "generator": false,
                "start": 6063,
                "end": 6087
              }
            ],
            "optional": false,
            "start": 6028,
            "end": 6088
          },
          "definite": false,
          "start": 6022,
          "end": 6088
        }
      ],
      "declare": false,
      "start": 6016,
      "end": 6089
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
            "name": "pb9",
            "optional": false,
            "typeAnnotation": null,
            "start": 6096,
            "end": 6099
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 6102,
                "end": 6103
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6104,
                "end": 6108
              },
              "optional": false,
              "computed": false,
              "start": 6102,
              "end": 6108
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6115,
                      "end": 6122
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6123,
                      "end": 6130
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6115,
                    "end": 6130
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 6131,
                      "end": 6134
                    }
                  ],
                  "optional": false,
                  "start": 6115,
                  "end": 6135
                },
                "id": null,
                "generator": false,
                "start": 6109,
                "end": 6135
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6143,
                      "end": 6150
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6151,
                      "end": 6157
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6143,
                    "end": 6157
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 6158,
                      "end": 6159
                    }
                  ],
                  "optional": false,
                  "start": 6143,
                  "end": 6160
                },
                "id": null,
                "generator": false,
                "start": 6137,
                "end": 6160
              }
            ],
            "optional": false,
            "start": 6102,
            "end": 6161
          },
          "definite": false,
          "start": 6096,
          "end": 6161
        }
      ],
      "declare": false,
      "start": 6090,
      "end": 6162
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
            "name": "pc0",
            "optional": false,
            "typeAnnotation": null,
            "start": 6170,
            "end": 6173
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 6176,
                "end": 6177
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6178,
                "end": 6182
              },
              "optional": false,
              "computed": false,
              "start": 6176,
              "end": 6182
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6189,
                      "end": 6196
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6197,
                      "end": 6203
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6189,
                    "end": 6203
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 6204,
                      "end": 6207
                    }
                  ],
                  "optional": false,
                  "start": 6189,
                  "end": 6208
                },
                "id": null,
                "generator": false,
                "start": 6183,
                "end": 6208
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 6210,
                "end": 6219
              }
            ],
            "optional": false,
            "start": 6176,
            "end": 6220
          },
          "definite": false,
          "start": 6170,
          "end": 6220
        }
      ],
      "declare": false,
      "start": 6164,
      "end": 6221
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
            "name": "pc1",
            "optional": false,
            "typeAnnotation": null,
            "start": 6228,
            "end": 6231
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 6234,
                "end": 6235
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6236,
                "end": 6240
              },
              "optional": false,
              "computed": false,
              "start": 6234,
              "end": 6240
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6247,
                      "end": 6254
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6255,
                      "end": 6261
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6247,
                    "end": 6261
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 6262,
                      "end": 6265
                    }
                  ],
                  "optional": false,
                  "start": 6247,
                  "end": 6266
                },
                "id": null,
                "generator": false,
                "start": 6241,
                "end": 6266
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 6268,
                "end": 6272
              }
            ],
            "optional": false,
            "start": 6234,
            "end": 6273
          },
          "definite": false,
          "start": 6228,
          "end": 6273
        }
      ],
      "declare": false,
      "start": 6222,
      "end": 6274
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
            "name": "pc2",
            "optional": false,
            "typeAnnotation": null,
            "start": 6281,
            "end": 6284
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 6287,
                "end": 6288
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6289,
                "end": 6293
              },
              "optional": false,
              "computed": false,
              "start": 6287,
              "end": 6293
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6300,
                      "end": 6307
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6308,
                      "end": 6314
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6300,
                    "end": 6314
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 6315,
                      "end": 6318
                    }
                  ],
                  "optional": false,
                  "start": 6300,
                  "end": 6319
                },
                "id": null,
                "generator": false,
                "start": 6294,
                "end": 6319
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 6327,
                  "end": 6328
                },
                "id": null,
                "generator": false,
                "start": 6321,
                "end": 6328
              }
            ],
            "optional": false,
            "start": 6287,
            "end": 6329
          },
          "definite": false,
          "start": 6281,
          "end": 6329
        }
      ],
      "declare": false,
      "start": 6275,
      "end": 6330
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
            "name": "pc3",
            "optional": false,
            "typeAnnotation": null,
            "start": 6337,
            "end": 6340
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 6343,
                "end": 6344
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6345,
                "end": 6349
              },
              "optional": false,
              "computed": false,
              "start": 6343,
              "end": 6349
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6356,
                      "end": 6363
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6364,
                      "end": 6370
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6356,
                    "end": 6370
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 6371,
                      "end": 6374
                    }
                  ],
                  "optional": false,
                  "start": 6356,
                  "end": 6375
                },
                "id": null,
                "generator": false,
                "start": 6350,
                "end": 6375
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6383,
                  "end": 6384
                },
                "id": null,
                "generator": false,
                "start": 6377,
                "end": 6384
              }
            ],
            "optional": false,
            "start": 6343,
            "end": 6385
          },
          "definite": false,
          "start": 6337,
          "end": 6385
        }
      ],
      "declare": false,
      "start": 6331,
      "end": 6386
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
            "name": "pc4",
            "optional": false,
            "typeAnnotation": null,
            "start": 6393,
            "end": 6396
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 6399,
                "end": 6400
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6401,
                "end": 6405
              },
              "optional": false,
              "computed": false,
              "start": 6399,
              "end": 6405
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6412,
                      "end": 6419
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6420,
                      "end": 6426
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6412,
                    "end": 6426
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 6427,
                      "end": 6430
                    }
                  ],
                  "optional": false,
                  "start": 6412,
                  "end": 6431
                },
                "id": null,
                "generator": false,
                "start": 6406,
                "end": 6431
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6439,
                  "end": 6448
                },
                "id": null,
                "generator": false,
                "start": 6433,
                "end": 6448
              }
            ],
            "optional": false,
            "start": 6399,
            "end": 6449
          },
          "definite": false,
          "start": 6393,
          "end": 6449
        }
      ],
      "declare": false,
      "start": 6387,
      "end": 6450
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
            "name": "pc5",
            "optional": false,
            "typeAnnotation": null,
            "start": 6457,
            "end": 6460
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 6463,
                "end": 6464
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6465,
                "end": 6469
              },
              "optional": false,
              "computed": false,
              "start": 6463,
              "end": 6469
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6476,
                      "end": 6483
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6484,
                      "end": 6490
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6476,
                    "end": 6490
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 6491,
                      "end": 6494
                    }
                  ],
                  "optional": false,
                  "start": 6476,
                  "end": 6495
                },
                "id": null,
                "generator": false,
                "start": 6470,
                "end": 6495
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 6503,
                  "end": 6507
                },
                "id": null,
                "generator": false,
                "start": 6497,
                "end": 6507
              }
            ],
            "optional": false,
            "start": 6463,
            "end": 6508
          },
          "definite": false,
          "start": 6457,
          "end": 6508
        }
      ],
      "declare": false,
      "start": 6451,
      "end": 6509
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
            "name": "pc6",
            "optional": false,
            "typeAnnotation": null,
            "start": 6516,
            "end": 6519
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 6522,
                "end": 6523
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6524,
                "end": 6528
              },
              "optional": false,
              "computed": false,
              "start": 6522,
              "end": 6528
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6535,
                      "end": 6542
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6543,
                      "end": 6549
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6535,
                    "end": 6549
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 6550,
                      "end": 6553
                    }
                  ],
                  "optional": false,
                  "start": 6535,
                  "end": 6554
                },
                "id": null,
                "generator": false,
                "start": 6529,
                "end": 6554
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 6562,
                  "end": 6564
                },
                "id": null,
                "generator": false,
                "start": 6556,
                "end": 6564
              }
            ],
            "optional": false,
            "start": 6522,
            "end": 6565
          },
          "definite": false,
          "start": 6516,
          "end": 6565
        }
      ],
      "declare": false,
      "start": 6510,
      "end": 6566
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
            "name": "pc7",
            "optional": false,
            "typeAnnotation": null,
            "start": 6573,
            "end": 6576
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 6579,
                "end": 6580
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6581,
                "end": 6585
              },
              "optional": false,
              "computed": false,
              "start": 6579,
              "end": 6585
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6592,
                      "end": 6599
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6600,
                      "end": 6606
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6592,
                    "end": 6606
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 6607,
                      "end": 6610
                    }
                  ],
                  "optional": false,
                  "start": 6592,
                  "end": 6611
                },
                "id": null,
                "generator": false,
                "start": 6586,
                "end": 6611
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6626,
                        "end": 6627
                      },
                      "start": 6620,
                      "end": 6627
                    }
                  ],
                  "start": 6619,
                  "end": 6628
                },
                "id": null,
                "generator": false,
                "start": 6613,
                "end": 6628
              }
            ],
            "optional": false,
            "start": 6579,
            "end": 6629
          },
          "definite": false,
          "start": 6573,
          "end": 6629
        }
      ],
      "declare": false,
      "start": 6567,
      "end": 6630
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
            "name": "pc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 6637,
            "end": 6640
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 6643,
                "end": 6644
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6645,
                "end": 6649
              },
              "optional": false,
              "computed": false,
              "start": 6643,
              "end": 6649
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6656,
                      "end": 6663
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6664,
                      "end": 6670
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6656,
                    "end": 6670
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 6671,
                      "end": 6674
                    }
                  ],
                  "optional": false,
                  "start": 6656,
                  "end": 6675
                },
                "id": null,
                "generator": false,
                "start": 6650,
                "end": 6675
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6683,
                      "end": 6690
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6691,
                      "end": 6698
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6683,
                    "end": 6698
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 6699,
                      "end": 6700
                    }
                  ],
                  "optional": false,
                  "start": 6683,
                  "end": 6701
                },
                "id": null,
                "generator": false,
                "start": 6677,
                "end": 6701
              }
            ],
            "optional": false,
            "start": 6643,
            "end": 6702
          },
          "definite": false,
          "start": 6637,
          "end": 6702
        }
      ],
      "declare": false,
      "start": 6631,
      "end": 6703
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
            "name": "pc9",
            "optional": false,
            "typeAnnotation": null,
            "start": 6710,
            "end": 6713
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 6716,
                "end": 6717
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6718,
                "end": 6722
              },
              "optional": false,
              "computed": false,
              "start": 6716,
              "end": 6722
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6729,
                      "end": 6736
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6737,
                      "end": 6743
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6729,
                    "end": 6743
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 6744,
                      "end": 6747
                    }
                  ],
                  "optional": false,
                  "start": 6729,
                  "end": 6748
                },
                "id": null,
                "generator": false,
                "start": 6723,
                "end": 6748
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6756,
                      "end": 6763
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6764,
                      "end": 6770
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6756,
                    "end": 6770
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 6771,
                      "end": 6772
                    }
                  ],
                  "optional": false,
                  "start": 6756,
                  "end": 6773
                },
                "id": null,
                "generator": false,
                "start": 6750,
                "end": 6773
              }
            ],
            "optional": false,
            "start": 6716,
            "end": 6774
          },
          "definite": false,
          "start": 6710,
          "end": 6774
        }
      ],
      "declare": false,
      "start": 6704,
      "end": 6775
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 6775
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 15,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 23,
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
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 33,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 41,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 48,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 54,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 60,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 79,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 89,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 102,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 115,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 121,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 140,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 150,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 163,
    "end": 169
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 176,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 182,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 201,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 215,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 225,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 242,
    "end": 248
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 262,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 282,
    "end": 288
  },
  {
    "type": "String",
    "value": "'error'",
    "start": 289,
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
    "type": "Punctuator",
    "value": "}",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 307,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 313,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 326,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 332,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 346,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 356,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "p",
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
    "type": "Keyword",
    "value": "return",
    "start": 373,
    "end": 379
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 393,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 414,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 420,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 439,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 443,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 453,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 463,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 480,
    "end": 486
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 500,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 510,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 520,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 526,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 544,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 550,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 563,
    "end": 564
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 569,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 573,
    "end": 574
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 583,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 593,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 610,
    "end": 616
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 624,
    "end": 625
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 630,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 640,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 650,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 657,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 665,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 672,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 691,
    "end": 696
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 697,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 710,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 716,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 720,
    "end": 721
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 730,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 740,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 747,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 757,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 771,
    "end": 772
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 777,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 787,
    "end": 788
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 797,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 814,
    "end": 819
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 820,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 833,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 839,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 843,
    "end": 844
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 853,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 863,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 870,
    "end": 871
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 880,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 894,
    "end": 895
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 900,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 910,
    "end": 911
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 920,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 926,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 944,
    "end": 949
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 950,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 963,
    "end": 964
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 969,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 973,
    "end": 974
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 983,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 993,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1010,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 1030,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1050,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1057,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 1065,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 1072,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1125,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "p00",
    "start": 1131,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "catch",
    "start": 1139,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1144,
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
    "value": ";",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1148,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "p01",
    "start": 1154,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1162,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1171,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "p10",
    "start": 1177,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "catch",
    "start": 1185,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1191,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1203,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "p11",
    "start": 1209,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "catch",
    "start": 1217,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1223,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1230,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "p12",
    "start": 1236,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "catch",
    "start": 1244,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1253,
    "end": 1255
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1260,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "p13",
    "start": 1266,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "catch",
    "start": 1274,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1283,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1290,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "p14",
    "start": 1296,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "catch",
    "start": 1304,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1313,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1316,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1328,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "p15",
    "start": 1334,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "catch",
    "start": 1342,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1351,
    "end": 1353
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1354,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1361,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "p16",
    "start": 1367,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "catch",
    "start": 1375,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1384,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1392,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "p17",
    "start": 1398,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "catch",
    "start": 1406,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1415,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1419,
    "end": 1424
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1430,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "p18",
    "start": 1436,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "catch",
    "start": 1444,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1453,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1456,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 1464,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1472,
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
    "value": ";",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1476,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "p19",
    "start": 1482,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "catch",
    "start": 1490,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1499,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1502,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 1510,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1524,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "p20",
    "start": 1530,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1538,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1543,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1555,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "p21",
    "start": 1561,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1569,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1574,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1581,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "p22",
    "start": 1587,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1595,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1603,
    "end": 1605
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1610,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "p23",
    "start": 1616,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1624,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1632,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1639,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "p24",
    "start": 1645,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1653,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1661,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1664,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1676,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "p25",
    "start": 1682,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1690,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1698,
    "end": 1700
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1701,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1708,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "p26",
    "start": 1714,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1722,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1730,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1738,
    "end": 1743
  },
  {
    "type": "Identifier",
    "value": "p27",
    "start": 1744,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1752,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1760,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1764,
    "end": 1769
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1775,
    "end": 1780
  },
  {
    "type": "Identifier",
    "value": "p28",
    "start": 1781,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1789,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1797,
    "end": 1799
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1800,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 1808,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1821,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "p29",
    "start": 1827,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1835,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1843,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1846,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 1854,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1867,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "p30",
    "start": 1873,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1881,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1886,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1897,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1909,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "p31",
    "start": 1915,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1923,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1928,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1939,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1946,
    "end": 1951
  },
  {
    "type": "Identifier",
    "value": "p32",
    "start": 1952,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1960,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1965,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1979,
    "end": 1981
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1986,
    "end": 1991
  },
  {
    "type": "Identifier",
    "value": "p33",
    "start": 1992,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2000,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2005,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2019,
    "end": 2021
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2026,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "p34",
    "start": 2032,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2040,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2045,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2059,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2062,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2074,
    "end": 2079
  },
  {
    "type": "Identifier",
    "value": "p35",
    "start": 2080,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2088,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2093,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2107,
    "end": 2109
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2110,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2117,
    "end": 2122
  },
  {
    "type": "Identifier",
    "value": "p36",
    "start": 2123,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2131,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2136,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2150,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2158,
    "end": 2163
  },
  {
    "type": "Identifier",
    "value": "p37",
    "start": 2164,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2172,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2177,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2191,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 2195,
    "end": 2200
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2206,
    "end": 2211
  },
  {
    "type": "Identifier",
    "value": "p38",
    "start": 2212,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2220,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2225,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2239,
    "end": 2241
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2242,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 2250,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2263,
    "end": 2268
  },
  {
    "type": "Identifier",
    "value": "p39",
    "start": 2269,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2277,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2282,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2296,
    "end": 2298
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2299,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 2307,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2320,
    "end": 2325
  },
  {
    "type": "Identifier",
    "value": "p40",
    "start": 2326,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2334,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2339,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2345,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2357,
    "end": 2362
  },
  {
    "type": "Identifier",
    "value": "p41",
    "start": 2363,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2371,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2376,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2382,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2389,
    "end": 2394
  },
  {
    "type": "Identifier",
    "value": "p42",
    "start": 2395,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2403,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2408,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2417,
    "end": 2419
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2424,
    "end": 2429
  },
  {
    "type": "Identifier",
    "value": "p43",
    "start": 2430,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2438,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2443,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2452,
    "end": 2454
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2455,
    "end": 2456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2459,
    "end": 2464
  },
  {
    "type": "Identifier",
    "value": "p44",
    "start": 2465,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2473,
    "end": 2477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2478,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2487,
    "end": 2489
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2490,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2502,
    "end": 2507
  },
  {
    "type": "Identifier",
    "value": "p45",
    "start": 2508,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2516,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2521,
    "end": 2525
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2530,
    "end": 2532
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2533,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2540,
    "end": 2545
  },
  {
    "type": "Identifier",
    "value": "p46",
    "start": 2546,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2553,
    "end": 2554
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2554,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2559,
    "end": 2563
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2563,
    "end": 2564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2568,
    "end": 2570
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2574,
    "end": 2575
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2576,
    "end": 2581
  },
  {
    "type": "Identifier",
    "value": "p47",
    "start": 2582,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2590,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2594,
    "end": 2595
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2595,
    "end": 2599
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2604,
    "end": 2606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 2608,
    "end": 2613
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2614,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2619,
    "end": 2624
  },
  {
    "type": "Identifier",
    "value": "p48",
    "start": 2625,
    "end": 2628
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2629,
    "end": 2630
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2632,
    "end": 2633
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2633,
    "end": 2637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2638,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2642,
    "end": 2643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2647,
    "end": 2649
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2650,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 2658,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2667,
    "end": 2668
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2669,
    "end": 2670
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2671,
    "end": 2676
  },
  {
    "type": "Identifier",
    "value": "p49",
    "start": 2677,
    "end": 2680
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2685,
    "end": 2689
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2689,
    "end": 2690
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2690,
    "end": 2694
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2699,
    "end": 2701
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2702,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 2710,
    "end": 2716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2723,
    "end": 2728
  },
  {
    "type": "Identifier",
    "value": "p50",
    "start": 2729,
    "end": 2732
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2733,
    "end": 2734
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2737,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2745,
    "end": 2747
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 2748,
    "end": 2751
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2751,
    "end": 2752
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2753,
    "end": 2762
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2765,
    "end": 2770
  },
  {
    "type": "Identifier",
    "value": "p51",
    "start": 2771,
    "end": 2774
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2779,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2784,
    "end": 2785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2785,
    "end": 2786
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2787,
    "end": 2789
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 2790,
    "end": 2793
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2795,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2802,
    "end": 2807
  },
  {
    "type": "Identifier",
    "value": "p52",
    "start": 2808,
    "end": 2811
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2812,
    "end": 2813
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2815,
    "end": 2816
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2816,
    "end": 2820
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2824,
    "end": 2826
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 2827,
    "end": 2830
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2835,
    "end": 2837
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2838,
    "end": 2839
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2840,
    "end": 2841
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2842,
    "end": 2847
  },
  {
    "type": "Identifier",
    "value": "p53",
    "start": 2848,
    "end": 2851
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2852,
    "end": 2853
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2854,
    "end": 2855
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2856,
    "end": 2860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2861,
    "end": 2862
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2862,
    "end": 2863
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2864,
    "end": 2866
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 2867,
    "end": 2870
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2870,
    "end": 2871
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2875,
    "end": 2877
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2882,
    "end": 2887
  },
  {
    "type": "Identifier",
    "value": "p54",
    "start": 2888,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2894,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2896,
    "end": 2900
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2904,
    "end": 2906
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 2907,
    "end": 2910
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2910,
    "end": 2911
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2912,
    "end": 2913
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2913,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2915,
    "end": 2917
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2918,
    "end": 2927
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2927,
    "end": 2928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2928,
    "end": 2929
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2930,
    "end": 2935
  },
  {
    "type": "Identifier",
    "value": "p55",
    "start": 2936,
    "end": 2939
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2943,
    "end": 2944
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2944,
    "end": 2948
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2948,
    "end": 2949
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2949,
    "end": 2950
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2950,
    "end": 2951
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2952,
    "end": 2954
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 2955,
    "end": 2958
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2958,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2963,
    "end": 2965
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2966,
    "end": 2970
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2970,
    "end": 2971
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2973,
    "end": 2978
  },
  {
    "type": "Identifier",
    "value": "p56",
    "start": 2979,
    "end": 2982
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2983,
    "end": 2984
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2985,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2986,
    "end": 2987
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2987,
    "end": 2991
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2991,
    "end": 2992
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2995,
    "end": 2997
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 2998,
    "end": 3001
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3001,
    "end": 3002
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3004,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3006,
    "end": 3008
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3009,
    "end": 3010
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3010,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3012,
    "end": 3013
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3014,
    "end": 3019
  },
  {
    "type": "Identifier",
    "value": "p57",
    "start": 3020,
    "end": 3023
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3026,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3028,
    "end": 3032
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3032,
    "end": 3033
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3033,
    "end": 3034
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3034,
    "end": 3035
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3036,
    "end": 3038
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 3039,
    "end": 3042
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3042,
    "end": 3043
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3044,
    "end": 3045
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3045,
    "end": 3046
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3047,
    "end": 3049
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3050,
    "end": 3051
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 3051,
    "end": 3056
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3057,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3060,
    "end": 3061
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3062,
    "end": 3067
  },
  {
    "type": "Identifier",
    "value": "p58",
    "start": 3068,
    "end": 3071
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3072,
    "end": 3073
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3074,
    "end": 3075
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3075,
    "end": 3076
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3076,
    "end": 3080
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3080,
    "end": 3081
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3084,
    "end": 3086
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 3087,
    "end": 3090
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3090,
    "end": 3091
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3095,
    "end": 3097
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3098,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3105,
    "end": 3106
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 3106,
    "end": 3113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3113,
    "end": 3114
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3114,
    "end": 3115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3115,
    "end": 3116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3117,
    "end": 3118
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3119,
    "end": 3124
  },
  {
    "type": "Identifier",
    "value": "p59",
    "start": 3125,
    "end": 3128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3129,
    "end": 3130
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3131,
    "end": 3132
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3133,
    "end": 3137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3138,
    "end": 3139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3139,
    "end": 3140
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3141,
    "end": 3143
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 3144,
    "end": 3147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3147,
    "end": 3148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3149,
    "end": 3150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3150,
    "end": 3151
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3152,
    "end": 3154
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3155,
    "end": 3162
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3162,
    "end": 3163
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 3163,
    "end": 3169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3170,
    "end": 3171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3171,
    "end": 3172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3172,
    "end": 3173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3173,
    "end": 3174
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3176,
    "end": 3181
  },
  {
    "type": "Identifier",
    "value": "p60",
    "start": 3182,
    "end": 3185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3186,
    "end": 3187
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3188,
    "end": 3189
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3190,
    "end": 3194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3194,
    "end": 3195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3195,
    "end": 3196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3196,
    "end": 3197
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3198,
    "end": 3200
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3201,
    "end": 3202
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3204,
    "end": 3213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3214,
    "end": 3215
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3216,
    "end": 3221
  },
  {
    "type": "Identifier",
    "value": "p61",
    "start": 3222,
    "end": 3225
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3229,
    "end": 3230
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3230,
    "end": 3234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3234,
    "end": 3235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3235,
    "end": 3236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3236,
    "end": 3237
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3238,
    "end": 3240
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3241,
    "end": 3242
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3242,
    "end": 3243
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3244,
    "end": 3248
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3248,
    "end": 3249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3251,
    "end": 3256
  },
  {
    "type": "Identifier",
    "value": "p62",
    "start": 3257,
    "end": 3260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3261,
    "end": 3262
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3263,
    "end": 3264
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3264,
    "end": 3265
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3265,
    "end": 3269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3269,
    "end": 3270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3270,
    "end": 3271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3271,
    "end": 3272
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3273,
    "end": 3275
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3276,
    "end": 3277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3277,
    "end": 3278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3279,
    "end": 3280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3282,
    "end": 3284
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3285,
    "end": 3286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3286,
    "end": 3287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3287,
    "end": 3288
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3289,
    "end": 3294
  },
  {
    "type": "Identifier",
    "value": "p63",
    "start": 3295,
    "end": 3298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3299,
    "end": 3300
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3301,
    "end": 3302
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3302,
    "end": 3303
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3303,
    "end": 3307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3307,
    "end": 3308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3308,
    "end": 3309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3309,
    "end": 3310
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3311,
    "end": 3313
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3314,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3317,
    "end": 3318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3318,
    "end": 3319
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3320,
    "end": 3322
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3323,
    "end": 3324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3325,
    "end": 3326
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3327,
    "end": 3332
  },
  {
    "type": "Identifier",
    "value": "p64",
    "start": 3333,
    "end": 3336
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3337,
    "end": 3338
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3339,
    "end": 3340
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3340,
    "end": 3341
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3341,
    "end": 3345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3345,
    "end": 3346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3346,
    "end": 3347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3347,
    "end": 3348
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3349,
    "end": 3351
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3352,
    "end": 3353
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3353,
    "end": 3354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3355,
    "end": 3356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3356,
    "end": 3357
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3358,
    "end": 3360
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3361,
    "end": 3370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3371,
    "end": 3372
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3373,
    "end": 3378
  },
  {
    "type": "Identifier",
    "value": "p65",
    "start": 3379,
    "end": 3382
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3383,
    "end": 3384
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3386,
    "end": 3387
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3387,
    "end": 3391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3391,
    "end": 3392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3392,
    "end": 3393
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3393,
    "end": 3394
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3395,
    "end": 3397
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3398,
    "end": 3399
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3399,
    "end": 3400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3401,
    "end": 3402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3402,
    "end": 3403
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3404,
    "end": 3406
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3407,
    "end": 3411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3411,
    "end": 3412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3412,
    "end": 3413
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3414,
    "end": 3419
  },
  {
    "type": "Identifier",
    "value": "p66",
    "start": 3420,
    "end": 3423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3424,
    "end": 3425
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3426,
    "end": 3427
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3427,
    "end": 3428
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3428,
    "end": 3432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3432,
    "end": 3433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3433,
    "end": 3434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3434,
    "end": 3435
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3436,
    "end": 3438
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3439,
    "end": 3440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3440,
    "end": 3441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3443,
    "end": 3444
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3445,
    "end": 3447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3448,
    "end": 3449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3449,
    "end": 3450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3451,
    "end": 3452
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3453,
    "end": 3458
  },
  {
    "type": "Identifier",
    "value": "p67",
    "start": 3459,
    "end": 3462
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3463,
    "end": 3464
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3465,
    "end": 3466
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3466,
    "end": 3467
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3467,
    "end": 3471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3471,
    "end": 3472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3472,
    "end": 3473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3473,
    "end": 3474
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3475,
    "end": 3477
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3478,
    "end": 3479
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3479,
    "end": 3480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3481,
    "end": 3482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3482,
    "end": 3483
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3484,
    "end": 3486
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3487,
    "end": 3488
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 3488,
    "end": 3493
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3494,
    "end": 3495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3495,
    "end": 3496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3497,
    "end": 3498
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3499,
    "end": 3504
  },
  {
    "type": "Identifier",
    "value": "p68",
    "start": 3505,
    "end": 3508
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3509,
    "end": 3510
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3511,
    "end": 3512
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3512,
    "end": 3513
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3513,
    "end": 3517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3517,
    "end": 3518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3518,
    "end": 3519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3519,
    "end": 3520
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3521,
    "end": 3523
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3524,
    "end": 3525
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3525,
    "end": 3526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3527,
    "end": 3528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3528,
    "end": 3529
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3530,
    "end": 3532
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3533,
    "end": 3540
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3540,
    "end": 3541
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 3541,
    "end": 3548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3548,
    "end": 3549
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3549,
    "end": 3550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3550,
    "end": 3551
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3551,
    "end": 3552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3552,
    "end": 3553
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3554,
    "end": 3559
  },
  {
    "type": "Identifier",
    "value": "p69",
    "start": 3560,
    "end": 3563
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3564,
    "end": 3565
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3566,
    "end": 3567
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3568,
    "end": 3572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3572,
    "end": 3573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3573,
    "end": 3574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3574,
    "end": 3575
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3576,
    "end": 3578
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3579,
    "end": 3580
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3580,
    "end": 3581
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3582,
    "end": 3583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3583,
    "end": 3584
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3585,
    "end": 3587
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3588,
    "end": 3595
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3595,
    "end": 3596
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 3596,
    "end": 3602
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3602,
    "end": 3603
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3603,
    "end": 3604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3604,
    "end": 3605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3605,
    "end": 3606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3606,
    "end": 3607
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3609,
    "end": 3614
  },
  {
    "type": "Identifier",
    "value": "p70",
    "start": 3615,
    "end": 3618
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3619,
    "end": 3620
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3621,
    "end": 3622
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3622,
    "end": 3623
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3623,
    "end": 3627
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3627,
    "end": 3628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3628,
    "end": 3629
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3629,
    "end": 3630
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3631,
    "end": 3633
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3634,
    "end": 3643
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3643,
    "end": 3644
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3645,
    "end": 3654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3654,
    "end": 3655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3655,
    "end": 3656
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3657,
    "end": 3662
  },
  {
    "type": "Identifier",
    "value": "p71",
    "start": 3663,
    "end": 3666
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3667,
    "end": 3668
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3669,
    "end": 3670
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3670,
    "end": 3671
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3671,
    "end": 3675
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3675,
    "end": 3676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3676,
    "end": 3677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3677,
    "end": 3678
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3679,
    "end": 3681
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3682,
    "end": 3691
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3691,
    "end": 3692
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3693,
    "end": 3697
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3697,
    "end": 3698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3698,
    "end": 3699
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3700,
    "end": 3705
  },
  {
    "type": "Identifier",
    "value": "p72",
    "start": 3706,
    "end": 3709
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3710,
    "end": 3711
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3712,
    "end": 3713
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3713,
    "end": 3714
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3714,
    "end": 3718
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3718,
    "end": 3719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3719,
    "end": 3720
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3720,
    "end": 3721
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3722,
    "end": 3724
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3725,
    "end": 3734
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3734,
    "end": 3735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3736,
    "end": 3737
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3737,
    "end": 3738
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3739,
    "end": 3741
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3742,
    "end": 3743
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3743,
    "end": 3744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3744,
    "end": 3745
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3746,
    "end": 3751
  },
  {
    "type": "Identifier",
    "value": "p73",
    "start": 3752,
    "end": 3755
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3756,
    "end": 3757
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3758,
    "end": 3759
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3759,
    "end": 3760
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3760,
    "end": 3764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3764,
    "end": 3765
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3765,
    "end": 3766
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3766,
    "end": 3767
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3768,
    "end": 3770
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3771,
    "end": 3780
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3780,
    "end": 3781
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3782,
    "end": 3783
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3783,
    "end": 3784
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3785,
    "end": 3787
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3788,
    "end": 3789
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3789,
    "end": 3790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3790,
    "end": 3791
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3792,
    "end": 3797
  },
  {
    "type": "Identifier",
    "value": "p74",
    "start": 3798,
    "end": 3801
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3802,
    "end": 3803
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3804,
    "end": 3805
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3805,
    "end": 3806
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3806,
    "end": 3810
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3810,
    "end": 3811
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3811,
    "end": 3812
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3812,
    "end": 3813
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3814,
    "end": 3816
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3817,
    "end": 3826
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3826,
    "end": 3827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3828,
    "end": 3829
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3829,
    "end": 3830
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3831,
    "end": 3833
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3834,
    "end": 3843
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3843,
    "end": 3844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3844,
    "end": 3845
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3846,
    "end": 3851
  },
  {
    "type": "Identifier",
    "value": "p75",
    "start": 3852,
    "end": 3855
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3856,
    "end": 3857
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3858,
    "end": 3859
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3859,
    "end": 3860
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3860,
    "end": 3864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3864,
    "end": 3865
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3865,
    "end": 3866
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3866,
    "end": 3867
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3868,
    "end": 3870
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3871,
    "end": 3880
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3880,
    "end": 3881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3882,
    "end": 3883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3883,
    "end": 3884
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3885,
    "end": 3887
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3888,
    "end": 3892
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3892,
    "end": 3893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3893,
    "end": 3894
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3895,
    "end": 3900
  },
  {
    "type": "Identifier",
    "value": "p76",
    "start": 3901,
    "end": 3904
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3905,
    "end": 3906
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3907,
    "end": 3908
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3908,
    "end": 3909
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3909,
    "end": 3913
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3913,
    "end": 3914
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3914,
    "end": 3915
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3915,
    "end": 3916
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3917,
    "end": 3919
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3920,
    "end": 3929
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3929,
    "end": 3930
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3931,
    "end": 3932
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3932,
    "end": 3933
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3934,
    "end": 3936
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3937,
    "end": 3938
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3938,
    "end": 3939
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3939,
    "end": 3940
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3940,
    "end": 3941
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3942,
    "end": 3947
  },
  {
    "type": "Identifier",
    "value": "p77",
    "start": 3948,
    "end": 3951
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3952,
    "end": 3953
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3954,
    "end": 3955
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3955,
    "end": 3956
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3956,
    "end": 3960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3960,
    "end": 3961
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3961,
    "end": 3962
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3962,
    "end": 3963
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3964,
    "end": 3966
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3967,
    "end": 3976
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3976,
    "end": 3977
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3978,
    "end": 3979
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3979,
    "end": 3980
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3981,
    "end": 3983
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3984,
    "end": 3985
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 3985,
    "end": 3990
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3991,
    "end": 3992
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3992,
    "end": 3993
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3993,
    "end": 3994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3994,
    "end": 3995
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3996,
    "end": 4001
  },
  {
    "type": "Identifier",
    "value": "p78",
    "start": 4002,
    "end": 4005
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4006,
    "end": 4007
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4008,
    "end": 4009
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4009,
    "end": 4010
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4010,
    "end": 4014
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4014,
    "end": 4015
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4015,
    "end": 4016
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4016,
    "end": 4017
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4018,
    "end": 4020
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4021,
    "end": 4030
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4030,
    "end": 4031
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4032,
    "end": 4033
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4033,
    "end": 4034
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4035,
    "end": 4037
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4038,
    "end": 4045
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4045,
    "end": 4046
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 4046,
    "end": 4053
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4053,
    "end": 4054
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4054,
    "end": 4055
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4055,
    "end": 4056
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4056,
    "end": 4057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4057,
    "end": 4058
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4059,
    "end": 4064
  },
  {
    "type": "Identifier",
    "value": "p79",
    "start": 4065,
    "end": 4068
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4069,
    "end": 4070
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4071,
    "end": 4072
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4072,
    "end": 4073
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4073,
    "end": 4077
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4077,
    "end": 4078
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4078,
    "end": 4079
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4079,
    "end": 4080
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4081,
    "end": 4083
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4084,
    "end": 4093
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4093,
    "end": 4094
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4095,
    "end": 4096
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4096,
    "end": 4097
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4098,
    "end": 4100
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4101,
    "end": 4108
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4108,
    "end": 4109
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 4109,
    "end": 4115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4115,
    "end": 4116
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4116,
    "end": 4117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4117,
    "end": 4118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4118,
    "end": 4119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4119,
    "end": 4120
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4122,
    "end": 4127
  },
  {
    "type": "Identifier",
    "value": "p80",
    "start": 4128,
    "end": 4131
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4132,
    "end": 4133
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4134,
    "end": 4135
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4135,
    "end": 4136
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4136,
    "end": 4140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4140,
    "end": 4141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4141,
    "end": 4142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4142,
    "end": 4143
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4144,
    "end": 4146
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4147,
    "end": 4151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4151,
    "end": 4152
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4153,
    "end": 4162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4162,
    "end": 4163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4163,
    "end": 4164
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4165,
    "end": 4170
  },
  {
    "type": "Identifier",
    "value": "p81",
    "start": 4171,
    "end": 4174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4175,
    "end": 4176
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4177,
    "end": 4178
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4178,
    "end": 4179
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4179,
    "end": 4183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4183,
    "end": 4184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4184,
    "end": 4185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4185,
    "end": 4186
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4187,
    "end": 4189
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4190,
    "end": 4194
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4194,
    "end": 4195
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4196,
    "end": 4200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4200,
    "end": 4201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4201,
    "end": 4202
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4203,
    "end": 4208
  },
  {
    "type": "Identifier",
    "value": "p82",
    "start": 4209,
    "end": 4212
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4213,
    "end": 4214
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4215,
    "end": 4216
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4216,
    "end": 4217
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4217,
    "end": 4221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4221,
    "end": 4222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4222,
    "end": 4223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4223,
    "end": 4224
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4225,
    "end": 4227
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4228,
    "end": 4232
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4232,
    "end": 4233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4234,
    "end": 4235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4235,
    "end": 4236
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4237,
    "end": 4239
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4240,
    "end": 4241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4241,
    "end": 4242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4242,
    "end": 4243
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4244,
    "end": 4249
  },
  {
    "type": "Identifier",
    "value": "p83",
    "start": 4250,
    "end": 4253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4254,
    "end": 4255
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4256,
    "end": 4257
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4257,
    "end": 4258
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4258,
    "end": 4262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4262,
    "end": 4263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4263,
    "end": 4264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4264,
    "end": 4265
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4266,
    "end": 4268
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4269,
    "end": 4273
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4273,
    "end": 4274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4275,
    "end": 4276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4276,
    "end": 4277
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4278,
    "end": 4280
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4281,
    "end": 4282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4282,
    "end": 4283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4283,
    "end": 4284
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4285,
    "end": 4290
  },
  {
    "type": "Identifier",
    "value": "p84",
    "start": 4291,
    "end": 4294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4295,
    "end": 4296
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4297,
    "end": 4298
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4298,
    "end": 4299
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4299,
    "end": 4303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4303,
    "end": 4304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4304,
    "end": 4305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4305,
    "end": 4306
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4307,
    "end": 4309
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4310,
    "end": 4314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4314,
    "end": 4315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4316,
    "end": 4317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4317,
    "end": 4318
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4319,
    "end": 4321
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4322,
    "end": 4331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4331,
    "end": 4332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4332,
    "end": 4333
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4334,
    "end": 4339
  },
  {
    "type": "Identifier",
    "value": "p85",
    "start": 4340,
    "end": 4343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4344,
    "end": 4345
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4346,
    "end": 4347
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4347,
    "end": 4348
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4348,
    "end": 4352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4352,
    "end": 4353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4353,
    "end": 4354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4354,
    "end": 4355
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4356,
    "end": 4358
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4359,
    "end": 4363
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4363,
    "end": 4364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4365,
    "end": 4366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4366,
    "end": 4367
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4368,
    "end": 4370
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4371,
    "end": 4375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4375,
    "end": 4376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4376,
    "end": 4377
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4378,
    "end": 4383
  },
  {
    "type": "Identifier",
    "value": "p86",
    "start": 4384,
    "end": 4387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4388,
    "end": 4389
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4390,
    "end": 4391
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4391,
    "end": 4392
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4392,
    "end": 4396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4396,
    "end": 4397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4397,
    "end": 4398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4398,
    "end": 4399
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4400,
    "end": 4402
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4403,
    "end": 4407
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4407,
    "end": 4408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4409,
    "end": 4410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4410,
    "end": 4411
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4412,
    "end": 4414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4415,
    "end": 4416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4416,
    "end": 4417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4417,
    "end": 4418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4418,
    "end": 4419
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4420,
    "end": 4425
  },
  {
    "type": "Identifier",
    "value": "p87",
    "start": 4426,
    "end": 4429
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4430,
    "end": 4431
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4432,
    "end": 4433
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4433,
    "end": 4434
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4434,
    "end": 4438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4438,
    "end": 4439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4439,
    "end": 4440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4440,
    "end": 4441
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4442,
    "end": 4444
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4445,
    "end": 4449
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4449,
    "end": 4450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4451,
    "end": 4452
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4452,
    "end": 4453
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4454,
    "end": 4456
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4457,
    "end": 4458
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 4458,
    "end": 4463
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4464,
    "end": 4465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4465,
    "end": 4466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4466,
    "end": 4467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4467,
    "end": 4468
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4469,
    "end": 4474
  },
  {
    "type": "Identifier",
    "value": "p88",
    "start": 4475,
    "end": 4478
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4479,
    "end": 4480
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4481,
    "end": 4482
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4482,
    "end": 4483
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4483,
    "end": 4487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4487,
    "end": 4488
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4488,
    "end": 4489
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4489,
    "end": 4490
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4491,
    "end": 4493
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4494,
    "end": 4498
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4498,
    "end": 4499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4500,
    "end": 4501
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4501,
    "end": 4502
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4503,
    "end": 4505
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4506,
    "end": 4513
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4513,
    "end": 4514
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 4514,
    "end": 4521
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4521,
    "end": 4522
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4522,
    "end": 4523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4523,
    "end": 4524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4524,
    "end": 4525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4525,
    "end": 4526
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4527,
    "end": 4532
  },
  {
    "type": "Identifier",
    "value": "p89",
    "start": 4533,
    "end": 4536
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4537,
    "end": 4538
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4539,
    "end": 4540
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4540,
    "end": 4541
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4541,
    "end": 4545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4545,
    "end": 4546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4546,
    "end": 4547
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4547,
    "end": 4548
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4549,
    "end": 4551
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4552,
    "end": 4556
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4556,
    "end": 4557
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4558,
    "end": 4559
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4559,
    "end": 4560
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4561,
    "end": 4563
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4564,
    "end": 4571
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4571,
    "end": 4572
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 4572,
    "end": 4578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4578,
    "end": 4579
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4579,
    "end": 4580
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4580,
    "end": 4581
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4581,
    "end": 4582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4582,
    "end": 4583
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4585,
    "end": 4590
  },
  {
    "type": "Identifier",
    "value": "p90",
    "start": 4591,
    "end": 4594
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4595,
    "end": 4596
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4597,
    "end": 4598
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4598,
    "end": 4599
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4599,
    "end": 4603
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4603,
    "end": 4604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4604,
    "end": 4605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4605,
    "end": 4606
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4607,
    "end": 4609
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4610,
    "end": 4611
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4611,
    "end": 4612
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4612,
    "end": 4613
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4614,
    "end": 4623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4623,
    "end": 4624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4624,
    "end": 4625
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4626,
    "end": 4631
  },
  {
    "type": "Identifier",
    "value": "p91",
    "start": 4632,
    "end": 4635
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4636,
    "end": 4637
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4638,
    "end": 4639
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4639,
    "end": 4640
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4640,
    "end": 4644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4644,
    "end": 4645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4645,
    "end": 4646
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4646,
    "end": 4647
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4648,
    "end": 4650
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4651,
    "end": 4652
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4652,
    "end": 4653
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4653,
    "end": 4654
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4655,
    "end": 4659
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4659,
    "end": 4660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4660,
    "end": 4661
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4662,
    "end": 4667
  },
  {
    "type": "Identifier",
    "value": "p92",
    "start": 4668,
    "end": 4671
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4672,
    "end": 4673
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4674,
    "end": 4675
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4675,
    "end": 4676
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4676,
    "end": 4680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4680,
    "end": 4681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4681,
    "end": 4682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4682,
    "end": 4683
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4684,
    "end": 4686
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4687,
    "end": 4688
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4688,
    "end": 4689
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4689,
    "end": 4690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4691,
    "end": 4692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4692,
    "end": 4693
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4694,
    "end": 4696
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4697,
    "end": 4698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4698,
    "end": 4699
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4699,
    "end": 4700
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4701,
    "end": 4706
  },
  {
    "type": "Identifier",
    "value": "p93",
    "start": 4707,
    "end": 4710
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4711,
    "end": 4712
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4713,
    "end": 4714
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4714,
    "end": 4715
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4715,
    "end": 4719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4719,
    "end": 4720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4720,
    "end": 4721
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4721,
    "end": 4722
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4723,
    "end": 4725
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4726,
    "end": 4727
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4727,
    "end": 4728
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4728,
    "end": 4729
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4730,
    "end": 4731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4731,
    "end": 4732
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4733,
    "end": 4735
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4736,
    "end": 4737
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4737,
    "end": 4738
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4738,
    "end": 4739
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4740,
    "end": 4745
  },
  {
    "type": "Identifier",
    "value": "p94",
    "start": 4746,
    "end": 4749
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4750,
    "end": 4751
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4752,
    "end": 4753
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4753,
    "end": 4754
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4754,
    "end": 4758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4758,
    "end": 4759
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4759,
    "end": 4760
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4760,
    "end": 4761
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4762,
    "end": 4764
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4765,
    "end": 4766
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4766,
    "end": 4767
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4767,
    "end": 4768
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4769,
    "end": 4770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4770,
    "end": 4771
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4772,
    "end": 4774
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4775,
    "end": 4784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4784,
    "end": 4785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4785,
    "end": 4786
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4787,
    "end": 4792
  },
  {
    "type": "Identifier",
    "value": "p95",
    "start": 4793,
    "end": 4796
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4797,
    "end": 4798
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4799,
    "end": 4800
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4800,
    "end": 4801
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4801,
    "end": 4805
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4805,
    "end": 4806
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4806,
    "end": 4807
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4807,
    "end": 4808
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4809,
    "end": 4811
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4812,
    "end": 4813
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4813,
    "end": 4814
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4814,
    "end": 4815
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4816,
    "end": 4817
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4817,
    "end": 4818
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4819,
    "end": 4821
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4822,
    "end": 4826
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4826,
    "end": 4827
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4827,
    "end": 4828
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4829,
    "end": 4834
  },
  {
    "type": "Identifier",
    "value": "p96",
    "start": 4835,
    "end": 4838
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4839,
    "end": 4840
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4841,
    "end": 4842
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4842,
    "end": 4843
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4843,
    "end": 4847
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4847,
    "end": 4848
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4848,
    "end": 4849
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4849,
    "end": 4850
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4851,
    "end": 4853
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4854,
    "end": 4855
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4855,
    "end": 4856
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4856,
    "end": 4857
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4858,
    "end": 4859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4859,
    "end": 4860
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4861,
    "end": 4863
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4864,
    "end": 4865
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4865,
    "end": 4866
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4866,
    "end": 4867
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4867,
    "end": 4868
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4869,
    "end": 4874
  },
  {
    "type": "Identifier",
    "value": "p97",
    "start": 4875,
    "end": 4878
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4879,
    "end": 4880
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4881,
    "end": 4882
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4882,
    "end": 4883
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4883,
    "end": 4887
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4887,
    "end": 4888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4888,
    "end": 4889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4889,
    "end": 4890
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4891,
    "end": 4893
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4894,
    "end": 4895
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4895,
    "end": 4896
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4896,
    "end": 4897
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4898,
    "end": 4899
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4899,
    "end": 4900
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4901,
    "end": 4903
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4904,
    "end": 4905
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 4905,
    "end": 4910
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4911,
    "end": 4912
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4912,
    "end": 4913
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4913,
    "end": 4914
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4914,
    "end": 4915
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4916,
    "end": 4921
  },
  {
    "type": "Identifier",
    "value": "p98",
    "start": 4922,
    "end": 4925
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4926,
    "end": 4927
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4928,
    "end": 4929
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4929,
    "end": 4930
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4930,
    "end": 4934
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4934,
    "end": 4935
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4935,
    "end": 4936
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4936,
    "end": 4937
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4938,
    "end": 4940
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4941,
    "end": 4942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4942,
    "end": 4943
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4943,
    "end": 4944
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4945,
    "end": 4946
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4946,
    "end": 4947
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4948,
    "end": 4950
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4951,
    "end": 4958
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4958,
    "end": 4959
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 4959,
    "end": 4966
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4966,
    "end": 4967
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4967,
    "end": 4968
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4968,
    "end": 4969
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4969,
    "end": 4970
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4970,
    "end": 4971
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4972,
    "end": 4977
  },
  {
    "type": "Identifier",
    "value": "p99",
    "start": 4978,
    "end": 4981
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4982,
    "end": 4983
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4984,
    "end": 4985
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4985,
    "end": 4986
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4986,
    "end": 4990
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4990,
    "end": 4991
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4991,
    "end": 4992
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4992,
    "end": 4993
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4994,
    "end": 4996
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4997,
    "end": 4998
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4998,
    "end": 4999
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4999,
    "end": 5000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5001,
    "end": 5002
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5002,
    "end": 5003
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5004,
    "end": 5006
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5007,
    "end": 5014
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5014,
    "end": 5015
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 5015,
    "end": 5021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5021,
    "end": 5022
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5022,
    "end": 5023
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5023,
    "end": 5024
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5024,
    "end": 5025
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5025,
    "end": 5026
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5028,
    "end": 5033
  },
  {
    "type": "Identifier",
    "value": "pa0",
    "start": 5034,
    "end": 5037
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5038,
    "end": 5039
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 5040,
    "end": 5041
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5041,
    "end": 5042
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5042,
    "end": 5046
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5046,
    "end": 5047
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5047,
    "end": 5048
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5048,
    "end": 5049
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5050,
    "end": 5052
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5053,
    "end": 5054
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 5054,
    "end": 5059
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5060,
    "end": 5061
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5061,
    "end": 5062
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5062,
    "end": 5063
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5064,
    "end": 5073
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5073,
    "end": 5074
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5074,
    "end": 5075
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5076,
    "end": 5081
  },
  {
    "type": "Identifier",
    "value": "pa1",
    "start": 5082,
    "end": 5085
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5086,
    "end": 5087
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 5088,
    "end": 5089
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5089,
    "end": 5090
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5090,
    "end": 5094
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5094,
    "end": 5095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5095,
    "end": 5096
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5096,
    "end": 5097
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5098,
    "end": 5100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5101,
    "end": 5102
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 5102,
    "end": 5107
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5108,
    "end": 5109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5109,
    "end": 5110
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5110,
    "end": 5111
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5112,
    "end": 5116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5116,
    "end": 5117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5117,
    "end": 5118
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5119,
    "end": 5124
  },
  {
    "type": "Identifier",
    "value": "pa2",
    "start": 5125,
    "end": 5128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5129,
    "end": 5130
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 5131,
    "end": 5132
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5132,
    "end": 5133
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5133,
    "end": 5137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5137,
    "end": 5138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5138,
    "end": 5139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5139,
    "end": 5140
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5141,
    "end": 5143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5144,
    "end": 5145
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 5145,
    "end": 5150
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5151,
    "end": 5152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5152,
    "end": 5153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5153,
    "end": 5154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5155,
    "end": 5156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5156,
    "end": 5157
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5158,
    "end": 5160
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5161,
    "end": 5162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5162,
    "end": 5163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5163,
    "end": 5164
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5165,
    "end": 5170
  },
  {
    "type": "Identifier",
    "value": "pa3",
    "start": 5171,
    "end": 5174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5175,
    "end": 5176
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 5177,
    "end": 5178
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5178,
    "end": 5179
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5179,
    "end": 5183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5183,
    "end": 5184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5184,
    "end": 5185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5185,
    "end": 5186
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5187,
    "end": 5189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5190,
    "end": 5191
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 5191,
    "end": 5196
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5197,
    "end": 5198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5198,
    "end": 5199
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5199,
    "end": 5200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5201,
    "end": 5202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5202,
    "end": 5203
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5204,
    "end": 5206
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5207,
    "end": 5208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5208,
    "end": 5209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5209,
    "end": 5210
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5211,
    "end": 5216
  },
  {
    "type": "Identifier",
    "value": "pa4",
    "start": 5217,
    "end": 5220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5221,
    "end": 5222
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 5223,
    "end": 5224
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5224,
    "end": 5225
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5225,
    "end": 5229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5229,
    "end": 5230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5230,
    "end": 5231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5231,
    "end": 5232
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5233,
    "end": 5235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5236,
    "end": 5237
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 5237,
    "end": 5242
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5243,
    "end": 5244
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5244,
    "end": 5245
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5245,
    "end": 5246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5247,
    "end": 5248
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5248,
    "end": 5249
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5250,
    "end": 5252
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5253,
    "end": 5262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5262,
    "end": 5263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5263,
    "end": 5264
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5265,
    "end": 5270
  },
  {
    "type": "Identifier",
    "value": "pa5",
    "start": 5271,
    "end": 5274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5275,
    "end": 5276
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 5277,
    "end": 5278
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5278,
    "end": 5279
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5279,
    "end": 5283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5283,
    "end": 5284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5284,
    "end": 5285
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5285,
    "end": 5286
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5287,
    "end": 5289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5290,
    "end": 5291
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 5291,
    "end": 5296
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5297,
    "end": 5298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5298,
    "end": 5299
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5299,
    "end": 5300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5301,
    "end": 5302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5302,
    "end": 5303
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5304,
    "end": 5306
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5307,
    "end": 5311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5311,
    "end": 5312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5312,
    "end": 5313
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5314,
    "end": 5319
  },
  {
    "type": "Identifier",
    "value": "pa6",
    "start": 5320,
    "end": 5323
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5324,
    "end": 5325
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 5326,
    "end": 5327
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5327,
    "end": 5328
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5328,
    "end": 5332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5332,
    "end": 5333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5333,
    "end": 5334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5334,
    "end": 5335
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5336,
    "end": 5338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5339,
    "end": 5340
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 5340,
    "end": 5345
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5346,
    "end": 5347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5347,
    "end": 5348
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5348,
    "end": 5349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5350,
    "end": 5351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5351,
    "end": 5352
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5353,
    "end": 5355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5356,
    "end": 5357
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5357,
    "end": 5358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5358,
    "end": 5359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5359,
    "end": 5360
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5361,
    "end": 5366
  },
  {
    "type": "Identifier",
    "value": "pa7",
    "start": 5367,
    "end": 5370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5371,
    "end": 5372
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 5373,
    "end": 5374
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5374,
    "end": 5375
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5375,
    "end": 5379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5379,
    "end": 5380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5380,
    "end": 5381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5381,
    "end": 5382
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5383,
    "end": 5385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5386,
    "end": 5387
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 5387,
    "end": 5392
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5393,
    "end": 5394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5394,
    "end": 5395
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5395,
    "end": 5396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5397,
    "end": 5398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5398,
    "end": 5399
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5400,
    "end": 5402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5403,
    "end": 5404
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 5404,
    "end": 5409
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5410,
    "end": 5411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5411,
    "end": 5412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5412,
    "end": 5413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5413,
    "end": 5414
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5415,
    "end": 5420
  },
  {
    "type": "Identifier",
    "value": "pa8",
    "start": 5421,
    "end": 5424
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5425,
    "end": 5426
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 5427,
    "end": 5428
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5428,
    "end": 5429
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5429,
    "end": 5433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5433,
    "end": 5434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5434,
    "end": 5435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5435,
    "end": 5436
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5437,
    "end": 5439
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5440,
    "end": 5441
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 5441,
    "end": 5446
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5447,
    "end": 5448
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5448,
    "end": 5449
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5449,
    "end": 5450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5451,
    "end": 5452
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5452,
    "end": 5453
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5454,
    "end": 5456
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5457,
    "end": 5464
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5464,
    "end": 5465
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 5465,
    "end": 5472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5472,
    "end": 5473
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5473,
    "end": 5474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5474,
    "end": 5475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5475,
    "end": 5476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5476,
    "end": 5477
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5478,
    "end": 5483
  },
  {
    "type": "Identifier",
    "value": "pa9",
    "start": 5484,
    "end": 5487
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5488,
    "end": 5489
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 5490,
    "end": 5491
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5491,
    "end": 5492
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5492,
    "end": 5496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5496,
    "end": 5497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5497,
    "end": 5498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5498,
    "end": 5499
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5500,
    "end": 5502
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5503,
    "end": 5504
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 5504,
    "end": 5509
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5510,
    "end": 5511
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5511,
    "end": 5512
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5512,
    "end": 5513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5514,
    "end": 5515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5515,
    "end": 5516
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5517,
    "end": 5519
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5520,
    "end": 5527
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5527,
    "end": 5528
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 5528,
    "end": 5534
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5534,
    "end": 5535
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5535,
    "end": 5536
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5536,
    "end": 5537
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5537,
    "end": 5538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5538,
    "end": 5539
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5541,
    "end": 5546
  },
  {
    "type": "Identifier",
    "value": "pb0",
    "start": 5547,
    "end": 5550
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5551,
    "end": 5552
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 5553,
    "end": 5554
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5554,
    "end": 5555
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5555,
    "end": 5559
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5559,
    "end": 5560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5560,
    "end": 5561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5561,
    "end": 5562
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5563,
    "end": 5565
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5566,
    "end": 5573
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5573,
    "end": 5574
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 5574,
    "end": 5581
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5581,
    "end": 5582
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 5582,
    "end": 5585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5585,
    "end": 5586
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5586,
    "end": 5587
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5588,
    "end": 5597
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5597,
    "end": 5598
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5598,
    "end": 5599
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5600,
    "end": 5605
  },
  {
    "type": "Identifier",
    "value": "pb1",
    "start": 5606,
    "end": 5609
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5610,
    "end": 5611
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 5612,
    "end": 5613
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5613,
    "end": 5614
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5614,
    "end": 5618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5618,
    "end": 5619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5619,
    "end": 5620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5620,
    "end": 5621
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5622,
    "end": 5624
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5625,
    "end": 5632
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5632,
    "end": 5633
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 5633,
    "end": 5640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5640,
    "end": 5641
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 5641,
    "end": 5644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5644,
    "end": 5645
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5645,
    "end": 5646
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5647,
    "end": 5651
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5651,
    "end": 5652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5652,
    "end": 5653
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5654,
    "end": 5659
  },
  {
    "type": "Identifier",
    "value": "pb2",
    "start": 5660,
    "end": 5663
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5664,
    "end": 5665
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 5666,
    "end": 5667
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5667,
    "end": 5668
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5668,
    "end": 5672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5672,
    "end": 5673
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5673,
    "end": 5674
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5674,
    "end": 5675
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5676,
    "end": 5678
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5679,
    "end": 5686
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5686,
    "end": 5687
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 5687,
    "end": 5694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5694,
    "end": 5695
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 5695,
    "end": 5698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5698,
    "end": 5699
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5699,
    "end": 5700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5701,
    "end": 5702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5702,
    "end": 5703
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5704,
    "end": 5706
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5707,
    "end": 5708
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5708,
    "end": 5709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5709,
    "end": 5710
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5711,
    "end": 5716
  },
  {
    "type": "Identifier",
    "value": "pb3",
    "start": 5717,
    "end": 5720
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5721,
    "end": 5722
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 5723,
    "end": 5724
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5724,
    "end": 5725
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5725,
    "end": 5729
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5729,
    "end": 5730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5730,
    "end": 5731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5731,
    "end": 5732
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5733,
    "end": 5735
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5736,
    "end": 5743
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5743,
    "end": 5744
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 5744,
    "end": 5751
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5751,
    "end": 5752
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 5752,
    "end": 5755
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5755,
    "end": 5756
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5756,
    "end": 5757
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5758,
    "end": 5759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5759,
    "end": 5760
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5761,
    "end": 5763
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5764,
    "end": 5765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5765,
    "end": 5766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5766,
    "end": 5767
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5768,
    "end": 5773
  },
  {
    "type": "Identifier",
    "value": "pb4",
    "start": 5774,
    "end": 5777
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5778,
    "end": 5779
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 5780,
    "end": 5781
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5781,
    "end": 5782
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5782,
    "end": 5786
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5786,
    "end": 5787
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5787,
    "end": 5788
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5788,
    "end": 5789
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5790,
    "end": 5792
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5793,
    "end": 5800
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5800,
    "end": 5801
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 5801,
    "end": 5808
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5808,
    "end": 5809
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 5809,
    "end": 5812
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5812,
    "end": 5813
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5813,
    "end": 5814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5815,
    "end": 5816
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5816,
    "end": 5817
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5818,
    "end": 5820
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5821,
    "end": 5830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5830,
    "end": 5831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5831,
    "end": 5832
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5833,
    "end": 5838
  },
  {
    "type": "Identifier",
    "value": "pb5",
    "start": 5839,
    "end": 5842
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5843,
    "end": 5844
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 5845,
    "end": 5846
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5846,
    "end": 5847
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5847,
    "end": 5851
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5851,
    "end": 5852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5852,
    "end": 5853
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5853,
    "end": 5854
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5855,
    "end": 5857
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5858,
    "end": 5865
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5865,
    "end": 5866
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 5866,
    "end": 5873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5873,
    "end": 5874
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 5874,
    "end": 5877
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5877,
    "end": 5878
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5878,
    "end": 5879
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5880,
    "end": 5881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5881,
    "end": 5882
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5883,
    "end": 5885
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5886,
    "end": 5890
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5890,
    "end": 5891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5891,
    "end": 5892
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5893,
    "end": 5898
  },
  {
    "type": "Identifier",
    "value": "pb6",
    "start": 5899,
    "end": 5902
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5903,
    "end": 5904
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 5905,
    "end": 5906
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5906,
    "end": 5907
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5907,
    "end": 5911
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5911,
    "end": 5912
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5912,
    "end": 5913
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5913,
    "end": 5914
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5915,
    "end": 5917
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5918,
    "end": 5925
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5925,
    "end": 5926
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 5926,
    "end": 5933
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5933,
    "end": 5934
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 5934,
    "end": 5937
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5937,
    "end": 5938
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5938,
    "end": 5939
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5940,
    "end": 5941
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5941,
    "end": 5942
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5943,
    "end": 5945
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5946,
    "end": 5947
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5947,
    "end": 5948
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5948,
    "end": 5949
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5949,
    "end": 5950
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5951,
    "end": 5956
  },
  {
    "type": "Identifier",
    "value": "pb7",
    "start": 5957,
    "end": 5960
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5961,
    "end": 5962
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 5963,
    "end": 5964
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5964,
    "end": 5965
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5965,
    "end": 5969
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5969,
    "end": 5970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5970,
    "end": 5971
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5971,
    "end": 5972
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5973,
    "end": 5975
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5976,
    "end": 5983
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5983,
    "end": 5984
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 5984,
    "end": 5991
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5991,
    "end": 5992
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 5992,
    "end": 5995
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5995,
    "end": 5996
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5996,
    "end": 5997
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5998,
    "end": 5999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5999,
    "end": 6000
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6001,
    "end": 6003
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6004,
    "end": 6005
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 6005,
    "end": 6010
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6011,
    "end": 6012
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6012,
    "end": 6013
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6013,
    "end": 6014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6014,
    "end": 6015
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6016,
    "end": 6021
  },
  {
    "type": "Identifier",
    "value": "pb8",
    "start": 6022,
    "end": 6025
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6026,
    "end": 6027
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 6028,
    "end": 6029
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6029,
    "end": 6030
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6030,
    "end": 6034
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6034,
    "end": 6035
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6035,
    "end": 6036
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6036,
    "end": 6037
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6038,
    "end": 6040
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6041,
    "end": 6048
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6048,
    "end": 6049
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 6049,
    "end": 6056
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6056,
    "end": 6057
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 6057,
    "end": 6060
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6060,
    "end": 6061
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6061,
    "end": 6062
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6063,
    "end": 6064
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6064,
    "end": 6065
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6066,
    "end": 6068
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6069,
    "end": 6076
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6076,
    "end": 6077
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 6077,
    "end": 6084
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6084,
    "end": 6085
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6085,
    "end": 6086
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6086,
    "end": 6087
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6087,
    "end": 6088
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6088,
    "end": 6089
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6090,
    "end": 6095
  },
  {
    "type": "Identifier",
    "value": "pb9",
    "start": 6096,
    "end": 6099
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6100,
    "end": 6101
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 6102,
    "end": 6103
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6103,
    "end": 6104
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6104,
    "end": 6108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6108,
    "end": 6109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6109,
    "end": 6110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6110,
    "end": 6111
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6112,
    "end": 6114
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6115,
    "end": 6122
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6122,
    "end": 6123
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 6123,
    "end": 6130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6130,
    "end": 6131
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 6131,
    "end": 6134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6134,
    "end": 6135
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6135,
    "end": 6136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6137,
    "end": 6138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6138,
    "end": 6139
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6140,
    "end": 6142
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6143,
    "end": 6150
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6150,
    "end": 6151
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 6151,
    "end": 6157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6157,
    "end": 6158
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6158,
    "end": 6159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6159,
    "end": 6160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6160,
    "end": 6161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6161,
    "end": 6162
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6164,
    "end": 6169
  },
  {
    "type": "Identifier",
    "value": "pc0",
    "start": 6170,
    "end": 6173
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6174,
    "end": 6175
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 6176,
    "end": 6177
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6177,
    "end": 6178
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6178,
    "end": 6182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6182,
    "end": 6183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6183,
    "end": 6184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6184,
    "end": 6185
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6186,
    "end": 6188
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6189,
    "end": 6196
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6196,
    "end": 6197
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 6197,
    "end": 6203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6203,
    "end": 6204
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 6204,
    "end": 6207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6207,
    "end": 6208
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6208,
    "end": 6209
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 6210,
    "end": 6219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6219,
    "end": 6220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6220,
    "end": 6221
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6222,
    "end": 6227
  },
  {
    "type": "Identifier",
    "value": "pc1",
    "start": 6228,
    "end": 6231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6232,
    "end": 6233
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 6234,
    "end": 6235
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6235,
    "end": 6236
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6236,
    "end": 6240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6240,
    "end": 6241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6241,
    "end": 6242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6242,
    "end": 6243
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6244,
    "end": 6246
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6247,
    "end": 6254
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6254,
    "end": 6255
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 6255,
    "end": 6261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6261,
    "end": 6262
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 6262,
    "end": 6265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6265,
    "end": 6266
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6266,
    "end": 6267
  },
  {
    "type": "Null",
    "value": "null",
    "start": 6268,
    "end": 6272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6272,
    "end": 6273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6273,
    "end": 6274
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6275,
    "end": 6280
  },
  {
    "type": "Identifier",
    "value": "pc2",
    "start": 6281,
    "end": 6284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6285,
    "end": 6286
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 6287,
    "end": 6288
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6288,
    "end": 6289
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6289,
    "end": 6293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6293,
    "end": 6294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6294,
    "end": 6295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6295,
    "end": 6296
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6297,
    "end": 6299
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6300,
    "end": 6307
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6307,
    "end": 6308
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 6308,
    "end": 6314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6314,
    "end": 6315
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 6315,
    "end": 6318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6318,
    "end": 6319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6319,
    "end": 6320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6321,
    "end": 6322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6322,
    "end": 6323
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6324,
    "end": 6326
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6327,
    "end": 6328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6328,
    "end": 6329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6329,
    "end": 6330
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6331,
    "end": 6336
  },
  {
    "type": "Identifier",
    "value": "pc3",
    "start": 6337,
    "end": 6340
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6341,
    "end": 6342
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 6343,
    "end": 6344
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6344,
    "end": 6345
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6345,
    "end": 6349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6349,
    "end": 6350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6350,
    "end": 6351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6351,
    "end": 6352
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6353,
    "end": 6355
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6356,
    "end": 6363
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6363,
    "end": 6364
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 6364,
    "end": 6370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6370,
    "end": 6371
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 6371,
    "end": 6374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6374,
    "end": 6375
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6375,
    "end": 6376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6377,
    "end": 6378
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6378,
    "end": 6379
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6380,
    "end": 6382
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6383,
    "end": 6384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6384,
    "end": 6385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6385,
    "end": 6386
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6387,
    "end": 6392
  },
  {
    "type": "Identifier",
    "value": "pc4",
    "start": 6393,
    "end": 6396
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6397,
    "end": 6398
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 6399,
    "end": 6400
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6400,
    "end": 6401
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6401,
    "end": 6405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6405,
    "end": 6406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6406,
    "end": 6407
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6407,
    "end": 6408
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6409,
    "end": 6411
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6412,
    "end": 6419
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6419,
    "end": 6420
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 6420,
    "end": 6426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6426,
    "end": 6427
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 6427,
    "end": 6430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6430,
    "end": 6431
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6431,
    "end": 6432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6433,
    "end": 6434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6434,
    "end": 6435
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6436,
    "end": 6438
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 6439,
    "end": 6448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6448,
    "end": 6449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6449,
    "end": 6450
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6451,
    "end": 6456
  },
  {
    "type": "Identifier",
    "value": "pc5",
    "start": 6457,
    "end": 6460
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6461,
    "end": 6462
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 6463,
    "end": 6464
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6464,
    "end": 6465
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6465,
    "end": 6469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6469,
    "end": 6470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6470,
    "end": 6471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6471,
    "end": 6472
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6473,
    "end": 6475
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6476,
    "end": 6483
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6483,
    "end": 6484
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 6484,
    "end": 6490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6490,
    "end": 6491
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 6491,
    "end": 6494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6494,
    "end": 6495
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6495,
    "end": 6496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6497,
    "end": 6498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6498,
    "end": 6499
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6500,
    "end": 6502
  },
  {
    "type": "Null",
    "value": "null",
    "start": 6503,
    "end": 6507
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6507,
    "end": 6508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6508,
    "end": 6509
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6510,
    "end": 6515
  },
  {
    "type": "Identifier",
    "value": "pc6",
    "start": 6516,
    "end": 6519
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6520,
    "end": 6521
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 6522,
    "end": 6523
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6523,
    "end": 6524
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6524,
    "end": 6528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6528,
    "end": 6529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6529,
    "end": 6530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6530,
    "end": 6531
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6532,
    "end": 6534
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6535,
    "end": 6542
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6542,
    "end": 6543
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 6543,
    "end": 6549
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6549,
    "end": 6550
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 6550,
    "end": 6553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6553,
    "end": 6554
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6554,
    "end": 6555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6556,
    "end": 6557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6557,
    "end": 6558
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6559,
    "end": 6561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6562,
    "end": 6563
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6563,
    "end": 6564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6564,
    "end": 6565
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6565,
    "end": 6566
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6567,
    "end": 6572
  },
  {
    "type": "Identifier",
    "value": "pc7",
    "start": 6573,
    "end": 6576
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6577,
    "end": 6578
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 6579,
    "end": 6580
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6580,
    "end": 6581
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6581,
    "end": 6585
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6585,
    "end": 6586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6586,
    "end": 6587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6587,
    "end": 6588
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6589,
    "end": 6591
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6592,
    "end": 6599
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6599,
    "end": 6600
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 6600,
    "end": 6606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6606,
    "end": 6607
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 6607,
    "end": 6610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6610,
    "end": 6611
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6611,
    "end": 6612
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6613,
    "end": 6614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6614,
    "end": 6615
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6616,
    "end": 6618
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6619,
    "end": 6620
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 6620,
    "end": 6625
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6626,
    "end": 6627
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6627,
    "end": 6628
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6628,
    "end": 6629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6629,
    "end": 6630
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6631,
    "end": 6636
  },
  {
    "type": "Identifier",
    "value": "pc8",
    "start": 6637,
    "end": 6640
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6641,
    "end": 6642
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 6643,
    "end": 6644
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6644,
    "end": 6645
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6645,
    "end": 6649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6649,
    "end": 6650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6650,
    "end": 6651
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6651,
    "end": 6652
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6653,
    "end": 6655
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6656,
    "end": 6663
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6663,
    "end": 6664
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 6664,
    "end": 6670
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6670,
    "end": 6671
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 6671,
    "end": 6674
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6674,
    "end": 6675
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6675,
    "end": 6676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6677,
    "end": 6678
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6678,
    "end": 6679
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6680,
    "end": 6682
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6683,
    "end": 6690
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6690,
    "end": 6691
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 6691,
    "end": 6698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6698,
    "end": 6699
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6699,
    "end": 6700
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6700,
    "end": 6701
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6701,
    "end": 6702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6702,
    "end": 6703
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6704,
    "end": 6709
  },
  {
    "type": "Identifier",
    "value": "pc9",
    "start": 6710,
    "end": 6713
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6714,
    "end": 6715
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 6716,
    "end": 6717
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6717,
    "end": 6718
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6718,
    "end": 6722
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6722,
    "end": 6723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6723,
    "end": 6724
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6724,
    "end": 6725
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6726,
    "end": 6728
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6729,
    "end": 6736
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6736,
    "end": 6737
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 6737,
    "end": 6743
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6743,
    "end": 6744
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 6744,
    "end": 6747
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6747,
    "end": 6748
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6748,
    "end": 6749
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6750,
    "end": 6751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6751,
    "end": 6752
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6753,
    "end": 6755
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6756,
    "end": 6763
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6763,
    "end": 6764
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 6764,
    "end": 6770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6770,
    "end": 6771
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6771,
    "end": 6772
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6772,
    "end": 6773
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6773,
    "end": 6774
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6774,
    "end": 6775
  }
]
```

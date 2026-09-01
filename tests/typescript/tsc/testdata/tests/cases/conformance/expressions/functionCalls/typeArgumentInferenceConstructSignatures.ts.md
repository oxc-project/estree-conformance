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
        "name": "NoParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 53
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 66
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 65,
                  "end": 66
                }
              ],
              "start": 64,
              "end": 67
            },
            "params": [],
            "returnType": null,
            "start": 60,
            "end": 70
          }
        ],
        "start": 54,
        "end": 72
      },
      "declare": false,
      "start": 35,
      "end": 72
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
            "name": "noParams",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NoParams",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 95,
                  "end": 103
                },
                "typeArguments": null,
                "start": 95,
                "end": 103
              },
              "start": 93,
              "end": 103
            },
            "start": 85,
            "end": 103
          },
          "init": null,
          "definite": false,
          "start": 85,
          "end": 103
        }
      ],
      "declare": true,
      "start": 73,
      "end": 104
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "noParams",
          "optional": false,
          "typeAnnotation": null,
          "start": 109,
          "end": 117
        },
        "typeArguments": null,
        "arguments": [],
        "start": 105,
        "end": 119
      },
      "directive": null,
      "start": 105,
      "end": 120
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "noParams",
          "optional": false,
          "typeAnnotation": null,
          "start": 125,
          "end": 133
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 134,
              "end": 140
            }
          ],
          "start": 133,
          "end": 141
        },
        "arguments": [],
        "start": 121,
        "end": 143
      },
      "directive": null,
      "start": 121,
      "end": 144
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "noParams",
          "optional": false,
          "typeAnnotation": null,
          "start": 149,
          "end": 157
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 158,
              "end": 160
            }
          ],
          "start": 157,
          "end": 161
        },
        "arguments": [],
        "start": 145,
        "end": 163
      },
      "directive": null,
      "start": 145,
      "end": 164
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "noGenericParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 256
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 268,
                    "end": 269
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 268,
                  "end": 269
                }
              ],
              "start": 267,
              "end": 270
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 274,
                    "end": 280
                  },
                  "start": 272,
                  "end": 280
                },
                "start": 271,
                "end": 280
              }
            ],
            "returnType": null,
            "start": 263,
            "end": 282
          }
        ],
        "start": 257,
        "end": 284
      },
      "declare": false,
      "start": 231,
      "end": 284
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
            "name": "noGenericParams",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "noGenericParams",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 314,
                  "end": 329
                },
                "typeArguments": null,
                "start": 314,
                "end": 329
              },
              "start": 312,
              "end": 329
            },
            "start": 297,
            "end": 329
          },
          "init": null,
          "definite": false,
          "start": 297,
          "end": 329
        }
      ],
      "declare": true,
      "start": 285,
      "end": 330
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "noGenericParams",
          "optional": false,
          "typeAnnotation": null,
          "start": 335,
          "end": 350
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 351,
            "end": 353
          }
        ],
        "start": 331,
        "end": 354
      },
      "directive": null,
      "start": 331,
      "end": 355
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "noGenericParams",
          "optional": false,
          "typeAnnotation": null,
          "start": 360,
          "end": 375
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 376,
              "end": 382
            }
          ],
          "start": 375,
          "end": 383
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 384,
            "end": 386
          }
        ],
        "start": 356,
        "end": 387
      },
      "directive": null,
      "start": 356,
      "end": 388
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "noGenericParams",
          "optional": false,
          "typeAnnotation": null,
          "start": 393,
          "end": 408
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 409,
              "end": 411
            }
          ],
          "start": 408,
          "end": 412
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 413,
            "end": 415
          }
        ],
        "start": 389,
        "end": 416
      },
      "directive": null,
      "start": 389,
      "end": 417
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics1",
        "optional": false,
        "typeAnnotation": null,
        "start": 522,
        "end": 535
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 547,
                    "end": 548
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 547,
                  "end": 548
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 550,
                    "end": 551
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 550,
                  "end": 551
                }
              ],
              "start": 546,
              "end": 552
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 556,
                      "end": 557
                    },
                    "typeArguments": null,
                    "start": 556,
                    "end": 557
                  },
                  "start": 554,
                  "end": 557
                },
                "start": 553,
                "end": 557
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 562,
                    "end": 568
                  },
                  "start": 560,
                  "end": 568
                },
                "start": 559,
                "end": 568
              }
            ],
            "returnType": null,
            "start": 542,
            "end": 570
          }
        ],
        "start": 536,
        "end": 572
      },
      "declare": false,
      "start": 512,
      "end": 572
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
            "name": "someGenerics1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someGenerics1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 600,
                  "end": 613
                },
                "typeArguments": null,
                "start": 600,
                "end": 613
              },
              "start": 598,
              "end": 613
            },
            "start": 585,
            "end": 613
          },
          "init": null,
          "definite": false,
          "start": 585,
          "end": 613
        }
      ],
      "declare": true,
      "start": 573,
      "end": 614
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics1",
          "optional": false,
          "typeAnnotation": null,
          "start": 619,
          "end": 632
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 633,
            "end": 634
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 636,
            "end": 637
          }
        ],
        "start": 615,
        "end": 638
      },
      "directive": null,
      "start": 615,
      "end": 639
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics1",
          "optional": false,
          "typeAnnotation": null,
          "start": 644,
          "end": 657
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 658,
              "end": 664
            },
            {
              "type": "TSNumberKeyword",
              "start": 666,
              "end": 672
            }
          ],
          "start": 657,
          "end": 673
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 674,
            "end": 675
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 677,
            "end": 678
          }
        ],
        "start": 640,
        "end": 679
      },
      "directive": null,
      "start": 640,
      "end": 680
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics1",
          "optional": false,
          "typeAnnotation": null,
          "start": 694,
          "end": 707
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 708,
              "end": 714
            },
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 716,
              "end": 718
            }
          ],
          "start": 707,
          "end": 719
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 720,
            "end": 721
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 723,
            "end": 724
          }
        ],
        "start": 690,
        "end": 725
      },
      "directive": null,
      "start": 690,
      "end": 726
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics2a",
        "optional": false,
        "typeAnnotation": null,
        "start": 827,
        "end": 841
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 853,
                    "end": 854
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 853,
                  "end": 854
                }
              ],
              "start": 852,
              "end": 855
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 863,
                              "end": 864
                            },
                            "typeArguments": null,
                            "start": 863,
                            "end": 864
                          },
                          "start": 861,
                          "end": 864
                        },
                        "start": 860,
                        "end": 864
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 869,
                        "end": 873
                      },
                      "start": 866,
                      "end": 873
                    },
                    "start": 859,
                    "end": 873
                  },
                  "start": 857,
                  "end": 873
                },
                "start": 856,
                "end": 873
              }
            ],
            "returnType": null,
            "start": 848,
            "end": 875
          }
        ],
        "start": 842,
        "end": 877
      },
      "declare": false,
      "start": 817,
      "end": 877
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
            "name": "someGenerics2a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someGenerics2a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 906,
                  "end": 920
                },
                "typeArguments": null,
                "start": 906,
                "end": 920
              },
              "start": 904,
              "end": 920
            },
            "start": 890,
            "end": 920
          },
          "init": null,
          "definite": false,
          "start": 890,
          "end": 920
        }
      ],
      "declare": true,
      "start": 878,
      "end": 921
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics2a",
          "optional": false,
          "typeAnnotation": null,
          "start": 926,
          "end": 940
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 945,
                    "end": 951
                  },
                  "start": 943,
                  "end": 951
                },
                "start": 942,
                "end": 951
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 956,
              "end": 957
            },
            "id": null,
            "generator": false,
            "start": 941,
            "end": 957
          }
        ],
        "start": 922,
        "end": 958
      },
      "directive": null,
      "start": 922,
      "end": 959
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics2a",
          "optional": false,
          "typeAnnotation": null,
          "start": 964,
          "end": 978
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 979,
              "end": 985
            }
          ],
          "start": 978,
          "end": 986
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 991,
                    "end": 997
                  },
                  "start": 989,
                  "end": 997
                },
                "start": 988,
                "end": 997
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1002,
              "end": 1003
            },
            "id": null,
            "generator": false,
            "start": 987,
            "end": 1003
          }
        ],
        "start": 960,
        "end": 1004
      },
      "directive": null,
      "start": 960,
      "end": 1005
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics2a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1010,
          "end": 1024
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 1025,
              "end": 1031
            }
          ],
          "start": 1024,
          "end": 1032
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 1034,
                "end": 1035
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1040,
                  "end": 1041
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "substr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1042,
                  "end": 1048
                },
                "optional": false,
                "computed": false,
                "start": 1040,
                "end": 1048
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1049,
                  "end": 1050
                }
              ],
              "optional": false,
              "start": 1040,
              "end": 1051
            },
            "id": null,
            "generator": false,
            "start": 1033,
            "end": 1051
          }
        ],
        "start": 1006,
        "end": 1052
      },
      "directive": null,
      "start": 1006,
      "end": 1053
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics2b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1065,
        "end": 1079
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1091,
                    "end": 1092
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1091,
                  "end": 1092
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1094,
                    "end": 1095
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1094,
                  "end": 1095
                }
              ],
              "start": 1090,
              "end": 1096
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1104,
                              "end": 1105
                            },
                            "typeArguments": null,
                            "start": 1104,
                            "end": 1105
                          },
                          "start": 1102,
                          "end": 1105
                        },
                        "start": 1101,
                        "end": 1105
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1110,
                              "end": 1111
                            },
                            "typeArguments": null,
                            "start": 1110,
                            "end": 1111
                          },
                          "start": 1108,
                          "end": 1111
                        },
                        "start": 1107,
                        "end": 1111
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1116,
                        "end": 1120
                      },
                      "start": 1113,
                      "end": 1120
                    },
                    "start": 1100,
                    "end": 1120
                  },
                  "start": 1098,
                  "end": 1120
                },
                "start": 1097,
                "end": 1120
              }
            ],
            "returnType": null,
            "start": 1086,
            "end": 1122
          }
        ],
        "start": 1080,
        "end": 1124
      },
      "declare": false,
      "start": 1055,
      "end": 1124
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
            "name": "someGenerics2b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someGenerics2b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1153,
                  "end": 1167
                },
                "typeArguments": null,
                "start": 1153,
                "end": 1167
              },
              "start": 1151,
              "end": 1167
            },
            "start": 1137,
            "end": 1167
          },
          "init": null,
          "definite": false,
          "start": 1137,
          "end": 1167
        }
      ],
      "declare": true,
      "start": 1125,
      "end": 1168
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics2b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1173,
          "end": 1187
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1192,
                    "end": 1198
                  },
                  "start": 1190,
                  "end": 1198
                },
                "start": 1189,
                "end": 1198
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1203,
                    "end": 1209
                  },
                  "start": 1201,
                  "end": 1209
                },
                "start": 1200,
                "end": 1209
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1214,
              "end": 1215
            },
            "id": null,
            "generator": false,
            "start": 1188,
            "end": 1215
          }
        ],
        "start": 1169,
        "end": 1216
      },
      "directive": null,
      "start": 1169,
      "end": 1217
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics2b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1222,
          "end": 1236
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 1237,
              "end": 1243
            },
            {
              "type": "TSNumberKeyword",
              "start": 1245,
              "end": 1251
            }
          ],
          "start": 1236,
          "end": 1252
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1257,
                    "end": 1263
                  },
                  "start": 1255,
                  "end": 1263
                },
                "start": 1254,
                "end": 1263
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1268,
                    "end": 1274
                  },
                  "start": 1266,
                  "end": 1274
                },
                "start": 1265,
                "end": 1274
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1279,
              "end": 1280
            },
            "id": null,
            "generator": false,
            "start": 1253,
            "end": 1280
          }
        ],
        "start": 1218,
        "end": 1281
      },
      "directive": null,
      "start": 1218,
      "end": 1282
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics2b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1287,
          "end": 1301
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 1302,
              "end": 1308
            },
            {
              "type": "TSNumberKeyword",
              "start": 1310,
              "end": 1316
            }
          ],
          "start": 1301,
          "end": 1317
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 1319,
                "end": 1320
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1322,
                "end": 1323
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1328,
                  "end": 1329
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "substr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1330,
                  "end": 1336
                },
                "optional": false,
                "computed": false,
                "start": 1328,
                "end": 1336
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1337,
                    "end": 1338
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1341,
                    "end": 1342
                  },
                  "start": 1337,
                  "end": 1342
                }
              ],
              "optional": false,
              "start": 1328,
              "end": 1343
            },
            "id": null,
            "generator": false,
            "start": 1318,
            "end": 1343
          }
        ],
        "start": 1283,
        "end": 1344
      },
      "directive": null,
      "start": 1283,
      "end": 1345
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1491,
        "end": 1504
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1516,
                    "end": 1517
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1516,
                  "end": 1517
                }
              ],
              "start": 1515,
              "end": 1518
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "producer",
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
                          "start": 1535,
                          "end": 1536
                        },
                        "typeArguments": null,
                        "start": 1535,
                        "end": 1536
                      },
                      "start": 1532,
                      "end": 1536
                    },
                    "start": 1529,
                    "end": 1536
                  },
                  "start": 1527,
                  "end": 1536
                },
                "start": 1519,
                "end": 1536
              }
            ],
            "returnType": null,
            "start": 1511,
            "end": 1538
          }
        ],
        "start": 1505,
        "end": 1540
      },
      "declare": false,
      "start": 1481,
      "end": 1540
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
            "name": "someGenerics3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someGenerics3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1568,
                  "end": 1581
                },
                "typeArguments": null,
                "start": 1568,
                "end": 1581
              },
              "start": 1566,
              "end": 1581
            },
            "start": 1553,
            "end": 1581
          },
          "init": null,
          "definite": false,
          "start": 1553,
          "end": 1581
        }
      ],
      "declare": true,
      "start": 1541,
      "end": 1582
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1587,
          "end": 1600
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
              "value": "",
              "raw": "''",
              "start": 1607,
              "end": 1609
            },
            "id": null,
            "generator": false,
            "start": 1601,
            "end": 1609
          }
        ],
        "start": 1583,
        "end": 1610
      },
      "directive": null,
      "start": 1583,
      "end": 1611
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1616,
          "end": 1629
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Window",
                "optional": false,
                "typeAnnotation": null,
                "start": 1630,
                "end": 1636
              },
              "typeArguments": null,
              "start": 1630,
              "end": 1636
            }
          ],
          "start": 1629,
          "end": 1637
        },
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
              "start": 1644,
              "end": 1653
            },
            "id": null,
            "generator": false,
            "start": 1638,
            "end": 1653
          }
        ],
        "start": 1612,
        "end": 1654
      },
      "directive": null,
      "start": 1612,
      "end": 1655
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1660,
          "end": 1673
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1674,
              "end": 1680
            }
          ],
          "start": 1673,
          "end": 1681
        },
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
              "value": 3,
              "raw": "3",
              "start": 1688,
              "end": 1689
            },
            "id": null,
            "generator": false,
            "start": 1682,
            "end": 1689
          }
        ],
        "start": 1656,
        "end": 1690
      },
      "directive": null,
      "start": 1656,
      "end": 1691
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1844,
        "end": 1857
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1869,
                    "end": 1870
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1869,
                  "end": 1870
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1872,
                    "end": 1873
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1872,
                  "end": 1873
                }
              ],
              "start": 1868,
              "end": 1874
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1878,
                      "end": 1879
                    },
                    "typeArguments": null,
                    "start": 1878,
                    "end": 1879
                  },
                  "start": 1876,
                  "end": 1879
                },
                "start": 1875,
                "end": 1879
              },
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
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1888,
                              "end": 1889
                            },
                            "typeArguments": null,
                            "start": 1888,
                            "end": 1889
                          },
                          "start": 1886,
                          "end": 1889
                        },
                        "start": 1885,
                        "end": 1889
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1894,
                        "end": 1898
                      },
                      "start": 1891,
                      "end": 1898
                    },
                    "start": 1884,
                    "end": 1898
                  },
                  "start": 1882,
                  "end": 1898
                },
                "start": 1881,
                "end": 1898
              }
            ],
            "returnType": null,
            "start": 1864,
            "end": 1900
          }
        ],
        "start": 1858,
        "end": 1902
      },
      "declare": false,
      "start": 1834,
      "end": 1902
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
            "name": "someGenerics4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someGenerics4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1930,
                  "end": 1943
                },
                "typeArguments": null,
                "start": 1930,
                "end": 1943
              },
              "start": 1928,
              "end": 1943
            },
            "start": 1915,
            "end": 1943
          },
          "init": null,
          "definite": false,
          "start": 1915,
          "end": 1943
        }
      ],
      "declare": true,
      "start": 1903,
      "end": 1944
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1949,
          "end": 1962
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 1963,
            "end": 1964
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
              "start": 1972,
              "end": 1976
            },
            "id": null,
            "generator": false,
            "start": 1966,
            "end": 1976
          }
        ],
        "start": 1945,
        "end": 1977
      },
      "directive": null,
      "start": 1945,
      "end": 1978
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1983,
          "end": 1996
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 1997,
              "end": 2003
            },
            {
              "type": "TSNumberKeyword",
              "start": 2005,
              "end": 2011
            }
          ],
          "start": 1996,
          "end": 2012
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2013,
            "end": 2015
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
              "value": 3,
              "raw": "3",
              "start": 2023,
              "end": 2024
            },
            "id": null,
            "generator": false,
            "start": 2017,
            "end": 2024
          }
        ],
        "start": 1979,
        "end": 2025
      },
      "directive": null,
      "start": 1979,
      "end": 2026
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2031,
          "end": 2044
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 2045,
              "end": 2051
            },
            {
              "type": "TSNumberKeyword",
              "start": 2053,
              "end": 2059
            }
          ],
          "start": 2044,
          "end": 2060
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2061,
            "end": 2063
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2069,
                    "end": 2075
                  },
                  "start": 2067,
                  "end": 2075
                },
                "start": 2066,
                "end": 2075
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 2080,
              "end": 2082
            },
            "id": null,
            "generator": false,
            "start": 2065,
            "end": 2082
          }
        ],
        "start": 2027,
        "end": 2083
      },
      "directive": null,
      "start": 2027,
      "end": 2084
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2098,
          "end": 2111
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 2112,
              "end": 2118
            },
            {
              "type": "TSNumberKeyword",
              "start": 2120,
              "end": 2126
            }
          ],
          "start": 2111,
          "end": 2127
        },
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2128,
            "end": 2132
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2134,
            "end": 2138
          }
        ],
        "start": 2094,
        "end": 2139
      },
      "directive": null,
      "start": 2094,
      "end": 2140
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2293,
        "end": 2306
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2318,
                    "end": 2319
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2318,
                  "end": 2319
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2321,
                    "end": 2322
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2321,
                  "end": 2322
                }
              ],
              "start": 2317,
              "end": 2323
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2327,
                      "end": 2328
                    },
                    "typeArguments": null,
                    "start": 2327,
                    "end": 2328
                  },
                  "start": 2325,
                  "end": 2328
                },
                "start": 2324,
                "end": 2328
              },
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
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2337,
                              "end": 2338
                            },
                            "typeArguments": null,
                            "start": 2337,
                            "end": 2338
                          },
                          "start": 2335,
                          "end": 2338
                        },
                        "start": 2334,
                        "end": 2338
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 2343,
                        "end": 2347
                      },
                      "start": 2340,
                      "end": 2347
                    },
                    "start": 2333,
                    "end": 2347
                  },
                  "start": 2331,
                  "end": 2347
                },
                "start": 2330,
                "end": 2347
              }
            ],
            "returnType": null,
            "start": 2313,
            "end": 2349
          }
        ],
        "start": 2307,
        "end": 2351
      },
      "declare": false,
      "start": 2283,
      "end": 2351
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
            "name": "someGenerics5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someGenerics5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2379,
                  "end": 2392
                },
                "typeArguments": null,
                "start": 2379,
                "end": 2392
              },
              "start": 2377,
              "end": 2392
            },
            "start": 2364,
            "end": 2392
          },
          "init": null,
          "definite": false,
          "start": 2364,
          "end": 2392
        }
      ],
      "declare": true,
      "start": 2352,
      "end": 2393
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2398,
          "end": 2411
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 2412,
            "end": 2413
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
              "start": 2421,
              "end": 2425
            },
            "id": null,
            "generator": false,
            "start": 2415,
            "end": 2425
          }
        ],
        "start": 2394,
        "end": 2426
      },
      "directive": null,
      "start": 2394,
      "end": 2427
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2432,
          "end": 2445
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2446,
              "end": 2452
            },
            {
              "type": "TSStringKeyword",
              "start": 2454,
              "end": 2460
            }
          ],
          "start": 2445,
          "end": 2461
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2462,
            "end": 2464
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
              "value": 3,
              "raw": "3",
              "start": 2472,
              "end": 2473
            },
            "id": null,
            "generator": false,
            "start": 2466,
            "end": 2473
          }
        ],
        "start": 2428,
        "end": 2474
      },
      "directive": null,
      "start": 2428,
      "end": 2475
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2480,
          "end": 2493
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2494,
              "end": 2500
            },
            {
              "type": "TSStringKeyword",
              "start": 2502,
              "end": 2508
            }
          ],
          "start": 2493,
          "end": 2509
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2510,
            "end": 2512
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2518,
                    "end": 2524
                  },
                  "start": 2516,
                  "end": 2524
                },
                "start": 2515,
                "end": 2524
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 2529,
              "end": 2531
            },
            "id": null,
            "generator": false,
            "start": 2514,
            "end": 2531
          }
        ],
        "start": 2476,
        "end": 2532
      },
      "directive": null,
      "start": 2476,
      "end": 2533
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2547,
          "end": 2560
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 2561,
              "end": 2567
            },
            {
              "type": "TSNumberKeyword",
              "start": 2569,
              "end": 2575
            }
          ],
          "start": 2560,
          "end": 2576
        },
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2577,
            "end": 2581
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2583,
            "end": 2587
          }
        ],
        "start": 2543,
        "end": 2588
      },
      "directive": null,
      "start": 2543,
      "end": 2589
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2710,
        "end": 2723
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2735,
                    "end": 2736
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2735,
                  "end": 2736
                }
              ],
              "start": 2734,
              "end": 2737
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
                    "type": "TSFunctionType",
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
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2745,
                              "end": 2746
                            },
                            "typeArguments": null,
                            "start": 2745,
                            "end": 2746
                          },
                          "start": 2743,
                          "end": 2746
                        },
                        "start": 2742,
                        "end": 2746
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2751,
                          "end": 2752
                        },
                        "typeArguments": null,
                        "start": 2751,
                        "end": 2752
                      },
                      "start": 2748,
                      "end": 2752
                    },
                    "start": 2741,
                    "end": 2752
                  },
                  "start": 2739,
                  "end": 2752
                },
                "start": 2738,
                "end": 2752
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2761,
                              "end": 2762
                            },
                            "typeArguments": null,
                            "start": 2761,
                            "end": 2762
                          },
                          "start": 2759,
                          "end": 2762
                        },
                        "start": 2758,
                        "end": 2762
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2767,
                          "end": 2768
                        },
                        "typeArguments": null,
                        "start": 2767,
                        "end": 2768
                      },
                      "start": 2764,
                      "end": 2768
                    },
                    "start": 2757,
                    "end": 2768
                  },
                  "start": 2755,
                  "end": 2768
                },
                "start": 2754,
                "end": 2768
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
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
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2777,
                              "end": 2778
                            },
                            "typeArguments": null,
                            "start": 2777,
                            "end": 2778
                          },
                          "start": 2775,
                          "end": 2778
                        },
                        "start": 2774,
                        "end": 2778
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2783,
                          "end": 2784
                        },
                        "typeArguments": null,
                        "start": 2783,
                        "end": 2784
                      },
                      "start": 2780,
                      "end": 2784
                    },
                    "start": 2773,
                    "end": 2784
                  },
                  "start": 2771,
                  "end": 2784
                },
                "start": 2770,
                "end": 2784
              }
            ],
            "returnType": null,
            "start": 2730,
            "end": 2786
          }
        ],
        "start": 2724,
        "end": 2788
      },
      "declare": false,
      "start": 2700,
      "end": 2788
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
            "name": "someGenerics6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someGenerics6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2816,
                  "end": 2829
                },
                "typeArguments": null,
                "start": 2816,
                "end": 2829
              },
              "start": 2814,
              "end": 2829
            },
            "start": 2801,
            "end": 2829
          },
          "init": null,
          "definite": false,
          "start": 2801,
          "end": 2829
        }
      ],
      "declare": true,
      "start": 2789,
      "end": 2830
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics6",
          "optional": false,
          "typeAnnotation": null,
          "start": 2835,
          "end": 2848
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2849,
                "end": 2850
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 2854,
              "end": 2855
            },
            "id": null,
            "generator": false,
            "start": 2849,
            "end": 2855
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2857,
                "end": 2858
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 2862,
              "end": 2863
            },
            "id": null,
            "generator": false,
            "start": 2857,
            "end": 2863
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2865,
                "end": 2866
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 2870,
              "end": 2871
            },
            "id": null,
            "generator": false,
            "start": 2865,
            "end": 2871
          }
        ],
        "start": 2831,
        "end": 2872
      },
      "directive": null,
      "start": 2831,
      "end": 2873
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics6",
          "optional": false,
          "typeAnnotation": null,
          "start": 2878,
          "end": 2891
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2892,
              "end": 2898
            }
          ],
          "start": 2891,
          "end": 2899
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2900,
                "end": 2901
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 2905,
              "end": 2906
            },
            "id": null,
            "generator": false,
            "start": 2900,
            "end": 2906
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2908,
                "end": 2909
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 2913,
              "end": 2914
            },
            "id": null,
            "generator": false,
            "start": 2908,
            "end": 2914
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2916,
                "end": 2917
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 2921,
              "end": 2922
            },
            "id": null,
            "generator": false,
            "start": 2916,
            "end": 2922
          }
        ],
        "start": 2874,
        "end": 2923
      },
      "directive": null,
      "start": 2874,
      "end": 2924
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics6",
          "optional": false,
          "typeAnnotation": null,
          "start": 2929,
          "end": 2942
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2943,
              "end": 2949
            }
          ],
          "start": 2942,
          "end": 2950
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2955,
                    "end": 2961
                  },
                  "start": 2953,
                  "end": 2961
                },
                "start": 2952,
                "end": 2961
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 2966,
              "end": 2967
            },
            "id": null,
            "generator": false,
            "start": 2951,
            "end": 2967
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2973,
                    "end": 2979
                  },
                  "start": 2971,
                  "end": 2979
                },
                "start": 2970,
                "end": 2979
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 2984,
              "end": 2985
            },
            "id": null,
            "generator": false,
            "start": 2969,
            "end": 2985
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2991,
                    "end": 2997
                  },
                  "start": 2989,
                  "end": 2997
                },
                "start": 2988,
                "end": 2997
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3002,
              "end": 3003
            },
            "id": null,
            "generator": false,
            "start": 2987,
            "end": 3003
          }
        ],
        "start": 2925,
        "end": 3004
      },
      "directive": null,
      "start": 2925,
      "end": 3005
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics6",
          "optional": false,
          "typeAnnotation": null,
          "start": 3019,
          "end": 3032
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 3033,
              "end": 3039
            }
          ],
          "start": 3032,
          "end": 3040
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3045,
                    "end": 3051
                  },
                  "start": 3043,
                  "end": 3051
                },
                "start": 3042,
                "end": 3051
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3056,
              "end": 3057
            },
            "id": null,
            "generator": false,
            "start": 3041,
            "end": 3057
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3063,
                    "end": 3069
                  },
                  "start": 3061,
                  "end": 3069
                },
                "start": 3060,
                "end": 3069
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3074,
              "end": 3075
            },
            "id": null,
            "generator": false,
            "start": 3059,
            "end": 3075
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3081,
                    "end": 3087
                  },
                  "start": 3079,
                  "end": 3087
                },
                "start": 3078,
                "end": 3087
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3092,
              "end": 3093
            },
            "id": null,
            "generator": false,
            "start": 3077,
            "end": 3093
          }
        ],
        "start": 3015,
        "end": 3094
      },
      "directive": null,
      "start": 3015,
      "end": 3095
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics7",
        "optional": false,
        "typeAnnotation": null,
        "start": 3217,
        "end": 3230
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3242,
                    "end": 3243
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3242,
                  "end": 3243
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3245,
                    "end": 3246
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3245,
                  "end": 3246
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3248,
                    "end": 3249
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3248,
                  "end": 3249
                }
              ],
              "start": 3241,
              "end": 3250
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
                    "type": "TSFunctionType",
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
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3258,
                              "end": 3259
                            },
                            "typeArguments": null,
                            "start": 3258,
                            "end": 3259
                          },
                          "start": 3256,
                          "end": 3259
                        },
                        "start": 3255,
                        "end": 3259
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3264,
                          "end": 3265
                        },
                        "typeArguments": null,
                        "start": 3264,
                        "end": 3265
                      },
                      "start": 3261,
                      "end": 3265
                    },
                    "start": 3254,
                    "end": 3265
                  },
                  "start": 3252,
                  "end": 3265
                },
                "start": 3251,
                "end": 3265
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3274,
                              "end": 3275
                            },
                            "typeArguments": null,
                            "start": 3274,
                            "end": 3275
                          },
                          "start": 3272,
                          "end": 3275
                        },
                        "start": 3271,
                        "end": 3275
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3280,
                          "end": 3281
                        },
                        "typeArguments": null,
                        "start": 3280,
                        "end": 3281
                      },
                      "start": 3277,
                      "end": 3281
                    },
                    "start": 3270,
                    "end": 3281
                  },
                  "start": 3268,
                  "end": 3281
                },
                "start": 3267,
                "end": 3281
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
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
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3290,
                              "end": 3291
                            },
                            "typeArguments": null,
                            "start": 3290,
                            "end": 3291
                          },
                          "start": 3288,
                          "end": 3291
                        },
                        "start": 3287,
                        "end": 3291
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3296,
                          "end": 3297
                        },
                        "typeArguments": null,
                        "start": 3296,
                        "end": 3297
                      },
                      "start": 3293,
                      "end": 3297
                    },
                    "start": 3286,
                    "end": 3297
                  },
                  "start": 3284,
                  "end": 3297
                },
                "start": 3283,
                "end": 3297
              }
            ],
            "returnType": null,
            "start": 3237,
            "end": 3299
          }
        ],
        "start": 3231,
        "end": 3301
      },
      "declare": false,
      "start": 3207,
      "end": 3301
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
            "name": "someGenerics7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someGenerics7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3329,
                  "end": 3342
                },
                "typeArguments": null,
                "start": 3329,
                "end": 3342
              },
              "start": 3327,
              "end": 3342
            },
            "start": 3314,
            "end": 3342
          },
          "init": null,
          "definite": false,
          "start": 3314,
          "end": 3342
        }
      ],
      "declare": true,
      "start": 3302,
      "end": 3343
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics7",
          "optional": false,
          "typeAnnotation": null,
          "start": 3348,
          "end": 3361
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 3362,
                "end": 3363
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3367,
              "end": 3368
            },
            "id": null,
            "generator": false,
            "start": 3362,
            "end": 3368
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 3370,
                "end": 3371
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3375,
              "end": 3376
            },
            "id": null,
            "generator": false,
            "start": 3370,
            "end": 3376
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 3378,
                "end": 3379
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3383,
              "end": 3384
            },
            "id": null,
            "generator": false,
            "start": 3378,
            "end": 3384
          }
        ],
        "start": 3344,
        "end": 3385
      },
      "directive": null,
      "start": 3344,
      "end": 3386
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics7",
          "optional": false,
          "typeAnnotation": null,
          "start": 3391,
          "end": 3404
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 3405,
              "end": 3411
            },
            {
              "type": "TSStringKeyword",
              "start": 3413,
              "end": 3419
            },
            {
              "type": "TSNumberKeyword",
              "start": 3421,
              "end": 3427
            }
          ],
          "start": 3404,
          "end": 3428
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 3429,
                "end": 3430
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3434,
              "end": 3435
            },
            "id": null,
            "generator": false,
            "start": 3429,
            "end": 3435
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 3437,
                "end": 3438
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3442,
              "end": 3443
            },
            "id": null,
            "generator": false,
            "start": 3437,
            "end": 3443
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 3445,
                "end": 3446
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3450,
              "end": 3451
            },
            "id": null,
            "generator": false,
            "start": 3445,
            "end": 3451
          }
        ],
        "start": 3387,
        "end": 3452
      },
      "directive": null,
      "start": 3387,
      "end": 3453
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics7",
          "optional": false,
          "typeAnnotation": null,
          "start": 3458,
          "end": 3471
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 3472,
              "end": 3478
            },
            {
              "type": "TSStringKeyword",
              "start": 3480,
              "end": 3486
            },
            {
              "type": "TSNumberKeyword",
              "start": 3488,
              "end": 3494
            }
          ],
          "start": 3471,
          "end": 3495
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3500,
                    "end": 3506
                  },
                  "start": 3498,
                  "end": 3506
                },
                "start": 3497,
                "end": 3506
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3511,
              "end": 3512
            },
            "id": null,
            "generator": false,
            "start": 3496,
            "end": 3512
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3518,
                    "end": 3524
                  },
                  "start": 3516,
                  "end": 3524
                },
                "start": 3515,
                "end": 3524
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3529,
              "end": 3530
            },
            "id": null,
            "generator": false,
            "start": 3514,
            "end": 3530
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3536,
                    "end": 3542
                  },
                  "start": 3534,
                  "end": 3542
                },
                "start": 3533,
                "end": 3542
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3547,
              "end": 3548
            },
            "id": null,
            "generator": false,
            "start": 3532,
            "end": 3548
          }
        ],
        "start": 3454,
        "end": 3549
      },
      "directive": null,
      "start": 3454,
      "end": 3550
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics8",
        "optional": false,
        "typeAnnotation": null,
        "start": 3617,
        "end": 3630
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3642,
                    "end": 3643
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3642,
                  "end": 3643
                }
              ],
              "start": 3641,
              "end": 3644
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3648,
                      "end": 3649
                    },
                    "typeArguments": null,
                    "start": 3648,
                    "end": 3649
                  },
                  "start": 3646,
                  "end": 3649
                },
                "start": 3645,
                "end": 3649
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
                  "start": 3652,
                  "end": 3653
                },
                "typeArguments": null,
                "start": 3652,
                "end": 3653
              },
              "start": 3650,
              "end": 3653
            },
            "start": 3637,
            "end": 3654
          }
        ],
        "start": 3631,
        "end": 3656
      },
      "declare": false,
      "start": 3607,
      "end": 3656
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
            "name": "someGenerics8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someGenerics8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3684,
                  "end": 3697
                },
                "typeArguments": null,
                "start": 3684,
                "end": 3697
              },
              "start": 3682,
              "end": 3697
            },
            "start": 3669,
            "end": 3697
          },
          "init": null,
          "definite": false,
          "start": 3669,
          "end": 3697
        }
      ],
      "declare": true,
      "start": 3657,
      "end": 3698
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
            "typeAnnotation": null,
            "start": 3703,
            "end": 3704
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "someGenerics8",
              "optional": false,
              "typeAnnotation": null,
              "start": 3711,
              "end": 3724
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "someGenerics7",
                "optional": false,
                "typeAnnotation": null,
                "start": 3725,
                "end": 3738
              }
            ],
            "start": 3707,
            "end": 3739
          },
          "definite": false,
          "start": 3703,
          "end": 3739
        }
      ],
      "declare": false,
      "start": 3699,
      "end": 3740
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 3745,
          "end": 3746
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 3747,
              "end": 3753
            },
            {
              "type": "TSStringKeyword",
              "start": 3755,
              "end": 3761
            },
            {
              "type": "TSStringKeyword",
              "start": 3763,
              "end": 3769
            }
          ],
          "start": 3746,
          "end": 3770
        },
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 3771,
            "end": 3775
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 3777,
            "end": 3781
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 3783,
            "end": 3787
          }
        ],
        "start": 3741,
        "end": 3788
      },
      "directive": null,
      "start": 3741,
      "end": 3789
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics9",
        "optional": false,
        "typeAnnotation": null,
        "start": 3900,
        "end": 3913
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3925,
                    "end": 3926
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3925,
                  "end": 3926
                }
              ],
              "start": 3924,
              "end": 3927
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3931,
                      "end": 3932
                    },
                    "typeArguments": null,
                    "start": 3931,
                    "end": 3932
                  },
                  "start": 3929,
                  "end": 3932
                },
                "start": 3928,
                "end": 3932
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3937,
                      "end": 3938
                    },
                    "typeArguments": null,
                    "start": 3937,
                    "end": 3938
                  },
                  "start": 3935,
                  "end": 3938
                },
                "start": 3934,
                "end": 3938
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3943,
                      "end": 3944
                    },
                    "typeArguments": null,
                    "start": 3943,
                    "end": 3944
                  },
                  "start": 3941,
                  "end": 3944
                },
                "start": 3940,
                "end": 3944
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
                  "start": 3947,
                  "end": 3948
                },
                "typeArguments": null,
                "start": 3947,
                "end": 3948
              },
              "start": 3945,
              "end": 3948
            },
            "start": 3920,
            "end": 3949
          }
        ],
        "start": 3914,
        "end": 3951
      },
      "declare": false,
      "start": 3890,
      "end": 3951
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
            "name": "someGenerics9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someGenerics9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3979,
                  "end": 3992
                },
                "typeArguments": null,
                "start": 3979,
                "end": 3992
              },
              "start": 3977,
              "end": 3992
            },
            "start": 3964,
            "end": 3992
          },
          "init": null,
          "definite": false,
          "start": 3964,
          "end": 3992
        }
      ],
      "declare": true,
      "start": 3952,
      "end": 3993
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
            "name": "a9a",
            "optional": false,
            "typeAnnotation": null,
            "start": 3998,
            "end": 4001
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "someGenerics9",
              "optional": false,
              "typeAnnotation": null,
              "start": 4008,
              "end": 4021
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 4022,
                "end": 4024
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 4026,
                "end": 4027
              },
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 4029,
                "end": 4031
              }
            ],
            "start": 4004,
            "end": 4032
          },
          "definite": false,
          "start": 3998,
          "end": 4032
        }
      ],
      "declare": false,
      "start": 3994,
      "end": 4033
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
            "name": "a9a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 4051,
                "end": 4053
              },
              "start": 4049,
              "end": 4053
            },
            "start": 4046,
            "end": 4053
          },
          "init": null,
          "definite": false,
          "start": 4046,
          "end": 4053
        }
      ],
      "declare": true,
      "start": 4034,
      "end": 4054
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
            "name": "a9b",
            "optional": false,
            "typeAnnotation": null,
            "start": 4059,
            "end": 4062
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "someGenerics9",
              "optional": false,
              "typeAnnotation": null,
              "start": 4069,
              "end": 4082
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
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4085,
                        "end": 4086
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4089,
                          "end": 4095
                        },
                        "start": 4087,
                        "end": 4095
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4085,
                      "end": 4096
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4097,
                        "end": 4098
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4101,
                          "end": 4107
                        },
                        "start": 4099,
                        "end": 4107
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4097,
                      "end": 4108
                    }
                  ],
                  "start": 4083,
                  "end": 4110
                }
              ],
              "start": 4082,
              "end": 4111
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4114,
                      "end": 4115
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 4117,
                      "end": 4118
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4114,
                    "end": 4118
                  }
                ],
                "start": 4112,
                "end": 4120
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4124,
                      "end": 4125
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 4127,
                      "end": 4129
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4124,
                    "end": 4129
                  }
                ],
                "start": 4122,
                "end": 4131
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 4133,
                "end": 4137
              }
            ],
            "start": 4065,
            "end": 4138
          },
          "definite": false,
          "start": 4059,
          "end": 4138
        }
      ],
      "declare": false,
      "start": 4055,
      "end": 4139
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
            "name": "a9b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4159,
                      "end": 4160
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4163,
                        "end": 4169
                      },
                      "start": 4161,
                      "end": 4169
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4159,
                    "end": 4170
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4171,
                      "end": 4172
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4175,
                        "end": 4181
                      },
                      "start": 4173,
                      "end": 4181
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4171,
                    "end": 4182
                  }
                ],
                "start": 4157,
                "end": 4184
              },
              "start": 4155,
              "end": 4184
            },
            "start": 4152,
            "end": 4184
          },
          "init": null,
          "definite": false,
          "start": 4152,
          "end": 4184
        }
      ],
      "declare": true,
      "start": 4140,
      "end": 4185
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A91",
        "optional": false,
        "typeAnnotation": null,
        "start": 4303,
        "end": 4306
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
              "start": 4313,
              "end": 4314
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4316,
                "end": 4322
              },
              "start": 4314,
              "end": 4322
            },
            "accessibility": null,
            "static": false,
            "start": 4313,
            "end": 4323
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 4328,
              "end": 4329
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4332,
                "end": 4338
              },
              "start": 4330,
              "end": 4338
            },
            "accessibility": null,
            "static": false,
            "start": 4328,
            "end": 4339
          }
        ],
        "start": 4307,
        "end": 4341
      },
      "declare": false,
      "start": 4293,
      "end": 4341
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A92",
        "optional": false,
        "typeAnnotation": null,
        "start": 4352,
        "end": 4355
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
              "start": 4362,
              "end": 4363
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4365,
                "end": 4371
              },
              "start": 4363,
              "end": 4371
            },
            "accessibility": null,
            "static": false,
            "start": 4362,
            "end": 4372
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 4377,
              "end": 4378
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Window",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4381,
                  "end": 4387
                },
                "typeArguments": null,
                "start": 4381,
                "end": 4387
              },
              "start": 4379,
              "end": 4387
            },
            "accessibility": null,
            "static": false,
            "start": 4377,
            "end": 4388
          }
        ],
        "start": 4356,
        "end": 4390
      },
      "declare": false,
      "start": 4342,
      "end": 4390
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
            "name": "a9e",
            "optional": false,
            "typeAnnotation": null,
            "start": 4395,
            "end": 4398
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "someGenerics9",
              "optional": false,
              "typeAnnotation": null,
              "start": 4405,
              "end": 4418
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 4419,
                "end": 4428
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4432,
                      "end": 4433
                    },
                    "value": {
                      "type": "Literal",
                      "value": 6,
                      "raw": "6",
                      "start": 4435,
                      "end": 4436
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4432,
                    "end": 4436
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4438,
                      "end": 4439
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "window",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4441,
                      "end": 4447
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4438,
                    "end": 4447
                  }
                ],
                "start": 4430,
                "end": 4449
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4453,
                      "end": 4454
                    },
                    "value": {
                      "type": "Literal",
                      "value": 6,
                      "raw": "6",
                      "start": 4456,
                      "end": 4457
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4453,
                    "end": 4457
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4459,
                      "end": 4460
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 4462,
                      "end": 4464
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4459,
                    "end": 4464
                  }
                ],
                "start": 4451,
                "end": 4466
              }
            ],
            "start": 4401,
            "end": 4467
          },
          "definite": false,
          "start": 4395,
          "end": 4467
        }
      ],
      "declare": false,
      "start": 4391,
      "end": 4468
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
            "name": "a9e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 4486,
                "end": 4488
              },
              "start": 4484,
              "end": 4488
            },
            "start": 4481,
            "end": 4488
          },
          "init": null,
          "definite": false,
          "start": 4481,
          "end": 4488
        }
      ],
      "declare": true,
      "start": 4469,
      "end": 4489
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
            "name": "a9f",
            "optional": false,
            "typeAnnotation": null,
            "start": 4494,
            "end": 4497
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "someGenerics9",
              "optional": false,
              "typeAnnotation": null,
              "start": 4504,
              "end": 4517
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A92",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4518,
                    "end": 4521
                  },
                  "typeArguments": null,
                  "start": 4518,
                  "end": 4521
                }
              ],
              "start": 4517,
              "end": 4522
            },
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 4523,
                "end": 4532
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4536,
                      "end": 4537
                    },
                    "value": {
                      "type": "Literal",
                      "value": 6,
                      "raw": "6",
                      "start": 4539,
                      "end": 4540
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4536,
                    "end": 4540
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4542,
                      "end": 4543
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "window",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4545,
                      "end": 4551
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4542,
                    "end": 4551
                  }
                ],
                "start": 4534,
                "end": 4553
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4557,
                      "end": 4558
                    },
                    "value": {
                      "type": "Literal",
                      "value": 6,
                      "raw": "6",
                      "start": 4560,
                      "end": 4561
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4557,
                    "end": 4561
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4563,
                      "end": 4564
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 4566,
                      "end": 4568
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4563,
                    "end": 4568
                  }
                ],
                "start": 4555,
                "end": 4570
              }
            ],
            "start": 4500,
            "end": 4571
          },
          "definite": false,
          "start": 4494,
          "end": 4571
        }
      ],
      "declare": false,
      "start": 4490,
      "end": 4572
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
            "name": "a9f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A92",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4590,
                  "end": 4593
                },
                "typeArguments": null,
                "start": 4590,
                "end": 4593
              },
              "start": 4588,
              "end": 4593
            },
            "start": 4585,
            "end": 4593
          },
          "init": null,
          "definite": false,
          "start": 4585,
          "end": 4593
        }
      ],
      "declare": true,
      "start": 4573,
      "end": 4594
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
            "name": "a9d",
            "optional": false,
            "typeAnnotation": null,
            "start": 4705,
            "end": 4708
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "someGenerics9",
              "optional": false,
              "typeAnnotation": null,
              "start": 4715,
              "end": 4728
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4731,
                      "end": 4732
                    },
                    "value": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 4734,
                      "end": 4735
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4731,
                    "end": 4735
                  }
                ],
                "start": 4729,
                "end": 4737
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4741,
                      "end": 4742
                    },
                    "value": {
                      "type": "Literal",
                      "value": 6,
                      "raw": "6",
                      "start": 4744,
                      "end": 4745
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4741,
                    "end": 4745
                  }
                ],
                "start": 4739,
                "end": 4747
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4751,
                      "end": 4752
                    },
                    "value": {
                      "type": "Literal",
                      "value": 6,
                      "raw": "6",
                      "start": 4754,
                      "end": 4755
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4751,
                    "end": 4755
                  }
                ],
                "start": 4749,
                "end": 4757
              }
            ],
            "start": 4711,
            "end": 4758
          },
          "definite": false,
          "start": 4705,
          "end": 4758
        }
      ],
      "declare": false,
      "start": 4701,
      "end": 4759
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
            "name": "a9d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4779,
                      "end": 4780
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4782,
                        "end": 4788
                      },
                      "start": 4780,
                      "end": 4788
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4779,
                    "end": 4789
                  }
                ],
                "start": 4777,
                "end": 4791
              },
              "start": 4775,
              "end": 4791
            },
            "start": 4772,
            "end": 4791
          },
          "init": null,
          "definite": false,
          "start": 4772,
          "end": 4791
        }
      ],
      "declare": true,
      "start": 4760,
      "end": 4792
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
            "name": "anyVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4907,
                "end": 4910
              },
              "start": 4905,
              "end": 4910
            },
            "start": 4899,
            "end": 4910
          },
          "init": null,
          "definite": false,
          "start": 4899,
          "end": 4910
        }
      ],
      "declare": true,
      "start": 4887,
      "end": 4911
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4916,
            "end": 4917
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "someGenerics9",
              "optional": false,
              "typeAnnotation": null,
              "start": 4924,
              "end": 4937
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 7,
                "raw": "7",
                "start": 4938,
                "end": 4939
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "anyVar",
                "optional": false,
                "typeAnnotation": null,
                "start": 4941,
                "end": 4947
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 4949,
                "end": 4950
              }
            ],
            "start": 4920,
            "end": 4951
          },
          "definite": false,
          "start": 4916,
          "end": 4951
        }
      ],
      "declare": false,
      "start": 4912,
      "end": 4952
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4968,
                "end": 4971
              },
              "start": 4966,
              "end": 4971
            },
            "start": 4965,
            "end": 4971
          },
          "init": null,
          "definite": false,
          "start": 4965,
          "end": 4971
        }
      ],
      "declare": true,
      "start": 4953,
      "end": 4972
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 5087,
            "end": 5090
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "someGenerics9",
              "optional": false,
              "typeAnnotation": null,
              "start": 5097,
              "end": 5110
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 5111,
                "end": 5113
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 5115,
                "end": 5119
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 5121,
                "end": 5130
              }
            ],
            "start": 5093,
            "end": 5131
          },
          "definite": false,
          "start": 5087,
          "end": 5131
        }
      ],
      "declare": false,
      "start": 5083,
      "end": 5132
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 5150,
                  "end": 5153
                },
                "start": 5150,
                "end": 5155
              },
              "start": 5148,
              "end": 5155
            },
            "start": 5145,
            "end": 5155
          },
          "init": null,
          "definite": false,
          "start": 5145,
          "end": 5155
        }
      ],
      "declare": true,
      "start": 5133,
      "end": 5156
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 35,
  "end": 5157
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 35,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "NoParams",
    "start": 45,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 73,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 81,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "noParams",
    "start": 85,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "NoParams",
    "start": 95,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 105,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "noParams",
    "start": 109,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "new",
    "start": 121,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "noParams",
    "start": 125,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 145,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "noParams",
    "start": 149,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 231,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "noGenericParams",
    "start": 241,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 263,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 274,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
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
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 285,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 293,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "noGenericParams",
    "start": 297,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "noGenericParams",
    "start": 314,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 331,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "noGenericParams",
    "start": 335,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351
  },
  {
    "type": "String",
    "value": "''",
    "start": 351,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 356,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "noGenericParams",
    "start": 360,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 376,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 383,
    "end": 384
  },
  {
    "type": "String",
    "value": "''",
    "start": 384,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 389,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "noGenericParams",
    "start": 393,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 412,
    "end": 413
  },
  {
    "type": "String",
    "value": "''",
    "start": 413,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 512,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "someGenerics1",
    "start": 522,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 536,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 542,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 562,
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
    "type": "Punctuator",
    "value": "}",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 573,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 581,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "someGenerics1",
    "start": 585,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "someGenerics1",
    "start": 600,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 613,
    "end": 614
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 615,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "someGenerics1",
    "start": 619,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 632,
    "end": 633
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 634,
    "end": 635
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 640,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "someGenerics1",
    "start": 644,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 658,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 666,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 673,
    "end": 674
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 675,
    "end": 676
  },
  {
    "type": "Numeric",
    "value": "4",
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
    "value": ";",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 690,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "someGenerics1",
    "start": 694,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 708,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 719,
    "end": 720
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 721,
    "end": 722
  },
  {
    "type": "Numeric",
    "value": "4",
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
    "value": ";",
    "start": 725,
    "end": 726
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 817,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "someGenerics2a",
    "start": 827,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 842,
    "end": 843
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 848,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 866,
    "end": 868
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 869,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 878,
    "end": 885
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 886,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "someGenerics2a",
    "start": 890,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "someGenerics2a",
    "start": 906,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 920,
    "end": 921
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 922,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "someGenerics2a",
    "start": 926,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 945,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 953,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 958,
    "end": 959
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 960,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "someGenerics2a",
    "start": 964,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 979,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 991,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 999,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1006,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "someGenerics2a",
    "start": 1010,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1025,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1037,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "substr",
    "start": 1042,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1055,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "someGenerics2b",
    "start": 1065,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1086,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1113,
    "end": 1115
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1116,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1125,
    "end": 1132
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1133,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "someGenerics2b",
    "start": 1137,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "someGenerics2b",
    "start": 1153,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1169,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "someGenerics2b",
    "start": 1173,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1192,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1203,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1211,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1218,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "someGenerics2b",
    "start": 1222,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1237,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1245,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1257,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1268,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1276,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1283,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "someGenerics2b",
    "start": 1287,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1302,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1310,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1325,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "substr",
    "start": 1330,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1481,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "someGenerics3",
    "start": 1491,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1511,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "producer",
    "start": 1519,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1532,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1541,
    "end": 1548
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1549,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "someGenerics3",
    "start": 1553,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "someGenerics3",
    "start": 1568,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1583,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "someGenerics3",
    "start": 1587,
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
    "value": "(",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1604,
    "end": 1606
  },
  {
    "type": "String",
    "value": "''",
    "start": 1607,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1612,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "someGenerics3",
    "start": 1616,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 1630,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1641,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1644,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1656,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "someGenerics3",
    "start": 1660,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1674,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1685,
    "end": 1687
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "interface",
    "start": 1834,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "someGenerics4",
    "start": 1844,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1864,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1891,
    "end": 1893
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1894,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1903,
    "end": 1910
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1911,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "someGenerics4",
    "start": 1915,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Identifier",
    "value": "someGenerics4",
    "start": 1930,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1945,
    "end": 1948
  },
  {
    "type": "Identifier",
    "value": "someGenerics4",
    "start": 1949,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1969,
    "end": 1971
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1972,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1979,
    "end": 1982
  },
  {
    "type": "Identifier",
    "value": "someGenerics4",
    "start": 1983,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1997,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2005,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "String",
    "value": "''",
    "start": 2013,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2020,
    "end": 2022
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2027,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "someGenerics4",
    "start": 2031,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2045,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2053,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "String",
    "value": "''",
    "start": 2061,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2069,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2077,
    "end": 2079
  },
  {
    "type": "String",
    "value": "''",
    "start": 2080,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2094,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "someGenerics4",
    "start": 2098,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2112,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2120,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2128,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2134,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2283,
    "end": 2292
  },
  {
    "type": "Identifier",
    "value": "someGenerics5",
    "start": 2293,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2313,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2340,
    "end": 2342
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2343,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2352,
    "end": 2359
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2360,
    "end": 2363
  },
  {
    "type": "Identifier",
    "value": "someGenerics5",
    "start": 2364,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Identifier",
    "value": "someGenerics5",
    "start": 2379,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2394,
    "end": 2397
  },
  {
    "type": "Identifier",
    "value": "someGenerics5",
    "start": 2398,
    "end": 2411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2418,
    "end": 2420
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2421,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2428,
    "end": 2431
  },
  {
    "type": "Identifier",
    "value": "someGenerics5",
    "start": 2432,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2446,
    "end": 2452
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2454,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "String",
    "value": "''",
    "start": 2462,
    "end": 2464
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2464,
    "end": 2465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2469,
    "end": 2471
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2474,
    "end": 2475
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2476,
    "end": 2479
  },
  {
    "type": "Identifier",
    "value": "someGenerics5",
    "start": 2480,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2494,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2502,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2509,
    "end": 2510
  },
  {
    "type": "String",
    "value": "''",
    "start": 2510,
    "end": 2512
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2518,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2526,
    "end": 2528
  },
  {
    "type": "String",
    "value": "''",
    "start": 2529,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2543,
    "end": 2546
  },
  {
    "type": "Identifier",
    "value": "someGenerics5",
    "start": 2547,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2560,
    "end": 2561
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2561,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2567,
    "end": 2568
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2569,
    "end": 2575
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2577,
    "end": 2581
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2583,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2700,
    "end": 2709
  },
  {
    "type": "Identifier",
    "value": "someGenerics6",
    "start": 2710,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2730,
    "end": 2733
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2746,
    "end": 2747
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2748,
    "end": 2750
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2751,
    "end": 2752
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2752,
    "end": 2753
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2754,
    "end": 2755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2755,
    "end": 2756
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2759,
    "end": 2760
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2761,
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
    "value": "=>",
    "start": 2764,
    "end": 2766
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2767,
    "end": 2768
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2768,
    "end": 2769
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2773,
    "end": 2774
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2774,
    "end": 2775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2780,
    "end": 2782
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2784,
    "end": 2785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2785,
    "end": 2786
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2787,
    "end": 2788
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2789,
    "end": 2796
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2797,
    "end": 2800
  },
  {
    "type": "Identifier",
    "value": "someGenerics6",
    "start": 2801,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "Identifier",
    "value": "someGenerics6",
    "start": 2816,
    "end": 2829
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2829,
    "end": 2830
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2831,
    "end": 2834
  },
  {
    "type": "Identifier",
    "value": "someGenerics6",
    "start": 2835,
    "end": 2848
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2851,
    "end": 2853
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2854,
    "end": 2855
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2859,
    "end": 2861
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2862,
    "end": 2863
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2863,
    "end": 2864
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2865,
    "end": 2866
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2867,
    "end": 2869
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2870,
    "end": 2871
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2874,
    "end": 2877
  },
  {
    "type": "Identifier",
    "value": "someGenerics6",
    "start": 2878,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2891,
    "end": 2892
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2892,
    "end": 2898
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2898,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2902,
    "end": 2904
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2906,
    "end": 2907
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2910,
    "end": 2912
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2913,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2914,
    "end": 2915
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2918,
    "end": 2920
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2922,
    "end": 2923
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2923,
    "end": 2924
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2925,
    "end": 2928
  },
  {
    "type": "Identifier",
    "value": "someGenerics6",
    "start": 2929,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2943,
    "end": 2949
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2949,
    "end": 2950
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2950,
    "end": 2951
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2951,
    "end": 2952
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2955,
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
    "type": "Identifier",
    "value": "n",
    "start": 2966,
    "end": 2967
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2970,
    "end": 2971
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2973,
    "end": 2979
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2981,
    "end": 2983
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2985,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2987,
    "end": 2988
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2988,
    "end": 2989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2991,
    "end": 2997
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2997,
    "end": 2998
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2999,
    "end": 3001
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3004,
    "end": 3005
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3015,
    "end": 3018
  },
  {
    "type": "Identifier",
    "value": "someGenerics6",
    "start": 3019,
    "end": 3032
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3032,
    "end": 3033
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3033,
    "end": 3039
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3040,
    "end": 3041
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3042,
    "end": 3043
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3043,
    "end": 3044
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3045,
    "end": 3051
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3051,
    "end": 3052
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3053,
    "end": 3055
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3057,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3060,
    "end": 3061
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3061,
    "end": 3062
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3063,
    "end": 3069
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3069,
    "end": 3070
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3071,
    "end": 3073
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3074,
    "end": 3075
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3075,
    "end": 3076
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3077,
    "end": 3078
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3078,
    "end": 3079
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3079,
    "end": 3080
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3081,
    "end": 3087
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3089,
    "end": 3091
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "value": ";",
    "start": 3094,
    "end": 3095
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3207,
    "end": 3216
  },
  {
    "type": "Identifier",
    "value": "someGenerics7",
    "start": 3217,
    "end": 3230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3231,
    "end": 3232
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3237,
    "end": 3240
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3241,
    "end": 3242
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3242,
    "end": 3243
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3243,
    "end": 3244
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3245,
    "end": 3246
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3246,
    "end": 3247
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3248,
    "end": 3249
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3250,
    "end": 3251
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3251,
    "end": 3252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3252,
    "end": 3253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3254,
    "end": 3255
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3255,
    "end": 3256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3256,
    "end": 3257
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3258,
    "end": 3259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3259,
    "end": 3260
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3261,
    "end": 3263
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3264,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3265,
    "end": 3266
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3267,
    "end": 3268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3268,
    "end": 3269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3270,
    "end": 3271
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3271,
    "end": 3272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3272,
    "end": 3273
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3274,
    "end": 3275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3275,
    "end": 3276
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3277,
    "end": 3279
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3281,
    "end": 3282
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3283,
    "end": 3284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3284,
    "end": 3285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3286,
    "end": 3287
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3287,
    "end": 3288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3288,
    "end": 3289
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3291,
    "end": 3292
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3293,
    "end": 3295
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3296,
    "end": 3297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3297,
    "end": 3298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3298,
    "end": 3299
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3300,
    "end": 3301
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3302,
    "end": 3309
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3310,
    "end": 3313
  },
  {
    "type": "Identifier",
    "value": "someGenerics7",
    "start": 3314,
    "end": 3327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3327,
    "end": 3328
  },
  {
    "type": "Identifier",
    "value": "someGenerics7",
    "start": 3329,
    "end": 3342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3342,
    "end": 3343
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3344,
    "end": 3347
  },
  {
    "type": "Identifier",
    "value": "someGenerics7",
    "start": 3348,
    "end": 3361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3361,
    "end": 3362
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3362,
    "end": 3363
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3364,
    "end": 3366
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3367,
    "end": 3368
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3368,
    "end": 3369
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3372,
    "end": 3374
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3375,
    "end": 3376
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3376,
    "end": 3377
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3378,
    "end": 3379
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3380,
    "end": 3382
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3383,
    "end": 3384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3384,
    "end": 3385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3387,
    "end": 3390
  },
  {
    "type": "Identifier",
    "value": "someGenerics7",
    "start": 3391,
    "end": 3404
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3404,
    "end": 3405
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3405,
    "end": 3411
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3411,
    "end": 3412
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3413,
    "end": 3419
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3421,
    "end": 3427
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3427,
    "end": 3428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3428,
    "end": 3429
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3429,
    "end": 3430
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3431,
    "end": 3433
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3434,
    "end": 3435
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3435,
    "end": 3436
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3437,
    "end": 3438
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3439,
    "end": 3441
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3443,
    "end": 3444
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3445,
    "end": 3446
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3447,
    "end": 3449
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3451,
    "end": 3452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3452,
    "end": 3453
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3454,
    "end": 3457
  },
  {
    "type": "Identifier",
    "value": "someGenerics7",
    "start": 3458,
    "end": 3471
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3471,
    "end": 3472
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3472,
    "end": 3478
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3478,
    "end": 3479
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3480,
    "end": 3486
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3486,
    "end": 3487
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3488,
    "end": 3494
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3494,
    "end": 3495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3495,
    "end": 3496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3497,
    "end": 3498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3498,
    "end": 3499
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3500,
    "end": 3506
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3506,
    "end": 3507
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3508,
    "end": 3510
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3511,
    "end": 3512
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3512,
    "end": 3513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3514,
    "end": 3515
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3515,
    "end": 3516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3516,
    "end": 3517
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3518,
    "end": 3524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3524,
    "end": 3525
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3526,
    "end": 3528
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3529,
    "end": 3530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3530,
    "end": 3531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3532,
    "end": 3533
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3533,
    "end": 3534
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3534,
    "end": 3535
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3536,
    "end": 3542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3542,
    "end": 3543
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3544,
    "end": 3546
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3547,
    "end": 3548
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3548,
    "end": 3549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3549,
    "end": 3550
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3607,
    "end": 3616
  },
  {
    "type": "Identifier",
    "value": "someGenerics8",
    "start": 3617,
    "end": 3630
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3631,
    "end": 3632
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3637,
    "end": 3640
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3641,
    "end": 3642
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3642,
    "end": 3643
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3643,
    "end": 3644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3644,
    "end": 3645
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3645,
    "end": 3646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3646,
    "end": 3647
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3648,
    "end": 3649
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3649,
    "end": 3650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3650,
    "end": 3651
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3652,
    "end": 3653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3653,
    "end": 3654
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3655,
    "end": 3656
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3657,
    "end": 3664
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3665,
    "end": 3668
  },
  {
    "type": "Identifier",
    "value": "someGenerics8",
    "start": 3669,
    "end": 3682
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3682,
    "end": 3683
  },
  {
    "type": "Identifier",
    "value": "someGenerics8",
    "start": 3684,
    "end": 3697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3697,
    "end": 3698
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3699,
    "end": 3702
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3703,
    "end": 3704
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3705,
    "end": 3706
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3707,
    "end": 3710
  },
  {
    "type": "Identifier",
    "value": "someGenerics8",
    "start": 3711,
    "end": 3724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3724,
    "end": 3725
  },
  {
    "type": "Identifier",
    "value": "someGenerics7",
    "start": 3725,
    "end": 3738
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3738,
    "end": 3739
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3739,
    "end": 3740
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3741,
    "end": 3744
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3745,
    "end": 3746
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3746,
    "end": 3747
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3747,
    "end": 3753
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3753,
    "end": 3754
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3755,
    "end": 3761
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3761,
    "end": 3762
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3763,
    "end": 3769
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3769,
    "end": 3770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3770,
    "end": 3771
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3771,
    "end": 3775
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3775,
    "end": 3776
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3777,
    "end": 3781
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3781,
    "end": 3782
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3783,
    "end": 3787
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3787,
    "end": 3788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3788,
    "end": 3789
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3890,
    "end": 3899
  },
  {
    "type": "Identifier",
    "value": "someGenerics9",
    "start": 3900,
    "end": 3913
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3914,
    "end": 3915
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3920,
    "end": 3923
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3924,
    "end": 3925
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3925,
    "end": 3926
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3926,
    "end": 3927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3927,
    "end": 3928
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3928,
    "end": 3929
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3929,
    "end": 3930
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3931,
    "end": 3932
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3932,
    "end": 3933
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3934,
    "end": 3935
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3935,
    "end": 3936
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3937,
    "end": 3938
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3938,
    "end": 3939
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3940,
    "end": 3941
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3941,
    "end": 3942
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3943,
    "end": 3944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3944,
    "end": 3945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3945,
    "end": 3946
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3947,
    "end": 3948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3948,
    "end": 3949
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3950,
    "end": 3951
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3952,
    "end": 3959
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3960,
    "end": 3963
  },
  {
    "type": "Identifier",
    "value": "someGenerics9",
    "start": 3964,
    "end": 3977
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3977,
    "end": 3978
  },
  {
    "type": "Identifier",
    "value": "someGenerics9",
    "start": 3979,
    "end": 3992
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3992,
    "end": 3993
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3994,
    "end": 3997
  },
  {
    "type": "Identifier",
    "value": "a9a",
    "start": 3998,
    "end": 4001
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4002,
    "end": 4003
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4004,
    "end": 4007
  },
  {
    "type": "Identifier",
    "value": "someGenerics9",
    "start": 4008,
    "end": 4021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4021,
    "end": 4022
  },
  {
    "type": "String",
    "value": "''",
    "start": 4022,
    "end": 4024
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4024,
    "end": 4025
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4026,
    "end": 4027
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4027,
    "end": 4028
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4029,
    "end": 4030
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4030,
    "end": 4031
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4031,
    "end": 4032
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4032,
    "end": 4033
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4034,
    "end": 4041
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4042,
    "end": 4045
  },
  {
    "type": "Identifier",
    "value": "a9a",
    "start": 4046,
    "end": 4049
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4049,
    "end": 4050
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4051,
    "end": 4052
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4052,
    "end": 4053
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4053,
    "end": 4054
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4055,
    "end": 4058
  },
  {
    "type": "Identifier",
    "value": "a9b",
    "start": 4059,
    "end": 4062
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4063,
    "end": 4064
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4065,
    "end": 4068
  },
  {
    "type": "Identifier",
    "value": "someGenerics9",
    "start": 4069,
    "end": 4082
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4082,
    "end": 4083
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4083,
    "end": 4084
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4085,
    "end": 4086
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4086,
    "end": 4087
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4087,
    "end": 4088
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4089,
    "end": 4095
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4095,
    "end": 4096
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4097,
    "end": 4098
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4098,
    "end": 4099
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4099,
    "end": 4100
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4101,
    "end": 4107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4107,
    "end": 4108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4109,
    "end": 4110
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4110,
    "end": 4111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4111,
    "end": 4112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4112,
    "end": 4113
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4114,
    "end": 4115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4115,
    "end": 4116
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4117,
    "end": 4118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4119,
    "end": 4120
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4120,
    "end": 4121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4122,
    "end": 4123
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4124,
    "end": 4125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4125,
    "end": 4126
  },
  {
    "type": "String",
    "value": "''",
    "start": 4127,
    "end": 4129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4130,
    "end": 4131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4131,
    "end": 4132
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4133,
    "end": 4137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4137,
    "end": 4138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4138,
    "end": 4139
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4140,
    "end": 4147
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4148,
    "end": 4151
  },
  {
    "type": "Identifier",
    "value": "a9b",
    "start": 4152,
    "end": 4155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4155,
    "end": 4156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4157,
    "end": 4158
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4159,
    "end": 4160
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4160,
    "end": 4161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4161,
    "end": 4162
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4163,
    "end": 4169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4169,
    "end": 4170
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4171,
    "end": 4172
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4172,
    "end": 4173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4173,
    "end": 4174
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4175,
    "end": 4181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4181,
    "end": 4182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4183,
    "end": 4184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4184,
    "end": 4185
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4293,
    "end": 4302
  },
  {
    "type": "Identifier",
    "value": "A91",
    "start": 4303,
    "end": 4306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4307,
    "end": 4308
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4313,
    "end": 4314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4314,
    "end": 4315
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4316,
    "end": 4322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4322,
    "end": 4323
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4328,
    "end": 4329
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4329,
    "end": 4330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4330,
    "end": 4331
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4332,
    "end": 4338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4338,
    "end": 4339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4340,
    "end": 4341
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4342,
    "end": 4351
  },
  {
    "type": "Identifier",
    "value": "A92",
    "start": 4352,
    "end": 4355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4356,
    "end": 4357
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4362,
    "end": 4363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4363,
    "end": 4364
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4365,
    "end": 4371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4371,
    "end": 4372
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 4377,
    "end": 4378
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4378,
    "end": 4379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4379,
    "end": 4380
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 4381,
    "end": 4387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4387,
    "end": 4388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4389,
    "end": 4390
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4391,
    "end": 4394
  },
  {
    "type": "Identifier",
    "value": "a9e",
    "start": 4395,
    "end": 4398
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4399,
    "end": 4400
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4401,
    "end": 4404
  },
  {
    "type": "Identifier",
    "value": "someGenerics9",
    "start": 4405,
    "end": 4418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4418,
    "end": 4419
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4419,
    "end": 4428
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4428,
    "end": 4429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4430,
    "end": 4431
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4432,
    "end": 4433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4433,
    "end": 4434
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 4435,
    "end": 4436
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4436,
    "end": 4437
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 4438,
    "end": 4439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4439,
    "end": 4440
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 4441,
    "end": 4447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4448,
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
    "value": "{",
    "start": 4451,
    "end": 4452
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4453,
    "end": 4454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4454,
    "end": 4455
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 4456,
    "end": 4457
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4457,
    "end": 4458
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4459,
    "end": 4460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4460,
    "end": 4461
  },
  {
    "type": "String",
    "value": "''",
    "start": 4462,
    "end": 4464
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
    "type": "Identifier",
    "value": "declare",
    "start": 4469,
    "end": 4476
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4477,
    "end": 4480
  },
  {
    "type": "Identifier",
    "value": "a9e",
    "start": 4481,
    "end": 4484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4484,
    "end": 4485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4486,
    "end": 4487
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4487,
    "end": 4488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4488,
    "end": 4489
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4490,
    "end": 4493
  },
  {
    "type": "Identifier",
    "value": "a9f",
    "start": 4494,
    "end": 4497
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4498,
    "end": 4499
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4500,
    "end": 4503
  },
  {
    "type": "Identifier",
    "value": "someGenerics9",
    "start": 4504,
    "end": 4517
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4517,
    "end": 4518
  },
  {
    "type": "Identifier",
    "value": "A92",
    "start": 4518,
    "end": 4521
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4521,
    "end": 4522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4522,
    "end": 4523
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4523,
    "end": 4532
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4532,
    "end": 4533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4534,
    "end": 4535
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4536,
    "end": 4537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4537,
    "end": 4538
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 4539,
    "end": 4540
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4540,
    "end": 4541
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 4542,
    "end": 4543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4543,
    "end": 4544
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 4545,
    "end": 4551
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4552,
    "end": 4553
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4553,
    "end": 4554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4555,
    "end": 4556
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4557,
    "end": 4558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4558,
    "end": 4559
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 4560,
    "end": 4561
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4561,
    "end": 4562
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4563,
    "end": 4564
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4564,
    "end": 4565
  },
  {
    "type": "String",
    "value": "''",
    "start": 4566,
    "end": 4568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4569,
    "end": 4570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4570,
    "end": 4571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4571,
    "end": 4572
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4573,
    "end": 4580
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4581,
    "end": 4584
  },
  {
    "type": "Identifier",
    "value": "a9f",
    "start": 4585,
    "end": 4588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4588,
    "end": 4589
  },
  {
    "type": "Identifier",
    "value": "A92",
    "start": 4590,
    "end": 4593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4593,
    "end": 4594
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4701,
    "end": 4704
  },
  {
    "type": "Identifier",
    "value": "a9d",
    "start": 4705,
    "end": 4708
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4709,
    "end": 4710
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4711,
    "end": 4714
  },
  {
    "type": "Identifier",
    "value": "someGenerics9",
    "start": 4715,
    "end": 4728
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4728,
    "end": 4729
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4729,
    "end": 4730
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4731,
    "end": 4732
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4732,
    "end": 4733
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 4734,
    "end": 4735
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4736,
    "end": 4737
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4737,
    "end": 4738
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4739,
    "end": 4740
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4741,
    "end": 4742
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4742,
    "end": 4743
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 4744,
    "end": 4745
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4746,
    "end": 4747
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4747,
    "end": 4748
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4749,
    "end": 4750
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4751,
    "end": 4752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4752,
    "end": 4753
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 4754,
    "end": 4755
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4756,
    "end": 4757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4757,
    "end": 4758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4758,
    "end": 4759
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4760,
    "end": 4767
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4768,
    "end": 4771
  },
  {
    "type": "Identifier",
    "value": "a9d",
    "start": 4772,
    "end": 4775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4775,
    "end": 4776
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4777,
    "end": 4778
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4779,
    "end": 4780
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4780,
    "end": 4781
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4782,
    "end": 4788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4788,
    "end": 4789
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4790,
    "end": 4791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4791,
    "end": 4792
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4887,
    "end": 4894
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4895,
    "end": 4898
  },
  {
    "type": "Identifier",
    "value": "anyVar",
    "start": 4899,
    "end": 4905
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4905,
    "end": 4906
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4907,
    "end": 4910
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4910,
    "end": 4911
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4912,
    "end": 4915
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4916,
    "end": 4917
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4918,
    "end": 4919
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4920,
    "end": 4923
  },
  {
    "type": "Identifier",
    "value": "someGenerics9",
    "start": 4924,
    "end": 4937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4937,
    "end": 4938
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 4938,
    "end": 4939
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4939,
    "end": 4940
  },
  {
    "type": "Identifier",
    "value": "anyVar",
    "start": 4941,
    "end": 4947
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4947,
    "end": 4948
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 4949,
    "end": 4950
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4950,
    "end": 4951
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4951,
    "end": 4952
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4953,
    "end": 4960
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4961,
    "end": 4964
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4965,
    "end": 4966
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4966,
    "end": 4967
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4968,
    "end": 4971
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4971,
    "end": 4972
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5083,
    "end": 5086
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 5087,
    "end": 5090
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5091,
    "end": 5092
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5093,
    "end": 5096
  },
  {
    "type": "Identifier",
    "value": "someGenerics9",
    "start": 5097,
    "end": 5110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5110,
    "end": 5111
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5111,
    "end": 5112
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5112,
    "end": 5113
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5113,
    "end": 5114
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5115,
    "end": 5119
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5119,
    "end": 5120
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5121,
    "end": 5130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5130,
    "end": 5131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5131,
    "end": 5132
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5133,
    "end": 5140
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5141,
    "end": 5144
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 5145,
    "end": 5148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5148,
    "end": 5149
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 5150,
    "end": 5153
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5153,
    "end": 5154
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5154,
    "end": 5155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5155,
    "end": 5156
  }
]
```

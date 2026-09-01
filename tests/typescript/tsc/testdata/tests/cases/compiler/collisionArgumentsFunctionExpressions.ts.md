__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
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
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 32
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 44,
                    "end": 50
                  },
                  "start": 42,
                  "end": 50
                },
                "start": 33,
                "end": 50
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "restParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 55,
                  "end": 69
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 52,
                "end": 69
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
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 106,
                        "end": 115
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 118,
                        "end": 120
                      },
                      "definite": false,
                      "start": 106,
                      "end": 120
                    }
                  ],
                  "declare": false,
                  "start": 102,
                  "end": 121
                }
              ],
              "start": 71,
              "end": 139
            },
            "expression": false,
            "start": 21,
            "end": 139
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f12",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 156
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 160,
                    "end": 166
                  },
                  "start": 158,
                  "end": 166
                },
                "start": 157,
                "end": 166
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 171,
                  "end": 180
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 168,
                "end": 180
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
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 228,
                              "end": 231
                            },
                            "start": 228,
                            "end": 233
                          },
                          "start": 226,
                          "end": 233
                        },
                        "start": 217,
                        "end": 233
                      },
                      "init": null,
                      "definite": false,
                      "start": 217,
                      "end": 233
                    }
                  ],
                  "declare": false,
                  "start": 213,
                  "end": 234
                }
              ],
              "start": 182,
              "end": 252
            },
            "expression": false,
            "start": 144,
            "end": 252
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1NoError",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 275
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 287,
                    "end": 293
                  },
                  "start": 285,
                  "end": 293
                },
                "start": 276,
                "end": 293
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
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 321,
                        "end": 330
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 333,
                        "end": 335
                      },
                      "definite": false,
                      "start": 321,
                      "end": 335
                    }
                  ],
                  "declare": false,
                  "start": 317,
                  "end": 336
                }
              ],
              "start": 295,
              "end": 354
            },
            "expression": false,
            "start": 257,
            "end": 354
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 369,
              "end": 371
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "restParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 375,
                  "end": 389
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 372,
                "end": 389
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
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 405,
                        "end": 414
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 417,
                        "end": 419
                      },
                      "definite": false,
                      "start": 405,
                      "end": 419
                    }
                  ],
                  "declare": false,
                  "start": 401,
                  "end": 420
                }
              ],
              "start": 391,
              "end": 438
            },
            "expression": false,
            "start": 360,
            "end": 438
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3NoError",
              "optional": false,
              "typeAnnotation": null,
              "start": 452,
              "end": 461
            },
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
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 478,
                        "end": 487
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 490,
                        "end": 492
                      },
                      "definite": false,
                      "start": 478,
                      "end": 492
                    }
                  ],
                  "declare": false,
                  "start": 474,
                  "end": 493
                }
              ],
              "start": 464,
              "end": 511
            },
            "expression": false,
            "start": 443,
            "end": 511
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 526,
              "end": 528
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 540,
                    "end": 546
                  },
                  "start": 538,
                  "end": 546
                },
                "start": 529,
                "end": 546
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 551,
                  "end": 555
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 548,
                "end": 555
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 517,
            "end": 557
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 594,
              "end": 596
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 608,
                    "end": 614
                  },
                  "start": 606,
                  "end": 614
                },
                "start": 597,
                "end": 614
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 619,
                  "end": 623
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 616,
                "end": 623
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 585,
            "end": 625
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 662,
              "end": 664
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 676,
                    "end": 679
                  },
                  "start": 674,
                  "end": 679
                },
                "start": 665,
                "end": 679
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 684,
                  "end": 688
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 681,
                "end": 688
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
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 724,
                            "end": 727
                          },
                          "start": 722,
                          "end": 727
                        },
                        "start": 713,
                        "end": 727
                      },
                      "init": null,
                      "definite": false,
                      "start": 713,
                      "end": 727
                    }
                  ],
                  "declare": false,
                  "start": 709,
                  "end": 728
                }
              ],
              "start": 690,
              "end": 746
            },
            "expression": false,
            "start": 653,
            "end": 746
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f42",
              "optional": false,
              "typeAnnotation": null,
              "start": 760,
              "end": 763
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 767,
                    "end": 773
                  },
                  "start": 765,
                  "end": 773
                },
                "start": 764,
                "end": 773
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 778,
                  "end": 787
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 775,
                "end": 787
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 751,
            "end": 789
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f42",
              "optional": false,
              "typeAnnotation": null,
              "start": 826,
              "end": 829
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 833,
                    "end": 839
                  },
                  "start": 831,
                  "end": 839
                },
                "start": 830,
                "end": 839
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 844,
                  "end": 853
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 841,
                "end": 853
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 817,
            "end": 855
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f42",
              "optional": false,
              "typeAnnotation": null,
              "start": 892,
              "end": 895
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 899,
                    "end": 902
                  },
                  "start": 897,
                  "end": 902
                },
                "start": 896,
                "end": 902
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 907,
                  "end": 916
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 904,
                "end": 916
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
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 952,
                              "end": 955
                            },
                            "start": 952,
                            "end": 957
                          },
                          "start": 950,
                          "end": 957
                        },
                        "start": 941,
                        "end": 957
                      },
                      "init": null,
                      "definite": false,
                      "start": 941,
                      "end": 957
                    }
                  ],
                  "declare": false,
                  "start": 937,
                  "end": 958
                }
              ],
              "start": 918,
              "end": 976
            },
            "expression": false,
            "start": 883,
            "end": 976
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null,
              "start": 990,
              "end": 999
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1011,
                    "end": 1017
                  },
                  "start": 1009,
                  "end": 1017
                },
                "start": 1000,
                "end": 1017
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 981,
            "end": 1019
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null,
              "start": 1045,
              "end": 1054
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1066,
                    "end": 1072
                  },
                  "start": 1064,
                  "end": 1072
                },
                "start": 1055,
                "end": 1072
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 1036,
            "end": 1074
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null,
              "start": 1100,
              "end": 1109
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1121,
                    "end": 1124
                  },
                  "start": 1119,
                  "end": 1124
                },
                "start": 1110,
                "end": 1124
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
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1163,
                            "end": 1166
                          },
                          "start": 1161,
                          "end": 1166
                        },
                        "start": 1152,
                        "end": 1166
                      },
                      "init": null,
                      "definite": false,
                      "start": 1152,
                      "end": 1166
                    }
                  ],
                  "declare": false,
                  "start": 1148,
                  "end": 1167
                }
              ],
              "start": 1126,
              "end": 1185
            },
            "expression": false,
            "start": 1091,
            "end": 1185
          }
        ],
        "start": 15,
        "end": 1187
      },
      "expression": false,
      "start": 0,
      "end": 1187
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1187
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 21,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 30,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 33,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 44,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 52,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "restParameters",
    "start": 55,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "var",
    "start": 102,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 106,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 116,
    "end": 117
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 118,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 144,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 153,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 160,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 168,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 171,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 213,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 217,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 228,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 257,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "f1NoError",
    "start": 266,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 276,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 287,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 317,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 321,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 331,
    "end": 332
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 333,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 360,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 369,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 372,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "restParameters",
    "start": 375,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 401,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 405,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 415,
    "end": 416
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 417,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 443,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "f3NoError",
    "start": 452,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 464,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 474,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 478,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 488,
    "end": 489
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 490,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 510,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 517,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 526,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 529,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 540,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 548,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 551,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 585,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 594,
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
    "value": "arguments",
    "start": 597,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 608,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 616,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 619,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 624,
    "end": 625
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 653,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 662,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 665,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 676,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 681,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 684,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 690,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 709,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 713,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 724,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 745,
    "end": 746
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 751,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "f42",
    "start": 760,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 767,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 775,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 778,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 788,
    "end": 789
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 817,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "f42",
    "start": 826,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 833,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 841,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 844,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 854,
    "end": 855
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 883,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "f42",
    "start": 892,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 899,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 904,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 907,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 918,
    "end": 919
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 937,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 941,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 952,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 975,
    "end": 976
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 981,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "f4NoError",
    "start": 990,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1000,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1011,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 1036,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "f4NoError",
    "start": 1045,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1055,
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
    "value": "string",
    "start": 1066,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1091,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "f4NoError",
    "start": 1100,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1110,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1121,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1148,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1152,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1163,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1186,
    "end": 1187
  }
]
```

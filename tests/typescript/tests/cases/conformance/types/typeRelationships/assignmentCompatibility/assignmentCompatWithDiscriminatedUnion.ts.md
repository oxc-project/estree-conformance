__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example1",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 92
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 105
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
                    "name": "done",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 110,
                    "end": 114
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 116,
                      "end": 123
                    },
                    "start": 114,
                    "end": 123
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 110,
                  "end": 124
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 125,
                    "end": 130
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 132,
                      "end": 138
                    },
                    "start": 130,
                    "end": 138
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 125,
                  "end": 138
                }
              ],
              "start": 108,
              "end": 140
            },
            "declare": false,
            "start": 99,
            "end": 141
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 152
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
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
                        "name": "done",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 167,
                        "end": 171
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 173,
                            "end": 177
                          },
                          "start": 173,
                          "end": 177
                        },
                        "start": 171,
                        "end": 177
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 167,
                      "end": 178
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 179,
                        "end": 184
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 186,
                          "end": 192
                        },
                        "start": 184,
                        "end": 192
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 179,
                      "end": 192
                    }
                  ],
                  "start": 165,
                  "end": 194
                },
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
                        "name": "done",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 217,
                        "end": 221
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 223,
                            "end": 228
                          },
                          "start": 223,
                          "end": 228
                        },
                        "start": 221,
                        "end": 228
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 217,
                      "end": 229
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 230,
                        "end": 235
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 237,
                          "end": 243
                        },
                        "start": 235,
                        "end": 243
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 230,
                      "end": 243
                    }
                  ],
                  "start": 215,
                  "end": 245
                }
              ],
              "start": 163,
              "end": 245
            },
            "declare": false,
            "start": 146,
            "end": 246
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 275,
                        "end": 276
                      },
                      "typeArguments": null,
                      "start": 275,
                      "end": 276
                    },
                    "start": 273,
                    "end": 276
                  },
                  "start": 272,
                  "end": 276
                },
                "init": null,
                "definite": false,
                "start": 272,
                "end": 276
              }
            ],
            "declare": true,
            "start": 260,
            "end": 277
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
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
                        "start": 297,
                        "end": 298
                      },
                      "typeArguments": null,
                      "start": 297,
                      "end": 298
                    },
                    "start": 295,
                    "end": 298
                  },
                  "start": 294,
                  "end": 298
                },
                "init": null,
                "definite": false,
                "start": 294,
                "end": 298
              }
            ],
            "declare": true,
            "start": 282,
            "end": 299
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 410,
                "end": 411
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 414,
                "end": 415
              },
              "start": 410,
              "end": 415
            },
            "directive": null,
            "start": 410,
            "end": 416
          }
        ],
        "start": 93,
        "end": 418
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 74,
      "end": 418
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example2",
        "optional": false,
        "typeAnnotation": null,
        "start": 460,
        "end": 468
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 480,
              "end": 481
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 486,
                    "end": 487
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 489,
                            "end": 490
                          },
                          "start": 489,
                          "end": 490
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 493,
                            "end": 494
                          },
                          "start": 493,
                          "end": 494
                        }
                      ],
                      "start": 489,
                      "end": 494
                    },
                    "start": 487,
                    "end": 494
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 486,
                  "end": 495
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 496,
                    "end": 497
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 499,
                        "end": 500
                      },
                      "start": 499,
                      "end": 500
                    },
                    "start": 497,
                    "end": 500
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 496,
                  "end": 500
                }
              ],
              "start": 484,
              "end": 502
            },
            "declare": false,
            "start": 475,
            "end": 503
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 513,
              "end": 514
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 519,
                        "end": 520
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 522,
                            "end": 523
                          },
                          "start": 522,
                          "end": 523
                        },
                        "start": 520,
                        "end": 523
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 519,
                      "end": 524
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 529,
                        "end": 530
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 532,
                                "end": 533
                              },
                              "start": 532,
                              "end": 533
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 4,
                                "raw": "4",
                                "start": 536,
                                "end": 537
                              },
                              "start": 536,
                              "end": 537
                            }
                          ],
                          "start": 532,
                          "end": 537
                        },
                        "start": 530,
                        "end": 537
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 529,
                      "end": 537
                    }
                  ],
                  "start": 517,
                  "end": 539
                },
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 565,
                        "end": 566
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 568,
                            "end": 569
                          },
                          "start": 568,
                          "end": 569
                        },
                        "start": 566,
                        "end": 569
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 565,
                      "end": 570
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 575,
                        "end": 576
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 578,
                            "end": 579
                          },
                          "start": 578,
                          "end": 579
                        },
                        "start": 576,
                        "end": 579
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 575,
                      "end": 579
                    }
                  ],
                  "start": 563,
                  "end": 581
                },
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 611,
                        "end": 612
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 614,
                            "end": 615
                          },
                          "start": 614,
                          "end": 615
                        },
                        "start": 612,
                        "end": 615
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 611,
                      "end": 616
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 621,
                        "end": 622
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3",
                                "start": 624,
                                "end": 625
                              },
                              "start": 624,
                              "end": 625
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 4,
                                "raw": "4",
                                "start": 628,
                                "end": 629
                              },
                              "start": 628,
                              "end": 629
                            }
                          ],
                          "start": 624,
                          "end": 629
                        },
                        "start": 622,
                        "end": 629
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 621,
                      "end": 629
                    }
                  ],
                  "start": 609,
                  "end": 631
                }
              ],
              "start": 517,
              "end": 631
            },
            "declare": false,
            "start": 508,
            "end": 632
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 661,
                        "end": 662
                      },
                      "typeArguments": null,
                      "start": 661,
                      "end": 662
                    },
                    "start": 659,
                    "end": 662
                  },
                  "start": 658,
                  "end": 662
                },
                "init": null,
                "definite": false,
                "start": 658,
                "end": 662
              }
            ],
            "declare": true,
            "start": 646,
            "end": 663
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
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
                        "start": 683,
                        "end": 684
                      },
                      "typeArguments": null,
                      "start": 683,
                      "end": 684
                    },
                    "start": 681,
                    "end": 684
                  },
                  "start": 680,
                  "end": 684
                },
                "init": null,
                "definite": false,
                "start": 680,
                "end": 684
              }
            ],
            "declare": true,
            "start": 668,
            "end": 685
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 783,
                "end": 784
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 787,
                "end": 788
              },
              "start": 783,
              "end": 788
            },
            "directive": null,
            "start": 783,
            "end": 789
          }
        ],
        "start": 469,
        "end": 791
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 450,
      "end": 791
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example3",
        "optional": false,
        "typeAnnotation": null,
        "start": 830,
        "end": 838
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 850,
              "end": 851
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 856,
                    "end": 857
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 859,
                            "end": 860
                          },
                          "start": 859,
                          "end": 860
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 863,
                            "end": 864
                          },
                          "start": 863,
                          "end": 864
                        }
                      ],
                      "start": 859,
                      "end": 864
                    },
                    "start": 857,
                    "end": 864
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 856,
                  "end": 865
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 866,
                    "end": 867
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 869,
                        "end": 870
                      },
                      "start": 869,
                      "end": 870
                    },
                    "start": 867,
                    "end": 870
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 866,
                  "end": 870
                }
              ],
              "start": 854,
              "end": 872
            },
            "declare": false,
            "start": 845,
            "end": 873
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 883,
              "end": 884
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 889,
                        "end": 890
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 892,
                            "end": 893
                          },
                          "start": 892,
                          "end": 893
                        },
                        "start": 890,
                        "end": 893
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 889,
                      "end": 894
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 899,
                        "end": 900
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 902,
                                "end": 903
                              },
                              "start": 902,
                              "end": 903
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 4,
                                "raw": "4",
                                "start": 906,
                                "end": 907
                              },
                              "start": 906,
                              "end": 907
                            }
                          ],
                          "start": 902,
                          "end": 907
                        },
                        "start": 900,
                        "end": 907
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 899,
                      "end": 907
                    }
                  ],
                  "start": 887,
                  "end": 909
                },
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 935,
                        "end": 936
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 938,
                            "end": 939
                          },
                          "start": 938,
                          "end": 939
                        },
                        "start": 936,
                        "end": 939
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 935,
                      "end": 940
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 945,
                        "end": 946
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 948,
                                "end": 949
                              },
                              "start": 948,
                              "end": 949
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 4,
                                "raw": "4",
                                "start": 952,
                                "end": 953
                              },
                              "start": 952,
                              "end": 953
                            }
                          ],
                          "start": 948,
                          "end": 953
                        },
                        "start": 946,
                        "end": 953
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 945,
                      "end": 953
                    }
                  ],
                  "start": 933,
                  "end": 955
                },
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 981,
                        "end": 982
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 984,
                            "end": 985
                          },
                          "start": 984,
                          "end": 985
                        },
                        "start": 982,
                        "end": 985
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 981,
                      "end": 986
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 991,
                        "end": 992
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 994,
                            "end": 995
                          },
                          "start": 994,
                          "end": 995
                        },
                        "start": 992,
                        "end": 995
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 991,
                      "end": 995
                    }
                  ],
                  "start": 979,
                  "end": 997
                }
              ],
              "start": 887,
              "end": 997
            },
            "declare": false,
            "start": 878,
            "end": 998
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1031,
                        "end": 1032
                      },
                      "typeArguments": null,
                      "start": 1031,
                      "end": 1032
                    },
                    "start": 1029,
                    "end": 1032
                  },
                  "start": 1028,
                  "end": 1032
                },
                "init": null,
                "definite": false,
                "start": 1028,
                "end": 1032
              }
            ],
            "declare": true,
            "start": 1016,
            "end": 1033
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
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
                        "start": 1053,
                        "end": 1054
                      },
                      "typeArguments": null,
                      "start": 1053,
                      "end": 1054
                    },
                    "start": 1051,
                    "end": 1054
                  },
                  "start": 1050,
                  "end": 1054
                },
                "init": null,
                "definite": false,
                "start": 1050,
                "end": 1054
              }
            ],
            "declare": true,
            "start": 1038,
            "end": 1055
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1211,
                "end": 1212
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1215,
                "end": 1216
              },
              "start": 1211,
              "end": 1216
            },
            "directive": null,
            "start": 1211,
            "end": 1217
          }
        ],
        "start": 839,
        "end": 1219
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 820,
      "end": 1219
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1262,
        "end": 1270
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1282,
              "end": 1283
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1288,
                    "end": 1289
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1291,
                            "end": 1292
                          },
                          "start": 1291,
                          "end": 1292
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1295,
                            "end": 1296
                          },
                          "start": 1295,
                          "end": 1296
                        }
                      ],
                      "start": 1291,
                      "end": 1296
                    },
                    "start": 1289,
                    "end": 1296
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1288,
                  "end": 1297
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1298,
                    "end": 1299
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 1301,
                        "end": 1302
                      },
                      "start": 1301,
                      "end": 1302
                    },
                    "start": 1299,
                    "end": 1302
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1298,
                  "end": 1302
                }
              ],
              "start": 1286,
              "end": 1304
            },
            "declare": false,
            "start": 1277,
            "end": 1305
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1315,
              "end": 1316
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1321,
                        "end": 1322
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1324,
                            "end": 1325
                          },
                          "start": 1324,
                          "end": 1325
                        },
                        "start": 1322,
                        "end": 1325
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1321,
                      "end": 1326
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1331,
                        "end": 1332
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 1334,
                                "end": 1335
                              },
                              "start": 1334,
                              "end": 1335
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 4,
                                "raw": "4",
                                "start": 1338,
                                "end": 1339
                              },
                              "start": 1338,
                              "end": 1339
                            }
                          ],
                          "start": 1334,
                          "end": 1339
                        },
                        "start": 1332,
                        "end": 1339
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1331,
                      "end": 1339
                    }
                  ],
                  "start": 1319,
                  "end": 1341
                },
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1375,
                        "end": 1376
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1378,
                            "end": 1379
                          },
                          "start": 1378,
                          "end": 1379
                        },
                        "start": 1376,
                        "end": 1379
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1375,
                      "end": 1380
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1385,
                        "end": 1386
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1388,
                            "end": 1389
                          },
                          "start": 1388,
                          "end": 1389
                        },
                        "start": 1386,
                        "end": 1389
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1385,
                      "end": 1389
                    }
                  ],
                  "start": 1373,
                  "end": 1391
                },
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1429,
                        "end": 1430
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1432,
                            "end": 1433
                          },
                          "start": 1432,
                          "end": 1433
                        },
                        "start": 1430,
                        "end": 1433
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1429,
                      "end": 1434
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1439,
                        "end": 1440
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3",
                                "start": 1442,
                                "end": 1443
                              },
                              "start": 1442,
                              "end": 1443
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 4,
                                "raw": "4",
                                "start": 1446,
                                "end": 1447
                              },
                              "start": 1446,
                              "end": 1447
                            }
                          ],
                          "start": 1442,
                          "end": 1447
                        },
                        "start": 1440,
                        "end": 1447
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1439,
                      "end": 1448
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1449,
                        "end": 1450
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1452,
                          "end": 1458
                        },
                        "start": 1450,
                        "end": 1458
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1449,
                      "end": 1458
                    }
                  ],
                  "start": 1427,
                  "end": 1460
                }
              ],
              "start": 1319,
              "end": 1460
            },
            "declare": false,
            "start": 1310,
            "end": 1461
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1487,
                        "end": 1488
                      },
                      "typeArguments": null,
                      "start": 1487,
                      "end": 1488
                    },
                    "start": 1485,
                    "end": 1488
                  },
                  "start": 1484,
                  "end": 1488
                },
                "init": null,
                "definite": false,
                "start": 1484,
                "end": 1488
              }
            ],
            "declare": true,
            "start": 1472,
            "end": 1489
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
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
                        "start": 1509,
                        "end": 1510
                      },
                      "typeArguments": null,
                      "start": 1509,
                      "end": 1510
                    },
                    "start": 1507,
                    "end": 1510
                  },
                  "start": 1506,
                  "end": 1510
                },
                "init": null,
                "definite": false,
                "start": 1506,
                "end": 1510
              }
            ],
            "declare": true,
            "start": 1494,
            "end": 1511
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1635,
                "end": 1636
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1639,
                "end": 1640
              },
              "start": 1635,
              "end": 1640
            },
            "directive": null,
            "start": 1635,
            "end": 1641
          }
        ],
        "start": 1271,
        "end": 1643
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1252,
      "end": 1643
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1692,
        "end": 1700
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 1897,
              "end": 1898
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1901,
                    "end": 1902
                  },
                  "start": 1901,
                  "end": 1902
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1905,
                    "end": 1906
                  },
                  "start": 1905,
                  "end": 1906
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1909,
                    "end": 1910
                  },
                  "start": 1909,
                  "end": 1910
                }
              ],
              "start": 1901,
              "end": 1910
            },
            "declare": false,
            "start": 1892,
            "end": 1911
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1921,
              "end": 1922
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1927,
                    "end": 1928
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1930,
                        "end": 1931
                      },
                      "typeArguments": null,
                      "start": 1930,
                      "end": 1931
                    },
                    "start": 1928,
                    "end": 1931
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1927,
                  "end": 1932
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1933,
                    "end": 1934
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1936,
                        "end": 1937
                      },
                      "typeArguments": null,
                      "start": 1936,
                      "end": 1937
                    },
                    "start": 1934,
                    "end": 1937
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1933,
                  "end": 1938
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1939,
                    "end": 1940
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1942,
                        "end": 1943
                      },
                      "typeArguments": null,
                      "start": 1942,
                      "end": 1943
                    },
                    "start": 1940,
                    "end": 1943
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1939,
                  "end": 1943
                }
              ],
              "start": 1925,
              "end": 1945
            },
            "declare": false,
            "start": 1916,
            "end": 1946
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1956,
              "end": 1957
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1962,
                        "end": 1963
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1965,
                            "end": 1966
                          },
                          "start": 1965,
                          "end": 1966
                        },
                        "start": 1963,
                        "end": 1966
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1962,
                      "end": 1967
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1968,
                        "end": 1969
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1971,
                            "end": 1972
                          },
                          "typeArguments": null,
                          "start": 1971,
                          "end": 1972
                        },
                        "start": 1969,
                        "end": 1972
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1968,
                      "end": 1973
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1974,
                        "end": 1975
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1977,
                            "end": 1978
                          },
                          "typeArguments": null,
                          "start": 1977,
                          "end": 1978
                        },
                        "start": 1975,
                        "end": 1978
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1974,
                      "end": 1978
                    }
                  ],
                  "start": 1960,
                  "end": 1980
                },
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1996,
                        "end": 1997
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1999,
                            "end": 2000
                          },
                          "start": 1999,
                          "end": 2000
                        },
                        "start": 1997,
                        "end": 2000
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1996,
                      "end": 2001
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2002,
                        "end": 2003
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2005,
                            "end": 2006
                          },
                          "typeArguments": null,
                          "start": 2005,
                          "end": 2006
                        },
                        "start": 2003,
                        "end": 2006
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2002,
                      "end": 2007
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2008,
                        "end": 2009
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2011,
                            "end": 2012
                          },
                          "typeArguments": null,
                          "start": 2011,
                          "end": 2012
                        },
                        "start": 2009,
                        "end": 2012
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2008,
                      "end": 2012
                    }
                  ],
                  "start": 1994,
                  "end": 2014
                },
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2030,
                        "end": 2031
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 2033,
                            "end": 2034
                          },
                          "start": 2033,
                          "end": 2034
                        },
                        "start": 2031,
                        "end": 2034
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2030,
                      "end": 2035
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2036,
                        "end": 2037
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2039,
                            "end": 2040
                          },
                          "typeArguments": null,
                          "start": 2039,
                          "end": 2040
                        },
                        "start": 2037,
                        "end": 2040
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2036,
                      "end": 2041
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2042,
                        "end": 2043
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2045,
                            "end": 2046
                          },
                          "typeArguments": null,
                          "start": 2045,
                          "end": 2046
                        },
                        "start": 2043,
                        "end": 2046
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2042,
                      "end": 2046
                    }
                  ],
                  "start": 2028,
                  "end": 2048
                },
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2064,
                        "end": 2065
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2067,
                            "end": 2068
                          },
                          "typeArguments": null,
                          "start": 2067,
                          "end": 2068
                        },
                        "start": 2065,
                        "end": 2068
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2064,
                      "end": 2069
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2070,
                        "end": 2071
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2073,
                            "end": 2074
                          },
                          "start": 2073,
                          "end": 2074
                        },
                        "start": 2071,
                        "end": 2074
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2070,
                      "end": 2075
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2076,
                        "end": 2077
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2079,
                            "end": 2080
                          },
                          "typeArguments": null,
                          "start": 2079,
                          "end": 2080
                        },
                        "start": 2077,
                        "end": 2080
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2076,
                      "end": 2080
                    }
                  ],
                  "start": 2062,
                  "end": 2082
                },
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2098,
                        "end": 2099
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2101,
                            "end": 2102
                          },
                          "typeArguments": null,
                          "start": 2101,
                          "end": 2102
                        },
                        "start": 2099,
                        "end": 2102
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2098,
                      "end": 2103
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2104,
                        "end": 2105
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2107,
                            "end": 2108
                          },
                          "start": 2107,
                          "end": 2108
                        },
                        "start": 2105,
                        "end": 2108
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2104,
                      "end": 2109
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2110,
                        "end": 2111
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2113,
                            "end": 2114
                          },
                          "typeArguments": null,
                          "start": 2113,
                          "end": 2114
                        },
                        "start": 2111,
                        "end": 2114
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2110,
                      "end": 2114
                    }
                  ],
                  "start": 2096,
                  "end": 2116
                },
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2132,
                        "end": 2133
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2135,
                            "end": 2136
                          },
                          "typeArguments": null,
                          "start": 2135,
                          "end": 2136
                        },
                        "start": 2133,
                        "end": 2136
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2132,
                      "end": 2137
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2138,
                        "end": 2139
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 2141,
                            "end": 2142
                          },
                          "start": 2141,
                          "end": 2142
                        },
                        "start": 2139,
                        "end": 2142
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2138,
                      "end": 2143
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2144,
                        "end": 2145
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2147,
                            "end": 2148
                          },
                          "typeArguments": null,
                          "start": 2147,
                          "end": 2148
                        },
                        "start": 2145,
                        "end": 2148
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2144,
                      "end": 2148
                    }
                  ],
                  "start": 2130,
                  "end": 2150
                },
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2166,
                        "end": 2167
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2169,
                            "end": 2170
                          },
                          "typeArguments": null,
                          "start": 2169,
                          "end": 2170
                        },
                        "start": 2167,
                        "end": 2170
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2166,
                      "end": 2171
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2172,
                        "end": 2173
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2175,
                            "end": 2176
                          },
                          "typeArguments": null,
                          "start": 2175,
                          "end": 2176
                        },
                        "start": 2173,
                        "end": 2176
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2172,
                      "end": 2177
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2178,
                        "end": 2179
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2181,
                            "end": 2182
                          },
                          "start": 2181,
                          "end": 2182
                        },
                        "start": 2179,
                        "end": 2182
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2178,
                      "end": 2182
                    }
                  ],
                  "start": 2164,
                  "end": 2184
                },
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2200,
                        "end": 2201
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2203,
                            "end": 2204
                          },
                          "typeArguments": null,
                          "start": 2203,
                          "end": 2204
                        },
                        "start": 2201,
                        "end": 2204
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2200,
                      "end": 2205
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2206,
                        "end": 2207
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2209,
                            "end": 2210
                          },
                          "typeArguments": null,
                          "start": 2209,
                          "end": 2210
                        },
                        "start": 2207,
                        "end": 2210
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2206,
                      "end": 2211
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2212,
                        "end": 2213
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2215,
                            "end": 2216
                          },
                          "start": 2215,
                          "end": 2216
                        },
                        "start": 2213,
                        "end": 2216
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2212,
                      "end": 2216
                    }
                  ],
                  "start": 2198,
                  "end": 2218
                },
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2234,
                        "end": 2235
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2237,
                            "end": 2238
                          },
                          "typeArguments": null,
                          "start": 2237,
                          "end": 2238
                        },
                        "start": 2235,
                        "end": 2238
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2234,
                      "end": 2239
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2240,
                        "end": 2241
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2243,
                            "end": 2244
                          },
                          "typeArguments": null,
                          "start": 2243,
                          "end": 2244
                        },
                        "start": 2241,
                        "end": 2244
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2240,
                      "end": 2245
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2246,
                        "end": 2247
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 2249,
                            "end": 2250
                          },
                          "start": 2249,
                          "end": 2250
                        },
                        "start": 2247,
                        "end": 2250
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2246,
                      "end": 2250
                    }
                  ],
                  "start": 2232,
                  "end": 2252
                }
              ],
              "start": 1960,
              "end": 2252
            },
            "declare": false,
            "start": 1951,
            "end": 2253
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2273,
                        "end": 2274
                      },
                      "typeArguments": null,
                      "start": 2273,
                      "end": 2274
                    },
                    "start": 2271,
                    "end": 2274
                  },
                  "start": 2270,
                  "end": 2274
                },
                "init": null,
                "definite": false,
                "start": 2270,
                "end": 2274
              }
            ],
            "declare": true,
            "start": 2258,
            "end": 2275
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
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
                        "start": 2295,
                        "end": 2296
                      },
                      "typeArguments": null,
                      "start": 2295,
                      "end": 2296
                    },
                    "start": 2293,
                    "end": 2296
                  },
                  "start": 2292,
                  "end": 2296
                },
                "init": null,
                "definite": false,
                "start": 2292,
                "end": 2296
              }
            ],
            "declare": true,
            "start": 2280,
            "end": 2297
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 2389,
                "end": 2390
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 2393,
                "end": 2394
              },
              "start": 2389,
              "end": 2394
            },
            "directive": null,
            "start": 2389,
            "end": 2395
          }
        ],
        "start": 1701,
        "end": 2397
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1682,
      "end": 2397
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GH14865",
        "optional": false,
        "typeAnnotation": null,
        "start": 2465,
        "end": 2472
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Style1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2484,
              "end": 2490
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
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
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2503,
                        "end": 2507
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "A",
                            "raw": "\"A\"",
                            "start": 2509,
                            "end": 2512
                          },
                          "start": 2509,
                          "end": 2512
                        },
                        "start": 2507,
                        "end": 2512
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2503,
                      "end": 2513
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2522,
                        "end": 2526
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2528,
                          "end": 2534
                        },
                        "start": 2526,
                        "end": 2534
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2522,
                      "end": 2535
                    }
                  ],
                  "start": 2493,
                  "end": 2541
                },
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
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2554,
                        "end": 2558
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "B",
                            "raw": "\"B\"",
                            "start": 2560,
                            "end": 2563
                          },
                          "start": 2560,
                          "end": 2563
                        },
                        "start": 2558,
                        "end": 2563
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2554,
                      "end": 2564
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2573,
                        "end": 2577
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2579,
                          "end": 2585
                        },
                        "start": 2577,
                        "end": 2585
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2573,
                      "end": 2586
                    }
                  ],
                  "start": 2544,
                  "end": 2592
                }
              ],
              "start": 2493,
              "end": 2592
            },
            "declare": false,
            "start": 2479,
            "end": 2593
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Style2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2604,
              "end": 2610
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2623,
                    "end": 2627
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "A",
                            "raw": "\"A\"",
                            "start": 2629,
                            "end": 2632
                          },
                          "start": 2629,
                          "end": 2632
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "B",
                            "raw": "\"B\"",
                            "start": 2635,
                            "end": 2638
                          },
                          "start": 2635,
                          "end": 2638
                        }
                      ],
                      "start": 2629,
                      "end": 2638
                    },
                    "start": 2627,
                    "end": 2638
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2623,
                  "end": 2639
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2648,
                    "end": 2652
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2654,
                      "end": 2660
                    },
                    "start": 2652,
                    "end": 2660
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2648,
                  "end": 2661
                }
              ],
              "start": 2613,
              "end": 2667
            },
            "declare": false,
            "start": 2599,
            "end": 2667
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Style2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2682,
                        "end": 2688
                      },
                      "typeArguments": null,
                      "start": 2682,
                      "end": 2688
                    },
                    "start": 2680,
                    "end": 2688
                  },
                  "start": 2679,
                  "end": 2688
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2693,
                        "end": 2697
                      },
                      "value": {
                        "type": "Literal",
                        "value": "A",
                        "raw": "\"A\"",
                        "start": 2699,
                        "end": 2702
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2693,
                      "end": 2702
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2704,
                        "end": 2708
                      },
                      "value": {
                        "type": "Literal",
                        "value": "whatevs",
                        "raw": "\"whatevs\"",
                        "start": 2710,
                        "end": 2719
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2704,
                      "end": 2719
                    }
                  ],
                  "start": 2691,
                  "end": 2721
                },
                "definite": false,
                "start": 2679,
                "end": 2721
              }
            ],
            "declare": false,
            "start": 2673,
            "end": 2722
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
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
                        "name": "Style1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2742,
                        "end": 2748
                      },
                      "typeArguments": null,
                      "start": 2742,
                      "end": 2748
                    },
                    "start": 2740,
                    "end": 2748
                  },
                  "start": 2739,
                  "end": 2748
                },
                "init": null,
                "definite": false,
                "start": 2739,
                "end": 2748
              }
            ],
            "declare": true,
            "start": 2727,
            "end": 2749
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2754,
                "end": 2755
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 2756,
                "end": 2760
              },
              "optional": false,
              "computed": false,
              "start": 2754,
              "end": 2760
            },
            "directive": null,
            "start": 2754,
            "end": 2761
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 2779,
                "end": 2780
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 2781,
                "end": 2785
              },
              "optional": false,
              "computed": false,
              "start": 2779,
              "end": 2785
            },
            "directive": null,
            "start": 2779,
            "end": 2786
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 2804,
                "end": 2805
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2808,
                "end": 2809
              },
              "start": 2804,
              "end": 2809
            },
            "directive": null,
            "start": 2804,
            "end": 2810
          }
        ],
        "start": 2473,
        "end": 2836
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2455,
      "end": 2836
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GH30170",
        "optional": false,
        "typeAnnotation": null,
        "start": 2904,
        "end": 2911
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Blue",
              "optional": false,
              "typeAnnotation": null,
              "start": 2928,
              "end": 2932
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
                    "name": "color",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2943,
                    "end": 2948
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "blue",
                        "raw": "'blue'",
                        "start": 2950,
                        "end": 2956
                      },
                      "start": 2950,
                      "end": 2956
                    },
                    "start": 2948,
                    "end": 2956
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2943,
                  "end": 2956
                }
              ],
              "start": 2933,
              "end": 2962
            },
            "declare": false,
            "start": 2918,
            "end": 2962
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Yellow",
              "optional": false,
              "typeAnnotation": null,
              "start": 2977,
              "end": 2983
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "color",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2994,
                    "end": 2999
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "yellow",
                        "raw": "'yellow'",
                        "start": 3002,
                        "end": 3010
                      },
                      "start": 3002,
                      "end": 3010
                    },
                    "start": 3000,
                    "end": 3010
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2994,
                  "end": 3011
                }
              ],
              "start": 2984,
              "end": 3017
            },
            "declare": false,
            "start": 2967,
            "end": 3017
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "draw",
              "optional": false,
              "typeAnnotation": null,
              "start": 3031,
              "end": 3035
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
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
                          "name": "Blue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3041,
                          "end": 3045
                        },
                        "typeArguments": null,
                        "start": 3041,
                        "end": 3045
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Yellow",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3048,
                          "end": 3054
                        },
                        "typeArguments": null,
                        "start": 3048,
                        "end": 3054
                      }
                    ],
                    "start": 3041,
                    "end": 3054
                  },
                  "start": 3039,
                  "end": 3054
                },
                "start": 3036,
                "end": 3054
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 3056,
              "end": 3059
            },
            "expression": false,
            "start": 3022,
            "end": 3059
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "drawWithColor",
              "optional": false,
              "typeAnnotation": null,
              "start": 3074,
              "end": 3087
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "currentColor",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "blue",
                          "raw": "'blue'",
                          "start": 3102,
                          "end": 3108
                        },
                        "start": 3102,
                        "end": 3108
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "yellow",
                          "raw": "'yellow'",
                          "start": 3111,
                          "end": 3119
                        },
                        "start": 3111,
                        "end": 3119
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 3122,
                        "end": 3131
                      }
                    ],
                    "start": 3102,
                    "end": 3131
                  },
                  "start": 3100,
                  "end": 3131
                },
                "start": 3088,
                "end": 3131
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "draw",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3150,
                      "end": 3154
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
                              "name": "color",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3157,
                              "end": 3162
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "currentColor",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3164,
                              "end": 3176
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 3157,
                            "end": 3176
                          }
                        ],
                        "start": 3155,
                        "end": 3178
                      }
                    ],
                    "optional": false,
                    "start": 3150,
                    "end": 3179
                  },
                  "start": 3143,
                  "end": 3180
                }
              ],
              "start": 3133,
              "end": 3186
            },
            "expression": false,
            "start": 3065,
            "end": 3186
          }
        ],
        "start": 2912,
        "end": 3188
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2894,
      "end": 3188
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GH12052",
        "optional": false,
        "typeAnnotation": null,
        "start": 3256,
        "end": 3263
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ILinearAxis",
              "optional": false,
              "typeAnnotation": null,
              "start": 3280,
              "end": 3291
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3294,
                    "end": 3298
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "linear",
                        "raw": "\"linear\"",
                        "start": 3300,
                        "end": 3308
                      },
                      "start": 3300,
                      "end": 3308
                    },
                    "start": 3298,
                    "end": 3308
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3294,
                  "end": 3309
                }
              ],
              "start": 3292,
              "end": 3311
            },
            "declare": false,
            "start": 3270,
            "end": 3311
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ICategoricalAxis",
              "optional": false,
              "typeAnnotation": null,
              "start": 3327,
              "end": 3343
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3346,
                    "end": 3350
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "categorical",
                        "raw": "\"categorical\"",
                        "start": 3352,
                        "end": 3365
                      },
                      "start": 3352,
                      "end": 3365
                    },
                    "start": 3350,
                    "end": 3365
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3346,
                  "end": 3366
                }
              ],
              "start": 3344,
              "end": 3368
            },
            "declare": false,
            "start": 3317,
            "end": 3368
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IAxis",
              "optional": false,
              "typeAnnotation": null,
              "start": 3379,
              "end": 3384
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ILinearAxis",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3387,
                    "end": 3398
                  },
                  "typeArguments": null,
                  "start": 3387,
                  "end": 3398
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ICategoricalAxis",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3401,
                    "end": 3417
                  },
                  "typeArguments": null,
                  "start": 3401,
                  "end": 3417
                }
              ],
              "start": 3387,
              "end": 3417
            },
            "declare": false,
            "start": 3374,
            "end": 3418
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IAxisType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3428,
              "end": 3437
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "linear",
                    "raw": "\"linear\"",
                    "start": 3440,
                    "end": 3448
                  },
                  "start": 3440,
                  "end": 3448
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "categorical",
                    "raw": "\"categorical\"",
                    "start": 3451,
                    "end": 3464
                  },
                  "start": 3451,
                  "end": 3464
                }
              ],
              "start": 3440,
              "end": 3464
            },
            "declare": false,
            "start": 3423,
            "end": 3465
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "getAxisType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3480,
              "end": 3491
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
                  "name": "IAxisType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3495,
                  "end": 3504
                },
                "typeArguments": null,
                "start": 3495,
                "end": 3504
              },
              "start": 3493,
              "end": 3504
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3519,
                      "end": 3520
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3524,
                      "end": 3525
                    },
                    "start": 3519,
                    "end": 3525
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "categorical",
                          "raw": "\"categorical\"",
                          "start": 3548,
                          "end": 3561
                        },
                        "start": 3541,
                        "end": 3562
                      }
                    ],
                    "start": 3527,
                    "end": 3572
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "linear",
                          "raw": "\"linear\"",
                          "start": 3599,
                          "end": 3607
                        },
                        "start": 3592,
                        "end": 3608
                      }
                    ],
                    "start": 3578,
                    "end": 3618
                  },
                  "start": 3515,
                  "end": 3618
                }
              ],
              "start": 3505,
              "end": 3624
            },
            "expression": false,
            "start": 3471,
            "end": 3624
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
                  "name": "bad",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IAxis",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3641,
                        "end": 3646
                      },
                      "typeArguments": null,
                      "start": 3641,
                      "end": 3646
                    },
                    "start": 3639,
                    "end": 3646
                  },
                  "start": 3636,
                  "end": 3646
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3651,
                        "end": 3655
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getAxisType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3657,
                          "end": 3668
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 3657,
                        "end": 3670
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3651,
                      "end": 3670
                    }
                  ],
                  "start": 3649,
                  "end": 3672
                },
                "definite": false,
                "start": 3636,
                "end": 3672
              }
            ],
            "declare": false,
            "start": 3630,
            "end": 3673
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
                  "name": "good",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IAxis",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3690,
                        "end": 3695
                      },
                      "typeArguments": null,
                      "start": 3690,
                      "end": 3695
                    },
                    "start": 3688,
                    "end": 3695
                  },
                  "start": 3684,
                  "end": 3695
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3700,
                        "end": 3704
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3706,
                        "end": 3715
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3700,
                      "end": 3715
                    }
                  ],
                  "start": 3698,
                  "end": 3717
                },
                "definite": false,
                "start": 3684,
                "end": 3717
              }
            ],
            "declare": false,
            "start": 3678,
            "end": 3718
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
                  "name": "good",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3723,
                  "end": 3727
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3728,
                  "end": 3732
                },
                "optional": false,
                "computed": false,
                "start": 3723,
                "end": 3732
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getAxisType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3735,
                  "end": 3746
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 3735,
                "end": 3748
              },
              "start": 3723,
              "end": 3748
            },
            "directive": null,
            "start": 3723,
            "end": 3749
          }
        ],
        "start": 3264,
        "end": 3751
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 3246,
      "end": 3751
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GH18421",
        "optional": false,
        "typeAnnotation": null,
        "start": 3819,
        "end": 3826
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ThingTypeOne",
              "optional": false,
              "typeAnnotation": null,
              "start": 3843,
              "end": 3855
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3866,
                    "end": 3870
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "one",
                        "raw": "'one'",
                        "start": 3872,
                        "end": 3877
                      },
                      "start": 3872,
                      "end": 3877
                    },
                    "start": 3870,
                    "end": 3877
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3866,
                  "end": 3878
                }
              ],
              "start": 3856,
              "end": 3884
            },
            "declare": false,
            "start": 3833,
            "end": 3884
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ThingTypeTwo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3900,
              "end": 3912
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3923,
                    "end": 3927
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "two",
                        "raw": "'two'",
                        "start": 3929,
                        "end": 3934
                      },
                      "start": 3929,
                      "end": 3934
                    },
                    "start": 3927,
                    "end": 3934
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3923,
                  "end": 3935
                }
              ],
              "start": 3913,
              "end": 3941
            },
            "declare": false,
            "start": 3890,
            "end": 3941
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ThingType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3952,
              "end": 3961
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "one",
                    "raw": "'one'",
                    "start": 3964,
                    "end": 3969
                  },
                  "start": 3964,
                  "end": 3969
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "two",
                    "raw": "'two'",
                    "start": 3972,
                    "end": 3977
                  },
                  "start": 3972,
                  "end": 3977
                }
              ],
              "start": 3964,
              "end": 3977
            },
            "declare": false,
            "start": 3947,
            "end": 3978
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Thing",
              "optional": false,
              "typeAnnotation": null,
              "start": 3989,
              "end": 3994
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ThingTypeOne",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3997,
                    "end": 4009
                  },
                  "typeArguments": null,
                  "start": 3997,
                  "end": 4009
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ThingTypeTwo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4012,
                    "end": 4024
                  },
                  "typeArguments": null,
                  "start": 4012,
                  "end": 4024
                }
              ],
              "start": 3997,
              "end": 4024
            },
            "declare": false,
            "start": 3984,
            "end": 4025
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeNewThing",
              "optional": false,
              "typeAnnotation": null,
              "start": 4040,
              "end": 4052
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "thingType",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ThingType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4064,
                      "end": 4073
                    },
                    "typeArguments": null,
                    "start": 4064,
                    "end": 4073
                  },
                  "start": 4062,
                  "end": 4073
                },
                "start": 4053,
                "end": 4073
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4076,
                  "end": 4081
                },
                "typeArguments": null,
                "start": 4076,
                "end": 4081
              },
              "start": 4074,
              "end": 4081
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4113,
                          "end": 4117
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thingType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4119,
                          "end": 4128
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 4113,
                        "end": 4128
                      }
                    ],
                    "start": 4099,
                    "end": 4138
                  },
                  "start": 4092,
                  "end": 4139
                }
              ],
              "start": 4082,
              "end": 4145
            },
            "expression": false,
            "start": 4031,
            "end": 4145
          }
        ],
        "start": 3827,
        "end": 4147
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 3809,
      "end": 4147
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GH15907",
        "optional": false,
        "typeAnnotation": null,
        "start": 4215,
        "end": 4222
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Action",
              "optional": false,
              "typeAnnotation": null,
              "start": 4234,
              "end": 4240
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
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
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4245,
                        "end": 4249
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "activate",
                            "raw": "'activate'",
                            "start": 4251,
                            "end": 4261
                          },
                          "start": 4251,
                          "end": 4261
                        },
                        "start": 4249,
                        "end": 4261
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4245,
                      "end": 4261
                    }
                  ],
                  "start": 4243,
                  "end": 4263
                },
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
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4268,
                        "end": 4272
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "disactivate",
                            "raw": "'disactivate'",
                            "start": 4274,
                            "end": 4287
                          },
                          "start": 4274,
                          "end": 4287
                        },
                        "start": 4272,
                        "end": 4287
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4268,
                      "end": 4287
                    }
                  ],
                  "start": 4266,
                  "end": 4289
                }
              ],
              "start": 4243,
              "end": 4289
            },
            "declare": false,
            "start": 4229,
            "end": 4290
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "dispatchAction",
              "optional": false,
              "typeAnnotation": null,
              "start": 4305,
              "end": 4319
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Action",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4328,
                      "end": 4334
                    },
                    "typeArguments": null,
                    "start": 4328,
                    "end": 4334
                  },
                  "start": 4326,
                  "end": 4334
                },
                "start": 4320,
                "end": 4334
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 4337,
                "end": 4341
              },
              "start": 4335,
              "end": 4341
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 4342,
              "end": 4350
            },
            "expression": false,
            "start": 4296,
            "end": 4350
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
                  "name": "active",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4362,
                  "end": 4368
                },
                "init": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 4371,
                  "end": 4375
                },
                "definite": false,
                "start": 4362,
                "end": 4375
              }
            ],
            "declare": false,
            "start": 4356,
            "end": 4376
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "dispatchAction",
                "optional": false,
                "typeAnnotation": null,
                "start": 4382,
                "end": 4396
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
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4399,
                        "end": 4403
                      },
                      "value": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "active",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4407,
                          "end": 4413
                        },
                        "consequent": {
                          "type": "Literal",
                          "value": "disactivate",
                          "raw": "'disactivate'",
                          "start": 4415,
                          "end": 4428
                        },
                        "alternate": {
                          "type": "Literal",
                          "value": "activate",
                          "raw": "'activate'",
                          "start": 4431,
                          "end": 4441
                        },
                        "start": 4407,
                        "end": 4441
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4399,
                      "end": 4442
                    }
                  ],
                  "start": 4397,
                  "end": 4444
                }
              ],
              "optional": false,
              "start": 4382,
              "end": 4445
            },
            "directive": null,
            "start": 4382,
            "end": 4446
          }
        ],
        "start": 4223,
        "end": 4448
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 4205,
      "end": 4448
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GH20889",
        "optional": false,
        "typeAnnotation": null,
        "start": 4516,
        "end": 4523
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4540,
              "end": 4542
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4553,
                    "end": 4557
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "A1",
                        "raw": "\"A1\"",
                        "start": 4559,
                        "end": 4563
                      },
                      "start": 4559,
                      "end": 4563
                    },
                    "start": 4557,
                    "end": 4563
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4553,
                  "end": 4564
                }
              ],
              "start": 4543,
              "end": 4570
            },
            "declare": false,
            "start": 4530,
            "end": 4570
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4585,
              "end": 4587
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4598,
                    "end": 4602
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "A2",
                        "raw": "\"A2\"",
                        "start": 4604,
                        "end": 4608
                      },
                      "start": 4604,
                      "end": 4608
                    },
                    "start": 4602,
                    "end": 4608
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4598,
                  "end": 4609
                }
              ],
              "start": 4588,
              "end": 4615
            },
            "declare": false,
            "start": 4575,
            "end": 4615
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "AU",
              "optional": false,
              "typeAnnotation": null,
              "start": 4625,
              "end": 4627
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4630,
                    "end": 4632
                  },
                  "typeArguments": null,
                  "start": 4630,
                  "end": 4632
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4635,
                    "end": 4637
                  },
                  "typeArguments": null,
                  "start": 4635,
                  "end": 4637
                }
              ],
              "start": 4630,
              "end": 4637
            },
            "declare": false,
            "start": 4620,
            "end": 4638
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 4653,
              "end": 4656
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AU",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4663,
                      "end": 4665
                    },
                    "typeArguments": null,
                    "start": 4663,
                    "end": 4665
                  },
                  "start": 4661,
                  "end": 4665
                },
                "start": 4657,
                "end": 4665
              }
            ],
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
                        "name": "obj2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AU",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4689,
                              "end": 4691
                            },
                            "typeArguments": null,
                            "start": 4689,
                            "end": 4691
                          },
                          "start": 4687,
                          "end": 4691
                        },
                        "start": 4683,
                        "end": 4691
                      },
                      "init": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4708,
                              "end": 4712
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "obj1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4714,
                                "end": 4718
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "type",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4719,
                                "end": 4723
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4714,
                              "end": 4723
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 4708,
                            "end": 4723
                          }
                        ],
                        "start": 4694,
                        "end": 4733
                      },
                      "definite": false,
                      "start": 4683,
                      "end": 4733
                    }
                  ],
                  "declare": false,
                  "start": 4677,
                  "end": 4734
                }
              ],
              "start": 4667,
              "end": 4740
            },
            "expression": false,
            "start": 4644,
            "end": 4740
          }
        ],
        "start": 4524,
        "end": 4742
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 4506,
      "end": 4742
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GH39357",
        "optional": false,
        "typeAnnotation": null,
        "start": 4810,
        "end": 4817
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 4829,
              "end": 4830
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 4834,
                        "end": 4837
                      },
                      "start": 4834,
                      "end": 4837
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 4839,
                      "end": 4845
                    }
                  ],
                  "start": 4833,
                  "end": 4846
                },
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "\"b\"",
                        "start": 4850,
                        "end": 4853
                      },
                      "start": 4850,
                      "end": 4853
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 4855,
                      "end": 4861
                    }
                  ],
                  "start": 4849,
                  "end": 4862
                },
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "c",
                        "raw": "\"c\"",
                        "start": 4866,
                        "end": 4869
                      },
                      "start": 4866,
                      "end": 4869
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 4871,
                      "end": 4877
                    }
                  ],
                  "start": 4865,
                  "end": 4878
                }
              ],
              "start": 4833,
              "end": 4878
            },
            "declare": false,
            "start": 4824,
            "end": 4879
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 4889,
              "end": 4890
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 4893,
                    "end": 4896
                  },
                  "start": 4893,
                  "end": 4896
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 4899,
                    "end": 4902
                  },
                  "start": 4899,
                  "end": 4902
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "c",
                    "raw": "\"c\"",
                    "start": 4905,
                    "end": 4908
                  },
                  "start": 4905,
                  "end": 4908
                }
              ],
              "start": 4893,
              "end": 4908
            },
            "declare": false,
            "start": 4884,
            "end": 4909
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
                        "start": 4931,
                        "end": 4932
                      },
                      "typeArguments": null,
                      "start": 4931,
                      "end": 4932
                    },
                    "start": 4929,
                    "end": 4932
                  },
                  "start": 4928,
                  "end": 4932
                },
                "init": null,
                "definite": false,
                "start": 4928,
                "end": 4932
              }
            ],
            "declare": true,
            "start": 4914,
            "end": 4933
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
                        "start": 4947,
                        "end": 4948
                      },
                      "typeArguments": null,
                      "start": 4947,
                      "end": 4948
                    },
                    "start": 4945,
                    "end": 4948
                  },
                  "start": 4944,
                  "end": 4948
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4951,
                        "end": 4952
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 4957,
                        "end": 4960
                      },
                      "start": 4951,
                      "end": 4960
                    },
                    "operator": "||",
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4964,
                        "end": 4965
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "\"b\"",
                        "start": 4970,
                        "end": 4973
                      },
                      "start": 4964,
                      "end": 4973
                    },
                    "start": 4951,
                    "end": 4973
                  },
                  "consequent": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4977,
                        "end": 4978
                      },
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4980,
                        "end": 4981
                      }
                    ],
                    "start": 4976,
                    "end": 4982
                  },
                  "alternate": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "c",
                        "raw": "\"c\"",
                        "start": 4986,
                        "end": 4989
                      },
                      {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 4991,
                        "end": 4993
                      }
                    ],
                    "start": 4985,
                    "end": 4994
                  },
                  "start": 4951,
                  "end": 4994
                },
                "definite": false,
                "start": 4944,
                "end": 4994
              }
            ],
            "declare": false,
            "start": 4938,
            "end": 4995
          }
        ],
        "start": 4818,
        "end": 4997
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 4800,
      "end": 4997
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GH58603",
        "optional": false,
        "typeAnnotation": null,
        "start": 5065,
        "end": 5072
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyEnum",
              "optional": false,
              "typeAnnotation": null,
              "start": 5084,
              "end": 5090
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5093,
                    "end": 5094
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 5097,
                    "end": 5098
                  },
                  "computed": false,
                  "start": 5093,
                  "end": 5098
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5100,
                    "end": 5101
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 5104,
                    "end": 5105
                  },
                  "computed": false,
                  "start": 5100,
                  "end": 5105
                }
              ],
              "start": 5091,
              "end": 5107
            },
            "const": false,
            "declare": false,
            "start": 5079,
            "end": 5107
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeA",
              "optional": false,
              "typeAnnotation": null,
              "start": 5118,
              "end": 5123
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
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5128,
                    "end": 5132
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyEnum",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5134,
                          "end": 5140
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5141,
                          "end": 5142
                        },
                        "start": 5134,
                        "end": 5142
                      },
                      "typeArguments": null,
                      "start": 5134,
                      "end": 5142
                    },
                    "start": 5132,
                    "end": 5142
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5128,
                  "end": 5143
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5144,
                    "end": 5146
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 5149,
                      "end": 5155
                    },
                    "start": 5147,
                    "end": 5155
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5144,
                  "end": 5155
                }
              ],
              "start": 5126,
              "end": 5157
            },
            "declare": false,
            "start": 5113,
            "end": 5158
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeB",
              "optional": false,
              "typeAnnotation": null,
              "start": 5173,
              "end": 5178
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
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
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5183,
                        "end": 5187
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "MyEnum",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5189,
                              "end": 5195
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5196,
                              "end": 5197
                            },
                            "start": 5189,
                            "end": 5197
                          },
                          "typeArguments": null,
                          "start": 5189,
                          "end": 5197
                        },
                        "start": 5187,
                        "end": 5197
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 5183,
                      "end": 5197
                    }
                  ],
                  "start": 5181,
                  "end": 5199
                },
                {
                  "type": "TSUnionType",
                  "types": [
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
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5205,
                            "end": 5207
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUndefinedKeyword",
                              "start": 5210,
                              "end": 5219
                            },
                            "start": 5208,
                            "end": 5219
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 5205,
                          "end": 5219
                        }
                      ],
                      "start": 5203,
                      "end": 5221
                    },
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
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5226,
                            "end": 5228
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 5230,
                              "end": 5236
                            },
                            "start": 5228,
                            "end": 5236
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 5226,
                          "end": 5236
                        }
                      ],
                      "start": 5224,
                      "end": 5238
                    }
                  ],
                  "start": 5203,
                  "end": 5238
                }
              ],
              "start": 5181,
              "end": 5239
            },
            "declare": false,
            "start": 5168,
            "end": 5240
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 5255,
              "end": 5261
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TypeA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5264,
                    "end": 5269
                  },
                  "typeArguments": null,
                  "start": 5264,
                  "end": 5269
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TypeB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5272,
                    "end": 5277
                  },
                  "typeArguments": null,
                  "start": 5272,
                  "end": 5277
                }
              ],
              "start": 5264,
              "end": 5277
            },
            "declare": false,
            "start": 5250,
            "end": 5278
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null,
              "start": 5297,
              "end": 5306
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                      "name": "MyType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5310,
                      "end": 5316
                    },
                    "typeArguments": null,
                    "start": 5310,
                    "end": 5316
                  },
                  "start": 5308,
                  "end": 5316
                },
                "start": 5307,
                "end": 5316
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 5319,
                "end": 5323
              },
              "start": 5317,
              "end": 5323
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 5324,
              "end": 5326
            },
            "expression": false,
            "start": 5288,
            "end": 5326
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "indirect",
              "optional": false,
              "typeAnnotation": null,
              "start": 5345,
              "end": 5353
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyEnum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5360,
                      "end": 5366
                    },
                    "typeArguments": null,
                    "start": 5360,
                    "end": 5366
                  },
                  "start": 5358,
                  "end": 5366
                },
                "start": 5354,
                "end": 5366
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 5373,
                    "end": 5379
                  },
                  "start": 5371,
                  "end": 5379
                },
                "start": 5368,
                "end": 5379
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 5382,
                "end": 5386
              },
              "start": 5380,
              "end": 5386
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5397,
                      "end": 5406
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
                              "name": "kind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5409,
                              "end": 5413
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "kind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5409,
                              "end": 5413
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 5409,
                            "end": 5413
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "id",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5415,
                              "end": 5417
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "id",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5415,
                              "end": 5417
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 5415,
                            "end": 5417
                          }
                        ],
                        "start": 5407,
                        "end": 5419
                      }
                    ],
                    "optional": false,
                    "start": 5397,
                    "end": 5420
                  },
                  "directive": null,
                  "start": 5397,
                  "end": 5421
                }
              ],
              "start": 5387,
              "end": 5427
            },
            "expression": false,
            "start": 5336,
            "end": 5427
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 5442,
              "end": 5445
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
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
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5450,
                        "end": 5454
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "\"a\"",
                                "start": 5456,
                                "end": 5459
                              },
                              "start": 5456,
                              "end": 5459
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "b",
                                "raw": "\"b\"",
                                "start": 5462,
                                "end": 5465
                              },
                              "start": 5462,
                              "end": 5465
                            }
                          ],
                          "start": 5456,
                          "end": 5465
                        },
                        "start": 5454,
                        "end": 5465
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 5450,
                      "end": 5466
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5467,
                        "end": 5472
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 5474,
                          "end": 5480
                        },
                        "start": 5472,
                        "end": 5480
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 5467,
                      "end": 5480
                    }
                  ],
                  "start": 5448,
                  "end": 5482
                },
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
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5487,
                        "end": 5491
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 5493,
                            "end": 5496
                          },
                          "start": 5493,
                          "end": 5496
                        },
                        "start": 5491,
                        "end": 5496
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 5487,
                      "end": 5497
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5498,
                        "end": 5503
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUndefinedKeyword",
                          "start": 5505,
                          "end": 5514
                        },
                        "start": 5503,
                        "end": 5514
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 5498,
                      "end": 5514
                    }
                  ],
                  "start": 5485,
                  "end": 5516
                },
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
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5521,
                        "end": 5525
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "b",
                            "raw": "\"b\"",
                            "start": 5527,
                            "end": 5530
                          },
                          "start": 5527,
                          "end": 5530
                        },
                        "start": 5525,
                        "end": 5530
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 5521,
                      "end": 5531
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5532,
                        "end": 5537
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUndefinedKeyword",
                          "start": 5539,
                          "end": 5548
                        },
                        "start": 5537,
                        "end": 5548
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 5532,
                      "end": 5548
                    }
                  ],
                  "start": 5519,
                  "end": 5550
                }
              ],
              "start": 5448,
              "end": 5550
            },
            "declare": false,
            "start": 5437,
            "end": 5551
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 5570,
              "end": 5574
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
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
                          "name": "kind",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5582,
                          "end": 5586
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "a",
                                  "raw": "\"a\"",
                                  "start": 5588,
                                  "end": 5591
                                },
                                "start": 5588,
                                "end": 5591
                              },
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "b",
                                  "raw": "\"b\"",
                                  "start": 5594,
                                  "end": 5597
                                },
                                "start": 5594,
                                "end": 5597
                              }
                            ],
                            "start": 5588,
                            "end": 5597
                          },
                          "start": 5586,
                          "end": 5597
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 5582,
                        "end": 5598
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5599,
                          "end": 5604
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 5606,
                                "end": 5612
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 5615,
                                "end": 5624
                              }
                            ],
                            "start": 5606,
                            "end": 5624
                          },
                          "start": 5604,
                          "end": 5624
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 5599,
                        "end": 5624
                      }
                    ],
                    "start": 5580,
                    "end": 5626
                  },
                  "start": 5578,
                  "end": 5626
                },
                "start": 5575,
                "end": 5626
              }
            ],
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
                        "name": "x1",
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
                              "start": 5646,
                              "end": 5649
                            },
                            "typeArguments": null,
                            "start": 5646,
                            "end": 5649
                          },
                          "start": 5644,
                          "end": 5649
                        },
                        "start": 5642,
                        "end": 5649
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5652,
                        "end": 5655
                      },
                      "definite": false,
                      "start": 5642,
                      "end": 5655
                    }
                  ],
                  "declare": false,
                  "start": 5638,
                  "end": 5656
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x2",
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
                              "start": 5673,
                              "end": 5676
                            },
                            "typeArguments": null,
                            "start": 5673,
                            "end": 5676
                          },
                          "start": 5671,
                          "end": 5676
                        },
                        "start": 5669,
                        "end": 5676
                      },
                      "init": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "kind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5681,
                              "end": 5685
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "obj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5687,
                                "end": 5690
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "kind",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5691,
                                "end": 5695
                              },
                              "optional": false,
                              "computed": false,
                              "start": 5687,
                              "end": 5695
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 5681,
                            "end": 5695
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5697,
                              "end": 5702
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "obj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5704,
                                "end": 5707
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5708,
                                "end": 5713
                              },
                              "optional": false,
                              "computed": false,
                              "start": 5704,
                              "end": 5713
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 5697,
                            "end": 5713
                          }
                        ],
                        "start": 5679,
                        "end": 5715
                      },
                      "definite": false,
                      "start": 5669,
                      "end": 5715
                    }
                  ],
                  "declare": false,
                  "start": 5665,
                  "end": 5716
                }
              ],
              "start": 5628,
              "end": 5722
            },
            "expression": false,
            "start": 5561,
            "end": 5722
          }
        ],
        "start": 5073,
        "end": 5724
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 5055,
      "end": 5724
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 74,
  "end": 5724
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 74,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "Example1",
    "start": 84,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 99,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 110,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 116,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 125,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 146,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 167,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 173,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 179,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 186,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 217,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 223,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 230,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 237,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 260,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 268,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 282,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 290,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 450,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "Example2",
    "start": 460,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 475,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 487,
    "end": 488
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 491,
    "end": 492
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Numeric",
    "value": "4",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 508,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "a",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 520,
    "end": 521
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 530,
    "end": 531
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 534,
    "end": 535
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "|",
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
    "type": "Identifier",
    "value": "a",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 576,
    "end": 577
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 612,
    "end": 613
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 622,
    "end": 623
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 626,
    "end": 627
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 646,
    "end": 653
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 654,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 668,
    "end": 675
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 676,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "type": "Punctuator",
    "value": "}",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 820,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "Example3",
    "start": 830,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 845,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Numeric",
    "value": "0",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 861,
    "end": 862
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 867,
    "end": 868
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 878,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 890,
    "end": 891
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 900,
    "end": 901
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 904,
    "end": 905
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 936,
    "end": 937
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 946,
    "end": 947
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 950,
    "end": 951
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "|",
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
    "type": "Identifier",
    "value": "a",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 982,
    "end": 983
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 992,
    "end": 993
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1016,
    "end": 1023
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1024,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1038,
    "end": 1045
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1046,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1211,
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
    "value": "s",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1252,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "Example4",
    "start": 1262,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1277,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1310,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1452,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1472,
    "end": 1479
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1480,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1494,
    "end": 1501
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1502,
    "end": 1505
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1682,
    "end": 1691
  },
  {
    "type": "Identifier",
    "value": "Example5",
    "start": 1692,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1892,
    "end": 1896
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1916,
    "end": 1920
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1927,
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
    "value": "N",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1951,
    "end": 1955
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2258,
    "end": 2265
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2266,
    "end": 2269
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2280,
    "end": 2287
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2288,
    "end": 2291
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2394,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2455,
    "end": 2464
  },
  {
    "type": "Identifier",
    "value": "GH14865",
    "start": 2465,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2479,
    "end": 2483
  },
  {
    "type": "Identifier",
    "value": "Style1",
    "start": 2484,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2503,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 2509,
    "end": 2512
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2522,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2528,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2554,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 2560,
    "end": 2563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2563,
    "end": 2564
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2573,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2579,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2592,
    "end": 2593
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2599,
    "end": 2603
  },
  {
    "type": "Identifier",
    "value": "Style2",
    "start": 2604,
    "end": 2610
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2623,
    "end": 2627
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2627,
    "end": 2628
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 2629,
    "end": 2632
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 2635,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2638,
    "end": 2639
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2648,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2654,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2673,
    "end": 2678
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2680,
    "end": 2681
  },
  {
    "type": "Identifier",
    "value": "Style2",
    "start": 2682,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2689,
    "end": 2690
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2691,
    "end": 2692
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2693,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 2699,
    "end": 2702
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2704,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "String",
    "value": "\"whatevs\"",
    "start": 2710,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2727,
    "end": 2734
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2735,
    "end": 2738
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2740,
    "end": 2741
  },
  {
    "type": "Identifier",
    "value": "Style1",
    "start": 2742,
    "end": 2748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2754,
    "end": 2755
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2755,
    "end": 2756
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2756,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2781,
    "end": 2785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2785,
    "end": 2786
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2894,
    "end": 2903
  },
  {
    "type": "Identifier",
    "value": "GH30170",
    "start": 2904,
    "end": 2911
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2912,
    "end": 2913
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2918,
    "end": 2927
  },
  {
    "type": "Identifier",
    "value": "Blue",
    "start": 2928,
    "end": 2932
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 2943,
    "end": 2948
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2948,
    "end": 2949
  },
  {
    "type": "String",
    "value": "'blue'",
    "start": 2950,
    "end": 2956
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2967,
    "end": 2976
  },
  {
    "type": "Identifier",
    "value": "Yellow",
    "start": 2977,
    "end": 2983
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 2994,
    "end": 2999
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3000,
    "end": 3001
  },
  {
    "type": "String",
    "value": "'yellow'",
    "start": 3002,
    "end": 3010
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3010,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3016,
    "end": 3017
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3022,
    "end": 3030
  },
  {
    "type": "Identifier",
    "value": "draw",
    "start": 3031,
    "end": 3035
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3035,
    "end": 3036
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 3036,
    "end": 3039
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Identifier",
    "value": "Blue",
    "start": 3041,
    "end": 3045
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3046,
    "end": 3047
  },
  {
    "type": "Identifier",
    "value": "Yellow",
    "start": 3048,
    "end": 3054
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3065,
    "end": 3073
  },
  {
    "type": "Identifier",
    "value": "drawWithColor",
    "start": 3074,
    "end": 3087
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "Identifier",
    "value": "currentColor",
    "start": 3088,
    "end": 3100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3100,
    "end": 3101
  },
  {
    "type": "String",
    "value": "'blue'",
    "start": 3102,
    "end": 3108
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3109,
    "end": 3110
  },
  {
    "type": "String",
    "value": "'yellow'",
    "start": 3111,
    "end": 3119
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3120,
    "end": 3121
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3122,
    "end": 3131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3131,
    "end": 3132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3133,
    "end": 3134
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3143,
    "end": 3149
  },
  {
    "type": "Identifier",
    "value": "draw",
    "start": 3150,
    "end": 3154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3155,
    "end": 3156
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 3157,
    "end": 3162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3162,
    "end": 3163
  },
  {
    "type": "Identifier",
    "value": "currentColor",
    "start": 3164,
    "end": 3176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3177,
    "end": 3178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3178,
    "end": 3179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3179,
    "end": 3180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3185,
    "end": 3186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3246,
    "end": 3255
  },
  {
    "type": "Identifier",
    "value": "GH12052",
    "start": 3256,
    "end": 3263
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3264,
    "end": 3265
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3270,
    "end": 3279
  },
  {
    "type": "Identifier",
    "value": "ILinearAxis",
    "start": 3280,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3292,
    "end": 3293
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3294,
    "end": 3298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3298,
    "end": 3299
  },
  {
    "type": "String",
    "value": "\"linear\"",
    "start": 3300,
    "end": 3308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3308,
    "end": 3309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3310,
    "end": 3311
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3317,
    "end": 3326
  },
  {
    "type": "Identifier",
    "value": "ICategoricalAxis",
    "start": 3327,
    "end": 3343
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3344,
    "end": 3345
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3346,
    "end": 3350
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3350,
    "end": 3351
  },
  {
    "type": "String",
    "value": "\"categorical\"",
    "start": 3352,
    "end": 3365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3365,
    "end": 3366
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3367,
    "end": 3368
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3374,
    "end": 3378
  },
  {
    "type": "Identifier",
    "value": "IAxis",
    "start": 3379,
    "end": 3384
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Identifier",
    "value": "ILinearAxis",
    "start": 3387,
    "end": 3398
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3399,
    "end": 3400
  },
  {
    "type": "Identifier",
    "value": "ICategoricalAxis",
    "start": 3401,
    "end": 3417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3417,
    "end": 3418
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3423,
    "end": 3427
  },
  {
    "type": "Identifier",
    "value": "IAxisType",
    "start": 3428,
    "end": 3437
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3438,
    "end": 3439
  },
  {
    "type": "String",
    "value": "\"linear\"",
    "start": 3440,
    "end": 3448
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3449,
    "end": 3450
  },
  {
    "type": "String",
    "value": "\"categorical\"",
    "start": 3451,
    "end": 3464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3464,
    "end": 3465
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3471,
    "end": 3479
  },
  {
    "type": "Identifier",
    "value": "getAxisType",
    "start": 3480,
    "end": 3491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3491,
    "end": 3492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3492,
    "end": 3493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3493,
    "end": 3494
  },
  {
    "type": "Identifier",
    "value": "IAxisType",
    "start": 3495,
    "end": 3504
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3505,
    "end": 3506
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3515,
    "end": 3517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3518,
    "end": 3519
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3519,
    "end": 3520
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3521,
    "end": 3523
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3524,
    "end": 3525
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3525,
    "end": 3526
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3527,
    "end": 3528
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3541,
    "end": 3547
  },
  {
    "type": "String",
    "value": "\"categorical\"",
    "start": 3548,
    "end": 3561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3561,
    "end": 3562
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3571,
    "end": 3572
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 3573,
    "end": 3577
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3578,
    "end": 3579
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3592,
    "end": 3598
  },
  {
    "type": "String",
    "value": "\"linear\"",
    "start": 3599,
    "end": 3607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3607,
    "end": 3608
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3617,
    "end": 3618
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3623,
    "end": 3624
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3630,
    "end": 3635
  },
  {
    "type": "Identifier",
    "value": "bad",
    "start": 3636,
    "end": 3639
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3639,
    "end": 3640
  },
  {
    "type": "Identifier",
    "value": "IAxis",
    "start": 3641,
    "end": 3646
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3647,
    "end": 3648
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3649,
    "end": 3650
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3651,
    "end": 3655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3655,
    "end": 3656
  },
  {
    "type": "Identifier",
    "value": "getAxisType",
    "start": 3657,
    "end": 3668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3668,
    "end": 3669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3669,
    "end": 3670
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3671,
    "end": 3672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3672,
    "end": 3673
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3678,
    "end": 3683
  },
  {
    "type": "Identifier",
    "value": "good",
    "start": 3684,
    "end": 3688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3688,
    "end": 3689
  },
  {
    "type": "Identifier",
    "value": "IAxis",
    "start": 3690,
    "end": 3695
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3696,
    "end": 3697
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3698,
    "end": 3699
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3700,
    "end": 3704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3704,
    "end": 3705
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3706,
    "end": 3715
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3716,
    "end": 3717
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3717,
    "end": 3718
  },
  {
    "type": "Identifier",
    "value": "good",
    "start": 3723,
    "end": 3727
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3727,
    "end": 3728
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3728,
    "end": 3732
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3733,
    "end": 3734
  },
  {
    "type": "Identifier",
    "value": "getAxisType",
    "start": 3735,
    "end": 3746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3746,
    "end": 3747
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3747,
    "end": 3748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3748,
    "end": 3749
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3750,
    "end": 3751
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3809,
    "end": 3818
  },
  {
    "type": "Identifier",
    "value": "GH18421",
    "start": 3819,
    "end": 3826
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3827,
    "end": 3828
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3833,
    "end": 3842
  },
  {
    "type": "Identifier",
    "value": "ThingTypeOne",
    "start": 3843,
    "end": 3855
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3856,
    "end": 3857
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3866,
    "end": 3870
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3870,
    "end": 3871
  },
  {
    "type": "String",
    "value": "'one'",
    "start": 3872,
    "end": 3877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3877,
    "end": 3878
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3883,
    "end": 3884
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3890,
    "end": 3899
  },
  {
    "type": "Identifier",
    "value": "ThingTypeTwo",
    "start": 3900,
    "end": 3912
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3913,
    "end": 3914
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3923,
    "end": 3927
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3927,
    "end": 3928
  },
  {
    "type": "String",
    "value": "'two'",
    "start": 3929,
    "end": 3934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3934,
    "end": 3935
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3940,
    "end": 3941
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3947,
    "end": 3951
  },
  {
    "type": "Identifier",
    "value": "ThingType",
    "start": 3952,
    "end": 3961
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3962,
    "end": 3963
  },
  {
    "type": "String",
    "value": "'one'",
    "start": 3964,
    "end": 3969
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3970,
    "end": 3971
  },
  {
    "type": "String",
    "value": "'two'",
    "start": 3972,
    "end": 3977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3977,
    "end": 3978
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3984,
    "end": 3988
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 3989,
    "end": 3994
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3995,
    "end": 3996
  },
  {
    "type": "Identifier",
    "value": "ThingTypeOne",
    "start": 3997,
    "end": 4009
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4010,
    "end": 4011
  },
  {
    "type": "Identifier",
    "value": "ThingTypeTwo",
    "start": 4012,
    "end": 4024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4024,
    "end": 4025
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4031,
    "end": 4039
  },
  {
    "type": "Identifier",
    "value": "makeNewThing",
    "start": 4040,
    "end": 4052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4052,
    "end": 4053
  },
  {
    "type": "Identifier",
    "value": "thingType",
    "start": 4053,
    "end": 4062
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4062,
    "end": 4063
  },
  {
    "type": "Identifier",
    "value": "ThingType",
    "start": 4064,
    "end": 4073
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4073,
    "end": 4074
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4074,
    "end": 4075
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 4076,
    "end": 4081
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4082,
    "end": 4083
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4092,
    "end": 4098
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4099,
    "end": 4100
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4113,
    "end": 4117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4117,
    "end": 4118
  },
  {
    "type": "Identifier",
    "value": "thingType",
    "start": 4119,
    "end": 4128
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "}",
    "start": 4144,
    "end": 4145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4146,
    "end": 4147
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4205,
    "end": 4214
  },
  {
    "type": "Identifier",
    "value": "GH15907",
    "start": 4215,
    "end": 4222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4223,
    "end": 4224
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4229,
    "end": 4233
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 4234,
    "end": 4240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4241,
    "end": 4242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4243,
    "end": 4244
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4245,
    "end": 4249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4249,
    "end": 4250
  },
  {
    "type": "String",
    "value": "'activate'",
    "start": 4251,
    "end": 4261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4262,
    "end": 4263
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4264,
    "end": 4265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4266,
    "end": 4267
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4268,
    "end": 4272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4272,
    "end": 4273
  },
  {
    "type": "String",
    "value": "'disactivate'",
    "start": 4274,
    "end": 4287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4288,
    "end": 4289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4289,
    "end": 4290
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4296,
    "end": 4304
  },
  {
    "type": "Identifier",
    "value": "dispatchAction",
    "start": 4305,
    "end": 4319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4319,
    "end": 4320
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 4320,
    "end": 4326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4326,
    "end": 4327
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 4328,
    "end": 4334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4334,
    "end": 4335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4335,
    "end": 4336
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4337,
    "end": 4341
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4342,
    "end": 4343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4349,
    "end": 4350
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4356,
    "end": 4361
  },
  {
    "type": "Identifier",
    "value": "active",
    "start": 4362,
    "end": 4368
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4369,
    "end": 4370
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4371,
    "end": 4375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4375,
    "end": 4376
  },
  {
    "type": "Identifier",
    "value": "dispatchAction",
    "start": 4382,
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
    "value": "{",
    "start": 4397,
    "end": 4398
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4399,
    "end": 4403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4404,
    "end": 4405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4406,
    "end": 4407
  },
  {
    "type": "Identifier",
    "value": "active",
    "start": 4407,
    "end": 4413
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4413,
    "end": 4414
  },
  {
    "type": "String",
    "value": "'disactivate'",
    "start": 4415,
    "end": 4428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4429,
    "end": 4430
  },
  {
    "type": "String",
    "value": "'activate'",
    "start": 4431,
    "end": 4441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4441,
    "end": 4442
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4443,
    "end": 4444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4444,
    "end": 4445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4445,
    "end": 4446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4447,
    "end": 4448
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4506,
    "end": 4515
  },
  {
    "type": "Identifier",
    "value": "GH20889",
    "start": 4516,
    "end": 4523
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4524,
    "end": 4525
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4530,
    "end": 4539
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 4540,
    "end": 4542
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4543,
    "end": 4544
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4553,
    "end": 4557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4557,
    "end": 4558
  },
  {
    "type": "String",
    "value": "\"A1\"",
    "start": 4559,
    "end": 4563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4563,
    "end": 4564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4569,
    "end": 4570
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4575,
    "end": 4584
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 4585,
    "end": 4587
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4588,
    "end": 4589
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4598,
    "end": 4602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4602,
    "end": 4603
  },
  {
    "type": "String",
    "value": "\"A2\"",
    "start": 4604,
    "end": 4608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4608,
    "end": 4609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4614,
    "end": 4615
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4620,
    "end": 4624
  },
  {
    "type": "Identifier",
    "value": "AU",
    "start": 4625,
    "end": 4627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4628,
    "end": 4629
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 4630,
    "end": 4632
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4633,
    "end": 4634
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 4635,
    "end": 4637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4637,
    "end": 4638
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4644,
    "end": 4652
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4653,
    "end": 4656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4656,
    "end": 4657
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 4657,
    "end": 4661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4661,
    "end": 4662
  },
  {
    "type": "Identifier",
    "value": "AU",
    "start": 4663,
    "end": 4665
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4665,
    "end": 4666
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4667,
    "end": 4668
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4677,
    "end": 4682
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 4683,
    "end": 4687
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4687,
    "end": 4688
  },
  {
    "type": "Identifier",
    "value": "AU",
    "start": 4689,
    "end": 4691
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4692,
    "end": 4693
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4694,
    "end": 4695
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4708,
    "end": 4712
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4712,
    "end": 4713
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 4714,
    "end": 4718
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4718,
    "end": 4719
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4719,
    "end": 4723
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4732,
    "end": 4733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4733,
    "end": 4734
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4739,
    "end": 4740
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4741,
    "end": 4742
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4800,
    "end": 4809
  },
  {
    "type": "Identifier",
    "value": "GH39357",
    "start": 4810,
    "end": 4817
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4818,
    "end": 4819
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4824,
    "end": 4828
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 4829,
    "end": 4830
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4831,
    "end": 4832
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4833,
    "end": 4834
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 4834,
    "end": 4837
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4837,
    "end": 4838
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4839,
    "end": 4845
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4845,
    "end": 4846
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4847,
    "end": 4848
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4849,
    "end": 4850
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 4850,
    "end": 4853
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4853,
    "end": 4854
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4855,
    "end": 4861
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4861,
    "end": 4862
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4863,
    "end": 4864
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4865,
    "end": 4866
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 4866,
    "end": 4869
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4869,
    "end": 4870
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4871,
    "end": 4877
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4877,
    "end": 4878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4878,
    "end": 4879
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4884,
    "end": 4888
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 4889,
    "end": 4890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4891,
    "end": 4892
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 4893,
    "end": 4896
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4897,
    "end": 4898
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 4899,
    "end": 4902
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4903,
    "end": 4904
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 4905,
    "end": 4908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4908,
    "end": 4909
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4914,
    "end": 4921
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4922,
    "end": 4927
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4928,
    "end": 4929
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4929,
    "end": 4930
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 4931,
    "end": 4932
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4932,
    "end": 4933
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4938,
    "end": 4943
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4944,
    "end": 4945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4945,
    "end": 4946
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 4947,
    "end": 4948
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4949,
    "end": 4950
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4951,
    "end": 4952
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4953,
    "end": 4956
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 4957,
    "end": 4960
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 4961,
    "end": 4963
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4964,
    "end": 4965
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4966,
    "end": 4969
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 4970,
    "end": 4973
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4974,
    "end": 4975
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4976,
    "end": 4977
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4977,
    "end": 4978
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4978,
    "end": 4979
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4980,
    "end": 4981
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4981,
    "end": 4982
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4983,
    "end": 4984
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4985,
    "end": 4986
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 4986,
    "end": 4989
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4989,
    "end": 4990
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 4991,
    "end": 4993
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4993,
    "end": 4994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4994,
    "end": 4995
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4996,
    "end": 4997
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 5055,
    "end": 5064
  },
  {
    "type": "Identifier",
    "value": "GH58603",
    "start": 5065,
    "end": 5072
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5073,
    "end": 5074
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 5079,
    "end": 5083
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 5084,
    "end": 5090
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5091,
    "end": 5092
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5093,
    "end": 5094
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5095,
    "end": 5096
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5097,
    "end": 5098
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5098,
    "end": 5099
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 5100,
    "end": 5101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5102,
    "end": 5103
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5104,
    "end": 5105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5106,
    "end": 5107
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5113,
    "end": 5117
  },
  {
    "type": "Identifier",
    "value": "TypeA",
    "start": 5118,
    "end": 5123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5124,
    "end": 5125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5126,
    "end": 5127
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 5128,
    "end": 5132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5132,
    "end": 5133
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 5134,
    "end": 5140
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5140,
    "end": 5141
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5141,
    "end": 5142
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5142,
    "end": 5143
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 5144,
    "end": 5146
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5146,
    "end": 5147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5147,
    "end": 5148
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5149,
    "end": 5155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5156,
    "end": 5157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5157,
    "end": 5158
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5168,
    "end": 5172
  },
  {
    "type": "Identifier",
    "value": "TypeB",
    "start": 5173,
    "end": 5178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5179,
    "end": 5180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5181,
    "end": 5182
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 5183,
    "end": 5187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5187,
    "end": 5188
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 5189,
    "end": 5195
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5195,
    "end": 5196
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 5196,
    "end": 5197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5198,
    "end": 5199
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5200,
    "end": 5201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5202,
    "end": 5203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5203,
    "end": 5204
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 5205,
    "end": 5207
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5207,
    "end": 5208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5208,
    "end": 5209
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5210,
    "end": 5219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5220,
    "end": 5221
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5222,
    "end": 5223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5224,
    "end": 5225
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 5226,
    "end": 5228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5228,
    "end": 5229
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5230,
    "end": 5236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5237,
    "end": 5238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5238,
    "end": 5239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5239,
    "end": 5240
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5250,
    "end": 5254
  },
  {
    "type": "Identifier",
    "value": "MyType",
    "start": 5255,
    "end": 5261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5262,
    "end": 5263
  },
  {
    "type": "Identifier",
    "value": "TypeA",
    "start": 5264,
    "end": 5269
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5270,
    "end": 5271
  },
  {
    "type": "Identifier",
    "value": "TypeB",
    "start": 5272,
    "end": 5277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5277,
    "end": 5278
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5288,
    "end": 5296
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 5297,
    "end": 5306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5306,
    "end": 5307
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5307,
    "end": 5308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5308,
    "end": 5309
  },
  {
    "type": "Identifier",
    "value": "MyType",
    "start": 5310,
    "end": 5316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5316,
    "end": 5317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5317,
    "end": 5318
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5319,
    "end": 5323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5324,
    "end": 5325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5325,
    "end": 5326
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5336,
    "end": 5344
  },
  {
    "type": "Identifier",
    "value": "indirect",
    "start": 5345,
    "end": 5353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5353,
    "end": 5354
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 5354,
    "end": 5358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5358,
    "end": 5359
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 5360,
    "end": 5366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5366,
    "end": 5367
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 5368,
    "end": 5370
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5370,
    "end": 5371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5371,
    "end": 5372
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5373,
    "end": 5379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5379,
    "end": 5380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5380,
    "end": 5381
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5382,
    "end": 5386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5387,
    "end": 5388
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 5397,
    "end": 5406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5406,
    "end": 5407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5407,
    "end": 5408
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 5409,
    "end": 5413
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5413,
    "end": 5414
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 5415,
    "end": 5417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5418,
    "end": 5419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5419,
    "end": 5420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5420,
    "end": 5421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5426,
    "end": 5427
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5437,
    "end": 5441
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 5442,
    "end": 5445
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5446,
    "end": 5447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5448,
    "end": 5449
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 5450,
    "end": 5454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5454,
    "end": 5455
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 5456,
    "end": 5459
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5460,
    "end": 5461
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 5462,
    "end": 5465
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5465,
    "end": 5466
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5467,
    "end": 5472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5472,
    "end": 5473
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5474,
    "end": 5480
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5481,
    "end": 5482
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5483,
    "end": 5484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5485,
    "end": 5486
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 5487,
    "end": 5491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5491,
    "end": 5492
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 5493,
    "end": 5496
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5496,
    "end": 5497
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5498,
    "end": 5503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5503,
    "end": 5504
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5505,
    "end": 5514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5515,
    "end": 5516
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5517,
    "end": 5518
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5519,
    "end": 5520
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 5521,
    "end": 5525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5525,
    "end": 5526
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 5527,
    "end": 5530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5530,
    "end": 5531
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5532,
    "end": 5537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5537,
    "end": 5538
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5539,
    "end": 5548
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5549,
    "end": 5550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5550,
    "end": 5551
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5561,
    "end": 5569
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 5570,
    "end": 5574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5574,
    "end": 5575
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 5575,
    "end": 5578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5578,
    "end": 5579
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5580,
    "end": 5581
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 5582,
    "end": 5586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5586,
    "end": 5587
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 5588,
    "end": 5591
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5592,
    "end": 5593
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 5594,
    "end": 5597
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5597,
    "end": 5598
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5599,
    "end": 5604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5604,
    "end": 5605
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5606,
    "end": 5612
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5613,
    "end": 5614
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5615,
    "end": 5624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5625,
    "end": 5626
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5626,
    "end": 5627
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5628,
    "end": 5629
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5638,
    "end": 5641
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 5642,
    "end": 5644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5644,
    "end": 5645
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 5646,
    "end": 5649
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5650,
    "end": 5651
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 5652,
    "end": 5655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5655,
    "end": 5656
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5665,
    "end": 5668
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 5669,
    "end": 5671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5671,
    "end": 5672
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 5673,
    "end": 5676
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5677,
    "end": 5678
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5679,
    "end": 5680
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 5681,
    "end": 5685
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5685,
    "end": 5686
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 5687,
    "end": 5690
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5690,
    "end": 5691
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 5691,
    "end": 5695
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5695,
    "end": 5696
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5697,
    "end": 5702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5702,
    "end": 5703
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 5704,
    "end": 5707
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5707,
    "end": 5708
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5708,
    "end": 5713
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5714,
    "end": 5715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5715,
    "end": 5716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5721,
    "end": 5722
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5723,
    "end": 5724
  }
]
```

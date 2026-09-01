__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "f1",
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
                        "type": "TSStringKeyword",
                        "start": 20,
                        "end": 26
                      },
                      "start": 18,
                      "end": 26
                    },
                    "start": 17,
                    "end": 26
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 31,
                      "end": 35
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSStringKeyword",
                                "start": 38,
                                "end": 44
                              }
                            ],
                            "start": 37,
                            "end": 45
                          },
                          {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 49,
                                "end": 55
                              },
                              {
                                "type": "TSBooleanKeyword",
                                "start": 57,
                                "end": 64
                              }
                            ],
                            "start": 48,
                            "end": 65
                          }
                        ],
                        "start": 37,
                        "end": 65
                      },
                      "start": 35,
                      "end": 65
                    },
                    "value": null,
                    "start": 28,
                    "end": 65
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 70,
                    "end": 74
                  },
                  "start": 67,
                  "end": 74
                },
                "start": 16,
                "end": 74
              },
              "start": 14,
              "end": 74
            },
            "start": 12,
            "end": 74
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 74
        }
      ],
      "declare": true,
      "start": 0,
      "end": 75
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
            "name": "f2",
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
                        "type": "TSStringKeyword",
                        "start": 96,
                        "end": 102
                      },
                      "start": 94,
                      "end": 102
                    },
                    "start": 93,
                    "end": 102
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 107,
                        "end": 113
                      },
                      "start": 105,
                      "end": 113
                    },
                    "start": 104,
                    "end": 113
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 118,
                    "end": 122
                  },
                  "start": 115,
                  "end": 122
                },
                "start": 92,
                "end": 122
              },
              "start": 90,
              "end": 122
            },
            "start": 88,
            "end": 122
          },
          "init": null,
          "definite": false,
          "start": 88,
          "end": 122
        }
      ],
      "declare": true,
      "start": 76,
      "end": 123
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
            "name": "f3",
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
                        "type": "TSStringKeyword",
                        "start": 144,
                        "end": 150
                      },
                      "start": 142,
                      "end": 150
                    },
                    "start": 141,
                    "end": 150
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 155,
                        "end": 161
                      },
                      "start": 153,
                      "end": 161
                    },
                    "start": 152,
                    "end": 161
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 166,
                        "end": 173
                      },
                      "start": 164,
                      "end": 173
                    },
                    "start": 163,
                    "end": 173
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 178,
                    "end": 182
                  },
                  "start": 175,
                  "end": 182
                },
                "start": 140,
                "end": 182
              },
              "start": 138,
              "end": 182
            },
            "start": 136,
            "end": 182
          },
          "init": null,
          "definite": false,
          "start": 136,
          "end": 182
        }
      ],
      "declare": true,
      "start": 124,
      "end": 183
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
            "name": "f4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 204,
                      "end": 208
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSStringKeyword",
                                "start": 211,
                                "end": 217
                              },
                              {
                                "type": "TSStringKeyword",
                                "start": 219,
                                "end": 225
                              }
                            ],
                            "start": 210,
                            "end": 226
                          },
                          {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSStringKeyword",
                                "start": 230,
                                "end": 236
                              },
                              {
                                "type": "TSNumberKeyword",
                                "start": 238,
                                "end": 244
                              },
                              {
                                "type": "TSBooleanKeyword",
                                "start": 246,
                                "end": 253
                              }
                            ],
                            "start": 229,
                            "end": 254
                          }
                        ],
                        "start": 210,
                        "end": 254
                      },
                      "start": 208,
                      "end": 254
                    },
                    "value": null,
                    "start": 201,
                    "end": 254
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 259,
                    "end": 263
                  },
                  "start": 256,
                  "end": 263
                },
                "start": 200,
                "end": 263
              },
              "start": 198,
              "end": 263
            },
            "start": 196,
            "end": 263
          },
          "init": null,
          "definite": false,
          "start": 196,
          "end": 263
        }
      ],
      "declare": true,
      "start": 184,
      "end": 264
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
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSStringKeyword",
                        "start": 285,
                        "end": 291
                      }
                    ],
                    "start": 284,
                    "end": 292
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 296,
                        "end": 302
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 304,
                        "end": 311
                      }
                    ],
                    "start": 295,
                    "end": 312
                  }
                ],
                "start": 284,
                "end": 312
              },
              "start": 282,
              "end": 312
            },
            "start": 280,
            "end": 312
          },
          "init": null,
          "definite": false,
          "start": 280,
          "end": 312
        }
      ],
      "declare": true,
      "start": 266,
      "end": 313
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "readonly",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSStringKeyword",
                          "start": 342,
                          "end": 348
                        }
                      ],
                      "start": 341,
                      "end": 349
                    },
                    "start": 332,
                    "end": 349
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 353,
                        "end": 359
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 361,
                        "end": 368
                      }
                    ],
                    "start": 352,
                    "end": 369
                  }
                ],
                "start": 332,
                "end": 369
              },
              "start": 330,
              "end": 369
            },
            "start": 328,
            "end": 369
          },
          "init": null,
          "definite": false,
          "start": 328,
          "end": 369
        }
      ],
      "declare": true,
      "start": 314,
      "end": 370
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
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSStringKeyword",
                        "start": 390,
                        "end": 396
                      }
                    ],
                    "start": 389,
                    "end": 397
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "readonly",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 410,
                          "end": 416
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 418,
                          "end": 425
                        }
                      ],
                      "start": 409,
                      "end": 426
                    },
                    "start": 400,
                    "end": 426
                  }
                ],
                "start": 389,
                "end": 426
              },
              "start": 387,
              "end": 426
            },
            "start": 385,
            "end": 426
          },
          "init": null,
          "definite": false,
          "start": 385,
          "end": 426
        }
      ],
      "declare": true,
      "start": 371,
      "end": 427
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
            "name": "t4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "readonly",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSStringKeyword",
                          "start": 456,
                          "end": 462
                        }
                      ],
                      "start": 455,
                      "end": 463
                    },
                    "start": 446,
                    "end": 463
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "readonly",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 476,
                          "end": 482
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 484,
                          "end": 491
                        }
                      ],
                      "start": 475,
                      "end": 492
                    },
                    "start": 466,
                    "end": 492
                  }
                ],
                "start": 446,
                "end": 492
              },
              "start": 444,
              "end": 492
            },
            "start": 442,
            "end": 492
          },
          "init": null,
          "definite": false,
          "start": 442,
          "end": 492
        }
      ],
      "declare": true,
      "start": 428,
      "end": 493
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 495,
          "end": 497
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 498,
            "end": 503
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 505,
            "end": 510
          }
        ],
        "optional": false,
        "start": 495,
        "end": 511
      },
      "directive": null,
      "start": 495,
      "end": 512
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 513,
          "end": 515
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 516,
            "end": 521
          },
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 523,
            "end": 525
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 527,
            "end": 531
          }
        ],
        "optional": false,
        "start": 513,
        "end": 532
      },
      "directive": null,
      "start": 513,
      "end": 533
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 534,
          "end": 536
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 537,
            "end": 542
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 547,
              "end": 549
            },
            "start": 544,
            "end": 549
          }
        ],
        "optional": false,
        "start": 534,
        "end": 550
      },
      "directive": null,
      "start": 534,
      "end": 551
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 552,
          "end": 554
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 555,
            "end": 560
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 565,
              "end": 567
            },
            "start": 562,
            "end": 567
          }
        ],
        "optional": false,
        "start": 552,
        "end": 568
      },
      "directive": null,
      "start": 552,
      "end": 569
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 570,
          "end": 572
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 573,
            "end": 578
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 583,
              "end": 585
            },
            "start": 580,
            "end": 585
          }
        ],
        "optional": false,
        "start": 570,
        "end": 586
      },
      "directive": null,
      "start": 570,
      "end": 587
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 588,
          "end": 590
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 591,
            "end": 596
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 601,
              "end": 603
            },
            "start": 598,
            "end": 603
          }
        ],
        "optional": false,
        "start": 588,
        "end": 604
      },
      "directive": null,
      "start": 588,
      "end": 605
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 606,
          "end": 608
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 609,
            "end": 614
          },
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 616,
            "end": 618
          }
        ],
        "optional": false,
        "start": 606,
        "end": 619
      },
      "directive": null,
      "start": 606,
      "end": 620
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 631,
          "end": 633
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 634,
            "end": 639
          }
        ],
        "optional": false,
        "start": 631,
        "end": 640
      },
      "directive": null,
      "start": 631,
      "end": 641
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 653,
          "end": 655
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 658,
          "end": 660
        },
        "start": 653,
        "end": 660
      },
      "directive": null,
      "start": 653,
      "end": 661
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 662,
          "end": 664
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 667,
          "end": 669
        },
        "start": 662,
        "end": 669
      },
      "directive": null,
      "start": 662,
      "end": 670
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null,
          "start": 671,
          "end": 673
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 676,
          "end": 678
        },
        "start": 671,
        "end": 678
      },
      "directive": null,
      "start": 671,
      "end": 679
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 680,
          "end": 682
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 685,
          "end": 687
        },
        "start": 680,
        "end": 687
      },
      "directive": null,
      "start": 680,
      "end": 688
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 699,
          "end": 701
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 704,
          "end": 706
        },
        "start": 699,
        "end": 706
      },
      "directive": null,
      "start": 699,
      "end": 707
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 718,
          "end": 720
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null,
          "start": 723,
          "end": 725
        },
        "start": 718,
        "end": 725
      },
      "directive": null,
      "start": 718,
      "end": 726
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CoolArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 760,
        "end": 769
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 770,
              "end": 771
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 770,
            "end": 771
          }
        ],
        "start": 769,
        "end": 772
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 781,
            "end": 786
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 787,
                  "end": 788
                },
                "typeArguments": null,
                "start": 787,
                "end": 788
              }
            ],
            "start": 786,
            "end": 789
          },
          "start": 781,
          "end": 789
        }
      ],
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
              "name": "hello",
              "optional": false,
              "typeAnnotation": null,
              "start": 797,
              "end": 802
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 804,
                "end": 810
              },
              "start": 802,
              "end": 810
            },
            "accessibility": null,
            "static": false,
            "start": 797,
            "end": 811
          }
        ],
        "start": 790,
        "end": 813
      },
      "declare": false,
      "start": 750,
      "end": 813
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 832,
        "end": 835
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 836,
              "end": 837
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 846,
                "end": 849
              },
              "start": 846,
              "end": 851
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 836,
            "end": 851
          }
        ],
        "start": 835,
        "end": 852
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 861,
                    "end": 865
                  },
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
                        "start": 867,
                        "end": 868
                      },
                      "typeArguments": null,
                      "start": 867,
                      "end": 868
                    },
                    "start": 865,
                    "end": 868
                  },
                  "value": null,
                  "start": 858,
                  "end": 868
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 873,
                  "end": 877
                },
                "start": 870,
                "end": 877
              },
              "start": 857,
              "end": 877
            },
            "start": 855,
            "end": 877
          },
          "start": 853,
          "end": 877
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 880,
          "end": 884
        },
        "start": 878,
        "end": 884
      },
      "body": null,
      "expression": false,
      "start": 815,
      "end": 885
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 887,
          "end": 890
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "CoolArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 891,
                "end": 900
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 901,
                    "end": 904
                  }
                ],
                "start": 900,
                "end": 905
              },
              "start": 891,
              "end": 905
            }
          ],
          "start": 890,
          "end": 906
        },
        "arguments": [],
        "optional": false,
        "start": 887,
        "end": 908
      },
      "directive": null,
      "start": 887,
      "end": 909
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 923,
          "end": 926
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "CoolArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 927,
                "end": 936
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 937,
                    "end": 940
                  }
                ],
                "start": 936,
                "end": 941
              },
              "start": 927,
              "end": 941
            }
          ],
          "start": 926,
          "end": 942
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 100,
            "raw": "100",
            "start": 943,
            "end": 946
          }
        ],
        "optional": false,
        "start": 923,
        "end": 947
      },
      "directive": null,
      "start": 923,
      "end": 948
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 959,
          "end": 962
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "CoolArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 963,
                "end": 972
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 973,
                    "end": 976
                  }
                ],
                "start": 972,
                "end": 977
              },
              "start": 963,
              "end": 977
            }
          ],
          "start": 962,
          "end": 978
        },
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 979,
            "end": 982
          }
        ],
        "optional": false,
        "start": 959,
        "end": 983
      },
      "directive": null,
      "start": 959,
      "end": 984
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 1005,
        "end": 1008
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1009,
              "end": 1010
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1019,
                "end": 1022
              },
              "start": 1019,
              "end": 1024
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1009,
            "end": 1024
          }
        ],
        "start": 1008,
        "end": 1025
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 1029,
            "end": 1033
          },
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
                "start": 1035,
                "end": 1036
              },
              "typeArguments": null,
              "start": 1035,
              "end": 1036
            },
            "start": 1033,
            "end": 1036
          },
          "value": null,
          "start": 1026,
          "end": 1036
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
            "start": 1039,
            "end": 1040
          },
          "typeArguments": null,
          "start": 1039,
          "end": 1040
        },
        "start": 1037,
        "end": 1040
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 1054,
              "end": 1058
            },
            "start": 1047,
            "end": 1059
          }
        ],
        "start": 1041,
        "end": 1061
      },
      "expression": false,
      "start": 996,
      "end": 1061
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1067,
            "end": 1068
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1071,
              "end": 1074
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1075,
                "end": 1077
              },
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 1079,
                "end": 1081
              }
            ],
            "optional": false,
            "start": 1071,
            "end": 1082
          },
          "definite": false,
          "start": 1067,
          "end": 1082
        }
      ],
      "declare": false,
      "start": 1063,
      "end": 1083
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
            "typeAnnotation": null,
            "start": 1088,
            "end": 1089
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1092,
              "end": 1095
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CoolArray",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1096,
                    "end": 1105
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 1106,
                        "end": 1112
                      }
                    ],
                    "start": 1105,
                    "end": 1113
                  },
                  "start": 1096,
                  "end": 1113
                }
              ],
              "start": 1095,
              "end": 1114
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1115,
                "end": 1117
              },
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 1119,
                "end": 1121
              }
            ],
            "optional": false,
            "start": 1092,
            "end": 1122
          },
          "definite": false,
          "start": 1088,
          "end": 1122
        }
      ],
      "declare": false,
      "start": 1084,
      "end": 1123
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 1152,
        "end": 1155
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1156,
              "end": 1157
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1156,
            "end": 1157
          }
        ],
        "start": 1155,
        "end": 1158
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 1162,
            "end": 1166
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "CoolArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 1168,
                "end": 1177
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
                      "start": 1178,
                      "end": 1179
                    },
                    "typeArguments": null,
                    "start": 1178,
                    "end": 1179
                  }
                ],
                "start": 1177,
                "end": 1180
              },
              "start": 1168,
              "end": 1180
            },
            "start": 1166,
            "end": 1180
          },
          "value": null,
          "start": 1159,
          "end": 1180
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1183,
          "end": 1187
        },
        "start": 1181,
        "end": 1187
      },
      "body": null,
      "expression": false,
      "start": 1135,
      "end": 1188
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
            "name": "ca",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CoolArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1207,
                  "end": 1216
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1217,
                      "end": 1223
                    }
                  ],
                  "start": 1216,
                  "end": 1224
                },
                "start": 1207,
                "end": 1224
              },
              "start": 1205,
              "end": 1224
            },
            "start": 1203,
            "end": 1224
          },
          "init": null,
          "definite": false,
          "start": 1203,
          "end": 1224
        }
      ],
      "declare": true,
      "start": 1189,
      "end": 1225
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 1227,
          "end": 1230
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1227,
        "end": 1232
      },
      "directive": null,
      "start": 1227,
      "end": 1233
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 1249,
          "end": 1252
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1253,
            "end": 1254
          }
        ],
        "optional": false,
        "start": 1249,
        "end": 1255
      },
      "directive": null,
      "start": 1249,
      "end": 1256
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 1271,
          "end": 1274
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1275,
            "end": 1276
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1278,
            "end": 1279
          }
        ],
        "optional": false,
        "start": 1271,
        "end": 1280
      },
      "directive": null,
      "start": 1271,
      "end": 1281
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 1293,
          "end": 1296
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ca",
              "optional": false,
              "typeAnnotation": null,
              "start": 1300,
              "end": 1302
            },
            "start": 1297,
            "end": 1302
          }
        ],
        "optional": false,
        "start": 1293,
        "end": 1303
      },
      "directive": null,
      "start": 1293,
      "end": 1304
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hmm",
        "optional": false,
        "typeAnnotation": null,
        "start": 1355,
        "end": 1358
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1359,
              "end": 1360
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [],
                  "start": 1369,
                  "end": 1371
                },
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1375,
                      "end": 1381
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 1383,
                      "end": 1389
                    }
                  ],
                  "start": 1374,
                  "end": 1390
                }
              ],
              "start": 1369,
              "end": 1390
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1359,
            "end": 1390
          }
        ],
        "start": 1358,
        "end": 1391
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 1395,
            "end": 1399
          },
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
                "start": 1401,
                "end": 1402
              },
              "typeArguments": null,
              "start": 1401,
              "end": 1402
            },
            "start": 1399,
            "end": 1402
          },
          "value": null,
          "start": 1392,
          "end": 1402
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1405,
          "end": 1409
        },
        "start": 1403,
        "end": 1409
      },
      "body": null,
      "expression": false,
      "start": 1338,
      "end": 1410
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "hmm",
          "optional": false,
          "typeAnnotation": null,
          "start": 1411,
          "end": 1414
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1411,
        "end": 1416
      },
      "directive": null,
      "start": 1411,
      "end": 1417
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "hmm",
          "optional": false,
          "typeAnnotation": null,
          "start": 1434,
          "end": 1437
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1438,
            "end": 1439
          },
          {
            "type": "Literal",
            "value": "s",
            "raw": "\"s\"",
            "start": 1441,
            "end": 1444
          }
        ],
        "optional": false,
        "start": 1434,
        "end": 1445
      },
      "directive": null,
      "start": 1434,
      "end": 1446
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "hmm",
          "optional": false,
          "typeAnnotation": null,
          "start": 1469,
          "end": 1472
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "what",
            "raw": "\"what\"",
            "start": 1473,
            "end": 1479
          }
        ],
        "optional": false,
        "start": 1469,
        "end": 1480
      },
      "directive": null,
      "start": 1469,
      "end": 1481
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1564,
        "end": 1568
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 1572,
            "end": 1576
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 1578,
                    "end": 1584
                  },
                  "start": 1578,
                  "end": 1586
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 1589,
                    "end": 1595
                  },
                  "start": 1589,
                  "end": 1597
                }
              ],
              "start": 1578,
              "end": 1597
            },
            "start": 1576,
            "end": 1597
          },
          "value": null,
          "start": 1569,
          "end": 1597
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1600,
          "end": 1604
        },
        "start": 1598,
        "end": 1604
      },
      "body": null,
      "expression": false,
      "start": 1547,
      "end": 1605
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
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1614,
                  "end": 1627
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1628,
                      "end": 1634
                    }
                  ],
                  "start": 1627,
                  "end": 1635
                },
                "start": 1614,
                "end": 1635
              },
              "start": 1612,
              "end": 1635
            },
            "start": 1610,
            "end": 1635
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 1639,
                "end": 1646
              }
            ],
            "start": 1638,
            "end": 1647
          },
          "definite": false,
          "start": 1610,
          "end": 1647
        }
      ],
      "declare": false,
      "start": 1606,
      "end": 1648
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1649,
          "end": 1653
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1657,
              "end": 1659
            },
            "start": 1654,
            "end": 1659
          }
        ],
        "optional": false,
        "start": 1649,
        "end": 1660
      },
      "directive": null,
      "start": 1649,
      "end": 1661
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RestParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 1691,
        "end": 1701
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSNamedTupleMember",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1705,
                  "end": 1706
                },
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 1708,
                  "end": 1714
                },
                "optional": false,
                "start": 1705,
                "end": 1714
              }
            ],
            "start": 1704,
            "end": 1715
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSNamedTupleMember",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1719,
                  "end": 1720
                },
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 1722,
                  "end": 1728
                },
                "optional": false,
                "start": 1719,
                "end": 1728
              }
            ],
            "start": 1718,
            "end": 1729
          }
        ],
        "start": 1704,
        "end": 1729
      },
      "declare": false,
      "start": 1686,
      "end": 1730
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Signature",
        "optional": false,
        "typeAnnotation": null,
        "start": 1737,
        "end": 1746
      },
      "typeParameters": null,
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
                "type": "TSStringKeyword",
                "start": 1753,
                "end": 1759
              },
              "start": 1751,
              "end": 1759
            },
            "start": 1750,
            "end": 1759
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
              "start": 1764,
              "end": 1768
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RestParams",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1770,
                  "end": 1780
                },
                "typeArguments": null,
                "start": 1770,
                "end": 1780
              },
              "start": 1768,
              "end": 1780
            },
            "value": null,
            "start": 1761,
            "end": 1780
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1785,
            "end": 1789
          },
          "start": 1782,
          "end": 1789
        },
        "start": 1749,
        "end": 1789
      },
      "declare": false,
      "start": 1732,
      "end": 1790
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MergedParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 1797,
        "end": 1809
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 1812,
          "end": 1822
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Signature",
                "optional": false,
                "typeAnnotation": null,
                "start": 1823,
                "end": 1832
              },
              "typeArguments": null,
              "start": 1823,
              "end": 1832
            }
          ],
          "start": 1822,
          "end": 1833
        },
        "start": 1812,
        "end": 1833
      },
      "declare": false,
      "start": 1792,
      "end": 1834
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
            "name": "ff1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rest",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1909,
                      "end": 1913
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1916,
                                "end": 1922
                              },
                              {
                                "type": "TSStringKeyword",
                                "start": 1924,
                                "end": 1930
                              }
                            ],
                            "start": 1915,
                            "end": 1931
                          },
                          {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1935,
                                "end": 1941
                              },
                              {
                                "type": "TSNumberKeyword",
                                "start": 1943,
                                "end": 1949
                              }
                            ],
                            "start": 1934,
                            "end": 1950
                          }
                        ],
                        "start": 1915,
                        "end": 1950
                      },
                      "start": 1913,
                      "end": 1950
                    },
                    "value": null,
                    "start": 1906,
                    "end": 1950
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1955,
                    "end": 1959
                  },
                  "start": 1952,
                  "end": 1959
                },
                "start": 1905,
                "end": 1959
              },
              "start": 1903,
              "end": 1959
            },
            "start": 1900,
            "end": 1959
          },
          "init": null,
          "definite": false,
          "start": 1900,
          "end": 1959
        }
      ],
      "declare": true,
      "start": 1888,
      "end": 1960
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
            "name": "ff2",
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
                        "type": "TSStringKeyword",
                        "start": 1982,
                        "end": 1988
                      },
                      "start": 1980,
                      "end": 1988
                    },
                    "start": 1979,
                    "end": 1988
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
                      "start": 1993,
                      "end": 1997
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSStringKeyword",
                                "start": 2000,
                                "end": 2006
                              }
                            ],
                            "start": 1999,
                            "end": 2007
                          },
                          {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 2011,
                                "end": 2017
                              }
                            ],
                            "start": 2010,
                            "end": 2018
                          }
                        ],
                        "start": 1999,
                        "end": 2018
                      },
                      "start": 1997,
                      "end": 2018
                    },
                    "value": null,
                    "start": 1990,
                    "end": 2018
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 2023,
                    "end": 2027
                  },
                  "start": 2020,
                  "end": 2027
                },
                "start": 1978,
                "end": 2027
              },
              "start": 1976,
              "end": 2027
            },
            "start": 1973,
            "end": 2027
          },
          "init": null,
          "definite": false,
          "start": 1973,
          "end": 2027
        }
      ],
      "declare": true,
      "start": 1961,
      "end": 2028
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "ff1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2030,
          "end": 2033
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ff2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2036,
          "end": 2039
        },
        "start": 2030,
        "end": 2039
      },
      "directive": null,
      "start": 2030,
      "end": 2040
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "ff2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2041,
          "end": 2044
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ff1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2047,
          "end": 2050
        },
        "start": 2041,
        "end": 2050
      },
      "directive": null,
      "start": 2041,
      "end": 2051
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2062,
        "end": 2065
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 2066,
              "end": 2067
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 2076,
                "end": 2083
              },
              "start": 2076,
              "end": 2085
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2066,
            "end": 2085
          }
        ],
        "start": 2065,
        "end": 2086
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2095,
                    "end": 2099
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2102,
                            "end": 2103
                          },
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 2105,
                            "end": 2111
                          },
                          "optional": false,
                          "start": 2102,
                          "end": 2111
                        },
                        {
                          "type": "TSRestType",
                          "typeAnnotation": {
                            "type": "TSNamedTupleMember",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "rest",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2116,
                              "end": 2120
                            },
                            "elementType": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2122,
                                    "end": 2123
                                  },
                                  "typeArguments": null,
                                  "start": 2122,
                                  "end": 2123
                                },
                                {
                                  "type": "TSTupleType",
                                  "elementTypes": [
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 2127,
                                      "end": 2133
                                    }
                                  ],
                                  "start": 2126,
                                  "end": 2134
                                }
                              ],
                              "start": 2122,
                              "end": 2134
                            },
                            "optional": false,
                            "start": 2116,
                            "end": 2134
                          },
                          "start": 2113,
                          "end": 2134
                        }
                      ],
                      "start": 2101,
                      "end": 2135
                    },
                    "start": 2099,
                    "end": 2135
                  },
                  "value": null,
                  "start": 2092,
                  "end": 2135
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2140,
                  "end": 2144
                },
                "start": 2137,
                "end": 2144
              },
              "start": 2091,
              "end": 2144
            },
            "start": 2089,
            "end": 2144
          },
          "start": 2087,
          "end": 2144
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
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
                      "type": "TSStringKeyword",
                      "start": 2154,
                      "end": 2160
                    },
                    "start": 2152,
                    "end": 2160
                  },
                  "start": 2151,
                  "end": 2160
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
                    "start": 2165,
                    "end": 2169
                  },
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
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2171,
                            "end": 2172
                          },
                          "typeArguments": null,
                          "start": 2171,
                          "end": 2172
                        },
                        {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 2176,
                              "end": 2182
                            }
                          ],
                          "start": 2175,
                          "end": 2183
                        }
                      ],
                      "start": 2171,
                      "end": 2183
                    },
                    "start": 2169,
                    "end": 2183
                  },
                  "value": null,
                  "start": 2162,
                  "end": 2183
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2188,
                  "end": 2192
                },
                "start": 2185,
                "end": 2192
              },
              "start": 2150,
              "end": 2192
            },
            "start": 2148,
            "end": 2192
          },
          "start": 2146,
          "end": 2192
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
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2200,
                "end": 2202
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2205,
                "end": 2207
              },
              "start": 2200,
              "end": 2207
            },
            "directive": null,
            "start": 2200,
            "end": 2208
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2213,
                "end": 2215
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2218,
                "end": 2220
              },
              "start": 2213,
              "end": 2220
            },
            "directive": null,
            "start": 2213,
            "end": 2221
          }
        ],
        "start": 2194,
        "end": 2223
      },
      "expression": false,
      "start": 2053,
      "end": 2223
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2223
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
    "value": "let",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 12,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 28,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 31,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 57,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 67,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 70,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 76,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 84,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 88,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 93,
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
    "value": ",",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 115,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 118,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 124,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 132,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 136,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 144,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 155,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 166,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 175,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 178,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 184,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 192,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 196,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 201,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 204,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 211,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 219,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 230,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 246,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 256,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 259,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 266,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 274,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 280,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 285,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 296,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 304,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 314,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 322,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 328,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 332,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 342,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 353,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 361,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 371,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 379,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 385,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 390,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 400,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 410,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 418,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 428,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 436,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 442,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 446,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 456,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 466,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 476,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 484,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 495,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 498,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 503,
    "end": 504
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 505,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 513,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 515,
    "end": 516
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 516,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 521,
    "end": 522
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 523,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 525,
    "end": 526
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 527,
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
    "type": "Identifier",
    "value": "f1",
    "start": 534,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 536,
    "end": 537
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 537,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 544,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 547,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 552,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 554,
    "end": 555
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 555,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 562,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 565,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 570,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 572,
    "end": 573
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 573,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 580,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 583,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 588,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 590,
    "end": 591
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 591,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 598,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 601,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 606,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 608,
    "end": 609
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 609,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 614,
    "end": 615
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 616,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 631,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 633,
    "end": 634
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 634,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 653,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 658,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 662,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 667,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 671,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 676,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 680,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 685,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 699,
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
    "value": "f3",
    "start": 704,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 718,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 723,
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
    "start": 750,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "CoolArray",
    "start": 760,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "Array",
    "start": 781,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "hello",
    "start": 797,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 804,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 815,
    "end": 822
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 823,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 832,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 836,
    "end": 837
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 838,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 846,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 853,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 858,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 861,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 870,
    "end": 872
  },
  {
    "type": "Keyword",
    "value": "void",
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
    "value": ":",
    "start": 878,
    "end": 879
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 880,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 887,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "CoolArray",
    "start": 891,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 901,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 923,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "CoolArray",
    "start": 927,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 937,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 942,
    "end": 943
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 943,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 959,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "CoolArray",
    "start": 963,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 973,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "(",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 979,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 983,
    "end": 984
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 996,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1005,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1011,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1019,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1026,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1029,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1047,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1054,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1063,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1071,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1075,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 1079,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1084,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1092,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "CoolArray",
    "start": 1096,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1106,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1115,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 1119,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1135,
    "end": 1142
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1143,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 1152,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1159,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1162,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "CoolArray",
    "start": 1168,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1183,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1189,
    "end": 1196
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1197,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "ca",
    "start": 1203,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "CoolArray",
    "start": 1207,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1217,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 1227,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 1249,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 1271,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 1293,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1297,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "ca",
    "start": 1300,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1338,
    "end": 1345
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1346,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "hmm",
    "start": 1355,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1361,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1375,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1383,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1392,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1395,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1405,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "hmm",
    "start": 1411,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "hmm",
    "start": 1434,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 1441,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "hmm",
    "start": 1469,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "String",
    "value": "\"what\"",
    "start": 1473,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1547,
    "end": 1554
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1555,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1564,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1569,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1572,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1578,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1589,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1600,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1606,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1610,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 1614,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1628,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1639,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1649,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1654,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1657,
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
    "value": ";",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1686,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "RestParams",
    "start": 1691,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1708,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1722,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1732,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "Signature",
    "start": 1737,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1753,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1761,
    "end": 1764
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 1764,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "RestParams",
    "start": 1770,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1782,
    "end": 1784
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1785,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1792,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "MergedParams",
    "start": 1797,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 1812,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "Signature",
    "start": 1823,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1888,
    "end": 1895
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1896,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "ff1",
    "start": 1900,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1906,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 1909,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1916,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1924,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1935,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1943,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1952,
    "end": 1954
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1955,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1961,
    "end": 1968
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1969,
    "end": 1972
  },
  {
    "type": "Identifier",
    "value": "ff2",
    "start": 1973,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1982,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1990,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 1993,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2000,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2011,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "void",
    "start": 2023,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "ff1",
    "start": 2030,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "ff2",
    "start": 2036,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Identifier",
    "value": "ff2",
    "start": 2041,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Identifier",
    "value": "ff1",
    "start": 2047,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2053,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "ff3",
    "start": 2062,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2068,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2076,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 2087,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2092,
    "end": 2095
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2095,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2105,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2113,
    "end": 2116
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 2116,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2127,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2137,
    "end": 2139
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2140,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 2146,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2154,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2162,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 2165,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2176,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2185,
    "end": 2187
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2188,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 2200,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 2205,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 2213,
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
    "value": "s1",
    "start": 2218,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2222,
    "end": 2223
  }
]
```

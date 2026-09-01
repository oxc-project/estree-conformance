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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 72
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 74
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 90
            },
            "start": 82,
            "end": 91
          }
        ],
        "start": 76,
        "end": 93
      },
      "expression": false,
      "start": 61,
      "end": 93
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
            "typeAnnotation": null,
            "start": 100,
            "end": 102
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 107
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 108,
                "end": 111
              }
            ],
            "optional": false,
            "start": 105,
            "end": 112
          },
          "definite": false,
          "start": 100,
          "end": 112
        }
      ],
      "declare": false,
      "start": 94,
      "end": 113
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
            "typeAnnotation": null,
            "start": 120,
            "end": 122
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 127
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 129,
                    "end": 132
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "b",
                        "raw": "\"b\"",
                        "start": 135,
                        "end": 138
                      },
                      {
                        "type": "Literal",
                        "value": "c",
                        "raw": "\"c\"",
                        "start": 140,
                        "end": 143
                      }
                    ],
                    "start": 134,
                    "end": 144
                  }
                ],
                "start": 128,
                "end": 145
              }
            ],
            "optional": false,
            "start": 125,
            "end": 146
          },
          "definite": false,
          "start": 120,
          "end": 146
        }
      ],
      "declare": false,
      "start": 114,
      "end": 147
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
            "typeAnnotation": null,
            "start": 154,
            "end": 156
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 161
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 164,
                      "end": 165
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 167,
                      "end": 168
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 164,
                    "end": 168
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 170,
                      "end": 171
                    },
                    "value": {
                      "type": "Literal",
                      "value": "c",
                      "raw": "\"c\"",
                      "start": 173,
                      "end": 176
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 170,
                    "end": 176
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 178,
                      "end": 179
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "e",
                          "raw": "\"e\"",
                          "start": 182,
                          "end": 185
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 187,
                          "end": 188
                        },
                        {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 190,
                          "end": 194
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
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 198,
                                "end": 199
                              },
                              "value": {
                                "type": "Literal",
                                "value": "g",
                                "raw": "\"g\"",
                                "start": 201,
                                "end": 204
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 198,
                              "end": 204
                            }
                          ],
                          "start": 196,
                          "end": 206
                        }
                      ],
                      "start": 181,
                      "end": 207
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 178,
                    "end": 207
                  }
                ],
                "start": 162,
                "end": 209
              }
            ],
            "optional": false,
            "start": 159,
            "end": 210
          },
          "definite": false,
          "start": 154,
          "end": 210
        }
      ],
      "declare": false,
      "start": 148,
      "end": 211
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 286,
        "end": 288
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 289,
          "end": 290
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 305,
              "end": 306
            },
            "start": 298,
            "end": 307
          }
        ],
        "start": 292,
        "end": 309
      },
      "expression": false,
      "start": 277,
      "end": 309
    },
    {
      "type": "EmptyStatement",
      "start": 309,
      "end": 310
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
            "typeAnnotation": null,
            "start": 317,
            "end": 319
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 322,
              "end": 324
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 325,
                "end": 328
              }
            ],
            "optional": false,
            "start": 322,
            "end": 329
          },
          "definite": false,
          "start": 317,
          "end": 329
        }
      ],
      "declare": false,
      "start": 311,
      "end": 330
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
            "name": "t5",
            "optional": false,
            "typeAnnotation": null,
            "start": 337,
            "end": 339
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 344
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 346,
                    "end": 349
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "b",
                        "raw": "'b'",
                        "start": 352,
                        "end": 355
                      },
                      {
                        "type": "Literal",
                        "value": "c",
                        "raw": "'c'",
                        "start": 357,
                        "end": 360
                      }
                    ],
                    "start": 351,
                    "end": 361
                  }
                ],
                "start": 345,
                "end": 362
              }
            ],
            "optional": false,
            "start": 342,
            "end": 363
          },
          "definite": false,
          "start": 337,
          "end": 363
        }
      ],
      "declare": false,
      "start": 331,
      "end": 364
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
            "name": "t6",
            "optional": false,
            "typeAnnotation": null,
            "start": 371,
            "end": 373
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 378
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 381,
                      "end": 382
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 384,
                      "end": 385
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 381,
                    "end": 385
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 387,
                      "end": 388
                    },
                    "value": {
                      "type": "Literal",
                      "value": "c",
                      "raw": "\"c\"",
                      "start": 390,
                      "end": 393
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 387,
                    "end": 393
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 395,
                      "end": 396
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "e",
                          "raw": "\"e\"",
                          "start": 399,
                          "end": 402
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 404,
                          "end": 405
                        },
                        {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 407,
                          "end": 411
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
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 415,
                                "end": 416
                              },
                              "value": {
                                "type": "Literal",
                                "value": "g",
                                "raw": "\"g\"",
                                "start": 418,
                                "end": 421
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 415,
                              "end": 421
                            }
                          ],
                          "start": 413,
                          "end": 423
                        }
                      ],
                      "start": 398,
                      "end": 424
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 395,
                    "end": 424
                  }
                ],
                "start": 379,
                "end": 426
              }
            ],
            "optional": false,
            "start": 376,
            "end": 427
          },
          "definite": false,
          "start": 371,
          "end": 427
        }
      ],
      "declare": false,
      "start": 365,
      "end": 428
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 502,
        "end": 504
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 505,
          "end": 506
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 522,
                  "end": 523
                }
              ],
              "start": 521,
              "end": 524
            },
            "start": 514,
            "end": 525
          }
        ],
        "start": 508,
        "end": 527
      },
      "expression": false,
      "start": 493,
      "end": 527
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
            "name": "t7",
            "optional": false,
            "typeAnnotation": null,
            "start": 534,
            "end": 536
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 539,
              "end": 541
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 542,
                "end": 549
              }
            ],
            "optional": false,
            "start": 539,
            "end": 550
          },
          "definite": false,
          "start": 534,
          "end": 550
        }
      ],
      "declare": false,
      "start": 528,
      "end": 551
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
            "name": "t8",
            "optional": false,
            "typeAnnotation": null,
            "start": 558,
            "end": 560
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 563,
              "end": 565
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 566,
                "end": 573
              }
            ],
            "optional": false,
            "start": 563,
            "end": 574
          },
          "definite": false,
          "start": 558,
          "end": 574
        }
      ],
      "declare": false,
      "start": 552,
      "end": 575
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 652,
        "end": 654
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 655,
          "end": 656
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 671,
                "end": 672
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 673,
                "end": 674
              },
              "optional": false,
              "computed": true,
              "start": 671,
              "end": 675
            },
            "start": 664,
            "end": 676
          }
        ],
        "start": 658,
        "end": 678
      },
      "expression": false,
      "start": 643,
      "end": 678
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
            "name": "t9",
            "optional": false,
            "typeAnnotation": null,
            "start": 685,
            "end": 687
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 690,
              "end": 692
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 695,
                        "end": 696
                      },
                      {
                        "type": "Literal",
                        "value": "x",
                        "raw": "\"x\"",
                        "start": 698,
                        "end": 701
                      }
                    ],
                    "start": 694,
                    "end": 702
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 705,
                        "end": 706
                      },
                      {
                        "type": "Literal",
                        "value": "y",
                        "raw": "\"y\"",
                        "start": 708,
                        "end": 711
                      }
                    ],
                    "start": 704,
                    "end": 712
                  }
                ],
                "start": 693,
                "end": 713
              }
            ],
            "optional": false,
            "start": 690,
            "end": 714
          },
          "definite": false,
          "start": 685,
          "end": 714
        }
      ],
      "declare": false,
      "start": 679,
      "end": 715
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
            "name": "t10",
            "optional": false,
            "typeAnnotation": null,
            "start": 722,
            "end": 725
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 728,
              "end": 730
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
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
                          "start": 734,
                          "end": 735
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 737,
                          "end": 738
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 734,
                        "end": 738
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 740,
                          "end": 741
                        },
                        "value": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "\"x\"",
                          "start": 743,
                          "end": 746
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 740,
                        "end": 746
                      }
                    ],
                    "start": 732,
                    "end": 748
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 752,
                          "end": 753
                        },
                        "value": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 755,
                          "end": 756
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 752,
                        "end": 756
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 758,
                          "end": 759
                        },
                        "value": {
                          "type": "Literal",
                          "value": "y",
                          "raw": "\"y\"",
                          "start": 761,
                          "end": 764
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 758,
                        "end": 764
                      }
                    ],
                    "start": 750,
                    "end": 766
                  }
                ],
                "start": 731,
                "end": 767
              }
            ],
            "optional": false,
            "start": 728,
            "end": 768
          },
          "definite": false,
          "start": 722,
          "end": 768
        }
      ],
      "declare": false,
      "start": 716,
      "end": 769
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 855,
        "end": 857
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
          "typeAnnotation": null,
          "start": 858,
          "end": 861
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 876,
                "end": 879
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 880,
                "end": 881
              },
              "optional": false,
              "computed": false,
              "start": 876,
              "end": 881
            },
            "start": 869,
            "end": 882
          }
        ],
        "start": 863,
        "end": 884
      },
      "expression": false,
      "start": 846,
      "end": 884
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
            "name": "t11",
            "optional": false,
            "typeAnnotation": null,
            "start": 891,
            "end": 894
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5",
              "optional": false,
              "typeAnnotation": null,
              "start": 897,
              "end": 899
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
                      "start": 902,
                      "end": 903
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 906,
                          "end": 907
                        },
                        {
                          "type": "Literal",
                          "value": "x",
                          "raw": "\"x\"",
                          "start": 909,
                          "end": 912
                        }
                      ],
                      "start": 905,
                      "end": 913
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 902,
                    "end": 913
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
                      "start": 915,
                      "end": 916
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 919,
                          "end": 920
                        },
                        {
                          "type": "Literal",
                          "value": "y",
                          "raw": "\"y\"",
                          "start": 922,
                          "end": 925
                        }
                      ],
                      "start": 918,
                      "end": 926
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 915,
                    "end": 926
                  }
                ],
                "start": 900,
                "end": 928
              }
            ],
            "optional": false,
            "start": 897,
            "end": 929
          },
          "definite": false,
          "start": 891,
          "end": 929
        }
      ],
      "declare": false,
      "start": 885,
      "end": 930
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
            "name": "t12",
            "optional": false,
            "typeAnnotation": null,
            "start": 937,
            "end": 940
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5",
              "optional": false,
              "typeAnnotation": null,
              "start": 943,
              "end": 945
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
                      "start": 948,
                      "end": 949
                    },
                    "value": {
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
                            "start": 953,
                            "end": 954
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 956,
                            "end": 957
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 953,
                          "end": 957
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 959,
                            "end": 960
                          },
                          "value": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 962,
                            "end": 965
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 959,
                          "end": 965
                        }
                      ],
                      "start": 951,
                      "end": 967
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 948,
                    "end": 967
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
                      "start": 969,
                      "end": 970
                    },
                    "value": {
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
                            "start": 974,
                            "end": 975
                          },
                          "value": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 977,
                            "end": 978
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 974,
                          "end": 978
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 980,
                            "end": 981
                          },
                          "value": {
                            "type": "Literal",
                            "value": "y",
                            "raw": "\"y\"",
                            "start": 983,
                            "end": 986
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 980,
                          "end": 986
                        }
                      ],
                      "start": 972,
                      "end": 988
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 969,
                    "end": 988
                  }
                ],
                "start": 946,
                "end": 990
              }
            ],
            "optional": false,
            "start": 943,
            "end": 991
          },
          "definite": false,
          "start": 937,
          "end": 991
        }
      ],
      "declare": false,
      "start": 931,
      "end": 992
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 1029,
        "end": 1030
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
              "start": 1073,
              "end": 1084
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1085,
                  "end": 1086
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1088,
                "end": 1090
              },
              "expression": false,
              "start": 1084,
              "end": 1090
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1073,
            "end": 1090
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1157,
              "end": 1160
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1161,
                  "end": 1162
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1181,
                      "end": 1182
                    },
                    "start": 1174,
                    "end": 1183
                  }
                ],
                "start": 1164,
                "end": 1189
              },
              "expression": false,
              "start": 1160,
              "end": 1189
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1157,
            "end": 1189
          }
        ],
        "start": 1031,
        "end": 1191
      },
      "abstract": false,
      "declare": false,
      "start": 1023,
      "end": 1191
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
            "name": "t13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1199,
            "end": 1202
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1209,
              "end": 1210
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1213,
                      "end": 1214
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1216,
                      "end": 1217
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1213,
                    "end": 1217
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1219,
                      "end": 1220
                    },
                    "value": {
                      "type": "Literal",
                      "value": "c",
                      "raw": "\"c\"",
                      "start": 1222,
                      "end": 1225
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1219,
                    "end": 1225
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1227,
                      "end": 1228
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "e",
                          "raw": "\"e\"",
                          "start": 1231,
                          "end": 1234
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 1236,
                          "end": 1237
                        },
                        {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 1239,
                          "end": 1243
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
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1247,
                                "end": 1248
                              },
                              "value": {
                                "type": "Literal",
                                "value": "g",
                                "raw": "\"g\"",
                                "start": 1250,
                                "end": 1253
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1247,
                              "end": 1253
                            }
                          ],
                          "start": 1245,
                          "end": 1255
                        }
                      ],
                      "start": 1230,
                      "end": 1256
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1227,
                    "end": 1256
                  }
                ],
                "start": 1211,
                "end": 1258
              }
            ],
            "start": 1205,
            "end": 1259
          },
          "definite": false,
          "start": 1199,
          "end": 1259
        }
      ],
      "declare": false,
      "start": 1193,
      "end": 1260
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
            "name": "t14",
            "optional": false,
            "typeAnnotation": null,
            "start": 1267,
            "end": 1270
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t13",
                "optional": false,
                "typeAnnotation": null,
                "start": 1273,
                "end": 1276
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1277,
                "end": 1280
              },
              "optional": false,
              "computed": false,
              "start": 1273,
              "end": 1280
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 1282,
                    "end": 1285
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "b",
                        "raw": "\"b\"",
                        "start": 1288,
                        "end": 1291
                      },
                      {
                        "type": "Literal",
                        "value": "c",
                        "raw": "\"c\"",
                        "start": 1293,
                        "end": 1296
                      }
                    ],
                    "start": 1287,
                    "end": 1297
                  }
                ],
                "start": 1281,
                "end": 1298
              }
            ],
            "optional": false,
            "start": 1273,
            "end": 1299
          },
          "definite": false,
          "start": 1267,
          "end": 1299
        }
      ],
      "declare": false,
      "start": 1261,
      "end": 1300
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1396,
        "end": 1398
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
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 1402,
            "end": 1406
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 1399,
          "end": 1406
        }
      ],
      "returnType": null,
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
              "start": 1421,
              "end": 1425
            },
            "start": 1414,
            "end": 1426
          }
        ],
        "start": 1408,
        "end": 1428
      },
      "expression": false,
      "start": 1387,
      "end": 1428
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
            "name": "t15",
            "optional": false,
            "typeAnnotation": null,
            "start": 1435,
            "end": 1438
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1441,
              "end": 1443
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1444,
                "end": 1445
              },
              {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 1447,
                "end": 1450
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1454,
                      "end": 1455
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1457,
                      "end": 1458
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1454,
                    "end": 1458
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1460,
                      "end": 1461
                    },
                    "value": {
                      "type": "Literal",
                      "value": "x",
                      "raw": "'x'",
                      "start": 1463,
                      "end": 1466
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1460,
                    "end": 1466
                  }
                ],
                "start": 1452,
                "end": 1468
              }
            ],
            "optional": false,
            "start": 1441,
            "end": 1469
          },
          "definite": false,
          "start": 1435,
          "end": 1469
        }
      ],
      "declare": false,
      "start": 1429,
      "end": 1470
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 61,
  "end": 1470
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 61,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 70,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 82,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 94,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 100,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 105,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 107,
    "end": 108
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 108,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 114,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 120,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 125,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 128,
    "end": 129
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 129,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 134,
    "end": 135
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 135,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 138,
    "end": 139
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 140,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 148,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 154,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 159,
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
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 173,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 181,
    "end": 182
  },
  {
    "type": "String",
    "value": "\"e\"",
    "start": 182,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 185,
    "end": 186
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 188,
    "end": 189
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 190,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "String",
    "value": "\"g\"",
    "start": 201,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 277,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 286,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 298,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 311,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 317,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 322,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 324,
    "end": 325
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 325,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
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
    "value": "const",
    "start": 331,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 337,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 342,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 345,
    "end": 346
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 346,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 351,
    "end": 352
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 352,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 355,
    "end": 356
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 357,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "const",
    "start": 365,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 371,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 376,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 382,
    "end": 383
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 390,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 398,
    "end": 399
  },
  {
    "type": "String",
    "value": "\"e\"",
    "start": 399,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 402,
    "end": 403
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 405,
    "end": 406
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 407,
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
    "value": "{",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "String",
    "value": "\"g\"",
    "start": 418,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 493,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 502,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 508,
    "end": 509
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 514,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 526,
    "end": 527
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 528,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 534,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 539,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 541,
    "end": 542
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 542,
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
    "type": "Keyword",
    "value": "const",
    "start": 552,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "t8",
    "start": 558,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 563,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 565,
    "end": 566
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 566,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 574,
    "end": 575
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 643,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 652,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 664,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 672,
    "end": 673
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 677,
    "end": 678
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 679,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "t9",
    "start": 685,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 690,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 694,
    "end": 695
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 696,
    "end": 697
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 698,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 704,
    "end": 705
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 706,
    "end": 707
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 708,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 714,
    "end": 715
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 716,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "t10",
    "start": 722,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 728,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 735,
    "end": 736
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 741,
    "end": 742
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 743,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 753,
    "end": 754
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 759,
    "end": 760
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 761,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 768,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 846,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 855,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 858,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 863,
    "end": 864
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 869,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 876,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 883,
    "end": 884
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 885,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "t11",
    "start": 891,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 897,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 905,
    "end": 906
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 907,
    "end": 908
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 909,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 918,
    "end": 919
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 920,
    "end": 921
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 922,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 929,
    "end": 930
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 931,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "t12",
    "start": 937,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 943,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 954,
    "end": 955
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 960,
    "end": 961
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 962,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 975,
    "end": 976
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 981,
    "end": 982
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 983,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 991,
    "end": 992
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1023,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1073,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1157,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1174,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1193,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "t13",
    "start": 1199,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1205,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 1222,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "String",
    "value": "\"e\"",
    "start": 1231,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1239,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "String",
    "value": "\"g\"",
    "start": 1250,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1261,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "t14",
    "start": 1267,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "t13",
    "start": 1273,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1277,
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
    "value": "[",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1282,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 1288,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 1293,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1387,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 1396,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1399,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1402,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1414,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1421,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1429,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "t15",
    "start": 1435,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 1441,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 1447,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 1463,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1469,
    "end": 1470
  }
]
```

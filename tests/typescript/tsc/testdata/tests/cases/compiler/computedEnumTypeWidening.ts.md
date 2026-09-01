__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "computed",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 25
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSNumberKeyword",
              "start": 29,
              "end": 35
            },
            "start": 27,
            "end": 35
          },
          "start": 26,
          "end": 35
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 38,
          "end": 44
        },
        "start": 36,
        "end": 44
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 53
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
              "start": 60,
              "end": 61
            },
            "initializer": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "computed",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 72
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 73,
                  "end": 74
                }
              ],
              "optional": false,
              "start": 64,
              "end": 75
            },
            "computed": false,
            "start": 60,
            "end": 75
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 82
            },
            "initializer": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "computed",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 93
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 94,
                  "end": 95
                }
              ],
              "optional": false,
              "start": 85,
              "end": 96
            },
            "computed": false,
            "start": 81,
            "end": 96
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 103
            },
            "initializer": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "computed",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 114
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 115,
                  "end": 116
                }
              ],
              "optional": false,
              "start": 106,
              "end": 117
            },
            "computed": false,
            "start": 102,
            "end": 117
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 124
            },
            "initializer": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "computed",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 135
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 136,
                  "end": 137
                }
              ],
              "optional": false,
              "start": 127,
              "end": 138
            },
            "computed": false,
            "start": 123,
            "end": 138
          }
        ],
        "start": 54,
        "end": 141
      },
      "const": false,
      "declare": false,
      "start": 47,
      "end": 141
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 154
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 171
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 174,
                    "end": 175
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 176,
                    "end": 177
                  },
                  "optional": false,
                  "computed": false,
                  "start": 174,
                  "end": 177
                },
                "definite": false,
                "start": 169,
                "end": 177
              }
            ],
            "declare": false,
            "start": 163,
            "end": 178
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 203
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 208
                },
                "definite": false,
                "start": 201,
                "end": 208
              }
            ],
            "declare": false,
            "start": 197,
            "end": 209
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
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 228
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 233
                },
                "definite": false,
                "start": 226,
                "end": 233
              }
            ],
            "declare": false,
            "start": 220,
            "end": 234
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 259
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 262,
                  "end": 264
                },
                "definite": false,
                "start": 257,
                "end": 264
              }
            ],
            "declare": false,
            "start": 253,
            "end": 265
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
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 286,
                          "end": 287
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 288,
                          "end": 289
                        },
                        "start": 286,
                        "end": 289
                      },
                      "typeArguments": null,
                      "start": 286,
                      "end": 289
                    },
                    "start": 284,
                    "end": 289
                  },
                  "start": 282,
                  "end": 289
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 292,
                    "end": 293
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 294,
                    "end": 295
                  },
                  "optional": false,
                  "computed": false,
                  "start": 292,
                  "end": 295
                },
                "definite": false,
                "start": 282,
                "end": 295
              }
            ],
            "declare": false,
            "start": 276,
            "end": 296
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
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 313,
                  "end": 315
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 318,
                  "end": 320
                },
                "definite": false,
                "start": 313,
                "end": 320
              }
            ],
            "declare": false,
            "start": 309,
            "end": 321
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
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 344,
                          "end": 345
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 346,
                          "end": 347
                        },
                        "start": 344,
                        "end": 347
                      },
                      "typeArguments": null,
                      "start": 344,
                      "end": 347
                    },
                    "start": 342,
                    "end": 347
                  },
                  "start": 340,
                  "end": 347
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 350,
                  "end": 352
                },
                "definite": false,
                "start": 340,
                "end": 352
              }
            ],
            "declare": false,
            "start": 334,
            "end": 353
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
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 370,
                  "end": 372
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 375,
                  "end": 377
                },
                "definite": false,
                "start": 370,
                "end": 377
              }
            ],
            "declare": false,
            "start": 366,
            "end": 378
          }
        ],
        "start": 157,
        "end": 388
      },
      "expression": false,
      "start": 143,
      "end": 388
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 399,
        "end": 401
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 408,
              "end": 415
            },
            "start": 406,
            "end": 415
          },
          "start": 402,
          "end": 415
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
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 429,
                  "end": 431
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 434,
                    "end": 438
                  },
                  "consequent": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 441,
                      "end": 442
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 443,
                      "end": 444
                    },
                    "optional": false,
                    "computed": false,
                    "start": 441,
                    "end": 444
                  },
                  "alternate": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 447,
                      "end": 448
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 449,
                      "end": 450
                    },
                    "optional": false,
                    "computed": false,
                    "start": 447,
                    "end": 450
                  },
                  "start": 434,
                  "end": 450
                },
                "definite": false,
                "start": 429,
                "end": 450
              }
            ],
            "declare": false,
            "start": 423,
            "end": 451
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
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 492,
                              "end": 493
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 494,
                              "end": 495
                            },
                            "start": 492,
                            "end": 495
                          },
                          "typeArguments": null,
                          "start": 492,
                          "end": 495
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 498,
                              "end": 499
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 500,
                              "end": 501
                            },
                            "start": 498,
                            "end": 501
                          },
                          "typeArguments": null,
                          "start": 498,
                          "end": 501
                        }
                      ],
                      "start": 492,
                      "end": 501
                    },
                    "start": 490,
                    "end": 501
                  },
                  "start": 488,
                  "end": 501
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 504,
                  "end": 506
                },
                "definite": false,
                "start": 488,
                "end": 506
              }
            ],
            "declare": false,
            "start": 482,
            "end": 507
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
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 532,
                  "end": 534
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 537,
                    "end": 541
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 544,
                    "end": 546
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 549,
                    "end": 551
                  },
                  "start": 537,
                  "end": 551
                },
                "definite": false,
                "start": 532,
                "end": 551
              }
            ],
            "declare": false,
            "start": 526,
            "end": 552
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
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 577,
                  "end": 579
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 582,
                    "end": 586
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 589,
                    "end": 591
                  },
                  "alternate": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 594,
                      "end": 595
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 596,
                      "end": 597
                    },
                    "optional": false,
                    "computed": false,
                    "start": 594,
                    "end": 597
                  },
                  "start": 582,
                  "end": 597
                },
                "definite": false,
                "start": 577,
                "end": 597
              }
            ],
            "declare": false,
            "start": 571,
            "end": 598
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
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 639,
                              "end": 640
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 641,
                              "end": 642
                            },
                            "start": 639,
                            "end": 642
                          },
                          "typeArguments": null,
                          "start": 639,
                          "end": 642
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 645,
                              "end": 646
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 647,
                              "end": 648
                            },
                            "start": 645,
                            "end": 648
                          },
                          "typeArguments": null,
                          "start": 645,
                          "end": 648
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 651,
                              "end": 652
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 653,
                              "end": 654
                            },
                            "start": 651,
                            "end": 654
                          },
                          "typeArguments": null,
                          "start": 651,
                          "end": 654
                        }
                      ],
                      "start": 639,
                      "end": 654
                    },
                    "start": 637,
                    "end": 654
                  },
                  "start": 635,
                  "end": 654
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 657,
                  "end": 659
                },
                "definite": false,
                "start": 635,
                "end": 659
              }
            ],
            "declare": false,
            "start": 629,
            "end": 660
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 688,
                  "end": 690
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 693,
                  "end": 695
                },
                "definite": false,
                "start": 688,
                "end": 695
              }
            ],
            "declare": false,
            "start": 684,
            "end": 696
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 711,
                  "end": 713
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 716,
                  "end": 718
                },
                "definite": false,
                "start": 711,
                "end": 718
              }
            ],
            "declare": false,
            "start": 707,
            "end": 719
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
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 742,
                  "end": 744
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 747,
                  "end": 749
                },
                "definite": false,
                "start": 742,
                "end": 749
              }
            ],
            "declare": false,
            "start": 738,
            "end": 750
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
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 773,
                  "end": 775
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 778,
                  "end": 780
                },
                "definite": false,
                "start": 773,
                "end": 780
              }
            ],
            "declare": false,
            "start": 769,
            "end": 781
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
                  "name": "v5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 796,
                  "end": 798
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 801,
                  "end": 803
                },
                "definite": false,
                "start": 796,
                "end": 803
              }
            ],
            "declare": false,
            "start": 792,
            "end": 804
          }
        ],
        "start": 417,
        "end": 826
      },
      "expression": false,
      "start": 390,
      "end": 826
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 837,
        "end": 839
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 854,
                  "end": 856
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 859,
                    "end": 860
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 861,
                    "end": 862
                  },
                  "optional": false,
                  "computed": false,
                  "start": 859,
                  "end": 862
                },
                "definite": false,
                "start": 854,
                "end": 862
              }
            ],
            "declare": false,
            "start": 848,
            "end": 863
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 872,
                  "end": 874
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 877,
                  "end": 879
                },
                "definite": false,
                "start": 872,
                "end": 879
              }
            ],
            "declare": false,
            "start": 868,
            "end": 880
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
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 901,
                          "end": 902
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 903,
                          "end": 904
                        },
                        "start": 901,
                        "end": 904
                      },
                      "typeArguments": null,
                      "start": 901,
                      "end": 904
                    },
                    "start": 899,
                    "end": 904
                  },
                  "start": 897,
                  "end": 904
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 907,
                    "end": 908
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 909,
                    "end": 910
                  },
                  "optional": false,
                  "computed": false,
                  "start": 907,
                  "end": 910
                },
                "definite": false,
                "start": 897,
                "end": 910
              }
            ],
            "declare": false,
            "start": 891,
            "end": 911
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 920,
                  "end": 922
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 925,
                  "end": 927
                },
                "definite": false,
                "start": 920,
                "end": 927
              }
            ],
            "declare": false,
            "start": 916,
            "end": 928
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
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 947,
                  "end": 949
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 952,
                      "end": 953
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 954,
                      "end": 955
                    },
                    "optional": false,
                    "computed": false,
                    "start": 952,
                    "end": 955
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 959,
                        "end": 960
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 961,
                        "end": 962
                      },
                      "start": 959,
                      "end": 962
                    },
                    "typeArguments": null,
                    "start": 959,
                    "end": 962
                  },
                  "start": 952,
                  "end": 962
                },
                "definite": false,
                "start": 947,
                "end": 962
              }
            ],
            "declare": false,
            "start": 941,
            "end": 963
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
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 972,
                  "end": 974
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 977,
                  "end": 979
                },
                "definite": false,
                "start": 972,
                "end": 979
              }
            ],
            "declare": false,
            "start": 968,
            "end": 980
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
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 999,
                  "end": 1001
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1005,
                        "end": 1006
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1007,
                        "end": 1008
                      },
                      "start": 1005,
                      "end": 1008
                    },
                    "typeArguments": null,
                    "start": 1005,
                    "end": 1008
                  },
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1009,
                      "end": 1010
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1011,
                      "end": 1012
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1009,
                    "end": 1012
                  },
                  "start": 1004,
                  "end": 1012
                },
                "definite": false,
                "start": 999,
                "end": 1012
              }
            ],
            "declare": false,
            "start": 993,
            "end": 1013
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
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1022,
                  "end": 1024
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1027,
                  "end": 1029
                },
                "definite": false,
                "start": 1022,
                "end": 1029
              }
            ],
            "declare": false,
            "start": 1018,
            "end": 1030
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
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1049,
                  "end": 1051
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1054,
                      "end": 1055
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1056,
                      "end": 1057
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1054,
                    "end": 1057
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1061,
                      "end": 1066
                    },
                    "typeArguments": null,
                    "start": 1061,
                    "end": 1066
                  },
                  "start": 1054,
                  "end": 1066
                },
                "definite": false,
                "start": 1049,
                "end": 1066
              }
            ],
            "declare": false,
            "start": 1043,
            "end": 1067
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
                  "name": "v5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1076,
                  "end": 1078
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1081,
                  "end": 1083
                },
                "definite": false,
                "start": 1076,
                "end": 1083
              }
            ],
            "declare": false,
            "start": 1072,
            "end": 1084
          }
        ],
        "start": 842,
        "end": 1094
      },
      "expression": false,
      "start": 828,
      "end": 1094
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1109,
        "end": 1111
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
              "start": 1114,
              "end": 1115
            },
            "initializer": null,
            "computed": false,
            "start": 1114,
            "end": 1115
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1117,
              "end": 1118
            },
            "initializer": null,
            "computed": false,
            "start": 1117,
            "end": 1118
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1120,
              "end": 1121
            },
            "initializer": null,
            "computed": false,
            "start": 1120,
            "end": 1121
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 1123,
              "end": 1124
            },
            "initializer": null,
            "computed": false,
            "start": 1123,
            "end": 1124
          }
        ],
        "start": 1112,
        "end": 1126
      },
      "const": false,
      "declare": true,
      "start": 1096,
      "end": 1126
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1137,
        "end": 1139
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1154,
                  "end": 1156
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1159,
                    "end": 1161
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1162,
                    "end": 1163
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1159,
                  "end": 1163
                },
                "definite": false,
                "start": 1154,
                "end": 1163
              }
            ],
            "declare": false,
            "start": 1148,
            "end": 1164
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1188,
                  "end": 1190
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1193,
                    "end": 1194
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1195,
                    "end": 1196
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1193,
                  "end": 1196
                },
                "definite": false,
                "start": 1188,
                "end": 1196
              }
            ],
            "declare": false,
            "start": 1184,
            "end": 1197
          }
        ],
        "start": 1142,
        "end": 1206
      },
      "expression": false,
      "start": 1128,
      "end": 1206
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1214,
            "end": 1216
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1219,
              "end": 1220
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1221,
              "end": 1222
            },
            "optional": false,
            "computed": false,
            "start": 1219,
            "end": 1222
          },
          "definite": false,
          "start": 1214,
          "end": 1222
        }
      ],
      "declare": false,
      "start": 1208,
      "end": 1223
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1230,
            "end": 1232
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1235,
                "end": 1236
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1237,
                "end": 1238
              },
              "optional": false,
              "computed": false,
              "start": 1235,
              "end": 1238
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1242,
                "end": 1247
              },
              "typeArguments": null,
              "start": 1242,
              "end": 1247
            },
            "start": 1235,
            "end": 1247
          },
          "definite": false,
          "start": 1230,
          "end": 1247
        }
      ],
      "declare": false,
      "start": 1224,
      "end": 1248
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1253,
            "end": 1255
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1258,
              "end": 1259
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1260,
              "end": 1261
            },
            "optional": false,
            "computed": false,
            "start": 1258,
            "end": 1261
          },
          "definite": false,
          "start": 1253,
          "end": 1261
        }
      ],
      "declare": false,
      "start": 1249,
      "end": 1262
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
            "name": "v2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1267,
            "end": 1269
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1272,
                "end": 1273
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1274,
                "end": 1275
              },
              "optional": false,
              "computed": false,
              "start": 1272,
              "end": 1275
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1279,
                "end": 1284
              },
              "typeArguments": null,
              "start": 1279,
              "end": 1284
            },
            "start": 1272,
            "end": 1284
          },
          "definite": false,
          "start": 1267,
          "end": 1284
        }
      ],
      "declare": false,
      "start": 1263,
      "end": 1285
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
        "start": 1293,
        "end": 1294
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1299,
              "end": 1301
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1304,
                "end": 1305
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1306,
                "end": 1307
              },
              "optional": false,
              "computed": false,
              "start": 1304,
              "end": 1307
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1299,
            "end": 1308
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1311,
              "end": 1313
            },
            "typeAnnotation": null,
            "value": {
              "type": "TSAsExpression",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1316,
                  "end": 1317
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1318,
                  "end": 1319
                },
                "optional": false,
                "computed": false,
                "start": 1316,
                "end": 1319
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1323,
                  "end": 1328
                },
                "typeArguments": null,
                "start": 1323,
                "end": 1328
              },
              "start": 1316,
              "end": 1328
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1311,
            "end": 1329
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1341,
              "end": 1343
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1346,
                "end": 1347
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1348,
                "end": 1349
              },
              "optional": false,
              "computed": false,
              "start": 1346,
              "end": 1349
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 1332,
            "end": 1350
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1362,
              "end": 1364
            },
            "typeAnnotation": null,
            "value": {
              "type": "TSAsExpression",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1367,
                  "end": 1368
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1369,
                  "end": 1370
                },
                "optional": false,
                "computed": false,
                "start": 1367,
                "end": 1370
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1374,
                  "end": 1379
                },
                "typeArguments": null,
                "start": 1374,
                "end": 1379
              },
              "start": 1367,
              "end": 1379
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 1353,
            "end": 1380
          }
        ],
        "start": 1295,
        "end": 1382
      },
      "abstract": false,
      "declare": false,
      "start": 1287,
      "end": 1382
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 1411,
        "end": 1417
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
              "start": 1420,
              "end": 1421
            },
            "initializer": null,
            "computed": false,
            "start": 1420,
            "end": 1421
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1423,
              "end": 1424
            },
            "initializer": null,
            "computed": false,
            "start": 1423,
            "end": 1424
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1426,
              "end": 1427
            },
            "initializer": null,
            "computed": false,
            "start": 1426,
            "end": 1427
          }
        ],
        "start": 1418,
        "end": 1429
      },
      "const": false,
      "declare": false,
      "start": 1406,
      "end": 1429
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
            "name": "val1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1435,
            "end": 1439
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyEnum",
              "optional": false,
              "typeAnnotation": null,
              "start": 1442,
              "end": 1448
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1449,
              "end": 1450
            },
            "optional": false,
            "computed": false,
            "start": 1442,
            "end": 1450
          },
          "definite": false,
          "start": 1435,
          "end": 1450
        }
      ],
      "declare": false,
      "start": 1431,
      "end": 1451
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "val1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1452,
          "end": 1456
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 1459,
            "end": 1465
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 1466,
            "end": 1467
          },
          "optional": false,
          "computed": false,
          "start": 1459,
          "end": 1467
        },
        "start": 1452,
        "end": 1467
      },
      "directive": null,
      "start": 1452,
      "end": 1468
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyDeclaredEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 1483,
        "end": 1497
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
              "start": 1500,
              "end": 1501
            },
            "initializer": null,
            "computed": false,
            "start": 1500,
            "end": 1501
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1503,
              "end": 1504
            },
            "initializer": null,
            "computed": false,
            "start": 1503,
            "end": 1504
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1506,
              "end": 1507
            },
            "initializer": null,
            "computed": false,
            "start": 1506,
            "end": 1507
          }
        ],
        "start": 1498,
        "end": 1509
      },
      "const": false,
      "declare": true,
      "start": 1470,
      "end": 1509
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
            "name": "val2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1515,
            "end": 1519
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyDeclaredEnum",
              "optional": false,
              "typeAnnotation": null,
              "start": 1522,
              "end": 1536
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1537,
              "end": 1538
            },
            "optional": false,
            "computed": false,
            "start": 1522,
            "end": 1538
          },
          "definite": false,
          "start": 1515,
          "end": 1538
        }
      ],
      "declare": false,
      "start": 1511,
      "end": 1539
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "val2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1540,
          "end": 1544
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyDeclaredEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 1547,
            "end": 1561
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 1562,
            "end": 1563
          },
          "optional": false,
          "computed": false,
          "start": 1547,
          "end": 1563
        },
        "start": 1540,
        "end": 1563
      },
      "directive": null,
      "start": 1540,
      "end": 1564
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1564
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
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "computed",
    "start": 17,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 29,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 47,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "computed",
    "start": 64,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": ",",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "computed",
    "start": 85,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "computed",
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
    "type": "Numeric",
    "value": "2",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "computed",
    "start": 127,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 143,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 152,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 163,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 169,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 197,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 201,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 206,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 220,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 226,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 231,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 253,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 257,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 262,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 276,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 282,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 309,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 313,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 318,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 334,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 340,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 350,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 366,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 370,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 375,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 390,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 399,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 402,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 408,
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
    "value": "{",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 423,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 429,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 434,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 482,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 488,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 504,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 506,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 526,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 532,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 537,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 544,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 549,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 551,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 571,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 577,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 582,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 589,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 597,
    "end": 598
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 629,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 635,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 657,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 659,
    "end": 660
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 684,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 688,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 693,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 695,
    "end": 696
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 707,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 711,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 716,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 718,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 738,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 742,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 747,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 749,
    "end": 750
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 769,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 773,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 778,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 792,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "v5",
    "start": 796,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 801,
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
    "start": 825,
    "end": 826
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 828,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 837,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 840,
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
    "value": "const",
    "start": 848,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 854,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 862,
    "end": 863
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 868,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 872,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 877,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 879,
    "end": 880
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 891,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 897,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 910,
    "end": 911
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 916,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 920,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 925,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 927,
    "end": 928
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 941,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 947,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 956,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 962,
    "end": 963
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 968,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 972,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 977,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 979,
    "end": 980
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 993,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 999,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1018,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 1022,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1027,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1043,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 1049,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1058,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1061,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1072,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "v5",
    "start": 1076,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 1081,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1096,
    "end": 1103
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1104,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 1109,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1128,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 1137,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1148,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1154,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 1159,
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
    "value": "B",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1184,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 1188,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1208,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1214,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1224,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1230,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1239,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1242,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1249,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 1253,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1263,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 1267,
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
    "value": "E",
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
    "value": "B",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1276,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1279,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1287,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 1299,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 1311,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1320,
    "end": 1322
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1323,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1332,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 1341,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1353,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "p4",
    "start": 1362,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1371,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1374,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1406,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 1411,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1431,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "val1",
    "start": 1435,
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
    "value": "MyEnum",
    "start": 1442,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "val1",
    "start": 1452,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 1459,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1470,
    "end": 1477
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1478,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "MyDeclaredEnum",
    "start": 1483,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1511,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "val2",
    "start": 1515,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "MyDeclaredEnum",
    "start": 1522,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Identifier",
    "value": "val2",
    "start": 1540,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "MyDeclaredEnum",
    "start": 1547,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1563,
    "end": 1564
  }
]
```

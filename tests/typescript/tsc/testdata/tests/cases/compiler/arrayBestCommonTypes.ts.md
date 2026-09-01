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
        "name": "EmptyTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "iface",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 46
            },
            "declare": false,
            "start": 27,
            "end": 46
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "base",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 61
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 73,
                  "end": 78
                },
                "typeArguments": null,
                "start": 73,
                "end": 78
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 79,
              "end": 82
            },
            "abstract": false,
            "declare": false,
            "start": 51,
            "end": 82
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 98
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 110,
                  "end": 115
                },
                "typeArguments": null,
                "start": 110,
                "end": 115
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 116,
              "end": 119
            },
            "abstract": false,
            "declare": false,
            "start": 87,
            "end": 119
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 137
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "base",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 150
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 151,
              "end": 154
            },
            "abstract": false,
            "declare": false,
            "start": 124,
            "end": 154
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 168
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
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 186,
                    "end": 195
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
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
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 199,
                            "end": 206
                          },
                          "start": 197,
                          "end": 206
                        },
                        "start": 196,
                        "end": 206
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 212,
                            "end": 219
                          },
                          "start": 210,
                          "end": 219
                        },
                        "start": 208,
                        "end": 219
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 222,
                        "end": 228
                      },
                      "start": 220,
                      "end": 228
                    },
                    "body": null,
                    "expression": false,
                    "start": 195,
                    "end": 229
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 179,
                  "end": 229
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 245,
                    "end": 254
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
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
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 258,
                            "end": 264
                          },
                          "start": 256,
                          "end": 264
                        },
                        "start": 255,
                        "end": 264
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 270,
                            "end": 277
                          },
                          "start": 268,
                          "end": 277
                        },
                        "start": 266,
                        "end": 277
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 280,
                        "end": 286
                      },
                      "start": 278,
                      "end": 286
                    },
                    "body": null,
                    "expression": false,
                    "start": 254,
                    "end": 287
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 238,
                  "end": 287
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 303,
                    "end": 312
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
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
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 316,
                            "end": 322
                          },
                          "start": 314,
                          "end": 322
                        },
                        "start": 313,
                        "end": 322
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 328,
                            "end": 335
                          },
                          "start": 326,
                          "end": 335
                        },
                        "start": 324,
                        "end": 335
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 338,
                        "end": 344
                      },
                      "start": 336,
                      "end": 344
                    },
                    "body": null,
                    "expression": false,
                    "start": 312,
                    "end": 345
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 296,
                  "end": 345
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 361,
                    "end": 370
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
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 374,
                            "end": 377
                          },
                          "start": 372,
                          "end": 377
                        },
                        "start": 371,
                        "end": 377
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 379,
                          "end": 380
                        },
                        "right": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 383,
                          "end": 388
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 379,
                        "end": 388
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 391,
                        "end": 394
                      },
                      "start": 389,
                      "end": 394
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 404,
                            "end": 408
                          },
                          "start": 397,
                          "end": 409
                        }
                      ],
                      "start": 395,
                      "end": 411
                    },
                    "expression": false,
                    "start": 370,
                    "end": 411
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 354,
                  "end": 411
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 428,
                    "end": 429
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 447,
                              "end": 453
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 455,
                                  "end": 459
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 460,
                                  "end": 469
                                },
                                "optional": false,
                                "computed": false,
                                "start": 455,
                                "end": 469
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 471,
                                        "end": 472
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 474,
                                        "end": 475
                                      }
                                    ],
                                    "start": 470,
                                    "end": 476
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 477,
                                    "end": 478
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 470,
                                  "end": 479
                                }
                              ],
                              "optional": false,
                              "start": 455,
                              "end": 480
                            },
                            "start": 446,
                            "end": 481
                          },
                          "directive": null,
                          "start": 446,
                          "end": 482
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 496,
                              "end": 502
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 504,
                                  "end": 508
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 509,
                                  "end": 518
                                },
                                "optional": false,
                                "computed": false,
                                "start": 504,
                                "end": 518
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 520,
                                        "end": 521
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 523,
                                        "end": 524
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 526,
                                        "end": 535
                                      }
                                    ],
                                    "start": 519,
                                    "end": 536
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 537,
                                    "end": 538
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 519,
                                  "end": 539
                                }
                              ],
                              "optional": false,
                              "start": 504,
                              "end": 540
                            },
                            "start": 495,
                            "end": 541
                          },
                          "directive": null,
                          "start": 495,
                          "end": 542
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 556,
                              "end": 562
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 564,
                                  "end": 568
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 569,
                                  "end": 578
                                },
                                "optional": false,
                                "computed": false,
                                "start": 564,
                                "end": 578
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 580,
                                        "end": 589
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 591,
                                        "end": 592
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 594,
                                        "end": 595
                                      }
                                    ],
                                    "start": 579,
                                    "end": 596
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 597,
                                    "end": 598
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 579,
                                  "end": 599
                                }
                              ],
                              "optional": false,
                              "start": 564,
                              "end": 600
                            },
                            "start": 555,
                            "end": 601
                          },
                          "directive": null,
                          "start": 555,
                          "end": 602
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 616,
                              "end": 622
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 624,
                                  "end": 628
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 629,
                                  "end": 638
                                },
                                "optional": false,
                                "computed": false,
                                "start": 624,
                                "end": 638
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 640,
                                        "end": 644
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 646,
                                        "end": 647
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 649,
                                        "end": 650
                                      }
                                    ],
                                    "start": 639,
                                    "end": 651
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 652,
                                    "end": 653
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 639,
                                  "end": 654
                                }
                              ],
                              "optional": false,
                              "start": 624,
                              "end": 655
                            },
                            "start": 615,
                            "end": 656
                          },
                          "directive": null,
                          "start": 615,
                          "end": 657
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 671,
                              "end": 677
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 679,
                                  "end": 683
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 684,
                                  "end": 693
                                },
                                "optional": false,
                                "computed": false,
                                "start": 679,
                                "end": 693
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 695,
                                        "end": 696
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 698,
                                        "end": 699
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 701,
                                        "end": 705
                                      }
                                    ],
                                    "start": 694,
                                    "end": 706
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 707,
                                    "end": 708
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 694,
                                  "end": 709
                                }
                              ],
                              "optional": false,
                              "start": 679,
                              "end": 710
                            },
                            "start": 670,
                            "end": 711
                          },
                          "directive": null,
                          "start": 670,
                          "end": 712
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 726,
                              "end": 732
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 734,
                                  "end": 738
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 739,
                                  "end": 748
                                },
                                "optional": false,
                                "computed": false,
                                "start": 734,
                                "end": 748
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 750,
                                        "end": 759
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 761,
                                        "end": 762
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 764,
                                        "end": 768
                                      }
                                    ],
                                    "start": 749,
                                    "end": 769
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 770,
                                    "end": 771
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 749,
                                  "end": 772
                                }
                              ],
                              "optional": false,
                              "start": 734,
                              "end": 773
                            },
                            "start": 725,
                            "end": 774
                          },
                          "directive": null,
                          "start": 725,
                          "end": 775
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 790,
                              "end": 796
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 798,
                                  "end": 802
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 803,
                                  "end": 812
                                },
                                "optional": false,
                                "computed": false,
                                "start": 798,
                                "end": 812
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 814,
                                        "end": 816
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 818,
                                        "end": 821
                                      }
                                    ],
                                    "start": 813,
                                    "end": 822
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 823,
                                    "end": 824
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 813,
                                  "end": 825
                                }
                              ],
                              "optional": false,
                              "start": 798,
                              "end": 826
                            },
                            "start": 789,
                            "end": 827
                          },
                          "directive": null,
                          "start": 789,
                          "end": 828
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 842,
                              "end": 848
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 850,
                                  "end": 854
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 855,
                                  "end": 864
                                },
                                "optional": false,
                                "computed": false,
                                "start": 850,
                                "end": 864
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 866,
                                        "end": 868
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 870,
                                        "end": 873
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 875,
                                        "end": 884
                                      }
                                    ],
                                    "start": 865,
                                    "end": 885
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 886,
                                    "end": 887
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 865,
                                  "end": 888
                                }
                              ],
                              "optional": false,
                              "start": 850,
                              "end": 889
                            },
                            "start": 841,
                            "end": 890
                          },
                          "directive": null,
                          "start": 841,
                          "end": 891
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 905,
                              "end": 911
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 913,
                                  "end": 917
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 918,
                                  "end": 927
                                },
                                "optional": false,
                                "computed": false,
                                "start": 913,
                                "end": 927
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 929,
                                        "end": 938
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 940,
                                        "end": 943
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 945,
                                        "end": 947
                                      }
                                    ],
                                    "start": 928,
                                    "end": 948
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 949,
                                    "end": 950
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 928,
                                  "end": 951
                                }
                              ],
                              "optional": false,
                              "start": 913,
                              "end": 952
                            },
                            "start": 904,
                            "end": 953
                          },
                          "directive": null,
                          "start": 904,
                          "end": 954
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 968,
                              "end": 974
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 976,
                                  "end": 980
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 981,
                                  "end": 990
                                },
                                "optional": false,
                                "computed": false,
                                "start": 976,
                                "end": 990
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 992,
                                        "end": 996
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 998,
                                        "end": 1001
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 1003,
                                        "end": 1005
                                      }
                                    ],
                                    "start": 991,
                                    "end": 1006
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 1007,
                                    "end": 1008
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 991,
                                  "end": 1009
                                }
                              ],
                              "optional": false,
                              "start": 976,
                              "end": 1010
                            },
                            "start": 967,
                            "end": 1011
                          },
                          "directive": null,
                          "start": 967,
                          "end": 1012
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1026,
                              "end": 1032
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1034,
                                  "end": 1038
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1039,
                                  "end": 1048
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1034,
                                "end": 1048
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 1050,
                                        "end": 1053
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 1055,
                                        "end": 1057
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 1059,
                                        "end": 1063
                                      }
                                    ],
                                    "start": 1049,
                                    "end": 1064
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 1065,
                                    "end": 1066
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 1049,
                                  "end": 1067
                                }
                              ],
                              "optional": false,
                              "start": 1034,
                              "end": 1068
                            },
                            "start": 1025,
                            "end": 1069
                          },
                          "directive": null,
                          "start": 1025,
                          "end": 1070
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1084,
                              "end": 1090
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1092,
                                  "end": 1096
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1097,
                                  "end": 1106
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1092,
                                "end": 1106
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1108,
                                        "end": 1117
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 1119,
                                        "end": 1121
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 1123,
                                        "end": 1127
                                      }
                                    ],
                                    "start": 1107,
                                    "end": 1128
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 1129,
                                    "end": 1130
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 1107,
                                  "end": 1131
                                }
                              ],
                              "optional": false,
                              "start": 1092,
                              "end": 1132
                            },
                            "start": 1083,
                            "end": 1133
                          },
                          "directive": null,
                          "start": 1083,
                          "end": 1134
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1149,
                              "end": 1155
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1157,
                                  "end": 1161
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1162,
                                  "end": 1171
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1157,
                                "end": 1171
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ArrayExpression",
                                      "elements": [
                                        {
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "Literal",
                                              "value": 3,
                                              "raw": "3",
                                              "start": 1174,
                                              "end": 1175
                                            },
                                            {
                                              "type": "Literal",
                                              "value": 4,
                                              "raw": "4",
                                              "start": 1177,
                                              "end": 1178
                                            }
                                          ],
                                          "start": 1173,
                                          "end": 1179
                                        },
                                        {
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "Literal",
                                              "value": null,
                                              "raw": "null",
                                              "start": 1182,
                                              "end": 1186
                                            }
                                          ],
                                          "start": 1181,
                                          "end": 1187
                                        }
                                      ],
                                      "start": 1172,
                                      "end": 1188
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0",
                                      "start": 1189,
                                      "end": 1190
                                    },
                                    "optional": false,
                                    "computed": true,
                                    "start": 1172,
                                    "end": 1191
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 1192,
                                    "end": 1193
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 1172,
                                  "end": 1194
                                }
                              ],
                              "optional": false,
                              "start": 1157,
                              "end": 1195
                            },
                            "start": 1148,
                            "end": 1196
                          },
                          "directive": null,
                          "start": 1148,
                          "end": 1197
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
                                "name": "t1",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
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
                                            "start": 1222,
                                            "end": 1223
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSNumberKeyword",
                                              "start": 1225,
                                              "end": 1231
                                            },
                                            "start": 1223,
                                            "end": 1231
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 1222,
                                          "end": 1232
                                        },
                                        {
                                          "type": "TSPropertySignature",
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "y",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1233,
                                            "end": 1234
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "base",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1236,
                                                "end": 1240
                                              },
                                              "typeArguments": null,
                                              "start": 1236,
                                              "end": 1240
                                            },
                                            "start": 1234,
                                            "end": 1240
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 1233,
                                          "end": 1241
                                        }
                                      ],
                                      "start": 1220,
                                      "end": 1243
                                    },
                                    "start": 1220,
                                    "end": 1245
                                  },
                                  "start": 1218,
                                  "end": 1245
                                },
                                "start": 1216,
                                "end": 1245
                              },
                              "init": {
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
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1251,
                                          "end": 1252
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 7,
                                          "raw": "7",
                                          "start": 1254,
                                          "end": 1255
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1251,
                                        "end": 1255
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
                                          "start": 1257,
                                          "end": 1258
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1264,
                                            "end": 1271
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 1260,
                                          "end": 1273
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1257,
                                        "end": 1273
                                      }
                                    ],
                                    "start": 1249,
                                    "end": 1275
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
                                          "start": 1279,
                                          "end": 1280
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 5,
                                          "raw": "5",
                                          "start": 1282,
                                          "end": 1283
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1279,
                                        "end": 1283
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
                                          "start": 1285,
                                          "end": 1286
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1292,
                                            "end": 1296
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 1288,
                                          "end": 1298
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1285,
                                        "end": 1298
                                      }
                                    ],
                                    "start": 1277,
                                    "end": 1300
                                  }
                                ],
                                "start": 1248,
                                "end": 1301
                              },
                              "definite": false,
                              "start": 1216,
                              "end": 1301
                            }
                          ],
                          "declare": false,
                          "start": 1212,
                          "end": 1302
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
                                "name": "t2",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
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
                                            "start": 1325,
                                            "end": 1326
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSBooleanKeyword",
                                              "start": 1328,
                                              "end": 1335
                                            },
                                            "start": 1326,
                                            "end": 1335
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 1325,
                                          "end": 1336
                                        },
                                        {
                                          "type": "TSPropertySignature",
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "y",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1337,
                                            "end": 1338
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "base",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1340,
                                                "end": 1344
                                              },
                                              "typeArguments": null,
                                              "start": 1340,
                                              "end": 1344
                                            },
                                            "start": 1338,
                                            "end": 1344
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 1337,
                                          "end": 1345
                                        }
                                      ],
                                      "start": 1323,
                                      "end": 1347
                                    },
                                    "start": 1323,
                                    "end": 1349
                                  },
                                  "start": 1321,
                                  "end": 1349
                                },
                                "start": 1319,
                                "end": 1349
                              },
                              "init": {
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
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1355,
                                          "end": 1356
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": true,
                                          "raw": "true",
                                          "start": 1358,
                                          "end": 1362
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1355,
                                        "end": 1362
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
                                          "start": 1364,
                                          "end": 1365
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1371,
                                            "end": 1378
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 1367,
                                          "end": 1380
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1364,
                                        "end": 1380
                                      }
                                    ],
                                    "start": 1353,
                                    "end": 1382
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
                                          "start": 1386,
                                          "end": 1387
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": false,
                                          "raw": "false",
                                          "start": 1389,
                                          "end": 1394
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1386,
                                        "end": 1394
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
                                          "start": 1396,
                                          "end": 1397
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1403,
                                            "end": 1407
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 1399,
                                          "end": 1409
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1396,
                                        "end": 1409
                                      }
                                    ],
                                    "start": 1384,
                                    "end": 1411
                                  }
                                ],
                                "start": 1352,
                                "end": 1412
                              },
                              "definite": false,
                              "start": 1319,
                              "end": 1412
                            }
                          ],
                          "declare": false,
                          "start": 1315,
                          "end": 1413
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
                                "name": "t3",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
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
                                            "start": 1436,
                                            "end": 1437
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSStringKeyword",
                                              "start": 1439,
                                              "end": 1445
                                            },
                                            "start": 1437,
                                            "end": 1445
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 1436,
                                          "end": 1446
                                        },
                                        {
                                          "type": "TSPropertySignature",
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "y",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1447,
                                            "end": 1448
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "base",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1450,
                                                "end": 1454
                                              },
                                              "typeArguments": null,
                                              "start": 1450,
                                              "end": 1454
                                            },
                                            "start": 1448,
                                            "end": 1454
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 1447,
                                          "end": 1455
                                        }
                                      ],
                                      "start": 1434,
                                      "end": 1457
                                    },
                                    "start": 1434,
                                    "end": 1459
                                  },
                                  "start": 1432,
                                  "end": 1459
                                },
                                "start": 1430,
                                "end": 1459
                              },
                              "init": {
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
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1465,
                                          "end": 1466
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1468,
                                          "end": 1477
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1465,
                                        "end": 1477
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
                                          "start": 1479,
                                          "end": 1480
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1486,
                                            "end": 1490
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 1482,
                                          "end": 1492
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1479,
                                        "end": 1492
                                      }
                                    ],
                                    "start": 1463,
                                    "end": 1494
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
                                          "start": 1498,
                                          "end": 1499
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "",
                                          "raw": "''",
                                          "start": 1501,
                                          "end": 1503
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1498,
                                        "end": 1503
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
                                          "start": 1505,
                                          "end": 1506
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1512,
                                            "end": 1519
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 1508,
                                          "end": 1521
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1505,
                                        "end": 1521
                                      }
                                    ],
                                    "start": 1496,
                                    "end": 1523
                                  }
                                ],
                                "start": 1462,
                                "end": 1524
                              },
                              "definite": false,
                              "start": 1430,
                              "end": 1524
                            }
                          ],
                          "declare": false,
                          "start": 1426,
                          "end": 1525
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
                                "name": "anyObj",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1551,
                                    "end": 1554
                                  },
                                  "start": 1549,
                                  "end": 1554
                                },
                                "start": 1543,
                                "end": 1554
                              },
                              "init": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 1557,
                                "end": 1561
                              },
                              "definite": false,
                              "start": 1543,
                              "end": 1561
                            }
                          ],
                          "declare": false,
                          "start": 1539,
                          "end": 1562
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
                                "name": "a1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1638,
                                "end": 1640
                              },
                              "init": {
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
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1646,
                                          "end": 1647
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 1649,
                                          "end": 1650
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1646,
                                        "end": 1650
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
                                          "start": 1652,
                                          "end": 1653
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1655,
                                          "end": 1658
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1652,
                                        "end": 1658
                                      }
                                    ],
                                    "start": 1644,
                                    "end": 1660
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
                                          "start": 1664,
                                          "end": 1665
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1667,
                                          "end": 1670
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1664,
                                        "end": 1670
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
                                          "start": 1672,
                                          "end": 1673
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1675,
                                          "end": 1678
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1672,
                                        "end": 1678
                                      }
                                    ],
                                    "start": 1662,
                                    "end": 1680
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
                                          "start": 1684,
                                          "end": 1685
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1687,
                                          "end": 1693
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1684,
                                        "end": 1693
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
                                          "start": 1695,
                                          "end": 1696
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1698,
                                          "end": 1701
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1695,
                                        "end": 1701
                                      }
                                    ],
                                    "start": 1682,
                                    "end": 1703
                                  }
                                ],
                                "start": 1643,
                                "end": 1704
                              },
                              "definite": false,
                              "start": 1638,
                              "end": 1704
                            }
                          ],
                          "declare": false,
                          "start": 1634,
                          "end": 1705
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
                                "name": "a2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1722,
                                "end": 1724
                              },
                              "init": {
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
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1730,
                                          "end": 1731
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1733,
                                          "end": 1739
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1730,
                                        "end": 1739
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
                                          "start": 1741,
                                          "end": 1742
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1744,
                                          "end": 1747
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1741,
                                        "end": 1747
                                      }
                                    ],
                                    "start": 1728,
                                    "end": 1749
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
                                          "start": 1753,
                                          "end": 1754
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 1756,
                                          "end": 1757
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1753,
                                        "end": 1757
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
                                          "start": 1759,
                                          "end": 1760
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1762,
                                          "end": 1765
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1759,
                                        "end": 1765
                                      }
                                    ],
                                    "start": 1751,
                                    "end": 1767
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
                                          "start": 1771,
                                          "end": 1772
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1774,
                                          "end": 1777
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1771,
                                        "end": 1777
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
                                          "start": 1779,
                                          "end": 1780
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1782,
                                          "end": 1785
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1779,
                                        "end": 1785
                                      }
                                    ],
                                    "start": 1769,
                                    "end": 1787
                                  }
                                ],
                                "start": 1727,
                                "end": 1788
                              },
                              "definite": false,
                              "start": 1722,
                              "end": 1788
                            }
                          ],
                          "declare": false,
                          "start": 1718,
                          "end": 1789
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
                                "name": "a3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1806,
                                "end": 1808
                              },
                              "init": {
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
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1814,
                                          "end": 1815
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 1817,
                                          "end": 1818
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1814,
                                        "end": 1818
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
                                          "start": 1820,
                                          "end": 1821
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1823,
                                          "end": 1826
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1820,
                                        "end": 1826
                                      }
                                    ],
                                    "start": 1812,
                                    "end": 1828
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
                                          "start": 1832,
                                          "end": 1833
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1835,
                                          "end": 1841
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1832,
                                        "end": 1841
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
                                          "start": 1843,
                                          "end": 1844
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1846,
                                          "end": 1849
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1843,
                                        "end": 1849
                                      }
                                    ],
                                    "start": 1830,
                                    "end": 1851
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
                                          "start": 1855,
                                          "end": 1856
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1858,
                                          "end": 1861
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1855,
                                        "end": 1861
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
                                          "start": 1863,
                                          "end": 1864
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 1866,
                                          "end": 1869
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1863,
                                        "end": 1869
                                      }
                                    ],
                                    "start": 1853,
                                    "end": 1871
                                  }
                                ],
                                "start": 1811,
                                "end": 1872
                              },
                              "definite": false,
                              "start": 1806,
                              "end": 1872
                            }
                          ],
                          "declare": false,
                          "start": 1802,
                          "end": 1873
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
                                "name": "ifaceObj",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "iface",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1901,
                                      "end": 1906
                                    },
                                    "typeArguments": null,
                                    "start": 1901,
                                    "end": 1906
                                  },
                                  "start": 1899,
                                  "end": 1906
                                },
                                "start": 1891,
                                "end": 1906
                              },
                              "init": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 1909,
                                "end": 1913
                              },
                              "definite": false,
                              "start": 1891,
                              "end": 1913
                            }
                          ],
                          "declare": false,
                          "start": 1887,
                          "end": 1914
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
                                "name": "baseObj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1931,
                                "end": 1938
                              },
                              "init": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1945,
                                  "end": 1949
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 1941,
                                "end": 1951
                              },
                              "definite": false,
                              "start": 1931,
                              "end": 1951
                            }
                          ],
                          "declare": false,
                          "start": 1927,
                          "end": 1952
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
                                "name": "base2Obj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1969,
                                "end": 1977
                              },
                              "init": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "base2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1984,
                                  "end": 1989
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 1980,
                                "end": 1991
                              },
                              "definite": false,
                              "start": 1969,
                              "end": 1991
                            }
                          ],
                          "declare": false,
                          "start": 1965,
                          "end": 1992
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
                                "name": "b1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2010,
                                "end": 2012
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2016,
                                    "end": 2023
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2025,
                                    "end": 2033
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2035,
                                    "end": 2043
                                  }
                                ],
                                "start": 2015,
                                "end": 2044
                              },
                              "definite": false,
                              "start": 2010,
                              "end": 2044
                            }
                          ],
                          "declare": false,
                          "start": 2006,
                          "end": 2045
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
                                "name": "b2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2062,
                                "end": 2064
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2068,
                                    "end": 2076
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2078,
                                    "end": 2085
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2087,
                                    "end": 2095
                                  }
                                ],
                                "start": 2067,
                                "end": 2096
                              },
                              "definite": false,
                              "start": 2062,
                              "end": 2096
                            }
                          ],
                          "declare": false,
                          "start": 2058,
                          "end": 2097
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
                                "name": "b3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2114,
                                "end": 2116
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2120,
                                    "end": 2127
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2129,
                                    "end": 2137
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2139,
                                    "end": 2147
                                  }
                                ],
                                "start": 2119,
                                "end": 2148
                              },
                              "definite": false,
                              "start": 2114,
                              "end": 2148
                            }
                          ],
                          "declare": false,
                          "start": 2110,
                          "end": 2149
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
                                "name": "b4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2166,
                                "end": 2168
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2172,
                                    "end": 2180
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2182,
                                    "end": 2189
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2191,
                                    "end": 2199
                                  }
                                ],
                                "start": 2171,
                                "end": 2200
                              },
                              "definite": false,
                              "start": 2166,
                              "end": 2200
                            }
                          ],
                          "declare": false,
                          "start": 2162,
                          "end": 2201
                        }
                      ],
                      "start": 432,
                      "end": 2211
                    },
                    "expression": false,
                    "start": 429,
                    "end": 2211
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 421,
                  "end": 2211
                }
              ],
              "start": 169,
              "end": 2217
            },
            "abstract": false,
            "declare": false,
            "start": 161,
            "end": 2217
          }
        ],
        "start": 21,
        "end": 2219
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 2219
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonEmptyTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 2231,
        "end": 2244
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "iface",
              "optional": false,
              "typeAnnotation": null,
              "start": 2261,
              "end": 2266
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
                    "start": 2269,
                    "end": 2270
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2272,
                      "end": 2278
                    },
                    "start": 2270,
                    "end": 2278
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2269,
                  "end": 2279
                }
              ],
              "start": 2267,
              "end": 2281
            },
            "declare": false,
            "start": 2251,
            "end": 2281
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "base",
              "optional": false,
              "typeAnnotation": null,
              "start": 2292,
              "end": 2296
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2308,
                  "end": 2313
                },
                "typeArguments": null,
                "start": 2308,
                "end": 2313
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2316,
                    "end": 2317
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2319,
                      "end": 2325
                    },
                    "start": 2317,
                    "end": 2325
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 2316,
                  "end": 2326
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2327,
                    "end": 2328
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2330,
                      "end": 2336
                    },
                    "start": 2328,
                    "end": 2336
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 2327,
                  "end": 2337
                }
              ],
              "start": 2314,
              "end": 2339
            },
            "abstract": false,
            "declare": false,
            "start": 2286,
            "end": 2339
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2350,
              "end": 2355
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2367,
                  "end": 2372
                },
                "typeArguments": null,
                "start": 2367,
                "end": 2372
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2375,
                    "end": 2376
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2378,
                      "end": 2384
                    },
                    "start": 2376,
                    "end": 2384
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 2375,
                  "end": 2385
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2386,
                    "end": 2387
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2389,
                      "end": 2395
                    },
                    "start": 2387,
                    "end": 2395
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 2386,
                  "end": 2396
                }
              ],
              "start": 2373,
              "end": 2398
            },
            "abstract": false,
            "declare": false,
            "start": 2344,
            "end": 2398
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 2409,
              "end": 2416
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "base",
              "optional": false,
              "typeAnnotation": null,
              "start": 2425,
              "end": 2429
            },
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2432,
                    "end": 2433
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2435,
                      "end": 2441
                    },
                    "start": 2433,
                    "end": 2441
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 2432,
                  "end": 2442
                }
              ],
              "start": 2430,
              "end": 2444
            },
            "abstract": false,
            "declare": false,
            "start": 2403,
            "end": 2444
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 2457,
              "end": 2458
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
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2476,
                    "end": 2485
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
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
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2489,
                            "end": 2496
                          },
                          "start": 2487,
                          "end": 2496
                        },
                        "start": 2486,
                        "end": 2496
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2502,
                            "end": 2509
                          },
                          "start": 2500,
                          "end": 2509
                        },
                        "start": 2498,
                        "end": 2509
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2512,
                        "end": 2518
                      },
                      "start": 2510,
                      "end": 2518
                    },
                    "body": null,
                    "expression": false,
                    "start": 2485,
                    "end": 2519
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2469,
                  "end": 2519
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2535,
                    "end": 2544
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
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
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2548,
                            "end": 2554
                          },
                          "start": 2546,
                          "end": 2554
                        },
                        "start": 2545,
                        "end": 2554
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2560,
                            "end": 2567
                          },
                          "start": 2558,
                          "end": 2567
                        },
                        "start": 2556,
                        "end": 2567
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2570,
                        "end": 2576
                      },
                      "start": 2568,
                      "end": 2576
                    },
                    "body": null,
                    "expression": false,
                    "start": 2544,
                    "end": 2577
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2528,
                  "end": 2577
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2593,
                    "end": 2602
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
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
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2606,
                            "end": 2612
                          },
                          "start": 2604,
                          "end": 2612
                        },
                        "start": 2603,
                        "end": 2612
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2618,
                            "end": 2625
                          },
                          "start": 2616,
                          "end": 2625
                        },
                        "start": 2614,
                        "end": 2625
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2628,
                        "end": 2634
                      },
                      "start": 2626,
                      "end": 2634
                    },
                    "body": null,
                    "expression": false,
                    "start": 2602,
                    "end": 2635
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2586,
                  "end": 2635
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "voidIfAny",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2651,
                    "end": 2660
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
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2664,
                            "end": 2667
                          },
                          "start": 2662,
                          "end": 2667
                        },
                        "start": 2661,
                        "end": 2667
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2669,
                          "end": 2670
                        },
                        "right": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 2673,
                          "end": 2678
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2669,
                        "end": 2678
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 2681,
                        "end": 2684
                      },
                      "start": 2679,
                      "end": 2684
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 2694,
                            "end": 2698
                          },
                          "start": 2687,
                          "end": 2699
                        }
                      ],
                      "start": 2685,
                      "end": 2701
                    },
                    "expression": false,
                    "start": 2660,
                    "end": 2701
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2644,
                  "end": 2701
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2718,
                    "end": 2719
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2737,
                              "end": 2743
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2745,
                                  "end": 2749
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2750,
                                  "end": 2759
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2745,
                                "end": 2759
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 2761,
                                        "end": 2762
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 2764,
                                        "end": 2765
                                      }
                                    ],
                                    "start": 2760,
                                    "end": 2766
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 2767,
                                    "end": 2768
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 2760,
                                  "end": 2769
                                }
                              ],
                              "optional": false,
                              "start": 2745,
                              "end": 2770
                            },
                            "start": 2736,
                            "end": 2771
                          },
                          "directive": null,
                          "start": 2736,
                          "end": 2772
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2786,
                              "end": 2792
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2794,
                                  "end": 2798
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2799,
                                  "end": 2808
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2794,
                                "end": 2808
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 2810,
                                        "end": 2811
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 2813,
                                        "end": 2814
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2816,
                                        "end": 2825
                                      }
                                    ],
                                    "start": 2809,
                                    "end": 2826
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 2827,
                                    "end": 2828
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 2809,
                                  "end": 2829
                                }
                              ],
                              "optional": false,
                              "start": 2794,
                              "end": 2830
                            },
                            "start": 2785,
                            "end": 2831
                          },
                          "directive": null,
                          "start": 2785,
                          "end": 2832
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2846,
                              "end": 2852
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2854,
                                  "end": 2858
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2859,
                                  "end": 2868
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2854,
                                "end": 2868
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2870,
                                        "end": 2879
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 2881,
                                        "end": 2882
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 2884,
                                        "end": 2885
                                      }
                                    ],
                                    "start": 2869,
                                    "end": 2886
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 2887,
                                    "end": 2888
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 2869,
                                  "end": 2889
                                }
                              ],
                              "optional": false,
                              "start": 2854,
                              "end": 2890
                            },
                            "start": 2845,
                            "end": 2891
                          },
                          "directive": null,
                          "start": 2845,
                          "end": 2892
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2906,
                              "end": 2912
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2914,
                                  "end": 2918
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2919,
                                  "end": 2928
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2914,
                                "end": 2928
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 2930,
                                        "end": 2934
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 2936,
                                        "end": 2937
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 2939,
                                        "end": 2940
                                      }
                                    ],
                                    "start": 2929,
                                    "end": 2941
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 2942,
                                    "end": 2943
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 2929,
                                  "end": 2944
                                }
                              ],
                              "optional": false,
                              "start": 2914,
                              "end": 2945
                            },
                            "start": 2905,
                            "end": 2946
                          },
                          "directive": null,
                          "start": 2905,
                          "end": 2947
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2961,
                              "end": 2967
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2969,
                                  "end": 2973
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2974,
                                  "end": 2983
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2969,
                                "end": 2983
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 2985,
                                        "end": 2986
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 2988,
                                        "end": 2989
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 2991,
                                        "end": 2995
                                      }
                                    ],
                                    "start": 2984,
                                    "end": 2996
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 2997,
                                    "end": 2998
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 2984,
                                  "end": 2999
                                }
                              ],
                              "optional": false,
                              "start": 2969,
                              "end": 3000
                            },
                            "start": 2960,
                            "end": 3001
                          },
                          "directive": null,
                          "start": 2960,
                          "end": 3002
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3016,
                              "end": 3022
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3024,
                                  "end": 3028
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3029,
                                  "end": 3038
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3024,
                                "end": 3038
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3040,
                                        "end": 3049
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 3051,
                                        "end": 3052
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 3054,
                                        "end": 3058
                                      }
                                    ],
                                    "start": 3039,
                                    "end": 3059
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 3060,
                                    "end": 3061
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3039,
                                  "end": 3062
                                }
                              ],
                              "optional": false,
                              "start": 3024,
                              "end": 3063
                            },
                            "start": 3015,
                            "end": 3064
                          },
                          "directive": null,
                          "start": 3015,
                          "end": 3065
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3080,
                              "end": 3086
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3088,
                                  "end": 3092
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3093,
                                  "end": 3102
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3088,
                                "end": 3102
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 3104,
                                        "end": 3106
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 3108,
                                        "end": 3111
                                      }
                                    ],
                                    "start": 3103,
                                    "end": 3112
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 3113,
                                    "end": 3114
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3103,
                                  "end": 3115
                                }
                              ],
                              "optional": false,
                              "start": 3088,
                              "end": 3116
                            },
                            "start": 3079,
                            "end": 3117
                          },
                          "directive": null,
                          "start": 3079,
                          "end": 3118
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3132,
                              "end": 3138
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3140,
                                  "end": 3144
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3145,
                                  "end": 3154
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3140,
                                "end": 3154
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 3156,
                                        "end": 3158
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 3160,
                                        "end": 3163
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3165,
                                        "end": 3174
                                      }
                                    ],
                                    "start": 3155,
                                    "end": 3175
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 3176,
                                    "end": 3177
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3155,
                                  "end": 3178
                                }
                              ],
                              "optional": false,
                              "start": 3140,
                              "end": 3179
                            },
                            "start": 3131,
                            "end": 3180
                          },
                          "directive": null,
                          "start": 3131,
                          "end": 3181
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3195,
                              "end": 3201
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3203,
                                  "end": 3207
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3208,
                                  "end": 3217
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3203,
                                "end": 3217
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3219,
                                        "end": 3228
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 3230,
                                        "end": 3233
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 3235,
                                        "end": 3237
                                      }
                                    ],
                                    "start": 3218,
                                    "end": 3238
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 3239,
                                    "end": 3240
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3218,
                                  "end": 3241
                                }
                              ],
                              "optional": false,
                              "start": 3203,
                              "end": 3242
                            },
                            "start": 3194,
                            "end": 3243
                          },
                          "directive": null,
                          "start": 3194,
                          "end": 3244
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3258,
                              "end": 3264
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3266,
                                  "end": 3270
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3271,
                                  "end": 3280
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3266,
                                "end": 3280
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 3282,
                                        "end": 3286
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 3288,
                                        "end": 3291
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 3293,
                                        "end": 3295
                                      }
                                    ],
                                    "start": 3281,
                                    "end": 3296
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 3297,
                                    "end": 3298
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3281,
                                  "end": 3299
                                }
                              ],
                              "optional": false,
                              "start": 3266,
                              "end": 3300
                            },
                            "start": 3257,
                            "end": 3301
                          },
                          "directive": null,
                          "start": 3257,
                          "end": 3302
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3316,
                              "end": 3322
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3324,
                                  "end": 3328
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3329,
                                  "end": 3338
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3324,
                                "end": 3338
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": "q",
                                        "raw": "\"q\"",
                                        "start": 3340,
                                        "end": 3343
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 3345,
                                        "end": 3347
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 3349,
                                        "end": 3353
                                      }
                                    ],
                                    "start": 3339,
                                    "end": 3354
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 3355,
                                    "end": 3356
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3339,
                                  "end": 3357
                                }
                              ],
                              "optional": false,
                              "start": 3324,
                              "end": 3358
                            },
                            "start": 3315,
                            "end": 3359
                          },
                          "directive": null,
                          "start": 3315,
                          "end": 3360
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3374,
                              "end": 3380
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3382,
                                  "end": 3386
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3387,
                                  "end": 3396
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3382,
                                "end": 3396
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3398,
                                        "end": 3407
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "''",
                                        "start": 3409,
                                        "end": 3411
                                      },
                                      {
                                        "type": "Literal",
                                        "value": null,
                                        "raw": "null",
                                        "start": 3413,
                                        "end": 3417
                                      }
                                    ],
                                    "start": 3397,
                                    "end": 3418
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 3419,
                                    "end": 3420
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3397,
                                  "end": 3421
                                }
                              ],
                              "optional": false,
                              "start": 3382,
                              "end": 3422
                            },
                            "start": 3373,
                            "end": 3423
                          },
                          "directive": null,
                          "start": 3373,
                          "end": 3424
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3439,
                              "end": 3445
                            },
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3447,
                                  "end": 3451
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "voidIfAny",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3452,
                                  "end": 3461
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3447,
                                "end": 3461
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ArrayExpression",
                                      "elements": [
                                        {
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "Literal",
                                              "value": 3,
                                              "raw": "3",
                                              "start": 3464,
                                              "end": 3465
                                            },
                                            {
                                              "type": "Literal",
                                              "value": 4,
                                              "raw": "4",
                                              "start": 3467,
                                              "end": 3468
                                            }
                                          ],
                                          "start": 3463,
                                          "end": 3469
                                        },
                                        {
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "Literal",
                                              "value": null,
                                              "raw": "null",
                                              "start": 3472,
                                              "end": 3476
                                            }
                                          ],
                                          "start": 3471,
                                          "end": 3477
                                        }
                                      ],
                                      "start": 3462,
                                      "end": 3478
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0",
                                      "start": 3479,
                                      "end": 3480
                                    },
                                    "optional": false,
                                    "computed": true,
                                    "start": 3462,
                                    "end": 3481
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 3482,
                                    "end": 3483
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3462,
                                  "end": 3484
                                }
                              ],
                              "optional": false,
                              "start": 3447,
                              "end": 3485
                            },
                            "start": 3438,
                            "end": 3486
                          },
                          "directive": null,
                          "start": 3438,
                          "end": 3487
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
                                "name": "t1",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
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
                                            "start": 3512,
                                            "end": 3513
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSNumberKeyword",
                                              "start": 3515,
                                              "end": 3521
                                            },
                                            "start": 3513,
                                            "end": 3521
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 3512,
                                          "end": 3522
                                        },
                                        {
                                          "type": "TSPropertySignature",
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "y",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3523,
                                            "end": 3524
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "base",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3526,
                                                "end": 3530
                                              },
                                              "typeArguments": null,
                                              "start": 3526,
                                              "end": 3530
                                            },
                                            "start": 3524,
                                            "end": 3530
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 3523,
                                          "end": 3531
                                        }
                                      ],
                                      "start": 3510,
                                      "end": 3533
                                    },
                                    "start": 3510,
                                    "end": 3535
                                  },
                                  "start": 3508,
                                  "end": 3535
                                },
                                "start": 3506,
                                "end": 3535
                              },
                              "init": {
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
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3541,
                                          "end": 3542
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 7,
                                          "raw": "7",
                                          "start": 3544,
                                          "end": 3545
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3541,
                                        "end": 3545
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
                                          "start": 3547,
                                          "end": 3548
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3554,
                                            "end": 3561
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 3550,
                                          "end": 3563
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3547,
                                        "end": 3563
                                      }
                                    ],
                                    "start": 3539,
                                    "end": 3565
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
                                          "start": 3569,
                                          "end": 3570
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 5,
                                          "raw": "5",
                                          "start": 3572,
                                          "end": 3573
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3569,
                                        "end": 3573
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
                                          "start": 3575,
                                          "end": 3576
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3582,
                                            "end": 3586
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 3578,
                                          "end": 3588
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3575,
                                        "end": 3588
                                      }
                                    ],
                                    "start": 3567,
                                    "end": 3590
                                  }
                                ],
                                "start": 3538,
                                "end": 3591
                              },
                              "definite": false,
                              "start": 3506,
                              "end": 3591
                            }
                          ],
                          "declare": false,
                          "start": 3502,
                          "end": 3592
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
                                "name": "t2",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
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
                                            "start": 3615,
                                            "end": 3616
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSBooleanKeyword",
                                              "start": 3618,
                                              "end": 3625
                                            },
                                            "start": 3616,
                                            "end": 3625
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 3615,
                                          "end": 3626
                                        },
                                        {
                                          "type": "TSPropertySignature",
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "y",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3627,
                                            "end": 3628
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "base",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3630,
                                                "end": 3634
                                              },
                                              "typeArguments": null,
                                              "start": 3630,
                                              "end": 3634
                                            },
                                            "start": 3628,
                                            "end": 3634
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 3627,
                                          "end": 3635
                                        }
                                      ],
                                      "start": 3613,
                                      "end": 3637
                                    },
                                    "start": 3613,
                                    "end": 3639
                                  },
                                  "start": 3611,
                                  "end": 3639
                                },
                                "start": 3609,
                                "end": 3639
                              },
                              "init": {
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
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3645,
                                          "end": 3646
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": true,
                                          "raw": "true",
                                          "start": 3648,
                                          "end": 3652
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3645,
                                        "end": 3652
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
                                          "start": 3654,
                                          "end": 3655
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3661,
                                            "end": 3668
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 3657,
                                          "end": 3670
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3654,
                                        "end": 3670
                                      }
                                    ],
                                    "start": 3643,
                                    "end": 3672
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
                                          "start": 3676,
                                          "end": 3677
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": false,
                                          "raw": "false",
                                          "start": 3679,
                                          "end": 3684
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3676,
                                        "end": 3684
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
                                          "start": 3686,
                                          "end": 3687
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3693,
                                            "end": 3697
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 3689,
                                          "end": 3699
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3686,
                                        "end": 3699
                                      }
                                    ],
                                    "start": 3674,
                                    "end": 3701
                                  }
                                ],
                                "start": 3642,
                                "end": 3702
                              },
                              "definite": false,
                              "start": 3609,
                              "end": 3702
                            }
                          ],
                          "declare": false,
                          "start": 3605,
                          "end": 3703
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
                                "name": "t3",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
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
                                            "start": 3726,
                                            "end": 3727
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSStringKeyword",
                                              "start": 3729,
                                              "end": 3735
                                            },
                                            "start": 3727,
                                            "end": 3735
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 3726,
                                          "end": 3736
                                        },
                                        {
                                          "type": "TSPropertySignature",
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "y",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3737,
                                            "end": 3738
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "base",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3740,
                                                "end": 3744
                                              },
                                              "typeArguments": null,
                                              "start": 3740,
                                              "end": 3744
                                            },
                                            "start": 3738,
                                            "end": 3744
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 3737,
                                          "end": 3745
                                        }
                                      ],
                                      "start": 3724,
                                      "end": 3747
                                    },
                                    "start": 3724,
                                    "end": 3749
                                  },
                                  "start": 3722,
                                  "end": 3749
                                },
                                "start": 3720,
                                "end": 3749
                              },
                              "init": {
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
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3755,
                                          "end": 3756
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3758,
                                          "end": 3767
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3755,
                                        "end": 3767
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
                                          "start": 3769,
                                          "end": 3770
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3776,
                                            "end": 3780
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 3772,
                                          "end": 3782
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3769,
                                        "end": 3782
                                      }
                                    ],
                                    "start": 3753,
                                    "end": 3784
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
                                          "start": 3788,
                                          "end": 3789
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "",
                                          "raw": "''",
                                          "start": 3791,
                                          "end": 3793
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3788,
                                        "end": 3793
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
                                          "start": 3795,
                                          "end": 3796
                                        },
                                        "value": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "derived",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3802,
                                            "end": 3809
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "start": 3798,
                                          "end": 3811
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3795,
                                        "end": 3811
                                      }
                                    ],
                                    "start": 3786,
                                    "end": 3813
                                  }
                                ],
                                "start": 3752,
                                "end": 3814
                              },
                              "definite": false,
                              "start": 3720,
                              "end": 3814
                            }
                          ],
                          "declare": false,
                          "start": 3716,
                          "end": 3815
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
                                "name": "anyObj",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 3841,
                                    "end": 3844
                                  },
                                  "start": 3839,
                                  "end": 3844
                                },
                                "start": 3833,
                                "end": 3844
                              },
                              "init": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3847,
                                "end": 3851
                              },
                              "definite": false,
                              "start": 3833,
                              "end": 3851
                            }
                          ],
                          "declare": false,
                          "start": 3829,
                          "end": 3852
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
                                "name": "a1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3928,
                                "end": 3930
                              },
                              "init": {
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
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3936,
                                          "end": 3937
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 3939,
                                          "end": 3940
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3936,
                                        "end": 3940
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
                                          "start": 3942,
                                          "end": 3943
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 3945,
                                          "end": 3948
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3942,
                                        "end": 3948
                                      }
                                    ],
                                    "start": 3934,
                                    "end": 3950
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
                                          "start": 3954,
                                          "end": 3955
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 3957,
                                          "end": 3960
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3954,
                                        "end": 3960
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
                                          "start": 3962,
                                          "end": 3963
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 3965,
                                          "end": 3968
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3962,
                                        "end": 3968
                                      }
                                    ],
                                    "start": 3952,
                                    "end": 3970
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
                                          "start": 3974,
                                          "end": 3975
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3977,
                                          "end": 3983
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3974,
                                        "end": 3983
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
                                          "start": 3985,
                                          "end": 3986
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 3988,
                                          "end": 3991
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3985,
                                        "end": 3991
                                      }
                                    ],
                                    "start": 3972,
                                    "end": 3993
                                  }
                                ],
                                "start": 3933,
                                "end": 3994
                              },
                              "definite": false,
                              "start": 3928,
                              "end": 3994
                            }
                          ],
                          "declare": false,
                          "start": 3924,
                          "end": 3995
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
                                "name": "a2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4012,
                                "end": 4014
                              },
                              "init": {
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
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4020,
                                          "end": 4021
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4023,
                                          "end": 4029
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4020,
                                        "end": 4029
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
                                          "start": 4031,
                                          "end": 4032
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 4034,
                                          "end": 4037
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4031,
                                        "end": 4037
                                      }
                                    ],
                                    "start": 4018,
                                    "end": 4039
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
                                          "start": 4043,
                                          "end": 4044
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 4046,
                                          "end": 4047
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4043,
                                        "end": 4047
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
                                          "start": 4049,
                                          "end": 4050
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 4052,
                                          "end": 4055
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4049,
                                        "end": 4055
                                      }
                                    ],
                                    "start": 4041,
                                    "end": 4057
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
                                          "start": 4061,
                                          "end": 4062
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 4064,
                                          "end": 4067
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4061,
                                        "end": 4067
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
                                          "start": 4069,
                                          "end": 4070
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 4072,
                                          "end": 4075
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4069,
                                        "end": 4075
                                      }
                                    ],
                                    "start": 4059,
                                    "end": 4077
                                  }
                                ],
                                "start": 4017,
                                "end": 4078
                              },
                              "definite": false,
                              "start": 4012,
                              "end": 4078
                            }
                          ],
                          "declare": false,
                          "start": 4008,
                          "end": 4079
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
                                "name": "a3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4096,
                                "end": 4098
                              },
                              "init": {
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
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4104,
                                          "end": 4105
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 4107,
                                          "end": 4108
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4104,
                                        "end": 4108
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
                                          "start": 4110,
                                          "end": 4111
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 4113,
                                          "end": 4116
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4110,
                                        "end": 4116
                                      }
                                    ],
                                    "start": 4102,
                                    "end": 4118
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
                                          "start": 4122,
                                          "end": 4123
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "anyObj",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4125,
                                          "end": 4131
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4122,
                                        "end": 4131
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
                                          "start": 4133,
                                          "end": 4134
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 4136,
                                          "end": 4139
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4133,
                                        "end": 4139
                                      }
                                    ],
                                    "start": 4120,
                                    "end": 4141
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
                                          "start": 4145,
                                          "end": 4146
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 4148,
                                          "end": 4151
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4145,
                                        "end": 4151
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
                                          "start": 4153,
                                          "end": 4154
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 4156,
                                          "end": 4159
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4153,
                                        "end": 4159
                                      }
                                    ],
                                    "start": 4143,
                                    "end": 4161
                                  }
                                ],
                                "start": 4101,
                                "end": 4162
                              },
                              "definite": false,
                              "start": 4096,
                              "end": 4162
                            }
                          ],
                          "declare": false,
                          "start": 4092,
                          "end": 4163
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
                                "name": "ifaceObj",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "iface",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4191,
                                      "end": 4196
                                    },
                                    "typeArguments": null,
                                    "start": 4191,
                                    "end": 4196
                                  },
                                  "start": 4189,
                                  "end": 4196
                                },
                                "start": 4181,
                                "end": 4196
                              },
                              "init": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 4199,
                                "end": 4203
                              },
                              "definite": false,
                              "start": 4181,
                              "end": 4203
                            }
                          ],
                          "declare": false,
                          "start": 4177,
                          "end": 4204
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
                                "name": "baseObj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4221,
                                "end": 4228
                              },
                              "init": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4235,
                                  "end": 4239
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 4231,
                                "end": 4241
                              },
                              "definite": false,
                              "start": 4221,
                              "end": 4241
                            }
                          ],
                          "declare": false,
                          "start": 4217,
                          "end": 4242
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
                                "name": "base2Obj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4259,
                                "end": 4267
                              },
                              "init": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "base2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4274,
                                  "end": 4279
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 4270,
                                "end": 4281
                              },
                              "definite": false,
                              "start": 4259,
                              "end": 4281
                            }
                          ],
                          "declare": false,
                          "start": 4255,
                          "end": 4282
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
                                "name": "b1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4300,
                                "end": 4302
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4306,
                                    "end": 4313
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4315,
                                    "end": 4323
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4325,
                                    "end": 4333
                                  }
                                ],
                                "start": 4305,
                                "end": 4334
                              },
                              "definite": false,
                              "start": 4300,
                              "end": 4334
                            }
                          ],
                          "declare": false,
                          "start": 4296,
                          "end": 4335
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
                                "name": "b2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4352,
                                "end": 4354
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4358,
                                    "end": 4366
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4368,
                                    "end": 4375
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4377,
                                    "end": 4385
                                  }
                                ],
                                "start": 4357,
                                "end": 4386
                              },
                              "definite": false,
                              "start": 4352,
                              "end": 4386
                            }
                          ],
                          "declare": false,
                          "start": 4348,
                          "end": 4387
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
                                "name": "b3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4404,
                                "end": 4406
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4410,
                                    "end": 4417
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4419,
                                    "end": 4427
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4429,
                                    "end": 4437
                                  }
                                ],
                                "start": 4409,
                                "end": 4438
                              },
                              "definite": false,
                              "start": 4404,
                              "end": 4438
                            }
                          ],
                          "declare": false,
                          "start": 4400,
                          "end": 4439
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
                                "name": "b4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4456,
                                "end": 4458
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifaceObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4462,
                                    "end": 4470
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "baseObj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4472,
                                    "end": 4479
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "base2Obj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4481,
                                    "end": 4489
                                  }
                                ],
                                "start": 4461,
                                "end": 4490
                              },
                              "definite": false,
                              "start": 4456,
                              "end": 4490
                            }
                          ],
                          "declare": false,
                          "start": 4452,
                          "end": 4491
                        }
                      ],
                      "start": 2722,
                      "end": 4501
                    },
                    "expression": false,
                    "start": 2719,
                    "end": 4501
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2711,
                  "end": 4501
                }
              ],
              "start": 2459,
              "end": 4507
            },
            "abstract": false,
            "declare": false,
            "start": 2451,
            "end": 4507
          }
        ],
        "start": 2245,
        "end": 4509
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2221,
      "end": 4509
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4510
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
    "value": "EmptyTypes",
    "start": 10,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 27,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "iface",
    "start": 37,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 51,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 57,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 62,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "iface",
    "start": 73,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 87,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "base2",
    "start": 93,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 99,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "iface",
    "start": 110,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 124,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "derived",
    "start": 130,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 138,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 146,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 161,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 179,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 186,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 199,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 212,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 222,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 238,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 245,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 258,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 270,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 296,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 303,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 316,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 328,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 338,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 354,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 361,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 374,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 381,
    "end": 382
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 383,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 391,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 395,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 397,
    "end": 403
  },
  {
    "type": "Null",
    "value": "null",
    "start": 404,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 421,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 447,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 455,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 460,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 470,
    "end": 471
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 472,
    "end": 473
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 476,
    "end": 477
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 496,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 504,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 509,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 519,
    "end": 520
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 520,
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
    "value": "2",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 526,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 536,
    "end": 537
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 556,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 564,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 569,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 580,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 589,
    "end": 590
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 592,
    "end": 593
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 596,
    "end": 597
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 616,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 623,
    "end": 624
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 624,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 629,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 639,
    "end": 640
  },
  {
    "type": "Null",
    "value": "null",
    "start": 640,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 644,
    "end": 645
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 647,
    "end": 648
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 651,
    "end": 652
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 671,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 678,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 679,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 684,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "2",
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
    "type": "Numeric",
    "value": "4",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 699,
    "end": 700
  },
  {
    "type": "Null",
    "value": "null",
    "start": 701,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 706,
    "end": 707
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": ")",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 726,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 733,
    "end": 734
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 734,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 739,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 750,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 759,
    "end": 760
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 762,
    "end": 763
  },
  {
    "type": "Null",
    "value": "null",
    "start": 764,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 769,
    "end": 770
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 790,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 797,
    "end": 798
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 798,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 803,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 813,
    "end": 814
  },
  {
    "type": "String",
    "value": "''",
    "start": 814,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 816,
    "end": 817
  },
  {
    "type": "String",
    "value": "\"q\"",
    "start": 818,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 822,
    "end": 823
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 842,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 850,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 855,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 865,
    "end": 866
  },
  {
    "type": "String",
    "value": "''",
    "start": 866,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 868,
    "end": 869
  },
  {
    "type": "String",
    "value": "\"q\"",
    "start": 870,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 875,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 885,
    "end": 886
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 905,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 912,
    "end": 913
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 913,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 918,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 929,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 938,
    "end": 939
  },
  {
    "type": "String",
    "value": "\"q\"",
    "start": 940,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 943,
    "end": 944
  },
  {
    "type": "String",
    "value": "''",
    "start": 945,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 948,
    "end": 949
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 950,
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
    "value": ")",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 968,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 975,
    "end": 976
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 976,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 980,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 981,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 991,
    "end": 992
  },
  {
    "type": "Null",
    "value": "null",
    "start": 992,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 996,
    "end": 997
  },
  {
    "type": "String",
    "value": "\"q\"",
    "start": 998,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "String",
    "value": "''",
    "start": 1003,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1009,
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
    "value": "<",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1026,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "this",
    "start": 1034,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 1039,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "String",
    "value": "\"q\"",
    "start": 1050,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "String",
    "value": "''",
    "start": 1055,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1059,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1084,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1092,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 1097,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1108,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "String",
    "value": "''",
    "start": 1119,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1123,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1149,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1157,
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
    "value": "voidIfAny",
    "start": 1162,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1182,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "var",
    "start": 1212,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1216,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1225,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 1236,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1260,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "derived",
    "start": 1264,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1288,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 1292,
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
    "value": ")",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1315,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1319,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1328,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 1340,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1358,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1367,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "derived",
    "start": 1371,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": ",",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1389,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1399,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 1403,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1426,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1430,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1439,
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
    "value": "y",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 1450,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1468,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1482,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 1486,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "String",
    "value": "''",
    "start": 1501,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1508,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "derived",
    "start": 1512,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "}",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1539,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "anyObj",
    "start": 1543,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1551,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1557,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1634,
    "end": 1637
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1638,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1655,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1667,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1675,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Identifier",
    "value": "anyObj",
    "start": 1687,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1698,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1718,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1722,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Identifier",
    "value": "anyObj",
    "start": 1733,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1744,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1762,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1774,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1782,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1802,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1806,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1823,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "anyObj",
    "start": 1835,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1846,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1858,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1866,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1887,
    "end": 1890
  },
  {
    "type": "Identifier",
    "value": "ifaceObj",
    "start": 1891,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Identifier",
    "value": "iface",
    "start": 1901,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1909,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1927,
    "end": 1930
  },
  {
    "type": "Identifier",
    "value": "baseObj",
    "start": 1931,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1941,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 1945,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1965,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "base2Obj",
    "start": 1969,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1980,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "base2",
    "start": 1984,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2006,
    "end": 2009
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 2010,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Identifier",
    "value": "baseObj",
    "start": 2016,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "base2Obj",
    "start": 2025,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Identifier",
    "value": "ifaceObj",
    "start": 2035,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2058,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 2062,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Identifier",
    "value": "base2Obj",
    "start": 2068,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "baseObj",
    "start": 2078,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Identifier",
    "value": "ifaceObj",
    "start": 2087,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2110,
    "end": 2113
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 2114,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Identifier",
    "value": "baseObj",
    "start": 2120,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Identifier",
    "value": "ifaceObj",
    "start": 2129,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "base2Obj",
    "start": 2139,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2162,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 2166,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Identifier",
    "value": "ifaceObj",
    "start": 2172,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Identifier",
    "value": "baseObj",
    "start": 2182,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "base2Obj",
    "start": 2191,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2221,
    "end": 2230
  },
  {
    "type": "Identifier",
    "value": "NonEmptyTypes",
    "start": 2231,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2251,
    "end": 2260
  },
  {
    "type": "Identifier",
    "value": "iface",
    "start": 2261,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2272,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2286,
    "end": 2291
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 2292,
    "end": 2296
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2297,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "iface",
    "start": 2308,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2319,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2330,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2344,
    "end": 2349
  },
  {
    "type": "Identifier",
    "value": "base2",
    "start": 2350,
    "end": 2355
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2356,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "iface",
    "start": 2367,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2378,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2389,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2403,
    "end": 2408
  },
  {
    "type": "Identifier",
    "value": "derived",
    "start": 2409,
    "end": 2416
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2417,
    "end": 2424
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 2425,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2435,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2451,
    "end": 2456
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2469,
    "end": 2475
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 2476,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2489,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2502,
    "end": 2509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2509,
    "end": 2510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2512,
    "end": 2518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2518,
    "end": 2519
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2528,
    "end": 2534
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 2535,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2548,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2560,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2567,
    "end": 2568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2570,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2586,
    "end": 2592
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 2593,
    "end": 2602
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2606,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2614,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2618,
    "end": 2625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2628,
    "end": 2634
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2644,
    "end": 2650
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 2651,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2662,
    "end": 2663
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2664,
    "end": 2667
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2667,
    "end": 2668
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2669,
    "end": 2670
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2673,
    "end": 2678
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2678,
    "end": 2679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2681,
    "end": 2684
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2685,
    "end": 2686
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2687,
    "end": 2693
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2694,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2700,
    "end": 2701
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2711,
    "end": 2717
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2737,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2745,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2749,
    "end": 2750
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 2750,
    "end": 2759
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2759,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 2761,
    "end": 2762
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2765,
    "end": 2766
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2767,
    "end": 2768
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2768,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2785,
    "end": 2786
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2786,
    "end": 2792
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2792,
    "end": 2793
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2794,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 2799,
    "end": 2808
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 2810,
    "end": 2811
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2811,
    "end": 2812
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2813,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2816,
    "end": 2825
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2825,
    "end": 2826
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2829,
    "end": 2830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2831,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2845,
    "end": 2846
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2846,
    "end": 2852
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2852,
    "end": 2853
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2853,
    "end": 2854
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2854,
    "end": 2858
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 2859,
    "end": 2868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2868,
    "end": 2869
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2869,
    "end": 2870
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2870,
    "end": 2879
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 2884,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2888,
    "end": 2889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2891,
    "end": 2892
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2906,
    "end": 2912
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2912,
    "end": 2913
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2913,
    "end": 2914
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2914,
    "end": 2918
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2918,
    "end": 2919
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 2919,
    "end": 2928
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2928,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2930,
    "end": 2934
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2936,
    "end": 2937
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2937,
    "end": 2938
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 2939,
    "end": 2940
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2943,
    "end": 2944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2945,
    "end": 2946
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2961,
    "end": 2967
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2969,
    "end": 2973
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2973,
    "end": 2974
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 2974,
    "end": 2983
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2983,
    "end": 2984
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2985,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2986,
    "end": 2987
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 2988,
    "end": 2989
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2991,
    "end": 2995
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2996,
    "end": 2997
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2997,
    "end": 2998
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3000,
    "end": 3001
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3001,
    "end": 3002
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3015,
    "end": 3016
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3016,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3023,
    "end": 3024
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3024,
    "end": 3028
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3028,
    "end": 3029
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 3029,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3038,
    "end": 3039
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3040,
    "end": 3049
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3049,
    "end": 3050
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 3051,
    "end": 3052
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3052,
    "end": 3053
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3054,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3060,
    "end": 3061
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3061,
    "end": 3062
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3062,
    "end": 3063
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3063,
    "end": 3064
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3064,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3079,
    "end": 3080
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3080,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3088,
    "end": 3092
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 3093,
    "end": 3102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3102,
    "end": 3103
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3103,
    "end": 3104
  },
  {
    "type": "String",
    "value": "''",
    "start": 3104,
    "end": 3106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "String",
    "value": "\"q\"",
    "start": 3108,
    "end": 3111
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3111,
    "end": 3112
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3112,
    "end": 3113
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3113,
    "end": 3114
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "<",
    "start": 3131,
    "end": 3132
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3132,
    "end": 3138
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3138,
    "end": 3139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3139,
    "end": 3140
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3140,
    "end": 3144
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3144,
    "end": 3145
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 3145,
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
    "value": "[",
    "start": 3155,
    "end": 3156
  },
  {
    "type": "String",
    "value": "''",
    "start": 3156,
    "end": 3158
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3158,
    "end": 3159
  },
  {
    "type": "String",
    "value": "\"q\"",
    "start": 3160,
    "end": 3163
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3165,
    "end": 3174
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3175,
    "end": 3176
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3176,
    "end": 3177
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ")",
    "start": 3179,
    "end": 3180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3180,
    "end": 3181
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3194,
    "end": 3195
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3195,
    "end": 3201
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3201,
    "end": 3202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3203,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 3208,
    "end": 3217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3217,
    "end": 3218
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3218,
    "end": 3219
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3219,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "String",
    "value": "\"q\"",
    "start": 3230,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3233,
    "end": 3234
  },
  {
    "type": "String",
    "value": "''",
    "start": 3235,
    "end": 3237
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3237,
    "end": 3238
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3238,
    "end": 3239
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3240,
    "end": 3241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3241,
    "end": 3242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3242,
    "end": 3243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3243,
    "end": 3244
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3257,
    "end": 3258
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3258,
    "end": 3264
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3264,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3265,
    "end": 3266
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3266,
    "end": 3270
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3270,
    "end": 3271
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 3271,
    "end": 3280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3281,
    "end": 3282
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3282,
    "end": 3286
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3286,
    "end": 3287
  },
  {
    "type": "String",
    "value": "\"q\"",
    "start": 3288,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3291,
    "end": 3292
  },
  {
    "type": "String",
    "value": "''",
    "start": 3293,
    "end": 3295
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3295,
    "end": 3296
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3296,
    "end": 3297
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3297,
    "end": 3298
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3298,
    "end": 3299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3299,
    "end": 3300
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3300,
    "end": 3301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3301,
    "end": 3302
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3316,
    "end": 3322
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3322,
    "end": 3323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3323,
    "end": 3324
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3324,
    "end": 3328
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3328,
    "end": 3329
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 3329,
    "end": 3338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3338,
    "end": 3339
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3339,
    "end": 3340
  },
  {
    "type": "String",
    "value": "\"q\"",
    "start": 3340,
    "end": 3343
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3343,
    "end": 3344
  },
  {
    "type": "String",
    "value": "''",
    "start": 3345,
    "end": 3347
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3347,
    "end": 3348
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3349,
    "end": 3353
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3353,
    "end": 3354
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3354,
    "end": 3355
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3355,
    "end": 3356
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3356,
    "end": 3357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3357,
    "end": 3358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3358,
    "end": 3359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3359,
    "end": 3360
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3373,
    "end": 3374
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3374,
    "end": 3380
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3380,
    "end": 3381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3381,
    "end": 3382
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3382,
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
    "value": "voidIfAny",
    "start": 3387,
    "end": 3396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3396,
    "end": 3397
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3397,
    "end": 3398
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3398,
    "end": 3407
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3407,
    "end": 3408
  },
  {
    "type": "String",
    "value": "''",
    "start": 3409,
    "end": 3411
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3411,
    "end": 3412
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3413,
    "end": 3417
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3417,
    "end": 3418
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3420,
    "end": 3421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3421,
    "end": 3422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3422,
    "end": 3423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3423,
    "end": 3424
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3438,
    "end": 3439
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3439,
    "end": 3445
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3445,
    "end": 3446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3446,
    "end": 3447
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3447,
    "end": 3451
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3451,
    "end": 3452
  },
  {
    "type": "Identifier",
    "value": "voidIfAny",
    "start": 3452,
    "end": 3461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3461,
    "end": 3462
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3462,
    "end": 3463
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3463,
    "end": 3464
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 3464,
    "end": 3465
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3465,
    "end": 3466
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 3467,
    "end": 3468
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3468,
    "end": 3469
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3469,
    "end": 3470
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3471,
    "end": 3472
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3472,
    "end": 3476
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3476,
    "end": 3477
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3477,
    "end": 3478
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3478,
    "end": 3479
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3479,
    "end": 3480
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3480,
    "end": 3481
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3481,
    "end": 3482
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3482,
    "end": 3483
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3483,
    "end": 3484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3484,
    "end": 3485
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3485,
    "end": 3486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3486,
    "end": 3487
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3502,
    "end": 3505
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 3506,
    "end": 3508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3508,
    "end": 3509
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3510,
    "end": 3511
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3512,
    "end": 3513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3513,
    "end": 3514
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3515,
    "end": 3521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3521,
    "end": 3522
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3523,
    "end": 3524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3524,
    "end": 3525
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 3526,
    "end": 3530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3530,
    "end": 3531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3532,
    "end": 3533
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3533,
    "end": 3534
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3534,
    "end": 3535
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3536,
    "end": 3537
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3538,
    "end": 3539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3539,
    "end": 3540
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3541,
    "end": 3542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3542,
    "end": 3543
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 3544,
    "end": 3545
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3545,
    "end": 3546
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3547,
    "end": 3548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3548,
    "end": 3549
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3550,
    "end": 3553
  },
  {
    "type": "Identifier",
    "value": "derived",
    "start": 3554,
    "end": 3561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3561,
    "end": 3562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3562,
    "end": 3563
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3564,
    "end": 3565
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3565,
    "end": 3566
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3569,
    "end": 3570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3570,
    "end": 3571
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 3572,
    "end": 3573
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3573,
    "end": 3574
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3575,
    "end": 3576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3576,
    "end": 3577
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3578,
    "end": 3581
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 3582,
    "end": 3586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3586,
    "end": 3587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3587,
    "end": 3588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3589,
    "end": 3590
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3590,
    "end": 3591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3591,
    "end": 3592
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3605,
    "end": 3608
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 3609,
    "end": 3611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3611,
    "end": 3612
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3613,
    "end": 3614
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3615,
    "end": 3616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3616,
    "end": 3617
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3618,
    "end": 3625
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3625,
    "end": 3626
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3627,
    "end": 3628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3628,
    "end": 3629
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 3630,
    "end": 3634
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3634,
    "end": 3635
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3636,
    "end": 3637
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3637,
    "end": 3638
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3638,
    "end": 3639
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3640,
    "end": 3641
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3642,
    "end": 3643
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3643,
    "end": 3644
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Boolean",
    "value": "true",
    "start": 3648,
    "end": 3652
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3652,
    "end": 3653
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3654,
    "end": 3655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3655,
    "end": 3656
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3657,
    "end": 3660
  },
  {
    "type": "Identifier",
    "value": "derived",
    "start": 3661,
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
    "value": ",",
    "start": 3672,
    "end": 3673
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3674,
    "end": 3675
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3676,
    "end": 3677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3677,
    "end": 3678
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3679,
    "end": 3684
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3684,
    "end": 3685
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3686,
    "end": 3687
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3687,
    "end": 3688
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3689,
    "end": 3692
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 3693,
    "end": 3697
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3697,
    "end": 3698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3698,
    "end": 3699
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3700,
    "end": 3701
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3701,
    "end": 3702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3702,
    "end": 3703
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3716,
    "end": 3719
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 3720,
    "end": 3722
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3722,
    "end": 3723
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3724,
    "end": 3725
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3726,
    "end": 3727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3727,
    "end": 3728
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3729,
    "end": 3735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3735,
    "end": 3736
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3737,
    "end": 3738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3738,
    "end": 3739
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 3740,
    "end": 3744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3744,
    "end": 3745
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3746,
    "end": 3747
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3747,
    "end": 3748
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3748,
    "end": 3749
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3750,
    "end": 3751
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3752,
    "end": 3753
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3753,
    "end": 3754
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3755,
    "end": 3756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3756,
    "end": 3757
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3758,
    "end": 3767
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3767,
    "end": 3768
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3769,
    "end": 3770
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3770,
    "end": 3771
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3772,
    "end": 3775
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 3776,
    "end": 3780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3780,
    "end": 3781
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3781,
    "end": 3782
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3783,
    "end": 3784
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3784,
    "end": 3785
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3786,
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
    "value": ":",
    "start": 3789,
    "end": 3790
  },
  {
    "type": "String",
    "value": "''",
    "start": 3791,
    "end": 3793
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3793,
    "end": 3794
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3795,
    "end": 3796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3796,
    "end": 3797
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3798,
    "end": 3801
  },
  {
    "type": "Identifier",
    "value": "derived",
    "start": 3802,
    "end": 3809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3809,
    "end": 3810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3810,
    "end": 3811
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3812,
    "end": 3813
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3813,
    "end": 3814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3814,
    "end": 3815
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3829,
    "end": 3832
  },
  {
    "type": "Identifier",
    "value": "anyObj",
    "start": 3833,
    "end": 3839
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3839,
    "end": 3840
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3841,
    "end": 3844
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3845,
    "end": 3846
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3847,
    "end": 3851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3851,
    "end": 3852
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3924,
    "end": 3927
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 3928,
    "end": 3930
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3931,
    "end": 3932
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3933,
    "end": 3934
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3934,
    "end": 3935
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3936,
    "end": 3937
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3937,
    "end": 3938
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3939,
    "end": 3940
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3940,
    "end": 3941
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3942,
    "end": 3943
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3943,
    "end": 3944
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 3945,
    "end": 3948
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3949,
    "end": 3950
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3950,
    "end": 3951
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3952,
    "end": 3953
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3954,
    "end": 3955
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3955,
    "end": 3956
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 3957,
    "end": 3960
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3960,
    "end": 3961
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3962,
    "end": 3963
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3963,
    "end": 3964
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 3965,
    "end": 3968
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3969,
    "end": 3970
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3970,
    "end": 3971
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3972,
    "end": 3973
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3974,
    "end": 3975
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3975,
    "end": 3976
  },
  {
    "type": "Identifier",
    "value": "anyObj",
    "start": 3977,
    "end": 3983
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3983,
    "end": 3984
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3985,
    "end": 3986
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3986,
    "end": 3987
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 3988,
    "end": 3991
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3992,
    "end": 3993
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "var",
    "start": 4008,
    "end": 4011
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 4012,
    "end": 4014
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4015,
    "end": 4016
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4017,
    "end": 4018
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4018,
    "end": 4019
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4020,
    "end": 4021
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4021,
    "end": 4022
  },
  {
    "type": "Identifier",
    "value": "anyObj",
    "start": 4023,
    "end": 4029
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4029,
    "end": 4030
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4031,
    "end": 4032
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4032,
    "end": 4033
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 4034,
    "end": 4037
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4038,
    "end": 4039
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4039,
    "end": 4040
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4041,
    "end": 4042
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4043,
    "end": 4044
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4044,
    "end": 4045
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4046,
    "end": 4047
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4047,
    "end": 4048
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4049,
    "end": 4050
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4050,
    "end": 4051
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 4052,
    "end": 4055
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4056,
    "end": 4057
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4057,
    "end": 4058
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4059,
    "end": 4060
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4061,
    "end": 4062
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4062,
    "end": 4063
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 4064,
    "end": 4067
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4067,
    "end": 4068
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4069,
    "end": 4070
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4070,
    "end": 4071
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 4072,
    "end": 4075
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4076,
    "end": 4077
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4077,
    "end": 4078
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4078,
    "end": 4079
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4092,
    "end": 4095
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 4096,
    "end": 4098
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4099,
    "end": 4100
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4101,
    "end": 4102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4102,
    "end": 4103
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4104,
    "end": 4105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4105,
    "end": 4106
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4107,
    "end": 4108
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4108,
    "end": 4109
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4110,
    "end": 4111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4111,
    "end": 4112
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 4113,
    "end": 4116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4117,
    "end": 4118
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4118,
    "end": 4119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4120,
    "end": 4121
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4122,
    "end": 4123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4123,
    "end": 4124
  },
  {
    "type": "Identifier",
    "value": "anyObj",
    "start": 4125,
    "end": 4131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4131,
    "end": 4132
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4133,
    "end": 4134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4134,
    "end": 4135
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 4136,
    "end": 4139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4140,
    "end": 4141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4141,
    "end": 4142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4143,
    "end": 4144
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4145,
    "end": 4146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4146,
    "end": 4147
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 4148,
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
    "value": "y",
    "start": 4153,
    "end": 4154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4154,
    "end": 4155
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 4156,
    "end": 4159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4160,
    "end": 4161
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4161,
    "end": 4162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4162,
    "end": 4163
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4177,
    "end": 4180
  },
  {
    "type": "Identifier",
    "value": "ifaceObj",
    "start": 4181,
    "end": 4189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4189,
    "end": 4190
  },
  {
    "type": "Identifier",
    "value": "iface",
    "start": 4191,
    "end": 4196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4197,
    "end": 4198
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4199,
    "end": 4203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4203,
    "end": 4204
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4217,
    "end": 4220
  },
  {
    "type": "Identifier",
    "value": "baseObj",
    "start": 4221,
    "end": 4228
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4229,
    "end": 4230
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4231,
    "end": 4234
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 4235,
    "end": 4239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4239,
    "end": 4240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4240,
    "end": 4241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4241,
    "end": 4242
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4255,
    "end": 4258
  },
  {
    "type": "Identifier",
    "value": "base2Obj",
    "start": 4259,
    "end": 4267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4268,
    "end": 4269
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4270,
    "end": 4273
  },
  {
    "type": "Identifier",
    "value": "base2",
    "start": 4274,
    "end": 4279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4279,
    "end": 4280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4280,
    "end": 4281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4281,
    "end": 4282
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4296,
    "end": 4299
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 4300,
    "end": 4302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4303,
    "end": 4304
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4305,
    "end": 4306
  },
  {
    "type": "Identifier",
    "value": "baseObj",
    "start": 4306,
    "end": 4313
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4313,
    "end": 4314
  },
  {
    "type": "Identifier",
    "value": "base2Obj",
    "start": 4315,
    "end": 4323
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4323,
    "end": 4324
  },
  {
    "type": "Identifier",
    "value": "ifaceObj",
    "start": 4325,
    "end": 4333
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4333,
    "end": 4334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4334,
    "end": 4335
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4348,
    "end": 4351
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 4352,
    "end": 4354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4355,
    "end": 4356
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4357,
    "end": 4358
  },
  {
    "type": "Identifier",
    "value": "base2Obj",
    "start": 4358,
    "end": 4366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4366,
    "end": 4367
  },
  {
    "type": "Identifier",
    "value": "baseObj",
    "start": 4368,
    "end": 4375
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4375,
    "end": 4376
  },
  {
    "type": "Identifier",
    "value": "ifaceObj",
    "start": 4377,
    "end": 4385
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4385,
    "end": 4386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4386,
    "end": 4387
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4400,
    "end": 4403
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 4404,
    "end": 4406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4407,
    "end": 4408
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4409,
    "end": 4410
  },
  {
    "type": "Identifier",
    "value": "baseObj",
    "start": 4410,
    "end": 4417
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4417,
    "end": 4418
  },
  {
    "type": "Identifier",
    "value": "ifaceObj",
    "start": 4419,
    "end": 4427
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4427,
    "end": 4428
  },
  {
    "type": "Identifier",
    "value": "base2Obj",
    "start": 4429,
    "end": 4437
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4437,
    "end": 4438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4438,
    "end": 4439
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4452,
    "end": 4455
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 4456,
    "end": 4458
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4459,
    "end": 4460
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4461,
    "end": 4462
  },
  {
    "type": "Identifier",
    "value": "ifaceObj",
    "start": 4462,
    "end": 4470
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4470,
    "end": 4471
  },
  {
    "type": "Identifier",
    "value": "baseObj",
    "start": 4472,
    "end": 4479
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4479,
    "end": 4480
  },
  {
    "type": "Identifier",
    "value": "base2Obj",
    "start": 4481,
    "end": 4489
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4489,
    "end": 4490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4490,
    "end": 4491
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4500,
    "end": 4501
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4506,
    "end": 4507
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4508,
    "end": 4509
  }
]
```

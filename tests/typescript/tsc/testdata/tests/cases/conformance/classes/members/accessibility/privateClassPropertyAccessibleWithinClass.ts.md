__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 20,
        "end": 21
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 39,
                "end": 45
              },
              "start": 37,
              "end": 45
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 28,
            "end": 46
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 64
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 76,
                        "end": 80
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 81,
                        "end": 82
                      },
                      "optional": false,
                      "computed": false,
                      "start": 76,
                      "end": 82
                    },
                    "start": 69,
                    "end": 83
                  }
                ],
                "start": 67,
                "end": 85
              },
              "expression": false,
              "start": 64,
              "end": 85
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 51,
            "end": 85
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 103
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
                  "start": 104,
                  "end": 105
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 109,
                          "end": 113
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 114,
                          "end": 115
                        },
                        "optional": false,
                        "computed": false,
                        "start": 109,
                        "end": 115
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 118,
                          "end": 122
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 123,
                          "end": 124
                        },
                        "optional": false,
                        "computed": false,
                        "start": 118,
                        "end": 124
                      },
                      "start": 109,
                      "end": 124
                    },
                    "directive": null,
                    "start": 109,
                    "end": 125
                  }
                ],
                "start": 107,
                "end": 127
              },
              "expression": false,
              "start": 103,
              "end": 127
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 90,
            "end": 127
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
              "start": 140,
              "end": 143
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 155,
                        "end": 159
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 160,
                        "end": 163
                      },
                      "optional": false,
                      "computed": false,
                      "start": 155,
                      "end": 163
                    },
                    "start": 148,
                    "end": 164
                  }
                ],
                "start": 146,
                "end": 166
              },
              "expression": false,
              "start": 143,
              "end": 166
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 132,
            "end": 166
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 188
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 190,
                "end": 196
              },
              "start": 188,
              "end": 196
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 172,
            "end": 197
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 222
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 234,
                        "end": 238
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 239,
                        "end": 240
                      },
                      "optional": false,
                      "computed": false,
                      "start": 234,
                      "end": 240
                    },
                    "start": 227,
                    "end": 241
                  }
                ],
                "start": 225,
                "end": 243
              },
              "expression": false,
              "start": 222,
              "end": 243
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 202,
            "end": 243
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 268
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
                  "start": 269,
                  "end": 270
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 274,
                          "end": 278
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 279,
                          "end": 280
                        },
                        "optional": false,
                        "computed": false,
                        "start": 274,
                        "end": 280
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 283,
                          "end": 287
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 288,
                          "end": 289
                        },
                        "optional": false,
                        "computed": false,
                        "start": 283,
                        "end": 289
                      },
                      "start": 274,
                      "end": 289
                    },
                    "directive": null,
                    "start": 274,
                    "end": 290
                  }
                ],
                "start": 272,
                "end": 292
              },
              "expression": false,
              "start": 268,
              "end": 292
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 248,
            "end": 292
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
              "start": 312,
              "end": 315
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 327,
                        "end": 331
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 332,
                        "end": 335
                      },
                      "optional": false,
                      "computed": false,
                      "start": 327,
                      "end": 335
                    },
                    "start": 320,
                    "end": 336
                  }
                ],
                "start": 318,
                "end": 338
              },
              "expression": false,
              "start": 315,
              "end": 338
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 297,
            "end": 338
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 361
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 366,
                          "end": 370
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 371,
                          "end": 374
                        },
                        "optional": false,
                        "computed": false,
                        "start": 366,
                        "end": 374
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 366,
                      "end": 376
                    },
                    "directive": null,
                    "start": 366,
                    "end": 377
                  }
                ],
                "start": 364,
                "end": 379
              },
              "expression": false,
              "start": 361,
              "end": 379
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 343,
            "end": 379
          }
        ],
        "start": 22,
        "end": 381
      },
      "abstract": false,
      "declare": false,
      "start": 14,
      "end": 381
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 424,
        "end": 426
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 441,
              "end": 442
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 444,
                "end": 450
              },
              "start": 442,
              "end": 450
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 433,
            "end": 451
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 468,
              "end": 469
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
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 480,
                          "end": 484
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 485,
                          "end": 486
                        },
                        "optional": false,
                        "computed": false,
                        "start": 480,
                        "end": 486
                      },
                      "id": null,
                      "generator": false,
                      "start": 474,
                      "end": 486
                    },
                    "directive": null,
                    "start": 474,
                    "end": 487
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 495,
                      "end": 499
                    },
                    "start": 488,
                    "end": 500
                  }
                ],
                "start": 472,
                "end": 502
              },
              "expression": false,
              "start": 469,
              "end": 502
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 456,
            "end": 502
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 520
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
                  "start": 521,
                  "end": 522
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
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
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 534,
                                  "end": 538
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 539,
                                  "end": 540
                                },
                                "optional": false,
                                "computed": false,
                                "start": 534,
                                "end": 540
                              },
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 543,
                                  "end": 547
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 548,
                                  "end": 549
                                },
                                "optional": false,
                                "computed": false,
                                "start": 543,
                                "end": 549
                              },
                              "start": 534,
                              "end": 549
                            },
                            "directive": null,
                            "start": 534,
                            "end": 550
                          }
                        ],
                        "start": 532,
                        "end": 552
                      },
                      "id": null,
                      "generator": false,
                      "start": 526,
                      "end": 552
                    },
                    "directive": null,
                    "start": 526,
                    "end": 552
                  }
                ],
                "start": 524,
                "end": 554
              },
              "expression": false,
              "start": 520,
              "end": 554
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 507,
            "end": 554
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
              "start": 567,
              "end": 570
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
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 581,
                          "end": 585
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 586,
                          "end": 589
                        },
                        "optional": false,
                        "computed": false,
                        "start": 581,
                        "end": 589
                      },
                      "id": null,
                      "generator": false,
                      "start": 575,
                      "end": 589
                    },
                    "directive": null,
                    "start": 575,
                    "end": 590
                  }
                ],
                "start": 573,
                "end": 592
              },
              "expression": false,
              "start": 570,
              "end": 592
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 559,
            "end": 592
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 613,
              "end": 614
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 616,
                "end": 622
              },
              "start": 614,
              "end": 622
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 598,
            "end": 623
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 647,
              "end": 648
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
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 659,
                          "end": 663
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 664,
                          "end": 665
                        },
                        "optional": false,
                        "computed": false,
                        "start": 659,
                        "end": 665
                      },
                      "id": null,
                      "generator": false,
                      "start": 653,
                      "end": 665
                    },
                    "directive": null,
                    "start": 653,
                    "end": 666
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 674,
                      "end": 678
                    },
                    "start": 667,
                    "end": 679
                  }
                ],
                "start": 651,
                "end": 681
              },
              "expression": false,
              "start": 648,
              "end": 681
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 628,
            "end": 681
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 705,
              "end": 706
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
                  "start": 707,
                  "end": 708
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
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
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 728,
                                  "end": 732
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 733,
                                  "end": 734
                                },
                                "optional": false,
                                "computed": false,
                                "start": 728,
                                "end": 734
                              },
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 737,
                                  "end": 741
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 742,
                                  "end": 743
                                },
                                "optional": false,
                                "computed": false,
                                "start": 737,
                                "end": 743
                              },
                              "start": 728,
                              "end": 743
                            },
                            "directive": null,
                            "start": 728,
                            "end": 744
                          }
                        ],
                        "start": 726,
                        "end": 746
                      },
                      "id": null,
                      "generator": false,
                      "start": 720,
                      "end": 746
                    },
                    "directive": null,
                    "start": 720,
                    "end": 746
                  }
                ],
                "start": 710,
                "end": 753
              },
              "expression": false,
              "start": 706,
              "end": 753
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 686,
            "end": 753
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
              "start": 773,
              "end": 776
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
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 787,
                          "end": 791
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 792,
                          "end": 795
                        },
                        "optional": false,
                        "computed": false,
                        "start": 787,
                        "end": 795
                      },
                      "id": null,
                      "generator": false,
                      "start": 781,
                      "end": 795
                    },
                    "directive": null,
                    "start": 781,
                    "end": 796
                  }
                ],
                "start": 779,
                "end": 798
              },
              "expression": false,
              "start": 776,
              "end": 798
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 758,
            "end": 798
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 818,
              "end": 821
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
                            "type": "ThisExpression",
                            "start": 832,
                            "end": 836
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 837,
                            "end": 840
                          },
                          "optional": false,
                          "computed": false,
                          "start": 832,
                          "end": 840
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 832,
                        "end": 842
                      },
                      "id": null,
                      "generator": false,
                      "start": 826,
                      "end": 842
                    },
                    "directive": null,
                    "start": 826,
                    "end": 843
                  }
                ],
                "start": 824,
                "end": 845
              },
              "expression": false,
              "start": 821,
              "end": 845
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 803,
            "end": 845
          }
        ],
        "start": 427,
        "end": 847
      },
      "abstract": false,
      "declare": false,
      "start": 418,
      "end": 847
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 14,
  "end": 847
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 14,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 28,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 51,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 59,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 69,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 76,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 90,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 98,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 109,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 118,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 132,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 140,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 148,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 155,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 160,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 172,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 180,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 190,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 202,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 210,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 217,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 227,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 234,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 248,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 256,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 263,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "this",
    "start": 274,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 279,
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
    "value": "this",
    "start": 283,
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
    "value": "x",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 297,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 305,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 312,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 320,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 327,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 332,
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
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 343,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 351,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 358,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 366,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 371,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 380,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 418,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 424,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 433,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 444,
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
    "value": "private",
    "start": 456,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 464,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 468,
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
    "value": ")",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 474,
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
    "value": "=>",
    "start": 477,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 480,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 486,
    "end": 487
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 488,
    "end": 494
  },
  {
    "type": "Null",
    "value": "null",
    "start": 495,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "private",
    "start": 507,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 515,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 529,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 532,
    "end": 533
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 534,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 541,
    "end": 542
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 543,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 553,
    "end": 554
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 559,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 567,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 578,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 581,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 586,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 591,
    "end": 592
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 598,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 606,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 616,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 622,
    "end": 623
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 628,
    "end": 635
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 636,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 643,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 656,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 659,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 665,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 667,
    "end": 673
  },
  {
    "type": "Null",
    "value": "null",
    "start": 674,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 680,
    "end": 681
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 686,
    "end": 693
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 694,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 701,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "(",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 723,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 726,
    "end": 727
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 728,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 735,
    "end": 736
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 737,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 752,
    "end": 753
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 758,
    "end": 765
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 766,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 773,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 784,
    "end": 786
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 787,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 792,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 797,
    "end": 798
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 803,
    "end": 810
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 811,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 818,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 829,
    "end": 831
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 832,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 837,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 846,
    "end": 847
  }
]
```

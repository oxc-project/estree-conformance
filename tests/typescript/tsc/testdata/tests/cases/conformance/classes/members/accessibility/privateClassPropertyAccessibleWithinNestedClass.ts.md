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
              "start": 393,
              "end": 396
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 415,
                      "end": 417
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
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 440,
                            "end": 443
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
                                  "type": "VariableDeclaration",
                                  "kind": "let",
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
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "C",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 471,
                                              "end": 472
                                            },
                                            "typeArguments": null,
                                            "start": 471,
                                            "end": 472
                                          },
                                          "start": 469,
                                          "end": 472
                                        },
                                        "start": 468,
                                        "end": 472
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 468,
                                      "end": 472
                                    }
                                  ],
                                  "declare": false,
                                  "start": 464,
                                  "end": 473
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
                                        "name": "x1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 494,
                                        "end": 496
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 499,
                                          "end": 500
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 501,
                                          "end": 504
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 499,
                                        "end": 504
                                      },
                                      "definite": false,
                                      "start": 494,
                                      "end": 504
                                    }
                                  ],
                                  "declare": false,
                                  "start": 490,
                                  "end": 505
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
                                        "name": "x2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 526,
                                        "end": 528
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 531,
                                          "end": 532
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 533,
                                          "end": 536
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 531,
                                        "end": 536
                                      },
                                      "definite": false,
                                      "start": 526,
                                      "end": 536
                                    }
                                  ],
                                  "declare": false,
                                  "start": 522,
                                  "end": 537
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
                                        "name": "x3",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 558,
                                        "end": 560
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 563,
                                          "end": 564
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 565,
                                          "end": 566
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 563,
                                        "end": 566
                                      },
                                      "definite": false,
                                      "start": 558,
                                      "end": 566
                                    }
                                  ],
                                  "declare": false,
                                  "start": 554,
                                  "end": 567
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
                                        "name": "x4",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 588,
                                        "end": 590
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 593,
                                          "end": 594
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 595,
                                          "end": 596
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 593,
                                        "end": 596
                                      },
                                      "definite": false,
                                      "start": 588,
                                      "end": 596
                                    }
                                  ],
                                  "declare": false,
                                  "start": 584,
                                  "end": 597
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
                                        "name": "sx1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 619,
                                        "end": 622
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 625,
                                          "end": 626
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 627,
                                          "end": 628
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 625,
                                        "end": 628
                                      },
                                      "definite": false,
                                      "start": 619,
                                      "end": 628
                                    }
                                  ],
                                  "declare": false,
                                  "start": 615,
                                  "end": 629
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
                                        "name": "sx2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 650,
                                        "end": 653
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 656,
                                          "end": 657
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 658,
                                          "end": 659
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 656,
                                        "end": 659
                                      },
                                      "definite": false,
                                      "start": 650,
                                      "end": 659
                                    }
                                  ],
                                  "declare": false,
                                  "start": 646,
                                  "end": 660
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
                                        "name": "sx3",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 681,
                                        "end": 684
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 687,
                                          "end": 688
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 689,
                                          "end": 692
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 687,
                                        "end": 692
                                      },
                                      "definite": false,
                                      "start": 681,
                                      "end": 692
                                    }
                                  ],
                                  "declare": false,
                                  "start": 677,
                                  "end": 693
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
                                        "name": "sx4",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 714,
                                        "end": 717
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 720,
                                          "end": 721
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 722,
                                          "end": 725
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 720,
                                        "end": 725
                                      },
                                      "definite": false,
                                      "start": 714,
                                      "end": 725
                                    }
                                  ],
                                  "declare": false,
                                  "start": 710,
                                  "end": 726
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
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 748,
                                        "end": 749
                                      },
                                      "init": {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 756,
                                          "end": 757
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 752,
                                        "end": 759
                                      },
                                      "definite": false,
                                      "start": 748,
                                      "end": 759
                                    }
                                  ],
                                  "declare": false,
                                  "start": 744,
                                  "end": 760
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
                                        "name": "y1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 781,
                                        "end": 783
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 786,
                                          "end": 787
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 788,
                                          "end": 791
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 786,
                                        "end": 791
                                      },
                                      "definite": false,
                                      "start": 781,
                                      "end": 791
                                    }
                                  ],
                                  "declare": false,
                                  "start": 777,
                                  "end": 792
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
                                        "name": "y2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 813,
                                        "end": 815
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 818,
                                          "end": 819
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 820,
                                          "end": 823
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 818,
                                        "end": 823
                                      },
                                      "definite": false,
                                      "start": 813,
                                      "end": 823
                                    }
                                  ],
                                  "declare": false,
                                  "start": 809,
                                  "end": 824
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
                                        "name": "y3",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 845,
                                        "end": 847
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 850,
                                          "end": 851
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 852,
                                          "end": 853
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 850,
                                        "end": 853
                                      },
                                      "definite": false,
                                      "start": 845,
                                      "end": 853
                                    }
                                  ],
                                  "declare": false,
                                  "start": 841,
                                  "end": 854
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
                                        "name": "y4",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 875,
                                        "end": 877
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 880,
                                          "end": 881
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 882,
                                          "end": 883
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 880,
                                        "end": 883
                                      },
                                      "definite": false,
                                      "start": 875,
                                      "end": 883
                                    }
                                  ],
                                  "declare": false,
                                  "start": 871,
                                  "end": 884
                                }
                              ],
                              "start": 446,
                              "end": 898
                            },
                            "expression": false,
                            "start": 443,
                            "end": 898
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 432,
                          "end": 898
                        }
                      ],
                      "start": 418,
                      "end": 908
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 409,
                    "end": 908
                  }
                ],
                "start": 399,
                "end": 914
              },
              "expression": false,
              "start": 396,
              "end": 914
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 385,
            "end": 914
          }
        ],
        "start": 22,
        "end": 916
      },
      "abstract": false,
      "declare": false,
      "start": 14,
      "end": 916
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 14,
  "end": 916
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
    "type": "Keyword",
    "value": "private",
    "start": 385,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 393,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 409,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 415,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 432,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 440,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 464,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 490,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 494,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 501,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 522,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 526,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 533,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 554,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "x3",
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
    "value": "x",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 566,
    "end": 567
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 584,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 588,
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
    "value": "x",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 615,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "sx1",
    "start": 619,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 646,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "sx2",
    "start": 650,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 658,
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
    "value": "var",
    "start": 677,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "sx3",
    "start": 681,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 689,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 692,
    "end": 693
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 710,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "sx4",
    "start": 714,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 722,
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
    "value": "let",
    "start": 744,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 750,
    "end": 751
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 752,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 759,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 777,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 781,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 788,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 791,
    "end": 792
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 809,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 813,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 820,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 823,
    "end": 824
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 841,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "y3",
    "start": 845,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 853,
    "end": 854
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 871,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "y4",
    "start": 875,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 915,
    "end": 916
  }
]
```

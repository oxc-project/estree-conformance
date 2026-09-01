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
        "name": "AA",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 8
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
              "type": "PrivateIdentifier",
              "name": "method",
              "start": 15,
              "end": 22
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
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 27,
                          "end": 31
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 32,
                          "end": 33
                        },
                        "optional": false,
                        "computed": false,
                        "start": 27,
                        "end": 33
                      },
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 36,
                        "end": 38
                      },
                      "start": 27,
                      "end": 38
                    },
                    "directive": null,
                    "start": 27,
                    "end": 39
                  }
                ],
                "start": 25,
                "end": 41
              },
              "expression": false,
              "start": 22,
              "end": 41
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 15,
            "end": 41
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "method2",
              "start": 47,
              "end": 55
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 57
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 62,
                    "end": 63
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 59,
                  "end": 63
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 65,
                "end": 67
              },
              "expression": false,
              "start": 55,
              "end": 67
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 47,
            "end": 67
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
              "start": 73,
              "end": 74
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 77,
              "end": 78
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 73,
            "end": 79
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 88
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
                          "start": 101,
                          "end": 105
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 106,
                          "end": 113
                        },
                        "optional": false,
                        "computed": false,
                        "start": 101,
                        "end": 113
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 101,
                      "end": 115
                    },
                    "directive": null,
                    "start": 101,
                    "end": 116
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
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 131,
                          "end": 135
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 138,
                            "end": 142
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "method",
                            "start": 143,
                            "end": 150
                          },
                          "optional": false,
                          "computed": false,
                          "start": 138,
                          "end": 150
                        },
                        "definite": false,
                        "start": 131,
                        "end": 150
                      }
                    ],
                    "declare": false,
                    "start": 125,
                    "end": 151
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "func",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 160,
                        "end": 164
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 160,
                      "end": 166
                    },
                    "directive": null,
                    "start": 160,
                    "end": 167
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 180,
                          "end": 184
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 185,
                          "end": 192
                        },
                        "optional": false,
                        "computed": false,
                        "start": 180,
                        "end": 192
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 176,
                      "end": 194
                    },
                    "directive": null,
                    "start": 176,
                    "end": 195
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
                          "name": "arr",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 211,
                          "end": 214
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 219,
                              "end": 220
                            },
                            {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 222,
                              "end": 223
                            }
                          ],
                          "start": 217,
                          "end": 225
                        },
                        "definite": false,
                        "start": 211,
                        "end": 225
                      }
                    ],
                    "declare": false,
                    "start": 205,
                    "end": 226
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 235,
                          "end": 239
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method2",
                          "start": 240,
                          "end": 248
                        },
                        "optional": false,
                        "computed": false,
                        "start": 235,
                        "end": 248
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 249,
                          "end": 250
                        },
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 255,
                            "end": 258
                          },
                          "start": 252,
                          "end": 258
                        },
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 260,
                          "end": 261
                        }
                      ],
                      "optional": false,
                      "start": 235,
                      "end": 262
                    },
                    "directive": null,
                    "start": 235,
                    "end": 263
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
                          "typeAnnotation": null,
                          "start": 279,
                          "end": 280
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 287,
                              "end": 291
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "method2",
                              "start": 292,
                              "end": 300
                            },
                            "optional": false,
                            "computed": false,
                            "start": 287,
                            "end": 300
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 301,
                              "end": 302
                            },
                            {
                              "type": "SpreadElement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 307,
                                "end": 310
                              },
                              "start": 304,
                              "end": 310
                            },
                            {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3",
                              "start": 312,
                              "end": 313
                            }
                          ],
                          "start": 283,
                          "end": 314
                        },
                        "definite": false,
                        "start": 279,
                        "end": 314
                      }
                    ],
                    "declare": false,
                    "start": 273,
                    "end": 315
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
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 339,
                          "end": 342
                        },
                        "init": {
                          "type": "TaggedTemplateExpression",
                          "tag": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 345,
                              "end": 349
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "method2",
                              "start": 350,
                              "end": 358
                            },
                            "optional": false,
                            "computed": false,
                            "start": 345,
                            "end": 358
                          },
                          "typeArguments": null,
                          "quasi": {
                            "type": "TemplateLiteral",
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "head",
                                  "cooked": "head"
                                },
                                "tail": false,
                                "start": 358,
                                "end": 365
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "middle",
                                  "cooked": "middle"
                                },
                                "tail": false,
                                "start": 366,
                                "end": 375
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "tail",
                                  "cooked": "tail"
                                },
                                "tail": true,
                                "start": 376,
                                "end": 382
                              }
                            ],
                            "expressions": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 365,
                                "end": 366
                              },
                              {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 375,
                                "end": 376
                              }
                            ],
                            "start": 358,
                            "end": 382
                          },
                          "start": 345,
                          "end": 382
                        },
                        "definite": false,
                        "start": 339,
                        "end": 382
                      }
                    ],
                    "declare": false,
                    "start": 333,
                    "end": 383
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "TaggedTemplateExpression",
                      "tag": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 392,
                              "end": 396
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 397,
                              "end": 408
                            },
                            "optional": false,
                            "computed": false,
                            "start": 392,
                            "end": 408
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 392,
                          "end": 410
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method2",
                          "start": 411,
                          "end": 419
                        },
                        "optional": false,
                        "computed": false,
                        "start": 392,
                        "end": 419
                      },
                      "typeArguments": null,
                      "quasi": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "test",
                              "cooked": "test"
                            },
                            "tail": false,
                            "start": 419,
                            "end": 426
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "and",
                              "cooked": "and"
                            },
                            "tail": false,
                            "start": 427,
                            "end": 433
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 434,
                            "end": 436
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 426,
                            "end": 427
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 433,
                            "end": 434
                          }
                        ],
                        "start": 419,
                        "end": 436
                      },
                      "start": 392,
                      "end": 436
                    },
                    "directive": null,
                    "start": 392,
                    "end": 437
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 447,
                              "end": 451
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 452,
                              "end": 463
                            },
                            "optional": false,
                            "computed": false,
                            "start": 447,
                            "end": 463
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 447,
                          "end": 465
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method2",
                          "start": 466,
                          "end": 474
                        },
                        "optional": false,
                        "computed": false,
                        "start": 447,
                        "end": 474
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 475,
                          "end": 476
                        },
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 481,
                            "end": 484
                          },
                          "start": 478,
                          "end": 484
                        },
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 486,
                          "end": 487
                        }
                      ],
                      "optional": false,
                      "start": 447,
                      "end": 488
                    },
                    "directive": null,
                    "start": 447,
                    "end": 489
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
                          "name": "b2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 505,
                          "end": 507
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 515,
                                  "end": 519
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 520,
                                  "end": 531
                                },
                                "optional": false,
                                "computed": false,
                                "start": 515,
                                "end": 531
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 515,
                              "end": 533
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "method2",
                              "start": 534,
                              "end": 542
                            },
                            "optional": false,
                            "computed": false,
                            "start": 515,
                            "end": 542
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 544,
                              "end": 545
                            },
                            {
                              "type": "SpreadElement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 550,
                                "end": 553
                              },
                              "start": 547,
                              "end": 553
                            },
                            {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3",
                              "start": 555,
                              "end": 556
                            }
                          ],
                          "start": 510,
                          "end": 557
                        },
                        "definite": false,
                        "start": 505,
                        "end": 557
                      }
                    ],
                    "declare": false,
                    "start": 499,
                    "end": 558
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
                          "name": "str2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 582,
                          "end": 586
                        },
                        "init": {
                          "type": "TaggedTemplateExpression",
                          "tag": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 589,
                                  "end": 593
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 594,
                                  "end": 605
                                },
                                "optional": false,
                                "computed": false,
                                "start": 589,
                                "end": 605
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 589,
                              "end": 607
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "method2",
                              "start": 608,
                              "end": 616
                            },
                            "optional": false,
                            "computed": false,
                            "start": 589,
                            "end": 616
                          },
                          "typeArguments": null,
                          "quasi": {
                            "type": "TemplateLiteral",
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "head",
                                  "cooked": "head"
                                },
                                "tail": false,
                                "start": 616,
                                "end": 623
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "middle",
                                  "cooked": "middle"
                                },
                                "tail": false,
                                "start": 624,
                                "end": 633
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "tail",
                                  "cooked": "tail"
                                },
                                "tail": true,
                                "start": 634,
                                "end": 640
                              }
                            ],
                            "expressions": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 623,
                                "end": 624
                              },
                              {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 633,
                                "end": 634
                              }
                            ],
                            "start": 616,
                            "end": 640
                          },
                          "start": 589,
                          "end": 640
                        },
                        "definite": false,
                        "start": 582,
                        "end": 640
                      }
                    ],
                    "declare": false,
                    "start": 576,
                    "end": 641
                  }
                ],
                "start": 91,
                "end": 647
              },
              "expression": false,
              "start": 88,
              "end": 647
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 84,
            "end": 647
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 652,
              "end": 663
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 679,
                        "end": 681
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 675,
                      "end": 683
                    },
                    "start": 668,
                    "end": 684
                  }
                ],
                "start": 666,
                "end": 686
              },
              "expression": false,
              "start": 663,
              "end": 686
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 652,
            "end": 686
          }
        ],
        "start": 9,
        "end": 688
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 688
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 688
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 6,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9,
    "end": 10
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 15,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 27,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 36,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "PrivateIdentifier",
    "value": "method2",
    "start": 47,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 59,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 84,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 101,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 105,
    "end": 106
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 106,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 125,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 131,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 138,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 142,
    "end": 143
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 143,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 160,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 176,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 180,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 184,
    "end": 185
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 185,
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
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 205,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 211,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 217,
    "end": 218
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 220,
    "end": 221
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 235,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 239,
    "end": 240
  },
  {
    "type": "PrivateIdentifier",
    "value": "method2",
    "start": 240,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 248,
    "end": 249
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 252,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 255,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 258,
    "end": 259
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 273,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "new",
    "start": 283,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 287,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 291,
    "end": 292
  },
  {
    "type": "PrivateIdentifier",
    "value": "method2",
    "start": 292,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 304,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 307,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 310,
    "end": 311
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 333,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 339,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 343,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 345,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 349,
    "end": 350
  },
  {
    "type": "PrivateIdentifier",
    "value": "method2",
    "start": 350,
    "end": 358
  },
  {
    "type": "Template",
    "value": "`head${",
    "start": 358,
    "end": 365
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 365,
    "end": 366
  },
  {
    "type": "Template",
    "value": "}middle${",
    "start": 366,
    "end": 375
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 375,
    "end": 376
  },
  {
    "type": "Template",
    "value": "}tail`",
    "start": 376,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 392,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 397,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 410,
    "end": 411
  },
  {
    "type": "PrivateIdentifier",
    "value": "method2",
    "start": 411,
    "end": 419
  },
  {
    "type": "Template",
    "value": "`test${",
    "start": 419,
    "end": 426
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 426,
    "end": 427
  },
  {
    "type": "Template",
    "value": "}and${",
    "start": 427,
    "end": 433
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 433,
    "end": 434
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 434,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 447,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 452,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 465,
    "end": 466
  },
  {
    "type": "PrivateIdentifier",
    "value": "method2",
    "start": 466,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 474,
    "end": 475
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 478,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 481,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 484,
    "end": 485
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "const",
    "start": 499,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 505,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 508,
    "end": 509
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 510,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 514,
    "end": 515
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 515,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 520,
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
    "value": ".",
    "start": 533,
    "end": 534
  },
  {
    "type": "PrivateIdentifier",
    "value": "method2",
    "start": 534,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 543,
    "end": 544
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 547,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 550,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 553,
    "end": 554
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 576,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "str2",
    "start": 582,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 587,
    "end": 588
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 589,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 594,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 607,
    "end": 608
  },
  {
    "type": "PrivateIdentifier",
    "value": "method2",
    "start": 608,
    "end": 616
  },
  {
    "type": "Template",
    "value": "`head${",
    "start": 616,
    "end": 623
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 623,
    "end": 624
  },
  {
    "type": "Template",
    "value": "}middle${",
    "start": 624,
    "end": 633
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 633,
    "end": 634
  },
  {
    "type": "Template",
    "value": "}tail`",
    "start": 634,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 652,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 666,
    "end": 667
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 668,
    "end": 674
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 675,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 679,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 687,
    "end": 688
  }
]
```

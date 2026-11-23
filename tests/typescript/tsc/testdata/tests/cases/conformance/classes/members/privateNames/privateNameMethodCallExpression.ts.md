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
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 652,
                          "end": 656
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 657,
                          "end": 664
                        },
                        "optional": false,
                        "computed": false,
                        "start": 652,
                        "end": 664
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 651,
                      "end": 667
                    },
                    "directive": null,
                    "start": 651,
                    "end": 668
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 677,
                            "end": 681
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "method",
                            "start": 682,
                            "end": 689
                          },
                          "optional": false,
                          "computed": false,
                          "start": 677,
                          "end": 689
                        },
                        "start": 677,
                        "end": 690
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 677,
                      "end": 692
                    },
                    "directive": null,
                    "start": 677,
                    "end": 693
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 703,
                            "end": 707
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "method",
                            "start": 708,
                            "end": 715
                          },
                          "optional": false,
                          "computed": false,
                          "start": 703,
                          "end": 715
                        },
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 725,
                              "end": 729
                            },
                            "start": 722,
                            "end": 729
                          },
                          "start": 719,
                          "end": 729
                        },
                        "start": 703,
                        "end": 729
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 702,
                      "end": 732
                    },
                    "directive": null,
                    "start": 702,
                    "end": 733
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "TSSatisfiesExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 743,
                            "end": 747
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "method",
                            "start": 748,
                            "end": 755
                          },
                          "optional": false,
                          "computed": false,
                          "start": 743,
                          "end": 755
                        },
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 772,
                              "end": 776
                            },
                            "start": 769,
                            "end": 776
                          },
                          "start": 766,
                          "end": 776
                        },
                        "start": 743,
                        "end": 776
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 742,
                      "end": 779
                    },
                    "directive": null,
                    "start": 742,
                    "end": 780
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 792,
                              "end": 796
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "method",
                              "start": 797,
                              "end": 804
                            },
                            "optional": false,
                            "computed": false,
                            "start": 792,
                            "end": 804
                          },
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 814,
                                "end": 818
                              },
                              "start": 811,
                              "end": 818
                            },
                            "start": 808,
                            "end": 818
                          },
                          "start": 792,
                          "end": 818
                        },
                        "start": 791,
                        "end": 820
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 789,
                      "end": 824
                    },
                    "directive": null,
                    "start": 789,
                    "end": 825
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 835,
                            "end": 839
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "method",
                            "start": 840,
                            "end": 847
                          },
                          "optional": false,
                          "computed": false,
                          "start": 835,
                          "end": 847
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": true,
                        "start": 834,
                        "end": 852
                      },
                      "start": 834,
                      "end": 852
                    },
                    "directive": null,
                    "start": 834,
                    "end": 853
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "TSNonNullExpression",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 862,
                              "end": 866
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "method",
                              "start": 867,
                              "end": 874
                            },
                            "optional": false,
                            "computed": false,
                            "start": 862,
                            "end": 874
                          },
                          "start": 862,
                          "end": 875
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": true,
                        "start": 862,
                        "end": 879
                      },
                      "start": 862,
                      "end": 879
                    },
                    "directive": null,
                    "start": 862,
                    "end": 880
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
                              "start": 890,
                              "end": 894
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 895,
                              "end": 906
                            },
                            "optional": false,
                            "computed": false,
                            "start": 890,
                            "end": 906
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 890,
                          "end": 908
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method2",
                          "start": 909,
                          "end": 917
                        },
                        "optional": false,
                        "computed": false,
                        "start": 890,
                        "end": 917
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 919,
                          "end": 920
                        },
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 925,
                            "end": 928
                          },
                          "start": 922,
                          "end": 928
                        },
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 930,
                          "end": 931
                        }
                      ],
                      "optional": false,
                      "start": 889,
                      "end": 932
                    },
                    "directive": null,
                    "start": 889,
                    "end": 933
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "TaggedTemplateExpression",
                      "tag": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 943,
                          "end": 947
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method2",
                          "start": 948,
                          "end": 956
                        },
                        "optional": false,
                        "computed": false,
                        "start": 943,
                        "end": 956
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
                            "start": 957,
                            "end": 964
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "and",
                              "cooked": "and"
                            },
                            "tail": false,
                            "start": 965,
                            "end": 971
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 972,
                            "end": 974
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 964,
                            "end": 965
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 971,
                            "end": 972
                          }
                        ],
                        "start": 957,
                        "end": 974
                      },
                      "start": 942,
                      "end": 974
                    },
                    "directive": null,
                    "start": 942,
                    "end": 975
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "TaggedTemplateExpression",
                      "tag": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 984,
                            "end": 988
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "method2",
                            "start": 989,
                            "end": 997
                          },
                          "optional": false,
                          "computed": false,
                          "start": 984,
                          "end": 997
                        },
                        "start": 984,
                        "end": 998
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
                            "start": 998,
                            "end": 1005
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "and",
                              "cooked": "and"
                            },
                            "tail": false,
                            "start": 1006,
                            "end": 1012
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 1013,
                            "end": 1015
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1005,
                            "end": 1006
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1012,
                            "end": 1013
                          }
                        ],
                        "start": 998,
                        "end": 1015
                      },
                      "start": 984,
                      "end": 1015
                    },
                    "directive": null,
                    "start": 984,
                    "end": 1016
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "TaggedTemplateExpression",
                      "tag": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1026,
                            "end": 1030
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "method2",
                            "start": 1031,
                            "end": 1039
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1026,
                          "end": 1039
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 1043,
                          "end": 1046
                        },
                        "start": 1026,
                        "end": 1046
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
                            "start": 1047,
                            "end": 1054
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "and",
                              "cooked": "and"
                            },
                            "tail": false,
                            "start": 1055,
                            "end": 1061
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 1062,
                            "end": 1064
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1054,
                            "end": 1055
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1061,
                            "end": 1062
                          }
                        ],
                        "start": 1047,
                        "end": 1064
                      },
                      "start": 1025,
                      "end": 1064
                    },
                    "directive": null,
                    "start": 1025,
                    "end": 1065
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "TaggedTemplateExpression",
                      "tag": {
                        "type": "TSSatisfiesExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1075,
                            "end": 1079
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "method2",
                            "start": 1080,
                            "end": 1088
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1075,
                          "end": 1088
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Function",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1099,
                            "end": 1107
                          },
                          "typeArguments": null,
                          "start": 1099,
                          "end": 1107
                        },
                        "start": 1075,
                        "end": 1107
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
                            "start": 1108,
                            "end": 1115
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "and",
                              "cooked": "and"
                            },
                            "tail": false,
                            "start": 1116,
                            "end": 1122
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 1123,
                            "end": 1125
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1115,
                            "end": 1116
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1122,
                            "end": 1123
                          }
                        ],
                        "start": 1108,
                        "end": 1125
                      },
                      "start": 1074,
                      "end": 1125
                    },
                    "directive": null,
                    "start": 1074,
                    "end": 1126
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "SequenceExpression",
                        "expressions": [
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1136,
                            "end": 1137
                          },
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1139,
                              "end": 1143
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "method",
                              "start": 1144,
                              "end": 1151
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1139,
                            "end": 1151
                          }
                        ],
                        "start": 1136,
                        "end": 1151
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1135,
                      "end": 1154
                    },
                    "directive": null,
                    "start": 1135,
                    "end": 1155
                  }
                ],
                "start": 91,
                "end": 1161
              },
              "expression": false,
              "start": 88,
              "end": 1161
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 84,
            "end": 1161
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
              "start": 1166,
              "end": 1177
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
                        "start": 1193,
                        "end": 1195
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1189,
                      "end": 1197
                    },
                    "start": 1182,
                    "end": 1198
                  }
                ],
                "start": 1180,
                "end": 1200
              },
              "expression": false,
              "start": 1177,
              "end": 1200
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1166,
            "end": 1200
          }
        ],
        "start": 9,
        "end": 1202
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 1202
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1202
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
    "value": "(",
    "start": 651,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 652,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 656,
    "end": 657
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 657,
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
    "value": "(",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 667,
    "end": 668
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 677,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 681,
    "end": 682
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 682,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 702,
    "end": 703
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 703,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 707,
    "end": 708
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 708,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 716,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 722,
    "end": 724
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 725,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 729,
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
    "value": ")",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 742,
    "end": 743
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 743,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 747,
    "end": 748
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 748,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 756,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 769,
    "end": 771
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 772,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 791,
    "end": 792
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 792,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 796,
    "end": 797
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 797,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 805,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 811,
    "end": 813
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 814,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 834,
    "end": 835
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 835,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 839,
    "end": 840
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 840,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 848,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 852,
    "end": 853
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 862,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 866,
    "end": 867
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 867,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 875,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 889,
    "end": 890
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 890,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 895,
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
    "value": ".",
    "start": 908,
    "end": 909
  },
  {
    "type": "PrivateIdentifier",
    "value": "method2",
    "start": 909,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 918,
    "end": 919
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Punctuator",
    "value": "...",
    "start": 922,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 925,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 928,
    "end": 929
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 942,
    "end": 943
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 943,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 947,
    "end": 948
  },
  {
    "type": "PrivateIdentifier",
    "value": "method2",
    "start": 948,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 956,
    "end": 957
  },
  {
    "type": "Template",
    "value": "`test${",
    "start": 957,
    "end": 964
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 964,
    "end": 965
  },
  {
    "type": "Template",
    "value": "}and${",
    "start": 965,
    "end": 971
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 971,
    "end": 972
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 972,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 974,
    "end": 975
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 984,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 988,
    "end": 989
  },
  {
    "type": "PrivateIdentifier",
    "value": "method2",
    "start": 989,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 997,
    "end": 998
  },
  {
    "type": "Template",
    "value": "`test${",
    "start": 998,
    "end": 1005
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Template",
    "value": "}and${",
    "start": 1006,
    "end": 1012
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1013,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1026,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "PrivateIdentifier",
    "value": "method2",
    "start": 1031,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1040,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1043,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Template",
    "value": "`test${",
    "start": 1047,
    "end": 1054
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Template",
    "value": "}and${",
    "start": 1055,
    "end": 1061
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1062,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1075,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "PrivateIdentifier",
    "value": "method2",
    "start": 1080,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 1089,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 1099,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Template",
    "value": "`test${",
    "start": 1108,
    "end": 1115
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Template",
    "value": "}and${",
    "start": 1116,
    "end": 1122
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1123,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1139,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 1144,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 1166,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1182,
    "end": 1188
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1189,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 1193,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1201,
    "end": 1202
  }
]
```

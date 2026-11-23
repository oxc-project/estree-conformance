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
              "start": 22,
              "end": 29
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
                          "start": 34,
                          "end": 38
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 39,
                          "end": 40
                        },
                        "optional": false,
                        "computed": false,
                        "start": 34,
                        "end": 40
                      },
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 43,
                        "end": 45
                      },
                      "start": 34,
                      "end": 45
                    },
                    "directive": null,
                    "start": 34,
                    "end": 46
                  }
                ],
                "start": 32,
                "end": 48
              },
              "expression": false,
              "start": 29,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 15,
            "end": 48
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "method2",
              "start": 61,
              "end": 69
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
                  "start": 70,
                  "end": 71
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
                    "start": 76,
                    "end": 77
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 73,
                  "end": 77
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 79,
                "end": 81
              },
              "expression": false,
              "start": 69,
              "end": 81
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 54,
            "end": 81
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
              "start": 94,
              "end": 95
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 98,
              "end": 99
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 87,
            "end": 100
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
              "start": 105,
              "end": 109
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 122,
                          "end": 124
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 125,
                          "end": 132
                        },
                        "optional": false,
                        "computed": false,
                        "start": 122,
                        "end": 132
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 122,
                      "end": 134
                    },
                    "directive": null,
                    "start": 122,
                    "end": 135
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
                          "start": 150,
                          "end": 154
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AA",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 157,
                            "end": 159
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "method",
                            "start": 160,
                            "end": 167
                          },
                          "optional": false,
                          "computed": false,
                          "start": 157,
                          "end": 167
                        },
                        "definite": false,
                        "start": 150,
                        "end": 167
                      }
                    ],
                    "declare": false,
                    "start": 144,
                    "end": 168
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
                        "start": 177,
                        "end": 181
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 177,
                      "end": 183
                    },
                    "directive": null,
                    "start": 177,
                    "end": 184
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 197,
                          "end": 199
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 200,
                          "end": 207
                        },
                        "optional": false,
                        "computed": false,
                        "start": 197,
                        "end": 207
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 193,
                      "end": 209
                    },
                    "directive": null,
                    "start": 193,
                    "end": 210
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
                          "start": 226,
                          "end": 229
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 234,
                              "end": 235
                            },
                            {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 237,
                              "end": 238
                            }
                          ],
                          "start": 232,
                          "end": 240
                        },
                        "definite": false,
                        "start": 226,
                        "end": 240
                      }
                    ],
                    "declare": false,
                    "start": 220,
                    "end": 241
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 250,
                          "end": 252
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method2",
                          "start": 253,
                          "end": 261
                        },
                        "optional": false,
                        "computed": false,
                        "start": 250,
                        "end": 261
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 262,
                          "end": 263
                        },
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 268,
                            "end": 271
                          },
                          "start": 265,
                          "end": 271
                        },
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 273,
                          "end": 274
                        }
                      ],
                      "optional": false,
                      "start": 250,
                      "end": 275
                    },
                    "directive": null,
                    "start": 250,
                    "end": 276
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
                          "start": 292,
                          "end": 293
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 300,
                              "end": 302
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "method2",
                              "start": 303,
                              "end": 311
                            },
                            "optional": false,
                            "computed": false,
                            "start": 300,
                            "end": 311
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 312,
                              "end": 313
                            },
                            {
                              "type": "SpreadElement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 318,
                                "end": 321
                              },
                              "start": 315,
                              "end": 321
                            },
                            {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3",
                              "start": 323,
                              "end": 324
                            }
                          ],
                          "start": 296,
                          "end": 325
                        },
                        "definite": false,
                        "start": 292,
                        "end": 325
                      }
                    ],
                    "declare": false,
                    "start": 286,
                    "end": 326
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
                          "start": 350,
                          "end": 353
                        },
                        "init": {
                          "type": "TaggedTemplateExpression",
                          "tag": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 356,
                              "end": 358
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "method2",
                              "start": 359,
                              "end": 367
                            },
                            "optional": false,
                            "computed": false,
                            "start": 356,
                            "end": 367
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
                                "start": 367,
                                "end": 374
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "middle",
                                  "cooked": "middle"
                                },
                                "tail": false,
                                "start": 375,
                                "end": 384
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "tail",
                                  "cooked": "tail"
                                },
                                "tail": true,
                                "start": 385,
                                "end": 391
                              }
                            ],
                            "expressions": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 374,
                                "end": 375
                              },
                              {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 384,
                                "end": 385
                              }
                            ],
                            "start": 367,
                            "end": 391
                          },
                          "start": 356,
                          "end": 391
                        },
                        "definite": false,
                        "start": 350,
                        "end": 391
                      }
                    ],
                    "declare": false,
                    "start": 344,
                    "end": 392
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 401,
                              "end": 403
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 404,
                              "end": 412
                            },
                            "optional": false,
                            "computed": false,
                            "start": 401,
                            "end": 412
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 401,
                          "end": 414
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method2",
                          "start": 415,
                          "end": 423
                        },
                        "optional": false,
                        "computed": false,
                        "start": 401,
                        "end": 423
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
                            "start": 423,
                            "end": 430
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "and",
                              "cooked": "and"
                            },
                            "tail": false,
                            "start": 431,
                            "end": 437
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 438,
                            "end": 440
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 430,
                            "end": 431
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 437,
                            "end": 438
                          }
                        ],
                        "start": 423,
                        "end": 440
                      },
                      "start": 401,
                      "end": 440
                    },
                    "directive": null,
                    "start": 401,
                    "end": 441
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 451,
                              "end": 453
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 454,
                              "end": 462
                            },
                            "optional": false,
                            "computed": false,
                            "start": 451,
                            "end": 462
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 451,
                          "end": 464
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method2",
                          "start": 465,
                          "end": 473
                        },
                        "optional": false,
                        "computed": false,
                        "start": 451,
                        "end": 473
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 474,
                          "end": 475
                        },
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 480,
                            "end": 483
                          },
                          "start": 477,
                          "end": 483
                        },
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 485,
                          "end": 486
                        }
                      ],
                      "optional": false,
                      "start": 451,
                      "end": 487
                    },
                    "directive": null,
                    "start": 451,
                    "end": 488
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
                          "start": 504,
                          "end": 506
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AA",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 514,
                                  "end": 516
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 517,
                                  "end": 525
                                },
                                "optional": false,
                                "computed": false,
                                "start": 514,
                                "end": 525
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 514,
                              "end": 527
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "method2",
                              "start": 528,
                              "end": 536
                            },
                            "optional": false,
                            "computed": false,
                            "start": 514,
                            "end": 536
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 538,
                              "end": 539
                            },
                            {
                              "type": "SpreadElement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 544,
                                "end": 547
                              },
                              "start": 541,
                              "end": 547
                            },
                            {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3",
                              "start": 549,
                              "end": 550
                            }
                          ],
                          "start": 509,
                          "end": 551
                        },
                        "definite": false,
                        "start": 504,
                        "end": 551
                      }
                    ],
                    "declare": false,
                    "start": 498,
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
                          "name": "str2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 576,
                          "end": 580
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AA",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 583,
                                  "end": 585
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 586,
                                  "end": 594
                                },
                                "optional": false,
                                "computed": false,
                                "start": 583,
                                "end": 594
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 583,
                              "end": 596
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "method2",
                              "start": 597,
                              "end": 605
                            },
                            "optional": false,
                            "computed": false,
                            "start": 583,
                            "end": 605
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
                                "start": 605,
                                "end": 612
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "middle",
                                  "cooked": "middle"
                                },
                                "tail": false,
                                "start": 613,
                                "end": 622
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "tail",
                                  "cooked": "tail"
                                },
                                "tail": true,
                                "start": 623,
                                "end": 629
                              }
                            ],
                            "expressions": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 612,
                                "end": 613
                              },
                              {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 622,
                                "end": 623
                              }
                            ],
                            "start": 605,
                            "end": 629
                          },
                          "start": 583,
                          "end": 629
                        },
                        "definite": false,
                        "start": 576,
                        "end": 629
                      }
                    ],
                    "declare": false,
                    "start": 570,
                    "end": 630
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 641,
                          "end": 643
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 644,
                          "end": 651
                        },
                        "optional": false,
                        "computed": false,
                        "start": 641,
                        "end": 651
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 640,
                      "end": 654
                    },
                    "directive": null,
                    "start": 640,
                    "end": 655
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AA",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 664,
                            "end": 666
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "method",
                            "start": 667,
                            "end": 674
                          },
                          "optional": false,
                          "computed": false,
                          "start": 664,
                          "end": 674
                        },
                        "start": 664,
                        "end": 675
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 664,
                      "end": 677
                    },
                    "directive": null,
                    "start": 664,
                    "end": 678
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AA",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 688,
                            "end": 690
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "method",
                            "start": 691,
                            "end": 698
                          },
                          "optional": false,
                          "computed": false,
                          "start": 688,
                          "end": 698
                        },
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 708,
                              "end": 712
                            },
                            "start": 705,
                            "end": 712
                          },
                          "start": 702,
                          "end": 712
                        },
                        "start": 688,
                        "end": 712
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 687,
                      "end": 715
                    },
                    "directive": null,
                    "start": 687,
                    "end": 716
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AA",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 726,
                            "end": 728
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "method",
                            "start": 729,
                            "end": 736
                          },
                          "optional": false,
                          "computed": false,
                          "start": 726,
                          "end": 736
                        },
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 753,
                              "end": 757
                            },
                            "start": 750,
                            "end": 757
                          },
                          "start": 747,
                          "end": 757
                        },
                        "start": 726,
                        "end": 757
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 725,
                      "end": 760
                    },
                    "directive": null,
                    "start": 725,
                    "end": 761
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AA",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 771,
                            "end": 773
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "method",
                            "start": 774,
                            "end": 781
                          },
                          "optional": false,
                          "computed": false,
                          "start": 771,
                          "end": 781
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": true,
                        "start": 770,
                        "end": 786
                      },
                      "start": 770,
                      "end": 786
                    },
                    "directive": null,
                    "start": 770,
                    "end": 787
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 796,
                              "end": 798
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "method",
                              "start": 799,
                              "end": 806
                            },
                            "optional": false,
                            "computed": false,
                            "start": 796,
                            "end": 806
                          },
                          "start": 796,
                          "end": 807
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": true,
                        "start": 796,
                        "end": 811
                      },
                      "start": 796,
                      "end": 811
                    },
                    "directive": null,
                    "start": 796,
                    "end": 812
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 822,
                              "end": 824
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 825,
                              "end": 833
                            },
                            "optional": false,
                            "computed": false,
                            "start": 822,
                            "end": 833
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 822,
                          "end": 835
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method2",
                          "start": 836,
                          "end": 844
                        },
                        "optional": false,
                        "computed": false,
                        "start": 822,
                        "end": 844
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 846,
                          "end": 847
                        },
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 852,
                            "end": 855
                          },
                          "start": 849,
                          "end": 855
                        },
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 857,
                          "end": 858
                        }
                      ],
                      "optional": false,
                      "start": 821,
                      "end": 859
                    },
                    "directive": null,
                    "start": 821,
                    "end": 860
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "TaggedTemplateExpression",
                      "tag": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 870,
                          "end": 872
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method2",
                          "start": 873,
                          "end": 881
                        },
                        "optional": false,
                        "computed": false,
                        "start": 870,
                        "end": 881
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
                            "start": 882,
                            "end": 889
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "and",
                              "cooked": "and"
                            },
                            "tail": false,
                            "start": 890,
                            "end": 896
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 897,
                            "end": 899
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 889,
                            "end": 890
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 896,
                            "end": 897
                          }
                        ],
                        "start": 882,
                        "end": 899
                      },
                      "start": 869,
                      "end": 899
                    },
                    "directive": null,
                    "start": 869,
                    "end": 900
                  }
                ],
                "start": 112,
                "end": 906
              },
              "expression": false,
              "start": 109,
              "end": 906
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 105,
            "end": 906
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 918,
              "end": 926
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 938,
                      "end": 940
                    },
                    "start": 931,
                    "end": 941
                  }
                ],
                "start": 929,
                "end": 943
              },
              "expression": false,
              "start": 926,
              "end": 943
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 911,
            "end": 943
          }
        ],
        "start": 9,
        "end": 945
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 945
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 945
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
    "type": "Keyword",
    "value": "static",
    "start": 15,
    "end": 21
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 22,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 34,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 43,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 54,
    "end": 60
  },
  {
    "type": "PrivateIdentifier",
    "value": "method2",
    "start": 61,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 73,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
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
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 87,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 96,
    "end": 97
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 105,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 122,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 124,
    "end": 125
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 125,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 144,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 150,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 157,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 159,
    "end": 160
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 160,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 177,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 193,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 197,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 199,
    "end": 200
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 200,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 220,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 226,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 232,
    "end": 233
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 235,
    "end": 236
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "AA",
    "start": 250,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 252,
    "end": 253
  },
  {
    "type": "PrivateIdentifier",
    "value": "method2",
    "start": 253,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 261,
    "end": 262
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 265,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 268,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 271,
    "end": 272
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 286,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 296,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 300,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 302,
    "end": 303
  },
  {
    "type": "PrivateIdentifier",
    "value": "method2",
    "start": 303,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 311,
    "end": 312
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 315,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 318,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 321,
    "end": 322
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 344,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 350,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 356,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 358,
    "end": 359
  },
  {
    "type": "PrivateIdentifier",
    "value": "method2",
    "start": 359,
    "end": 367
  },
  {
    "type": "Template",
    "value": "`head${",
    "start": 367,
    "end": 374
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 374,
    "end": 375
  },
  {
    "type": "Template",
    "value": "}middle${",
    "start": 375,
    "end": 384
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 384,
    "end": 385
  },
  {
    "type": "Template",
    "value": "}tail`",
    "start": 385,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 401,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 404,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 414,
    "end": 415
  },
  {
    "type": "PrivateIdentifier",
    "value": "method2",
    "start": 415,
    "end": 423
  },
  {
    "type": "Template",
    "value": "`test${",
    "start": 423,
    "end": 430
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 430,
    "end": 431
  },
  {
    "type": "Template",
    "value": "}and${",
    "start": 431,
    "end": 437
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 437,
    "end": 438
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 438,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 451,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 454,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 464,
    "end": 465
  },
  {
    "type": "PrivateIdentifier",
    "value": "method2",
    "start": 465,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 477,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 480,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 483,
    "end": 484
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 487,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 498,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 504,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 507,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 509,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 514,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 517,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 527,
    "end": 528
  },
  {
    "type": "PrivateIdentifier",
    "value": "method2",
    "start": 528,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 537,
    "end": 538
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 541,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 544,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 547,
    "end": 548
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 550,
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
    "start": 570,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "str2",
    "start": 576,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 583,
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
    "value": "getClass",
    "start": 586,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 596,
    "end": 597
  },
  {
    "type": "PrivateIdentifier",
    "value": "method2",
    "start": 597,
    "end": 605
  },
  {
    "type": "Template",
    "value": "`head${",
    "start": 605,
    "end": 612
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 612,
    "end": 613
  },
  {
    "type": "Template",
    "value": "}middle${",
    "start": 613,
    "end": 622
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 622,
    "end": 623
  },
  {
    "type": "Template",
    "value": "}tail`",
    "start": 623,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 641,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 643,
    "end": 644
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 644,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 664,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 666,
    "end": 667
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 667,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 688,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 690,
    "end": 691
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 691,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 699,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 705,
    "end": 707
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 708,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 726,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 728,
    "end": 729
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 729,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 737,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 750,
    "end": 752
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 753,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 771,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 773,
    "end": 774
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 774,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 782,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 796,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 798,
    "end": 799
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 799,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 807,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 822,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 825,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 835,
    "end": 836
  },
  {
    "type": "PrivateIdentifier",
    "value": "method2",
    "start": 836,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 845,
    "end": 846
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 849,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 852,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 855,
    "end": 856
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 870,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 872,
    "end": 873
  },
  {
    "type": "PrivateIdentifier",
    "value": "method2",
    "start": 873,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 881,
    "end": 882
  },
  {
    "type": "Template",
    "value": "`test${",
    "start": 882,
    "end": 889
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 889,
    "end": 890
  },
  {
    "type": "Template",
    "value": "}and${",
    "start": 890,
    "end": 896
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 896,
    "end": 897
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 897,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 905,
    "end": 906
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 911,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 918,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 929,
    "end": 930
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 931,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 938,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 944,
    "end": 945
  }
]
```

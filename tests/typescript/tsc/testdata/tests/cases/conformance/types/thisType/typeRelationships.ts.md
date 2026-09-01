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
        "start": 6,
        "end": 7
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
              "name": "self",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 18
            },
            "typeAnnotation": null,
            "value": {
              "type": "ThisExpression",
              "start": 21,
              "end": 25
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 26
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 32
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 40
              },
              "typeArguments": null,
              "arguments": [],
              "start": 35,
              "end": 42
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 31,
            "end": 43
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
              "start": 48,
              "end": 51
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
                      "type": "ThisExpression",
                      "start": 71,
                      "end": 75
                    },
                    "start": 64,
                    "end": 76
                  }
                ],
                "start": 54,
                "end": 82
              },
              "expression": false,
              "start": 51,
              "end": 82
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 48,
            "end": 82
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 89
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
                          "start": 102,
                          "end": 106
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 107,
                          "end": 108
                        },
                        "optional": false,
                        "computed": false,
                        "start": 102,
                        "end": 108
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 111,
                          "end": 115
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 116,
                          "end": 120
                        },
                        "optional": false,
                        "computed": false,
                        "start": 111,
                        "end": 120
                      },
                      "start": 102,
                      "end": 120
                    },
                    "directive": null,
                    "start": 102,
                    "end": 121
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 130,
                          "end": 134
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 135,
                          "end": 139
                        },
                        "optional": false,
                        "computed": false,
                        "start": 130,
                        "end": 139
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 142,
                          "end": 146
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 147,
                          "end": 148
                        },
                        "optional": false,
                        "computed": false,
                        "start": 142,
                        "end": 148
                      },
                      "start": 130,
                      "end": 148
                    },
                    "directive": null,
                    "start": 130,
                    "end": 149
                  }
                ],
                "start": 92,
                "end": 165
              },
              "expression": false,
              "start": 89,
              "end": 165
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 87,
            "end": 165
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 170,
              "end": 172
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
                    "kind": "var",
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
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "C",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 192,
                                  "end": 193
                                },
                                "typeArguments": null,
                                "start": 192,
                                "end": 193
                              },
                              "start": 192,
                              "end": 195
                            },
                            "start": 190,
                            "end": 195
                          },
                          "start": 189,
                          "end": 195
                        },
                        "init": null,
                        "definite": false,
                        "start": 189,
                        "end": 195
                      }
                    ],
                    "declare": false,
                    "start": 185,
                    "end": 196
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 209,
                          "end": 210
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "ThisExpression",
                              "start": 214,
                              "end": 218
                            },
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 220,
                                "end": 224
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 225,
                                "end": 226
                              },
                              "optional": false,
                              "computed": false,
                              "start": 220,
                              "end": 226
                            }
                          ],
                          "start": 213,
                          "end": 227
                        },
                        "definite": false,
                        "start": 209,
                        "end": 227
                      }
                    ],
                    "declare": false,
                    "start": 205,
                    "end": 228
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSThisType",
                                "start": 279,
                                "end": 283
                              },
                              "start": 279,
                              "end": 285
                            },
                            "start": 277,
                            "end": 285
                          },
                          "start": 276,
                          "end": 285
                        },
                        "init": null,
                        "definite": false,
                        "start": 276,
                        "end": 285
                      }
                    ],
                    "declare": false,
                    "start": 272,
                    "end": 286
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 299,
                          "end": 300
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "ThisExpression",
                              "start": 304,
                              "end": 308
                            },
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 310,
                                "end": 314
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "self",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 315,
                                "end": 319
                              },
                              "optional": false,
                              "computed": false,
                              "start": 310,
                              "end": 319
                            },
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 321,
                              "end": 325
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 327,
                              "end": 336
                            }
                          ],
                          "start": 303,
                          "end": 337
                        },
                        "definite": false,
                        "start": 299,
                        "end": 337
                      }
                    ],
                    "declare": false,
                    "start": 295,
                    "end": 338
                  }
                ],
                "start": 175,
                "end": 344
              },
              "expression": false,
              "start": 172,
              "end": 344
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 170,
            "end": 344
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 351
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 355,
                      "end": 362
                    },
                    "start": 353,
                    "end": 362
                  },
                  "start": 352,
                  "end": 362
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 381,
                        "end": 382
                      },
                      "consequent": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 385,
                          "end": 389
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 390,
                          "end": 391
                        },
                        "optional": false,
                        "computed": false,
                        "start": 385,
                        "end": 391
                      },
                      "alternate": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 394,
                          "end": 398
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 399,
                          "end": 403
                        },
                        "optional": false,
                        "computed": false,
                        "start": 394,
                        "end": 403
                      },
                      "start": 381,
                      "end": 403
                    },
                    "start": 374,
                    "end": 404
                  }
                ],
                "start": 364,
                "end": 426
              },
              "expression": false,
              "start": 351,
              "end": 426
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 349,
            "end": 426
          }
        ],
        "start": 8,
        "end": 428
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 428
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 436,
        "end": 437
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 446,
        "end": 447
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
              "name": "self1",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 459
            },
            "typeAnnotation": null,
            "value": {
              "type": "ThisExpression",
              "start": 462,
              "end": 466
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 454,
            "end": 467
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "self2",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 477
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 480,
                "end": 484
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "self",
                "optional": false,
                "typeAnnotation": null,
                "start": 485,
                "end": 489
              },
              "optional": false,
              "computed": false,
              "start": 480,
              "end": 489
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 472,
            "end": 490
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "self3",
              "optional": false,
              "typeAnnotation": null,
              "start": 495,
              "end": 500
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 503,
                  "end": 507
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 508,
                  "end": 511
                },
                "optional": false,
                "computed": false,
                "start": 503,
                "end": 511
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 503,
              "end": 513
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 495,
            "end": 514
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 520
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 527,
                "end": 528
              },
              "typeArguments": null,
              "arguments": [],
              "start": 523,
              "end": 530
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 519,
            "end": 531
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
              "start": 536,
              "end": 539
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
                          "start": 552,
                          "end": 556
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 557,
                          "end": 561
                        },
                        "optional": false,
                        "computed": false,
                        "start": 552,
                        "end": 561
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 564,
                          "end": 568
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 569,
                          "end": 574
                        },
                        "optional": false,
                        "computed": false,
                        "start": 564,
                        "end": 574
                      },
                      "start": 552,
                      "end": 574
                    },
                    "directive": null,
                    "start": 552,
                    "end": 575
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 584,
                          "end": 588
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 589,
                          "end": 593
                        },
                        "optional": false,
                        "computed": false,
                        "start": 584,
                        "end": 593
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 596,
                          "end": 600
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 601,
                          "end": 606
                        },
                        "optional": false,
                        "computed": false,
                        "start": 596,
                        "end": 606
                      },
                      "start": 584,
                      "end": 606
                    },
                    "directive": null,
                    "start": 584,
                    "end": 607
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 616,
                          "end": 620
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 621,
                          "end": 625
                        },
                        "optional": false,
                        "computed": false,
                        "start": 616,
                        "end": 625
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 628,
                          "end": 632
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 633,
                          "end": 638
                        },
                        "optional": false,
                        "computed": false,
                        "start": 628,
                        "end": 638
                      },
                      "start": 616,
                      "end": 638
                    },
                    "directive": null,
                    "start": 616,
                    "end": 639
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 648,
                          "end": 652
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 653,
                          "end": 658
                        },
                        "optional": false,
                        "computed": false,
                        "start": 648,
                        "end": 658
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 661,
                          "end": 665
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 666,
                          "end": 670
                        },
                        "optional": false,
                        "computed": false,
                        "start": 661,
                        "end": 670
                      },
                      "start": 648,
                      "end": 670
                    },
                    "directive": null,
                    "start": 648,
                    "end": 671
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 680,
                          "end": 684
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 685,
                          "end": 690
                        },
                        "optional": false,
                        "computed": false,
                        "start": 680,
                        "end": 690
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 693,
                          "end": 697
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 698,
                          "end": 702
                        },
                        "optional": false,
                        "computed": false,
                        "start": 693,
                        "end": 702
                      },
                      "start": 680,
                      "end": 702
                    },
                    "directive": null,
                    "start": 680,
                    "end": 703
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 712,
                          "end": 716
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 717,
                          "end": 722
                        },
                        "optional": false,
                        "computed": false,
                        "start": 712,
                        "end": 722
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 725,
                          "end": 729
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 730,
                          "end": 734
                        },
                        "optional": false,
                        "computed": false,
                        "start": 725,
                        "end": 734
                      },
                      "start": 712,
                      "end": 734
                    },
                    "directive": null,
                    "start": 712,
                    "end": 735
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 744,
                          "end": 748
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 749,
                          "end": 750
                        },
                        "optional": false,
                        "computed": false,
                        "start": 744,
                        "end": 750
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 753,
                          "end": 757
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 758,
                          "end": 762
                        },
                        "optional": false,
                        "computed": false,
                        "start": 753,
                        "end": 762
                      },
                      "start": 744,
                      "end": 762
                    },
                    "directive": null,
                    "start": 744,
                    "end": 763
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 772,
                          "end": 776
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 777,
                          "end": 778
                        },
                        "optional": false,
                        "computed": false,
                        "start": 772,
                        "end": 778
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 781,
                          "end": 785
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 786,
                          "end": 787
                        },
                        "optional": false,
                        "computed": false,
                        "start": 781,
                        "end": 787
                      },
                      "start": 772,
                      "end": 787
                    },
                    "directive": null,
                    "start": 772,
                    "end": 788
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 807,
                          "end": 811
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 812,
                          "end": 816
                        },
                        "optional": false,
                        "computed": false,
                        "start": 807,
                        "end": 816
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 819,
                          "end": 823
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 824,
                          "end": 825
                        },
                        "optional": false,
                        "computed": false,
                        "start": 819,
                        "end": 825
                      },
                      "start": 807,
                      "end": 825
                    },
                    "directive": null,
                    "start": 807,
                    "end": 826
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 845,
                          "end": 849
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 850,
                          "end": 851
                        },
                        "optional": false,
                        "computed": false,
                        "start": 845,
                        "end": 851
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 854,
                          "end": 858
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 859,
                          "end": 860
                        },
                        "optional": false,
                        "computed": false,
                        "start": 854,
                        "end": 860
                      },
                      "start": 845,
                      "end": 860
                    },
                    "directive": null,
                    "start": 845,
                    "end": 861
                  }
                ],
                "start": 542,
                "end": 867
              },
              "expression": false,
              "start": 539,
              "end": 867
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 536,
            "end": 867
          }
        ],
        "start": 448,
        "end": 869
      },
      "abstract": false,
      "declare": false,
      "start": 430,
      "end": 869
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 869
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
    "value": "C",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 14,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 21,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 35,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 48,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "return",
    "start": 64,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 71,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 87,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 102,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 111,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 116,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 130,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 135,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 142,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 170,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
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
    "value": "{",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 185,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 205,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 214,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 220,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 272,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 279,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 295,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 304,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 310,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 315,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 319,
    "end": 320
  },
  {
    "type": "Null",
    "value": "null",
    "start": 321,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 327,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 349,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 355,
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
    "value": "return",
    "start": 374,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 385,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 394,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 399,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 430,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 438,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "self1",
    "start": 454,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 462,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "self2",
    "start": 472,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 478,
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
    "value": "self",
    "start": 485,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "self3",
    "start": 495,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 501,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 503,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 508,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 523,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 536,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 542,
    "end": 543
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 552,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 557,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 562,
    "end": 563
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
    "value": "self1",
    "start": 569,
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
    "value": "this",
    "start": 584,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 589,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 594,
    "end": 595
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 596,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "self2",
    "start": 601,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 606,
    "end": 607
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 616,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 621,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 626,
    "end": 627
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 628,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "self3",
    "start": 633,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 648,
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
    "value": "self1",
    "start": 653,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 659,
    "end": 660
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 661,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 666,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 670,
    "end": 671
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 680,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "self2",
    "start": 685,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 691,
    "end": 692
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 693,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 698,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 702,
    "end": 703
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 712,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "self3",
    "start": 717,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 723,
    "end": 724
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 725,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 730,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 734,
    "end": 735
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 744,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 751,
    "end": 752
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 753,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 758,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 772,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 779,
    "end": 780
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 781,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
    "end": 788
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 807,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 812,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 817,
    "end": 818
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 819,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
    "end": 826
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 845,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "Keyword",
    "value": "this",
    "start": 854,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 868,
    "end": 869
  }
]
```

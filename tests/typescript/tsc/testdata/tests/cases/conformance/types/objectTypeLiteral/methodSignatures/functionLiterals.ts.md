__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 133,
                      "end": 138
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 142,
                            "end": 148
                          },
                          "start": 140,
                          "end": 148
                        },
                        "start": 139,
                        "end": 148
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 151,
                        "end": 157
                      },
                      "start": 149,
                      "end": 157
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 133,
                    "end": 158
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 191,
                      "end": 196
                    },
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
                                "type": "TSNumberKeyword",
                                "start": 202,
                                "end": 208
                              },
                              "start": 200,
                              "end": 208
                            },
                            "start": 199,
                            "end": 208
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 213,
                            "end": 219
                          },
                          "start": 210,
                          "end": 219
                        },
                        "start": 198,
                        "end": 219
                      },
                      "start": 196,
                      "end": 219
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 191,
                    "end": 220
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 254,
                      "end": 259
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
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
                                    "start": 267,
                                    "end": 273
                                  },
                                  "start": 265,
                                  "end": 273
                                },
                                "start": 264,
                                "end": 273
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 276,
                                "end": 282
                              },
                              "start": 274,
                              "end": 282
                            },
                            "start": 263,
                            "end": 282
                          }
                        ],
                        "start": 261,
                        "end": 284
                      },
                      "start": 259,
                      "end": 284
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 254,
                    "end": 285
                  }
                ],
                "start": 127,
                "end": 312
              },
              "start": 125,
              "end": 312
            },
            "start": 124,
            "end": 312
          },
          "init": null,
          "definite": false,
          "start": 124,
          "end": 312
        }
      ],
      "declare": false,
      "start": 120,
      "end": 312
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 327,
            "end": 328
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func1",
            "optional": false,
            "typeAnnotation": null,
            "start": 329,
            "end": 334
          },
          "optional": false,
          "computed": false,
          "start": 327,
          "end": 334
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 337,
            "end": 338
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func2",
            "optional": false,
            "typeAnnotation": null,
            "start": 339,
            "end": 344
          },
          "optional": false,
          "computed": false,
          "start": 337,
          "end": 344
        },
        "start": 327,
        "end": 344
      },
      "directive": null,
      "start": 327,
      "end": 345
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 346,
            "end": 347
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func1",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 353
          },
          "optional": false,
          "computed": false,
          "start": 346,
          "end": 353
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 356,
            "end": 357
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func3",
            "optional": false,
            "typeAnnotation": null,
            "start": 358,
            "end": 363
          },
          "optional": false,
          "computed": false,
          "start": 356,
          "end": 363
        },
        "start": 346,
        "end": 363
      },
      "directive": null,
      "start": 346,
      "end": 364
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 365,
            "end": 366
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func2",
            "optional": false,
            "typeAnnotation": null,
            "start": 367,
            "end": 372
          },
          "optional": false,
          "computed": false,
          "start": 365,
          "end": 372
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 375,
            "end": 376
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func1",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 382
          },
          "optional": false,
          "computed": false,
          "start": 375,
          "end": 382
        },
        "start": 365,
        "end": 382
      },
      "directive": null,
      "start": 365,
      "end": 383
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 384,
            "end": 385
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func2",
            "optional": false,
            "typeAnnotation": null,
            "start": 386,
            "end": 391
          },
          "optional": false,
          "computed": false,
          "start": 384,
          "end": 391
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 394,
            "end": 395
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func3",
            "optional": false,
            "typeAnnotation": null,
            "start": 396,
            "end": 401
          },
          "optional": false,
          "computed": false,
          "start": 394,
          "end": 401
        },
        "start": 384,
        "end": 401
      },
      "directive": null,
      "start": 384,
      "end": 402
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 404
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func3",
            "optional": false,
            "typeAnnotation": null,
            "start": 405,
            "end": 410
          },
          "optional": false,
          "computed": false,
          "start": 403,
          "end": 410
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 413,
            "end": 414
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func1",
            "optional": false,
            "typeAnnotation": null,
            "start": 415,
            "end": 420
          },
          "optional": false,
          "computed": false,
          "start": 413,
          "end": 420
        },
        "start": 403,
        "end": 420
      },
      "directive": null,
      "start": 403,
      "end": 421
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 423
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func3",
            "optional": false,
            "typeAnnotation": null,
            "start": 424,
            "end": 429
          },
          "optional": false,
          "computed": false,
          "start": 422,
          "end": 429
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 432,
            "end": 433
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func2",
            "optional": false,
            "typeAnnotation": null,
            "start": 434,
            "end": 439
          },
          "optional": false,
          "computed": false,
          "start": 432,
          "end": 439
        },
        "start": 422,
        "end": 439
      },
      "directive": null,
      "start": 422,
      "end": 440
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 455,
                      "end": 460
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 464,
                            "end": 470
                          },
                          "start": 462,
                          "end": 470
                        },
                        "start": 461,
                        "end": 470
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 473,
                        "end": 479
                      },
                      "start": 471,
                      "end": 479
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 455,
                    "end": 480
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 485,
                      "end": 490
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 494,
                            "end": 500
                          },
                          "start": 492,
                          "end": 500
                        },
                        "start": 491,
                        "end": 500
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 503,
                        "end": 509
                      },
                      "start": 501,
                      "end": 509
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 485,
                    "end": 510
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 515,
                      "end": 520
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
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
                                    "start": 536,
                                    "end": 542
                                  },
                                  "start": 534,
                                  "end": 542
                                },
                                "start": 533,
                                "end": 542
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 545,
                                "end": 551
                              },
                              "start": 543,
                              "end": 551
                            },
                            "start": 532,
                            "end": 552
                          },
                          {
                            "type": "TSCallSignatureDeclaration",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 565,
                                    "end": 571
                                  },
                                  "start": 563,
                                  "end": 571
                                },
                                "start": 562,
                                "end": 571
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 574,
                                "end": 580
                              },
                              "start": 572,
                              "end": 580
                            },
                            "start": 561,
                            "end": 581
                          }
                        ],
                        "start": 522,
                        "end": 587
                      },
                      "start": 520,
                      "end": 587
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 515,
                    "end": 588
                  }
                ],
                "start": 449,
                "end": 590
              },
              "start": 447,
              "end": 590
            },
            "start": 446,
            "end": 590
          },
          "init": null,
          "definite": false,
          "start": 446,
          "end": 590
        }
      ],
      "declare": false,
      "start": 442,
      "end": 591
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 606,
            "end": 607
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func4",
            "optional": false,
            "typeAnnotation": null,
            "start": 608,
            "end": 613
          },
          "optional": false,
          "computed": false,
          "start": 606,
          "end": 613
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 616,
            "end": 617
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func5",
            "optional": false,
            "typeAnnotation": null,
            "start": 618,
            "end": 623
          },
          "optional": false,
          "computed": false,
          "start": 616,
          "end": 623
        },
        "start": 606,
        "end": 623
      },
      "directive": null,
      "start": 606,
      "end": 624
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 625,
            "end": 626
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func5",
            "optional": false,
            "typeAnnotation": null,
            "start": 627,
            "end": 632
          },
          "optional": false,
          "computed": false,
          "start": 625,
          "end": 632
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 635,
            "end": 636
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func4",
            "optional": false,
            "typeAnnotation": null,
            "start": 637,
            "end": 642
          },
          "optional": false,
          "computed": false,
          "start": 635,
          "end": 642
        },
        "start": 625,
        "end": 642
      },
      "directive": null,
      "start": 625,
      "end": 643
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 679,
                      "end": 684
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 685,
                            "end": 686
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 685,
                          "end": 686
                        }
                      ],
                      "start": 684,
                      "end": 687
                    },
                    "params": [
                      {
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 691,
                              "end": 692
                            },
                            "typeArguments": null,
                            "start": 691,
                            "end": 692
                          },
                          "start": 689,
                          "end": 692
                        },
                        "start": 688,
                        "end": 692
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 695,
                        "end": 701
                      },
                      "start": 693,
                      "end": 701
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 679,
                    "end": 702
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 735,
                      "end": 740
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
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
                                "start": 743,
                                "end": 744
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 743,
                              "end": 744
                            }
                          ],
                          "start": 742,
                          "end": 745
                        },
                        "params": [
                          {
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
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 749,
                                  "end": 750
                                },
                                "typeArguments": null,
                                "start": 749,
                                "end": 750
                              },
                              "start": 747,
                              "end": 750
                            },
                            "start": 746,
                            "end": 750
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 755,
                            "end": 761
                          },
                          "start": 752,
                          "end": 761
                        },
                        "start": 742,
                        "end": 761
                      },
                      "start": 740,
                      "end": 761
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 735,
                    "end": 762
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 796,
                      "end": 801
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
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
                                    "start": 806,
                                    "end": 807
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 806,
                                  "end": 807
                                }
                              ],
                              "start": 805,
                              "end": 808
                            },
                            "params": [
                              {
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
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 812,
                                      "end": 813
                                    },
                                    "typeArguments": null,
                                    "start": 812,
                                    "end": 813
                                  },
                                  "start": 810,
                                  "end": 813
                                },
                                "start": 809,
                                "end": 813
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 816,
                                "end": 822
                              },
                              "start": 814,
                              "end": 822
                            },
                            "start": 805,
                            "end": 822
                          }
                        ],
                        "start": 803,
                        "end": 824
                      },
                      "start": 801,
                      "end": 824
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 796,
                    "end": 825
                  }
                ],
                "start": 673,
                "end": 852
              },
              "start": 671,
              "end": 852
            },
            "start": 669,
            "end": 852
          },
          "init": null,
          "definite": false,
          "start": 669,
          "end": 852
        }
      ],
      "declare": false,
      "start": 665,
      "end": 852
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 867,
            "end": 869
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func1",
            "optional": false,
            "typeAnnotation": null,
            "start": 870,
            "end": 875
          },
          "optional": false,
          "computed": false,
          "start": 867,
          "end": 875
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 878,
            "end": 880
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func2",
            "optional": false,
            "typeAnnotation": null,
            "start": 881,
            "end": 886
          },
          "optional": false,
          "computed": false,
          "start": 878,
          "end": 886
        },
        "start": 867,
        "end": 886
      },
      "directive": null,
      "start": 867,
      "end": 887
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 888,
            "end": 890
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func1",
            "optional": false,
            "typeAnnotation": null,
            "start": 891,
            "end": 896
          },
          "optional": false,
          "computed": false,
          "start": 888,
          "end": 896
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 899,
            "end": 901
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func3",
            "optional": false,
            "typeAnnotation": null,
            "start": 902,
            "end": 907
          },
          "optional": false,
          "computed": false,
          "start": 899,
          "end": 907
        },
        "start": 888,
        "end": 907
      },
      "directive": null,
      "start": 888,
      "end": 908
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 909,
            "end": 911
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func2",
            "optional": false,
            "typeAnnotation": null,
            "start": 912,
            "end": 917
          },
          "optional": false,
          "computed": false,
          "start": 909,
          "end": 917
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 920,
            "end": 922
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func1",
            "optional": false,
            "typeAnnotation": null,
            "start": 923,
            "end": 928
          },
          "optional": false,
          "computed": false,
          "start": 920,
          "end": 928
        },
        "start": 909,
        "end": 928
      },
      "directive": null,
      "start": 909,
      "end": 929
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 930,
            "end": 932
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func2",
            "optional": false,
            "typeAnnotation": null,
            "start": 933,
            "end": 938
          },
          "optional": false,
          "computed": false,
          "start": 930,
          "end": 938
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 941,
            "end": 943
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func3",
            "optional": false,
            "typeAnnotation": null,
            "start": 944,
            "end": 949
          },
          "optional": false,
          "computed": false,
          "start": 941,
          "end": 949
        },
        "start": 930,
        "end": 949
      },
      "directive": null,
      "start": 930,
      "end": 950
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 951,
            "end": 953
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func3",
            "optional": false,
            "typeAnnotation": null,
            "start": 954,
            "end": 959
          },
          "optional": false,
          "computed": false,
          "start": 951,
          "end": 959
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 962,
            "end": 964
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func1",
            "optional": false,
            "typeAnnotation": null,
            "start": 965,
            "end": 970
          },
          "optional": false,
          "computed": false,
          "start": 962,
          "end": 970
        },
        "start": 951,
        "end": 970
      },
      "directive": null,
      "start": 951,
      "end": 971
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 972,
            "end": 974
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func3",
            "optional": false,
            "typeAnnotation": null,
            "start": 975,
            "end": 980
          },
          "optional": false,
          "computed": false,
          "start": 972,
          "end": 980
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 983,
            "end": 985
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func2",
            "optional": false,
            "typeAnnotation": null,
            "start": 986,
            "end": 991
          },
          "optional": false,
          "computed": false,
          "start": 983,
          "end": 991
        },
        "start": 972,
        "end": 991
      },
      "directive": null,
      "start": 972,
      "end": 992
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1008,
                      "end": 1013
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 1014,
                            "end": 1015
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1014,
                          "end": 1015
                        }
                      ],
                      "start": 1013,
                      "end": 1016
                    },
                    "params": [
                      {
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1020,
                              "end": 1021
                            },
                            "typeArguments": null,
                            "start": 1020,
                            "end": 1021
                          },
                          "start": 1018,
                          "end": 1021
                        },
                        "start": 1017,
                        "end": 1021
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1024,
                        "end": 1030
                      },
                      "start": 1022,
                      "end": 1030
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1008,
                    "end": 1031
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1036,
                      "end": 1041
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 1042,
                            "end": 1043
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1042,
                          "end": 1043
                        }
                      ],
                      "start": 1041,
                      "end": 1044
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
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
                              "start": 1048,
                              "end": 1049
                            },
                            "typeArguments": null,
                            "start": 1048,
                            "end": 1049
                          },
                          "start": 1046,
                          "end": 1049
                        },
                        "start": 1045,
                        "end": 1049
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1052,
                        "end": 1058
                      },
                      "start": 1050,
                      "end": 1058
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1036,
                    "end": 1059
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1064,
                      "end": 1069
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
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
                                    "start": 1082,
                                    "end": 1083
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1082,
                                  "end": 1083
                                }
                              ],
                              "start": 1081,
                              "end": 1084
                            },
                            "params": [
                              {
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
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1088,
                                      "end": 1089
                                    },
                                    "typeArguments": null,
                                    "start": 1088,
                                    "end": 1089
                                  },
                                  "start": 1086,
                                  "end": 1089
                                },
                                "start": 1085,
                                "end": 1089
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1092,
                                "end": 1098
                              },
                              "start": 1090,
                              "end": 1098
                            },
                            "start": 1081,
                            "end": 1099
                          },
                          {
                            "type": "TSCallSignatureDeclaration",
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
                                    "start": 1109,
                                    "end": 1110
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1109,
                                  "end": 1110
                                }
                              ],
                              "start": 1108,
                              "end": 1111
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
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
                                      "start": 1115,
                                      "end": 1116
                                    },
                                    "typeArguments": null,
                                    "start": 1115,
                                    "end": 1116
                                  },
                                  "start": 1113,
                                  "end": 1116
                                },
                                "start": 1112,
                                "end": 1116
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1119,
                                "end": 1125
                              },
                              "start": 1117,
                              "end": 1125
                            },
                            "start": 1108,
                            "end": 1126
                          }
                        ],
                        "start": 1071,
                        "end": 1132
                      },
                      "start": 1069,
                      "end": 1132
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1064,
                    "end": 1133
                  }
                ],
                "start": 1002,
                "end": 1135
              },
              "start": 1000,
              "end": 1135
            },
            "start": 998,
            "end": 1135
          },
          "init": null,
          "definite": false,
          "start": 998,
          "end": 1135
        }
      ],
      "declare": false,
      "start": 994,
      "end": 1136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1151,
            "end": 1153
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1154,
            "end": 1159
          },
          "optional": false,
          "computed": false,
          "start": 1151,
          "end": 1159
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1162,
            "end": 1164
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1165,
            "end": 1170
          },
          "optional": false,
          "computed": false,
          "start": 1162,
          "end": 1170
        },
        "start": 1151,
        "end": 1170
      },
      "directive": null,
      "start": 1151,
      "end": 1171
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1172,
            "end": 1174
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1175,
            "end": 1180
          },
          "optional": false,
          "computed": false,
          "start": 1172,
          "end": 1180
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1183,
            "end": 1185
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1186,
            "end": 1191
          },
          "optional": false,
          "computed": false,
          "start": 1183,
          "end": 1191
        },
        "start": 1172,
        "end": 1191
      },
      "directive": null,
      "start": 1172,
      "end": 1192
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 120,
  "end": 1192
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 120,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "func1",
    "start": 133,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 142,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 151,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "func2",
    "start": 191,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 202,
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
    "value": "=>",
    "start": 210,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "func3",
    "start": 254,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 267,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 276,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "func1",
    "start": 329,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "func2",
    "start": 339,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "func1",
    "start": 348,
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
    "value": "b",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "func3",
    "start": 358,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "func2",
    "start": 367,
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
    "value": "b",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "func1",
    "start": 377,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "func2",
    "start": 386,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "func3",
    "start": 396,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "func3",
    "start": 405,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Identifier",
    "value": "func1",
    "start": 415,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "func3",
    "start": 424,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "func2",
    "start": 434,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 439,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 442,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "func4",
    "start": 455,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 464,
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
    "value": ":",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 473,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "func4",
    "start": 485,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 494,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 503,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "func5",
    "start": 515,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 536,
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
    "value": ":",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 545,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 565,
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
    "value": ":",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 574,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "Identifier",
    "value": "func4",
    "start": 608,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "func5",
    "start": 618,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "value": "func5",
    "start": 627,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "func4",
    "start": 637,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 642,
    "end": 643
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 665,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 669,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "func1",
    "start": 679,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 695,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "func2",
    "start": 735,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 752,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 755,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "func3",
    "start": 796,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 816,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "}",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 867,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "func1",
    "start": 870,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 878,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "func2",
    "start": 881,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 888,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "func1",
    "start": 891,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 899,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "func3",
    "start": 902,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 909,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "func2",
    "start": 912,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 920,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "func1",
    "start": 923,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 930,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "func2",
    "start": 933,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 941,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "func3",
    "start": 944,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 951,
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
    "value": "func3",
    "start": 954,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 962,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "func1",
    "start": 965,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 972,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "func3",
    "start": 975,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 983,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "func2",
    "start": 986,
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
    "value": "var",
    "start": 994,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 998,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "func4",
    "start": 1008,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1024,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "func4",
    "start": 1036,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1052,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "func5",
    "start": 1064,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1083,
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
    "value": ":",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1092,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1119,
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
    "value": "}",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1151,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "func4",
    "start": 1154,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1162,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "func5",
    "start": 1165,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1172,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "func5",
    "start": 1175,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1183,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "func4",
    "start": 1186,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1191,
    "end": 1192
  }
]
```

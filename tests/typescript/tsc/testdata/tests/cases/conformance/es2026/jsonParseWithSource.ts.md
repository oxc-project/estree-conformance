__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "JSON",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 4
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "parse",
            "optional": false,
            "typeAnnotation": null,
            "start": 5,
            "end": 10
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 10
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "{\"value\": 1}",
            "raw": "'{\"value\": 1}'",
            "start": 11,
            "end": 25
          },
          {
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
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 40
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "parsedValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 42,
                "end": 53
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "context",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 62
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
                        "name": "source",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 84,
                                "end": 90
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 93,
                                "end": 102
                              }
                            ],
                            "start": 84,
                            "end": 102
                          },
                          "start": 82,
                          "end": 102
                        },
                        "start": 76,
                        "end": 102
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "context",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 105,
                          "end": 112
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "source",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 113,
                          "end": 119
                        },
                        "optional": false,
                        "computed": false,
                        "start": 105,
                        "end": 119
                      },
                      "definite": false,
                      "start": 76,
                      "end": 119
                    }
                  ],
                  "declare": false,
                  "start": 70,
                  "end": 120
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "parsedValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 132,
                    "end": 143
                  },
                  "start": 125,
                  "end": 144
                }
              ],
              "start": 64,
              "end": 146
            },
            "expression": false,
            "start": 27,
            "end": 146
          }
        ],
        "optional": false,
        "start": 0,
        "end": 147
      },
      "directive": null,
      "start": 0,
      "end": 148
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
            "name": "text",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 170,
                "end": 176
              },
              "start": 168,
              "end": 176
            },
            "start": 164,
            "end": 176
          },
          "init": null,
          "definite": false,
          "start": 164,
          "end": 176
        }
      ],
      "declare": true,
      "start": 150,
      "end": 177
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
            "name": "condition",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 203,
                "end": 210
              },
              "start": 201,
              "end": 210
            },
            "start": 192,
            "end": 210
          },
          "init": null,
          "definite": false,
          "start": 192,
          "end": 210
        }
      ],
      "declare": true,
      "start": 178,
      "end": 211
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
            "name": "JSON",
            "optional": false,
            "typeAnnotation": null,
            "start": 213,
            "end": 217
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "parse",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 223
          },
          "optional": false,
          "computed": false,
          "start": 213,
          "end": 223
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "text",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 228
          }
        ],
        "optional": false,
        "start": 213,
        "end": 229
      },
      "directive": null,
      "start": 213,
      "end": 230
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
            "name": "JSON",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 235
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "parse",
            "optional": false,
            "typeAnnotation": null,
            "start": 236,
            "end": 241
          },
          "optional": false,
          "computed": false,
          "start": 231,
          "end": 241
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "text",
            "optional": false,
            "typeAnnotation": null,
            "start": 242,
            "end": 246
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 257
          }
        ],
        "optional": false,
        "start": 231,
        "end": 258
      },
      "directive": null,
      "start": 231,
      "end": 259
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSON",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 264
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "parse",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 270
            },
            "optional": false,
            "computed": false,
            "start": 260,
            "end": 270
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "call",
            "optional": false,
            "typeAnnotation": null,
            "start": 271,
            "end": 275
          },
          "optional": false,
          "computed": false,
          "start": 260,
          "end": 275
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "JSON",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 280
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "text",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 286
          }
        ],
        "optional": false,
        "start": 260,
        "end": 287
      },
      "directive": null,
      "start": 260,
      "end": 288
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSON",
              "optional": false,
              "typeAnnotation": null,
              "start": 289,
              "end": 293
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "parse",
              "optional": false,
              "typeAnnotation": null,
              "start": 294,
              "end": 299
            },
            "optional": false,
            "computed": false,
            "start": 289,
            "end": 299
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null,
            "start": 300,
            "end": 305
          },
          "optional": false,
          "computed": false,
          "start": 289,
          "end": 305
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "JSON",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 310
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "text",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 317
              }
            ],
            "start": 312,
            "end": 318
          }
        ],
        "optional": false,
        "start": 289,
        "end": 319
      },
      "directive": null,
      "start": 289,
      "end": 320
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P",
        "optional": false,
        "typeAnnotation": null,
        "start": 327,
        "end": 328
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 331,
          "end": 341
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 349,
                  "end": 353
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parse",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 354,
                  "end": 359
                },
                "start": 349,
                "end": 359
              },
              "typeArguments": null,
              "start": 342,
              "end": 359
            }
          ],
          "start": 341,
          "end": 360
        },
        "start": 331,
        "end": 360
      },
      "declare": false,
      "start": 322,
      "end": 361
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "parse",
        "optional": false,
        "typeAnnotation": null,
        "start": 371,
        "end": 376
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
            "start": 380,
            "end": 384
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 386,
                "end": 387
              },
              "typeArguments": null,
              "start": 386,
              "end": 387
            },
            "start": 384,
            "end": 387
          },
          "value": null,
          "start": 377,
          "end": 387
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 402,
                  "end": 406
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parse",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 407,
                  "end": 412
                },
                "optional": false,
                "computed": false,
                "start": 402,
                "end": 412
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 416,
                    "end": 420
                  },
                  "start": 413,
                  "end": 420
                }
              ],
              "optional": false,
              "start": 402,
              "end": 421
            },
            "start": 395,
            "end": 422
          }
        ],
        "start": 389,
        "end": 424
      },
      "expression": false,
      "start": 362,
      "end": 424
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "parse",
          "optional": false,
          "typeAnnotation": null,
          "start": 425,
          "end": 430
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "text",
            "optional": false,
            "typeAnnotation": null,
            "start": 431,
            "end": 435
          }
        ],
        "optional": false,
        "start": 425,
        "end": 436
      },
      "directive": null,
      "start": 425,
      "end": 437
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "parseWith",
        "optional": false,
        "typeAnnotation": null,
        "start": 448,
        "end": 457
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 465,
              "end": 471
            },
            "start": 463,
            "end": 471
          },
          "start": 458,
          "end": 471
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "reviver",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 483,
                  "end": 484
                },
                "typeArguments": null,
                "start": 483,
                "end": 484
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 485,
                  "end": 486
                },
                "start": 485,
                "end": 486
              },
              "start": 483,
              "end": 487
            },
            "start": 481,
            "end": 487
          },
          "start": 473,
          "end": 487
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 502,
                  "end": 506
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parse",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 507,
                  "end": 512
                },
                "optional": false,
                "computed": false,
                "start": 502,
                "end": 512
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 513,
                  "end": 518
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "reviver",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 520,
                  "end": 527
                }
              ],
              "optional": false,
              "start": 502,
              "end": 528
            },
            "start": 495,
            "end": 529
          }
        ],
        "start": 489,
        "end": 531
      },
      "expression": false,
      "start": 439,
      "end": 531
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 539,
            "end": 540
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 543,
                  "end": 547
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parse",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 548,
                  "end": 553
                },
                "optional": false,
                "computed": false,
                "start": 543,
                "end": 553
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 554,
                "end": 558
              },
              "optional": false,
              "computed": false,
              "start": 543,
              "end": 558
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "JSON",
                "optional": false,
                "typeAnnotation": null,
                "start": 559,
                "end": 563
              }
            ],
            "optional": false,
            "start": 543,
            "end": 564
          },
          "definite": false,
          "start": 539,
          "end": 564
        }
      ],
      "declare": false,
      "start": 533,
      "end": 565
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 566,
          "end": 567
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "text",
            "optional": false,
            "typeAnnotation": null,
            "start": 568,
            "end": 572
          }
        ],
        "optional": false,
        "start": 566,
        "end": 573
      },
      "directive": null,
      "start": 566,
      "end": 574
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
            "name": "JSON",
            "optional": false,
            "typeAnnotation": null,
            "start": 576,
            "end": 580
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "parse",
            "optional": false,
            "typeAnnotation": null,
            "start": 581,
            "end": 586
          },
          "optional": false,
          "computed": false,
          "start": 576,
          "end": 586
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "text",
            "optional": false,
            "typeAnnotation": null,
            "start": 587,
            "end": 591
          },
          {
            "type": "ConditionalExpression",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "condition",
              "optional": false,
              "typeAnnotation": null,
              "start": 593,
              "end": 602
            },
            "consequent": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 606,
                  "end": 609
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 611,
                  "end": 616
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 618,
                  "end": 625
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
                          "name": "source",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 650,
                                  "end": 656
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "start": 659,
                                  "end": 668
                                }
                              ],
                              "start": 650,
                              "end": 668
                            },
                            "start": 648,
                            "end": 668
                          },
                          "start": 642,
                          "end": 668
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "context",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 671,
                            "end": 678
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "source",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 679,
                            "end": 685
                          },
                          "optional": false,
                          "computed": false,
                          "start": 671,
                          "end": 685
                        },
                        "definite": false,
                        "start": 642,
                        "end": 685
                      }
                    ],
                    "declare": false,
                    "start": 636,
                    "end": 686
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 698,
                      "end": 703
                    },
                    "start": 691,
                    "end": 704
                  }
                ],
                "start": 630,
                "end": 706
              },
              "id": null,
              "generator": false,
              "start": 605,
              "end": 706
            },
            "alternate": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 709,
              "end": 718
            },
            "start": 593,
            "end": 718
          }
        ],
        "optional": false,
        "start": 576,
        "end": 719
      },
      "directive": null,
      "start": 576,
      "end": 720
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 720
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 0,
    "end": 4
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "parse",
    "start": 5,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11
  },
  {
    "type": "String",
    "value": "'{\"value\": 1}'",
    "start": 11,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 27,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 37,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "parsedValue",
    "start": 42,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 55,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 70,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 84,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 93,
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
    "value": "context",
    "start": 105,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 125,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "parsedValue",
    "start": 132,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 150,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 158,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 164,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 178,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 186,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 192,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 203,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 213,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "parse",
    "start": 218,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 224,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 231,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "parse",
    "start": 236,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 242,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 248,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 260,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "parse",
    "start": 265,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 271,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 276,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 282,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 289,
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
    "value": "parse",
    "start": 294,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 300,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 306,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 313,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 322,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 331,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 341,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 342,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 349,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "parse",
    "start": 354,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 362,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "parse",
    "start": 371,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 377,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 380,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 395,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 402,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "parse",
    "start": 407,
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
    "value": "...",
    "start": 413,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 416,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "parse",
    "start": 425,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 431,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
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
    "value": "function",
    "start": 439,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "parseWith",
    "start": 448,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 458,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 465,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "reviver",
    "start": 473,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 484,
    "end": 485
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "{",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 495,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 502,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "parse",
    "start": 507,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 513,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "reviver",
    "start": 520,
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
    "value": ";",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 530,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 533,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "JSON",
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
    "value": "parse",
    "start": 548,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 554,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 559,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 568,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 576,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "parse",
    "start": 581,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 587,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 593,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 606,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 611,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 618,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 627,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 636,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 642,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 650,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 659,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 671,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 679,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 685,
    "end": 686
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 691,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 698,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 709,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 719,
    "end": 720
  }
]
```

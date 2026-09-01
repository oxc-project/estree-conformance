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
        "start": 116,
        "end": 117
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
              "start": 124,
              "end": 125
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 127,
                "end": 133
              },
              "start": 125,
              "end": 133
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
            "start": 124,
            "end": 134
          }
        ],
        "start": 118,
        "end": 136
      },
      "abstract": false,
      "declare": false,
      "start": 110,
      "end": 136
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
        "start": 144,
        "end": 145
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
              "start": 152,
              "end": 153
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 155,
                "end": 161
              },
              "start": 153,
              "end": 161
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
            "start": 152,
            "end": 162
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
              "start": 167,
              "end": 168
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 167,
            "end": 177
          }
        ],
        "start": 146,
        "end": 179
      },
      "abstract": false,
      "declare": false,
      "start": 138,
      "end": 179
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 188
      },
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
              "start": 189,
              "end": 190
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 189,
            "end": 190
          }
        ],
        "start": 188,
        "end": 191
      },
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
              "start": 198,
              "end": 199
            },
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
                  "start": 201,
                  "end": 202
                },
                "typeArguments": null,
                "start": 201,
                "end": 202
              },
              "start": 199,
              "end": 202
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
            "start": 198,
            "end": 203
          }
        ],
        "start": 192,
        "end": 205
      },
      "abstract": false,
      "declare": false,
      "start": 181,
      "end": 205
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Class",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
        "end": 222
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 236
            },
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
                    "start": 237,
                    "end": 238
                  },
                  "constraint": {
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
                          "start": 249,
                          "end": 250
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 252,
                            "end": 258
                          },
                          "start": 250,
                          "end": 258
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 249,
                        "end": 258
                      }
                    ],
                    "start": 247,
                    "end": 260
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 237,
                  "end": 260
                }
              ],
              "start": 236,
              "end": 261
            },
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
                    "start": 272,
                    "end": 275
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "start": 276,
                            "end": 277
                          },
                          "constraint": {
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
                                  "start": 288,
                                  "end": 289
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 291,
                                    "end": 297
                                  },
                                  "start": 289,
                                  "end": 297
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 288,
                                "end": 297
                              }
                            ],
                            "start": 286,
                            "end": 299
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 276,
                          "end": 299
                        }
                      ],
                      "start": 275,
                      "end": 300
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "X",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 304,
                              "end": 305
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 306,
                                    "end": 307
                                  },
                                  "typeArguments": null,
                                  "start": 306,
                                  "end": 307
                                }
                              ],
                              "start": 305,
                              "end": 308
                            },
                            "start": 304,
                            "end": 308
                          },
                          "start": 302,
                          "end": 308
                        },
                        "start": 301,
                        "end": 308
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "X",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 314,
                              "end": 315
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 316,
                                    "end": 317
                                  },
                                  "typeArguments": null,
                                  "start": 316,
                                  "end": 317
                                }
                              ],
                              "start": 315,
                              "end": 318
                            },
                            "start": 314,
                            "end": 318
                          },
                          "start": 312,
                          "end": 318
                        },
                        "start": 310,
                        "end": 318
                      }
                    ],
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
                                      "start": 341,
                                      "end": 342
                                    },
                                    "typeArguments": null,
                                    "start": 341,
                                    "end": 342
                                  },
                                  "start": 339,
                                  "end": 342
                                },
                                "start": 338,
                                "end": 342
                              },
                              "init": null,
                              "definite": false,
                              "start": 338,
                              "end": 342
                            }
                          ],
                          "declare": false,
                          "start": 334,
                          "end": 343
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 363,
                            "end": 364
                          },
                          "start": 356,
                          "end": 365
                        }
                      ],
                      "start": 320,
                      "end": 375
                    },
                    "expression": false,
                    "start": 275,
                    "end": 375
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 272,
                  "end": 375
                }
              ],
              "start": 262,
              "end": 381
            },
            "abstract": false,
            "declare": false,
            "start": 229,
            "end": 381
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
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 391,
                  "end": 393
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 400,
                    "end": 401
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 402,
                          "end": 403
                        },
                        "typeArguments": null,
                        "start": 402,
                        "end": 403
                      }
                    ],
                    "start": 401,
                    "end": 404
                  },
                  "arguments": [],
                  "start": 396,
                  "end": 406
                },
                "definite": false,
                "start": 391,
                "end": 406
              }
            ],
            "declare": false,
            "start": 387,
            "end": 407
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
                  "name": "d1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 416,
                  "end": 418
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 425,
                    "end": 426
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 427,
                          "end": 428
                        },
                        "typeArguments": null,
                        "start": 427,
                        "end": 428
                      }
                    ],
                    "start": 426,
                    "end": 429
                  },
                  "arguments": [],
                  "start": 421,
                  "end": 431
                },
                "definite": false,
                "start": 416,
                "end": 431
              }
            ],
            "declare": false,
            "start": 412,
            "end": 432
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
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "G",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 444,
                        "end": 445
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
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
                                  "start": 448,
                                  "end": 449
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 451,
                                    "end": 457
                                  },
                                  "start": 449,
                                  "end": 457
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 448,
                                "end": 458
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
                                  "start": 459,
                                  "end": 460
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 462,
                                    "end": 468
                                  },
                                  "start": 460,
                                  "end": 468
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 459,
                                "end": 468
                              }
                            ],
                            "start": 446,
                            "end": 470
                          }
                        ],
                        "start": 445,
                        "end": 471
                      },
                      "start": 444,
                      "end": 471
                    },
                    "start": 442,
                    "end": 471
                  },
                  "start": 441,
                  "end": 471
                },
                "init": null,
                "definite": false,
                "start": 441,
                "end": 471
              }
            ],
            "declare": false,
            "start": 437,
            "end": 472
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 481,
                  "end": 482
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 485,
                      "end": 486
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 487,
                      "end": 490
                    },
                    "optional": false,
                    "computed": false,
                    "start": 485,
                    "end": 490
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 491,
                      "end": 493
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 495,
                      "end": 497
                    }
                  ],
                  "optional": false,
                  "start": 485,
                  "end": 498
                },
                "definite": false,
                "start": 481,
                "end": 498
              }
            ],
            "declare": false,
            "start": 477,
            "end": 499
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 508,
                  "end": 510
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 513,
                      "end": 514
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 515,
                      "end": 518
                    },
                    "optional": false,
                    "computed": false,
                    "start": 513,
                    "end": 518
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 519,
                      "end": 521
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 523,
                      "end": 525
                    }
                  ],
                  "optional": false,
                  "start": 513,
                  "end": 526
                },
                "definite": false,
                "start": 508,
                "end": 526
              }
            ],
            "declare": false,
            "start": 504,
            "end": 527
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "G2",
              "optional": false,
              "typeAnnotation": null,
              "start": 539,
              "end": 541
            },
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
                    "start": 542,
                    "end": 543
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 552,
                      "end": 553
                    },
                    "typeArguments": null,
                    "start": 552,
                    "end": 553
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 542,
                  "end": 553
                }
              ],
              "start": 541,
              "end": 554
            },
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
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 565,
                    "end": 569
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "start": 570,
                            "end": 571
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 580,
                              "end": 581
                            },
                            "typeArguments": null,
                            "start": 580,
                            "end": 581
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 570,
                          "end": 581
                        }
                      ],
                      "start": 569,
                      "end": 582
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "X",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 586,
                              "end": 587
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 588,
                                    "end": 589
                                  },
                                  "typeArguments": null,
                                  "start": 588,
                                  "end": 589
                                }
                              ],
                              "start": 587,
                              "end": 590
                            },
                            "start": 586,
                            "end": 590
                          },
                          "start": 584,
                          "end": 590
                        },
                        "start": 583,
                        "end": 590
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "X",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 596,
                              "end": 597
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 598,
                                    "end": 599
                                  },
                                  "typeArguments": null,
                                  "start": 598,
                                  "end": 599
                                }
                              ],
                              "start": 597,
                              "end": 600
                            },
                            "start": 596,
                            "end": 600
                          },
                          "start": 594,
                          "end": 600
                        },
                        "start": 592,
                        "end": 600
                      }
                    ],
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
                                      "start": 623,
                                      "end": 624
                                    },
                                    "typeArguments": null,
                                    "start": 623,
                                    "end": 624
                                  },
                                  "start": 621,
                                  "end": 624
                                },
                                "start": 620,
                                "end": 624
                              },
                              "init": null,
                              "definite": false,
                              "start": 620,
                              "end": 624
                            }
                          ],
                          "declare": false,
                          "start": 616,
                          "end": 625
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 645,
                            "end": 646
                          },
                          "start": 638,
                          "end": 647
                        }
                      ],
                      "start": 602,
                      "end": 657
                    },
                    "expression": false,
                    "start": 569,
                    "end": 657
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 565,
                  "end": 657
                }
              ],
              "start": 555,
              "end": 663
            },
            "abstract": false,
            "declare": false,
            "start": 533,
            "end": 663
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
                  "name": "g2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "G2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 676,
                        "end": 678
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "D",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 679,
                              "end": 680
                            },
                            "typeArguments": null,
                            "start": 679,
                            "end": 680
                          }
                        ],
                        "start": 678,
                        "end": 681
                      },
                      "start": 676,
                      "end": 681
                    },
                    "start": 674,
                    "end": 681
                  },
                  "start": 672,
                  "end": 681
                },
                "init": null,
                "definite": false,
                "start": 672,
                "end": 681
              }
            ],
            "declare": false,
            "start": 668,
            "end": 682
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 691,
                  "end": 692
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 695,
                      "end": 697
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 698,
                      "end": 702
                    },
                    "optional": false,
                    "computed": false,
                    "start": 695,
                    "end": 702
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 703,
                      "end": 705
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 707,
                      "end": 709
                    }
                  ],
                  "optional": false,
                  "start": 695,
                  "end": 710
                },
                "definite": false,
                "start": 691,
                "end": 710
              }
            ],
            "declare": false,
            "start": 687,
            "end": 711
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 720,
                  "end": 722
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 725,
                      "end": 727
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 728,
                      "end": 732
                    },
                    "optional": false,
                    "computed": false,
                    "start": 725,
                    "end": 732
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 733,
                      "end": 735
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 737,
                      "end": 739
                    }
                  ],
                  "optional": false,
                  "start": 725,
                  "end": 740
                },
                "definite": false,
                "start": 720,
                "end": 740
              }
            ],
            "declare": false,
            "start": 716,
            "end": 741
          }
        ],
        "start": 223,
        "end": 743
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 207,
      "end": 743
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Interface",
        "optional": false,
        "typeAnnotation": null,
        "start": 755,
        "end": 764
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null,
              "start": 781,
              "end": 782
            },
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
                    "start": 783,
                    "end": 784
                  },
                  "constraint": {
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
                          "start": 795,
                          "end": 796
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 798,
                            "end": 804
                          },
                          "start": 796,
                          "end": 804
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 795,
                        "end": 804
                      }
                    ],
                    "start": 793,
                    "end": 806
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 783,
                  "end": 806
                }
              ],
              "start": 782,
              "end": 807
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 818,
                    "end": 821
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
                          "start": 822,
                          "end": 823
                        },
                        "constraint": {
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
                                "start": 834,
                                "end": 835
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 837,
                                  "end": 843
                                },
                                "start": 835,
                                "end": 843
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 834,
                              "end": 843
                            }
                          ],
                          "start": 832,
                          "end": 845
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 822,
                        "end": 845
                      }
                    ],
                    "start": 821,
                    "end": 846
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "X",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 850,
                            "end": 851
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 852,
                                  "end": 853
                                },
                                "typeArguments": null,
                                "start": 852,
                                "end": 853
                              }
                            ],
                            "start": 851,
                            "end": 854
                          },
                          "start": 850,
                          "end": 854
                        },
                        "start": 848,
                        "end": 854
                      },
                      "start": 847,
                      "end": 854
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "X",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 860,
                            "end": 861
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 862,
                                  "end": 863
                                },
                                "typeArguments": null,
                                "start": 862,
                                "end": 863
                              }
                            ],
                            "start": 861,
                            "end": 864
                          },
                          "start": 860,
                          "end": 864
                        },
                        "start": 858,
                        "end": 864
                      },
                      "start": 856,
                      "end": 864
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 867,
                        "end": 868
                      },
                      "typeArguments": null,
                      "start": 867,
                      "end": 868
                    },
                    "start": 865,
                    "end": 868
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 818,
                  "end": 869
                }
              ],
              "start": 808,
              "end": 875
            },
            "declare": false,
            "start": 771,
            "end": 875
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
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 885,
                  "end": 887
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 894,
                    "end": 895
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 896,
                          "end": 897
                        },
                        "typeArguments": null,
                        "start": 896,
                        "end": 897
                      }
                    ],
                    "start": 895,
                    "end": 898
                  },
                  "arguments": [],
                  "start": 890,
                  "end": 900
                },
                "definite": false,
                "start": 885,
                "end": 900
              }
            ],
            "declare": false,
            "start": 881,
            "end": 901
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
                  "name": "d1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 910,
                  "end": 912
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 919,
                    "end": 920
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 921,
                          "end": 922
                        },
                        "typeArguments": null,
                        "start": 921,
                        "end": 922
                      }
                    ],
                    "start": 920,
                    "end": 923
                  },
                  "arguments": [],
                  "start": 915,
                  "end": 925
                },
                "definite": false,
                "start": 910,
                "end": 925
              }
            ],
            "declare": false,
            "start": 906,
            "end": 926
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
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "G",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 938,
                        "end": 939
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
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
                                  "start": 942,
                                  "end": 943
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 945,
                                    "end": 951
                                  },
                                  "start": 943,
                                  "end": 951
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 942,
                                "end": 952
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
                                  "start": 953,
                                  "end": 954
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 956,
                                    "end": 962
                                  },
                                  "start": 954,
                                  "end": 962
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 953,
                                "end": 962
                              }
                            ],
                            "start": 940,
                            "end": 964
                          }
                        ],
                        "start": 939,
                        "end": 965
                      },
                      "start": 938,
                      "end": 965
                    },
                    "start": 936,
                    "end": 965
                  },
                  "start": 935,
                  "end": 965
                },
                "init": null,
                "definite": false,
                "start": 935,
                "end": 965
              }
            ],
            "declare": false,
            "start": 931,
            "end": 966
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 975,
                  "end": 976
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 979,
                      "end": 980
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 981,
                      "end": 984
                    },
                    "optional": false,
                    "computed": false,
                    "start": 979,
                    "end": 984
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 985,
                      "end": 987
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 989,
                      "end": 991
                    }
                  ],
                  "optional": false,
                  "start": 979,
                  "end": 992
                },
                "definite": false,
                "start": 975,
                "end": 992
              }
            ],
            "declare": false,
            "start": 971,
            "end": 993
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1002,
                  "end": 1004
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1007,
                      "end": 1008
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1009,
                      "end": 1012
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1007,
                    "end": 1012
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1013,
                      "end": 1015
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1017,
                      "end": 1019
                    }
                  ],
                  "optional": false,
                  "start": 1007,
                  "end": 1020
                },
                "definite": false,
                "start": 1002,
                "end": 1020
              }
            ],
            "declare": false,
            "start": 998,
            "end": 1021
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "G2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1037,
              "end": 1039
            },
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
                    "start": 1040,
                    "end": 1041
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1050,
                      "end": 1051
                    },
                    "typeArguments": null,
                    "start": 1050,
                    "end": 1051
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1040,
                  "end": 1051
                }
              ],
              "start": 1039,
              "end": 1052
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1063,
                    "end": 1067
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
                          "start": 1068,
                          "end": 1069
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1078,
                            "end": 1079
                          },
                          "typeArguments": null,
                          "start": 1078,
                          "end": 1079
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1068,
                        "end": 1079
                      }
                    ],
                    "start": 1067,
                    "end": 1080
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "X",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1084,
                            "end": 1085
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1086,
                                  "end": 1087
                                },
                                "typeArguments": null,
                                "start": 1086,
                                "end": 1087
                              }
                            ],
                            "start": 1085,
                            "end": 1088
                          },
                          "start": 1084,
                          "end": 1088
                        },
                        "start": 1082,
                        "end": 1088
                      },
                      "start": 1081,
                      "end": 1088
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "X",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1094,
                            "end": 1095
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1096,
                                  "end": 1097
                                },
                                "typeArguments": null,
                                "start": 1096,
                                "end": 1097
                              }
                            ],
                            "start": 1095,
                            "end": 1098
                          },
                          "start": 1094,
                          "end": 1098
                        },
                        "start": 1092,
                        "end": 1098
                      },
                      "start": 1090,
                      "end": 1098
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1101,
                        "end": 1102
                      },
                      "typeArguments": null,
                      "start": 1101,
                      "end": 1102
                    },
                    "start": 1099,
                    "end": 1102
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1063,
                  "end": 1103
                }
              ],
              "start": 1053,
              "end": 1109
            },
            "declare": false,
            "start": 1027,
            "end": 1109
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
                  "name": "g2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "G2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1123,
                        "end": 1125
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "D",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1126,
                              "end": 1127
                            },
                            "typeArguments": null,
                            "start": 1126,
                            "end": 1127
                          }
                        ],
                        "start": 1125,
                        "end": 1128
                      },
                      "start": 1123,
                      "end": 1128
                    },
                    "start": 1121,
                    "end": 1128
                  },
                  "start": 1119,
                  "end": 1128
                },
                "init": null,
                "definite": false,
                "start": 1119,
                "end": 1128
              }
            ],
            "declare": false,
            "start": 1115,
            "end": 1129
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1138,
                  "end": 1139
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1142,
                      "end": 1144
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1145,
                      "end": 1149
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1142,
                    "end": 1149
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1150,
                      "end": 1152
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1154,
                      "end": 1156
                    }
                  ],
                  "optional": false,
                  "start": 1142,
                  "end": 1157
                },
                "definite": false,
                "start": 1138,
                "end": 1157
              }
            ],
            "declare": false,
            "start": 1134,
            "end": 1158
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1167,
                  "end": 1169
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1172,
                      "end": 1174
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1175,
                      "end": 1179
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1172,
                    "end": 1179
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1180,
                      "end": 1182
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1184,
                      "end": 1186
                    }
                  ],
                  "optional": false,
                  "start": 1172,
                  "end": 1187
                },
                "definite": false,
                "start": 1167,
                "end": 1187
              }
            ],
            "declare": false,
            "start": 1163,
            "end": 1188
          }
        ],
        "start": 765,
        "end": 1190
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 745,
      "end": 1190
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 110,
  "end": 1190
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 110,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "string",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 138,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "D",
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
    "type": "Identifier",
    "value": "x",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 155,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 167,
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
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 181,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 207,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 217,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 229,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 239,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 252,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 272,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 278,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 291,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 310,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "{",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 334,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 356,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 380,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 387,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 391,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 394,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 396,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 412,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 416,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 421,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ";",
    "start": 431,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 437,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "g",
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
    "value": "G",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 451,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 462,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 471,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 477,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 487,
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
    "value": "c1",
    "start": 491,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 495,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 504,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 508,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 515,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 519,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 523,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 526,
    "end": 527
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 533,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "G2",
    "start": 539,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 542,
    "end": 543
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 544,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 565,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 570,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 572,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 592,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "{",
    "start": 602,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 616,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 624,
    "end": 625
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 638,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 662,
    "end": 663
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 668,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 672,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "G2",
    "start": 676,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 681,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 687,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 695,
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
    "value": "foo2",
    "start": 698,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 703,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 707,
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
    "value": ";",
    "start": 710,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 716,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 720,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 725,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 728,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 733,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 737,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 745,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "Interface",
    "start": 755,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 765,
    "end": 766
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 771,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 783,
    "end": 784
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 785,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 798,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 818,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 822,
    "end": 823
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 824,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 837,
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
    "value": ">",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 856,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 874,
    "end": 875
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 881,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 885,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 888,
    "end": 889
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 890,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 900,
    "end": 901
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 906,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 910,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 913,
    "end": 914
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 915,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 925,
    "end": 926
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 931,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 945,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 956,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 965,
    "end": 966
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 971,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 979,
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
    "value": "foo",
    "start": 981,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 985,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 989,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 992,
    "end": 993
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 998,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 1002,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1009,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1013,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1017,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1027,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "G2",
    "start": 1037,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1042,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1063,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1070,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1090,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1115,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 1119,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "G2",
    "start": 1123,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1134,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 1142,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1145,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1150,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1154,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1163,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 1167,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "g2",
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
    "value": "foo2",
    "start": 1175,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1180,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1184,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1189,
    "end": 1190
  }
]
```

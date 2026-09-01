__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
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
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 30
            },
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
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 49,
                    "end": 50
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
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 65,
                          "end": 76
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
                              "type": "TSParameterProperty",
                              "accessibility": "public",
                              "decorators": [],
                              "override": false,
                              "parameter": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 87,
                                    "end": 93
                                  },
                                  "start": 85,
                                  "end": 93
                                },
                                "start": 84,
                                "end": 93
                              },
                              "readonly": false,
                              "static": false,
                              "start": 77,
                              "end": 93
                            },
                            {
                              "type": "TSParameterProperty",
                              "accessibility": "public",
                              "decorators": [],
                              "override": false,
                              "parameter": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 105,
                                    "end": 111
                                  },
                                  "start": 103,
                                  "end": 111
                                },
                                "start": 102,
                                "end": 111
                              },
                              "readonly": false,
                              "static": false,
                              "start": 95,
                              "end": 111
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 113,
                            "end": 116
                          },
                          "expression": false,
                          "start": 76,
                          "end": 116
                        },
                        "kind": "constructor",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 65,
                        "end": 116
                      }
                    ],
                    "start": 51,
                    "end": 126
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 43,
                  "end": 126
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 142,
                    "end": 143
                  },
                  "start": 135,
                  "end": 144
                }
              ],
              "start": 33,
              "end": 150
            },
            "expression": false,
            "start": 20,
            "end": 150
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
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 159,
                  "end": 160
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 163,
                    "end": 164
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 163,
                  "end": 166
                },
                "definite": false,
                "start": 159,
                "end": 166
              }
            ],
            "declare": false,
            "start": 155,
            "end": 167
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 177
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 184,
                    "end": 185
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 186,
                      "end": 188
                    },
                    {
                      "type": "Literal",
                      "value": 20,
                      "raw": "20",
                      "start": 190,
                      "end": 192
                    }
                  ],
                  "start": 180,
                  "end": 193
                },
                "definite": false,
                "start": 176,
                "end": 193
              }
            ],
            "declare": false,
            "start": 172,
            "end": 194
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 204
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 207,
                    "end": 208
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 209,
                    "end": 210
                  },
                  "optional": false,
                  "computed": false,
                  "start": 207,
                  "end": 210
                },
                "definite": false,
                "start": 203,
                "end": 210
              }
            ],
            "declare": false,
            "start": 199,
            "end": 211
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
                  "start": 220,
                  "end": 221
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 224,
                    "end": 225
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 226,
                    "end": 227
                  },
                  "optional": false,
                  "computed": false,
                  "start": 224,
                  "end": 227
                },
                "definite": false,
                "start": 220,
                "end": 227
              }
            ],
            "declare": false,
            "start": 216,
            "end": 228
          }
        ],
        "start": 14,
        "end": 230
      },
      "expression": false,
      "start": 0,
      "end": 230
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 243
      },
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
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 262
            },
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
                    "start": 266,
                    "end": 272
                  },
                  "start": 264,
                  "end": 272
                },
                "start": 263,
                "end": 272
              }
            ],
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
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 290,
                    "end": 291
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
                          "start": 313,
                          "end": 314
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 317,
                          "end": 318
                        },
                        "computed": false,
                        "static": false,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": "public",
                        "start": 306,
                        "end": 319
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 332,
                          "end": 343
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
                              "type": "TSParameterProperty",
                              "accessibility": "public",
                              "decorators": [],
                              "override": false,
                              "parameter": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 354,
                                    "end": 360
                                  },
                                  "start": 352,
                                  "end": 360
                                },
                                "start": 351,
                                "end": 360
                              },
                              "readonly": false,
                              "static": false,
                              "start": 344,
                              "end": 360
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 362,
                            "end": 365
                          },
                          "expression": false,
                          "start": 343,
                          "end": 365
                        },
                        "kind": "constructor",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 332,
                        "end": 365
                      }
                    ],
                    "start": 292,
                    "end": 375
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 284,
                  "end": 375
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 391,
                    "end": 392
                  },
                  "start": 384,
                  "end": 393
                }
              ],
              "start": 274,
              "end": 399
            },
            "expression": false,
            "start": 252,
            "end": 399
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
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 408,
                  "end": 409
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 412,
                    "end": 413
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 414,
                      "end": 416
                    }
                  ],
                  "optional": false,
                  "start": 412,
                  "end": 417
                },
                "definite": false,
                "start": 408,
                "end": 417
              }
            ],
            "declare": false,
            "start": 404,
            "end": 418
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 427,
                  "end": 428
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 435,
                    "end": 436
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 20,
                      "raw": "20",
                      "start": 437,
                      "end": 439
                    }
                  ],
                  "start": 431,
                  "end": 440
                },
                "definite": false,
                "start": 427,
                "end": 440
              }
            ],
            "declare": false,
            "start": 423,
            "end": 441
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 450,
                  "end": 451
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 454,
                    "end": 455
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 456,
                    "end": 457
                  },
                  "optional": false,
                  "computed": false,
                  "start": 454,
                  "end": 457
                },
                "definite": false,
                "start": 450,
                "end": 457
              }
            ],
            "declare": false,
            "start": 446,
            "end": 458
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
                  "start": 467,
                  "end": 468
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 471,
                    "end": 472
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 473,
                    "end": 474
                  },
                  "optional": false,
                  "computed": false,
                  "start": 471,
                  "end": 474
                },
                "definite": false,
                "start": 467,
                "end": 474
              }
            ],
            "declare": false,
            "start": 463,
            "end": 475
          }
        ],
        "start": 246,
        "end": 477
      },
      "expression": false,
      "start": 232,
      "end": 477
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 488,
        "end": 490
      },
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
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 508,
              "end": 509
            },
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
                    "start": 513,
                    "end": 519
                  },
                  "start": 511,
                  "end": 519
                },
                "start": 510,
                "end": 519
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 524,
                    "end": 530
                  },
                  "start": 522,
                  "end": 530
                },
                "start": 521,
                "end": 530
              }
            ],
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
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 548,
                    "end": 549
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
                          "start": 571,
                          "end": 572
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 575,
                          "end": 576
                        },
                        "computed": false,
                        "static": false,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": "public",
                        "start": 564,
                        "end": 577
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
                          "start": 597,
                          "end": 598
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 601,
                          "end": 602
                        },
                        "computed": false,
                        "static": false,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": "public",
                        "start": 590,
                        "end": 603
                      }
                    ],
                    "start": 550,
                    "end": 613
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 542,
                  "end": 613
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 629,
                    "end": 630
                  },
                  "start": 622,
                  "end": 631
                }
              ],
              "start": 532,
              "end": 637
            },
            "expression": false,
            "start": 499,
            "end": 637
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
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 646,
                  "end": 647
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 650,
                    "end": 651
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 652,
                      "end": 654
                    },
                    {
                      "type": "Literal",
                      "value": 20,
                      "raw": "20",
                      "start": 656,
                      "end": 658
                    }
                  ],
                  "optional": false,
                  "start": 650,
                  "end": 659
                },
                "definite": false,
                "start": 646,
                "end": 659
              }
            ],
            "declare": false,
            "start": 642,
            "end": 660
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 669,
                  "end": 670
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 677,
                    "end": 678
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 673,
                  "end": 680
                },
                "definite": false,
                "start": 669,
                "end": 680
              }
            ],
            "declare": false,
            "start": 665,
            "end": 681
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 690,
                  "end": 691
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 694,
                    "end": 695
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 696,
                    "end": 697
                  },
                  "optional": false,
                  "computed": false,
                  "start": 694,
                  "end": 697
                },
                "definite": false,
                "start": 690,
                "end": 697
              }
            ],
            "declare": false,
            "start": 686,
            "end": 698
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
                  "start": 707,
                  "end": 708
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 711,
                    "end": 712
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 713,
                    "end": 714
                  },
                  "optional": false,
                  "computed": false,
                  "start": 711,
                  "end": 714
                },
                "definite": false,
                "start": 707,
                "end": 714
              }
            ],
            "declare": false,
            "start": 703,
            "end": 715
          }
        ],
        "start": 493,
        "end": 717
      },
      "expression": false,
      "start": 479,
      "end": 717
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 717
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 20,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 43,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 65,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 77,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 87,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 95,
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
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 135,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 142,
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
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 155,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 163,
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
    "value": "let",
    "start": 172,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 180,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 186,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 188,
    "end": 189
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 190,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 199,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 216,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 232,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 241,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 252,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 266,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 274,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 284,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 306,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 332,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 343,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 344,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 354,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "return",
    "start": 384,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 404,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 413,
    "end": 414
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 414,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 423,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 429,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 431,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 436,
    "end": 437
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 437,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 446,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 463,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 479,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 488,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 493,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 499,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 513,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 524,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 530,
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
    "value": "class",
    "start": 542,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 564,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 576,
    "end": 577
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 590,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 612,
    "end": 613
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 622,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 636,
    "end": 637
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 642,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 651,
    "end": 652
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 652,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 654,
    "end": 655
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 656,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "let",
    "start": 665,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 671,
    "end": 672
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 673,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "type": "Punctuator",
    "value": ")",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 680,
    "end": 681
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 686,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 703,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 716,
    "end": 717
  }
]
```

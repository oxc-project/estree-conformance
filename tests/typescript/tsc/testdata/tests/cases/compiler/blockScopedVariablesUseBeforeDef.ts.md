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
        "name": "foo0",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 26,
                  "end": 27
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 31
                },
                "definite": false,
                "start": 26,
                "end": 31
              }
            ],
            "declare": false,
            "start": 22,
            "end": 32
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
                  "start": 41,
                  "end": 42
                },
                "init": null,
                "definite": false,
                "start": 41,
                "end": 42
              }
            ],
            "declare": false,
            "start": 37,
            "end": 43
          }
        ],
        "start": 16,
        "end": 45
      },
      "expression": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 60
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 73,
                  "end": 74
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 83,
                    "end": 84
                  },
                  "id": null,
                  "generator": false,
                  "start": 77,
                  "end": 84
                },
                "definite": false,
                "start": 73,
                "end": 84
              }
            ],
            "declare": false,
            "start": 69,
            "end": 85
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
                  "start": 94,
                  "end": 95
                },
                "init": null,
                "definite": false,
                "start": 94,
                "end": 95
              }
            ],
            "declare": false,
            "start": 90,
            "end": 96
          }
        ],
        "start": 63,
        "end": 98
      },
      "expression": false,
      "start": 47,
      "end": 98
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 113
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 126,
                  "end": 127
                },
                "init": {
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 151,
                          "end": 152
                        },
                        "start": 144,
                        "end": 153
                      }
                    ],
                    "start": 142,
                    "end": 155
                  },
                  "expression": false,
                  "start": 130,
                  "end": 155
                },
                "definite": false,
                "start": 126,
                "end": 155
              }
            ],
            "declare": false,
            "start": 122,
            "end": 155
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
                  "start": 164,
                  "end": 165
                },
                "init": null,
                "definite": false,
                "start": 164,
                "end": 165
              }
            ],
            "declare": false,
            "start": 160,
            "end": 166
          }
        ],
        "start": 116,
        "end": 168
      },
      "expression": false,
      "start": 100,
      "end": 168
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 179,
        "end": 183
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
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 199
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
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 210,
                    "end": 211
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 223,
                            "end": 224
                          },
                          "start": 216,
                          "end": 225
                        }
                      ],
                      "start": 214,
                      "end": 226
                    },
                    "expression": false,
                    "start": 211,
                    "end": 226
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 210,
                  "end": 226
                }
              ],
              "start": 200,
              "end": 232
            },
            "abstract": false,
            "declare": false,
            "start": 192,
            "end": 232
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
                  "start": 241,
                  "end": 242
                },
                "init": null,
                "definite": false,
                "start": 241,
                "end": 242
              }
            ],
            "declare": false,
            "start": 237,
            "end": 243
          }
        ],
        "start": 186,
        "end": 245
      },
      "expression": false,
      "start": 170,
      "end": 245
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 256,
        "end": 260
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
                  "start": 273,
                  "end": 274
                },
                "init": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": null,
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
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 293,
                          "end": 294
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
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 306,
                                  "end": 307
                                },
                                "start": 299,
                                "end": 308
                              }
                            ],
                            "start": 297,
                            "end": 310
                          },
                          "expression": false,
                          "start": 294,
                          "end": 310
                        },
                        "kind": "method",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 293,
                        "end": 310
                      }
                    ],
                    "start": 283,
                    "end": 316
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 277,
                  "end": 316
                },
                "definite": false,
                "start": 273,
                "end": 316
              }
            ],
            "declare": false,
            "start": 269,
            "end": 317
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
                  "start": 326,
                  "end": 327
                },
                "init": null,
                "definite": false,
                "start": 326,
                "end": 327
              }
            ],
            "declare": false,
            "start": 322,
            "end": 328
          }
        ],
        "start": 263,
        "end": 330
      },
      "expression": false,
      "start": 247,
      "end": 330
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 345
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
                  "start": 358,
                  "end": 359
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 368,
                    "end": 369
                  },
                  "id": null,
                  "generator": false,
                  "start": 362,
                  "end": 369
                },
                "definite": false,
                "start": 358,
                "end": 369
              }
            ],
            "declare": false,
            "start": 354,
            "end": 370
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
                  "start": 379,
                  "end": 380
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 389,
                    "end": 390
                  },
                  "id": null,
                  "generator": false,
                  "start": 383,
                  "end": 390
                },
                "definite": false,
                "start": 379,
                "end": 390
              }
            ],
            "declare": false,
            "start": 375,
            "end": 391
          }
        ],
        "start": 348,
        "end": 393
      },
      "expression": false,
      "start": 332,
      "end": 393
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 404,
        "end": 408
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
              "start": 426,
              "end": 427
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 447,
                    "end": 448
                  },
                  "start": 440,
                  "end": 449
                }
              ],
              "start": 430,
              "end": 455
            },
            "expression": false,
            "start": 417,
            "end": 455
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
                  "start": 464,
                  "end": 465
                },
                "init": null,
                "definite": false,
                "start": 464,
                "end": 465
              }
            ],
            "declare": false,
            "start": 460,
            "end": 466
          }
        ],
        "start": 411,
        "end": 468
      },
      "expression": false,
      "start": 395,
      "end": 468
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 479,
        "end": 483
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 498,
              "end": 499
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 510,
                    "end": 511
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 514,
                    "end": 515
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 510,
                  "end": 516
                }
              ],
              "start": 500,
              "end": 522
            },
            "abstract": false,
            "declare": false,
            "start": 492,
            "end": 522
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
                  "start": 531,
                  "end": 532
                },
                "init": null,
                "definite": false,
                "start": 531,
                "end": 532
              }
            ],
            "declare": false,
            "start": 527,
            "end": 533
          }
        ],
        "start": 486,
        "end": 535
      },
      "expression": false,
      "start": 470,
      "end": 535
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 546,
        "end": 550
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
                  "start": 563,
                  "end": 564
                },
                "init": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": null,
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 583,
                          "end": 584
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 587,
                          "end": 588
                        },
                        "computed": false,
                        "static": false,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 583,
                        "end": 589
                      }
                    ],
                    "start": 573,
                    "end": 595
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 567,
                  "end": 595
                },
                "definite": false,
                "start": 563,
                "end": 595
              }
            ],
            "declare": false,
            "start": 559,
            "end": 595
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
                  "start": 604,
                  "end": 605
                },
                "init": null,
                "definite": false,
                "start": 604,
                "end": 605
              }
            ],
            "declare": false,
            "start": 600,
            "end": 606
          }
        ],
        "start": 553,
        "end": 608
      },
      "expression": false,
      "start": 537,
      "end": 608
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 619,
        "end": 623
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
                  "start": 636,
                  "end": 637
                },
                "init": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": null,
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 663,
                          "end": 664
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 667,
                          "end": 668
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 656,
                        "end": 669
                      }
                    ],
                    "start": 646,
                    "end": 675
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 640,
                  "end": 675
                },
                "definite": false,
                "start": 636,
                "end": 675
              }
            ],
            "declare": false,
            "start": 632,
            "end": 675
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
                  "start": 684,
                  "end": 685
                },
                "init": null,
                "definite": false,
                "start": 684,
                "end": 685
              }
            ],
            "declare": false,
            "start": 680,
            "end": 686
          }
        ],
        "start": 626,
        "end": 688
      },
      "expression": false,
      "start": 610,
      "end": 688
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 699,
        "end": 704
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 719,
              "end": 720
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 738,
                    "end": 739
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 742,
                    "end": 743
                  },
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 731,
                  "end": 744
                }
              ],
              "start": 721,
              "end": 750
            },
            "abstract": false,
            "declare": false,
            "start": 713,
            "end": 750
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
                  "start": 759,
                  "end": 760
                },
                "init": null,
                "definite": false,
                "start": 759,
                "end": 760
              }
            ],
            "declare": false,
            "start": 755,
            "end": 761
          }
        ],
        "start": 707,
        "end": 763
      },
      "expression": false,
      "start": 690,
      "end": 763
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 774,
        "end": 779
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
              "start": 797,
              "end": 798
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
                        "start": 816,
                        "end": 817
                      },
                      "init": {
                        "type": "ClassExpression",
                        "decorators": [],
                        "id": null,
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 847,
                                "end": 848
                              },
                              "typeAnnotation": null,
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 851,
                                "end": 852
                              },
                              "computed": false,
                              "static": true,
                              "declare": false,
                              "override": false,
                              "optional": false,
                              "definite": false,
                              "readonly": false,
                              "accessibility": null,
                              "start": 840,
                              "end": 853
                            }
                          ],
                          "start": 826,
                          "end": 863
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 820,
                        "end": 863
                      },
                      "definite": false,
                      "start": 816,
                      "end": 863
                    }
                  ],
                  "declare": false,
                  "start": 812,
                  "end": 863
                }
              ],
              "start": 802,
              "end": 869
            },
            "expression": false,
            "start": 788,
            "end": 869
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
                  "start": 878,
                  "end": 879
                },
                "init": null,
                "definite": false,
                "start": 878,
                "end": 879
              }
            ],
            "declare": false,
            "start": 874,
            "end": 880
          }
        ],
        "start": 782,
        "end": 882
      },
      "expression": false,
      "start": 765,
      "end": 882
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 893,
        "end": 898
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
              "start": 916,
              "end": 917
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
                        "start": 935,
                        "end": 936
                      },
                      "init": {
                        "type": "ClassExpression",
                        "decorators": [],
                        "id": null,
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 959,
                                "end": 960
                              },
                              "typeAnnotation": null,
                              "value": null,
                              "computed": false,
                              "static": false,
                              "declare": false,
                              "override": false,
                              "optional": false,
                              "definite": false,
                              "readonly": false,
                              "accessibility": null,
                              "start": 959,
                              "end": 961
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
                                "start": 974,
                                "end": 985
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
                                            "start": 1006,
                                            "end": 1010
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "a",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1011,
                                            "end": 1012
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1006,
                                          "end": 1012
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1015,
                                          "end": 1016
                                        },
                                        "start": 1006,
                                        "end": 1016
                                      },
                                      "directive": null,
                                      "start": 1006,
                                      "end": 1017
                                    }
                                  ],
                                  "start": 988,
                                  "end": 1031
                                },
                                "expression": false,
                                "start": 985,
                                "end": 1031
                              },
                              "kind": "constructor",
                              "computed": false,
                              "static": false,
                              "override": false,
                              "optional": false,
                              "accessibility": null,
                              "start": 974,
                              "end": 1031
                            }
                          ],
                          "start": 945,
                          "end": 1041
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 939,
                        "end": 1041
                      },
                      "definite": false,
                      "start": 935,
                      "end": 1041
                    }
                  ],
                  "declare": false,
                  "start": 931,
                  "end": 1041
                }
              ],
              "start": 921,
              "end": 1047
            },
            "expression": false,
            "start": 907,
            "end": 1047
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
                  "start": 1056,
                  "end": 1057
                },
                "init": null,
                "definite": false,
                "start": 1056,
                "end": 1057
              }
            ],
            "declare": false,
            "start": 1052,
            "end": 1058
          }
        ],
        "start": 901,
        "end": 1060
      },
      "expression": false,
      "start": 884,
      "end": 1060
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1071,
        "end": 1076
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1089,
                  "end": 1090
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "get",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1107,
                        "end": 1108
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1120,
                                "end": 1121
                              },
                              "start": 1113,
                              "end": 1121
                            }
                          ],
                          "start": 1111,
                          "end": 1123
                        },
                        "expression": false,
                        "start": 1108,
                        "end": 1123
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1103,
                      "end": 1123
                    }
                  ],
                  "start": 1093,
                  "end": 1130
                },
                "definite": false,
                "start": 1089,
                "end": 1130
              }
            ],
            "declare": false,
            "start": 1085,
            "end": 1130
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
                  "start": 1139,
                  "end": 1140
                },
                "init": null,
                "definite": false,
                "start": 1139,
                "end": 1140
              }
            ],
            "declare": false,
            "start": 1135,
            "end": 1140
          }
        ],
        "start": 1079,
        "end": 1142
      },
      "expression": false,
      "start": 1062,
      "end": 1142
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1153,
        "end": 1158
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1171,
                  "end": 1172
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1185,
                        "end": 1186
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1188,
                        "end": 1189
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1185,
                      "end": 1189
                    }
                  ],
                  "start": 1175,
                  "end": 1196
                },
                "definite": false,
                "start": 1171,
                "end": 1196
              }
            ],
            "declare": false,
            "start": 1167,
            "end": 1196
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
                  "start": 1205,
                  "end": 1206
                },
                "init": null,
                "definite": false,
                "start": 1205,
                "end": 1206
              }
            ],
            "declare": false,
            "start": 1201,
            "end": 1206
          }
        ],
        "start": 1161,
        "end": 1208
      },
      "expression": false,
      "start": 1144,
      "end": 1208
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1219,
        "end": 1224
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1309,
                      "end": 1310
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1320,
                      "end": 1321
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1299,
                  "end": 1328
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1337,
                            "end": 1343
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 1345,
                            "end": 1351
                          }
                        ],
                        "start": 1336,
                        "end": 1352
                      },
                      "start": 1334,
                      "end": 1352
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
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
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "console",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1373,
                                    "end": 1380
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "log",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1381,
                                    "end": 1384
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1373,
                                  "end": 1384
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1385,
                                    "end": 1386
                                  }
                                ],
                                "optional": false,
                                "start": 1373,
                                "end": 1387
                              },
                              "id": null,
                              "generator": false,
                              "start": 1367,
                              "end": 1387
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1366,
                            "end": 1390
                          },
                          "directive": null,
                          "start": 1366,
                          "end": 1391
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
                                "name": "console",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1417,
                                "end": 1424
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "log",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1425,
                                "end": 1428
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1417,
                              "end": 1428
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1429,
                                "end": 1430
                              }
                            ],
                            "optional": false,
                            "start": 1417,
                            "end": 1431
                          },
                          "directive": null,
                          "start": 1417,
                          "end": 1432
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
                                "start": 1474,
                                "end": 1475
                              },
                              "init": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1484,
                                  "end": 1485
                                },
                                "id": null,
                                "generator": false,
                                "start": 1478,
                                "end": 1485
                              },
                              "definite": false,
                              "start": 1474,
                              "end": 1485
                            }
                          ],
                          "declare": false,
                          "start": 1468,
                          "end": 1486
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 1540,
                                "end": 1541
                              },
                              {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 1555,
                                "end": 1556
                              }
                            ],
                            "start": 1526,
                            "end": 1567
                          },
                          "start": 1519,
                          "end": 1568
                        }
                      ],
                      "start": 1356,
                      "end": 1574
                    },
                    "id": null,
                    "generator": false,
                    "start": 1332,
                    "end": 1574
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1331,
                  "end": 1577
                },
                "definite": false,
                "start": 1299,
                "end": 1577
              }
            ],
            "declare": false,
            "start": 1293,
            "end": 1578
          }
        ],
        "start": 1227,
        "end": 1584
      },
      "expression": false,
      "start": 1210,
      "end": 1584
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 1595,
        "end": 1600
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1614,
                      "end": 1615
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1613,
                  "end": 1616
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1626,
                      "end": 1627
                    },
                    "id": null,
                    "generator": false,
                    "start": 1620,
                    "end": 1627
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1619,
                  "end": 1630
                },
                "definite": false,
                "start": 1613,
                "end": 1630
              }
            ],
            "declare": false,
            "start": 1609,
            "end": 1631
          }
        ],
        "start": 1603,
        "end": 1633
      },
      "expression": false,
      "start": 1586,
      "end": 1633
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null,
        "start": 1644,
        "end": 1649
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1664,
                  "end": 1671
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": true,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1697,
                            "end": 1704
                          },
                          "directive": null,
                          "start": 1697,
                          "end": 1704
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1713,
                            "end": 1716
                          },
                          "directive": null,
                          "start": 1713,
                          "end": 1716
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AwaitExpression",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 1731,
                              "end": 1735
                            },
                            "start": 1725,
                            "end": 1735
                          },
                          "directive": null,
                          "start": 1725,
                          "end": 1735
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1744,
                            "end": 1751
                          },
                          "directive": null,
                          "start": 1744,
                          "end": 1751
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1760,
                            "end": 1763
                          },
                          "directive": null,
                          "start": 1760,
                          "end": 1763
                        }
                      ],
                      "start": 1687,
                      "end": 1769
                    },
                    "id": null,
                    "generator": false,
                    "start": 1675,
                    "end": 1769
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1674,
                  "end": 1772
                },
                "definite": false,
                "start": 1664,
                "end": 1772
              }
            ],
            "declare": false,
            "start": 1658,
            "end": 1772
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1784,
                  "end": 1787
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1790,
                  "end": 1791
                },
                "definite": false,
                "start": 1784,
                "end": 1791
              }
            ],
            "declare": false,
            "start": 1778,
            "end": 1792
          }
        ],
        "start": 1652,
        "end": 1794
      },
      "expression": false,
      "start": 1635,
      "end": 1794
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrapI1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1815,
        "end": 1821
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1836,
                  "end": 1840
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "FunctionExpression",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1854,
                      "end": 1857
                    },
                    "generator": true,
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "iter",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1870,
                            "end": 1874
                          },
                          "directive": null,
                          "start": 1870,
                          "end": 1875
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "YieldExpression",
                            "delegate": false,
                            "argument": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 1890,
                              "end": 1891
                            },
                            "start": 1884,
                            "end": 1891
                          },
                          "directive": null,
                          "start": 1884,
                          "end": 1892
                        }
                      ],
                      "start": 1860,
                      "end": 1898
                    },
                    "expression": false,
                    "start": 1844,
                    "end": 1898
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1843,
                  "end": 1901
                },
                "definite": false,
                "start": 1836,
                "end": 1901
              }
            ],
            "declare": false,
            "start": 1830,
            "end": 1902
          }
        ],
        "start": 1824,
        "end": 1904
      },
      "expression": false,
      "start": 1806,
      "end": 1904
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrapI2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1915,
        "end": 1921
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1936,
                  "end": 1940
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "FunctionExpression",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1960,
                      "end": 1963
                    },
                    "generator": true,
                    "async": true,
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "iter",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1976,
                            "end": 1980
                          },
                          "directive": null,
                          "start": 1976,
                          "end": 1981
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "YieldExpression",
                            "delegate": false,
                            "argument": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 1996,
                              "end": 1997
                            },
                            "start": 1990,
                            "end": 1997
                          },
                          "directive": null,
                          "start": 1990,
                          "end": 1998
                        }
                      ],
                      "start": 1966,
                      "end": 2004
                    },
                    "expression": false,
                    "start": 1944,
                    "end": 2004
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1943,
                  "end": 2007
                },
                "definite": false,
                "start": 1936,
                "end": 2007
              }
            ],
            "declare": false,
            "start": 1930,
            "end": 2008
          }
        ],
        "start": 1924,
        "end": 2010
      },
      "expression": false,
      "start": 1906,
      "end": 2010
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo18",
        "optional": false,
        "typeAnnotation": null,
        "start": 2021,
        "end": 2026
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2039,
                  "end": 2040
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2050,
                        "end": 2054
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Yes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2055,
                        "end": 2058
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2050,
                      "end": 2058
                    },
                    "id": null,
                    "generator": false,
                    "start": 2044,
                    "end": 2058
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2043,
                  "end": 2061
                },
                "definite": false,
                "start": 2039,
                "end": 2061
              }
            ],
            "declare": false,
            "start": 2035,
            "end": 2062
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Enum",
              "optional": false,
              "typeAnnotation": null,
              "start": 2072,
              "end": 2076
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2087,
                    "end": 2089
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2092,
                    "end": 2093
                  },
                  "computed": false,
                  "start": 2087,
                  "end": 2093
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2103,
                    "end": 2106
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2109,
                    "end": 2110
                  },
                  "computed": false,
                  "start": 2103,
                  "end": 2110
                }
              ],
              "start": 2077,
              "end": 2117
            },
            "const": false,
            "declare": false,
            "start": 2067,
            "end": 2117
          }
        ],
        "start": 2029,
        "end": 2119
      },
      "expression": false,
      "start": 2012,
      "end": 2119
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2119
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
    "value": "foo0",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 22,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 37,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 47,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 56,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 69,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": "(",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 80,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 90,
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
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 100,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 109,
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
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 122,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 130,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 144,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 160,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 170,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 179,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 192,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 214,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 216,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 237,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 247,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 256,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 269,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 277,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 299,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 322,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 332,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 341,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 354,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 365,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 369,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 375,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 386,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 395,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 404,
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
    "value": "{",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 417,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 440,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 460,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 470,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 479,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 486,
    "end": 487
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 492,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 527,
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
    "value": ";",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 534,
    "end": 535
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 537,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 546,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 553,
    "end": 554
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 559,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 565,
    "end": 566
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 567,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 594,
    "end": 595
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 600,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 607,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 610,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 619,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 626,
    "end": 627
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 632,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 638,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 640,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 646,
    "end": 647
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 656,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 674,
    "end": 675
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 680,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 687,
    "end": 688
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 690,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 699,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 713,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 721,
    "end": 722
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 731,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 740,
    "end": 741
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
    "start": 749,
    "end": 750
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 755,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "}",
    "start": 762,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 765,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 774,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 782,
    "end": 783
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 788,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 802,
    "end": 803
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 812,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 818,
    "end": 819
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 820,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 826,
    "end": 827
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 840,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 868,
    "end": 869
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 874,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "}",
    "start": 881,
    "end": 882
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 884,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 893,
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
    "value": "{",
    "start": 901,
    "end": 902
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 907,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 921,
    "end": 922
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 931,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 937,
    "end": 938
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 939,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 974,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 988,
    "end": 989
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1006,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1052,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1062,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1071,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1085,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1103,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1113,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1135,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1144,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1153,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1167,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1201,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1210,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1219,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1293,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1337,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1345,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1353,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1370,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1373,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1381,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1417,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1425,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1468,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1481,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1519,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1586,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 1595,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1609,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1623,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1635,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "foo17",
    "start": 1644,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1658,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "promise",
    "start": 1664,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1675,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1684,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "promise",
    "start": 1697,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1713,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1725,
    "end": 1730
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1731,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "promise",
    "start": 1744,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1760,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1778,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1784,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1806,
    "end": 1814
  },
  {
    "type": "Identifier",
    "value": "wrapI1",
    "start": 1815,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1830,
    "end": 1835
  },
  {
    "type": "Identifier",
    "value": "iter",
    "start": 1836,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1844,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1854,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "iter",
    "start": 1870,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1884,
    "end": 1889
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1906,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "wrapI2",
    "start": 1915,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1930,
    "end": 1935
  },
  {
    "type": "Identifier",
    "value": "iter",
    "start": 1936,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1944,
    "end": 1949
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1950,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1960,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Identifier",
    "value": "iter",
    "start": 1976,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1990,
    "end": 1995
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2012,
    "end": 2020
  },
  {
    "type": "Identifier",
    "value": "foo18",
    "start": 2021,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2035,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2047,
    "end": 2049
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 2050,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 2055,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 2067,
    "end": 2071
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 2072,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 2087,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 2103,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2118,
    "end": 2119
  }
]
```

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
        "name": "BaseA",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
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
              "start": 25,
              "end": 36
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
                        "start": 47,
                        "end": 53
                      },
                      "start": 45,
                      "end": 53
                    },
                    "start": 44,
                    "end": 53
                  },
                  "readonly": false,
                  "static": false,
                  "start": 37,
                  "end": 53
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 55,
                "end": 58
              },
              "expression": false,
              "start": 36,
              "end": 58
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 18,
            "end": 58
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 77
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 86,
                        "end": 91
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 92,
                          "end": 93
                        }
                      ],
                      "start": 82,
                      "end": 94
                    },
                    "directive": null,
                    "start": 82,
                    "end": 95
                  }
                ],
                "start": 80,
                "end": 97
              },
              "expression": false,
              "start": 77,
              "end": 97
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 63,
            "end": 97
          }
        ],
        "start": 12,
        "end": 99
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 99
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseB",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 112
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
              "start": 129,
              "end": 140
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
                        "start": 151,
                        "end": 157
                      },
                      "start": 149,
                      "end": 157
                    },
                    "start": 148,
                    "end": 157
                  },
                  "readonly": false,
                  "static": false,
                  "start": 141,
                  "end": 157
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 159,
                "end": 162
              },
              "expression": false,
              "start": 140,
              "end": 162
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 119,
            "end": 162
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 181
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseB",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 190,
                        "end": 195
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 196,
                          "end": 197
                        }
                      ],
                      "start": 186,
                      "end": 198
                    },
                    "directive": null,
                    "start": 186,
                    "end": 199
                  }
                ],
                "start": 184,
                "end": 201
              },
              "expression": false,
              "start": 181,
              "end": 201
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 167,
            "end": 201
          }
        ],
        "start": 113,
        "end": 203
      },
      "abstract": false,
      "declare": false,
      "start": 101,
      "end": 203
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseC",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 216
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
              "start": 231,
              "end": 242
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
                        "start": 253,
                        "end": 259
                      },
                      "start": 251,
                      "end": 259
                    },
                    "start": 250,
                    "end": 259
                  },
                  "readonly": false,
                  "static": false,
                  "start": 243,
                  "end": 259
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 261,
                "end": 264
              },
              "expression": false,
              "start": 242,
              "end": 264
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 223,
            "end": 264
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 283
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseC",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 292,
                        "end": 297
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 298,
                          "end": 299
                        }
                      ],
                      "start": 288,
                      "end": 300
                    },
                    "directive": null,
                    "start": 288,
                    "end": 301
                  }
                ],
                "start": 286,
                "end": 303
              },
              "expression": false,
              "start": 283,
              "end": 303
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 269,
            "end": 303
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 329
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseC",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 338,
                        "end": 343
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 344,
                          "end": 345
                        }
                      ],
                      "start": 334,
                      "end": 346
                    },
                    "directive": null,
                    "start": 334,
                    "end": 347
                  }
                ],
                "start": 332,
                "end": 349
              },
              "expression": false,
              "start": 329,
              "end": 349
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 308,
            "end": 349
          }
        ],
        "start": 217,
        "end": 351
      },
      "abstract": false,
      "declare": false,
      "start": 205,
      "end": 351
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedA",
        "optional": false,
        "typeAnnotation": null,
        "start": 359,
        "end": 367
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseA",
        "optional": false,
        "typeAnnotation": null,
        "start": 376,
        "end": 381
      },
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
              "start": 388,
              "end": 399
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
                        "start": 410,
                        "end": 416
                      },
                      "start": 408,
                      "end": 416
                    },
                    "start": 407,
                    "end": 416
                  },
                  "readonly": false,
                  "static": false,
                  "start": 400,
                  "end": 416
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 420,
                        "end": 425
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 426,
                          "end": 427
                        }
                      ],
                      "optional": false,
                      "start": 420,
                      "end": 428
                    },
                    "directive": null,
                    "start": 420,
                    "end": 429
                  }
                ],
                "start": 418,
                "end": 431
              },
              "expression": false,
              "start": 399,
              "end": 431
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 388,
            "end": 431
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 436,
              "end": 450
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DerivedA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 459,
                        "end": 467
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 468,
                          "end": 469
                        }
                      ],
                      "start": 455,
                      "end": 470
                    },
                    "directive": null,
                    "start": 455,
                    "end": 471
                  }
                ],
                "start": 453,
                "end": 473
              },
              "expression": false,
              "start": 450,
              "end": 473
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 436,
            "end": 473
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createBaseInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 478,
              "end": 496
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 505,
                        "end": 510
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 6,
                          "raw": "6",
                          "start": 511,
                          "end": 512
                        }
                      ],
                      "start": 501,
                      "end": 513
                    },
                    "directive": null,
                    "start": 501,
                    "end": 514
                  }
                ],
                "start": 499,
                "end": 516
              },
              "expression": false,
              "start": 496,
              "end": 516
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 478,
            "end": 516
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticBaseInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 528,
              "end": 546
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 555,
                        "end": 560
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 7,
                          "raw": "7",
                          "start": 561,
                          "end": 562
                        }
                      ],
                      "start": 551,
                      "end": 563
                    },
                    "directive": null,
                    "start": 551,
                    "end": 564
                  }
                ],
                "start": 549,
                "end": 566
              },
              "expression": false,
              "start": 546,
              "end": 566
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 521,
            "end": 566
          }
        ],
        "start": 382,
        "end": 568
      },
      "abstract": false,
      "declare": false,
      "start": 353,
      "end": 568
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedB",
        "optional": false,
        "typeAnnotation": null,
        "start": 576,
        "end": 584
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseB",
        "optional": false,
        "typeAnnotation": null,
        "start": 593,
        "end": 598
      },
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
              "start": 605,
              "end": 616
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
                        "start": 627,
                        "end": 633
                      },
                      "start": 625,
                      "end": 633
                    },
                    "start": 624,
                    "end": 633
                  },
                  "readonly": false,
                  "static": false,
                  "start": 617,
                  "end": 633
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 637,
                        "end": 642
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 643,
                          "end": 644
                        }
                      ],
                      "optional": false,
                      "start": 637,
                      "end": 645
                    },
                    "directive": null,
                    "start": 637,
                    "end": 646
                  }
                ],
                "start": 635,
                "end": 648
              },
              "expression": false,
              "start": 616,
              "end": 648
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 605,
            "end": 648
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 667
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DerivedB",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 676,
                        "end": 684
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 7,
                          "raw": "7",
                          "start": 685,
                          "end": 686
                        }
                      ],
                      "start": 672,
                      "end": 687
                    },
                    "directive": null,
                    "start": 672,
                    "end": 688
                  }
                ],
                "start": 670,
                "end": 690
              },
              "expression": false,
              "start": 667,
              "end": 690
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 653,
            "end": 690
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createBaseInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 695,
              "end": 713
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseB",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 722,
                        "end": 727
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 728,
                          "end": 729
                        }
                      ],
                      "start": 718,
                      "end": 730
                    },
                    "directive": null,
                    "start": 718,
                    "end": 731
                  }
                ],
                "start": 716,
                "end": 733
              },
              "expression": false,
              "start": 713,
              "end": 733
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 695,
            "end": 733
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticBaseInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 751,
              "end": 769
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseB",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 778,
                        "end": 783
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 784,
                          "end": 785
                        }
                      ],
                      "start": 774,
                      "end": 786
                    },
                    "directive": null,
                    "start": 774,
                    "end": 787
                  }
                ],
                "start": 772,
                "end": 789
              },
              "expression": false,
              "start": 769,
              "end": 789
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 744,
            "end": 789
          }
        ],
        "start": 599,
        "end": 797
      },
      "abstract": false,
      "declare": false,
      "start": 570,
      "end": 797
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedC",
        "optional": false,
        "typeAnnotation": null,
        "start": 805,
        "end": 813
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseC",
        "optional": false,
        "typeAnnotation": null,
        "start": 822,
        "end": 827
      },
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
              "start": 843,
              "end": 854
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
                        "start": 865,
                        "end": 871
                      },
                      "start": 863,
                      "end": 871
                    },
                    "start": 862,
                    "end": 871
                  },
                  "readonly": false,
                  "static": false,
                  "start": 855,
                  "end": 871
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 875,
                        "end": 880
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 881,
                          "end": 882
                        }
                      ],
                      "optional": false,
                      "start": 875,
                      "end": 883
                    },
                    "directive": null,
                    "start": 875,
                    "end": 884
                  }
                ],
                "start": 873,
                "end": 886
              },
              "expression": false,
              "start": 854,
              "end": 886
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 843,
            "end": 886
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 891,
              "end": 905
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DerivedC",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 914,
                        "end": 922
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 923,
                          "end": 924
                        }
                      ],
                      "start": 910,
                      "end": 925
                    },
                    "directive": null,
                    "start": 910,
                    "end": 926
                  }
                ],
                "start": 908,
                "end": 928
              },
              "expression": false,
              "start": 905,
              "end": 928
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 891,
            "end": 928
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createBaseInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 933,
              "end": 951
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseC",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 960,
                        "end": 965
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 966,
                          "end": 968
                        }
                      ],
                      "start": 956,
                      "end": 969
                    },
                    "directive": null,
                    "start": 956,
                    "end": 970
                  }
                ],
                "start": 954,
                "end": 972
              },
              "expression": false,
              "start": 951,
              "end": 972
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 933,
            "end": 972
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticBaseInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 993,
              "end": 1011
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseC",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1020,
                        "end": 1025
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 11,
                          "raw": "11",
                          "start": 1026,
                          "end": 1028
                        }
                      ],
                      "start": 1016,
                      "end": 1029
                    },
                    "directive": null,
                    "start": 1016,
                    "end": 1030
                  }
                ],
                "start": 1014,
                "end": 1032
              },
              "expression": false,
              "start": 1011,
              "end": 1032
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 986,
            "end": 1032
          }
        ],
        "start": 828,
        "end": 1043
      },
      "abstract": false,
      "declare": false,
      "start": 799,
      "end": 1043
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
            "name": "ba",
            "optional": false,
            "typeAnnotation": null,
            "start": 1049,
            "end": 1051
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BaseA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1058,
              "end": 1063
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1064,
                "end": 1065
              }
            ],
            "start": 1054,
            "end": 1066
          },
          "definite": false,
          "start": 1049,
          "end": 1066
        }
      ],
      "declare": false,
      "start": 1045,
      "end": 1067
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
            "name": "bb",
            "optional": false,
            "typeAnnotation": null,
            "start": 1072,
            "end": 1074
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BaseB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1081,
              "end": 1086
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1087,
                "end": 1088
              }
            ],
            "start": 1077,
            "end": 1089
          },
          "definite": false,
          "start": 1072,
          "end": 1089
        }
      ],
      "declare": false,
      "start": 1068,
      "end": 1090
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
            "name": "bc",
            "optional": false,
            "typeAnnotation": null,
            "start": 1104,
            "end": 1106
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BaseC",
              "optional": false,
              "typeAnnotation": null,
              "start": 1113,
              "end": 1118
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1119,
                "end": 1120
              }
            ],
            "start": 1109,
            "end": 1121
          },
          "definite": false,
          "start": 1104,
          "end": 1121
        }
      ],
      "declare": false,
      "start": 1100,
      "end": 1122
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
            "name": "da",
            "optional": false,
            "typeAnnotation": null,
            "start": 1137,
            "end": 1139
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "DerivedA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1146,
              "end": 1154
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1155,
                "end": 1156
              }
            ],
            "start": 1142,
            "end": 1157
          },
          "definite": false,
          "start": 1137,
          "end": 1157
        }
      ],
      "declare": false,
      "start": 1133,
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
            "name": "db",
            "optional": false,
            "typeAnnotation": null,
            "start": 1163,
            "end": 1165
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "DerivedB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1172,
              "end": 1180
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1181,
                "end": 1182
              }
            ],
            "start": 1168,
            "end": 1183
          },
          "definite": false,
          "start": 1163,
          "end": 1183
        }
      ],
      "declare": false,
      "start": 1159,
      "end": 1184
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
            "name": "dc",
            "optional": false,
            "typeAnnotation": null,
            "start": 1189,
            "end": 1191
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "DerivedC",
              "optional": false,
              "typeAnnotation": null,
              "start": 1198,
              "end": 1206
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1207,
                "end": 1208
              }
            ],
            "start": 1194,
            "end": 1209
          },
          "definite": false,
          "start": 1189,
          "end": 1209
        }
      ],
      "declare": false,
      "start": 1185,
      "end": 1210
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1210
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
    "value": "BaseA",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 18,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 25,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 37,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "createInstance",
    "start": 63,
    "end": 77
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
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 82,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "BaseA",
    "start": 86,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 91,
    "end": 92
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 101,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "BaseB",
    "start": 107,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 119,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 129,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 141,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "createInstance",
    "start": 167,
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
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 186,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "BaseB",
    "start": 190,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 205,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "BaseC",
    "start": 211,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 223,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 231,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 243,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 253,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "}",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "createInstance",
    "start": 269,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 288,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "BaseC",
    "start": 292,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 308,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "staticInstance",
    "start": 315,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 332,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 334,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "BaseC",
    "start": 338,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 343,
    "end": 344
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 353,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "DerivedA",
    "start": 359,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 368,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "BaseA",
    "start": 376,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 388,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 400,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 410,
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
    "value": "{",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 420,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "createInstance",
    "start": 436,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 453,
    "end": 454
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 455,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "DerivedA",
    "start": 459,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 467,
    "end": 468
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "createBaseInstance",
    "start": 478,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
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
    "value": "{",
    "start": 499,
    "end": 500
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 501,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "BaseA",
    "start": 505,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 510,
    "end": 511
  },
  {
    "type": "Numeric",
    "value": "6",
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
    "type": "Punctuator",
    "value": "}",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 521,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "staticBaseInstance",
    "start": 528,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 549,
    "end": 550
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 551,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "BaseA",
    "start": 555,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 567,
    "end": 568
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 570,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "DerivedB",
    "start": 576,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 585,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "BaseB",
    "start": 593,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 605,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 616,
    "end": 617
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 617,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 627,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 635,
    "end": 636
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 637,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "createInstance",
    "start": 653,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 670,
    "end": 671
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 672,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "DerivedB",
    "start": 676,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 684,
    "end": 685
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "createBaseInstance",
    "start": 695,
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
    "value": "{",
    "start": 716,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 718,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "BaseB",
    "start": 722,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 727,
    "end": 728
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 728,
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
    "value": ";",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 732,
    "end": 733
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 744,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "staticBaseInstance",
    "start": 751,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 772,
    "end": 773
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 774,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "BaseB",
    "start": 778,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 783,
    "end": 784
  },
  {
    "type": "Numeric",
    "value": "9",
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
    "type": "Punctuator",
    "value": "}",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 796,
    "end": 797
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 799,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "DerivedC",
    "start": 805,
    "end": 813
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 814,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "BaseC",
    "start": 822,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 843,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 854,
    "end": 855
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 855,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 865,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 873,
    "end": 874
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 875,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "createInstance",
    "start": 891,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 908,
    "end": 909
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 910,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "DerivedC",
    "start": 914,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 922,
    "end": 923
  },
  {
    "type": "Numeric",
    "value": "9",
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
    "type": "Punctuator",
    "value": "}",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "createBaseInstance",
    "start": 933,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 954,
    "end": 955
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 956,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "BaseC",
    "start": 960,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 965,
    "end": 966
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 966,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 971,
    "end": 972
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 986,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "staticBaseInstance",
    "start": 993,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1016,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "BaseC",
    "start": 1020,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 1026,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1045,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "ba",
    "start": 1049,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1054,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "BaseA",
    "start": 1058,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1068,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 1072,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1077,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "BaseB",
    "start": 1081,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1100,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "bc",
    "start": 1104,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1109,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "BaseC",
    "start": 1113,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1133,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "da",
    "start": 1137,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1142,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "DerivedA",
    "start": 1146,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1155,
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
    "start": 1159,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 1163,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1168,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "DerivedB",
    "start": 1172,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1185,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "dc",
    "start": 1189,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1194,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "DerivedC",
    "start": 1198,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1209,
    "end": 1210
  }
]
```

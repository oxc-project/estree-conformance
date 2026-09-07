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
        "name": "A1",
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
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 32
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 38,
                      "end": 44
                    },
                    "start": 36,
                    "end": 44
                  },
                  "start": 33,
                  "end": 44
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 46,
                "end": 48
              },
              "expression": false,
              "start": 32,
              "end": 48
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 13,
            "end": 48
          }
        ],
        "start": 9,
        "end": 50
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 59
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
              "start": 64,
              "end": 75
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 81,
                      "end": 87
                    },
                    "start": 79,
                    "end": 87
                  },
                  "start": 76,
                  "end": 87
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 89,
                "end": 91
              },
              "expression": false,
              "start": 75,
              "end": 91
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 64,
            "end": 91
          }
        ],
        "start": 60,
        "end": 93
      },
      "abstract": false,
      "declare": false,
      "start": 51,
      "end": 93
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
            "name": "Cls1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 122,
                      "end": 124
                    },
                    "typeArguments": null,
                    "start": 115,
                    "end": 124
                  },
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 134,
                      "end": 136
                    },
                    "typeArguments": null,
                    "start": 127,
                    "end": 136
                  }
                ],
                "start": 115,
                "end": 136
              },
              "start": 113,
              "end": 136
            },
            "start": 109,
            "end": 136
          },
          "init": null,
          "definite": false,
          "start": 109,
          "end": 136
        }
      ],
      "declare": true,
      "start": 95,
      "end": 137
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cls1",
          "optional": false,
          "typeAnnotation": null,
          "start": 143,
          "end": 147
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 148,
            "end": 150
          }
        ],
        "start": 139,
        "end": 151
      },
      "directive": null,
      "start": 139,
      "end": 152
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 176
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cls1",
        "optional": false,
        "typeAnnotation": null,
        "start": 185,
        "end": 189
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 190,
        "end": 192
      },
      "abstract": false,
      "declare": false,
      "start": 162,
      "end": 192
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
        "end": 211
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
              "start": 216,
              "end": 227
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 233,
                      "end": 239
                    },
                    "start": 231,
                    "end": 239
                  },
                  "start": 228,
                  "end": 239
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 241,
                "end": 243
              },
              "expression": false,
              "start": 227,
              "end": 243
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 216,
            "end": 243
          }
        ],
        "start": 212,
        "end": 245
      },
      "abstract": false,
      "declare": false,
      "start": 203,
      "end": 245
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 252,
        "end": 254
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
              "start": 267,
              "end": 278
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 284,
                      "end": 290
                    },
                    "start": 282,
                    "end": 290
                  },
                  "start": 279,
                  "end": 290
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 292,
                "end": 294
              },
              "expression": false,
              "start": 278,
              "end": 294
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 259,
            "end": 294
          }
        ],
        "start": 255,
        "end": 296
      },
      "abstract": false,
      "declare": false,
      "start": 246,
      "end": 296
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
            "name": "Cls2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 325,
                      "end": 327
                    },
                    "typeArguments": null,
                    "start": 318,
                    "end": 327
                  },
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 337,
                      "end": 339
                    },
                    "typeArguments": null,
                    "start": 330,
                    "end": 339
                  }
                ],
                "start": 318,
                "end": 339
              },
              "start": 316,
              "end": 339
            },
            "start": 312,
            "end": 339
          },
          "init": null,
          "definite": false,
          "start": 312,
          "end": 339
        }
      ],
      "declare": true,
      "start": 298,
      "end": 340
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cls2",
          "optional": false,
          "typeAnnotation": null,
          "start": 346,
          "end": 350
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 351,
            "end": 353
          }
        ],
        "start": 342,
        "end": 354
      },
      "directive": null,
      "start": 342,
      "end": 355
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 371,
        "end": 379
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cls2",
        "optional": false,
        "typeAnnotation": null,
        "start": 388,
        "end": 392
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 393,
        "end": 395
      },
      "abstract": false,
      "declare": false,
      "start": 365,
      "end": 395
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "j1",
        "optional": false,
        "typeAnnotation": null,
        "start": 485,
        "end": 487
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
              "start": 500,
              "end": 511
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                    "start": 515,
                    "end": 519
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 521,
                        "end": 524
                      },
                      "start": 521,
                      "end": 526
                    },
                    "start": 519,
                    "end": 526
                  },
                  "value": null,
                  "start": 512,
                  "end": 526
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 511,
              "end": 528
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 492,
            "end": 528
          }
        ],
        "start": 488,
        "end": 530
      },
      "abstract": true,
      "declare": true,
      "start": 462,
      "end": 530
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "j2",
        "optional": false,
        "typeAnnotation": null,
        "start": 554,
        "end": 556
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
              "start": 569,
              "end": 580
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                    "start": 584,
                    "end": 588
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 590,
                        "end": 593
                      },
                      "start": 590,
                      "end": 595
                    },
                    "start": 588,
                    "end": 595
                  },
                  "value": null,
                  "start": 581,
                  "end": 595
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 580,
              "end": 597
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 561,
            "end": 597
          }
        ],
        "start": 557,
        "end": 599
      },
      "abstract": true,
      "declare": true,
      "start": 531,
      "end": 599
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
            "name": "jS",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "j1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 625,
                      "end": 627
                    },
                    "typeArguments": null,
                    "start": 618,
                    "end": 627
                  },
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "j2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 637,
                      "end": 639
                    },
                    "typeArguments": null,
                    "start": 630,
                    "end": 639
                  }
                ],
                "start": 618,
                "end": 639
              },
              "start": 616,
              "end": 639
            },
            "start": 614,
            "end": 639
          },
          "init": null,
          "definite": false,
          "start": 614,
          "end": 639
        }
      ],
      "declare": true,
      "start": 600,
      "end": 640
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "j0",
        "optional": false,
        "typeAnnotation": null,
        "start": 655,
        "end": 657
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "jS",
        "optional": false,
        "typeAnnotation": null,
        "start": 666,
        "end": 668
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 669,
        "end": 671
      },
      "abstract": false,
      "declare": true,
      "start": 641,
      "end": 671
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "j3",
        "optional": false,
        "typeAnnotation": null,
        "start": 697,
        "end": 699
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
              "start": 712,
              "end": 723
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 727,
                    "end": 731
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 733,
                        "end": 736
                      },
                      "start": 733,
                      "end": 738
                    },
                    "start": 731,
                    "end": 738
                  },
                  "value": null,
                  "start": 724,
                  "end": 738
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 740,
                "end": 742
              },
              "expression": false,
              "start": 723,
              "end": 742
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 704,
            "end": 742
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 745,
              "end": 752
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "j4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 776,
                      "end": 778
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
                            "start": 795,
                            "end": 806
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
                                "type": "RestElement",
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 810,
                                  "end": 814
                                },
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 816,
                                      "end": 819
                                    },
                                    "start": 816,
                                    "end": 821
                                  },
                                  "start": 814,
                                  "end": 821
                                },
                                "value": null,
                                "start": 807,
                                "end": 821
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 823,
                              "end": 825
                            },
                            "expression": false,
                            "start": 806,
                            "end": 825
                          },
                          "kind": "constructor",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 787,
                          "end": 825
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "method2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 832,
                            "end": 839
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
                                  "kind": "const",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "id": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "jS",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSIntersectionType",
                                            "types": [
                                              {
                                                "type": "TSTypeQuery",
                                                "exprName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "j3",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 869,
                                                  "end": 871
                                                },
                                                "typeArguments": null,
                                                "start": 862,
                                                "end": 871
                                              },
                                              {
                                                "type": "TSTypeQuery",
                                                "exprName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "j4",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 881,
                                                  "end": 883
                                                },
                                                "typeArguments": null,
                                                "start": 874,
                                                "end": 883
                                              }
                                            ],
                                            "start": 862,
                                            "end": 883
                                          },
                                          "start": 860,
                                          "end": 883
                                        },
                                        "start": 858,
                                        "end": 883
                                      },
                                      "init": {
                                        "type": "TSNonNullExpression",
                                        "expression": {
                                          "type": "Literal",
                                          "value": null,
                                          "raw": "null",
                                          "start": 886,
                                          "end": 890
                                        },
                                        "start": 886,
                                        "end": 891
                                      },
                                      "definite": false,
                                      "start": 858,
                                      "end": 891
                                    }
                                  ],
                                  "declare": false,
                                  "start": 852,
                                  "end": 892
                                },
                                {
                                  "type": "ClassDeclaration",
                                  "decorators": [],
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "j0",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 934,
                                    "end": 936
                                  },
                                  "typeParameters": null,
                                  "superClass": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "jS",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 945,
                                    "end": 947
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
                                          "name": "method1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 960,
                                          "end": 967
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
                                            "body": [],
                                            "start": 970,
                                            "end": 972
                                          },
                                          "expression": false,
                                          "start": 967,
                                          "end": 972
                                        },
                                        "kind": "method",
                                        "computed": false,
                                        "static": false,
                                        "override": false,
                                        "optional": false,
                                        "accessibility": null,
                                        "start": 960,
                                        "end": 972
                                      },
                                      {
                                        "type": "MethodDefinition",
                                        "decorators": [],
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "method2",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 983,
                                          "end": 990
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
                                            "body": [],
                                            "start": 993,
                                            "end": 995
                                          },
                                          "expression": false,
                                          "start": 990,
                                          "end": 995
                                        },
                                        "kind": "method",
                                        "computed": false,
                                        "static": false,
                                        "override": false,
                                        "optional": false,
                                        "accessibility": null,
                                        "start": 983,
                                        "end": 995
                                      }
                                    ],
                                    "start": 948,
                                    "end": 1005
                                  },
                                  "abstract": false,
                                  "declare": false,
                                  "start": 928,
                                  "end": 1005
                                }
                              ],
                              "start": 842,
                              "end": 1013
                            },
                            "expression": false,
                            "start": 839,
                            "end": 1013
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 832,
                          "end": 1013
                        }
                      ],
                      "start": 779,
                      "end": 1019
                    },
                    "abstract": true,
                    "declare": false,
                    "start": 761,
                    "end": 1019
                  }
                ],
                "start": 755,
                "end": 1023
              },
              "expression": false,
              "start": 752,
              "end": 1023
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 745,
            "end": 1023
          }
        ],
        "start": 700,
        "end": 1025
      },
      "abstract": true,
      "declare": false,
      "start": 682,
      "end": 1025
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "j5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1042,
        "end": 1044
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
              "start": 1057,
              "end": 1068
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1072,
                    "end": 1076
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1078,
                        "end": 1081
                      },
                      "start": 1078,
                      "end": 1083
                    },
                    "start": 1076,
                    "end": 1083
                  },
                  "value": null,
                  "start": 1069,
                  "end": 1083
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1085,
                "end": 1087
              },
              "expression": false,
              "start": 1068,
              "end": 1087
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1049,
            "end": 1087
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1090,
              "end": 1097
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "j6",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1121,
                      "end": 1123
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
                            "start": 1140,
                            "end": 1151
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
                                "type": "RestElement",
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1155,
                                  "end": 1159
                                },
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 1161,
                                      "end": 1164
                                    },
                                    "start": 1161,
                                    "end": 1166
                                  },
                                  "start": 1159,
                                  "end": 1166
                                },
                                "value": null,
                                "start": 1152,
                                "end": 1166
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 1168,
                              "end": 1170
                            },
                            "expression": false,
                            "start": 1151,
                            "end": 1170
                          },
                          "kind": "constructor",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 1132,
                          "end": 1170
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "method2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1177,
                            "end": 1184
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
                              "body": [],
                              "start": 1187,
                              "end": 1189
                            },
                            "expression": false,
                            "start": 1184,
                            "end": 1189
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 1177,
                          "end": 1189
                        }
                      ],
                      "start": 1124,
                      "end": 1195
                    },
                    "abstract": true,
                    "declare": false,
                    "start": 1106,
                    "end": 1195
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
                          "name": "jS",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSIntersectionType",
                              "types": [
                                {
                                  "type": "TSTypeQuery",
                                  "exprName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "j5",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1217,
                                    "end": 1219
                                  },
                                  "typeArguments": null,
                                  "start": 1210,
                                  "end": 1219
                                },
                                {
                                  "type": "TSTypeQuery",
                                  "exprName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "j6",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1229,
                                    "end": 1231
                                  },
                                  "typeArguments": null,
                                  "start": 1222,
                                  "end": 1231
                                }
                              ],
                              "start": 1210,
                              "end": 1231
                            },
                            "start": 1208,
                            "end": 1231
                          },
                          "start": 1206,
                          "end": 1231
                        },
                        "init": {
                          "type": "TSNonNullExpression",
                          "expression": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 1234,
                            "end": 1238
                          },
                          "start": 1234,
                          "end": 1239
                        },
                        "definite": false,
                        "start": 1206,
                        "end": 1239
                      }
                    ],
                    "declare": false,
                    "start": 1200,
                    "end": 1240
                  },
                  {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "j0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1316,
                      "end": 1318
                    },
                    "typeParameters": null,
                    "superClass": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "jS",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1327,
                      "end": 1329
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
                            "name": "method1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1338,
                            "end": 1345
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
                              "body": [],
                              "start": 1348,
                              "end": 1350
                            },
                            "expression": false,
                            "start": 1345,
                            "end": 1350
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 1338,
                          "end": 1350
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "method2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1357,
                            "end": 1364
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
                              "body": [],
                              "start": 1367,
                              "end": 1369
                            },
                            "expression": false,
                            "start": 1364,
                            "end": 1369
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 1357,
                          "end": 1369
                        }
                      ],
                      "start": 1330,
                      "end": 1375
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1310,
                    "end": 1375
                  }
                ],
                "start": 1100,
                "end": 1379
              },
              "expression": false,
              "start": 1097,
              "end": 1379
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1090,
            "end": 1379
          }
        ],
        "start": 1045,
        "end": 1381
      },
      "abstract": true,
      "declare": false,
      "start": 1027,
      "end": 1381
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "j7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1398,
        "end": 1400
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
              "start": 1413,
              "end": 1424
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1430,
                      "end": 1436
                    },
                    "start": 1428,
                    "end": 1436
                  },
                  "start": 1425,
                  "end": 1436
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1438,
                "end": 1440
              },
              "expression": false,
              "start": 1424,
              "end": 1440
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1405,
            "end": 1440
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1443,
              "end": 1450
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "j8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1474,
                      "end": 1476
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
                            "start": 1493,
                            "end": 1504
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
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1510,
                                    "end": 1516
                                  },
                                  "start": 1508,
                                  "end": 1516
                                },
                                "start": 1505,
                                "end": 1516
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 1518,
                              "end": 1520
                            },
                            "expression": false,
                            "start": 1504,
                            "end": 1520
                          },
                          "kind": "constructor",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 1485,
                          "end": 1520
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "method2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1527,
                            "end": 1534
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
                                  "kind": "const",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "id": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "jS",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSIntersectionType",
                                            "types": [
                                              {
                                                "type": "TSTypeQuery",
                                                "exprName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "j7",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1564,
                                                  "end": 1566
                                                },
                                                "typeArguments": null,
                                                "start": 1557,
                                                "end": 1566
                                              },
                                              {
                                                "type": "TSTypeQuery",
                                                "exprName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "j8",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1576,
                                                  "end": 1578
                                                },
                                                "typeArguments": null,
                                                "start": 1569,
                                                "end": 1578
                                              }
                                            ],
                                            "start": 1557,
                                            "end": 1578
                                          },
                                          "start": 1555,
                                          "end": 1578
                                        },
                                        "start": 1553,
                                        "end": 1578
                                      },
                                      "init": {
                                        "type": "TSNonNullExpression",
                                        "expression": {
                                          "type": "Literal",
                                          "value": null,
                                          "raw": "null",
                                          "start": 1581,
                                          "end": 1585
                                        },
                                        "start": 1581,
                                        "end": 1586
                                      },
                                      "definite": false,
                                      "start": 1553,
                                      "end": 1586
                                    }
                                  ],
                                  "declare": false,
                                  "start": 1547,
                                  "end": 1587
                                },
                                {
                                  "type": "ClassDeclaration",
                                  "decorators": [],
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "j0",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1620,
                                    "end": 1622
                                  },
                                  "typeParameters": null,
                                  "superClass": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "jS",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1631,
                                    "end": 1633
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
                                          "name": "method1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1646,
                                          "end": 1653
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
                                            "body": [],
                                            "start": 1656,
                                            "end": 1658
                                          },
                                          "expression": false,
                                          "start": 1653,
                                          "end": 1658
                                        },
                                        "kind": "method",
                                        "computed": false,
                                        "static": false,
                                        "override": false,
                                        "optional": false,
                                        "accessibility": null,
                                        "start": 1646,
                                        "end": 1658
                                      },
                                      {
                                        "type": "MethodDefinition",
                                        "decorators": [],
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "method2",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1669,
                                          "end": 1676
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
                                            "body": [],
                                            "start": 1679,
                                            "end": 1681
                                          },
                                          "expression": false,
                                          "start": 1676,
                                          "end": 1681
                                        },
                                        "kind": "method",
                                        "computed": false,
                                        "static": false,
                                        "override": false,
                                        "optional": false,
                                        "accessibility": null,
                                        "start": 1669,
                                        "end": 1681
                                      }
                                    ],
                                    "start": 1634,
                                    "end": 1691
                                  },
                                  "abstract": false,
                                  "declare": false,
                                  "start": 1614,
                                  "end": 1691
                                }
                              ],
                              "start": 1537,
                              "end": 1699
                            },
                            "expression": false,
                            "start": 1534,
                            "end": 1699
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 1527,
                          "end": 1699
                        }
                      ],
                      "start": 1477,
                      "end": 1705
                    },
                    "abstract": true,
                    "declare": false,
                    "start": 1459,
                    "end": 1705
                  }
                ],
                "start": 1453,
                "end": 1709
              },
              "expression": false,
              "start": 1450,
              "end": 1709
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1443,
            "end": 1709
          }
        ],
        "start": 1401,
        "end": 1711
      },
      "abstract": true,
      "declare": false,
      "start": 1383,
      "end": 1711
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "j9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1728,
        "end": 1730
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
              "start": 1743,
              "end": 1754
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1760,
                      "end": 1766
                    },
                    "start": 1758,
                    "end": 1766
                  },
                  "start": 1755,
                  "end": 1766
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1768,
                "end": 1770
              },
              "expression": false,
              "start": 1754,
              "end": 1770
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1735,
            "end": 1770
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1773,
              "end": 1780
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "j10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1804,
                      "end": 1807
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
                            "start": 1824,
                            "end": 1835
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
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1841,
                                    "end": 1847
                                  },
                                  "start": 1839,
                                  "end": 1847
                                },
                                "start": 1836,
                                "end": 1847
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 1849,
                              "end": 1851
                            },
                            "expression": false,
                            "start": 1835,
                            "end": 1851
                          },
                          "kind": "constructor",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 1816,
                          "end": 1851
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "method2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1858,
                            "end": 1865
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
                              "body": [],
                              "start": 1868,
                              "end": 1870
                            },
                            "expression": false,
                            "start": 1865,
                            "end": 1870
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 1858,
                          "end": 1870
                        }
                      ],
                      "start": 1808,
                      "end": 1876
                    },
                    "abstract": true,
                    "declare": false,
                    "start": 1789,
                    "end": 1876
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
                          "name": "jS",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSIntersectionType",
                              "types": [
                                {
                                  "type": "TSTypeQuery",
                                  "exprName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "j9",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1898,
                                    "end": 1900
                                  },
                                  "typeArguments": null,
                                  "start": 1891,
                                  "end": 1900
                                },
                                {
                                  "type": "TSTypeQuery",
                                  "exprName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "j10",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1910,
                                    "end": 1913
                                  },
                                  "typeArguments": null,
                                  "start": 1903,
                                  "end": 1913
                                }
                              ],
                              "start": 1891,
                              "end": 1913
                            },
                            "start": 1889,
                            "end": 1913
                          },
                          "start": 1887,
                          "end": 1913
                        },
                        "init": {
                          "type": "TSNonNullExpression",
                          "expression": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 1916,
                            "end": 1920
                          },
                          "start": 1916,
                          "end": 1921
                        },
                        "definite": false,
                        "start": 1887,
                        "end": 1921
                      }
                    ],
                    "declare": false,
                    "start": 1881,
                    "end": 1922
                  },
                  {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "j0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1947,
                      "end": 1949
                    },
                    "typeParameters": null,
                    "superClass": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "jS",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1958,
                      "end": 1960
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
                            "name": "method1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1969,
                            "end": 1976
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
                              "body": [],
                              "start": 1979,
                              "end": 1981
                            },
                            "expression": false,
                            "start": 1976,
                            "end": 1981
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 1969,
                          "end": 1981
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "method2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1988,
                            "end": 1995
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
                              "body": [],
                              "start": 1998,
                              "end": 2000
                            },
                            "expression": false,
                            "start": 1995,
                            "end": 2000
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 1988,
                          "end": 2000
                        }
                      ],
                      "start": 1961,
                      "end": 2006
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1941,
                    "end": 2006
                  }
                ],
                "start": 1783,
                "end": 2010
              },
              "expression": false,
              "start": 1780,
              "end": 2010
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1773,
            "end": 2010
          }
        ],
        "start": 1731,
        "end": 2012
      },
      "abstract": true,
      "declare": false,
      "start": 1713,
      "end": 2012
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "j11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2029,
        "end": 2032
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
              "start": 2045,
              "end": 2056
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2062,
                      "end": 2068
                    },
                    "start": 2060,
                    "end": 2068
                  },
                  "start": 2057,
                  "end": 2068
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2070,
                "end": 2072
              },
              "expression": false,
              "start": 2056,
              "end": 2072
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2037,
            "end": 2072
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "j12",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2103,
                  "end": 2106
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
                        "start": 2123,
                        "end": 2134
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
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2140,
                                "end": 2146
                              },
                              "start": 2138,
                              "end": 2146
                            },
                            "start": 2135,
                            "end": 2146
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 2148,
                          "end": 2150
                        },
                        "expression": false,
                        "start": 2134,
                        "end": 2150
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 2115,
                      "end": 2150
                    },
                    {
                      "type": "StaticBlock",
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
                                "name": "jS",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSIntersectionType",
                                    "types": [
                                      {
                                        "type": "TSTypeQuery",
                                        "exprName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "j11",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2191,
                                          "end": 2194
                                        },
                                        "typeArguments": null,
                                        "start": 2184,
                                        "end": 2194
                                      },
                                      {
                                        "type": "TSTypeQuery",
                                        "exprName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "j12",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2204,
                                          "end": 2207
                                        },
                                        "typeArguments": null,
                                        "start": 2197,
                                        "end": 2207
                                      }
                                    ],
                                    "start": 2184,
                                    "end": 2207
                                  },
                                  "start": 2182,
                                  "end": 2207
                                },
                                "start": 2180,
                                "end": 2207
                              },
                              "init": {
                                "type": "TSNonNullExpression",
                                "expression": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 2210,
                                  "end": 2214
                                },
                                "start": 2210,
                                "end": 2215
                              },
                              "definite": false,
                              "start": 2180,
                              "end": 2215
                            }
                          ],
                          "declare": false,
                          "start": 2174,
                          "end": 2216
                        },
                        {
                          "type": "ClassDeclaration",
                          "decorators": [],
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "j0",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2246,
                            "end": 2248
                          },
                          "typeParameters": null,
                          "superClass": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "jS",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2257,
                            "end": 2259
                          },
                          "superTypeArguments": null,
                          "implements": [],
                          "body": {
                            "type": "ClassBody",
                            "body": [],
                            "start": 2260,
                            "end": 2262
                          },
                          "abstract": false,
                          "declare": false,
                          "start": 2240,
                          "end": 2262
                        }
                      ],
                      "start": 2157,
                      "end": 2270
                    }
                  ],
                  "start": 2107,
                  "end": 2276
                },
                "abstract": true,
                "declare": false,
                "start": 2088,
                "end": 2276
              }
            ],
            "start": 2075,
            "end": 2280
          }
        ],
        "start": 2033,
        "end": 2282
      },
      "abstract": true,
      "declare": false,
      "start": 2014,
      "end": 2282
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "j13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2299,
        "end": 2302
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
              "start": 2315,
              "end": 2326
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2332,
                      "end": 2338
                    },
                    "start": 2330,
                    "end": 2338
                  },
                  "start": 2327,
                  "end": 2338
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2340,
                "end": 2342
              },
              "expression": false,
              "start": 2326,
              "end": 2342
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2307,
            "end": 2342
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "j14",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2373,
                  "end": 2376
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
                        "start": 2393,
                        "end": 2404
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
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2410,
                                "end": 2416
                              },
                              "start": 2408,
                              "end": 2416
                            },
                            "start": 2405,
                            "end": 2416
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 2418,
                          "end": 2420
                        },
                        "expression": false,
                        "start": 2404,
                        "end": 2420
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 2385,
                      "end": 2420
                    }
                  ],
                  "start": 2377,
                  "end": 2426
                },
                "abstract": true,
                "declare": false,
                "start": 2358,
                "end": 2426
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
                      "name": "jS",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSIntersectionType",
                          "types": [
                            {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "j13",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2448,
                                "end": 2451
                              },
                              "typeArguments": null,
                              "start": 2441,
                              "end": 2451
                            },
                            {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "j14",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2461,
                                "end": 2464
                              },
                              "typeArguments": null,
                              "start": 2454,
                              "end": 2464
                            }
                          ],
                          "start": 2441,
                          "end": 2464
                        },
                        "start": 2439,
                        "end": 2464
                      },
                      "start": 2437,
                      "end": 2464
                    },
                    "init": {
                      "type": "TSNonNullExpression",
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 2467,
                        "end": 2471
                      },
                      "start": 2467,
                      "end": 2472
                    },
                    "definite": false,
                    "start": 2437,
                    "end": 2472
                  }
                ],
                "declare": false,
                "start": 2431,
                "end": 2473
              },
              {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "j0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2498,
                  "end": 2500
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "jS",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2509,
                  "end": 2511
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 2512,
                  "end": 2514
                },
                "abstract": false,
                "declare": false,
                "start": 2492,
                "end": 2514
              }
            ],
            "start": 2345,
            "end": 2518
          }
        ],
        "start": 2303,
        "end": 2520
      },
      "abstract": true,
      "declare": false,
      "start": 2284,
      "end": 2520
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2520
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
    "value": "A1",
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
    "value": "private",
    "start": 13,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 21,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 33,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 51,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 57,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 64,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 76,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 95,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 103,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "Cls1",
    "start": 109,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 115,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 122,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 127,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 134,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 139,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "Cls1",
    "start": 143,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 148,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 162,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 168,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 177,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "Cls1",
    "start": 185,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 203,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 209,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 216,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 228,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 233,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "class",
    "start": 246,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 252,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 259,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 267,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 279,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 284,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 298,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 306,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "Cls2",
    "start": 312,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 316,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 318,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 325,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 330,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 337,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 342,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "Cls2",
    "start": 346,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 351,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 365,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 371,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 380,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "Cls2",
    "start": 388,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 462,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 470,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 479,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "j1",
    "start": 485,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 488,
    "end": 489
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 492,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 500,
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
    "value": "...",
    "start": 512,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 515,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 521,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ";",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 531,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 539,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 548,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "j2",
    "start": 554,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 557,
    "end": 558
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 561,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 569,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 581,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 584,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 590,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ";",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 600,
    "end": 607
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 608,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "jS",
    "start": 614,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 616,
    "end": 617
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 618,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "j1",
    "start": 625,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 630,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "j2",
    "start": 637,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 641,
    "end": 648
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 649,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "j0",
    "start": 655,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 658,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "jS",
    "start": 666,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 682,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 691,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "j3",
    "start": 697,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 700,
    "end": 701
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 704,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 712,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 724,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 727,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 733,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 745,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 761,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 770,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "j4",
    "start": 776,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 779,
    "end": 780
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 787,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 795,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 807,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 810,
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
    "value": "any",
    "start": 816,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "{",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 832,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 842,
    "end": 843
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 852,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "jS",
    "start": 858,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 860,
    "end": 861
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 862,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "j3",
    "start": 869,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 872,
    "end": 873
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 874,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "j4",
    "start": 881,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 884,
    "end": 885
  },
  {
    "type": "Null",
    "value": "null",
    "start": 886,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 891,
    "end": 892
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 928,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "j0",
    "start": 934,
    "end": 936
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 937,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "jS",
    "start": 945,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 960,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 967,
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
    "value": "{",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 983,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 990,
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
    "value": "{",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 1027,
    "end": 1035
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1036,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "j5",
    "start": 1042,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1049,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1057,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1069,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1072,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1078,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 1090,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 1106,
    "end": 1114
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1115,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "j6",
    "start": 1121,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1132,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1140,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1152,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1155,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1161,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 1177,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1200,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "jS",
    "start": 1206,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1210,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "j5",
    "start": 1217,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1222,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "j6",
    "start": 1229,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1234,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1310,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "j0",
    "start": 1316,
    "end": 1318
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1319,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "jS",
    "start": 1327,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 1338,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 1357,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 1383,
    "end": 1391
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1392,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "j7",
    "start": 1398,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1405,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1413,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1425,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1430,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 1443,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 1459,
    "end": 1467
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1468,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "j8",
    "start": 1474,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1485,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1493,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1505,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1510,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 1527,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1547,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "jS",
    "start": 1553,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1557,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "j7",
    "start": 1564,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1569,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "j8",
    "start": 1576,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1581,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1614,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "j0",
    "start": 1620,
    "end": 1622
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1623,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "jS",
    "start": 1631,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 1646,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 1669,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 1713,
    "end": 1721
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1722,
    "end": 1727
  },
  {
    "type": "Identifier",
    "value": "j9",
    "start": 1728,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1735,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1743,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1755,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1760,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 1773,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 1789,
    "end": 1797
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1798,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "j10",
    "start": 1804,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1816,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1824,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1836,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1841,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 1858,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1881,
    "end": 1886
  },
  {
    "type": "Identifier",
    "value": "jS",
    "start": 1887,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1891,
    "end": 1897
  },
  {
    "type": "Identifier",
    "value": "j9",
    "start": 1898,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1903,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "j10",
    "start": 1910,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1916,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1941,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "j0",
    "start": 1947,
    "end": 1949
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1950,
    "end": 1957
  },
  {
    "type": "Identifier",
    "value": "jS",
    "start": 1958,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 1969,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 1988,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 2014,
    "end": 2022
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2023,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "j11",
    "start": 2029,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2037,
    "end": 2044
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2045,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2057,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2062,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2075,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 2088,
    "end": 2096
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2097,
    "end": 2102
  },
  {
    "type": "Identifier",
    "value": "j12",
    "start": 2103,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2115,
    "end": 2122
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2123,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2135,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2140,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2157,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2174,
    "end": 2179
  },
  {
    "type": "Identifier",
    "value": "jS",
    "start": 2180,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2184,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "j11",
    "start": 2191,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2197,
    "end": 2203
  },
  {
    "type": "Identifier",
    "value": "j12",
    "start": 2204,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2210,
    "end": 2214
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2240,
    "end": 2245
  },
  {
    "type": "Identifier",
    "value": "j0",
    "start": 2246,
    "end": 2248
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2249,
    "end": 2256
  },
  {
    "type": "Identifier",
    "value": "jS",
    "start": 2257,
    "end": 2259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 2284,
    "end": 2292
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2293,
    "end": 2298
  },
  {
    "type": "Identifier",
    "value": "j13",
    "start": 2299,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2307,
    "end": 2314
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2315,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2326,
    "end": 2327
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2327,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2332,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2345,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 2358,
    "end": 2366
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2367,
    "end": 2372
  },
  {
    "type": "Identifier",
    "value": "j14",
    "start": 2373,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2385,
    "end": 2392
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2393,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2405,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2410,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2431,
    "end": 2436
  },
  {
    "type": "Identifier",
    "value": "jS",
    "start": 2437,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2441,
    "end": 2447
  },
  {
    "type": "Identifier",
    "value": "j13",
    "start": 2448,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2454,
    "end": 2460
  },
  {
    "type": "Identifier",
    "value": "j14",
    "start": 2461,
    "end": 2464
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2467,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2492,
    "end": 2497
  },
  {
    "type": "Identifier",
    "value": "j0",
    "start": 2498,
    "end": 2500
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2501,
    "end": 2508
  },
  {
    "type": "Identifier",
    "value": "jS",
    "start": 2509,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2519,
    "end": 2520
  }
]
```

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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 24,
                  "end": 25
                },
                "init": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 28,
                  "end": 32
                },
                "definite": false,
                "start": 24,
                "end": 32
              }
            ],
            "declare": false,
            "start": 20,
            "end": 33
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 45
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 50,
                        "end": 51
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 50,
                        "end": 51
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 50,
                      "end": 51
                    }
                  ],
                  "start": 48,
                  "end": 53
                },
                "definite": false,
                "start": 42,
                "end": 53
              }
            ],
            "declare": false,
            "start": 38,
            "end": 54
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 159,
                  "end": 162
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 164
                },
                "optional": false,
                "computed": false,
                "start": 159,
                "end": 164
              },
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 167,
                "end": 172
              },
              "start": 159,
              "end": 172
            },
            "directive": null,
            "start": 159,
            "end": 173
          }
        ],
        "start": 14,
        "end": 175
      },
      "expression": false,
      "start": 0,
      "end": 175
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 186,
        "end": 188
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
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 209
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 213,
                  "end": 219
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 222,
                    "end": 227
                  },
                  "start": 222,
                  "end": 227
                }
              ],
              "start": 213,
              "end": 227
            },
            "declare": false,
            "start": 197,
            "end": 229
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ElementOrArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 253
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 256,
                    "end": 263
                  },
                  "typeArguments": null,
                  "start": 256,
                  "end": 263
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Element",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 266,
                      "end": 273
                    },
                    "typeArguments": null,
                    "start": 266,
                    "end": 273
                  },
                  "start": 266,
                  "end": 275
                }
              ],
              "start": 256,
              "end": 275
            },
            "declare": false,
            "start": 234,
            "end": 276
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
                  "name": "el",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Element",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 290,
                        "end": 297
                      },
                      "typeArguments": null,
                      "start": 290,
                      "end": 297
                    },
                    "start": 288,
                    "end": 297
                  },
                  "start": 286,
                  "end": 297
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 300,
                    "end": 304
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 308,
                    "end": 311
                  },
                  "start": 300,
                  "end": 311
                },
                "definite": false,
                "start": 286,
                "end": 311
              }
            ],
            "declare": false,
            "start": 282,
            "end": 312
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
                  "name": "arr",
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
                          "name": "Element",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 326,
                          "end": 333
                        },
                        "typeArguments": null,
                        "start": 326,
                        "end": 333
                      },
                      "start": 326,
                      "end": 335
                    },
                    "start": 324,
                    "end": 335
                  },
                  "start": 321,
                  "end": 335
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 338,
                    "end": 342
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 346,
                    "end": 349
                  },
                  "start": 338,
                  "end": 349
                },
                "definite": false,
                "start": 321,
                "end": 349
              }
            ],
            "declare": false,
            "start": 317,
            "end": 350
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
                  "name": "elOrA",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ElementOrArray",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 366,
                        "end": 380
                      },
                      "typeArguments": null,
                      "start": 366,
                      "end": 380
                    },
                    "start": 364,
                    "end": 380
                  },
                  "start": 359,
                  "end": 380
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 383,
                    "end": 387
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 391,
                    "end": 394
                  },
                  "start": 383,
                  "end": 394
                },
                "definite": false,
                "start": 359,
                "end": 394
              }
            ],
            "declare": false,
            "start": 355,
            "end": 395
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
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ElementOrArray",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 439,
                        "end": 453
                      },
                      "typeArguments": null,
                      "start": 439,
                      "end": 453
                    },
                    "start": 437,
                    "end": 453
                  },
                  "start": 435,
                  "end": 453
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "el",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 456,
                  "end": 458
                },
                "definite": false,
                "start": 435,
                "end": 458
              }
            ],
            "declare": false,
            "start": 431,
            "end": 459
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
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ElementOrArray",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 472,
                        "end": 486
                      },
                      "typeArguments": null,
                      "start": 472,
                      "end": 486
                    },
                    "start": 470,
                    "end": 486
                  },
                  "start": 468,
                  "end": 486
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 489,
                  "end": 492
                },
                "definite": false,
                "start": 468,
                "end": 492
              }
            ],
            "declare": false,
            "start": 464,
            "end": 493
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
                  "name": "a3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ElementOrArray",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 506,
                        "end": 520
                      },
                      "typeArguments": null,
                      "start": 506,
                      "end": 520
                    },
                    "start": 504,
                    "end": 520
                  },
                  "start": 502,
                  "end": 520
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "el",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 524,
                      "end": 526
                    }
                  ],
                  "start": 523,
                  "end": 527
                },
                "definite": false,
                "start": 502,
                "end": 527
              }
            ],
            "declare": false,
            "start": 498,
            "end": 528
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
                  "name": "a4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ElementOrArray",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 541,
                        "end": 555
                      },
                      "typeArguments": null,
                      "start": 541,
                      "end": 555
                    },
                    "start": 539,
                    "end": 555
                  },
                  "start": 537,
                  "end": 555
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 558,
                        "end": 563
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isArray",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 564,
                        "end": 571
                      },
                      "optional": false,
                      "computed": false,
                      "start": 558,
                      "end": 571
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "elOrA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 572,
                        "end": 577
                      }
                    ],
                    "optional": false,
                    "start": 558,
                    "end": 578
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "elOrA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 581,
                    "end": 586
                  },
                  "alternate": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "elOrA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 590,
                        "end": 595
                      }
                    ],
                    "start": 589,
                    "end": 596
                  },
                  "start": 558,
                  "end": 596
                },
                "definite": false,
                "start": 537,
                "end": 596
              }
            ],
            "declare": false,
            "start": 533,
            "end": 597
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
                  "name": "a5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ElementOrArray",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 663,
                        "end": 677
                      },
                      "typeArguments": null,
                      "start": 663,
                      "end": 677
                    },
                    "start": 661,
                    "end": 677
                  },
                  "start": 659,
                  "end": 677
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 684,
                              "end": 689
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "isArray",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 690,
                              "end": 697
                            },
                            "optional": false,
                            "computed": false,
                            "start": 684,
                            "end": 697
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "elOrA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 698,
                              "end": 703
                            }
                          ],
                          "optional": false,
                          "start": 684,
                          "end": 704
                        },
                        "consequent": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "elOrA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 707,
                          "end": 712
                        },
                        "alternate": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "elOrA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 716,
                              "end": 721
                            }
                          ],
                          "start": 715,
                          "end": 722
                        },
                        "start": 684,
                        "end": 722
                      },
                      "start": 681,
                      "end": 722
                    }
                  ],
                  "start": 680,
                  "end": 723
                },
                "definite": false,
                "start": 659,
                "end": 723
              }
            ],
            "declare": false,
            "start": 655,
            "end": 724
          }
        ],
        "start": 191,
        "end": 726
      },
      "expression": false,
      "start": 177,
      "end": 726
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 737,
        "end": 739
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
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "XY",
              "optional": false,
              "typeAnnotation": null,
              "start": 753,
              "end": 755
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "'x'",
                    "start": 758,
                    "end": 761
                  },
                  "start": 758,
                  "end": 761
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "y",
                    "raw": "'y'",
                    "start": 764,
                    "end": 767
                  },
                  "start": 764,
                  "end": 767
                }
              ],
              "start": 758,
              "end": 767
            },
            "declare": false,
            "start": 748,
            "end": 768
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "XY",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 782,
                        "end": 784
                      },
                      "typeArguments": null,
                      "start": 782,
                      "end": 784
                    },
                    "start": 780,
                    "end": 784
                  },
                  "start": 779,
                  "end": 784
                },
                "init": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "'x'",
                  "start": 787,
                  "end": 790
                },
                "definite": false,
                "start": 779,
                "end": 790
              }
            ],
            "declare": false,
            "start": 773,
            "end": 791
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 800,
                  "end": 802
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 805,
                  "end": 806
                },
                "definite": false,
                "start": 800,
                "end": 806
              }
            ],
            "declare": false,
            "start": 796,
            "end": 807
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null,
                "start": 887,
                "end": 889
              },
              "right": {
                "type": "Literal",
                "value": "y",
                "raw": "'y'",
                "start": 892,
                "end": 895
              },
              "start": 887,
              "end": 895
            },
            "directive": null,
            "start": 887,
            "end": 896
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
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "XY",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 940,
                        "end": 942
                      },
                      "typeArguments": null,
                      "start": 940,
                      "end": 942
                    },
                    "start": 938,
                    "end": 942
                  },
                  "start": 936,
                  "end": 942
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 945,
                  "end": 946
                },
                "definite": false,
                "start": 936,
                "end": 946
              }
            ],
            "declare": false,
            "start": 932,
            "end": 947
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null,
                "start": 952,
                "end": 954
              },
              "right": {
                "type": "Literal",
                "value": "y",
                "raw": "'y'",
                "start": 957,
                "end": 960
              },
              "start": 952,
              "end": 960
            },
            "directive": null,
            "start": 952,
            "end": 961
          }
        ],
        "start": 742,
        "end": 963
      },
      "expression": false,
      "start": 728,
      "end": 963
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 974,
        "end": 976
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 994,
                      "end": 1001
                    },
                    "start": 992,
                    "end": 1001
                  },
                  "start": 991,
                  "end": 1001
                },
                "init": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1004,
                  "end": 1008
                },
                "definite": false,
                "start": 991,
                "end": 1008
              }
            ],
            "declare": false,
            "start": 985,
            "end": 1009
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1018,
                  "end": 1020
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1023,
                  "end": 1024
                },
                "definite": false,
                "start": 1018,
                "end": 1024
              }
            ],
            "declare": false,
            "start": 1014,
            "end": 1025
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1124,
                "end": 1126
              },
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 1129,
                "end": 1134
              },
              "start": 1124,
              "end": 1134
            },
            "directive": null,
            "start": 1124,
            "end": 1135
          }
        ],
        "start": 979,
        "end": 1137
      },
      "expression": false,
      "start": 965,
      "end": 1137
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1148,
        "end": 1150
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
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "XY",
              "optional": false,
              "typeAnnotation": null,
              "start": 1164,
              "end": 1166
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "'x'",
                    "start": 1169,
                    "end": 1172
                  },
                  "start": 1169,
                  "end": 1172
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "y",
                    "raw": "'y'",
                    "start": 1175,
                    "end": 1178
                  },
                  "start": 1175,
                  "end": 1178
                }
              ],
              "start": 1169,
              "end": 1178
            },
            "declare": false,
            "start": 1159,
            "end": 1179
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
                  "name": "arr",
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
                          "name": "XY",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1193,
                          "end": 1195
                        },
                        "typeArguments": null,
                        "start": 1193,
                        "end": 1195
                      },
                      "start": 1193,
                      "end": 1197
                    },
                    "start": 1191,
                    "end": 1197
                  },
                  "start": 1188,
                  "end": 1197
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "x",
                      "raw": "'x'",
                      "start": 1201,
                      "end": 1204
                    }
                  ],
                  "start": 1200,
                  "end": 1205
                },
                "definite": false,
                "start": 1188,
                "end": 1205
              }
            ],
            "declare": false,
            "start": 1184,
            "end": 1206
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null,
                "start": 1211,
                "end": 1214
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "y",
                    "raw": "'y'",
                    "start": 1218,
                    "end": 1221
                  }
                ],
                "start": 1217,
                "end": 1222
              },
              "start": 1211,
              "end": 1222
            },
            "directive": null,
            "start": 1211,
            "end": 1223
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null,
                "start": 1283,
                "end": 1286
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "y",
                          "raw": "'y'",
                          "start": 1294,
                          "end": 1297
                        }
                      ],
                      "start": 1293,
                      "end": 1298
                    },
                    "start": 1290,
                    "end": 1298
                  }
                ],
                "start": 1289,
                "end": 1299
              },
              "start": 1283,
              "end": 1299
            },
            "directive": null,
            "start": 1283,
            "end": 1300
          }
        ],
        "start": 1153,
        "end": 1302
      },
      "expression": false,
      "start": 1139,
      "end": 1302
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1302
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
    "value": "let",
    "start": 20,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 26,
    "end": 27
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 28,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 38,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 42,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 159,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 165,
    "end": 166
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 167,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 177,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 186,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 197,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 202,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 220,
    "end": 221
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 222,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 234,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "ElementOrArray",
    "start": 239,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 256,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 266,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "let",
    "start": 282,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 286,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 290,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 298,
    "end": 299
  },
  {
    "type": "Null",
    "value": "null",
    "start": 300,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 305,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 308,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 317,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 321,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 326,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 336,
    "end": 337
  },
  {
    "type": "Null",
    "value": "null",
    "start": 338,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 343,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 346,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 355,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "elOrA",
    "start": 359,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "ElementOrArray",
    "start": 366,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 381,
    "end": 382
  },
  {
    "type": "Null",
    "value": "null",
    "start": 383,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 388,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 391,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 431,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 435,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "ElementOrArray",
    "start": 439,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 456,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 464,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 468,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "ElementOrArray",
    "start": 472,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 489,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 498,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 502,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "ElementOrArray",
    "start": 506,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 524,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "let",
    "start": 533,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 537,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "ElementOrArray",
    "start": 541,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 558,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "isArray",
    "start": 564,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "elOrA",
    "start": 572,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "elOrA",
    "start": 581,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "elOrA",
    "start": 590,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "let",
    "start": 655,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 659,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "ElementOrArray",
    "start": 663,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 681,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 684,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "isArray",
    "start": 690,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "elOrA",
    "start": 698,
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
    "value": "?",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "elOrA",
    "start": 707,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "elOrA",
    "start": 716,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 725,
    "end": 726
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 728,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 737,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 748,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "XY",
    "start": 753,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 756,
    "end": 757
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 758,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 762,
    "end": 763
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 764,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 767,
    "end": 768
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 773,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "XY",
    "start": 782,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 785,
    "end": 786
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 787,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 790,
    "end": 791
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 796,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 800,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 887,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 890,
    "end": 891
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 892,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 895,
    "end": 896
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 932,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 936,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "XY",
    "start": 940,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 952,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 955,
    "end": 956
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 957,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 962,
    "end": 963
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 965,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 974,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 979,
    "end": 980
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 985,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 994,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1004,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1014,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1018,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1124,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1129,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1139,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1148,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1150,
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
    "value": "{",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1159,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "XY",
    "start": 1164,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 1169,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 1175,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1184,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1188,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "XY",
    "start": 1193,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 1201,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1211,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 1218,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1283,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1290,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 1294,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1301,
    "end": 1302
  }
]
```

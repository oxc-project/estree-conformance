__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
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
                            "start": 45,
                            "end": 49
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 50,
                            "end": 54
                          },
                          "optional": false,
                          "computed": false,
                          "start": 45,
                          "end": 54
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 57,
                          "end": 66
                        },
                        "start": 45,
                        "end": 66
                      },
                      "directive": null,
                      "start": 45,
                      "end": 67
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
                            "name": "nullableRead",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 82,
                            "end": 94
                          },
                          "init": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 97,
                              "end": 101
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 102,
                              "end": 106
                            },
                            "optional": false,
                            "computed": false,
                            "start": 97,
                            "end": 106
                          },
                          "definite": false,
                          "start": 82,
                          "end": 106
                        }
                      ],
                      "declare": false,
                      "start": 76,
                      "end": 107
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
                            "name": "nullableCheck",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 155,
                            "end": 168
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nullableRead",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 171,
                            "end": 183
                          },
                          "definite": false,
                          "start": 155,
                          "end": 183
                        }
                      ],
                      "declare": false,
                      "start": 149,
                      "end": 184
                    }
                  ],
                  "start": 35,
                  "end": 190
                },
                "expression": false,
                "start": 32,
                "end": 190
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 21,
              "end": 190
            }
          ],
          "start": 15,
          "end": 192
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 192
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 192
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "nullableResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 221
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 229
                },
                "typeArguments": null,
                "arguments": [],
                "start": 224,
                "end": 231
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "base",
                "optional": false,
                "typeAnnotation": null,
                "start": 232,
                "end": 236
              },
              "optional": false,
              "computed": false,
              "start": 224,
              "end": 236
            },
            "definite": false,
            "start": 207,
            "end": 236
          }
        ],
        "declare": false,
        "start": 201,
        "end": 237
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 194,
      "end": 237
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "NullClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 261
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
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 276,
                      "end": 287
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
                                  "start": 300,
                                  "end": 304
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 305,
                                  "end": 309
                                },
                                "optional": false,
                                "computed": false,
                                "start": 300,
                                "end": 309
                              },
                              "right": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 312,
                                "end": 316
                              },
                              "start": 300,
                              "end": 316
                            },
                            "directive": null,
                            "start": 300,
                            "end": 317
                          }
                        ],
                        "start": 290,
                        "end": 323
                      },
                      "expression": false,
                      "start": 287,
                      "end": 323
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 276,
                    "end": 323
                  }
                ],
                "start": 270,
                "end": 325
              },
              "abstract": false,
              "declare": false,
              "start": 264,
              "end": 325
            },
            "definite": false,
            "start": 252,
            "end": 325
          }
        ],
        "declare": false,
        "start": 246,
        "end": 326
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 239,
      "end": 326
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "LaterWrite",
          "optional": false,
          "typeAnnotation": null,
          "start": 341,
          "end": 351
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
                "start": 358,
                "end": 369
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
                            "start": 382,
                            "end": 386
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 387,
                            "end": 391
                          },
                          "optional": false,
                          "computed": false,
                          "start": 382,
                          "end": 391
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 394,
                          "end": 403
                        },
                        "start": 382,
                        "end": 403
                      },
                      "directive": null,
                      "start": 382,
                      "end": 404
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
                            "start": 413,
                            "end": 417
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 418,
                            "end": 422
                          },
                          "optional": false,
                          "computed": false,
                          "start": 413,
                          "end": 422
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 425,
                          "end": 426
                        },
                        "start": 413,
                        "end": 426
                      },
                      "directive": null,
                      "start": 413,
                      "end": 427
                    }
                  ],
                  "start": 372,
                  "end": 433
                },
                "expression": false,
                "start": 369,
                "end": 433
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 358,
              "end": 433
            }
          ],
          "start": 352,
          "end": 435
        },
        "abstract": false,
        "declare": false,
        "start": 335,
        "end": 435
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 328,
      "end": 435
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BranchWrite",
          "optional": false,
          "typeAnnotation": null,
          "start": 450,
          "end": 461
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
                "start": 506,
                "end": 517
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
                    "name": "condition",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 518,
                    "end": 527
                  }
                ],
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
                            "start": 539,
                            "end": 543
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 544,
                            "end": 548
                          },
                          "optional": false,
                          "computed": false,
                          "start": 539,
                          "end": 548
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 551,
                          "end": 560
                        },
                        "start": 539,
                        "end": 560
                      },
                      "directive": null,
                      "start": 539,
                      "end": 561
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "condition",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 574,
                        "end": 583
                      },
                      "consequent": {
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
                                  "start": 599,
                                  "end": 603
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 604,
                                  "end": 608
                                },
                                "optional": false,
                                "computed": false,
                                "start": 599,
                                "end": 608
                              },
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 611,
                                "end": 612
                              },
                              "start": 599,
                              "end": 612
                            },
                            "directive": null,
                            "start": 599,
                            "end": 613
                          }
                        ],
                        "start": 585,
                        "end": 623
                      },
                      "alternate": {
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
                                  "start": 643,
                                  "end": 647
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 648,
                                  "end": 652
                                },
                                "optional": false,
                                "computed": false,
                                "start": 643,
                                "end": 652
                              },
                              "right": {
                                "type": "Literal",
                                "value": "value",
                                "raw": "\"value\"",
                                "start": 655,
                                "end": 662
                              },
                              "start": 643,
                              "end": 662
                            },
                            "directive": null,
                            "start": 643,
                            "end": 663
                          }
                        ],
                        "start": 629,
                        "end": 673
                      },
                      "start": 570,
                      "end": 673
                    }
                  ],
                  "start": 529,
                  "end": 679
                },
                "expression": false,
                "start": 517,
                "end": 679
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 506,
              "end": 679
            }
          ],
          "start": 462,
          "end": 681
        },
        "abstract": false,
        "declare": false,
        "start": 444,
        "end": 681
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 437,
      "end": 681
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Annotated",
          "optional": false,
          "typeAnnotation": null,
          "start": 696,
          "end": 705
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
                            "start": 778,
                            "end": 782
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 783,
                            "end": 787
                          },
                          "optional": false,
                          "computed": false,
                          "start": 778,
                          "end": 787
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 790,
                          "end": 799
                        },
                        "start": 778,
                        "end": 799
                      },
                      "directive": null,
                      "start": 778,
                      "end": 800
                    }
                  ],
                  "start": 726,
                  "end": 806
                },
                "expression": false,
                "start": 723,
                "end": 806
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 712,
              "end": 806
            }
          ],
          "start": 706,
          "end": 808
        },
        "abstract": false,
        "declare": false,
        "start": 690,
        "end": 808
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 683,
      "end": 808
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MutualNestedNullable",
          "optional": false,
          "typeAnnotation": null,
          "start": 823,
          "end": 843
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
                "start": 850,
                "end": 861
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
                            "start": 874,
                            "end": 878
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "first",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 879,
                            "end": 884
                          },
                          "optional": false,
                          "computed": false,
                          "start": 874,
                          "end": 884
                        },
                        "right": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 888,
                              "end": 892
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "second",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 893,
                              "end": 899
                            },
                            "optional": false,
                            "computed": false,
                            "start": 888,
                            "end": 899
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 902,
                            "end": 911
                          },
                          "start": 888,
                          "end": 911
                        },
                        "start": 874,
                        "end": 912
                      },
                      "directive": null,
                      "start": 874,
                      "end": 913
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
                            "start": 922,
                            "end": 926
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "second",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 927,
                            "end": 933
                          },
                          "optional": false,
                          "computed": false,
                          "start": 922,
                          "end": 933
                        },
                        "right": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 937,
                              "end": 941
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "first",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 942,
                              "end": 947
                            },
                            "optional": false,
                            "computed": false,
                            "start": 937,
                            "end": 947
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 950,
                            "end": 959
                          },
                          "start": 937,
                          "end": 959
                        },
                        "start": 922,
                        "end": 960
                      },
                      "directive": null,
                      "start": 922,
                      "end": 961
                    }
                  ],
                  "start": 864,
                  "end": 967
                },
                "expression": false,
                "start": 861,
                "end": 967
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 850,
              "end": 967
            }
          ],
          "start": 844,
          "end": 969
        },
        "abstract": false,
        "declare": false,
        "start": 817,
        "end": 969
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 810,
      "end": 969
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "NestedNullableExpression",
              "optional": false,
              "typeAnnotation": null,
              "start": 984,
              "end": 1008
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
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1023,
                      "end": 1034
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
                                  "start": 1047,
                                  "end": 1051
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "first",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1052,
                                  "end": 1057
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1047,
                                "end": 1057
                              },
                              "right": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1061,
                                    "end": 1065
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "second",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1066,
                                    "end": 1072
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1061,
                                  "end": 1072
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 1075,
                                  "end": 1079
                                },
                                "start": 1061,
                                "end": 1079
                              },
                              "start": 1047,
                              "end": 1080
                            },
                            "directive": null,
                            "start": 1047,
                            "end": 1081
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
                                  "start": 1090,
                                  "end": 1094
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "second",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1095,
                                  "end": 1101
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1090,
                                "end": 1101
                              },
                              "right": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1105,
                                    "end": 1109
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "first",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1110,
                                    "end": 1115
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1105,
                                  "end": 1115
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 1118,
                                  "end": 1122
                                },
                                "start": 1105,
                                "end": 1122
                              },
                              "start": 1090,
                              "end": 1123
                            },
                            "directive": null,
                            "start": 1090,
                            "end": 1124
                          }
                        ],
                        "start": 1037,
                        "end": 1130
                      },
                      "expression": false,
                      "start": 1034,
                      "end": 1130
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1023,
                    "end": 1130
                  }
                ],
                "start": 1017,
                "end": 1132
              },
              "abstract": false,
              "declare": false,
              "start": 1011,
              "end": 1132
            },
            "definite": false,
            "start": 984,
            "end": 1132
          }
        ],
        "declare": false,
        "start": 978,
        "end": 1133
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 971,
      "end": 1133
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "nestedNullableResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 1148,
              "end": 1168
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MutualNestedNullable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1175,
                  "end": 1195
                },
                "typeArguments": null,
                "arguments": [],
                "start": 1171,
                "end": 1197
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 1198,
                "end": 1203
              },
              "optional": false,
              "computed": false,
              "start": 1171,
              "end": 1203
            },
            "definite": false,
            "start": 1148,
            "end": 1203
          }
        ],
        "declare": false,
        "start": 1142,
        "end": 1204
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1135,
      "end": 1204
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "expressionNullableResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 1218,
              "end": 1242
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NestedNullableExpression",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1249,
                  "end": 1273
                },
                "typeArguments": null,
                "arguments": [],
                "start": 1245,
                "end": 1275
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": null,
                "start": 1276,
                "end": 1282
              },
              "optional": false,
              "computed": false,
              "start": 1245,
              "end": 1282
            },
            "definite": false,
            "start": 1218,
            "end": 1282
          }
        ],
        "declare": false,
        "start": 1212,
        "end": 1283
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1205,
      "end": 1283
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MutualNestedNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 1298,
          "end": 1316
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
                "start": 1323,
                "end": 1334
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
                            "start": 1347,
                            "end": 1351
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "first",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1352,
                            "end": 1357
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1347,
                          "end": 1357
                        },
                        "right": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1361,
                              "end": 1365
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "second",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1366,
                              "end": 1372
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1361,
                            "end": 1372
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1375,
                            "end": 1384
                          },
                          "start": 1361,
                          "end": 1384
                        },
                        "start": 1347,
                        "end": 1385
                      },
                      "directive": null,
                      "start": 1347,
                      "end": 1386
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
                            "start": 1395,
                            "end": 1399
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "second",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1400,
                            "end": 1406
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1395,
                          "end": 1406
                        },
                        "right": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1410,
                              "end": 1414
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "first",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1415,
                              "end": 1420
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1410,
                            "end": 1420
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1423,
                            "end": 1432
                          },
                          "start": 1410,
                          "end": 1432
                        },
                        "start": 1395,
                        "end": 1433
                      },
                      "directive": null,
                      "start": 1395,
                      "end": 1434
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
                            "start": 1443,
                            "end": 1447
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "first",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1448,
                            "end": 1453
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1443,
                          "end": 1453
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1456,
                          "end": 1457
                        },
                        "start": 1443,
                        "end": 1457
                      },
                      "directive": null,
                      "start": 1443,
                      "end": 1458
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
                            "start": 1467,
                            "end": 1471
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "second",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1472,
                            "end": 1478
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1467,
                          "end": 1478
                        },
                        "right": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 1481,
                          "end": 1482
                        },
                        "start": 1467,
                        "end": 1482
                      },
                      "directive": null,
                      "start": 1467,
                      "end": 1483
                    }
                  ],
                  "start": 1337,
                  "end": 1489
                },
                "expression": false,
                "start": 1334,
                "end": 1489
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1323,
              "end": 1489
            }
          ],
          "start": 1317,
          "end": 1491
        },
        "abstract": false,
        "declare": false,
        "start": 1292,
        "end": 1491
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1285,
      "end": 1491
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "nestedFirst",
              "optional": false,
              "typeAnnotation": null,
              "start": 1528,
              "end": 1539
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MutualNestedNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1546,
                  "end": 1564
                },
                "typeArguments": null,
                "arguments": [],
                "start": 1542,
                "end": 1566
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 1567,
                "end": 1572
              },
              "optional": false,
              "computed": false,
              "start": 1542,
              "end": 1572
            },
            "definite": false,
            "start": 1528,
            "end": 1572
          }
        ],
        "declare": false,
        "start": 1522,
        "end": 1573
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1515,
      "end": 1573
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "nestedSecond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1609,
              "end": 1621
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MutualNestedNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1628,
                  "end": 1646
                },
                "typeArguments": null,
                "arguments": [],
                "start": 1624,
                "end": 1648
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": null,
                "start": 1649,
                "end": 1655
              },
              "optional": false,
              "computed": false,
              "start": 1624,
              "end": 1655
            },
            "definite": false,
            "start": 1609,
            "end": 1655
          }
        ],
        "declare": false,
        "start": 1603,
        "end": 1656
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1596,
      "end": 1656
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidNestedString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1692,
              "end": 1711
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MutualNestedNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1718,
                  "end": 1736
                },
                "typeArguments": null,
                "arguments": [],
                "start": 1714,
                "end": 1738
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 1739,
                "end": 1744
              },
              "optional": false,
              "computed": false,
              "start": 1714,
              "end": 1744
            },
            "definite": false,
            "start": 1692,
            "end": 1744
          }
        ],
        "declare": false,
        "start": 1686,
        "end": 1745
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1679,
      "end": 1745
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AssignmentValues",
          "optional": false,
          "typeAnnotation": null,
          "start": 1760,
          "end": 1776
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
                "start": 1783,
                "end": 1794
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
                            "name": "initialValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1813,
                            "end": 1825
                          },
                          "init": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1829,
                                "end": 1833
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1834,
                                "end": 1838
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1829,
                              "end": 1838
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1841,
                              "end": 1850
                            },
                            "start": 1829,
                            "end": 1850
                          },
                          "definite": false,
                          "start": 1813,
                          "end": 1851
                        }
                      ],
                      "declare": false,
                      "start": 1807,
                      "end": 1852
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
                            "name": "initialRead",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1867,
                            "end": 1878
                          },
                          "init": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1881,
                              "end": 1885
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1886,
                              "end": 1890
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1881,
                            "end": 1890
                          },
                          "definite": false,
                          "start": 1867,
                          "end": 1890
                        }
                      ],
                      "declare": false,
                      "start": 1861,
                      "end": 1891
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
                            "name": "numberValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1906,
                            "end": 1917
                          },
                          "init": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1921,
                                "end": 1925
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1926,
                                "end": 1930
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1921,
                              "end": 1930
                            },
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 1933,
                              "end": 1934
                            },
                            "start": 1921,
                            "end": 1934
                          },
                          "definite": false,
                          "start": 1906,
                          "end": 1935
                        }
                      ],
                      "declare": false,
                      "start": 1900,
                      "end": 1936
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
                            "name": "stringValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1951,
                            "end": 1962
                          },
                          "init": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1966,
                                "end": 1970
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1971,
                                "end": 1975
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1966,
                              "end": 1975
                            },
                            "right": {
                              "type": "Literal",
                              "value": "value",
                              "raw": "\"value\"",
                              "start": 1978,
                              "end": 1985
                            },
                            "start": 1966,
                            "end": 1985
                          },
                          "definite": false,
                          "start": 1951,
                          "end": 1986
                        }
                      ],
                      "declare": false,
                      "start": 1945,
                      "end": 1987
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
                            "name": "finalRead",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2002,
                            "end": 2011
                          },
                          "init": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 2014,
                              "end": 2018
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2019,
                              "end": 2023
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2014,
                            "end": 2023
                          },
                          "definite": false,
                          "start": 2002,
                          "end": 2023
                        }
                      ],
                      "declare": false,
                      "start": 1996,
                      "end": 2024
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
                            "name": "initialCheck",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2072,
                            "end": 2084
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "initialValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2087,
                            "end": 2099
                          },
                          "definite": false,
                          "start": 2072,
                          "end": 2099
                        }
                      ],
                      "declare": false,
                      "start": 2066,
                      "end": 2100
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
                            "name": "initialReadCheck",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2148,
                            "end": 2164
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "initialRead",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2167,
                            "end": 2178
                          },
                          "definite": false,
                          "start": 2148,
                          "end": 2178
                        }
                      ],
                      "declare": false,
                      "start": 2142,
                      "end": 2179
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
                            "name": "numberCheck",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2224,
                            "end": 2235
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "numberValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2238,
                            "end": 2249
                          },
                          "definite": false,
                          "start": 2224,
                          "end": 2249
                        }
                      ],
                      "declare": false,
                      "start": 2218,
                      "end": 2250
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
                            "name": "stringCheck",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2295,
                            "end": 2306
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "stringValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2309,
                            "end": 2320
                          },
                          "definite": false,
                          "start": 2295,
                          "end": 2320
                        }
                      ],
                      "declare": false,
                      "start": 2289,
                      "end": 2321
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
                            "name": "finalReadCheck",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2366,
                            "end": 2380
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "finalRead",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2383,
                            "end": 2392
                          },
                          "definite": false,
                          "start": 2366,
                          "end": 2392
                        }
                      ],
                      "declare": false,
                      "start": 2360,
                      "end": 2393
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
                            "name": "invalidNumber",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2438,
                            "end": 2451
                          },
                          "init": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 2454,
                              "end": 2458
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2459,
                              "end": 2463
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2454,
                            "end": 2463
                          },
                          "definite": false,
                          "start": 2438,
                          "end": 2463
                        }
                      ],
                      "declare": false,
                      "start": 2432,
                      "end": 2464
                    }
                  ],
                  "start": 1797,
                  "end": 2470
                },
                "expression": false,
                "start": 1794,
                "end": 2470
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1783,
              "end": 2470
            }
          ],
          "start": 1777,
          "end": 2472
        },
        "abstract": false,
        "declare": false,
        "start": 1754,
        "end": 2472
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1747,
      "end": 2472
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reentrant",
          "optional": false,
          "typeAnnotation": null,
          "start": 2487,
          "end": 2496
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
                "start": 2503,
                "end": 2514
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
                            "start": 2527,
                            "end": 2531
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2532,
                            "end": 2536
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2527,
                          "end": 2536
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2539,
                          "end": 2548
                        },
                        "start": 2527,
                        "end": 2548
                      },
                      "directive": null,
                      "start": 2527,
                      "end": 2549
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
                            "start": 2558,
                            "end": 2562
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "read",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2563,
                            "end": 2567
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2558,
                          "end": 2567
                        },
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 2570,
                              "end": 2574
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getValue",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2575,
                              "end": 2583
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2570,
                            "end": 2583
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 2570,
                          "end": 2585
                        },
                        "start": 2558,
                        "end": 2585
                      },
                      "directive": null,
                      "start": 2558,
                      "end": 2586
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
                            "start": 2595,
                            "end": 2599
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2600,
                            "end": 2604
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2595,
                          "end": 2604
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 2607,
                          "end": 2608
                        },
                        "start": 2595,
                        "end": 2608
                      },
                      "directive": null,
                      "start": 2595,
                      "end": 2609
                    }
                  ],
                  "start": 2517,
                  "end": 2615
                },
                "expression": false,
                "start": 2514,
                "end": 2615
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2503,
              "end": 2615
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 2620,
                "end": 2628
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 2648,
                          "end": 2652
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2653,
                          "end": 2657
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2648,
                        "end": 2657
                      },
                      "start": 2641,
                      "end": 2658
                    }
                  ],
                  "start": 2631,
                  "end": 2664
                },
                "expression": false,
                "start": 2628,
                "end": 2664
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2620,
              "end": 2664
            }
          ],
          "start": 2497,
          "end": 2666
        },
        "abstract": false,
        "declare": false,
        "start": 2481,
        "end": 2666
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2474,
      "end": 2666
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "reentrantResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 2703,
              "end": 2718
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reentrant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2725,
                  "end": 2734
                },
                "typeArguments": null,
                "arguments": [],
                "start": 2721,
                "end": 2736
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "read",
                "optional": false,
                "typeAnnotation": null,
                "start": 2737,
                "end": 2741
              },
              "optional": false,
              "computed": false,
              "start": 2721,
              "end": 2741
            },
            "definite": false,
            "start": 2703,
            "end": 2741
          }
        ],
        "declare": false,
        "start": 2697,
        "end": 2742
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2690,
      "end": 2742
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidReentrantString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2778,
              "end": 2800
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reentrant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2807,
                  "end": 2816
                },
                "typeArguments": null,
                "arguments": [],
                "start": 2803,
                "end": 2818
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "read",
                "optional": false,
                "typeAnnotation": null,
                "start": 2819,
                "end": 2823
              },
              "optional": false,
              "computed": false,
              "start": 2803,
              "end": 2823
            },
            "definite": false,
            "start": 2778,
            "end": 2823
          }
        ],
        "declare": false,
        "start": 2772,
        "end": 2824
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2765,
      "end": 2824
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "finalValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 2861,
              "end": 2871
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AssignmentValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2878,
                  "end": 2894
                },
                "typeArguments": null,
                "arguments": [],
                "start": 2874,
                "end": 2896
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "base",
                "optional": false,
                "typeAnnotation": null,
                "start": 2897,
                "end": 2901
              },
              "optional": false,
              "computed": false,
              "start": 2874,
              "end": 2901
            },
            "definite": false,
            "start": 2861,
            "end": 2901
          }
        ],
        "declare": false,
        "start": 2855,
        "end": 2902
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2848,
      "end": 2902
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 2939,
              "end": 2950
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LaterWrite",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2957,
                  "end": 2967
                },
                "typeArguments": null,
                "arguments": [],
                "start": 2953,
                "end": 2969
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "base",
                "optional": false,
                "typeAnnotation": null,
                "start": 2970,
                "end": 2974
              },
              "optional": false,
              "computed": false,
              "start": 2953,
              "end": 2974
            },
            "definite": false,
            "start": 2939,
            "end": 2974
          }
        ],
        "declare": false,
        "start": 2933,
        "end": 2975
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2926,
      "end": 2975
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidString",
              "optional": false,
              "typeAnnotation": null,
              "start": 3011,
              "end": 3024
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LaterWrite",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3031,
                  "end": 3041
                },
                "typeArguments": null,
                "arguments": [],
                "start": 3027,
                "end": 3043
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "base",
                "optional": false,
                "typeAnnotation": null,
                "start": 3044,
                "end": 3048
              },
              "optional": false,
              "computed": false,
              "start": 3027,
              "end": 3048
            },
            "definite": false,
            "start": 3011,
            "end": 3048
          }
        ],
        "declare": false,
        "start": 3005,
        "end": 3049
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2998,
      "end": 3049
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "branchValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 3094,
              "end": 3105
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BranchWrite",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3112,
                  "end": 3123
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 3124,
                    "end": 3128
                  }
                ],
                "start": 3108,
                "end": 3129
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "base",
                "optional": false,
                "typeAnnotation": null,
                "start": 3130,
                "end": 3134
              },
              "optional": false,
              "computed": false,
              "start": 3108,
              "end": 3134
            },
            "definite": false,
            "start": 3094,
            "end": 3134
          }
        ],
        "declare": false,
        "start": 3088,
        "end": 3135
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3081,
      "end": 3135
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 3135
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
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
    "type": "Punctuator",
    "value": ")",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 45,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 50,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 57,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 76,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "nullableRead",
    "start": 82,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 97,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 102,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 149,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "nullableCheck",
    "start": 155,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "nullableRead",
    "start": 171,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 194,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 201,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "nullableResult",
    "start": 207,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 224,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 232,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 239,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 246,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "NullClass",
    "start": 252,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 262,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 264,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 276,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 300,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 305,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 310,
    "end": 311
  },
  {
    "type": "Null",
    "value": "null",
    "start": 312,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "export",
    "start": 328,
    "end": 334
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 335,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "LaterWrite",
    "start": 341,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 358,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 372,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 382,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 387,
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
    "value": "undefined",
    "start": 394,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 413,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 418,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 423,
    "end": 424
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 434,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 437,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 444,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "BranchWrite",
    "start": 450,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 506,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 518,
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
    "value": "{",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 539,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 544,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 551,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 560,
    "end": 561
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 570,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 574,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 585,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 599,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 604,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 609,
    "end": 610
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 622,
    "end": 623
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 624,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 629,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 643,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 648,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 653,
    "end": 654
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 655,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 680,
    "end": 681
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 683,
    "end": 689
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 690,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "Annotated",
    "start": 696,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 706,
    "end": 707
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
    "value": ")",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 726,
    "end": 727
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 778,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 783,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 790,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 807,
    "end": 808
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 810,
    "end": 816
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 817,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "MutualNestedNullable",
    "start": 823,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 850,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 864,
    "end": 865
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 874,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 879,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 887,
    "end": 888
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 888,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 893,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 902,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 912,
    "end": 913
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 922,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 927,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 936,
    "end": 937
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 937,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 942,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 950,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 968,
    "end": 969
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 971,
    "end": 977
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 978,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "NestedNullableExpression",
    "start": 984,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1011,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1023,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1047,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 1052,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1061,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 1066,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1075,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1090,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 1095,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1105,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 1110,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1118,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1129,
    "end": 1130
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
    "type": "Keyword",
    "value": "export",
    "start": 1135,
    "end": 1141
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1142,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "nestedNullableResult",
    "start": 1148,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1171,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "MutualNestedNullable",
    "start": 1175,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 1198,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1205,
    "end": 1211
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1212,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "expressionNullableResult",
    "start": 1218,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1245,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "NestedNullableExpression",
    "start": 1249,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 1276,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1285,
    "end": 1291
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1292,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "MutualNestedNumber",
    "start": 1298,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1323,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1347,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 1352,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1361,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 1366,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1375,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1395,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 1400,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1410,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 1415,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1423,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1443,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 1448,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1467,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 1472,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1515,
    "end": 1521
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1522,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "nestedFirst",
    "start": 1528,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1542,
    "end": 1545
  },
  {
    "type": "Identifier",
    "value": "MutualNestedNumber",
    "start": 1546,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 1567,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1596,
    "end": 1602
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1603,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "nestedSecond",
    "start": 1609,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1624,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "MutualNestedNumber",
    "start": 1628,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 1649,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1679,
    "end": 1685
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1686,
    "end": 1691
  },
  {
    "type": "Identifier",
    "value": "invalidNestedString",
    "start": 1692,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1714,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "MutualNestedNumber",
    "start": 1718,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 1739,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1747,
    "end": 1753
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1754,
    "end": 1759
  },
  {
    "type": "Identifier",
    "value": "AssignmentValues",
    "start": 1760,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1783,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1807,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "initialValue",
    "start": 1813,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1829,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 1834,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1841,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1861,
    "end": 1866
  },
  {
    "type": "Identifier",
    "value": "initialRead",
    "start": 1867,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1881,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 1886,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1900,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "numberValue",
    "start": 1906,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1921,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 1926,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1945,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "stringValue",
    "start": 1951,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1966,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 1971,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 1978,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1996,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "finalRead",
    "start": 2002,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2014,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 2019,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2066,
    "end": 2071
  },
  {
    "type": "Identifier",
    "value": "initialCheck",
    "start": 2072,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Identifier",
    "value": "initialValue",
    "start": 2087,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2142,
    "end": 2147
  },
  {
    "type": "Identifier",
    "value": "initialReadCheck",
    "start": 2148,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2165,
    "end": 2166
  },
  {
    "type": "Identifier",
    "value": "initialRead",
    "start": 2167,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2218,
    "end": 2223
  },
  {
    "type": "Identifier",
    "value": "numberCheck",
    "start": 2224,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Identifier",
    "value": "numberValue",
    "start": 2238,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2289,
    "end": 2294
  },
  {
    "type": "Identifier",
    "value": "stringCheck",
    "start": 2295,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Identifier",
    "value": "stringValue",
    "start": 2309,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2360,
    "end": 2365
  },
  {
    "type": "Identifier",
    "value": "finalReadCheck",
    "start": 2366,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "finalRead",
    "start": 2383,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2432,
    "end": 2437
  },
  {
    "type": "Identifier",
    "value": "invalidNumber",
    "start": 2438,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2454,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 2459,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2474,
    "end": 2480
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2481,
    "end": 2486
  },
  {
    "type": "Identifier",
    "value": "Reentrant",
    "start": 2487,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2503,
    "end": 2514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2527,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 2532,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2539,
    "end": 2548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2558,
    "end": 2562
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2562,
    "end": 2563
  },
  {
    "type": "Identifier",
    "value": "read",
    "start": 2563,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2570,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2574,
    "end": 2575
  },
  {
    "type": "Identifier",
    "value": "getValue",
    "start": 2575,
    "end": 2583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2595,
    "end": 2599
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 2600,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2605,
    "end": 2606
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2614,
    "end": 2615
  },
  {
    "type": "Identifier",
    "value": "getValue",
    "start": 2620,
    "end": 2628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2628,
    "end": 2629
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2629,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2641,
    "end": 2647
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2648,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 2653,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2663,
    "end": 2664
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2690,
    "end": 2696
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2697,
    "end": 2702
  },
  {
    "type": "Identifier",
    "value": "reentrantResult",
    "start": 2703,
    "end": 2718
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2721,
    "end": 2724
  },
  {
    "type": "Identifier",
    "value": "Reentrant",
    "start": 2725,
    "end": 2734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Identifier",
    "value": "read",
    "start": 2737,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2765,
    "end": 2771
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2772,
    "end": 2777
  },
  {
    "type": "Identifier",
    "value": "invalidReentrantString",
    "start": 2778,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2801,
    "end": 2802
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2803,
    "end": 2806
  },
  {
    "type": "Identifier",
    "value": "Reentrant",
    "start": 2807,
    "end": 2816
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2816,
    "end": 2817
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2817,
    "end": 2818
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2818,
    "end": 2819
  },
  {
    "type": "Identifier",
    "value": "read",
    "start": 2819,
    "end": 2823
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2823,
    "end": 2824
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2848,
    "end": 2854
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2855,
    "end": 2860
  },
  {
    "type": "Identifier",
    "value": "finalValue",
    "start": 2861,
    "end": 2871
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2874,
    "end": 2877
  },
  {
    "type": "Identifier",
    "value": "AssignmentValues",
    "start": 2878,
    "end": 2894
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2894,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2896,
    "end": 2897
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 2897,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2926,
    "end": 2932
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2933,
    "end": 2938
  },
  {
    "type": "Identifier",
    "value": "numberValue",
    "start": 2939,
    "end": 2950
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2951,
    "end": 2952
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2953,
    "end": 2956
  },
  {
    "type": "Identifier",
    "value": "LaterWrite",
    "start": 2957,
    "end": 2967
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 2970,
    "end": 2974
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2974,
    "end": 2975
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2998,
    "end": 3004
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3005,
    "end": 3010
  },
  {
    "type": "Identifier",
    "value": "invalidString",
    "start": 3011,
    "end": 3024
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3025,
    "end": 3026
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3027,
    "end": 3030
  },
  {
    "type": "Identifier",
    "value": "LaterWrite",
    "start": 3031,
    "end": 3041
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3042,
    "end": 3043
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3043,
    "end": 3044
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 3044,
    "end": 3048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3048,
    "end": 3049
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3081,
    "end": 3087
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3088,
    "end": 3093
  },
  {
    "type": "Identifier",
    "value": "branchValue",
    "start": 3094,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3108,
    "end": 3111
  },
  {
    "type": "Identifier",
    "value": "BranchWrite",
    "start": 3112,
    "end": 3123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3123,
    "end": 3124
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3124,
    "end": 3128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3129,
    "end": 3130
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 3130,
    "end": 3134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3134,
    "end": 3135
  }
]
```

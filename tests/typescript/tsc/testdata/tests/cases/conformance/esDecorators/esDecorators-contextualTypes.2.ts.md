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
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "boundMethodLogger",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 15,
                    "end": 32
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Yadda",
                      "raw": "\"Yadda\"",
                      "start": 33,
                      "end": 40
                    },
                    {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 52,
                      "end": 56
                    }
                  ],
                  "optional": false,
                  "start": 15,
                  "end": 57
                },
                "start": 14,
                "end": 57
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 65
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 78,
                          "end": 82
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fooHelper",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 83,
                          "end": 92
                        },
                        "optional": false,
                        "computed": false,
                        "start": 78,
                        "end": 92
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 78,
                      "end": 94
                    },
                    "directive": null,
                    "start": 78,
                    "end": 95
                  }
                ],
                "start": 68,
                "end": 101
              },
              "expression": false,
              "start": 65,
              "end": 101
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 101
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooHelper",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 116
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 129,
                          "end": 136
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 137,
                          "end": 140
                        },
                        "optional": false,
                        "computed": false,
                        "start": 129,
                        "end": 140
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Behold! The actual method implementation!",
                          "raw": "\"Behold! The actual method implementation!\"",
                          "start": 141,
                          "end": 184
                        }
                      ],
                      "optional": false,
                      "start": 129,
                      "end": 185
                    },
                    "directive": null,
                    "start": 129,
                    "end": 185
                  }
                ],
                "start": 119,
                "end": 191
              },
              "expression": false,
              "start": 116,
              "end": 191
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 107,
            "end": 191
          }
        ],
        "start": 8,
        "end": 193
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 193
    },
    {
      "type": "EmptyStatement",
      "start": 193,
      "end": 194
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 205
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 205
          },
          "exportKind": "value",
          "start": 204,
          "end": 205
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 195,
      "end": 208
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "boundMethodLogger",
        "optional": false,
        "typeAnnotation": null,
        "start": 219,
        "end": 236
      },
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
              "name": "This",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 241
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 237,
            "end": 241
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Args",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 247
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 256,
                "end": 259
              },
              "start": 256,
              "end": 261
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 243,
            "end": 261
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Return",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 269
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 263,
            "end": 269
          }
        ],
        "start": 236,
        "end": 270
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "source",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 279,
              "end": 285
            },
            "start": 277,
            "end": 285
          },
          "start": 271,
          "end": 285
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "bound",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 292
          },
          "right": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 295,
            "end": 299
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 287,
          "end": 299
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "loggedDecorator",
                "optional": false,
                "typeAnnotation": null,
                "start": 323,
                "end": 338
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "this",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "This",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 363,
                                "end": 367
                              },
                              "typeArguments": null,
                              "start": 363,
                              "end": 367
                            },
                            "start": 361,
                            "end": 367
                          },
                          "start": 357,
                          "end": 367
                        },
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 372,
                            "end": 376
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Args",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 378,
                                "end": 382
                              },
                              "typeArguments": null,
                              "start": 378,
                              "end": 382
                            },
                            "start": 376,
                            "end": 382
                          },
                          "value": null,
                          "start": 369,
                          "end": 382
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Return",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 387,
                            "end": 393
                          },
                          "typeArguments": null,
                          "start": 387,
                          "end": 393
                        },
                        "start": 384,
                        "end": 393
                      },
                      "start": 356,
                      "end": 393
                    },
                    "start": 354,
                    "end": 393
                  },
                  "start": 348,
                  "end": 393
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ClassMethodDecoratorContext",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 412,
                        "end": 439
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "This",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 440,
                              "end": 444
                            },
                            "typeArguments": null,
                            "start": 440,
                            "end": 444
                          },
                          {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "this",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "This",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 453,
                                      "end": 457
                                    },
                                    "typeArguments": null,
                                    "start": 453,
                                    "end": 457
                                  },
                                  "start": 451,
                                  "end": 457
                                },
                                "start": 447,
                                "end": 457
                              },
                              {
                                "type": "RestElement",
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 462,
                                  "end": 466
                                },
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Args",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 468,
                                      "end": 472
                                    },
                                    "typeArguments": null,
                                    "start": 468,
                                    "end": 472
                                  },
                                  "start": 466,
                                  "end": 472
                                },
                                "value": null,
                                "start": 459,
                                "end": 472
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Return",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 477,
                                  "end": 483
                                },
                                "typeArguments": null,
                                "start": 477,
                                "end": 483
                              },
                              "start": 474,
                              "end": 483
                            },
                            "start": 446,
                            "end": 483
                          }
                        ],
                        "start": 439,
                        "end": 484
                      },
                      "start": 412,
                      "end": 484
                    },
                    "start": 410,
                    "end": 484
                  },
                  "start": 403,
                  "end": 484
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "This",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 500,
                            "end": 504
                          },
                          "typeArguments": null,
                          "start": 500,
                          "end": 504
                        },
                        "start": 498,
                        "end": 504
                      },
                      "start": 494,
                      "end": 504
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 509,
                        "end": 513
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 515,
                            "end": 519
                          },
                          "typeArguments": null,
                          "start": 515,
                          "end": 519
                        },
                        "start": 513,
                        "end": 519
                      },
                      "value": null,
                      "start": 506,
                      "end": 519
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Return",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 524,
                        "end": 530
                      },
                      "typeArguments": null,
                      "start": 524,
                      "end": 530
                    },
                    "start": 521,
                    "end": 530
                  },
                  "start": 493,
                  "end": 530
                },
                "start": 490,
                "end": 531
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bound",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 547,
                      "end": 552
                    },
                    "consequent": {
                      "type": "BlockStatement",
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
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 568,
                                "end": 575
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "addInitializer",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 576,
                                "end": 590
                              },
                              "optional": false,
                              "computed": false,
                              "start": 568,
                              "end": 590
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
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
                                            "type": "TSAsExpression",
                                            "expression": {
                                              "type": "ThisExpression",
                                              "start": 622,
                                              "end": 626
                                            },
                                            "typeAnnotation": {
                                              "type": "TSAnyKeyword",
                                              "start": 630,
                                              "end": 633
                                            },
                                            "start": 622,
                                            "end": 633
                                          },
                                          "property": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "context",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 635,
                                              "end": 642
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "name",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 643,
                                              "end": 647
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 635,
                                            "end": 647
                                          },
                                          "optional": false,
                                          "computed": true,
                                          "start": 621,
                                          "end": 648
                                        },
                                        "right": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "TSAsExpression",
                                                "expression": {
                                                  "type": "ThisExpression",
                                                  "start": 652,
                                                  "end": 656
                                                },
                                                "typeAnnotation": {
                                                  "type": "TSAnyKeyword",
                                                  "start": 660,
                                                  "end": 663
                                                },
                                                "start": 652,
                                                "end": 663
                                              },
                                              "property": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "context",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 665,
                                                  "end": 672
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "name",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 673,
                                                  "end": 677
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 665,
                                                "end": 677
                                              },
                                              "optional": false,
                                              "computed": true,
                                              "start": 651,
                                              "end": 678
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "bind",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 679,
                                              "end": 683
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 651,
                                            "end": 683
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 684,
                                              "end": 688
                                            }
                                          ],
                                          "optional": false,
                                          "start": 651,
                                          "end": 689
                                        },
                                        "start": 621,
                                        "end": 689
                                      },
                                      "directive": null,
                                      "start": 621,
                                      "end": 690
                                    }
                                  ],
                                  "start": 603,
                                  "end": 704
                                },
                                "expression": false,
                                "start": 591,
                                "end": 704
                              }
                            ],
                            "optional": false,
                            "start": 568,
                            "end": 705
                          },
                          "directive": null,
                          "start": 568,
                          "end": 706
                        }
                      ],
                      "start": 554,
                      "end": 716
                    },
                    "alternate": null,
                    "start": 543,
                    "end": 716
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
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
                          "name": "this",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 743,
                          "end": 747
                        },
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 752,
                            "end": 756
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "value": null,
                          "start": 749,
                          "end": 756
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
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "console",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 772,
                                  "end": 779
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 780,
                                  "end": 783
                                },
                                "optional": false,
                                "computed": false,
                                "start": 772,
                                "end": 783
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "TemplateLiteral",
                                  "quasis": [
                                    {
                                      "type": "TemplateElement",
                                      "value": {
                                        "raw": "<",
                                        "cooked": "<"
                                      },
                                      "tail": false,
                                      "start": 784,
                                      "end": 788
                                    },
                                    {
                                      "type": "TemplateElement",
                                      "value": {
                                        "raw": ">: I'm logging stuff from ",
                                        "cooked": ">: I'm logging stuff from "
                                      },
                                      "tail": false,
                                      "start": 794,
                                      "end": 823
                                    },
                                    {
                                      "type": "TemplateElement",
                                      "value": {
                                        "raw": "!",
                                        "cooked": "!"
                                      },
                                      "tail": true,
                                      "start": 846,
                                      "end": 849
                                    }
                                  ],
                                  "expressions": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "source",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 788,
                                      "end": 794
                                    },
                                    {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "context",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 823,
                                            "end": 830
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "name",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 831,
                                            "end": 835
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 823,
                                          "end": 835
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "toString",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 836,
                                          "end": 844
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 823,
                                        "end": 844
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 823,
                                      "end": 846
                                    }
                                  ],
                                  "start": 784,
                                  "end": 849
                                }
                              ],
                              "optional": false,
                              "start": 772,
                              "end": 850
                            },
                            "directive": null,
                            "start": 772,
                            "end": 851
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "target",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 871,
                                  "end": 877
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "apply",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 878,
                                  "end": 883
                                },
                                "optional": false,
                                "computed": false,
                                "start": 871,
                                "end": 883
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ThisExpression",
                                  "start": 884,
                                  "end": 888
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 890,
                                  "end": 894
                                }
                              ],
                              "optional": false,
                              "start": 871,
                              "end": 895
                            },
                            "start": 864,
                            "end": 896
                          }
                        ],
                        "start": 758,
                        "end": 906
                      },
                      "expression": false,
                      "start": 733,
                      "end": 906
                    },
                    "start": 726,
                    "end": 906
                  }
                ],
                "start": 532,
                "end": 912
              },
              "expression": false,
              "start": 314,
              "end": 912
            },
            "start": 307,
            "end": 912
          }
        ],
        "start": 301,
        "end": 914
      },
      "expression": false,
      "start": 210,
      "end": 914
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 914
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
    "type": "Punctuator",
    "value": "@",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "boundMethodLogger",
    "start": 15,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "String",
    "value": "\"Yadda\"",
    "start": 33,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 40,
    "end": 41
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 52,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 62,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 78,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "fooHelper",
    "start": 83,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "fooHelper",
    "start": 107,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 129,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 137,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "String",
    "value": "\"Behold! The actual method implementation!\"",
    "start": 141,
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
    "value": "}",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "export",
    "start": 195,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 210,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "boundMethodLogger",
    "start": 219,
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
    "value": "This",
    "start": 237,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 243,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 248,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 256,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "Return",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 271,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 279,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "bound",
    "start": 287,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 293,
    "end": 294
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 295,
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
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 307,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 314,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "loggedDecorator",
    "start": 323,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 348,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 357,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "This",
    "start": 363,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 369,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 372,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 378,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 384,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "Return",
    "start": 387,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 403,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "ClassMethodDecoratorContext",
    "start": 412,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "This",
    "start": 440,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 447,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "This",
    "start": 453,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 459,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 462,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 468,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 474,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "Return",
    "start": 477,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 494,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "This",
    "start": 500,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 506,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 509,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 515,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 521,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "Return",
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
    "value": "if",
    "start": 543,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "bound",
    "start": 547,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 568,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "addInitializer",
    "start": 576,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 590,
    "end": 591
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 591,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 621,
    "end": 622
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 622,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 627,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 630,
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
    "value": "[",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 635,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 643,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 651,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 652,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 657,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 660,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 665,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 673,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 677,
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
    "value": "bind",
    "start": 679,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 683,
    "end": 684
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 684,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 715,
    "end": 716
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 726,
    "end": 732
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 733,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 743,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 749,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 752,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 772,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 780,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 783,
    "end": 784
  },
  {
    "type": "Template",
    "value": "`<${",
    "start": 784,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 788,
    "end": 794
  },
  {
    "type": "Template",
    "value": "}>: I'm logging stuff from ${",
    "start": 794,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 823,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 831,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 836,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 845,
    "end": 846
  },
  {
    "type": "Template",
    "value": "}!`",
    "start": 846,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 850,
    "end": 851
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 864,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 871,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 878,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 883,
    "end": 884
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 884,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 890,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 913,
    "end": 914
  }
]
```

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
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 14,
              "end": 17
            },
            "start": 13,
            "end": 17
          },
          "start": 12,
          "end": 17
        }
      ],
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
              "start": 27,
              "end": 28
            },
            "start": 20,
            "end": 29
          }
        ],
        "start": 19,
        "end": 30
      },
      "expression": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 39
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
              "start": 46,
              "end": 57
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
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 78,
                              "end": 81
                            },
                            "start": 77,
                            "end": 81
                          },
                          "start": 74,
                          "end": 81
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
                                  "name": "bar",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 117,
                                  "end": 120
                                },
                                "start": 110,
                                "end": 121
                              }
                            ],
                            "start": 96,
                            "end": 161
                          },
                          "expression": false,
                          "start": 85,
                          "end": 161
                        },
                        "definite": false,
                        "start": 74,
                        "end": 162
                      }
                    ],
                    "declare": false,
                    "start": 70,
                    "end": 163
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 176,
                          "end": 177
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 180,
                            "end": 182
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "f1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 183,
                                "end": 185
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "bar",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 186,
                                  "end": 189
                                }
                              ],
                              "optional": false,
                              "start": 183,
                              "end": 190
                            }
                          ],
                          "optional": false,
                          "start": 180,
                          "end": 191
                        },
                        "definite": false,
                        "start": 176,
                        "end": 191
                      }
                    ],
                    "declare": false,
                    "start": 172,
                    "end": 192
                  }
                ],
                "start": 60,
                "end": 198
              },
              "expression": false,
              "start": 57,
              "end": 198
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 46,
            "end": 198
          }
        ],
        "start": 40,
        "end": 203
      },
      "abstract": false,
      "declare": false,
      "start": 32,
      "end": 203
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Vector",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 217
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
              "name": "norm",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 235
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 238,
                        "end": 244
                      },
                      "typeArguments": null,
                      "start": 238,
                      "end": 244
                    },
                    "start": 237,
                    "end": 244
                  },
                  "start": 236,
                  "end": 244
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Vector",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 246,
                    "end": 252
                  },
                  "typeArguments": null,
                  "start": 246,
                  "end": 252
                },
                "start": 245,
                "end": 252
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 261,
                      "end": 265
                    },
                    "start": 254,
                    "end": 266
                  }
                ],
                "start": 253,
                "end": 267
              },
              "expression": false,
              "start": 235,
              "end": 267
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 224,
            "end": 267
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "minus",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 284
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 288,
                        "end": 294
                      },
                      "typeArguments": null,
                      "start": 288,
                      "end": 294
                    },
                    "start": 287,
                    "end": 294
                  },
                  "start": 285,
                  "end": 294
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 299,
                        "end": 305
                      },
                      "typeArguments": null,
                      "start": 299,
                      "end": 305
                    },
                    "start": 298,
                    "end": 305
                  },
                  "start": 296,
                  "end": 305
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Vector",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 307,
                    "end": 313
                  },
                  "typeArguments": null,
                  "start": 307,
                  "end": 313
                },
                "start": 306,
                "end": 313
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 322,
                      "end": 326
                    },
                    "start": 315,
                    "end": 327
                  }
                ],
                "start": 314,
                "end": 328
              },
              "expression": false,
              "start": 284,
              "end": 328
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 272,
            "end": 328
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "times",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 345
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 349,
                        "end": 355
                      },
                      "typeArguments": null,
                      "start": 349,
                      "end": 355
                    },
                    "start": 348,
                    "end": 355
                  },
                  "start": 346,
                  "end": 355
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 360,
                        "end": 366
                      },
                      "typeArguments": null,
                      "start": 360,
                      "end": 366
                    },
                    "start": 359,
                    "end": 366
                  },
                  "start": 357,
                  "end": 366
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Vector",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 368,
                    "end": 374
                  },
                  "typeArguments": null,
                  "start": 368,
                  "end": 374
                },
                "start": 367,
                "end": 374
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 383,
                      "end": 387
                    },
                    "start": 376,
                    "end": 388
                  }
                ],
                "start": 375,
                "end": 389
              },
              "expression": false,
              "start": 345,
              "end": 389
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 333,
            "end": 389
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "cross",
              "optional": false,
              "typeAnnotation": null,
              "start": 401,
              "end": 406
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 410,
                        "end": 416
                      },
                      "typeArguments": null,
                      "start": 410,
                      "end": 416
                    },
                    "start": 409,
                    "end": 416
                  },
                  "start": 407,
                  "end": 416
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 421,
                        "end": 427
                      },
                      "typeArguments": null,
                      "start": 421,
                      "end": 427
                    },
                    "start": 420,
                    "end": 427
                  },
                  "start": 418,
                  "end": 427
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Vector",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 429,
                    "end": 435
                  },
                  "typeArguments": null,
                  "start": 429,
                  "end": 435
                },
                "start": 428,
                "end": 435
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 444,
                      "end": 448
                    },
                    "start": 437,
                    "end": 449
                  }
                ],
                "start": 436,
                "end": 450
              },
              "expression": false,
              "start": 406,
              "end": 450
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 394,
            "end": 450
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
              "start": 456,
              "end": 467
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
                        "start": 478,
                        "end": 484
                      },
                      "start": 476,
                      "end": 484
                    },
                    "start": 475,
                    "end": 484
                  },
                  "readonly": false,
                  "static": false,
                  "start": 468,
                  "end": 484
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
                        "start": 512,
                        "end": 518
                      },
                      "start": 510,
                      "end": 518
                    },
                    "start": 509,
                    "end": 518
                  },
                  "readonly": false,
                  "static": false,
                  "start": 502,
                  "end": 518
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 546,
                        "end": 552
                      },
                      "start": 544,
                      "end": 552
                    },
                    "start": 543,
                    "end": 552
                  },
                  "readonly": false,
                  "static": false,
                  "start": 536,
                  "end": 552
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 554,
                "end": 562
              },
              "expression": false,
              "start": 467,
              "end": 562
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 456,
            "end": 562
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "dot",
              "optional": false,
              "typeAnnotation": null,
              "start": 575,
              "end": 578
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 582,
                        "end": 588
                      },
                      "typeArguments": null,
                      "start": 582,
                      "end": 588
                    },
                    "start": 581,
                    "end": 588
                  },
                  "start": 579,
                  "end": 588
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 593,
                        "end": 599
                      },
                      "typeArguments": null,
                      "start": 593,
                      "end": 599
                    },
                    "start": 592,
                    "end": 599
                  },
                  "start": 590,
                  "end": 599
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Vector",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 601,
                    "end": 607
                  },
                  "typeArguments": null,
                  "start": 601,
                  "end": 607
                },
                "start": 600,
                "end": 607
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 616,
                      "end": 620
                    },
                    "start": 609,
                    "end": 621
                  }
                ],
                "start": 608,
                "end": 622
              },
              "expression": false,
              "start": 578,
              "end": 622
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 568,
            "end": 622
          }
        ],
        "start": 218,
        "end": 629
      },
      "abstract": false,
      "declare": false,
      "start": 205,
      "end": 629
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Camera",
        "optional": false,
        "typeAnnotation": null,
        "start": 651,
        "end": 657
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
              "name": "forward",
              "optional": false,
              "typeAnnotation": null,
              "start": 671,
              "end": 678
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Vector",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 680,
                  "end": 686
                },
                "typeArguments": null,
                "start": 680,
                "end": 686
              },
              "start": 678,
              "end": 686
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 664,
            "end": 687
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "right",
              "optional": false,
              "typeAnnotation": null,
              "start": 699,
              "end": 704
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Vector",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 706,
                  "end": 712
                },
                "typeArguments": null,
                "start": 706,
                "end": 712
              },
              "start": 704,
              "end": 712
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 692,
            "end": 713
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "up",
              "optional": false,
              "typeAnnotation": null,
              "start": 725,
              "end": 727
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Vector",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 729,
                  "end": 735
                },
                "typeArguments": null,
                "start": 729,
                "end": 735
              },
              "start": 727,
              "end": 735
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 718,
            "end": 736
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
              "start": 741,
              "end": 752
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
                    "name": "pos",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Vector",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 765,
                          "end": 771
                        },
                        "typeArguments": null,
                        "start": 765,
                        "end": 771
                      },
                      "start": 763,
                      "end": 771
                    },
                    "start": 760,
                    "end": 771
                  },
                  "readonly": false,
                  "static": false,
                  "start": 753,
                  "end": 771
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "lookAt",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 781,
                        "end": 787
                      },
                      "typeArguments": null,
                      "start": 781,
                      "end": 787
                    },
                    "start": 779,
                    "end": 787
                  },
                  "start": 773,
                  "end": 787
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
                          "name": "down",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 804,
                          "end": 808
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Vector",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 815,
                            "end": 821
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0.0",
                              "start": 822,
                              "end": 825
                            },
                            {
                              "type": "UnaryExpression",
                              "operator": "-",
                              "argument": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1.0",
                                "start": 828,
                                "end": 831
                              },
                              "prefix": true,
                              "start": 827,
                              "end": 831
                            },
                            {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0.0",
                              "start": 833,
                              "end": 836
                            }
                          ],
                          "start": 811,
                          "end": 837
                        },
                        "definite": false,
                        "start": 804,
                        "end": 837
                      }
                    ],
                    "declare": false,
                    "start": 800,
                    "end": 838
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
                          "start": 847,
                          "end": 851
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forward",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 852,
                          "end": 859
                        },
                        "optional": false,
                        "computed": false,
                        "start": 847,
                        "end": 859
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Vector",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 862,
                            "end": 868
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "norm",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 869,
                            "end": 873
                          },
                          "optional": false,
                          "computed": false,
                          "start": 862,
                          "end": 873
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Vector",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 874,
                                "end": 880
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "minus",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 881,
                                "end": 886
                              },
                              "optional": false,
                              "computed": false,
                              "start": 874,
                              "end": 886
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "lookAt",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 887,
                                "end": 893
                              },
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 894,
                                  "end": 898
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "pos",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 899,
                                  "end": 902
                                },
                                "optional": false,
                                "computed": false,
                                "start": 894,
                                "end": 902
                              }
                            ],
                            "optional": false,
                            "start": 874,
                            "end": 903
                          }
                        ],
                        "optional": false,
                        "start": 862,
                        "end": 904
                      },
                      "start": 847,
                      "end": 904
                    },
                    "directive": null,
                    "start": 847,
                    "end": 905
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
                          "start": 914,
                          "end": 918
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "right",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 919,
                          "end": 924
                        },
                        "optional": false,
                        "computed": false,
                        "start": 914,
                        "end": 924
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Vector",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 927,
                            "end": 933
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "times",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 934,
                            "end": 939
                          },
                          "optional": false,
                          "computed": false,
                          "start": 927,
                          "end": 939
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "down",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 940,
                            "end": 944
                          },
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Vector",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 946,
                                "end": 952
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "norm",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 953,
                                "end": 957
                              },
                              "optional": false,
                              "computed": false,
                              "start": 946,
                              "end": 957
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Vector",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 958,
                                    "end": 964
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "cross",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 965,
                                    "end": 970
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 958,
                                  "end": 970
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 971,
                                      "end": 975
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "forward",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 976,
                                      "end": 983
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 971,
                                    "end": 983
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "down",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 985,
                                    "end": 989
                                  }
                                ],
                                "optional": false,
                                "start": 958,
                                "end": 990
                              }
                            ],
                            "optional": false,
                            "start": 946,
                            "end": 991
                          }
                        ],
                        "optional": false,
                        "start": 927,
                        "end": 992
                      },
                      "start": 914,
                      "end": 992
                    },
                    "directive": null,
                    "start": 914,
                    "end": 993
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
                          "start": 1002,
                          "end": 1006
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "up",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1007,
                          "end": 1009
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1002,
                        "end": 1009
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Vector",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1012,
                            "end": 1018
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "times",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1019,
                            "end": 1024
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1012,
                          "end": 1024
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "down",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1025,
                            "end": 1029
                          },
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Vector",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1031,
                                "end": 1037
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "norm",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1038,
                                "end": 1042
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1031,
                              "end": 1042
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Vector",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1043,
                                    "end": 1049
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "cross",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1050,
                                    "end": 1055
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1043,
                                  "end": 1055
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1056,
                                      "end": 1060
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "forward",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1061,
                                      "end": 1068
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1056,
                                    "end": 1068
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1070,
                                      "end": 1074
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "right",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1075,
                                      "end": 1080
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1070,
                                    "end": 1080
                                  }
                                ],
                                "optional": false,
                                "start": 1043,
                                "end": 1081
                              }
                            ],
                            "optional": false,
                            "start": 1031,
                            "end": 1082
                          }
                        ],
                        "optional": false,
                        "start": 1012,
                        "end": 1083
                      },
                      "start": 1002,
                      "end": 1083
                    },
                    "directive": null,
                    "start": 1002,
                    "end": 1084
                  }
                ],
                "start": 789,
                "end": 1094
              },
              "expression": false,
              "start": 752,
              "end": 1094
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 741,
            "end": 1094
          }
        ],
        "start": 658,
        "end": 1096
      },
      "abstract": false,
      "declare": false,
      "start": 645,
      "end": 1096
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1097
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
    "type": "Identifier",
    "value": "x",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 14,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 20,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 32,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 46,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 70,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 74,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 78,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 85,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 110,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 172,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Identifier",
    "value": "f1",
    "start": 180,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 183,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 186,
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
    "value": ")",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
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
    "value": "Vector",
    "start": 211,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 224,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "norm",
    "start": 231,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 238,
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
    "value": ":",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 246,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 253,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 254,
    "end": 260
  },
  {
    "type": "Null",
    "value": "null",
    "start": 261,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 272,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "minus",
    "start": 279,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 285,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 288,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 296,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 299,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 307,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 315,
    "end": 321
  },
  {
    "type": "Null",
    "value": "null",
    "start": 322,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 333,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "times",
    "start": 340,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 346,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 349,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 357,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 360,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 368,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 376,
    "end": 382
  },
  {
    "type": "Null",
    "value": "null",
    "start": 383,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 394,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "cross",
    "start": 401,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 407,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 410,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 418,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 421,
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
    "value": ":",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 429,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 437,
    "end": 443
  },
  {
    "type": "Null",
    "value": "null",
    "start": 444,
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
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 456,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 468,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 478,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 484,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 502,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 512,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 536,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 546,
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
    "type": "Punctuator",
    "value": "}",
    "start": 561,
    "end": 562
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 568,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "dot",
    "start": 575,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 579,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 582,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 590,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 593,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 601,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 608,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 609,
    "end": 615
  },
  {
    "type": "Null",
    "value": "null",
    "start": 616,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 645,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "Camera",
    "start": 651,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 664,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "forward",
    "start": 671,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 680,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 686,
    "end": 687
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 692,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "right",
    "start": 699,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 706,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 712,
    "end": 713
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 718,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "up",
    "start": 725,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 729,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 741,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 752,
    "end": 753
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 753,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "pos",
    "start": 760,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 765,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "lookAt",
    "start": 773,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 781,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 789,
    "end": 790
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 800,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "down",
    "start": 804,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 809,
    "end": 810
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 811,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 815,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 821,
    "end": 822
  },
  {
    "type": "Numeric",
    "value": "0.0",
    "start": 822,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 827,
    "end": 828
  },
  {
    "type": "Numeric",
    "value": "1.0",
    "start": 828,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 831,
    "end": 832
  },
  {
    "type": "Numeric",
    "value": "0.0",
    "start": 833,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 837,
    "end": 838
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 847,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "forward",
    "start": 852,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 862,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "norm",
    "start": 869,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 874,
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
    "value": "minus",
    "start": 881,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "lookAt",
    "start": 887,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 893,
    "end": 894
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 894,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "pos",
    "start": 899,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 904,
    "end": 905
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 914,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "right",
    "start": 919,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 927,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "times",
    "start": 934,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "down",
    "start": 940,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 946,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "norm",
    "start": 953,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 958,
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
    "value": "cross",
    "start": 965,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 970,
    "end": 971
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 971,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "forward",
    "start": 976,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "down",
    "start": 985,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": ";",
    "start": 992,
    "end": 993
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1002,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "up",
    "start": 1007,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 1012,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "times",
    "start": 1019,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "down",
    "start": 1025,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 1031,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "norm",
    "start": 1038,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 1043,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "cross",
    "start": 1050,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1056,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "forward",
    "start": 1061,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1070,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "right",
    "start": 1075,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1095,
    "end": 1096
  }
]
```

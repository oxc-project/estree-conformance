__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 76
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 78
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 77,
            "end": 78
          }
        ],
        "start": 76,
        "end": 79
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                    "name": "callback",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 92,
                    "end": 100
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "params",
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
                                "start": 111,
                                "end": 112
                              },
                              "typeArguments": null,
                              "start": 111,
                              "end": 112
                            },
                            "start": 109,
                            "end": 112
                          },
                          "start": 103,
                          "end": 112
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
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 127,
                                  "end": 133
                                },
                                "start": 125,
                                "end": 133
                              },
                              "start": 118,
                              "end": 133
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "params",
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
                                    "start": 143,
                                    "end": 144
                                  },
                                  "typeArguments": null,
                                  "start": 143,
                                  "end": 144
                                },
                                "start": 141,
                                "end": 144
                              },
                              "start": 135,
                              "end": 144
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 149,
                              "end": 155
                            },
                            "start": 146,
                            "end": 155
                          },
                          "start": 117,
                          "end": 155
                        },
                        "start": 114,
                        "end": 155
                      },
                      "start": 102,
                      "end": 155
                    },
                    "start": 100,
                    "end": 155
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 92,
                  "end": 156
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "unrelated",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 159,
                    "end": 168
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 177,
                              "end": 183
                            },
                            "start": 175,
                            "end": 183
                          },
                          "start": 172,
                          "end": 183
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 188,
                          "end": 192
                        },
                        "start": 185,
                        "end": 192
                      },
                      "start": 171,
                      "end": 192
                    },
                    "start": 169,
                    "end": 192
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 159,
                  "end": 193
                }
              ],
              "start": 88,
              "end": 195
            },
            "start": 86,
            "end": 195
          },
          "start": 80,
          "end": 195
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
              "name": "params",
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
                    "start": 207,
                    "end": 208
                  },
                  "typeArguments": null,
                  "start": 207,
                  "end": 208
                },
                "start": 205,
                "end": 208
              },
              "start": 199,
              "end": 208
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 213,
              "end": 219
            },
            "start": 210,
            "end": 219
          },
          "start": 198,
          "end": 219
        },
        "start": 196,
        "end": 219
      },
      "body": null,
      "expression": false,
      "start": 57,
      "end": 220
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
              "name": "result1",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 258
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 261,
                "end": 263
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "callback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 268,
                        "end": 276
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
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
                                "start": 279,
                                "end": 280
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 279,
                              "end": 280
                            }
                          ],
                          "start": 278,
                          "end": 282
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "params",
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
                                  "start": 291,
                                  "end": 292
                                },
                                "typeArguments": null,
                                "start": 291,
                                "end": 292
                              },
                              "start": 289,
                              "end": 292
                            },
                            "start": 283,
                            "end": 292
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 314,
                                        "end": 321
                                      },
                                      "start": 312,
                                      "end": 321
                                    },
                                    "start": 311,
                                    "end": 321
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 323,
                                    "end": 324
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "ConditionalExpression",
                                  "test": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 330,
                                    "end": 331
                                  },
                                  "consequent": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 334,
                                    "end": 335
                                  },
                                  "alternate": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 338,
                                    "end": 339
                                  },
                                  "start": 330,
                                  "end": 339
                                },
                                "id": null,
                                "generator": false,
                                "start": 310,
                                "end": 340
                              },
                              "start": 303,
                              "end": 341
                            }
                          ],
                          "start": 297,
                          "end": 345
                        },
                        "id": null,
                        "generator": false,
                        "start": 278,
                        "end": 345
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 268,
                      "end": 345
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "unrelated",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 349,
                        "end": 358
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 361,
                            "end": 362
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 367,
                          "end": 369
                        },
                        "id": null,
                        "generator": false,
                        "start": 360,
                        "end": 369
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 349,
                      "end": 369
                    }
                  ],
                  "start": 264,
                  "end": 372
                }
              ],
              "optional": false,
              "start": 261,
              "end": 373
            },
            "definite": false,
            "start": 251,
            "end": 373
          }
        ],
        "declare": false,
        "start": 245,
        "end": 374
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 238,
      "end": 374
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
              "name": "result2",
              "optional": false,
              "typeAnnotation": null,
              "start": 405,
              "end": 412
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 415,
                "end": 417
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "callback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 422,
                        "end": 430
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
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
                                "start": 433,
                                "end": 434
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 433,
                              "end": 434
                            }
                          ],
                          "start": 432,
                          "end": 436
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "params",
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
                                  "start": 445,
                                  "end": 446
                                },
                                "typeArguments": null,
                                "start": 445,
                                "end": 446
                              },
                              "start": 443,
                              "end": 446
                            },
                            "start": 437,
                            "end": 446
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 465,
                                    "end": 466
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 468,
                                    "end": 469
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 472,
                                    "end": 479
                                  },
                                  "start": 470,
                                  "end": 479
                                },
                                "body": {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true",
                                  "start": 483,
                                  "end": 487
                                },
                                "id": null,
                                "generator": false,
                                "start": 464,
                                "end": 487
                              },
                              "start": 457,
                              "end": 488
                            }
                          ],
                          "start": 451,
                          "end": 492
                        },
                        "id": null,
                        "generator": false,
                        "start": 432,
                        "end": 492
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 422,
                      "end": 492
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "unrelated",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 496,
                        "end": 505
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 508,
                            "end": 509
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 514,
                          "end": 516
                        },
                        "id": null,
                        "generator": false,
                        "start": 507,
                        "end": 516
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 496,
                      "end": 516
                    }
                  ],
                  "start": 418,
                  "end": 519
                }
              ],
              "optional": false,
              "start": 415,
              "end": 520
            },
            "definite": false,
            "start": 405,
            "end": 520
          }
        ],
        "declare": false,
        "start": 399,
        "end": 521
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 392,
      "end": 521
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
              "name": "result3",
              "optional": false,
              "typeAnnotation": null,
              "start": 552,
              "end": 559
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 562,
                "end": 564
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "callback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 569,
                        "end": 577
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
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
                                "start": 580,
                                "end": 581
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 580,
                              "end": 581
                            }
                          ],
                          "start": 579,
                          "end": 583
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "params",
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
                                  "start": 592,
                                  "end": 593
                                },
                                "typeArguments": null,
                                "start": 592,
                                "end": 593
                              },
                              "start": 590,
                              "end": 593
                            },
                            "start": 584,
                            "end": 593
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 612,
                                    "end": 613
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 615,
                                    "end": 616
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true",
                                  "start": 621,
                                  "end": 625
                                },
                                "id": null,
                                "generator": false,
                                "start": 611,
                                "end": 625
                              },
                              "start": 604,
                              "end": 626
                            }
                          ],
                          "start": 598,
                          "end": 630
                        },
                        "id": null,
                        "generator": false,
                        "start": 579,
                        "end": 630
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 569,
                      "end": 630
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "unrelated",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 634,
                        "end": 643
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 646,
                            "end": 647
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 652,
                          "end": 654
                        },
                        "id": null,
                        "generator": false,
                        "start": 645,
                        "end": 654
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 634,
                      "end": 654
                    }
                  ],
                  "start": 565,
                  "end": 657
                }
              ],
              "optional": false,
              "start": 562,
              "end": 658
            },
            "definite": false,
            "start": 552,
            "end": 658
          }
        ],
        "declare": false,
        "start": 546,
        "end": 659
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 539,
      "end": 659
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 678,
        "end": 681
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 682,
              "end": 683
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 682,
            "end": 683
          }
        ],
        "start": 681,
        "end": 684
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                    "name": "callback",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 697,
                    "end": 705
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "params",
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
                                "start": 716,
                                "end": 717
                              },
                              "typeArguments": null,
                              "start": 716,
                              "end": 717
                            },
                            "start": 714,
                            "end": 717
                          },
                          "start": 708,
                          "end": 717
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
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 732,
                                  "end": 738
                                },
                                "start": 730,
                                "end": 738
                              },
                              "start": 723,
                              "end": 738
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "params",
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
                                    "start": 748,
                                    "end": 749
                                  },
                                  "typeArguments": null,
                                  "start": 748,
                                  "end": 749
                                },
                                "start": 746,
                                "end": 749
                              },
                              "start": 740,
                              "end": 749
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 754,
                              "end": 760
                            },
                            "start": 751,
                            "end": 760
                          },
                          "start": 722,
                          "end": 760
                        },
                        "start": 719,
                        "end": 760
                      },
                      "start": 707,
                      "end": 760
                    },
                    "start": 705,
                    "end": 760
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 697,
                  "end": 761
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "unrelated",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 764,
                    "end": 773
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 782,
                              "end": 788
                            },
                            "start": 780,
                            "end": 788
                          },
                          "start": 777,
                          "end": 788
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 793,
                          "end": 797
                        },
                        "start": 790,
                        "end": 797
                      },
                      "start": 776,
                      "end": 797
                    },
                    "start": 774,
                    "end": 797
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 764,
                  "end": 798
                }
              ],
              "start": 693,
              "end": 800
            },
            "start": 691,
            "end": 800
          },
          "start": 685,
          "end": 800
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 803,
          "end": 806
        },
        "start": 801,
        "end": 806
      },
      "body": null,
      "expression": false,
      "start": 661,
      "end": 807
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
              "name": "result4",
              "optional": false,
              "typeAnnotation": null,
              "start": 838,
              "end": 845
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn2",
                "optional": false,
                "typeAnnotation": null,
                "start": 848,
                "end": 851
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "callback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 856,
                        "end": 864
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
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
                                "start": 867,
                                "end": 868
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 867,
                              "end": 868
                            }
                          ],
                          "start": 866,
                          "end": 870
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "params",
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
                                  "start": 879,
                                  "end": 880
                                },
                                "typeArguments": null,
                                "start": 879,
                                "end": 880
                              },
                              "start": 877,
                              "end": 880
                            },
                            "start": 871,
                            "end": 880
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 902,
                                        "end": 909
                                      },
                                      "start": 900,
                                      "end": 909
                                    },
                                    "start": 899,
                                    "end": 909
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 911,
                                    "end": 912
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "ConditionalExpression",
                                  "test": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 918,
                                    "end": 919
                                  },
                                  "consequent": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 922,
                                    "end": 923
                                  },
                                  "alternate": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 926,
                                    "end": 927
                                  },
                                  "start": 918,
                                  "end": 927
                                },
                                "id": null,
                                "generator": false,
                                "start": 898,
                                "end": 928
                              },
                              "start": 891,
                              "end": 929
                            }
                          ],
                          "start": 885,
                          "end": 933
                        },
                        "id": null,
                        "generator": false,
                        "start": 866,
                        "end": 933
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 856,
                      "end": 933
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "unrelated",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 937,
                        "end": 946
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 949,
                            "end": 950
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 955,
                          "end": 957
                        },
                        "id": null,
                        "generator": false,
                        "start": 948,
                        "end": 957
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 937,
                      "end": 957
                    }
                  ],
                  "start": 852,
                  "end": 960
                }
              ],
              "optional": false,
              "start": 848,
              "end": 961
            },
            "definite": false,
            "start": 838,
            "end": 961
          }
        ],
        "declare": false,
        "start": 832,
        "end": 962
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 825,
      "end": 962
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
              "name": "result5",
              "optional": false,
              "typeAnnotation": null,
              "start": 993,
              "end": 1000
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1003,
                "end": 1006
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "callback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1011,
                        "end": 1019
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
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
                                "start": 1022,
                                "end": 1023
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 1022,
                              "end": 1023
                            }
                          ],
                          "start": 1021,
                          "end": 1025
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "params",
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
                                  "start": 1034,
                                  "end": 1035
                                },
                                "typeArguments": null,
                                "start": 1034,
                                "end": 1035
                              },
                              "start": 1032,
                              "end": 1035
                            },
                            "start": 1026,
                            "end": 1035
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1054,
                                    "end": 1055
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1057,
                                    "end": 1058
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 1061,
                                    "end": 1068
                                  },
                                  "start": 1059,
                                  "end": 1068
                                },
                                "body": {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true",
                                  "start": 1072,
                                  "end": 1076
                                },
                                "id": null,
                                "generator": false,
                                "start": 1053,
                                "end": 1076
                              },
                              "start": 1046,
                              "end": 1077
                            }
                          ],
                          "start": 1040,
                          "end": 1081
                        },
                        "id": null,
                        "generator": false,
                        "start": 1021,
                        "end": 1081
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1011,
                      "end": 1081
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "unrelated",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1085,
                        "end": 1094
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1097,
                            "end": 1098
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 1103,
                          "end": 1105
                        },
                        "id": null,
                        "generator": false,
                        "start": 1096,
                        "end": 1105
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1085,
                      "end": 1105
                    }
                  ],
                  "start": 1007,
                  "end": 1108
                }
              ],
              "optional": false,
              "start": 1003,
              "end": 1109
            },
            "definite": false,
            "start": 993,
            "end": 1109
          }
        ],
        "declare": false,
        "start": 987,
        "end": 1110
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 980,
      "end": 1110
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
              "name": "result6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1141,
              "end": 1148
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1151,
                "end": 1154
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "callback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1159,
                        "end": 1167
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
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
                                "start": 1170,
                                "end": 1171
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 1170,
                              "end": 1171
                            }
                          ],
                          "start": 1169,
                          "end": 1173
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "params",
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
                                  "start": 1182,
                                  "end": 1183
                                },
                                "typeArguments": null,
                                "start": 1182,
                                "end": 1183
                              },
                              "start": 1180,
                              "end": 1183
                            },
                            "start": 1174,
                            "end": 1183
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1202,
                                    "end": 1203
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1205,
                                    "end": 1206
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true",
                                  "start": 1211,
                                  "end": 1215
                                },
                                "id": null,
                                "generator": false,
                                "start": 1201,
                                "end": 1215
                              },
                              "start": 1194,
                              "end": 1216
                            }
                          ],
                          "start": 1188,
                          "end": 1220
                        },
                        "id": null,
                        "generator": false,
                        "start": 1169,
                        "end": 1220
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1159,
                      "end": 1220
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "unrelated",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1224,
                        "end": 1233
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1236,
                            "end": 1237
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 1242,
                          "end": 1244
                        },
                        "id": null,
                        "generator": false,
                        "start": 1235,
                        "end": 1244
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1224,
                      "end": 1244
                    }
                  ],
                  "start": 1155,
                  "end": 1247
                }
              ],
              "optional": false,
              "start": 1151,
              "end": 1248
            },
            "definite": false,
            "start": 1141,
            "end": 1248
          }
        ],
        "declare": false,
        "start": 1135,
        "end": 1249
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1128,
      "end": 1249
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 1249
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 57,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 65,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 74,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 92,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 103,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 114,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 118,
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
    "value": "number",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 135,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 146,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 149,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "unrelated",
    "start": 159,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 172,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 177,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 185,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 188,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 199,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 210,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 238,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 245,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "result1",
    "start": 251,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 261,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 268,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 283,
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
    "value": "T",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 294,
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
    "start": 303,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 311,
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
    "value": "boolean",
    "start": 314,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 326,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 332,
    "end": 333
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "unrelated",
    "start": 349,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 364,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 392,
    "end": 398
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 399,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "result2",
    "start": 405,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 415,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 422,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "params",
    "start": 437,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 448,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 451,
    "end": 452
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 457,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": ":",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 472,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 480,
    "end": 482
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 483,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "unrelated",
    "start": 496,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 511,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 518,
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
    "value": ";",
    "start": 520,
    "end": 521
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 539,
    "end": 545
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 546,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "result3",
    "start": 552,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 562,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 569,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 584,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 595,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 598,
    "end": 599
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 604,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 618,
    "end": 620
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 621,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "unrelated",
    "start": 634,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 649,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 661,
    "end": 668
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 669,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 678,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 685,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 697,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 708,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 719,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 723,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 732,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 740,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 751,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 754,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "unrelated",
    "start": 764,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 777,
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
    "value": "string",
    "start": 782,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 790,
    "end": 792
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 793,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ":",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 803,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 806,
    "end": 807
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 825,
    "end": 831
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 832,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "result4",
    "start": 838,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 848,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 856,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 871,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 882,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 885,
    "end": 886
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 891,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 902,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 914,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 920,
    "end": 921
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 924,
    "end": 925
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "unrelated",
    "start": 937,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 952,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 961,
    "end": 962
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 980,
    "end": 986
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 987,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "result5",
    "start": 993,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 1003,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 1011,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 1026,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "=>",
    "start": 1037,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1046,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1061,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1069,
    "end": 1071
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1072,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "unrelated",
    "start": 1085,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "_",
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
    "value": "=>",
    "start": 1100,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1128,
    "end": 1134
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1135,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "result6",
    "start": 1141,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 1151,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 1159,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 1174,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1185,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1194,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1208,
    "end": 1210
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1211,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "unrelated",
    "start": 1224,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1239,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1248,
    "end": 1249
  }
]
```

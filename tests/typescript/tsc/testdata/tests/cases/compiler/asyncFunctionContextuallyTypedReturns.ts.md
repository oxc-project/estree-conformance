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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 18
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 27,
                      "end": 34
                    },
                    "start": 25,
                    "end": 34
                  },
                  "start": 24,
                  "end": 34
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 40,
                            "end": 41
                          },
                          "start": 40,
                          "end": 41
                        }
                      ],
                      "start": 39,
                      "end": 42
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PromiseLike",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 45,
                        "end": 56
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 58,
                                  "end": 59
                                },
                                "start": 58,
                                "end": 59
                              }
                            ],
                            "start": 57,
                            "end": 60
                          }
                        ],
                        "start": 56,
                        "end": 61
                      },
                      "start": 45,
                      "end": 61
                    }
                  ],
                  "start": 39,
                  "end": 61
                },
                "start": 36,
                "end": 61
              },
              "start": 23,
              "end": 61
            },
            "start": 21,
            "end": 61
          },
          "start": 19,
          "end": 61
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 64,
          "end": 68
        },
        "start": 62,
        "end": 68
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 69
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 70,
          "end": 71
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 73
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 78
              },
              "consequent": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 82,
                    "end": 83
                  }
                ],
                "start": 81,
                "end": 84
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 87,
                    "end": 94
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 95,
                    "end": 101
                  },
                  "optional": false,
                  "computed": false,
                  "start": 87,
                  "end": 101
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 87,
                "end": 103
              },
              "start": 77,
              "end": 103
            },
            "id": null,
            "generator": false,
            "start": 72,
            "end": 103
          }
        ],
        "optional": false,
        "start": 70,
        "end": 104
      },
      "directive": null,
      "start": 70,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 106,
          "end": 107
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 115
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 120
              },
              "consequent": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 124,
                    "end": 125
                  }
                ],
                "start": 123,
                "end": 126
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 129,
                    "end": 136
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 137,
                    "end": 143
                  },
                  "optional": false,
                  "computed": false,
                  "start": 129,
                  "end": 143
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 129,
                "end": 145
              },
              "start": 119,
              "end": 145
            },
            "id": null,
            "generator": false,
            "start": 108,
            "end": 145
          }
        ],
        "optional": false,
        "start": 106,
        "end": 146
      },
      "directive": null,
      "start": 106,
      "end": 147
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 166,
        "end": 167
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 176,
                      "end": 183
                    },
                    "start": 174,
                    "end": 183
                  },
                  "start": 173,
                  "end": 183
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "contextuallyTypable",
                        "raw": "\"contextuallyTypable\"",
                        "start": 188,
                        "end": 209
                      },
                      "start": 188,
                      "end": 209
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PromiseLike",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 212,
                        "end": 223
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "contextuallyTypable",
                              "raw": "\"contextuallyTypable\"",
                              "start": 224,
                              "end": 245
                            },
                            "start": 224,
                            "end": 245
                          }
                        ],
                        "start": 223,
                        "end": 246
                      },
                      "start": 212,
                      "end": 246
                    }
                  ],
                  "start": 188,
                  "end": 246
                },
                "start": 185,
                "end": 246
              },
              "start": 172,
              "end": 246
            },
            "start": 170,
            "end": 246
          },
          "start": 168,
          "end": 246
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 249,
          "end": 253
        },
        "start": 247,
        "end": 253
      },
      "body": null,
      "expression": false,
      "start": 149,
      "end": 254
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 255,
          "end": 256
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 258
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 262,
                "end": 263
              },
              "consequent": {
                "type": "Literal",
                "value": "contextuallyTypable",
                "raw": "\"contextuallyTypable\"",
                "start": 266,
                "end": 287
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 290,
                    "end": 297
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 298,
                    "end": 304
                  },
                  "optional": false,
                  "computed": false,
                  "start": 290,
                  "end": 304
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 290,
                "end": 306
              },
              "start": 262,
              "end": 306
            },
            "id": null,
            "generator": false,
            "start": 257,
            "end": 306
          }
        ],
        "optional": false,
        "start": 255,
        "end": 307
      },
      "directive": null,
      "start": 255,
      "end": 308
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 309,
          "end": 310
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 317,
                "end": 318
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 322,
                "end": 323
              },
              "consequent": {
                "type": "Literal",
                "value": "contextuallyTypable",
                "raw": "\"contextuallyTypable\"",
                "start": 326,
                "end": 347
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 350,
                    "end": 357
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 358,
                    "end": 364
                  },
                  "optional": false,
                  "computed": false,
                  "start": 350,
                  "end": 364
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 350,
                "end": 366
              },
              "start": 322,
              "end": 366
            },
            "id": null,
            "generator": false,
            "start": 311,
            "end": 366
          }
        ],
        "optional": false,
        "start": 309,
        "end": 367
      },
      "directive": null,
      "start": 309,
      "end": 368
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyCallback",
        "optional": false,
        "typeAnnotation": null,
        "start": 375,
        "end": 385
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 396,
                "end": 402
              },
              "start": 394,
              "end": 402
            },
            "start": 389,
            "end": 402
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 407,
            "end": 411
          },
          "start": 404,
          "end": 411
        },
        "start": 388,
        "end": 411
      },
      "declare": false,
      "start": 370,
      "end": 412
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 430,
        "end": 431
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 440,
                      "end": 447
                    },
                    "start": 438,
                    "end": 447
                  },
                  "start": 437,
                  "end": 447
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyCallback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 452,
                        "end": 462
                      },
                      "typeArguments": null,
                      "start": 452,
                      "end": 462
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PromiseLike",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 465,
                        "end": 476
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "MyCallback",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 477,
                              "end": 487
                            },
                            "typeArguments": null,
                            "start": 477,
                            "end": 487
                          }
                        ],
                        "start": 476,
                        "end": 488
                      },
                      "start": 465,
                      "end": 488
                    }
                  ],
                  "start": 452,
                  "end": 488
                },
                "start": 449,
                "end": 488
              },
              "start": 436,
              "end": 488
            },
            "start": 434,
            "end": 488
          },
          "start": 432,
          "end": 488
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 491,
          "end": 495
        },
        "start": 489,
        "end": 495
      },
      "body": null,
      "expression": false,
      "start": 413,
      "end": 496
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "h",
          "optional": false,
          "typeAnnotation": null,
          "start": 497,
          "end": 498
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 499,
                "end": 500
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 504,
                "end": 505
              },
              "consequent": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "abc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 509,
                    "end": 512
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 517,
                  "end": 520
                },
                "id": null,
                "generator": false,
                "start": 508,
                "end": 520
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 523,
                    "end": 530
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 531,
                    "end": 537
                  },
                  "optional": false,
                  "computed": false,
                  "start": 523,
                  "end": 537
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 523,
                "end": 539
              },
              "start": 504,
              "end": 539
            },
            "id": null,
            "generator": false,
            "start": 499,
            "end": 539
          }
        ],
        "optional": false,
        "start": 497,
        "end": 540
      },
      "directive": null,
      "start": 497,
      "end": 541
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "h",
          "optional": false,
          "typeAnnotation": null,
          "start": 542,
          "end": 543
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 550,
                "end": 551
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 555,
                "end": 556
              },
              "consequent": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "def",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 560,
                    "end": 563
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 568,
                  "end": 571
                },
                "id": null,
                "generator": false,
                "start": 559,
                "end": 571
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 574,
                    "end": 581
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 582,
                    "end": 588
                  },
                  "optional": false,
                  "computed": false,
                  "start": 574,
                  "end": 588
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 574,
                "end": 590
              },
              "start": 555,
              "end": 590
            },
            "id": null,
            "generator": false,
            "start": 544,
            "end": 590
          }
        ],
        "optional": false,
        "start": 542,
        "end": 591
      },
      "directive": null,
      "start": 542,
      "end": 592
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
            "name": "increment",
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
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 641,
                        "end": 647
                      },
                      "start": 639,
                      "end": 647
                    },
                    "start": 636,
                    "end": 647
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 656,
                        "end": 662
                      },
                      "start": 654,
                      "end": 662
                    },
                    "start": 651,
                    "end": 662
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 668,
                          "end": 675
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSFunctionType",
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSStringKeyword",
                                          "start": 681,
                                          "end": 687
                                        },
                                        "start": 679,
                                        "end": 687
                                      },
                                      "start": 678,
                                      "end": 687
                                    }
                                  ],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 692,
                                      "end": 695
                                    },
                                    "start": 689,
                                    "end": 695
                                  },
                                  "start": 677,
                                  "end": 695
                                },
                                {
                                  "type": "TSStringKeyword",
                                  "start": 699,
                                  "end": 705
                                }
                              ],
                              "start": 676,
                              "end": 705
                            }
                          ],
                          "start": 675,
                          "end": 706
                        },
                        "start": 668,
                        "end": 706
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 709,
                        "end": 715
                      }
                    ],
                    "start": 668,
                    "end": 715
                  },
                  "start": 665,
                  "end": 715
                },
                "start": 632,
                "end": 715
              },
              "start": 630,
              "end": 715
            },
            "start": 621,
            "end": 715
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 725,
                "end": 728
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 730,
                "end": 733
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
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 749,
                        "end": 750
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 767,
                              "end": 768
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 769,
                              "end": 775
                            },
                            "optional": false,
                            "computed": false,
                            "start": 767,
                            "end": 775
                          },
                          "start": 760,
                          "end": 775
                        }
                      ],
                      "start": 754,
                      "end": 779
                    },
                    "id": null,
                    "generator": false,
                    "start": 749,
                    "end": 779
                  },
                  "start": 742,
                  "end": 779
                }
              ],
              "start": 738,
              "end": 781
            },
            "id": null,
            "generator": false,
            "start": 718,
            "end": 781
          },
          "definite": false,
          "start": 621,
          "end": 781
        }
      ],
      "declare": false,
      "start": 615,
      "end": 781
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
            "name": "increment2",
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
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 810,
                        "end": 816
                      },
                      "start": 808,
                      "end": 816
                    },
                    "start": 805,
                    "end": 816
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 825,
                        "end": 831
                      },
                      "start": 823,
                      "end": 831
                    },
                    "start": 820,
                    "end": 831
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 837,
                      "end": 844
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 850,
                                      "end": 856
                                    },
                                    "start": 848,
                                    "end": 856
                                  },
                                  "start": 847,
                                  "end": 856
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 861,
                                  "end": 864
                                },
                                "start": 858,
                                "end": 864
                              },
                              "start": 846,
                              "end": 864
                            },
                            {
                              "type": "TSStringKeyword",
                              "start": 868,
                              "end": 874
                            }
                          ],
                          "start": 845,
                          "end": 874
                        }
                      ],
                      "start": 844,
                      "end": 875
                    },
                    "start": 837,
                    "end": 875
                  },
                  "start": 834,
                  "end": 875
                },
                "start": 801,
                "end": 875
              },
              "start": 799,
              "end": 875
            },
            "start": 789,
            "end": 875
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 885,
                "end": 888
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 890,
                "end": 893
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
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 909,
                        "end": 910
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 927,
                              "end": 928
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 929,
                              "end": 935
                            },
                            "optional": false,
                            "computed": false,
                            "start": 927,
                            "end": 935
                          },
                          "start": 920,
                          "end": 935
                        }
                      ],
                      "start": 914,
                      "end": 939
                    },
                    "id": null,
                    "generator": false,
                    "start": 909,
                    "end": 939
                  },
                  "start": 902,
                  "end": 939
                }
              ],
              "start": 898,
              "end": 941
            },
            "id": null,
            "generator": false,
            "start": 878,
            "end": 941
          },
          "definite": false,
          "start": 789,
          "end": 941
        }
      ],
      "declare": false,
      "start": 783,
      "end": 941
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 941
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 19,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 27,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 36,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 39,
    "end": 40
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "PromiseLike",
    "start": 45,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 57,
    "end": 58
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 64,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 74,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 81,
    "end": 82
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 87,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 95,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 108,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 116,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 123,
    "end": 124
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "Promise",
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
    "value": "reject",
    "start": 137,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ")",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 149,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 157,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 168,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 176,
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
    "type": "String",
    "value": "\"contextuallyTypable\"",
    "start": 188,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "PromiseLike",
    "start": 212,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 223,
    "end": 224
  },
  {
    "type": "String",
    "value": "\"contextuallyTypable\"",
    "start": 224,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 249,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 259,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 264,
    "end": 265
  },
  {
    "type": "String",
    "value": "\"contextuallyTypable\"",
    "start": 266,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 290,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 298,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
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
    "value": ")",
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
    "type": "Identifier",
    "value": "g",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 311,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 319,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 324,
    "end": 325
  },
  {
    "type": "String",
    "value": "\"contextuallyTypable\"",
    "start": 326,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 350,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 358,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 365,
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
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 370,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "MyCallback",
    "start": 375,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 389,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 396,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 404,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 407,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 413,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 421,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 432,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 440,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 449,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "MyCallback",
    "start": 452,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "PromiseLike",
    "start": 465,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "MyCallback",
    "start": 477,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 491,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 501,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 509,
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
    "value": "=>",
    "start": 514,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 523,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 531,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 544,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 552,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 560,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 565,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 574,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 582,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 591,
    "end": 592
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 615,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "increment",
    "start": 621,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 636,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 641,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 651,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 656,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 665,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 668,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 681,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 689,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 692,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 699,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 709,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 718,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 725,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 730,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 735,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 738,
    "end": 739
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 742,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": "{",
    "start": 754,
    "end": 755
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 760,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 769,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 780,
    "end": 781
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 783,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "increment2",
    "start": 789,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 805,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 810,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 820,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 825,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 834,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 837,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "s",
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
    "value": "string",
    "start": 850,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 858,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 861,
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
    "value": "|",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 868,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 878,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 885,
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
    "value": "str",
    "start": 890,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 895,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 898,
    "end": 899
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 902,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 911,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 914,
    "end": 915
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 920,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 929,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 940,
    "end": 941
  }
]
```
